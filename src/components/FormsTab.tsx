import { useState, useMemo, useRef, useEffect } from 'react'
import { FORMS } from '../data/forms'
import type { GPForm } from '../data/forms'
import { SHARED_CARE } from '../data/sharedCare'
import { EXTRA_DOCS } from '../data/extraDocs'
import { REFERRAL_FORMS, REFERRAL_CATEGORIES, REFERRAL_TRUSTS, REFERRAL_PROVIDERS, TRUST_FULL } from '../data/referralForms'
import type { ReferralForm } from '../data/referralForms'
import ReferralGuidance from './ReferralGuidance'
import { guidanceForForm } from '../data/referralGuidance'

const NAVY = '#1a365d'

type Mode = 'referral' | 'pathway'
interface OpenDoc { title: string; url: string; referral?: ReferralForm }

// Pathways view = existing PILs + UHDB shared-care protocols + extra library docs
const PATHWAY_DOCS: GPForm[] = [...FORMS, ...SHARED_CARE, ...EXTRA_DOCS]

// ── Pathways category labels ────────────────────────────────────────────────
const PATH_LABELS: Record<string, string> = {
  Cardiology: 'Cardiology', Respiratory: 'Respiratory', Derm: 'Dermatology', MH: 'Mental Health',
  Diabetes: 'Diabetes', MSK: 'MSK', Gastro: 'Gastro', Gynae: 'Gynaecology', Paeds: 'Paediatrics',
  Neuro: 'Neurology', Endocrine: 'Endocrine', Renal: 'Renal', Infection: 'Infection', Haem: 'Haematology',
  Urology: 'Urology', ENT: 'ENT', Ophthalmology: 'Ophthalmology', Breast: 'Breast', Rheumatology: 'Rheumatology',
  Allergy: 'Allergy', Practice: 'Practice', Palliative: 'Palliative', Meds: 'Medications', Surgical: 'Surgical', UGI: 'Upper GI', DVLA: 'DVLA',
}
const PATH_CATEGORIES = Object.keys(PATH_LABELS)

// Source labels for the pathways 'source' filter
const SOURCE_LABELS: Record<string, string> = {
  pil: 'PILs & flowcharts', uhdb: 'UHDB shared care', darwin: 'Darwin practice',
}

// ── Colour by category (shared palette) ─────────────────────────────────────
const CAT_COLORS: Record<string, string> = {
  '2WW Cancer': '#c53030', Cardiology: '#e53e3e', Respiratory: '#3182ce', Gastro: '#c05621',
  Gynaecology: '#d53f8c', 'Fertility & Andrology': '#b83280', 'Diabetes & Endocrine': '#38a169',
  Neurology: '#6b46c1', 'MSK / Orthopaedics': '#dd6b20', 'Mental Health': '#805ad5', Paediatrics: '#00b5d8',
  Audiology: '#285e61', Imaging: '#2b6cb0', Genetics: '#2c7a7b', Palliative: '#4a5568',
  'Community Services': '#0987a0', COVID: '#718096', Admin: '#4a5568', Guidance: '#1a365d',
  // pathway keys
  Derm: '#d69e2e', MH: '#805ad5', Diabetes: '#38a169', MSK: '#dd6b20', Gynae: '#d53f8c', Paeds: '#00b5d8',
  Neuro: '#6b46c1', Endocrine: '#2f855a', Renal: '#2b6cb0', Infection: '#c53030', Haem: '#9b2335',
  Urology: '#2c7a7b', ENT: '#285e61', Ophthalmology: '#553c9a', Breast: '#b83280', Rheumatology: '#744210',
  Allergy: '#65a30d', Practice: '#334155', Meds: '#1a365d', Surgical: '#2d3748', UGI: '#7b341e', DVLA: '#4a5568',
}
const catColor = (c: string) => CAT_COLORS[c] ?? '#64748b'

