import Fuse from 'fuse.js'
import type { TabId } from '../types'
import type { ContentBlock, Note } from './notes'
import { LINK_CATEGORIES } from './links'
import { NOTES } from './notes'
import { CALCULATORS } from './calculators'

export interface SnippetPart {
  before: string
  match: string
  after: string
}

export interface SearchResult {
  id: string
  name: string
  label: string
  tabId: TabId
  itemId: string
  searchText?: string
  snippet?: SnippetPart
}

// ── Text extraction from content blocks ──────────────────────────

function blockToText(block: ContentBlock): string {
  switch (block.type) {
    case 'heading': return block.text
    case 'para':    return block.text
    case 'list':    return block.items.join(' ')
    case 'table':   return [...block.headers, ...block.rows.flat()].join(' ')
    case 'callout': return [block.title, ...block.items].join(' ')
    case 'image':   return [block.alt, block.caption ?? ''].join(' ')
    default:        return ''
  }
}

function noteFullText(note: Note): string {
  return note.content.map(blockToText).join(' ')
}

// ── Helpers ───────────────────────────────────────────────────────

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) return 0
  let n = 0, i = 0
  while ((i = haystack.indexOf(needle, i)) !== -1) { n++; i += needle.length }
  return n
}

function computeSnippet(note: Note, query: string): SnippetPart | undefined {
  const q = query.toLowerCase()
  const CONTEXT = 50

  for (const block of note.content) {
    const text = blockToText(block)
    const lower = text.toLowerCase()
    const idx = lower.indexOf(q)
    if (idx === -1) continue

    const start = Math.max(0, idx - CONTEXT)
    const end   = Math.min(text.length, idx + q.length + CONTEXT)

    return {
      before: (start > 0 ? '…' : '') + text.slice(start, idx),
      match:  text.slice(idx, idx + q.length),
      after:  text.slice(idx + q.length, end) + (end < text.length ? '…' : ''),
    }
  }
  return undefined
}

// ── Build index ───────────────────────────────────────────────────

function buildItems(): SearchResult[] {
  const items: SearchResult[] = []

  for (const cat of LINK_CATEGORIES) {
    for (const link of cat.links) {
      items.push({
        id: `link:${link.url}`,
        name: link.name,
        label: `${link.name} — Links`,
        tabId: 'links',
        itemId: link.url,
      })
    }
  }

  for (const note of NOTES) {
    items.push({
      id: `note:${note.id}`,
      name: note.title,
      label: `${note.title} — Notes`,
      tabId: 'notes',
      itemId: note.id,
      // Index full extracted text so every mention is searchable
      searchText: [note.subtitle, noteFullText(note)].filter(Boolean).join(' '),
    })
  }

  for (const calc of CALCULATORS) {
    items.push({
      id: `calc:${calc.id}`,
      name: calc.name,
      label: `${calc.name} — Calculators`,
      tabId: 'calculators',
      itemId: calc.id,
      searchText: calc.searchText,
    })
  }

  return items
}

const ALL_ITEMS = buildItems()
const NOTE_MAP  = new Map<string, Note>(NOTES.map(n => [n.id, n]))

const fuse = new Fuse(ALL_ITEMS, {
  keys: [
    { name: 'name',       weight: 3 },
    { name: 'label',      weight: 1 },
    { name: 'searchText', weight: 2 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 3,
  ignoreLocation: true,
})

// ── Search with custom re-ranking ─────────────────────────────────

export function search(query: string): SearchResult[] {
  if (!query.trim()) return []

  const q   = query.toLowerCase().trim()
  const raw = fuse.search(query)

  const enriched = raw.map(r => {
    const fuseScore  = r.score ?? 1
    const titleLower = r.item.name.toLowerCase()
    const searchText = (r.item.searchText ?? '').toLowerCase()

    // Priority: title match > occurrence density > fuse score
    let priority = 0
    if (titleLower === q)              priority = 10000
    else if (titleLower.startsWith(q)) priority = 8000
    else if (titleLower.includes(q))   priority = 6000
    priority += countOccurrences(searchText, q) * 20

    // Attach snippet for notes
    let item = r.item
    if (item.tabId === 'notes') {
      const note = NOTE_MAP.get(item.itemId)
      if (note) {
        const snippet = computeSnippet(note, q)
        if (snippet) item = { ...item, snippet }
      }
    }

    return { item, fuseScore, priority }
  })

  enriched.sort((a, b) =>
    b.priority !== a.priority
      ? b.priority - a.priority
      : a.fuseScore - b.fuseScore
  )

  return enriched.map(e => e.item)
}
