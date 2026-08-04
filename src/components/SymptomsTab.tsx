import { useState, useRef, useEffect, useMemo } from 'react'
import { SYMPTOMS, SYMPTOM_SYSTEMS } from '../data/symptoms'
import type { Symptom, DdxItem, DdxGroup } from '../data/symptoms'

const GREEN = '#38a169'
const GREEN_DK = '#276749'
const NAVY = '#1a365d'
const RED = '#c53030'

function useIsDesktop() {
  const [d, setD] = useState(() => typeof window === 'undefined' ? true : window.innerWidth >= 768)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const h = () => setD(mq.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])
  return d
}

function openNote(id: string) {
  window.dispatchEvent(new CustomEvent('navigate-note', { detail: { id } }))
}

function matches(s: Symptom, q: string): boolean {
  const hay = [
    s.name, s.system, s.blurb,
    ...s.redFlags,
    ...s.ddx.flatMap(g => g.items.map(i => i.label)),
    ...(s.related ?? []).map(i => i.label),
  ].join(' ').toLowerCase()
  return q.toLowerCase().split(/\s+/).filter(Boolean).every(t => hay.includes(t))
}

const GROUP_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  common:  { color: GREEN_DK, bg: '#f0fff4', border: '#9ae6b4' },
  serious: { color: RED,      bg: '#fff5f5', border: '#feb2b2' },
  other:   { color: '#4a5568', bg: '#f7fafc', border: '#cbd5e0' },
}

