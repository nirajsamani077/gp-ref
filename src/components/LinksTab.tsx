import { useEffect, useRef, useState } from 'react'
import { LINK_CATEGORIES } from '../data/links'

const NAVY   = '#1a365d'
const ACCENT = '#2b6cb0'

interface Props {
  highlightedUrl?: string | null
}

export default function LinksTab({ highlightedUrl }: Props) {
  const highlightRef = useRef<HTMLAnchorElement | null>(null)
  const [query, setQuery] = useState('')

  // Scroll highlighted link into view
  useEffect(() => {
    if (highlightedUrl && highlightRef.current) {
      const timer = setTimeout(() => {
        highlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [highlightedUrl])

  const q = query.toLowerCase().trim()

  const filtered = LINK_CATEGORIES
    .map(cat => ({
      ...cat,
      links: cat.links.filter(l =>
        !q || l.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)
      ),
    }))
    .filter(cat => cat.links.length > 0)

  return (
    <div style={{ padding: '16px 20px 40px', maxWidth: 1200, width: '100%', margin: '0 auto' }}>

      {/* Search bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        backgroundColor: '#fff', border: '1.5px solid #dce6f0',
        borderRadius: 10, padding: '8px 12px', marginBottom: 20,
      }}>
        <span style={{ fontSize: 15, color: '#a0aec0' }}>🔍</span>
        <input
          type="text"
          placeholder="Search links…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#1a202c' }}
        />
        {query && (
          <button onClick={() => setQuery('')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: 18, lineHeight: 1, padding: '0 2px' }}>×</button>
        )}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: '40px 0', textAlign: 'center', color: '#a0aec0', fontSize: 15 }}>
          No links match "{query}"
        </div>
      )}

      {filtered.map((cat) => (
        <section key={cat.title} style={{ marginBottom: 32 }}>
          <h2 style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#8a9bb0',
            marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid #e8edf2',
          }}>
            {cat.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
            {cat.links.map((link) => {
              const hi = link.url === highlightedUrl
              return (
                <a
                  key={link.url}
                  ref={hi ? highlightRef : null}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 4,
                    padding: '14px 16px',
                    backgroundColor: hi ? '#eef4fb' : '#fff',
                    border: '1px solid #dce6f0',
                    borderLeft: `4px solid ${hi ? NAVY : ACCENT}`,
                    borderRadius: 8, textDecoration: 'none', color: 'inherit',
                    boxShadow: hi ? '0 0 0 2px #2b6cb0' : '0 1px 3px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.15s, border-left-color 0.15s, background-color 0.15s',
                    outline: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,54,93,0.15)'
                    e.currentTarget.style.borderLeftColor = NAVY
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = hi ? '0 0 0 2px #2b6cb0' : '0 1px 3px rgba(0,0,0,0.05)'
                    e.currentTarget.style.borderLeftColor = hi ? NAVY : ACCENT
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{link.name}</span>
                  <span style={{ fontSize: 11, color: '#8a9bb0', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {cat.title}
                  </span>
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
