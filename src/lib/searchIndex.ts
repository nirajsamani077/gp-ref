import Fuse from 'fuse.js'
import { NOTES } from '../data/notes'
import { FORMS } from '../data/forms'
import { LINK_CATEGORIES } from '../data/links'

export type ResultKind = 'note' | 'form' | 'link' | 'calculator'

export interface UnifiedResult {
  kind: ResultKind
  label: string
  sublabel: string
  id: string        // noteId | formId | url | calcId
  formUrl?: string  // only for forms
  category?: string // only for forms
  snippet?: string  // body match preview
}

// ── Notes corpus — full body, no truncation ────────────────────────────────
const noteCorpus = NOTES.map(n => ({
  id:       n.id,
  label:    n.title,
  sublabel: n.subtitle,
  tags:     n.tags.join(' '),
  body:     n.body,   // ← full body; enrichBody already appended all content text
}))

// More permissive Fuse; higher title weight so drug-in-body matches don't
// outrank title/tag matches in other notes.
const notesFuse = new Fuse(noteCorpus, {
  keys: [
    { name: 'label',    weight: 10 },
    { name: 'tags',     weight: 5  },
    { name: 'sublabel', weight: 2  },
    { name: 'body',     weight: 1  },
  ],
  threshold: 0.48,
  includeScore: true,
  ignoreLocation: true,
  distance: 2000,          // large: searches anywhere in long body
  minMatchCharLength: 2,
})

// ── Snippet helper — returns a ~80-char body excerpt around the first hit ──
export function getSnippet(text: string, tokens: string[]): string | null {
  const lower = text.toLowerCase()
  for (const t of tokens) {
    if (t.length < 2) continue
    const idx = lower.indexOf(t.toLowerCase())
    if (idx !== -1) {
      const start = Math.max(0, idx - 25)
      const end   = Math.min(text.length, idx + t.length + 60)
      return (start > 0 ? '…' : '') + text.slice(start, end).replace(/\n/g, ' ') + (end < text.length ? '…' : '')
    }
  }
  return null
}

// ── Multi-term note search ─────────────────────────────────────────────────
// Tokenises the query, runs per-token and whole-query passes, merges with
// boosted scores, then re-ranks with exact-title-match priority.
function runNoteSearch(q: string, maxN: number): UnifiedResult[] {
  if (q.length < 2) return []

  const tokens   = q.split(/\s+/).filter(t => t.length >= 2)
  const scoreMap = new Map<string, number>()

  // Pass 1: full query
  for (const r of notesFuse.search(q)) {
    scoreMap.set(r.item.id, r.score ?? 0.99)
  }

  // Pass 2: per-token (helps typos + multi-word queries)
  // If ALL tokens match a note, we boost its score; partial matches are kept
  // but at their natural score.
  if (tokens.length > 1) {
    const tokenHits: Map<string, number>[] = tokens.map(tok => {
      const m = new Map<string, number>()
      for (const r of notesFuse.search(tok)) m.set(r.item.id, r.score ?? 0.99)
      return m
    })

    const allIds = new Set(noteCorpus.map(n => n.id))
    for (const id of allIds) {
      const perToken = tokenHits.map(m => m.get(id) ?? 0.99)
      const allMatch = perToken.every(s => s < 0.5)
      if (!allMatch) continue // only boost when every token matched
      const combined = perToken.reduce((a, b) => a + b, 0) / perToken.length * 0.75
      const existing = scoreMap.get(id) ?? 0.99
      if (combined < existing) scoreMap.set(id, combined)
    }
  } else if (tokens.length === 1 && scoreMap.size === 0) {
    // Single token found nothing at full-query level — try standalone token
    for (const r of notesFuse.search(tokens[0])) {
      scoreMap.set(r.item.id, r.score ?? 0.99)
    }
  }

  const qLow = q.toLowerCase()
  const results: UnifiedResult[] = []

  for (const [id, score] of scoreMap.entries()) {
    if (score > 0.52) continue            // discard weak fuzzy hits
    const note = NOTES.find(n => n.id === id)
    if (!note) continue
    results.push({
      kind:    'note',
      label:   note.title,
      sublabel: note.subtitle,
      id,
      snippet: getSnippet(note.body, tokens),
    })
  }

  // Sort: exact title > starts-with > contains > score
  return results.sort((a, b) => {
    const aT = a.label.toLowerCase()
    const bT = b.label.toLowerCase()
    const aE = aT === qLow, bE = bT === qLow
    const aS = aT.startsWith(qLow), bS = bT.startsWith(qLow)
    const aC = aT.includes(qLow), bC = bT.includes(qLow)
    if (aE && !bE) return -1
    if (bE && !aE) return 1
    if (aS && !bS) return -1
    if (bS && !aS) return 1
    if (aC && !bC) return -1
    if (bC && !aC) return 1
    const aScore = scoreMap.get(a.id) ?? 0.99
    const bScore = scoreMap.get(b.id) ?? 0.99
    return aScore - bScore
  }).slice(0, maxN)
}

// ── Forms ──────────────────────────────────────────────────────────────────
const formsCorpus = FORMS.map(f => ({
  id:       f.id,
  label:    f.title,
  category: f.category,
  url:      f.url,
  keywords: f.keywords,
}))

const formsFuse = new Fuse(formsCorpus, {
  keys: [
    { name: 'label',    weight: 4 },
    { name: 'keywords', weight: 2 },
    { name: 'category', weight: 1 },
  ],
  threshold: 0.4,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
})

