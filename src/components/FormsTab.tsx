import { useState, useMemo, useRef } from 'react'
import { FORMS } from '../data/forms'
import type { GPForm } from '../data/forms'

const NAVY = '#1a365d'

// Canonical category order + display labels
const CATEGORY_LABELS: Record<string, string> = {
  Cardiology:   'Cardiology',
  Respiratory:  'Respiratory',
  Derm:         'Dermatology',
  MH:           'Mental Health',
  Diabetes:     'Diabetes',
  MSK:          'MSK',
  Gastro:       'Gastro',
  Gynae:        'Gynaecology',
  Paeds:        'Paediatrics',
  Neuro:        'Neurology',
  Endocrine:    'Endocrine',
  Renal:        'Renal',
  Infection:    'Infection',
  Haem:         'Haematology',
  Urology:      'Urology',
  ENT:          'ENT',
  Ophthalmology:'Ophthalmology',
  Breast:       'Breast',
  Rheumatology: 'Rheumatology',
  Palliative:   'Palliative',
  Meds:         'Medications',
  Surgical:     'Surgical',
  UGI:          'Upper GI',
  DVLA:         'DVLA',
}

const CATEGORIES = Object.keys(CATEGORY_LABELS)

export default function FormsTab() {
  const [search, setSearch]         = useState('')
  const [activeCategory, setCategory] = useState<string | null>(null)
  const [openForm, setOpenForm]     = useState<GPForm | null>(null)
  const [isMobile]                  = useState(() => window.innerWidth < 768)
  const searchRef                   = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return FORMS.filter(f => {
      const catMatch = !activeCategory || f.category === activeCategory
      const searchMatch = !q ||
        f.title.toLowerCase().includes(q) ||
        f.keywords.includes(q) ||
        f.category.toLowerCase().includes(q)
      return catMatch && searchMatch
    })
  }, [search, activeCategory])

  const handleOpen = (form: GPForm) => setOpenForm(form)
  const handleClose = () => setOpenForm(null)

  // PDF viewer
  if (openForm) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Viewer toolbar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 14px',
          backgroundColor: NAVY, color: '#fff',
          flexShrink: 0,
        }}>
          <button
            onClick={handleClose}
            style={{
              background: 'rgba(255,255,255,0.15)', border: 'none',
              color: '#fff', borderRadius: 8, padding: '5px 12px',
              cursor: 'pointer', fontSize: 13, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 5,
            }}
          >
            ← Back
          </button>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {openForm.title}
          </div>
          <a
            href={openForm.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.15)', borderRadius: 8,
              padding: '5px 12px', color: '#fff', fontSize: 12,
              textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap',
            }}
          >
            ↗ Open
          </a>
        </div>

        {/* PDF iframe */}
        <iframe
          src={openForm.url}
          style={{ flex: 1, border: 'none', width: '100%' }}
          title={openForm.title}
        />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* Search bar */}
      <div style={{ padding: '10px 12px 6px', flexShrink: 0, backgroundColor: '#fff', borderBottom: '1px solid #e2ecf7' }}>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: '#94a3b8' }}>🔍</span>
          <input
            ref={searchRef}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search flowcharts, pathways, guidelines..."
            style={{
              width: '100%', boxSizing: 'border-box',
              paddingLeft: 34, paddingRight: search ? 32 : 12,
              paddingTop: 9, paddingBottom: 9,
              border: '1.5px solid #dde6f0', borderRadius: 10,
              fontSize: 14, outline: 'none', fontFamily: 'inherit',
              background: '#f7f9fb', color: '#1e293b',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = NAVY)}
            onBlur={e => (e.currentTarget.style.borderColor = '#dde6f0')}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 16, padding: 2,
            }}>✕</button>
          )}
        </div>
      </div>

      {/* Category filter pills */}
      <div style={{
        display: 'flex', gap: 6, overflowX: 'auto', padding: '8px 12px',
        flexShrink: 0, backgroundColor: '#fff', borderBottom: '1px solid #e2ecf7',
        scrollbarWidth: 'none',
      }}>
        <button
          onClick={() => setCategory(null)}
          style={pillStyle(activeCategory === null)}
        >All</button>
        {CATEGORIES.filter(c => FORMS.some(f => f.category === c)).map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(activeCategory === cat ? null : cat)}
            style={pillStyle(activeCategory === cat)}
          >
            {CATEGORY_LABELS[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div style={{ padding: '5px 14px 2px', fontSize: 11, color: '#94a3b8', flexShrink: 0 }}>
        {filtered.length} document{filtered.length !== 1 ? 's' : ''}
        {activeCategory ? ` in ${CATEGORY_LABELS[activeCategory] ?? activeCategory}` : ''}
        {search ? ` matching "${search}"` : ''}
      </div>

      {/* Cards grid */}
      <div style={{
        flex: 1, overflowY: 'auto',
        padding: '6px 10px',
        paddingBottom: isMobile ? 70 : 12,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 8,
        alignContent: 'start',
      }}>
        {filtered.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 20px', color: '#94a3b8', fontSize: 14 }}>
            No documents found for "{search}"
          </div>
        ) : filtered.map(form => (
          <FormCard key={form.id} form={form} onOpen={handleOpen} />
        ))}
      </div>
    </div>
  )
}

