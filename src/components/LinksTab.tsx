import { useEffect, useMemo, useRef, useState } from 'react'
import { LINK_CATEGORIES } from '../data/links'

const NAVY   = '#1a365d'
const ACCENT = '#2b6cb0'

interface Props {
  highlightedUrl?: string | null
}

/** Bare hostname (no www.) — used for the domain label and favicon lookup. */
function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
  }
}

/** Auto-derived favicon (no per-link image files to manage). */
function faviconOf(url: string): string {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostOf(url))}&sz=64`
}

/** Stable pastel colour for the letter-fallback tile. */
function tileColor(seed: string): string {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360
  return `hsl(${h}, 45%, 62%)`
}

/**
 * Coloured letter tile shows instantly as a guaranteed placeholder; the
 * favicon fades in over it only once it has actually loaded. If the favicon
 * errors or never loads, the letter tile simply remains — so there are never
 * blank grey squares.
 */
function SiteIcon({ url, name }: { url: string; name: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <span
      aria-hidden
      style={{
        position: 'relative', width: 32, height: 32, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: tileColor(name), color: '#fff', fontSize: 15, fontWeight: 700,
        overflow: 'hidden',
      }}
    >
      {name.trim().charAt(0).toUpperCase()}
      <img
        src={faviconOf(url)}
        alt=""
        width={32}
        height={32}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          position: 'absolute', inset: 0, width: 32, height: 32, borderRadius: 8,
          objectFit: 'contain', backgroundColor: '#fff', padding: 3,
          opacity: loaded ? 1 : 0, transition: 'opacity 0.2s',
        }}
      />
    </span>
  )
}

/** Anchor id for a category (for quick-jump chips). */
const anchorId = (title: string) => 'linkcat-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

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

  const filtered = useMemo(() =>
    LINK_CATEGORIES
      .map(cat => ({
        ...cat,
        links: cat.links.filter(l =>
          !q ||
          l.name.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q) ||
          (l.blurb?.toLowerCase().includes(q) ?? false) ||
          hostOf(l.url).includes(q),
        ),
      }))
      .filter(cat => cat.links.length > 0),
    [q],
  )

  const totalCount = useMemo(() => LINK_CATEGORIES.reduce((n, c) => n + c.links.length, 0), [])
  const shownCount = filtered.reduce((n, c) => n + c.links.length, 0)

  const jump = (title: string) => {
    document.getElementById(anchorId(title))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ padding: '16px 20px 48px', maxWidth: 1200, width: '100%', margin: '0 auto' }}>

      {/* Search bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        backgroundColor: '#fff', border: '1.5px solid #dce6f0',
        borderRadius: 10, padding: '9px 13px', marginBottom: 14,
      }}>
        <span style={{ fontSize: 15, color: '#a0aec0' }}>🔍</span>
        <input
          type="text"
          placeholder={`Search ${totalCount} links…`}
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#1a202c' }}
        />
        {query && (
          <button onClick={() => setQuery('')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: 18, lineHeight: 1, padding: '0 2px' }}>×</button>
        )}
      </div>

      {/* Quick-jump chips (hidden while searching) */}
      {!q && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
          {LINK_CATEGORIES.map(cat => (
            <button
              key={cat.title}
              onClick={() => jump(cat.title)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: '1px solid #dce6f0', backgroundColor: '#fff',
                borderRadius: 999, padding: '5px 12px', cursor: 'pointer',
                fontSize: 12.5, fontWeight: 600, color: NAVY, whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#eef4fb'; e.currentTarget.style.borderColor = ACCENT }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#dce6f0' }}
            >
              <span aria-hidden>{cat.icon}</span>{cat.title}
              <span style={{ color: '#a0aec0', fontWeight: 500 }}>{cat.links.length}</span>
            </button>
          ))}
        </div>
      )}

      {q && (
        <div style={{ fontSize: 12.5, color: '#8a9bb0', marginBottom: 14 }}>
          {shownCount} {shownCount === 1 ? 'result' : 'results'} for “{query}”
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{ padding: '40px 0', textAlign: 'center', color: '#a0aec0', fontSize: 15 }}>
          No links match “{query}”
        </div>
      )}

      {filtered.map((cat) => (
        <section key={cat.title} id={anchorId(cat.title)} style={{ marginBottom: 30, scrollMarginTop: 12 }}>
          <h2 style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 700, letterSpacing: '0.03em',
            color: NAVY, marginBottom: 12, paddingBottom: 7, borderBottom: '2px solid #eef2f7',
          }}>
            <span aria-hidden style={{ fontSize: 16 }}>{cat.icon}</span>
            {cat.title}
            <span style={{ fontSize: 12, fontWeight: 500, color: '#a0aec0' }}>· {cat.links.length}</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 10 }}>
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
                    display: 'flex', alignItems: 'center', gap: 11,
                    padding: '12px 14px',
                    backgroundColor: hi ? '#eef4fb' : '#fff',
                    border: `1px solid ${hi ? ACCENT : '#dce6f0'}`,
                    borderRadius: 10, textDecoration: 'none', color: 'inherit',
                    boxShadow: hi ? '0 0 0 2px rgba(43,108,176,0.35)' : '0 1px 3px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.15s, border-color 0.15s, transform 0.1s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,54,93,0.14)'
                    e.currentTarget.style.borderColor = ACCENT
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = hi ? '0 0 0 2px rgba(43,108,176,0.35)' : '0 1px 3px rgba(0,0,0,0.05)'
                    e.currentTarget.style.borderColor = hi ? ACCENT : '#dce6f0'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <SiteIcon url={link.url} name={link.name} />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0, flex: 1 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: NAVY, lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {link.name}
                    </span>
                    <span style={{ fontSize: 11.5, color: '#7c8aa0', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {link.blurb || hostOf(link.url)}
                    </span>
                  </span>
                  <span aria-hidden style={{ fontSize: 12, color: '#c2ccd8', flexShrink: 0 }}>↗</span>
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
