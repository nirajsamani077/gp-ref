import { useState, useRef, useEffect } from 'react'
import { LINK_CATEGORIES } from '../data/links'
import type { TabId } from '../types'

const NAVY = '#1a365d'

// ── Search index: links + calculators ────────────────────────────────────────
interface SearchResult {
  label: string
  sublabel: string
  tab: TabId
  id: string          // URL for links, calc id for calculators
}

const CALC_ENTRIES: SearchResult[] = [
  { label: 'FeNO Calculator',               sublabel: 'Calculator · Fractional Exhaled Nitric Oxide', tab: 'calculators', id: 'feno' },
  { label: '6-CIT Cognitive Test',          sublabel: 'Calculator · Six Item Cognitive Impairment Test', tab: 'calculators', id: '6cit' },
]

const LINK_ENTRIES: SearchResult[] = LINK_CATEGORIES.flatMap(cat =>
  cat.links.map(l => ({ label: l.name, sublabel: `Link · ${cat.title}`, tab: 'links' as TabId, id: l.url }))
)

const ALL_ENTRIES = [...CALC_ENTRIES, ...LINK_ENTRIES]

function searchEntries(q: string): SearchResult[] {
  const lower = q.toLowerCase()
  return ALL_ENTRIES.filter(e =>
    e.label.toLowerCase().includes(lower) || e.sublabel.toLowerCase().includes(lower)
  ).slice(0, 8)
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  onNavigate: (tab: TabId, id: string) => void
}

export default function Header({ onNavigate }: Props) {
  const [query, setQuery]       = useState('')
  const [results, setResults]   = useState<SearchResult[]>([])
  const [open, setOpen]         = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const q = query.trim()
    if (q.length < 2) { setResults([]); setOpen(false); return }
    const hits = searchEntries(q)
    setResults(hits)
    setOpen(hits.length > 0)
    setActiveIdx(-1)
  }, [query])

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function pick(result: SearchResult) {
    onNavigate(result.tab, result.id)
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      const idx = activeIdx >= 0 ? activeIdx : 0
      if (results[idx]) pick(results[idx])
    } else if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      backgroundColor: NAVY,
      display: 'flex', alignItems: 'center',
      padding: '0 16px', height: 52,
      boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
      gap: 12,
    }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, letterSpacing: '0.3px', flexShrink: 0 }}>
        GP Ref
      </span>

      {/* Global search — links & calculators */}
      <div ref={containerRef} style={{ marginLeft: 'auto', position: 'relative', width: '100%', maxWidth: 280 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          backgroundColor: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 8, padding: '5px 10px',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, flexShrink: 0 }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Links & calculators…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            onFocus={() => { if (results.length) setOpen(true) }}
            style={{
              flex: 1, border: 'none', background: 'transparent', outline: 'none',
              fontSize: 13, color: '#fff', minWidth: 0,
            }}
          />
          {query && (
            <button
              onMouseDown={e => { e.preventDefault(); setQuery(''); setOpen(false) }}
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1, padding: 0, flexShrink: 0 }}
            >×</button>
          )}
        </div>

        {/* Dropdown */}
        {open && results.length > 0 && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', right: 0,
            width: '100%', minWidth: 260,
            backgroundColor: '#fff', border: '1px solid #dce6f0',
            borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            zIndex: 200, overflow: 'hidden',
          }}>
            {results.map((r, i) => (
              <button
                key={r.id}
                onMouseDown={e => { e.preventDefault(); pick(r) }}
                style={{
                  width: '100%', padding: '10px 14px',
                  display: 'flex', flexDirection: 'column', gap: 2,
                  textAlign: 'left', border: 'none', cursor: 'pointer',
                  backgroundColor: i === activeIdx ? '#eef4fb' : '#fff',
                  borderBottom: i < results.length - 1 ? '1px solid #f0f4f8' : 'none',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1a365d' }}>{r.label}</span>
                <span style={{ fontSize: 11, color: '#8a9bb0' }}>{r.sublabel}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