export default function SymptomsTab() {
  const isDesktop = useIsDesktop()
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState<string>(SYMPTOMS[0].id)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(
    () => query.trim() ? SYMPTOMS.filter(s => matches(s, query.trim())) : SYMPTOMS,
    [query],
  )

  // Group filtered symptoms by system, preserving SYMPTOM_SYSTEMS order
  const grouped = useMemo(() => {
    return SYMPTOM_SYSTEMS
      .map(sys => ({ system: sys, items: filtered.filter(s => s.system === sys) }))
      .filter(g => g.items.length > 0)
  }, [filtered])

  const active = SYMPTOMS.find(s => s.id === activeId) ?? SYMPTOMS[0]
  const activeVisible = filtered.some(s => s.id === activeId)

  // When the active symptom is filtered out, jump to the first remaining result
  useEffect(() => {
    if (!activeVisible && filtered.length > 0) setActiveId(filtered[0].id)
  }, [activeVisible, filtered])

  function selectSymptom(id: string) {
    setActiveId(id)
    scrollerRef.current?.scrollTo({ top: 0 })
  }

  // ── Left rail ──────────────────────────────────────────────────────────
  const rail = (
    <div style={{
      width: isDesktop ? 244 : '100%',
      flexShrink: 0,
      display: 'flex', flexDirection: 'column',
      backgroundColor: '#f7f9fb',
      borderRight: isDesktop ? '1px solid #d6e0ec' : 'none',
      borderBottom: isDesktop ? 'none' : '1px solid #d6e0ec',
      minHeight: 0,
      maxHeight: isDesktop ? '100%' : '42%',
      height: isDesktop ? '100%' : 'auto',
    }}>
      {/* Search */}
      <div style={{ padding: '12px 12px 8px', flexShrink: 0 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          backgroundColor: '#fff', border: '1.5px solid #dde6f0',
          borderRadius: 10, padding: '7px 11px',
        }}
          onFocusCapture={e => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.boxShadow = `0 0 0 3px ${GREEN}22` }}
          onBlurCapture={e => { e.currentTarget.style.borderColor = '#dde6f0'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <span style={{ fontSize: 14, color: '#a0aec0' }}>🔍</span>
          <input
            type="text"
            placeholder="Search presentations…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#1a202c', minWidth: 0 }}
          />
          {query && (
            <button onClick={() => setQuery('')} title="Clear"
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: 17, lineHeight: 1 }}>×</button>
          )}
        </div>
        <div style={{ fontSize: 11, color: '#718096', margin: '8px 2px 0', fontWeight: 600 }}>
          {filtered.length} presentation{filtered.length !== 1 ? 's' : ''} · {grouped.length} system{grouped.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Grouped list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 8px 20px', minHeight: 0 }}>
        {grouped.length === 0 && (
          <div style={{ padding: '30px 12px', textAlign: 'center', color: '#a0aec0', fontSize: 13 }}>
            No presentations match “{query}”.
          </div>
        )}
        {grouped.map(g => (
          <div key={g.system} style={{ marginBottom: 10 }}>
            <div style={{
              fontSize: 10.5, fontWeight: 700, color: '#8497b0',
              textTransform: 'uppercase', letterSpacing: '0.06em',
              padding: '6px 8px 4px',
            }}>{g.system}</div>
            {g.items.map(s => {
              const on = s.id === activeId
              return (
                <button
                  key={s.id}
                  onClick={() => selectSymptom(s.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 9,
                    padding: '8px 9px', marginBottom: 1,
                    border: 'none', borderRadius: 8, cursor: 'pointer',
                    textAlign: 'left',
                    backgroundColor: on ? '#e6f6ec' : 'transparent',
                    boxShadow: on ? `inset 3px 0 0 ${GREEN}` : 'none',
                    transition: 'background 0.12s',
                  }}
                  onMouseEnter={e => { if (!on) e.currentTarget.style.backgroundColor = '#eef3f9' }}
                  onMouseLeave={e => { if (!on) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  <span style={{ fontSize: 16, flexShrink: 0, width: 20, textAlign: 'center' }}>{s.icon}</span>
                  <span style={{
                    fontSize: 13.5, fontWeight: on ? 700 : 500,
                    color: on ? GREEN_DK : '#2d3748', lineHeight: 1.25,
                  }}>{s.name}</span>
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )

  // ── Detail pane ────────────────────────────────────────────────────────
  const detail = (
    <div ref={scrollerRef} style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: 'auto', backgroundColor: '#fbfdff' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: isDesktop ? '22px 26px 60px' : '16px 16px 60px' }}>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 30, lineHeight: 1, flexShrink: 0 }}>{active.icon}</span>
          <div style={{ minWidth: 0 }}>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#0f2a4a', letterSpacing: '-0.3px' }}>{active.name}</h1>
            <span style={{
              display: 'inline-block', marginTop: 6, fontSize: 11, fontWeight: 700,
              color: GREEN_DK, backgroundColor: '#e6f6ec', border: `1px solid ${GREEN}44`,
              padding: '2px 9px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>{active.system}</span>
          </div>
        </div>
        <p style={{ fontSize: 14.5, color: '#4a5568', lineHeight: 1.55, margin: '10px 0 20px' }}>{active.blurb}</p>

        {/* Red flags */}
        <section style={{
          backgroundColor: '#fff5f5', border: '1px solid #feb2b2',
          borderLeft: `5px solid ${RED}`, borderRadius: 10,
          padding: '13px 16px', marginBottom: 22,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 15 }}>🚩</span>
            <h2 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Red flags</h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {active.redFlags.map((f, i) => (
              <li key={i} style={{ fontSize: 13.5, color: '#742a2a', lineHeight: 1.5 }}>{f}</li>
            ))}
          </ul>
        </section>

        {/* Differential */}
        <h2 style={{ fontSize: 13, fontWeight: 800, color: NAVY, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
          Differential diagnosis
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
          {active.ddx.map((group, gi) => <DdxCard key={gi} group={group} />)}
        </div>

        {/* Investigations */}
        <section style={{
          backgroundColor: '#f0f7ff', border: '1px solid #cfe1f5',
          borderLeft: '5px solid #2b6cb0', borderRadius: 10,
          padding: '13px 16px', marginBottom: active.related?.length ? 20 : 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 15 }}>🧪</span>
            <h2 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#2b6cb0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>First-line investigations</h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {active.investigations.map((iv, i) => (
              <li key={i} style={{ fontSize: 13.5, color: '#2a4365', lineHeight: 1.5 }}>{iv}</li>
            ))}
          </ul>
        </section>

        {/* Related notes */}
        {active.related && active.related.length > 0 && (
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 700, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>
              Related notes
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {active.related.map((r, i) => <NoteChip key={i} item={r} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div style={{
      display: 'flex', flexDirection: isDesktop ? 'row' : 'column',
      height: '100%', overflow: 'hidden',
    }}>
      {rail}
      {detail}
    </div>
  )
}

// ── DDx group card ─────────────────────────────────────────────────────────
function DdxCard({ group }: { group: DdxGroup }) {
  const st = GROUP_STYLE[group.variant ?? 'other']
  return (
    <div style={{ border: `1px solid ${st.border}`, borderRadius: 10, overflow: 'hidden' }}>
      <div style={{
        backgroundColor: st.bg, padding: '7px 14px',
        fontSize: 12, fontWeight: 800, color: st.color,
        textTransform: 'uppercase', letterSpacing: '0.04em',
        borderBottom: `1px solid ${st.border}`,
      }}>{group.heading}</div>
      <div style={{ backgroundColor: '#fff', padding: '6px 8px', display: 'flex', flexDirection: 'column' }}>
        {group.items.map((item, i) => <DdxRow key={i} item={item} accent={st.color} />)}
      </div>
    </div>
  )
}

function DdxRow({ item, accent }: { item: DdxItem; accent: string }) {
  const clickable = !!item.note
  return (
    <button
      disabled={!clickable}
      onClick={() => item.note && openNote(item.note)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
        width: '100%', textAlign: 'left', padding: '7px 8px',
        border: 'none', background: 'transparent',
        borderRadius: 6, cursor: clickable ? 'pointer' : 'default',
        transition: 'background 0.12s',
      }}
      onMouseEnter={e => { if (clickable) e.currentTarget.style.backgroundColor = '#f4f8fc' }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
    >
      <span style={{ fontSize: 14, color: clickable ? NAVY : '#4a5568', fontWeight: clickable ? 600 : 500, lineHeight: 1.4 }}>
        <span style={{ color: accent, marginRight: 8, fontWeight: 700 }}>›</span>
        {item.label}
      </span>
      {clickable && (
        <span style={{ fontSize: 11, color: '#a0aec0', flexShrink: 0, whiteSpace: 'nowrap' }}>note →</span>
      )}
    </button>
  )
}

function NoteChip({ item }: { item: DdxItem }) {
  const clickable = !!item.note
  return (
    <button
      disabled={!clickable}
      onClick={() => item.note && openNote(item.note)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 12px', borderRadius: 20,
        border: '1px solid #cfe1f5', backgroundColor: '#fff',
        color: NAVY, fontSize: 13, fontWeight: 600,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'background 0.12s, border-color 0.12s',
      }}
      onMouseEnter={e => { if (clickable) { e.currentTarget.style.backgroundColor = '#eff6ff'; e.currentTarget.style.borderColor = '#2b6cb0' } }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#cfe1f5' }}
    >
      📝 {item.label}
    </button>
  )
}