function FormCard({ form, onOpen }: { form: GPForm; onOpen: (f: GPForm) => void }) {
  const [hovered, setHovered] = useState(false)
  const label = CATEGORY_LABELS[form.category] ?? form.category
  const catColor = CAT_COLORS[form.category] ?? '#64748b'

  return (
    <div
      onClick={() => onOpen(form)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#f0f5ff' : '#fff',
        border: `1px solid ${hovered ? '#b3c8f0' : '#e2ecf7'}`,
        borderRadius: 10,
        padding: '10px 12px',
        cursor: 'pointer',
        transition: 'all 0.12s',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
      }}
    >
      {/* PDF icon */}
      <div style={{
        flexShrink: 0, width: 36, height: 36, borderRadius: 8,
        background: catColor + '18',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18,
      }}>📄</div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', lineHeight: 1.3, marginBottom: 4 }}>
          {form.title}
        </div>
        <span style={{
          display: 'inline-block',
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.05em', color: catColor,
          background: catColor + '18', borderRadius: 4, padding: '1px 6px',
        }}>
          {label}
        </span>
      </div>

      <div style={{ flexShrink: 0, color: '#94a3b8', fontSize: 16, alignSelf: 'center' }}>›</div>
    </div>
  )
}

function pillStyle(active: boolean) {
  return {
    flexShrink: 0 as const,
    padding: '5px 12px',
    borderRadius: 20,
    border: `1.5px solid ${active ? NAVY : '#dde6f0'}`,
    background: active ? NAVY : '#fff',
    color: active ? '#fff' : '#475569',
    fontSize: 12,
    fontWeight: active ? 700 : 500,
    cursor: 'pointer' as const,
    whiteSpace: 'nowrap' as const,
    transition: 'all 0.12s',
  }
}

const CAT_COLORS: Record<string, string> = {
  Cardiology:   '#e53e3e',
  Respiratory:  '#3182ce',
  Derm:         '#d69e2e',
  MH:           '#805ad5',
  Diabetes:     '#38a169',
  MSK:          '#dd6b20',
  Gastro:       '#c05621',
  Gynae:        '#d53f8c',
  Paeds:        '#00b5d8',
  Neuro:        '#6b46c1',
  Endocrine:    '#2f855a',
  Renal:        '#2b6cb0',
  Infection:    '#c53030',
  Haem:         '#9b2335',
  Urology:      '#2c7a7b',
  ENT:          '#285e61',
  Ophthalmology:'#553c9a',
  Breast:       '#b83280',
  Rheumatology: '#744210',
  Palliative:   '#4a5568',
  Meds:         '#1a365d',
  Surgical:     '#2d3748',
  UGI:          '#7b341e',
  DVLA:         '#4a5568',
}