// ── Links ──────────────────────────────────────────────────────────────────
const linksCorpus = LINK_CATEGORIES.flatMap(cat =>
  cat.links.map(l => ({
    id:       l.url,
    label:    l.name,
    category: cat.title,
  }))
)

const linksFuse = new Fuse(linksCorpus, {
  keys: [
    { name: 'label',    weight: 4 },
    { name: 'category', weight: 1 },
  ],
  threshold: 0.4,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
})

// ── Calculators ────────────────────────────────────────────────────────────
const CALC_CORPUS = [
  { id: 'qrisk3',      label: 'QRISK3 — Cardiovascular Risk',    kw: 'cvd risk statin heart stroke cholesterol hdl bp diabetes af' },
  { id: 'feno',        label: 'FeNO Calculator',                  kw: 'fractional exhaled nitric oxide asthma airway inflammation' },
  { id: '6cit',        label: '6-CIT Cognitive Test',             kw: 'cognitive impairment dementia memory six item test' },
  { id: 'fib4',        label: 'FIB-4 Index',                      kw: 'liver fibrosis nafld masld alt ast platelets hepatic' },
  { id: 'cha2ds2vasc', label: 'CHA₂DS₂-VASc — AF Stroke Risk',   kw: 'stroke atrial fibrillation doac anticoagulation apixaban edoxaban rivaroxaban' },
  { id: 'orbit',       label: 'ORBIT-AF — Bleeding Risk',         kw: 'bleeding risk anticoagulation af haemoglobin renal egfr' },
  { id: 'audit-c',     label: 'AUDIT-C — Alcohol Screening',      kw: 'alcohol screen hazardous drinking units brief' },
  { id: 'audit',       label: 'AUDIT — Full Alcohol Use',         kw: 'alcohol harmful dependence withdrawal detox brief intervention' },
]

const calcsFuse = new Fuse(CALC_CORPUS, {
  keys: [
    { name: 'label', weight: 4 },
    { name: 'kw',    weight: 2 },
  ],
  threshold: 0.4,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
})

// ── Category labels (for form sublabels) ───────────────────────────────────
const CAT_LABELS: Record<string, string> = {
  Darwin: '📍 Darwin Referrals', Cardiology: 'Cardiology', Respiratory: 'Respiratory',
  Derm: 'Dermatology', MH: 'Mental Health', Diabetes: 'Diabetes', MSK: 'MSK',
  Gastro: 'Gastro', Gynae: 'Gynaecology', Paeds: 'Paediatrics', Neuro: 'Neurology',
  Endocrine: 'Endocrine', Renal: 'Renal', Infection: 'Infection', Haem: 'Haematology',
  Urology: 'Urology', ENT: 'ENT', Ophthalmology: 'Ophthalmology', Breast: 'Breast',
  Rheumatology: 'Rheumatology', Palliative: 'Palliative', Meds: 'Medications',
  Surgical: 'Surgical', UGI: 'Upper GI', DVLA: 'DVLA',
}

// ── Main unified search ────────────────────────────────────────────────────
export function searchAll(query: string, maxPerKind = 4): {
  notes: UnifiedResult[]
  forms: UnifiedResult[]
  links: UnifiedResult[]
  calculators: UnifiedResult[]
} {
  const q = query.trim()
  if (q.length < 2) return { notes: [], forms: [], links: [], calculators: [] }

  const notes = runNoteSearch(q, maxPerKind)

  // Darwin forms first, then others
  const formHits  = formsFuse.search(q)
  const darwin    = formHits.filter(r => r.item.category === 'Darwin')
  const otherF    = formHits.filter(r => r.item.category !== 'Darwin')
  const forms: UnifiedResult[] = [...darwin, ...otherF].slice(0, maxPerKind).map(r => ({
    kind:     'form',
    label:    r.item.label,
    sublabel: CAT_LABELS[r.item.category] ?? r.item.category,
    id:       r.item.id,
    formUrl:  r.item.url,
    category: r.item.category,
  }))

  const links: UnifiedResult[] = linksFuse.search(q).slice(0, maxPerKind).map(r => ({
    kind:     'link',
    label:    r.item.label,
    sublabel: r.item.category,
    id:       r.item.id,
  }))

  const calculators: UnifiedResult[] = calcsFuse.search(q).slice(0, maxPerKind).map(r => ({
    kind:     'calculator',
    label:    r.item.label,
    sublabel: 'Calculator',
    id:       r.item.id,
  }))

  return { notes, forms, links, calculators }
}

// ── Notes-tab search — returns more results with richer ranking ────────────
export interface NoteTabResult {
  id: string
  score: number
  snippet: string | null
}

export function searchNotesForTab(query: string, maxN = 60): NoteTabResult[] {
  const q = query.trim()
  if (q.length < 1) return []

  const tokens = q.split(/\s+/).filter(t => t.length >= 2)
  if (!tokens.length) return []

  const unified = runNoteSearch(q, maxN)
  return unified.map(r => ({
    id:      r.id,
    score:   0, // not exposed externally
    snippet: r.snippet ?? null,
  }))
}

// ── Related Darwin forms — used by AskTab after answer completes ───────────
export function findRelatedForms(query: string, maxN = 3): Array<{ id: string; title: string; url: string }> {
  return formsFuse
    .search(query)
    .filter(r => r.item.category === 'Darwin')
    .slice(0, maxN)
    .map(r => ({ id: r.item.id, title: r.item.label, url: r.item.url }))
}
