import Anthropic from '@anthropic-ai/sdk'
import { NOTES } from '../data/notes'
import type { Note } from '../data/notes'
import { searchNotesForTab } from './searchIndex'

// ---------------------------------------------------------------------------
// Anthropic client — browser-side (personal/internal tool only)
// ---------------------------------------------------------------------------
const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY ?? '',
  dangerouslyAllowBrowser: true,
})

// ---------------------------------------------------------------------------
// Lightweight title/tag corpus — for exact-match boosting on top of the
// shared fuzzy search engine (which handles full-body / multi-term ranking)
// ---------------------------------------------------------------------------
const titleTagCorpus = NOTES.map(n => ({
  id:       n.id,
  title:    n.title.toLowerCase(),
  tags:     n.tags.join(' ').toLowerCase(),
  subtitle: n.subtitle.toLowerCase(),
}))

// Generic clinical words — useless for ranking, drop before boosting
const STOPWORDS = new Set([
  'criteria', 'management', 'diagnosis', 'treatment', 'assessment',
  'referral', 'investigation', 'symptoms', 'symptom', 'guideline',
  'guidelines', 'threshold', 'adults', 'adult', 'children', 'child',
  'patient', 'patients', 'primary', 'care', 'nice', 'first', 'line',
  'second', 'when', 'what', 'how', 'does', 'this', 'that', 'from',
  'with', 'for', 'and', 'the', 'use', 'used', 'using', 'give',
  'can', 'should', 'would', 'could', 'drug', 'drugs',
])

// ---------------------------------------------------------------------------
// getRelevantNotes
//
// Two-pass approach:
//   Pass 1 – shared searchIndex (full body, multi-term tokenisation,
//             calibrated weights) — provides ranked note IDs
//   Pass 2 – exact title/tag/subtitle keyword boost so that notes with the
//             clinical term explicitly in their title or specialty tag always
//             rise above body-only matches
// ---------------------------------------------------------------------------
export function getRelevantNotes(query: string, topN = 8): Note[] {
  const noteById = new Map(NOTES.map(n => [n.id, n]))
  const scoreMap = new Map<string, number>()

  // ── Pass 1: shared multi-term search engine (full body, no truncation) ───
  const indexHits = searchNotesForTab(query, topN * 3)   // cast a wide net
  indexHits.forEach((hit, rank) => {
    // Convert rank to a descending score so top results dominate
    scoreMap.set(hit.id, ((topN * 3) - rank) * 4)
  })

  // ── Pass 2: exact title / tag / subtitle match boost ─────────────────────
  const terms = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w))
  const searchTerms = terms.length > 0 ? terms : [query.toLowerCase()]

  searchTerms.forEach(w => {
    titleTagCorpus.forEach(entry => {
      let boost = 0
      if (entry.title.includes(w))    boost += 25  // title match = very strong
      if (entry.tags.includes(w))     boost += 10  // tag match = strong
      if (entry.subtitle.includes(w)) boost += 5   // subtitle = moderate
      if (boost > 0) {
        scoreMap.set(entry.id, (scoreMap.get(entry.id) ?? 0) + boost)
      }
    })
  })

  if (scoreMap.size === 0) return NOTES.slice(0, topN)

  return [...scoreMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([id]) => noteById.get(id)!)
    .filter(Boolean)
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
      // Render as markdown table so the AI can reproduce it
      lines.push('| ' + block.headers.join(' | ') + ' |')
      lines.push('| ' + block.headers.map(() => '---').join(' | ') + ' |')
      block.rows.forEach(row => lines.push('| ' + row.join(' | ') + ' |'))
      if (block.caption) lines.push(`*${block.caption}*`)
    }
  }

  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------
function buildSystemPrompt(relevantNotes: Note[]): string {
  const noteContext = relevantNotes.map(noteToText).join('\n\n---\n\n')

  return `You are GP OS — a clinical reference AI for UK GPs at Darwin Practice, Burton (UHDB). You answer fast, clinical, mid-consultation questions using the reference notes below.

RESPONSE FORMAT (follow strictly):
- Be extremely concise — this is used mid-consultation
- Use **bold** for key numbers, doses, and thresholds
- Use bullet points for criteria/steps
- Use markdown tables (| col | col |) for dose comparisons, drug tables, staging systems — reproduce them from the notes where available
- Use ### headings to separate sections if the answer has multiple parts
- Flag 🔴 RED FLAGS in capitals where present in the notes
- Local referral defaults: Primary → UHDB Burton (QHB) | MH → MPFT 0300 555 5001 | CAMHS → CaFSPA | Referrals via Lexacom to secretaries unless Accumail form
- Darwin referral forms are in the Forms tab — mention relevant ones when answering referral questions (e.g. "Use the MSK referral form in the Darwin Referrals section")
- Never add a disclaimer — one is already shown in the UI
- Never pad with preamble ("Great question", "Based on the notes...") — answer immediately

INFORMATION HIERARCHY — follow in order:
1. If the answer is explicitly stated in the notes below → answer directly from the notes
2. If the topic is covered but the specific detail (e.g. exact starting dose, specific brand) is not explicitly stated → say what the notes do cover, then add "→ verify exact dosing in BNF" on a new line
3. If the topic is NOT covered in the notes at all → say "Not in my notes — check NICE CKS: cks.nice.org.uk" and nothing more

IMPORTANT: For specific drug doses and clinical thresholds, always prefer the notes. Only use your training knowledge as a last resort for widely-accepted facts not covered at all, and clearly label it: "(standard UK practice — not in my notes)".

---

${noteContext}

---`
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
  const relevantNotes = getRelevantNotes(query, 8)

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
      max_tokens: 150,
      messages: [
        {
          role: 'user',
          content: `GP asked: "${query}". Answer summary: "${answer.slice(0, 400)}"
Return exactly 3 short GP follow-up questions as a JSON array. Max 55 chars each. No preamble. Example: ["Q1?","Q2?","Q3?"]`,
        },
      ],
    })

    const text = msg.content[0]?.type === 'text' ? msg.content[0].text.trim() : '[]'
    const match = text.match(/\[[\s\S]*?\]/)
    if (!match) return []
    const parsed = JSON.parse(match[0])
    return Array.isArray(parsed) ? parsed.slice(0, 3) : []
  } catch {
    return []
  }
}
