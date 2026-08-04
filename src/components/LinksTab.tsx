import { useEffect, useMemo, useRef, useState } from 'react'
import { LINK_CATEGORIES } from '../data/links'

const NAVY   = '#1a365d'
const ACCENT = '#2b6cb0'
const BORDER = '#d6e0ec'

function useIsDesktop() {
  const [d, setD] = useState(() => window.innerWidth >= 768)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const h = (e: MediaQueryListEvent) => setD(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])
  return d
}

interface Props {
  highlightedUrl?: string | null
}

/** Bare hostname (no www.) — for the domain label, favicon and search. */
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

/** Stable colour for the letter-fallback tile. */
function tileColor(seed: string): string {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360
  return `hsl(${h}, 42%, 58%)`
}

/**
 * Coloured letter tile shows instantly; the favicon fades in over it once it
 * actually loads. If the favicon errors or never loads, the letter tile stays —
 * so there are never blank grey squares.
 */
function SiteIcon({ url, name }: { url: string; name: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <span
      aria-hidden
      style={{
        position: 'relative', width: 30, height: 30, borderRadius: 7, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: tileColor(name), color: '#fff', fontSize: 14, fontWeight: 700,
        overflow: 'hidden',
      }}
    >
      {name.trim().charAt(0).toUpperCase()}
      <img
        src={faviconOf(url)}
        alt=""
        width={30}
        height={30}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          position: 'absolute', inset: 0, width: 30, height: 30, borderRadius: 7,
          objectFit: 'contain', backgroundColor: '#fff', padding: 3,
          opacity: loaded ? 1 : 0, transition: 'opacity 0.2s',
        }}
      />
    </span>
  )
}

