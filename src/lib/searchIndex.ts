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
}

// ── Notes ──────────────────────────────────────────────────────────────────
const noteCorpus = NOTES.map(n => ({
  id:       n.id,
  label:    n.title,
  sublabel: n.subtitle,
  tags:     n.tags.join(' '),
  body:     n.body.substring(0, 400),
}))

const notesFuse = new Fuse(noteCorpus, {
  keys: [
    { name: 'label',    weight: 5 },
    { name: 'tags',     weight: 3 },
    { name: 'sublabel', weight: 2 },
    { name: 'body',     weight: 1 },
  ],
  threshold: 0.4,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
})

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

  const notes: UnifiedResult[] = notesFuse.search(q).slice(0, maxPerKind).map(r => ({
    kind: 'note',
    label: r.item.label,
    sublabel: r.item.sublabel,
    id: r.item.id,
  }))

  // Darwin forms first, then others
  const formHits = formsFuse.search(q)
  const darwinForms = formHits.filter(r => r.item.category === 'Darwin')
  const otherForms  = formHits.filter(r => r.item.category !== 'Darwin')
  const forms: UnifiedResult[] = [...darwinForms, ...otherForms].slice(0, maxPerKind).map(r => ({
    kind: 'form',
    label: r.item.label,
    sublabel: CAT_LABELS[r.item.category] ?? r.item.category,
    id: r.item.id,
    formUrl: r.item.url,
    category: r.item.category,
  }))

  const links: UnifiedResult[] = linksFuse.search(q).slice(0, maxPerKind).map(r => ({
    kind: 'link',
    label: r.item.label,
    sublabel: r.item.category,
    id: r.item.id,
  }))

  const calculators: UnifiedResult[] = calcsFuse.search(q).slice(0, maxPerKind).map(r => ({
    kind: 'calculator',
    label: r.item.label,
    sublabel: 'Calculator',
    id: r.item.id,
  }))

  return { notes, forms, links, calculators }
}

// ── Related Darwin forms — used by AskTab after answer completes ───────────
export function findRelatedForms(query: string, maxN = 3): Array<{ id: string; title: string; url: string }> {
  return formsFuse
    .search(query)
    .filter(r => r.item.category === 'Darwin')
    .slice(0, maxN)
    .map(r => ({ id: r.item.id, title: r.item.label, url: r.item.url }))
}
