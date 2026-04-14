import { useState, useRef, useEffect, useCallback } from 'react'
import type { TabId } from '../types'
import { search, type SearchResult } from '../data/searchIndex'

const MIN_CHARS = 3   // don't search until at least 3 characters typed
const DEBOUNCE  = 150 // ms — smooths out fast typing

interface Props {
  onNavigate: (tabId: TabId, itemId: string, query?: string) => void
}

export default function SearchBar({ onNavigate }: Props) {
  const [query, setQuery]           = useState('')
  const [results, setResults]       = useState<SearchResult[]>([])
  const [activeIdx, setActiveIdx]   = useState(-1)
  const [open, setOpen]             = useState(false)
  const containerRef                = useRef<HTMLDivElement>(null)
  const inputRef                    = useRef<HTMLInputElement>(null)

  // Debounced search — only runs when ≥ MIN_CHARS characters typed
  useEffect(() => {
    const q = query.trim()
    if (q.length < MIN_CHARS) {
      setResults([])
      setOpen(false)
      setActiveIdx(-1)
      return
    }
    const timer = setTimeout(() => {
      const hits = search(q)
      setResults(hits)
      // Keep the dropdown open even on zero results so the empty state is visible
      setOpen(true)
      setActiveIdx(-1)
    }, DEBOUNCE)
    return () => clearTimeout(timer)
  }, [query])

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const close = useCallback(() => {
    setQuery('')
    setResults([])
    setOpen(false)
    setActiveIdx(-1)
  }, [])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      close()
      inputRef.current?.blur()
      return
    }
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      // If arrow-key was used to highlight a row, pick that row;
      // otherwise pick the top result automatically
      const idx = activeIdx >= 0 ? activeIdx : 0
      if (results[idx]) pick(results[idx])
    }
  }

  function pick(result: SearchResult) {
    const q = query.trim()
    onNavigate(result.tabId, result.itemId, q)
    close()
    inputRef.current?.blur()
  }

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search… (3+ chars)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 6,
          color: '#fff',
          fontSize: 14,
          padding: '5px 10px',
          outline: 'none',
          width: 190,
          caretColor: '#fff',
        }}
      />

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            width: 340,
            backgroundColor: '#fff',
            border: '1px solid #dce6f0',
            borderRadius: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            zIndex: 200,
            maxHeight: 420,
            overflowY: 'auto',
          }}
        >
          {results.length === 0 ? (
            <div style={{ padding: '20px 16px', textAlign: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#4a5568', marginBottom: 4 }}>
                No results for "{query.trim()}"
              </p>
              <p style={{ fontSize: 12, color: '#a0aec0', lineHeight: 1.5 }}>
                Try different terms or search the <strong>Notes</strong> tab for clinical content.
              </p>
            </div>
          ) : results.map((r, idx) => {
            const isActive = idx === activeIdx
            return (
              <button
                key={r.id}
                // onMouseDown + preventDefault keeps the input focused so
                // the query is still readable when pick() captures it
                onMouseDown={(e) => { e.preventDefault(); pick(r) }}
                onMouseEnter={() => setActiveIdx(idx)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px 14px',
                  textAlign: 'left',
                  background: isActive ? '#eef4fb' : '#fff',
                  border: 'none',
                  borderBottom: '1px solid #f0f4f8',
                  cursor: 'pointer',
                  transition: 'background 0.1s',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1a365d', display: 'block' }}>
                  {r.name}
                </span>
                <span style={{ fontSize: 12, color: '#8a9bb0', display: 'block', marginTop: 1 }}>
                  {r.label}
                </span>
                {r.snippet && (
                  <span style={{
                    fontSize: 12,
                    color: '#4a5568',
                    display: 'block',
                    marginTop: 4,
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                  }}>
                    {r.snippet.before}
                    <mark style={{
                      backgroundColor: '#fef08a',
                      color: '#1a365d',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      borderRadius: 2,
                      padding: '0 1px',
                    }}>
                      {r.snippet.match}
                    </mark>
                    {r.snippet.after}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