// ── Referral search — title-first, precise ──────────────────────────────────
function scoreReferral(f: ReferralForm, q: string, tokens: string[]): number {
  const title = f.title.toLowerCase()
  const hay = `${title} ${f.keywords} ${f.category.toLowerCase()} ${(f.trust ?? '').toLowerCase()} ${(f.provider ?? '').toLowerCase()}`
  if (!tokens.every(t => hay.includes(t))) return 0
  if (title === q) return 1000
  if (title.startsWith(q)) return 800
  if (title.includes(q)) return 650
  if (tokens.every(t => title.includes(t))) return 400
  return 120 // matched only via keywords / facets
}

export default function FormsTab({ formOpenReq }: { formOpenReq?: { id: string; seq: number } | null }) {
  const [mode, setMode]             = useState<Mode>('referral')
  const [search, setSearch]         = useState('')
  const [cat, setCat]               = useState<string | null>(null)
  const [trust, setTrust]           = useState<string>('')
  const [provider, setProvider]     = useState<string>('')
  const [age, setAge]               = useState<string>('')
  const [sourceFilter, setSourceFilter] = useState<string>('')  // '' | 'pil' | 'uhdb' | 'darwin'
  const [openDoc, setOpenDoc]       = useState<OpenDoc | null>(null)
  const [showGuidance, setShowGuidance] = useState(false)
  const [isMobile]                  = useState(() => window.innerWidth < 768)
  const searchRef                   = useRef<HTMLInputElement>(null)

  const switchMode = (m: Mode) => { setMode(m); setCat(null); setTrust(''); setProvider(''); setAge(''); setSourceFilter('') }

  // Open a specific doc when linked from a note (form:<id> cross-link)
  useEffect(() => {
    const reqId = formOpenReq?.id
    if (!reqId) return
    const ref = REFERRAL_FORMS.find(f => f.id === reqId)
    const doc = ref ?? PATHWAY_DOCS.find(f => f.id === reqId)
    if (doc) { setMode(ref ? 'referral' : 'pathway'); setOpenDoc({ title: doc.title, url: doc.url, referral: ref }) }
  }, [formOpenReq?.seq, formOpenReq?.id])

  // ── Referral results ──
  const referralResults = useMemo(() => {
    const q = search.toLowerCase().trim()
    const tokens = q.split(/\s+/).filter(Boolean)
    const rows = REFERRAL_FORMS
      .filter(f => (!cat || f.category === cat) &&
                   (!trust || f.trust === trust) &&
                   (!provider || f.provider === provider) &&
                   (!age || f.age === age))
      .map(f => ({ f, s: q ? scoreReferral(f, q, tokens) : 1 }))
      .filter(x => x.s > 0)
    rows.sort((a, b) => b.s - a.s || a.f.title.localeCompare(b.f.title))
    return rows.map(x => x.f)
  }, [search, cat, trust, provider, age])

  // ── Pathway results (PILs + UHDB shared-care + Darwin practice + resources) ──
  const srcMatch = (f: GPForm) =>
    !sourceFilter ||
    (sourceFilter === 'pil' ? !f.source : f.source === sourceFilter)

  const pathwayResults = useMemo(() => {
    const q = search.toLowerCase().trim()
    return PATHWAY_DOCS.filter(f => {
      const catMatch = !cat || f.category === cat
      const sMatch = !q || f.title.toLowerCase().includes(q) || f.keywords.includes(q) || f.category.toLowerCase().includes(q)
      return catMatch && srcMatch(f) && sMatch
    })
  }, [search, cat, sourceFilter])

  const isReferral = mode === 'referral'
  const results = isReferral ? referralResults : pathwayResults
  const catList = isReferral
    ? REFERRAL_CATEGORIES.filter(c => REFERRAL_FORMS.some(f => f.category === c))
    : PATH_CATEGORIES.filter(c => PATHWAY_DOCS.some(f => f.category === c && srcMatch(f)))
  const labelFor = (c: string) => isReferral ? c : (PATH_LABELS[c] ?? c)

  // ── PDF viewer ──
  if (openDoc) {
    const tip = openDoc.referral ? guidanceForForm(openDoc.referral) : null
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', backgroundColor: NAVY, color: '#fff', flexShrink: 0 }}>
          <button onClick={() => setOpenDoc(null)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: 8, padding: '5px 12px', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>← Back</button>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{openDoc.title}</div>
          <a href={openDoc.url} target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '5px 12px', color: '#fff', fontSize: 12, textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}>↗ Open</a>
        </div>
        {/* Contextual "how to send" banner (referral forms only) */}
        {tip && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '8px 14px', backgroundColor: '#fffaf0', borderBottom: '1px solid #f0e0c0', flexShrink: 0, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 15, lineHeight: 1.3 }}>📮</span>
            <div style={{ flex: 1, minWidth: 200, fontSize: 12.5, color: '#7b4a12', lineHeight: 1.45 }}>
              <b style={{ color: '#92400e' }}>How to send:</b> {tip.method}
              {tip.email && <> — <a href={`mailto:${tip.email}`} style={{ color: '#2b6cb0', fontWeight: 600 }}>{tip.email}</a></>}
              {tip.note && <div style={{ marginTop: 2, color: '#8a6d3b' }}>{tip.note}</div>}
            </div>
            <button onClick={() => setShowGuidance(true)} style={{ border: '1px solid #e0c88a', background: '#fff', color: '#92400e', borderRadius: 8, padding: '4px 10px', fontSize: 11.5, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Full guidance →</button>
          </div>
        )}
        <iframe src={openDoc.url} style={{ flex: 1, border: 'none', width: '100%' }} title={openDoc.title} />
        {showGuidance && <ReferralGuidance onClose={() => setShowGuidance(false)} />}
      </div>
    )
  }

  const showFacets = isReferral

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 6, padding: '10px 12px 4px', flexShrink: 0, backgroundColor: '#fff' }}>
        {(['referral', 'pathway'] as Mode[]).map(m => {
          const on = mode === m
          const label = m === 'referral' ? `Referral forms` : 'Pathways & guidance'
          const count = m === 'referral' ? REFERRAL_FORMS.length : PATHWAY_DOCS.length
          return (
            <button key={m} onClick={() => switchMode(m)} style={{
              flex: 1, padding: '9px 12px', borderRadius: 10, cursor: 'pointer',
              border: `1.5px solid ${on ? NAVY : '#dde6f0'}`,
              background: on ? NAVY : '#fff', color: on ? '#fff' : '#475569',
              fontSize: 13.5, fontWeight: on ? 700 : 600, transition: 'all 0.12s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
            }}>
              <span>{m === 'referral' ? '🏥' : '📋'}</span>{label}
              <span style={{ fontSize: 11, opacity: 0.7, fontWeight: 600 }}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* Search bar */}
      <div style={{ padding: '6px 12px', flexShrink: 0, backgroundColor: '#fff' }}>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: '#94a3b8' }}>🔍</span>
          <input
            ref={searchRef} value={search} onChange={e => setSearch(e.target.value)}
            placeholder={isReferral ? 'Search referral forms — name, trust, condition…' : 'Search flowcharts, pathways, guidelines…'}
            style={{ width: '100%', boxSizing: 'border-box', paddingLeft: 34, paddingRight: search ? 32 : 12, paddingTop: 9, paddingBottom: 9, border: '1.5px solid #dde6f0', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#f7f9fb', color: '#1e293b' }}
            onFocus={e => (e.currentTarget.style.borderColor = NAVY)} onBlur={e => (e.currentTarget.style.borderColor = '#dde6f0')}
          />
          {search && <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 16, padding: 2 }}>✕</button>}
        </div>
      </div>

      {/* Facet filters (referral only) */}
      {showFacets && (
        <div style={{ display: 'flex', gap: 6, padding: '2px 12px 6px', flexShrink: 0, backgroundColor: '#fff', flexWrap: 'wrap', alignItems: 'center' }}>
          <FacetSelect label="Trust" value={trust} setValue={setTrust} options={REFERRAL_TRUSTS} />
          <FacetSelect label="Provider" value={provider} setValue={setProvider} options={REFERRAL_PROVIDERS} />
          <FacetSelect label="Age" value={age} setValue={setAge} options={['Adult', 'Child']} />
          {(trust || provider || age) && (
            <button onClick={() => { setTrust(''); setProvider(''); setAge('') }}
              style={{ border: 'none', background: 'none', color: NAVY, fontSize: 12, fontWeight: 600, cursor: 'pointer', padding: '4px 6px' }}>Clear filters ✕</button>
          )}
          <button onClick={() => setShowGuidance(true)} title="How to process referrals (Lexacom, Accumail, e-RS, emails)"
            style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 8, border: '1.5px solid #e0c88a', background: '#fffaf0', color: '#92400e', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}>
            📮 How to send referrals
          </button>
        </div>
      )}

      {/* Source filter (pathways only) */}
      {!isReferral && (
        <div style={{ display: 'flex', gap: 6, padding: '2px 12px 6px', flexShrink: 0, backgroundColor: '#fff', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>Source:</span>
          {(['', 'pil', 'uhdb', 'darwin'] as const).map(s => {
            const on = sourceFilter === s
            const label = s === '' ? 'All' : SOURCE_LABELS[s]
            const n = s === '' ? PATHWAY_DOCS.length : PATHWAY_DOCS.filter(f => s === 'pil' ? !f.source : f.source === s).length
            return (
              <button key={s || 'all'} onClick={() => setSourceFilter(s)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 20, cursor: 'pointer',
                border: `1.5px solid ${on ? '#2b6cb0' : '#dde6f0'}`, background: on ? '#2b6cb0' : '#fff',
                color: on ? '#fff' : '#475569', fontSize: 12, fontWeight: on ? 700 : 600, transition: 'all 0.12s',
              }}>
                {s === 'uhdb' ? '🧪 ' : s === 'darwin' ? '🏠 ' : ''}{label}
                <span style={{ fontSize: 10, opacity: 0.7 }}>{n}</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Category pills */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '4px 12px 8px', flexShrink: 0, backgroundColor: '#fff', borderBottom: '1px solid #e2ecf7', scrollbarWidth: 'none' }}>
        <button onClick={() => setCat(null)} style={pillStyle(cat === null)}>All</button>
        {catList.map(c => (
          <button key={c} onClick={() => setCat(cat === c ? null : c)} style={pillStyle(cat === c)}>{labelFor(c)}</button>
        ))}
      </div>

      {/* Count */}
      <div style={{ padding: '5px 14px 2px', fontSize: 11, color: '#94a3b8', flexShrink: 0 }}>
        {results.length} {isReferral ? 'referral form' : 'document'}{results.length !== 1 ? 's' : ''}
        {cat ? ` in ${labelFor(cat)}` : ''}{search ? ` matching “${search}”` : ''}
      </div>

      {/* Cards grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '6px 10px', paddingBottom: isMobile ? 70 : 12, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: 8, alignContent: 'start' }}>
        {results.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 20px', color: '#94a3b8', fontSize: 14 }}>
            No {isReferral ? 'referral forms' : 'documents'} found{search ? ` for “${search}”` : ''}
          </div>
        ) : isReferral
          ? (results as ReferralForm[]).map(f => <ReferralCard key={f.id} form={f} onOpen={() => setOpenDoc({ title: f.title, url: f.url, referral: f })} />)
          : (results as GPForm[]).map(f => <PathwayCard key={f.id} form={f} onOpen={() => setOpenDoc({ title: f.title, url: f.url })} />)
        }
      </div>

      {showGuidance && <ReferralGuidance onClose={() => setShowGuidance(false)} />}
    </div>
  )
}

// ── Facet dropdown ──────────────────────────────────────────────────────────
function FacetSelect({ label, value, setValue, options }: { label: string; value: string; setValue: (v: string) => void; options: string[] }) {
  const on = !!value
  return (
    <select value={value} onChange={e => setValue(e.target.value)} title={label}
      style={{
        fontSize: 12.5, fontWeight: on ? 700 : 500, padding: '5px 8px', borderRadius: 8,
        border: `1.5px solid ${on ? NAVY : '#dde6f0'}`, background: on ? '#eef3fb' : '#fff',
        color: on ? NAVY : '#475569', cursor: 'pointer', outline: 'none', fontFamily: 'inherit',
      }}>
      <option value="">{label}: All</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  )
}

// ── Referral card ───────────────────────────────────────────────────────────
function ReferralCard({ form, onOpen }: { form: ReferralForm; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)
  const color = catColor(form.category)
  return (
    <div onClick={onOpen} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#f0f5ff' : '#fff', border: `1px solid ${hovered ? '#b3c8f0' : '#e2ecf7'}`, borderRadius: 10, padding: '10px 12px', cursor: 'pointer', transition: 'all 0.12s', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 8, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>🏥</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', lineHeight: 1.3, marginBottom: 5 }}>{form.title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Badge text={form.category} color={color} solid />
          {form.trust && <Badge text={form.trust} color="#2b6cb0" title={TRUST_FULL[form.trust]} />}
          {form.provider && <Badge text={form.provider} color="#2c7a7b" />}
          {form.age && <Badge text={form.age} color="#805ad5" />}
        </div>
      </div>
      <div style={{ flexShrink: 0, color: '#94a3b8', fontSize: 16, alignSelf: 'center' }}>›</div>
    </div>
  )
}

// ── Pathway card ────────────────────────────────────────────────────────────
function PathwayCard({ form, onOpen }: { form: GPForm; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)
  const color = catColor(form.category)
  const icon = form.source === 'uhdb' ? '🧪' : form.source === 'darwin' ? '🏠' : '📄'
  return (
    <div onClick={onOpen} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#f0f5ff' : '#fff', border: `1px solid ${hovered ? '#b3c8f0' : '#e2ecf7'}`, borderRadius: 10, padding: '10px 12px', cursor: 'pointer', transition: 'all 0.12s', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 8, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', lineHeight: 1.3, marginBottom: 4 }}>{form.title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Badge text={PATH_LABELS[form.category] ?? form.category} color={color} solid />
          {form.source === 'uhdb' && <Badge text="UHDB shared care" color="#2b6cb0" title="UHDB shared-care result protocol" />}
          {form.source === 'darwin' && <Badge text="Darwin practice" color="#334155" title="Darwin practice-specific document" />}
        </div>
      </div>
      <div style={{ flexShrink: 0, color: '#94a3b8', fontSize: 16, alignSelf: 'center' }}>›</div>
    </div>
  )
}

function Badge({ text, color, solid, title }: { text: string; color: string; solid?: boolean; title?: string }) {
  return (
    <span title={title} style={{
      display: 'inline-block', fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.04em', color: solid ? color : color, background: color + (solid ? '18' : '12'),
      border: `1px solid ${color}${solid ? '30' : '22'}`, borderRadius: 4, padding: '1px 6px', whiteSpace: 'nowrap',
    }}>{text}</span>
  )
}

function pillStyle(active: boolean) {
  return {
    flexShrink: 0 as const, padding: '5px 12px', borderRadius: 20,
    border: `1.5px solid ${active ? NAVY : '#dde6f0'}`, background: active ? NAVY : '#fff',
    color: active ? '#fff' : '#475569', fontSize: 12, fontWeight: active ? 700 : 500,
    cursor: 'pointer' as const, whiteSpace: 'nowrap' as const, transition: 'all 0.12s',
  }
}
