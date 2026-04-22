import { useState, useEffect, useRef, useCallback } from 'react'
import Fuse from 'fuse.js'
import type { Note } from '../data/notes'
import { NOTES } from '../data/notes'
import { getSpecialtyStyle, SPECIALTY_STYLES } from '../data/specialties'
import NoteRenderer from './NoteRenderer'

// ── Fuse instance for live note filtering ────────────────────────────────────
const fuse = new Fuse(NOTES, {
  keys: [
    { name: 'title',    weight: 6 },
    { name: 'subtitle', weight: 2 },
    { name: 'body',     weight: 1 },
  ],
  threshold: 0.45,
  ignoreLocation: true,
  minMatchCharLength: 2,
  includeScore: true,
})

function filterNotes(query: string): Note[] {
  if (!query.trim()) return NOTES
  const q = query.trim().toLowerCase()
  const raw = fuse.search(query.trim())
  return raw
    .map(r => {
      const titleLower = r.item.title.toLowerCase()
      let priority = 0
      if (titleLower === q)               priority = 10000
      else if (titleLower.startsWith(q))  priority = 8000
      else if (titleLower.includes(q))    priority = 6000
      return { item: r.item, score: r.score ?? 1, priority }
    })
    .sort((a, b) =>
      b.priority !== a.priority ? b.priority - a.priority : a.score - b.score
    )
    .map(r => r.item)
}

// ── Specialty list ────────────────────────────────────────────────────────────
function getSpecialties() {
  const seen = new Set<string>()
  const list: { tag: string; label: string }[] = []
  for (const note of NOTES) {
    for (const tag of note.tags) {
      const key = tag.toLowerCase()
      if (key && !seen.has(key) && key in SPECIALTY_STYLES) {
        seen.add(key)
        list.push({ tag: key, label: getSpecialtyStyle(key).label })
      }
    }
  }
  return list
}
const SPECIALTIES = getSpecialties()

// ── Favourites — localStorage persistence ────────────────────────────────────
const FAV_KEY = 'gpr-favourites'

function useFavourites() {
  const [ids, setIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(FAV_KEY)
      return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
    } catch {
      return new Set()
    }
  })

  // Sync to localStorage whenever the set changes
  useEffect(() => {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...ids])) } catch { /* quota */ }
  }, [ids])

  const toggle = useCallback((id: string) => {
    setIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }, [])

  return { favouriteIds: ids, toggleFavourite: toggle }
}

// ── Component ────────────────────────────────────────────────────────────────
interface NotesTabProps {
  highlightedNoteId?: string | null
}

