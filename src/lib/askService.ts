import Anthropic from '@anthropic-ai/sdk'
import { NOTES } from '../data/notes'
import type { Note } from '../data/notes'

// ---------------------------------------------------------------------------
// Anthropic client — browser-side (personal/internal tool only)
// ---------------------------------------------------------------------------
const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY ?? '',
  dangerouslyAllowBrowser: true,
})

// ---------------------------------------------------------------------------
// Relevance scoring — pick the top N notes for a given query
// ---------------------------------------------------------------------------
export function getRelevantNotes(query: string, topN = 6): Note[] {
  const words = query
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2)

  if (words.length === 0) return NOTES.slice(0, topN)

  const scored = NOTES.map(note => {
    const haystack = (note.body + ' ' + note.title + ' ' + note.tags.join(' ')).toLowerCase()
    const score = words.reduce((acc, w) => {
      // count occurrences
      let count = 0
      let idx = 0
      while ((idx = haystack.indexOf(w, idx)) !== -1) { count++; idx++ }
      return acc + count
    }, 0)
    return { note, score }
  })

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .filter(s => s.score > 0)
    .map(s => s.note)
}

// ---------------------------------------------------------------------------
// Flatten a note into a compact text block for the system prompt
// ---------------------------------------------------------------------------
function noteToText(note: Note): string {
  const lines: string[] = [`## ${note.title}`, note.subtitle, '']

  for (const block of note.content) {
    if (block.type === 'heading') {
      lines.push(block.level === 2 ? `### ${block.text}` : `#### ${block.text}`)
    } else if (block.type === 'para') {
      lines.push(block.text)
    } else if (block.type === 'list') {
      block.items.forEach(item => lines.push(`- ${item}`))
    } else if (block.type === 'callout') {
      lines.push(`[${block.variant.toUpperCase()}] ${block.title}`)
      block.items.forEach(item => lines.push(`  • ${item}`))
    } else if (block.type === 'table') {
      lines.push(block.headers.join(' | '))
      block.rows.forEach(row => lines.push(row.join(' | ')))
      if (block.caption) lines.push(`(${block.caption})`)
    }
  }

  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Build the system prompt with injected note context
// ---------------------------------------------------------------------------
function buildSystemPrompt(relevantNotes: Note[]): string {
  const noteContext = relevantNotes.map(noteToText).join('\n\n---\n\n')

  return `You are GP OS — an AI assistant embedded in a UK primary care clinical reference app built for GP registrars and GPs at Darwin Practice, Burton (UHDB).

Your role is to answer clinical questions clearly and concisely using only the reference notes provided below. You are not a general medical AI — you only answer based on the GP OS content. If the answer is not covered in the notes, say so honestly and direct the clinician to NICE CKS or local UHDB guidelines.

RESPONSE STYLE:
- Respond like a knowledgeable senior GP colleague — concise, practical, not overly verbose
- Use bullet points and short structured answers rather than long prose
- Include drug doses, thresholds, and criteria when present in the notes
- Where relevant, highlight local context (Darwin Practice, UHDB Burton, or Staffordshire/Derbyshire formulary)
- Never make up information not in the notes. If uncertain, say "Check NICE CKS directly for this."
- Keep responses under 300 words unless the question genuinely requires more detail
- Do not add unnecessary disclaimers at the end of every response — one is shown in the UI already

IMPORTANT: Only use the information from the reference notes provided below. Do not draw on your general training data for clinical facts.

---

REFERENCE NOTES:

${noteContext}

---

End of reference notes. Answer the user's question based solely on the above content.`
}

// ---------------------------------------------------------------------------
// Exported types
// ---------------------------------------------------------------------------
export interface SourceNote {
  id: string
  title: string
}

export interface StreamCallbacks {
  onToken: (token: string) => void
  onDone: (sources: SourceNote[]) => void
  onError: (msg: string) => void
}

// ---------------------------------------------------------------------------
// Main streaming query function
// ---------------------------------------------------------------------------
export async function streamAskQuery(
  query: string,
  callbacks: StreamCallbacks,
): Promise<void> {
  const relevantNotes = getRelevantNotes(query, 6)

  if (relevantNotes.length === 0) {
    callbacks.onError('No relevant notes found. Try rephrasing your question.')
    return
  }

  const systemPrompt = buildSystemPrompt(relevantNotes)
  const sources: SourceNote[] = relevantNotes.map(n => ({ id: n.id, title: n.title }))

  try {
    const stream = await client.messages.stream({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: [
        {
          type: 'text',
          text: systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        { role: 'user', content: query },
      ],
    })

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        callbacks.onToken(event.delta.text)
      }
    }

    callbacks.onDone(sources)
  } catch (err: unknown) {
    console.error('Ask stream error:', err)
    const msg =
      err instanceof Error && err.message.includes('401')
        ? 'Invalid API key — check your VITE_ANTHROPIC_API_KEY in .env'
        : 'GP OS chat unavailable — check NICE CKS directly'
    callbacks.onError(msg)
  }
}

// ---------------------------------------------------------------------------
// Follow-up suggestions — lightweight second call after streaming completes
// ---------------------------------------------------------------------------
export async function generateFollowUps(
  query: string,
  answer: string,
): Promise<string[]> {
  try {
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 200,
      messages: [
        {
          role: 'user',
          content: `A GP asked: "${query}"
The answer they received was: "${answer.slice(0, 600)}"

Suggest exactly 3 short follow-up clinical questions a GP might ask next. Return them as a JSON array of strings, nothing else. Each question should be under 60 characters. Example: ["Q1?", "Q2?", "Q3?"]`,
        },
      ],
    })

    const text = msg.content[0]?.type === 'text' ? msg.content[0].text.trim() : '[]'
    const match = text.match(/\[[\s\S]*\]/)
    if (!match) return []
    const parsed = JSON.parse(match[0])
    return Array.isArray(parsed) ? parsed.slice(0, 3) : []
  } catch {
    return []
  }
}
