import { useState, useEffect, useRef, useCallback } from 'react'
import { searchAll } from '../lib/searchIndex'
import type { UnifiedResult } from '../lib/searchIndex'
import type { TabId } from '../types'

const NAVY = '#1a365d'

interface Props {
  isOpen: boolean
  onClose: () => void
  onNavigate: (tab: TabId, id: string) => void
  onAsk: (query: string) => void
}

const KIND_META: Record<string, { icon: string; section: string }> = {
  note:       { icon: '📝', section: 'Notes' },
  form:       { icon: '📋', section: 'Forms' },
  link:       { icon: '🔗', section: 'Links' },
  calculator: { icon: '🧮', section: 'Calculators' },
}

// ── PDF Viewer (full-screen overlay within the palette) ────────────────────
function PdfViewer({
  url, title, onBack, onClose,
}: { url: string; title: string; onBack: () => void; onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1100,
      display: 'flex', flexDirection: 'column', backgroundColor: '#fff',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 14px', backgroundColor: NAVY, color: '#fff', flexShrink: 0,
      }}>
        <button onClick={onBack} style={{
          background: 'rgba(255,255,255,0.15)', border: 'none',
          color: '#fff', borderRadius: 8, padding: '5px 12px',
          cursor: 'pointer', fontSize: 13, fontWeight: 600,
        }}>← Back</button>
        <div style={{
          flex: 1, fontSize: 13, fontWeight: 600,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{title}</div>
        <a
          href={url} target="_blank" rel="noopener noreferrer"
          style={{
            background: 'rgba(255,255,255,0.15)', borderRadius: 8,
            padding: '5px 12px', color: '#fff', fontSize: 12,
            textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap',
          }}
        >↗ Open</a>
        <button onClick={onClose} style={{
          background: 'rgba(255,255,255,0.15)', border: 'none',
          color: '#fff', borderRadius: 8, padding: '5px 12px',
          cursor: 'pointer', fontSize: 13, fontWeight: 600,
        }}>✕ Close</button>
      </div>
      <iframe src={url} style={{ flex: 1, border: 'none', width: '100%' }} title={title} />
    </div>
  )
}

