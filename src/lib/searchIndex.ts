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
  body:     n.body,   // enrichBody already appended all content text
}))

// ── Fuse 1: Title / tag / subtitle only ───────────────────────────────────
// No body field here — eliminates the weighted-average penalty that drags
// body-only matches (e.g. "fentanyl patch") below the threshold.
const titleTagFuse = new Fuse(noteCorpus, {
  keys: [
    { name: 'label',    weight: 10 },
    { name: 'tags',     weight: 5  },
    { name: 'sublabel', weight: 2  },
  ],
  threshold: 0.45,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
})

// ── Fuse 2: Body only — per-token fuzzy, tight threshold ──────────────────
// Used as a typo-tolerance layer ON TOP of the exact body scan.
// Deliberately tight so it doesn't produce noise.
const bodyFuse = new Fuse(noteCorpus, {
  keys: [{ name: 'body', weight: 1 }],
  threshold: 0.25,
  includeScore: true,
  ignoreLocation: true,
  distance: 6000,
  minMatchCharLength: 3,
})

// ── Snippet helper — returns a ~90-char body excerpt around the first hit ──
export function getSnippet(text: string, tokens: string[]): string | null {
  const lower = text.toLowerCase()
  for (const t of tokens) {
    if (t.length < 2) continue
    const idx = lower.indexOf(t.toLowerCase())
    if (idx !== -1) {
      const start = Math.max(0, idx - 25)
      const end   = Math.min(text.length, idx + t.length + 65)
      return (start > 0 ? '…' : '') + text.slice(start, end).replace(/\n/g, ' ') + (end < text.length ? '…' : '')
    }
  }
  return null
}

