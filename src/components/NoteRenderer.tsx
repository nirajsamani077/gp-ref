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
  /** When true, scrolls to the first match automatically on open */
  autoJump?: boolean
}

// ── Levenshtein distance (capped at maxDist for performance) ───────────────
function lev(a: string, b: string, maxDist: number): number {
  if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1
  const prev = Array.from({ length: b.length + 1 }, (_, j) => j)
  const curr = Array.from({ length: b.length + 1 }, () => 0)
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    let rowMin = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
      if (curr[j] < rowMin) rowMin = curr[j]
    }
    if (rowMin > maxDist) return maxDist + 1
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j]
  }
  return prev[b.length]
}

// ── Escape string for use in RegExp ───────────────────────────────────────
function escRe(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

const exactMarkStyle: React.CSSProperties = {
  backgroundColor: '#fde68a', color: 'inherit',
  fontWeight: 700, borderRadius: 2, padding: '0 1px', outline: 'none',
}
const fuzzyMarkStyle: React.CSSProperties = {
  backgroundColor: '#fed7aa', color: 'inherit',
  fontWeight: 700, borderRadius: 2, padding: '0 1px', outline: 'none',
}

// ── Multi-term highlight with fuzzy fallback ───────────────────────────────
// 1. Split query into tokens
// 2. Highlight any exact token match (yellow)
// 3. If a token is ≥5 chars and found no exact hits anywhere yet, run
//    word-level levenshtein and highlight near-matches (orange)
function highlightText(
  text: string,
  query: string | undefined,
  fuzzyTokens: Set<string>,          // tokens that had NO exact hit in whole note
): React.ReactNode {
  if (!query) return text

  const tokens = query.trim().split(/\s+/).filter(t => t.length >= 2)
  if (!tokens.length) return text

  // Build a combined regex for all tokens
  const exactPattern = new RegExp(`(${tokens.map(escRe).join('|')})`, 'gi')

  // Collect exact hit spans
  const spans: Array<{ start: number; end: number; fuzzy: boolean }> = []
  let m: RegExpExecArray | null
  while ((m = exactPattern.exec(text)) !== null) {
    spans.push({ start: m.index, end: m.index + m[0].length, fuzzy: false })
  }

  // For tokens that had zero exact hits in the whole note, try fuzzy word match
  if (fuzzyTokens.size > 0) {
    const wordPattern = /\b\w+\b/g
    while ((m = wordPattern.exec(text)) !== null) {
      const word = m[0].toLowerCase()
      for (const ft of fuzzyTokens) {
        if (ft.length < 5 || word.length < 4) continue
        const maxD = Math.min(2, Math.floor(ft.length * 0.3))
        if (lev(word, ft, maxD) <= maxD) {
          // Don't double-highlight an already spanned region
          const overlaps = spans.some(s => m!.index < s.end && m!.index + m![0].length > s.start)
          if (!overlaps) {
            spans.push({ start: m.index, end: m.index + m[0].length, fuzzy: true })
          }
        }
      }
    }
  }

  if (!spans.length) return text

  spans.sort((a, b) => a.start - b.start)

  const parts: React.ReactNode[] = []
  let last = 0
  for (const span of spans) {
    if (span.start < last) continue // overlapping — skip
    if (span.start > last) parts.push(text.slice(last, span.start))
    parts.push(
      <mark
        key={span.start}
        data-match=""
        style={span.fuzzy ? fuzzyMarkStyle : exactMarkStyle}
      >
        {text.slice(span.start, span.end)}
      </mark>
    )
    last = span.end
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

export default function NoteRenderer({ blocks, searchQuery, autoJump }: Props) {
  const [lightbox, setLightbox]         = useState<LightboxImage | null>(null)
  const [matchIndex, setMatchIndex]     = useState(-1)
  const [totalMatches, setTotalMatches] = useState(0)
  // Tokens with zero exact hits → trigger fuzzy highlighting
  const [fuzzyTokens, setFuzzyTokens]  = useState<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const marksRef     = useRef<HTMLElement[]>([])
  const prevMark     = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // After each render: collect marks, detect which tokens need fuzzy fallback,
  // and optionally auto-jump to the first match.
  useEffect(() => {
    if (!searchQuery || !containerRef.current) {
      setTotalMatches(0)
      setMatchIndex(-1)
      setFuzzyTokens(new Set())
      marksRef.current = []
      if (prevMark.current) {
        prevMark.current.style.backgroundColor = '#fde68a'
        prevMark.current.style.outline = 'none'
        prevMark.current.style.boxShadow = 'none'
        prevMark.current = null
      }
      return
    }

    // First pass: check which tokens produced zero exact DOM hits
    const tokens = searchQuery.trim().split(/\s+/).filter(t => t.length >= 2)
    const container = containerRef.current
    const noHitTokens = new Set<string>()
    for (const tok of tokens) {
      // Count marks bearing this exact text (case-insensitive)
      const re = new RegExp(escRe(tok), 'i')
      const existingMarks = Array.from(container.querySelectorAll<HTMLElement>('[data-match]'))
      const hasExact = existingMarks.some(el => re.test(el.textContent ?? ''))
      if (!hasExact) noHitTokens.add(tok.toLowerCase())
    }

    // Update fuzzy set — triggers a re-render with fuzzy marks if needed
    setFuzzyTokens(prev => {
      // Only update if set contents changed to avoid infinite loop
      const same = prev.size === noHitTokens.size && [...prev].every(t => noHitTokens.has(t))
      return same ? prev : noHitTokens
    })

    // Second pass (after 150ms — re-render with fuzzy marks may have happened)
    const timer = setTimeout(() => {
      if (!containerRef.current) return
      const marks = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-match]')
      )
      marksRef.current = marks
      setTotalMatches(marks.length)

      if (marks.length > 0 && autoJump) {
        // Auto-jump to first match (e.g. when opened from command palette)
        activateMarkDirect(marks, 0)
        setMatchIndex(0)
      } else {
        setMatchIndex(-1)
        prevMark.current = null
      }
    }, 150)
    return () => clearTimeout(timer)
  }, [searchQuery, blocks, autoJump])   // eslint-disable-line react-hooks/exhaustive-deps

  function restoreMark(mark: HTMLElement) {
    // Restore to its original colour (exact=yellow, fuzzy=orange)
    const isFuzzy = mark.style.backgroundColor === 'rgb(254, 215, 170)' ||
                    mark.getAttribute('data-fuzzy') === '1'
    mark.style.backgroundColor = isFuzzy ? '#fed7aa' : '#fde68a'
    mark.style.outline = 'none'
    mark.style.boxShadow = 'none'
  }

  function activateMarkDirect(marks: HTMLElement[], idx: number) {
    if (prevMark.current) restoreMark(prevMark.current)
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
    const base = matchIndex >= 0 ? matchIndex : (delta > 0 ? -1 : marks.length)
    const next = ((base + delta) % marks.length + marks.length) % marks.length
    setMatchIndex(next)
    activateMarkDirect(marks, next)
  }

  const showNav   = !!searchQuery && totalMatches > 0
  const hasFuzzy  = fuzzyTokens.size > 0 && totalMatches > 0

  return (
    <>
      {showNav && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          marginBottom: 12, padding: '7px 12px',
          backgroundColor: '#fef9c3', border: '1px solid #fde68a',
          borderRadius: 7, fontSize: 12, color: '#92400e',
          userSelect: 'none', flexWrap: 'wrap',
          position: 'sticky', top: 0, zIndex: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          <span style={{ fontWeight: 600 }}>
            {totalMatches} match{totalMatches !== 1 ? 'es' : ''} for{' '}
            <span style={{ fontStyle: 'italic' }}>"{searchQuery}"</span>
            {hasFuzzy && (
              <span style={{ marginLeft: 6, fontWeight: 400, fontSize: 10, color: '#b45309',
                backgroundColor: '#fed7aa', padding: '1px 6px', borderRadius: 10 }}>
                includes fuzzy
              </span>
            )}
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
          <Block key={i} block={block} onImageClick={setLightbox} searchQuery={searchQuery} fuzzyTokens={fuzzyTokens} />
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
  fuzzyTokens?: Set<string>
}

function Block({ block, onImageClick, searchQuery, fuzzyTokens }: BlockProps) {
  const ft = fuzzyTokens ?? new Set<string>()
  const hl = (text: string) => highlightText(text, searchQuery, ft)

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
      const img = block.image
      const imgFloat = img?.float ?? 'right'
      return (
        <div data-block style={{ backgroundColor: s.bg, border: `1px solid ${s.border}`, borderLeft: `4px solid ${s.border}`, borderRadius: 8, padding: '12px 16px', margin: '0 0 14px', overflow: 'hidden' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: s.text, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {hl(block.title)}
          </p>
          {img && (
            <img
              src={resolveImg(img.src)}
              alt={img.alt}
              style={{
                float: imgFloat,
                maxWidth: img.maxWidth ?? '30%',
                width: img.maxWidth ?? '30%',
                borderRadius: 6,
                margin: imgFloat === 'right' ? '0 0 8px 12px' : '0 12px 8px 0',
                display: 'block',
              }}
            />
          )}
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

    case 'notelink':
      return (
        <div data-block style={{ margin: '0 0 18px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#553c9a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            📋 See also
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {block.notes.map((n, i) => (
              <button
                key={i}
                onClick={() => window.dispatchEvent(new CustomEvent('navigate-note', { detail: n.id }))}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  gap: 2, padding: '10px 16px',
                  background: '#faf5ff',
                  border: '1.5px solid #d6bcfa', borderRadius: 12,
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#553c9a'; e.currentTarget.style.borderColor = '#553c9a' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#faf5ff'; e.currentTarget.style.borderColor = '#d6bcfa' }}
              >
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: '#553c9a', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#553c9a')}
                >
                  → {n.label}
                </span>
                {n.subtitle && (
                  <span style={{ fontSize: 11, color: '#718096' }}>{n.subtitle}</span>
                )}
              </button>
            ))}
          </div>
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
  const [errored,  setErrored]  = useState(false)
  const [revealed, setRevealed] = useState(false)
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

  const isSensitive = !!block.sensitive && !revealed

  return (
    <figure data-block style={figureStyle}>
      {!errored ? (
        <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
          <img
            src={resolvedSrc}
            alt={block.alt}
            onClick={() => !isSensitive && onImageClick({ src: resolvedSrc, alt: block.alt, caption: block.caption })}
            style={{
              width: '100%', borderRadius: 8, border: '1px solid #dce6f0', display: 'block',
              cursor: isSensitive ? 'default' : 'zoom-in',
              transition: 'opacity 0.15s, filter 0.3s',
              filter: isSensitive ? 'blur(18px) brightness(0.7)' : 'none',
            }}
            onMouseEnter={(e) => { if (!isSensitive) e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { if (!isSensitive) e.currentTarget.style.opacity = '1' }}
            onError={() => setErrored(true)}
          />
          {isSensitive && (
            <div
              onClick={() => setRevealed(true)}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', gap: 8,
                background: 'rgba(0,0,0,0.15)',
                borderRadius: 8,
              }}
            >
              <span style={{ fontSize: 32 }}>🔒</span>
              <span style={{
                fontSize: 13, fontWeight: 700, color: '#fff',
                background: 'rgba(0,0,0,0.55)', padding: '6px 14px', borderRadius: 20,
                letterSpacing: '0.02em',
              }}>
                Tap to reveal clinical image
              </span>
            </div>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, border: '2px dashed #dce6f0', borderRadius: 8, color: MUTED, fontSize: 13, gap: 8 }}>
          <span>🖼</span>
          <span>Image not found — save to <code style={{ backgroundColor: '#f0f4f8', padding: '1px 5px', borderRadius: 3 }}>{block.src}</code></span>
        </div>
      )}
      {!errored && block.caption && (
        <figcaption style={{ fontSize: 12, color: MUTED, marginTop: 6, fontStyle: 'italic' }}>
          {block.caption}
          {!isSensitive && <> · <span style={{ color: '#2b6cb0' }}>tap to enlarge</span></>}
        </figcaption>
      )}
    </figure>
  )
}
