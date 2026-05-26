import Anthropic from '@anthropic-ai/sdk'
import Fuse from 'fuse.js'
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
// Compact search corpus — built once at startup
//
// The enriched body can be thousands of chars (Fuse.js performs poorly on it).
// We use the first 600 chars = the manually-written keyword block, plus
// title + tags + subtitle for topic matching.
// ---------------------------------------------------------------------------
interface SearchEntry {
  id: string
  title: string
  subtitle: string
  tags: string
  keywords: string   // compact manually-written keyword string
}

const searchCorpus: SearchEntry[] = NOTES.map(n => ({
  id:       n.id,
  title:    n.title,
  subtitle: n.subtitle,
  tags:     n.tags.join(' '),
  keywords: n.body.substring(0, 600),   // original keywords before enrichBody
}))

// Generic clinical words that appear in every note — useless for ranking
const STOPWORDS = new Set([
  'criteria', 'management', 'diagnosis', 'treatment', 'assessment',
  'referral', 'investigation', 'symptoms', 'symptom', 'guideline',
  'guidelines', 'threshold', 'adults', 'adult', 'children', 'child',
  'patient', 'patients', 'primary', 'care', 'nice', 'first', 'line',
  'second', 'when', 'what', 'how', 'does', 'this', 'that', 'from',
  'with', 'for', 'and', 'the', 'use', 'used', 'using', 'give',
  'can', 'should', 'would', 'could', 'drug', 'drugs',
])

// Fuse.js on compact corpus only — fast and accurate
const fuse = new Fuse(searchCorpus, {
  keys: [
    { name: 'title',    weight: 5 },
    { name: 'tags',     weight: 2 },
    { name: 'subtitle', weight: 2 },
    { name: 'keywords', weight: 1 },   // drug names, clinical terms
  ],
  threshold: 0.4,         // tolerant enough for 1-2 char typos
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 3,
  useExtendedSearch: false,
})

export function getRelevantNotes(query: string, topN = 6): Note[] {
  const noteById = new Map(NOTES.map(n => [n.id, n]))
  const scoreMap = new Map<string, number>()

  // Extract meaningful search terms (drop stopwords and short words)
  const terms = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w))

  // Use full query as a fallback term if all words were stopworded
  const searchTerms = terms.length > 0 ? terms : [query]

  // 1) Per-term fuzzy search — handles typos and drug name variants
  //    Searching individual terms (not full phrase) is critical for accuracy
  searchTerms.forEach(term => {
    fuse.search(term).forEach(r => {
      const s = (1 - (r.score ?? 1)) * 20
      scoreMap.set(r.item.id, (scoreMap.get(r.item.id) ?? 0) + s)
    })
  })

  // 2) Exact + prefix keyword scan on compact corpus
  searchTerms.forEach(w => {
    searchCorpus.forEach(entry => {
      const tl  = entry.title.toLowerCase()
      const kl  = entry.keywords.toLowerCase()
      const tgl = entry.tags.toLowerCase()
      let kwScore = 0

      // Title / tag match = strong signal
      if (tl.includes(w))  kwScore += 10
      if (tgl.includes(w)) kwScore += 4

      // Exact occurrence in keyword string
      let idx = 0
      while ((idx = kl.indexOf(w, idx)) !== -1) { kwScore += 1; idx++ }

      // Prefix/stem match (e.g. "dose" matches "doses", "dosing")
      kl.split(/\s+/).forEach(kw => {
        if (kw !== w && kw.startsWith(w) && w.length >= 4) kwScore += 0.5
      })

      if (kwScore > 0) {
        scoreMap.set(entry.id, (scoreMap.get(entry.id) ?? 0) + kwScore)
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

  return `You are GP OS — a clinical reference AI for UK GPs at Darwin Practice, Burton (UHDB). You answer fast, clinical, mid-consultation questions using ONLY the notes below.

RESPONSE FORMAT (follow strictly):
- Be extremely concise — this is used mid-consultation
- Use **bold** for key numbers, doses, and thresholds
- Use bullet points for criteria/steps
- Use markdown tables (| col | col |) for dose comparisons, drug tables, staging systems — reproduce them from the notes where available
- Use ### headings to separate sections if the answer has multiple parts
- Flag 🔴 RED FLAGS in capitals where present in the notes
- Local referral defaults: Primary → UHDB Burton | MH → MPFT 0808 196 3002 | CAMHS → CaFSPA
- If NOT in the notes: say so briefly, direct to NICE CKS: cks.nice.org.uk or BNF
- Never add a disclaimer — one is already shown in the UI
- Never pad with preamble ("Great question", "Based on the notes...") — answer immediately

IMPORTANT: Only use the reference notes below. Do not use general training knowledge for clinical facts.

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