// ── Multi-pass note search ─────────────────────────────────────────────────
//
// Scoring is HIGHER = BETTER (inverted from Fuse's 0=best convention).
// scoreMap: id → cumulative points
//
// Pass 1: titleTagFuse — full query   (0–60 pts per hit)
// Pass 2: titleTagFuse — per token    (0–20 pts per token per hit)
// Pass 3: plain body indexOf scan     (0–40+ pts; requires ≥2 tokens for
//          multi-word queries to avoid common-word noise)
// Pass 4: bodyFuse — per token        (0–6 pts; typo tolerance in body)
// ──────────────────────────────────────────────────────────────────────────
function runNoteSearch(q: string, maxN: number): UnifiedResult[] {
  if (q.length < 2) return []

  const tokens = q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 2)

  if (tokens.length === 0) return []

  const scoreMap = new Map<string, number>()   // id → pts (higher = better)

  // ── Pass 1: title/tag Fuse — full query ───────────────────────────────
  for (const r of titleTagFuse.search(q)) {
    const pts = (1 - (r.score ?? 0.99)) * 60
    scoreMap.set(r.item.id, (scoreMap.get(r.item.id) ?? 0) + pts)
  }

  // ── Pass 2: title/tag Fuse — per token ────────────────────────────────
  // Short tokens (< 7 chars) like "sore", "patch" can fuzzy-match as
  // substrings of unrelated words via Fuse's ignoreLocation scanning
  // (e.g. "sore" matching "col-ore-ctal").  For these, verify the hit is
  // a real substring before awarding points.
  for (const tok of tokens) {
    const requireExact = tok.length < 7
    for (const r of titleTagFuse.search(tok)) {
      if (requireExact) {
        const meta = (r.item.label + ' ' + r.item.sublabel + ' ' + r.item.tags).toLowerCase()
        if (!meta.includes(tok)) continue
      }
      const pts = (1 - (r.score ?? 0.99)) * 20
      scoreMap.set(r.item.id, (scoreMap.get(r.item.id) ?? 0) + pts)
    }
  }

  // ── Pass 3: exact plain-text body scan ────────────────────────────────
  // indexOf is O(n) and unaffected by Fuse's weighted multi-key averaging.
  //
  // Rules to prevent common clinical words ("doses", "patch", "mg") from
  // matching dozens of unrelated notes:
  //   • Long tokens (≥7 chars) = "specific" — must appear ≥1 time
  //   • Short tokens (<7 chars) = "generic"  — must appear ≥2 times
  //   • If the query has specific tokens, at least one MUST be present in the
  //     body for a body-scan score to be awarded (guards against notes that
  //     only match on "patch" + "doses" but not "fentanyl").
  //   • Multi-word queries require at least 2 tokens to match.
  const specificTokens  = tokens.filter(t => t.length >= 7)
  const hasSpecificToks = specificTokens.length > 0
  const minMatchTokens  = tokens.length > 1 ? 2 : 1

  for (const entry of noteCorpus) {
    const bodyLow = entry.body.toLowerCase()
    const matchedSet    = new Set<string>()
    let   totalOcc      = 0

    for (const tok of tokens) {
      if (tok.length < 3) continue
      const minOccToMatch = tok.length >= 7 ? 1 : 2

      let pos = bodyLow.indexOf(tok)
      if (pos !== -1) {
        let occ = 0
        while (pos !== -1 && occ < 5) {
          occ++
          pos = bodyLow.indexOf(tok, pos + tok.length)
        }
        if (occ >= minOccToMatch) {
          matchedSet.add(tok)
          totalOcc += occ
        }
      }
    }

    // Gate: if query has specific tokens, at least one must be in the match
    if (hasSpecificToks && !specificTokens.some(t => matchedSet.has(t))) continue
    if (matchedSet.size < minMatchTokens) continue

    const coverage = matchedSet.size / tokens.length
    const allBonus = matchedSet.size === tokens.length ? 2.0 : 1.0
    const pts      = coverage * allBonus * Math.min(totalOcc, 5) * 4
    scoreMap.set(entry.id, (scoreMap.get(entry.id) ?? 0) + pts)
  }

  // ── Pass 4: bodyFuse per-token — typo tolerance in body ───────────────
  // Only run for long/specific tokens (≥7 chars) to avoid common clinical
  // words like "dose", "patch", "oral" inflating scores across the corpus.
  for (const tok of tokens) {
    if (tok.length < 7) continue
    for (const r of bodyFuse.search(tok)) {
      const pts = (1 - (r.score ?? 0.99)) * 6
      scoreMap.set(r.item.id, (scoreMap.get(r.item.id) ?? 0) + pts)
    }
  }

  // ── Post-filter: specific-token gate ─────────────────────────────────
  // When the query contains any long/specific token (≥7 chars) AND it's a
  // multi-word query, every candidate note must contain at least one of those
  // specific tokens somewhere (title, tags, subtitle, or body) — regardless
  // of how many pts it accumulated from generic tokens like "patch" or "doses".
  if (hasSpecificToks && tokens.length > 1) {
    for (const id of [...scoreMap.keys()]) {
      const entry = noteCorpus.find(n => n.id === id)
      if (!entry) { scoreMap.delete(id); continue }
      const metaLow = (entry.label + ' ' + entry.sublabel + ' ' + entry.tags).toLowerCase()
      const bodyLow  = entry.body.toLowerCase()
      const found    = specificTokens.some(t => metaLow.includes(t) || bodyLow.includes(t))
      if (!found) scoreMap.delete(id)
    }
  }

  // ── Filter: minimum meaningful relevance ──────────────────────────────
  // Scale threshold with query length so generic single-word hits are still
  // caught (MIN=5) while multi-word queries demand stronger evidence.
  const MIN_SCORE = tokens.length === 1 ? 5
                  : tokens.length === 2 ? 15
                  :                       20
  const qLow = q.toLowerCase()
  const results: UnifiedResult[] = []

  for (const [id, score] of scoreMap.entries()) {
    if (score < MIN_SCORE) continue
    const note = NOTES.find(n => n.id === id)
    if (!note) continue
    results.push({
      kind:     'note',
      label:    note.title,
      sublabel: note.subtitle,
      id,
      snippet:  getSnippet(note.body, tokens) ?? undefined,
    })
  }

  // ── Sort: exact-title > starts-with > contains > combined score ────────
  return results.sort((a, b) => {
    const aT = a.label.toLowerCase()
    const bT = b.label.toLowerCase()
    const aE = aT === qLow,         bE = bT === qLow
    const aS = aT.startsWith(qLow), bS = bT.startsWith(qLow)
    const aC = aT.includes(qLow),   bC = bT.includes(qLow)
    if (aE && !bE) return -1
    if (bE && !aE) return  1
    if (aS && !bS) return -1
    if (bS && !aS) return  1
    if (aC && !bC) return -1
    if (bC && !aC) return  1
    return (scoreMap.get(b.id) ?? 0) - (scoreMap.get(a.id) ?? 0)
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
  const formHits = formsFuse.search(q)
  const darwin   = formHits.filter(r => r.item.category === 'Darwin')
  const otherF   = formHits.filter(r => r.item.category !== 'Darwin')
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

  const tokens = q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 2)

  if (!tokens.length) return []

  const unified = runNoteSearch(q, maxN)
  return unified.map(r => ({
    id:      r.id,
    score:   0,       // internal only; ranking already applied
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
