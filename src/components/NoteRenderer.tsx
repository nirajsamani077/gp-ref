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

// ── CHA₂DS₂-VASc Calculator ──────────────────────────────────────────────────
function ChadsvascCalculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    c: false, h: false, a2: false, d: false, s2: false, v: false, a: false, sc: false,
  })

  const toggle = (key: string) => {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] }
      if (key === 'a2' && next.a2) next.a = false
      if (key === 'a'  && next.a)  next.a2 = false
      return next
    })
  }

  const score =
    (checked.c  ? 1 : 0) + (checked.h  ? 1 : 0) + (checked.a2 ? 2 : 0) +
    (checked.d  ? 1 : 0) + (checked.s2 ? 2 : 0) + (checked.v  ? 1 : 0) +
    (checked.a  ? 1 : 0) + (checked.sc ? 1 : 0)

  const getResult = () => {
    if (score === 0) return { text: 'No anticoagulation recommended', rate: '~0%', color: '#276749', bg: '#f0fff4', border: '#9ae6b4' }
    if (score === 1 && checked.sc && !checked.c && !checked.h && !checked.a2 && !checked.d && !checked.s2 && !checked.v && !checked.a)
      return { text: 'Female sex only — no anticoagulation', rate: '~0%', color: '#276749', bg: '#f0fff4', border: '#9ae6b4' }
    if (score === 1)
      return { text: 'Consider anticoagulation (male, 1 risk factor)', rate: '~1.3%/yr', color: '#744210', bg: '#fffbeb', border: '#fbd38d' }
    const rates: Record<number, string> = { 2: '~2.2%', 3: '~3.2%', 4: '~4.0%', 5: '~6.7%', 6: '~9.8%', 7: '~9.8%', 8: '~15%', 9: '~15%' }
    return { text: 'Anticoagulation recommended', rate: `${rates[score] ?? '>10%'}/yr`, color: '#742a2a', bg: '#fff5f5', border: '#feb2b2' }
  }

  const result = getResult()

  const factors = [
    { key: 'c',  letter: 'C',   name: 'Congestive heart failure / LV dysfunction',          pts: 1 },
    { key: 'h',  letter: 'H',   name: 'Hypertension',                                        pts: 1 },
    { key: 'a2', letter: 'A₂',  name: 'Age ≥75 years',                                       pts: 2 },
    { key: 'd',  letter: 'D',   name: 'Diabetes mellitus',                                   pts: 1 },
    { key: 's2', letter: 'S₂',  name: 'Stroke / TIA / systemic thromboembolism (history)',   pts: 2 },
    { key: 'v',  letter: 'V',   name: 'Vascular disease (prior MI, PAD, aortic plaque)',     pts: 1 },
    { key: 'a',  letter: 'A',   name: 'Age 65–74 years',                                     pts: 1 },
    { key: 'sc', letter: 'Sc',  name: 'Sex category: Female',                                pts: 1 },
  ]

  return (
    <div data-block style={{ margin: '0 0 16px', border: '1px solid #93c5fd', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ backgroundColor: '#1e3a5f', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>CHA₂DS₂-VASc Calculator</span>
        <span style={{ color: '#93c5fd', fontSize: 12 }}>Stroke risk in AF / flutter</span>
      </div>
      <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: '#f8fbff' }}>
        {factors.map(f => (
          <button
            key={f.key}
            onClick={() => toggle(f.key)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '7px 11px',
              border: checked[f.key] ? '2px solid #2b6cb0' : '1px solid #c3d9f0',
              borderRadius: 8, cursor: 'pointer',
              backgroundColor: checked[f.key] ? '#dbeafe' : '#fff',
              textAlign: 'left', transition: 'all 0.12s', width: '100%',
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              backgroundColor: checked[f.key] ? '#2b6cb0' : '#e2e8f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: checked[f.key] ? '#fff' : '#64748b', fontWeight: 700, fontSize: 11,
            }}>{f.letter}</span>
            <span style={{ flex: 1, fontSize: 13, color: '#1a202c', textAlign: 'left' }}>{f.name}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: checked[f.key] ? '#2b6cb0' : '#94a3b8', flexShrink: 0 }}>+{f.pts}</span>
          </button>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #c3d9f0', padding: '12px 16px', display: 'flex', gap: 14, alignItems: 'center', backgroundColor: '#f8fbff' }}>
        <div style={{ textAlign: 'center', minWidth: 56 }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#1e3a5f', lineHeight: 1 }}>{score}</div>
          <div style={{ fontSize: 10, color: '#8a9bb0', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Score</div>
        </div>
        <div style={{ flex: 1, backgroundColor: result.bg, borderRadius: 8, padding: '10px 14px', borderLeft: `4px solid ${result.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: result.color }}>{result.text}</div>
          <div style={{ fontSize: 12, color: result.color, marginTop: 3, opacity: 0.85 }}>Annual stroke risk: {result.rate}</div>
        </div>
      </div>
    </div>
  )
}

// ── ORBIT-AF Calculator ───────────────────────────────────────────────────────
function OrbitCalculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    o: false, r: false, b: false, i: false, t: false,
  })

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }))

  const score =
    (checked.o ? 1 : 0) + (checked.r ? 2 : 0) + (checked.b ? 2 : 0) +
    (checked.i ? 1 : 0) + (checked.t ? 1 : 0)

  const getResult = () => {
    if (score <= 2) return { risk: 'Low Risk', rate: '~2.4 bleeds / 100 pt-years', advice: 'Benefits of anticoagulation generally outweigh risk', color: '#276749', bg: '#f0fff4', border: '#9ae6b4' }
    if (score === 3) return { risk: 'Medium Risk', rate: '~4.7 bleeds / 100 pt-years', advice: 'Address modifiable bleeding risks; monitor closely', color: '#744210', bg: '#fffbeb', border: '#fbd38d' }
    return { risk: 'High Risk', rate: '~8.1 bleeds / 100 pt-years', advice: 'High score alone should NOT stop anticoagulation — identify & address modifiable risk factors', color: '#742a2a', bg: '#fff5f5', border: '#feb2b2' }
  }

  const result = getResult()

  const factors = [
    { key: 'o', letter: 'O', name: 'Older age: >75 years',                                                                              pts: 1 },
    { key: 'r', letter: 'R', name: 'Reduced Hb / Hct  (Hb <13 g/dL men or <12 g/dL women; Hct <40% men or <36% women)',               pts: 2 },
    { key: 'b', letter: 'B', name: 'Bleeding history (prior major bleed, intracranial bleed or severe menorrhagia)',                     pts: 2 },
    { key: 'i', letter: 'I', name: 'Insufficient kidney function: eGFR <60 mL/min/1.73m² or on dialysis',                              pts: 1 },
    { key: 't', letter: 'T', name: 'Treatment with antiplatelet agents or NSAIDs',                                                      pts: 1 },
  ]

  return (
    <div data-block style={{ margin: '0 0 16px', border: '1px solid #fbd38d', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ backgroundColor: '#7b341e', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>ORBIT-AF Bleeding Risk Calculator</span>
        <span style={{ color: '#fbd38d', fontSize: 12 }}>Before starting anticoagulation</span>
      </div>
      <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: '#fffdf8' }}>
        {factors.map(f => (
          <button
            key={f.key}
            onClick={() => toggle(f.key)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '7px 11px',
              border: checked[f.key] ? '2px solid #c05621' : '1px solid #fbd38d',
              borderRadius: 8, cursor: 'pointer',
              backgroundColor: checked[f.key] ? '#feebc8' : '#fff',
              textAlign: 'left', transition: 'all 0.12s', width: '100%',
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              backgroundColor: checked[f.key] ? '#c05621' : '#e2e8f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: checked[f.key] ? '#fff' : '#64748b', fontWeight: 700, fontSize: 11,
            }}>{f.letter}</span>
            <span style={{ flex: 1, fontSize: 13, color: '#1a202c', textAlign: 'left' }}>{f.name}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: checked[f.key] ? '#c05621' : '#94a3b8', flexShrink: 0 }}>+{f.pts}</span>
          </button>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #fbd38d', padding: '12px 16px', display: 'flex', gap: 14, alignItems: 'center', backgroundColor: '#fffdf8' }}>
        <div style={{ textAlign: 'center', minWidth: 56 }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#7b341e', lineHeight: 1 }}>{score}</div>
          <div style={{ fontSize: 10, color: '#8a9bb0', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Score</div>
        </div>
        <div style={{ flex: 1, backgroundColor: result.bg, borderRadius: 8, padding: '10px 14px', borderLeft: `4px solid ${result.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: result.color }}>{result.risk} — {result.rate}</div>
          <div style={{ fontSize: 12, color: result.color, marginTop: 3, opacity: 0.85 }}>{result.advice}</div>
        </div>
      </div>
    </div>
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
        <h2 data-block style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: '24px 0 8px', paddingBottom: 6, borderBottom: '2px solid #e8edf2' }}>
          {hl(block.text)}
        </h2>
      ) : (
        <h3 data-block style={{ fontSize: 13, fontWeight: 700, color: '#2b6cb0', margin: '16px 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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

    case 'calculator':
      return block.id === 'chadsvasc' ? <ChadsvascCalculator /> : <OrbitCalculator />

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

  return (
    <figure data-block style={{ margin: '0 0 20px' }}>
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