// ── Main CommandPalette ────────────────────────────────────────────────────
export default function CommandPalette({ isOpen, onClose, onNavigate, onAsk }: Props) {
  const [query, setQuery]   = useState('')
  const [results, setResults] = useState<ReturnType<typeof searchAll>>({
    notes: [], forms: [], links: [], calculators: [],
  })
  const [activeIdx, setActiveIdx] = useState(0)
  const [pdf, setPdf] = useState<{ url: string; title: string } | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // ── Build flat list for keyboard nav ──────────────────────────────────────
  const hasQuery = query.trim().length >= 1
  const flatItems: Array<{ type: 'ask' } | (UnifiedResult & { _flatIdx: number })> = []
  if (hasQuery) flatItems.push({ type: 'ask' })

  const SECTION_ORDER = ['note', 'form', 'link', 'calculator'] as const
  const allResults: UnifiedResult[] = [
    ...results.notes, ...results.forms, ...results.links, ...results.calculators,
  ]
  allResults.forEach(r => flatItems.push({ ...r, _flatIdx: flatItems.length }))

  // Map (kind+id) → flatIdx for section rendering
  const idxMap = new Map<string, number>()
  flatItems.forEach((item, i) => {
    if ('kind' in item) idxMap.set(item.kind + item.id, i)
  })

  // ── Lifecycle ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) { setQuery(''); setPdf(null); return }
    const t = setTimeout(() => inputRef.current?.focus(), 60)
    return () => clearTimeout(t)
  }, [isOpen])

  useEffect(() => {
    setResults(searchAll(query))
    setActiveIdx(0)
  }, [query])

  // Global ⌘K shortcut (signal to parent via event)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('gpr-open-palette'))
      }
      if (e.key === 'Escape' && isOpen) {
        if (pdf) setPdf(null)
        else onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose, pdf])

  // ── Pick a result ─────────────────────────────────────────────────────────
  const pick = useCallback((item: typeof flatItems[number]) => {
    if ('type' in item) {
      // Ask AI
      onAsk(query.trim())
      onClose()
      return
    }
    const r = item as UnifiedResult
    switch (r.kind) {
      case 'note':
        window.dispatchEvent(new CustomEvent('navigate-note', { detail: { id: r.id, query: query.trim() } }))
        onClose()
        break
      case 'form':
        if (r.formUrl) setPdf({ url: r.formUrl, title: r.label })
        break
      case 'link':
        window.open(r.id, '_blank', 'noopener,noreferrer')
        onClose()
        break
      case 'calculator':
        onNavigate('calculators', r.id)
        onClose()
        break
    }
    setQuery('')
  }, [query, onAsk, onClose, onNavigate])

  // ── Keyboard navigation ───────────────────────────────────────────────────
  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, flatItems.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = flatItems[activeIdx]
      if (item) pick(item)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  const noResults = query.trim().length >= 2 && allResults.length === 0

  // ── Sections to render ────────────────────────────────────────────────────
  const sections = SECTION_ORDER
    .map(kind => ({
      kind,
      items: kind === 'note'       ? results.notes
           : kind === 'form'       ? results.forms
           : kind === 'link'       ? results.links
           : results.calculators,
    }))
    .filter(s => s.items.length > 0)

  // ── PDF viewer mode ───────────────────────────────────────────────────────
  if (pdf) {
    return (
      <PdfViewer
        url={pdf.url}
        title={pdf.title}
        onBack={() => setPdf(null)}
        onClose={() => { setPdf(null); onClose() }}
      />
    )
  }

  // ── Palette ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 990,
          backgroundColor: 'rgba(15,23,42,0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search everything"
        style={{
          position: 'fixed',
          top: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'min(92vw, 620px)',
          maxHeight: '78vh',
          backgroundColor: '#fff',
          borderRadius: 18,
          boxShadow: '0 32px 72px rgba(0,0,0,0.38), 0 0 0 1px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Search input row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '14px 16px',
          borderBottom: '1px solid #e8eef6',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 18, color: '#94a3b8', flexShrink: 0, lineHeight: 1 }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search notes, forms, links, calculators…"
            style={{
              flex: 1, border: 'none', outline: 'none',
              fontSize: 16, color: '#1e293b', fontFamily: 'inherit',
              minWidth: 0,
            }}
          />
          {query ? (
            <button
              onMouseDown={e => { e.preventDefault(); setQuery('') }}
              style={{
                border: 'none', background: 'none', cursor: 'pointer',
                color: '#94a3b8', fontSize: 20, lineHeight: 1, padding: 0, flexShrink: 0,
              }}
            >×</button>
          ) : (
            <kbd style={{
              flexShrink: 0, padding: '2px 7px', borderRadius: 6,
              border: '1px solid #dde6f0', fontSize: 11, color: '#94a3b8',
              background: '#f7f9fb', fontFamily: 'inherit',
            }}>Esc</kbd>
          )}
        </div>

        {/* Results area */}
        <div style={{ overflowY: 'auto', flex: 1 }}>

          {/* Ask AI — pinned first when there's a query */}
          {hasQuery && (
            <button
              onClick={() => { onAsk(query.trim()); onClose() }}
              onMouseEnter={() => setActiveIdx(0)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', textAlign: 'left', border: 'none', cursor: 'pointer',
                borderBottom: '1px solid #e8eef6',
                background: activeIdx === 0
                  ? 'linear-gradient(90deg, #f0f5ff 0%, #f5f0ff 100%)'
                  : 'linear-gradient(90deg, #f7faff 0%, #faf7ff 100%)',
                transition: 'background 0.12s',
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: `linear-gradient(135deg, ${NAVY} 0%, #2563a8 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>✨</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>
                  Ask AI: &ldquo;{query.trim()}&rdquo;
                </div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 1 }}>
                  Answer using your clinical reference notes
                </div>
              </div>
              <span style={{ flexShrink: 0, fontSize: 12, color: '#94a3b8' }}>↵</span>
            </button>
          )}

          {/* Empty / hint state */}
          {!hasQuery && (
            <div style={{ padding: '36px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 38, marginBottom: 10 }}>⌨️</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#334155' }}>
                Search everything
              </div>
              <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 6, lineHeight: 1.5 }}>
                Notes · Forms · Links · Calculators<br />
                or just type a clinical question for AI
              </div>
            </div>
          )}

          {/* No results */}
          {noResults && (
            <div style={{ padding: '28px 16px', textAlign: 'center', color: '#94a3b8', fontSize: 13 }}>
              No matches for &ldquo;{query}&rdquo; — press Enter to ask the AI
            </div>
          )}

          {/* Grouped result sections */}
          {sections.map(({ kind, items }) => {
            const meta = KIND_META[kind]
            return (
              <div key={kind}>
                <div style={{
                  padding: '10px 16px 4px',
                  fontSize: 10, fontWeight: 700, color: '#94a3b8',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  {meta.icon} {meta.section}
                </div>
                {items.map(item => {
                  const myIdx = idxMap.get(item.kind + item.id) ?? 0
                  const isActive = activeIdx === myIdx
                  const isDarwin = item.category === 'Darwin'
                  return (
                    <button
                      key={item.kind + item.id}
                      onClick={() => pick({ ...item, _flatIdx: myIdx })}
                      onMouseEnter={() => setActiveIdx(myIdx)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                        padding: '9px 16px', textAlign: 'left', border: 'none', cursor: 'pointer',
                        borderBottom: '1px solid #f3f6fa',
                        background: isActive ? '#eef4fb' : '#fff',
                        transition: 'background 0.1s',
                      }}
                    >
                      {/* Icon */}
                      <div style={{
                        width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                        background: isDarwin ? '#1a365d1a' : '#f0f4f8',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16,
                      }}>
                        {isDarwin ? '🏥' : meta.icon}
                      </div>

                      {/* Label + sublabel + snippet */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: 13, fontWeight: 600, color: '#1e293b',
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>{item.label}</div>
                        {item.snippet ? (
                          <div style={{
                            fontSize: 11, color: '#6b7280', marginTop: 2,
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                            backgroundColor: '#fef9c3', borderRadius: 4,
                            padding: '1px 6px',
                          }}>
                            {item.snippet}
                          </div>
                        ) : (
                          <div style={{ fontSize: 11, color: '#8a9bb0', marginTop: 1 }}>
                            {item.sublabel}
                          </div>
                        )}
                      </div>

                      {/* Action hint */}
                      <span style={{ flexShrink: 0, fontSize: 11, color: '#94a3b8' }}>
                        {item.kind === 'form'       ? 'View PDF →' :
                         item.kind === 'link'       ? '↗ Open'     :
                         item.kind === 'calculator' ? '→ Open'     :
                         '→'}
                      </span>
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* Footer hints */}
        <div style={{
          padding: '8px 16px', borderTop: '1px solid #e8eef6',
          display: 'flex', gap: 14, fontSize: 11, color: '#b0bccc',
          flexShrink: 0, flexWrap: 'wrap',
        }}>
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>Esc close</span>
          <span style={{ marginLeft: 'auto' }}>⌘K anytime</span>
        </div>
      </div>
    </>
  )
}