const anchorId = (title: string) => 'linkcat-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function LinksTab({ highlightedUrl }: Props) {
  const isDesktop = useIsDesktop()
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState<string>(LINK_CATEGORIES[0]?.title ?? '')

  const scrollerRef  = useRef<HTMLDivElement | null>(null)
  const sectionRefs  = useRef<Record<string, HTMLElement | null>>({})
  const highlightRef = useRef<HTMLAnchorElement | null>(null)

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

  // Scroll-spy: highlight the category whose section is nearest the top.
  useEffect(() => {
    if (q) return
    const scroller = scrollerRef.current
    if (!scroller) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          const t = (visible[0].target as HTMLElement).dataset.cat
          if (t) setActiveCat(t)
        }
      },
      { root: scroller, rootMargin: '0px 0px -70% 0px', threshold: 0 },
    )
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [q, filtered.length])

  // Scroll a highlighted link (from global search) into view.
  useEffect(() => {
    if (highlightedUrl && highlightRef.current) {
      const t = setTimeout(() => highlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 90)
      return () => clearTimeout(t)
    }
  }, [highlightedUrl])

  const jump = (title: string) => {
    const el = sectionRefs.current[title]
    const scroller = scrollerRef.current
    if (el && scroller) {
      const delta = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top
      scroller.scrollTo({ top: scroller.scrollTop + delta - 4, behavior: 'smooth' })
      setActiveCat(title)
    }
  }

  // ── Left rail: search + category nav ──────────────────────────────────────
  const rail = (
    <div
      style={{
        width: isDesktop ? 220 : '100%',
        flexShrink: 0,
        display: 'flex', flexDirection: 'column',
        borderRight: isDesktop ? `1px solid ${BORDER}` : 'none',
        background: '#f7f9fb',
      }}
    >
      <div style={{ padding: '12px 12px 8px', flexShrink: 0 }}>
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#fff', border: `1.5px solid ${BORDER}`,
            borderRadius: 10, padding: '8px 11px',
            transition: 'border-color .15s, box-shadow .15s',
          }}
          onFocusCapture={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,.12)' }}
          onBlurCapture={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
        >
          <span style={{ fontSize: 14, color: '#94a3b8' }}>🔍</span>
          <input
            type="text"
            placeholder="Search links…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ flex: 1, minWidth: 0, border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#1a202c' }}
          />
          {query && (
            <button onClick={() => setQuery('')} title="Clear" style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 18, lineHeight: 1 }}>×</button>
          )}
        </div>
        <div style={{ fontSize: 11.5, color: '#8a9bb0', fontWeight: 600, padding: '8px 2px 0' }}>
          {q ? `${shownCount} of ${totalCount} links` : `${totalCount} links · ${LINK_CATEGORIES.length} categories`}
        </div>
      </div>

      {/* Category nav — jump + scroll-spy (desktop). Doubles as filter chips (mobile row). */}
      <div
        style={
          isDesktop
            ? { overflowY: 'auto', padding: '2px 8px 16px' }
            : { display: 'flex', gap: 7, overflowX: 'auto', padding: '2px 12px 12px', flexShrink: 0 }
        }
      >
        {LINK_CATEGORIES.map(cat => {
          const count = q ? (filtered.find(c => c.title === cat.title)?.links.length ?? 0) : cat.links.length
          const dim = q && count === 0
          const active = !q && cat.title === activeCat
          return (
            <button
              key={cat.title}
              onClick={() => jump(cat.title)}
              disabled={dim}
              style={{
                display: 'flex', alignItems: 'center', gap: 9,
                width: isDesktop ? '100%' : 'auto', whiteSpace: 'nowrap',
                textAlign: 'left', cursor: dim ? 'default' : 'pointer',
                padding: isDesktop ? '8px 10px' : '6px 12px',
                borderRadius: isDesktop ? 8 : 999,
                border: isDesktop ? 'none' : `1px solid ${BORDER}`,
                boxShadow: active ? `inset 3px 0 0 ${NAVY}` : 'none',
                background: active ? '#e6eef7' : (isDesktop ? 'transparent' : '#fff'),
                color: dim ? '#c2ccd8' : (active ? NAVY : '#4a5568'),
                fontSize: 13, fontWeight: active ? 700 : 500,
                opacity: dim ? 0.55 : 1, transition: 'background .12s',
              }}
              onMouseEnter={e => { if (!active && !dim) e.currentTarget.style.background = isDesktop ? '#eef3f9' : '#eef4fb' }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = isDesktop ? 'transparent' : '#fff' }}
            >
              <span aria-hidden style={{ fontSize: 15, width: 18, textAlign: 'center', flexShrink: 0 }}>{cat.icon}</span>
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{cat.title}</span>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: dim ? '#c2ccd8' : '#a0aec0' }}>{count}</span>
            </button>
          )
        })}
      </div>
    </div>
  )

  // ── Right pane: all categories, dense searchable grid ─────────────────────
  const pane = (
    <div ref={scrollerRef} style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: 'auto', background: '#f7f9fb' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '10px 20px 48px' }}>
        {filtered.length === 0 && (
          <div style={{ padding: '48px 0', textAlign: 'center', color: '#94a3b8', fontSize: 15 }}>
            No links match “{query}”
          </div>
        )}

        {filtered.map((cat) => (
          <section
            key={cat.title}
            id={anchorId(cat.title)}
            data-cat={cat.title}
            ref={el => { sectionRefs.current[cat.title] = el }}
            style={{ marginBottom: 26, scrollMarginTop: 8 }}
          >
            <h2 style={{
              display: 'flex', alignItems: 'center', gap: 8,
              position: 'sticky', top: 0, zIndex: 2,
              margin: '0 -20px 12px', padding: '10px 20px',
              background: 'linear-gradient(#f7f9fb 80%, rgba(247,249,251,0))',
              fontSize: 13, fontWeight: 700, letterSpacing: '0.02em', color: NAVY,
            }}>
              <span aria-hidden style={{ fontSize: 16 }}>{cat.icon}</span>
              {cat.title}
              <span style={{ fontSize: 12, fontWeight: 500, color: '#a0aec0' }}>· {cat.links.length}</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))', gap: 9 }}>
              {cat.links.map((link) => {
                const hi = link.url === highlightedUrl
                return (
                  <a
                    key={link.url}
                    ref={hi ? highlightRef : null}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.url}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 12px',
                      background: hi ? '#eef4fb' : '#fff',
                      border: `1px solid ${hi ? ACCENT : '#e2e8f0'}`,
                      borderRadius: 10, textDecoration: 'none', color: 'inherit',
                      boxShadow: hi ? '0 0 0 2px rgba(43,108,176,.35)' : '0 1px 2px rgba(16,42,76,.05)',
                      transition: 'box-shadow .15s, border-color .15s, transform .1s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,54,93,.13)'
                      e.currentTarget.style.borderColor = ACCENT
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = hi ? '0 0 0 2px rgba(43,108,176,.35)' : '0 1px 2px rgba(16,42,76,.05)'
                      e.currentTarget.style.borderColor = hi ? ACCENT : '#e2e8f0'
                      e.currentTarget.style.transform = 'none'
                    }}
                  >
                    <SiteIcon url={link.url} name={link.name} />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0, flex: 1 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: NAVY, lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {link.name}
                      </span>
                      <span style={{ fontSize: 11, color: '#7c8aa0', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {link.blurb || hostOf(link.url)}
                      </span>
                    </span>
                    <span aria-hidden style={{ fontSize: 11, color: '#c2ccd8', flexShrink: 0 }}>↗</span>
                  </a>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden', flexDirection: isDesktop ? 'row' : 'column' }}>
      {rail}
      {pane}
    </div>
  )
}