export default function NotesTab({ highlightedNoteId }: NotesTabProps) {
  const [filterQuery, setFilterQuery] = useState('')
  const [openId, setOpenId]           = useState<string | null>(null)
  const [specialty, setSpecialty]     = useState<string>('all')
  const [resetKey, setResetKey]       = useState(0)
  // Which card's star is mid-animation (for the spring pop effect)
  const [animatingId, setAnimatingId] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { favouriteIds, toggleFavourite } = useFavourites()

  const resetHome = useCallback(() => {
    setFilterQuery('')
    setOpenId(null)
    setSpecialty('all')
    setResetKey(k => k + 1)
    // Favourites intentionally NOT reset — they persist across home navigation
  }, [])

  useEffect(() => {
    window.addEventListener('gpr-home', resetHome)
    return () => window.removeEventListener('gpr-home', resetHome)
  }, [resetHome])

  // Open and scroll to a note when navigated from a notelink block
  useEffect(() => {
    if (!highlightedNoteId) return
    setFilterQuery('')
    setSpecialty('all')
    setOpenId(highlightedNoteId)
    setTimeout(() => {
      const el = document.querySelector(`[data-note-id="${highlightedNoteId}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }, [highlightedNoteId])

  const filtered = filterQuery ? filterNotes(filterQuery) : NOTES
  const visible  = specialty === 'all'
    ? filtered
    : filtered.filter(n => n.tags.map(t => t.toLowerCase()).includes(specialty))

  useEffect(() => {
    if (visible.length === 1) setOpenId(visible[0].id)
  }, [visible.length, visible[0]?.id])

  function handleSpecialty(tag: string) { setSpecialty(tag) }

  function clearFilter() { setFilterQuery(''); inputRef.current?.focus() }

  function handleToggleFav(noteId: string) {
    toggleFavourite(noteId)
    setAnimatingId(noteId)
    setTimeout(() => setAnimatingId(null), 300)
  }

  const showingAll = !filterQuery && specialty === 'all'

  // When not searching, split into: favourites → all notes.
  // When searching, show a flat list (starred cards still show their star).
  const searching          = Boolean(filterQuery)
  const favouritedVisible  = searching ? [] : visible.filter(n => favouriteIds.has(n.id))

  // Main list: everything that isn't a favourite
  const unfavouritedVisible = searching ? visible : visible.filter(n => !favouriteIds.has(n.id))

  const hasFavSection = favouritedVisible.length > 0

  // ── Shared card renderer ─────────────────────────────────────────────────
  function renderCard(note: Note) {
    const isOpen    = openId === note.id
    const isFav     = favouriteIds.has(note.id)
    const isPopping = animatingId === note.id
    const sp        = getSpecialtyStyle(note.tags[0])

    return (
      <article
        key={note.id}
        data-note-id={note.id}
        style={{
          marginBottom: 10,
          backgroundColor: isOpen ? sp.bg : '#fff',
          border: `1px solid ${isOpen ? sp.border + '55' : '#dde6f0'}`,
          borderLeft: `5px solid ${sp.border}`,
          borderRadius: 12,
          boxShadow: isOpen
            ? `0 4px 16px rgba(0,0,0,0.1), 0 0 0 1px ${sp.border}22`
            : '0 2px 6px rgba(26,54,93,0.08)',
          overflow: 'visible',
          transition: 'box-shadow 0.2s, background 0.2s, border 0.2s',
        }}
      >
        {/* ── Card header row: [toggle area] [star] ── */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>

          {/* Toggle button — opens/closes body */}
          <button
            onClick={() => {
              const next = isOpen ? null : note.id
              setOpenId(next)
            }}
            style={{
              flex: 1, minWidth: 0,
              padding: '13px 6px 13px 14px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'transparent', border: 'none', cursor: 'pointer',
              textAlign: 'left', gap: 10,
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#0f2a4a' }}>
                  {note.title}
                </span>
                <span style={{
                  fontSize: 10, fontWeight: 700, color: sp.text,
                  backgroundColor: sp.pill, padding: '2px 8px',
                  borderRadius: 20, textTransform: 'uppercase',
                  letterSpacing: '0.06em', whiteSpace: 'nowrap',
                  border: `1px solid ${sp.border}44`,
                }}>
                  {sp.label}
                </span>
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 3 }}>
                {note.subtitle}
              </div>
            </div>
            {/* Expand chevron */}
            <span style={{
              color: isOpen ? sp.border : '#94a3b8', fontSize: 18, flexShrink: 0,
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s, color 0.2s',
            }}>▾</span>
          </button>

          {/* Star / favourite button */}
          <button
            onClick={e => { e.stopPropagation(); handleToggleFav(note.id) }}
            aria-label={isFav ? 'Remove from favourites' : 'Add to favourites'}
            title={isFav ? 'Remove from favourites' : 'Add to favourites'}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0 14px',
              background: 'transparent', border: 'none', cursor: 'pointer',
              fontSize: 20, lineHeight: 1, flexShrink: 0,
              color: isFav ? '#f59e0b' : '#d1dce8',
              // Spring-bounce cubic-bezier for the pop effect
              transform: isPopping ? 'scale(1.45)' : 'scale(1)',
              transition: 'color 0.15s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {isFav ? '★' : '☆'}
          </button>
        </div>

        {/* Secondary specialty tags */}
        {isOpen && note.tags.length > 1 && (
          <div style={{ paddingLeft: 14, paddingBottom: 6, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {note.tags.slice(1).map(tag => (
              <span key={tag} style={{
                fontSize: 11, fontWeight: 600, color: '#2b6cb0',
                backgroundColor: '#eef4fb', padding: '2px 8px',
                borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.04em',
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Note body */}
        {isOpen && (
          <div style={{ padding: '10px 14px 18px', borderTop: `1px solid ${sp.border}22` }}>
            <NoteRenderer blocks={note.content} searchQuery={filterQuery.trim() || undefined} />
          </div>
        )}
      </article>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* ── Search filter bar ── */}
      <div style={{
        padding: '10px 16px 8px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #dde6f0',
        flexShrink: 0,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          backgroundColor: '#f4f8fc', border: '1.5px solid #dde6f0',
          borderRadius: 10, padding: '7px 12px',
          transition: 'border-color 0.15s, box-shadow 0.15s',
        }}
          onFocusCapture={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)' }}
          onBlurCapture={e => { e.currentTarget.style.borderColor = '#dde6f0'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <span style={{ fontSize: 15, color: '#a0aec0', flexShrink: 0 }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search notes…"
            value={filterQuery}
            onChange={e => setFilterQuery(e.target.value)}
            style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 15, color: '#1a202c' }}
          />
          {filterQuery && (
            <button onClick={clearFilter} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: 18, lineHeight: 1, padding: '0 2px', flexShrink: 0 }} title="Clear search">×</button>
          )}
        </div>
      </div>

      {/* ── Specialty filter pills ── */}
      <div style={{
        display: 'flex', gap: 8, padding: '8px 16px',
        overflowX: 'auto', backgroundColor: '#fff',
        borderBottom: '1px solid #dde6f0', flexShrink: 0, scrollbarWidth: 'none',
      }}>
        <FilterPill label="All" active={specialty === 'all'} activeColour="#1a365d" onClick={() => handleSpecialty('all')} />
        {SPECIALTIES.map(({ tag, label }) => {
          const s = getSpecialtyStyle(tag)
          return <FilterPill key={tag} label={label} active={specialty === tag} activeColour={s.border} onClick={() => handleSpecialty(tag)} />
        })}
      </div>

      {/* ── Notes list ── */}
      <style>{`@keyframes gpr-notes-in{from{opacity:.5;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
      <div
        key={resetKey}
        style={{
          flex: 1, overflowY: 'auto', padding: '12px 16px 40px',
          backgroundColor: '#f0f5fb',
          animation: resetKey > 0 ? 'gpr-notes-in 0.22s ease-out' : 'none',
        }}
      >
        {/* Result count when filtering */}
        {!showingAll && (
          <p style={{ fontSize: 12, color: '#8a9bb0', margin: '0 0 10px', fontStyle: 'italic' }}>
            {visible.length === 0 ? 'No notes match' : `${visible.length} note${visible.length !== 1 ? 's' : ''} found`}
            {filterQuery && <> for <strong style={{ color: '#4a5568' }}>"{filterQuery}"</strong></>}
          </p>
        )}

        {visible.length === 0 ? (
          <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            {filterQuery ? (
              <>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#4a5568', marginBottom: 6 }}>
                  No notes found for "{filterQuery}"
                </p>
                <p style={{ fontSize: 13, color: '#a0aec0', lineHeight: 1.5 }}>
                  Try a broader term (e.g. <em>asthma</em> instead of <em>salbutamol</em>),
                  check your spelling, or search by condition rather than drug name.
                </p>
              </>
            ) : (
              <p style={{ fontSize: 15, color: '#a0aec0' }}>No notes in this specialty yet</p>
            )}
          </div>
        ) : (
          <>
            {/* ── Favourites section ── */}
            {hasFavSection && (
              <>
                <SectionHeading icon="★" iconColour="#f59e0b" label="Favourites" colour="#92400e" />
                {favouritedVisible.map(renderCard)}
                {unfavouritedVisible.length > 0 && <SectionDivider />}
              </>
            )}

            {/* ── Main / remaining notes ── */}
            {!hasFavSection && unfavouritedVisible.length > 0 && <div style={{ marginBottom: 2 }} />}
            {unfavouritedVisible.map(renderCard)}
          </>
        )}
      </div>
    </div>
  )
}

// ── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({ icon, iconColour, label, colour }: {
  icon: string; iconColour: string; label: string; colour: string
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 5,
      marginBottom: 8,
      fontSize: 11, fontWeight: 800, color: colour,
      textTransform: 'uppercase', letterSpacing: '0.08em',
    }}>
      <span style={{ fontSize: 13, color: iconColour }}>{icon}</span>
      {label}
    </div>
  )
}

// ── Section divider ───────────────────────────────────────────────────────────
function SectionDivider({ label }: { label?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '4px 0 14px' }}>
      <div style={{ flex: 1, height: 1, backgroundColor: '#dde6f0' }} />
      {label && (
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#a0aec0',
          textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap',
        }}>{label}</span>
      )}
      {label && <div style={{ flex: 1, height: 1, backgroundColor: '#dde6f0' }} />}
    </div>
  )
}

// ── Filter pill ──────────────────────────────────────────────────────────────
function FilterPill({ label, active, activeColour, onClick }: {
  label: string; active: boolean; activeColour: string; onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flexShrink: 0, padding: '5px 15px', borderRadius: 20,
        fontSize: 13, fontWeight: 600, cursor: 'pointer',
        border: `1.5px solid ${active ? activeColour : '#c8d8ea'}`,
        backgroundColor: active ? activeColour : '#f8fafc',
        color: active ? '#fff' : '#374151',
        transition: 'all 0.15s', whiteSpace: 'nowrap',
        boxShadow: active ? `0 2px 8px ${activeColour}44` : 'none',
      }}
    >
      {label}
    </button>
  )
}
