import { useState, useEffect, useRef } from 'react'
import type { ContentBlock } from '../data/notes'

const NAVY  = '#1a365d'
const MUTED = '#8a9bb0'

const CALLOUT_STYLES = {
  info:    { bg: '#ebf8ff', border: '#90cdf4', text: '#2c5282', pill: '#bee3f8' },
  tip:     { bg: '#f0fff4', border: '#9ae6b4', text: '#276749', pill: '#c6f6d5' },
  warning: { bg: '#fffbeb', border: '#fbd38d', text: '#744210', pill: '#fef3c7' },
  danger:  { bg: '#fff5f5', border: '#feb2b2', text: '#742a2a', pill: '#fed7d7' },
}

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface Props {
  blocks: ContentBlock[]
  searchQuery?: string
}

function highlightText(text: string, query: string | undefined): React.ReactNode {
  if (!query) return text
  const q     = query.toLowerCase()
  const lower = text.toLowerCase()
  const parts: React.ReactNode[] = []
  let last = 0
  let idx  = lower.indexOf(q)

  while (idx !== -1) {
    if (idx > last) parts.push(text.slice(last, idx))
    parts.push(
      <mark
        key={idx}
        data-match=""
        style={{
          backgroundColor: '#fde68a',
          color: 'inherit',
          fontWeight: 700,
          borderRadius: 2,
          padding: '0 1px',
          outline: 'none',
        }}
      >
        {text.slice(idx, idx + query.length)}
      </mark>
    )
    last = idx + query.length
    idx  = lower.indexOf(q, last)
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts.length ? <>{parts}</> : text
}

export default function NoteRenderer({ blocks, searchQuery }: Props) {
  const [lightbox, setLightbox]         = useState<LightboxImage | null>(null)
  const [matchIndex, setMatchIndex]     = useState(-1)   // -1 = none jumped to yet
  const [totalMatches, setTotalMatches] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const marksRef     = useRef<HTMLElement[]>([])
  const prevMark     = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // Collect marks after render — no auto-scroll; note opens at top
  useEffect(() => {
    if (!searchQuery || !containerRef.current) {
      setTotalMatches(0)
      setMatchIndex(-1)
      marksRef.current = []
      if (prevMark.current) {
        prevMark.current.style.backgroundColor = '#fde68a'
        prevMark.current.style.outline = 'none'
        prevMark.current.style.boxShadow = 'none'
        prevMark.current = null
      }
      return
    }
    const timer = setTimeout(() => {
      if (!containerRef.current) return
      const marks = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-match]')
      )
      marksRef.current = marks
      setTotalMatches(marks.length)
      setMatchIndex(-1)
      prevMark.current = null
    }, 200)
    return () => clearTimeout(timer)
  }, [searchQuery, blocks])

  function activateMark(marks: HTMLElement[], idx: number) {
    if (prevMark.current) {
      prevMark.current.style.backgroundColor = '#fde68a'
      prevMark.current.style.outline = 'none'
      prevMark.current.style.boxShadow = 'none'
    }
    const mark = marks[idx]
    if (!mark) return
    mark.style.backgroundColor = '#f59e0b'
    mark.style.outline = '2px solid #d97706'
    mark.style.boxShadow = '0 0 0 3px rgba(217,119,6,0.25)'
    mark.scrollIntoView({ behavior: 'smooth', block: 'center' })
    prevMark.current = mark
  }

  function goTo(delta: number) {
    const marks = marksRef.current
    if (!marks.length) return
    // If nothing jumped to yet: ▼ starts at 0, ▲ starts at last
    const base = matchIndex >= 0 ? matchIndex : (delta > 0 ? -1 : marks.length)
    const next = ((base + delta) % marks.length + marks.length) % marks.length
    setMatchIndex(next)
    activateMark(marks, next)
  }

  const showNav = !!searchQuery && totalMatches > 0

  return (
    <>
      {showNav && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 12,
          padding: '7px 12px',
          backgroundColor: '#fef9c3',
          border: '1px solid #fde68a',
          borderRadius: 7,
          fontSize: 12,
          color: '#92400e',
          userSelect: 'none',
          flexWrap: 'wrap',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          <span style={{ fontWeight: 600 }}>
            {totalMatches} match{totalMatches !== 1 ? 'es' : ''} for{' '}
            <span style={{ fontStyle: 'italic' }}>"{searchQuery}"</span>
          </span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5 }}>
            {matchIndex >= 0 ? (
              <span style={{ color: '#b45309', fontSize: 11, fontWeight: 600 }}>
                {matchIndex + 1} / {totalMatches}
              </span>
            ) : (
              <span style={{ color: '#b45309', fontSize: 11, fontStyle: 'italic' }}>
                press ▼ to jump
              </span>
            )}
            <button onClick={() => goTo(-1)} title="Previous match" style={navBtnStyle}>▲</button>
            <button onClick={() => goTo(1)}  title="Next match"     style={navBtnStyle}>▼</button>
          </span>
        </div>
      )}

      <div ref={containerRef} style={{ fontSize: 14, lineHeight: 1.65, color: '#1a202c' }}>
        {blocks.map((block, i) => (
          <Block key={i} block={block} onImageClick={setLightbox} searchQuery={searchQuery} />
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={{
              maxWidth: '95vw',
              maxHeight: '88vh',
              borderRadius: 6,
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              objectFit: 'contain',
            }}
          />
          {lightbox.caption && (
            <p style={{ color: '#cbd5e0', fontSize: 13, marginTop: 12, textAlign: 'center', maxWidth: 600, fontStyle: 'italic' }}>
              {lightbox.caption}
            </p>
          )}
          <p style={{ color: '#718096', fontSize: 12, marginTop: 8 }}>
            Click anywhere or press Esc to close
          </p>
        </div>
      )}
    </>
  )
}

interface BlockProps {
  block: ContentBlock
  onImageClick: (img: LightboxImage) => void
  searchQuery?: string
}

function Block({ block, onImageClick, searchQuery }: BlockProps) {
  const hl = (text: string) => highlightText(text, searchQuery)

  switch (block.type) {

    case 'heading':
      return block.level === 2 ? (
        <h2 data-block style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: '24px 0 8px', paddingBottom: 6, borderBottom: '2px solid #e8edf2', clear: 'both' }}>
          {hl(block.text)}
        </h2>
      ) : (
        <h3 data-block style={{ fontSize: 13, fontWeight: 700, color: '#2b6cb0', margin: '16px 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em', clear: 'both' }}>
          {hl(block.text)}
        </h3>
      )

    case 'para':
      return <p data-block style={{ margin: '0 0 10px' }}>{hl(block.text)}</p>

    case 'list':
      return (
        <ul data-block style={{ margin: '0 0 12px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 8 }}>
              <span style={{ color: '#2b6cb0', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>›</span>
              <span>{hl(item)}</span>
            </li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div data-block style={{ margin: '0 0 16px', overflowX: 'auto' }}>
          {block.caption && (
            <p style={{ fontSize: 11, color: MUTED, marginBottom: 6, fontStyle: 'italic' }}>{block.caption}</p>
          )}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} style={{ padding: '8px 12px', textAlign: 'left', backgroundColor: '#dbeafe', color: '#1e3a5f', fontWeight: 700, fontSize: 12, borderBottom: '2px solid #93c5fd', whiteSpace: 'nowrap' }}>
                    {hl(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? '#fff' : '#f4f8fc' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: ci === 0 ? '#1a365d' : '#1a202c', fontWeight: ci === 0 ? 600 : 400, whiteSpace: 'normal' }}>
                      {hl(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'callout': {
      const s = CALLOUT_STYLES[block.variant]
      return (
        <div data-block style={{ backgroundColor: s.bg, border: `1px solid ${s.border}`, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: '12px 16px', margin: '0 0 14px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: s.text, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {hl(block.title)}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
            {block.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: s.text }}>
                <span style={{ flexShrink: 0, fontWeight: 700, marginTop: 1 }}>›</span>
                <span>{hl(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    case 'image':
      return <ImageBlock block={block} onImageClick={onImageClick} />

    case 'linkrow':
      return (
        <div data-block style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '0 0 14px' }}>
          {block.links.map((link, i) => (
            <a
              key={i}
              href={link.url.startsWith('/') ? resolveImg(link.url) : link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', backgroundColor: '#eef4fb', border: '1px solid #c3d9f0', borderRadius: 20, fontSize: 13, fontWeight: 600, color: '#2b6cb0', textDecoration: 'none', transition: 'background 0.15s, color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2b6cb0'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#eef4fb'; e.currentTarget.style.color = '#2b6cb0' }}
            >
              <span style={{ fontSize: 14 }}>▶</span>
              {link.label}
            </a>
          ))}
        </div>
      )

    case 'calclink':
      return (
        <div data-block style={{ margin: '0 0 18px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            🧮 Interactive Calculators
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {block.calculators.map((calc, i) => (
              <button
                key={i}
                onClick={() => window.dispatchEvent(new CustomEvent('navigate-calc', { detail: calc.id }))}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  gap: 2, padding: '10px 16px',
                  background: 'linear-gradient(135deg, #ebf8ff 0%, #e6fffa 100%)',
                  border: '1.5px solid #90cdf4', borderRadius: 12,
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #2b6cb0 0%, #2c7a7b 100%)'; e.currentTarget.style.borderColor = '#2b6cb0' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #ebf8ff 0%, #e6fffa 100%)'; e.currentTarget.style.borderColor = '#90cdf4' }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2b6cb0' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#2b6cb0')}
                >
                  🧮 {calc.label}
                </span>
                {calc.subtitle && (
                  <span style={{ fontSize: 11, color: '#718096' }}>{calc.subtitle}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

const navBtnStyle: React.CSSProperties = {
  padding: '2px 9px',
  fontSize: 11,
  fontWeight: 700,
  borderRadius: 4,
  border: '1px solid #fbbf24',
  backgroundColor: '#fff',
  color: '#92400e',
  cursor: 'pointer',
  lineHeight: 1.5,
}

// Resolve image src: strip leading slash then prepend Vite BASE_URL
// so paths work both locally (/images/foo.jpg) and on GitHub Pages (/gp-ref/images/foo.jpg)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
function resolveImg(src: string) {
  return BASE + (src.startsWith('/') ? src : '/' + src)
}

function ImageBlock({
  block,
  onImageClick,
}: {
  block: Extract<ContentBlock, { type: 'image' }>
  onImageClick: (img: LightboxImage) => void
}) {
  const [errored, setErrored] = useState(false)
  const resolvedSrc = resolveImg(block.src)

  const isFloated = !!block.float
  const figureStyle: React.CSSProperties = {
    margin: isFloated
      ? (block.float === 'right' ? '0 0 12px 16px' : '0 16px 12px 0')
      : '0 0 20px',
    float: block.float ?? undefined,
    maxWidth: block.maxWidth ?? (isFloated ? '40%' : undefined),
    width: isFloated ? (block.maxWidth ?? '40%') : undefined,
  }

  return (
    <figure data-block style={figureStyle}>
      {!errored ? (
        <img
          src={resolvedSrc}
          alt={block.alt}
          onClick={() => onImageClick({ src: resolvedSrc, alt: block.alt, caption: block.caption })}
          style={{ width: '100%', borderRadius: 8, border: '1px solid #dce6f0', display: 'block', cursor: 'zoom-in', transition: 'opacity 0.15s' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          onError={() => setErrored(true)}
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, border: '2px dashed #dce6f0', borderRadius: 8, color: MUTED, fontSize: 13, gap: 8 }}>
          <span>🖼</span>
          <span>Image not found — save to <code style={{ backgroundColor: '#f0f4f8', padding: '1px 5px', borderRadius: 3 }}>{block.src}</code></span>
        </div>
      )}
      {!errored && block.caption && (
        <figcaption style={{ fontSize: 12, color: MUTED, marginTop: 6, fontStyle: 'italic' }}>
          {block.caption} · <span style={{ color: '#2b6cb0' }}>tap to enlarge</span>
        </figcaption>
      )}
    </figure>
  )
}
