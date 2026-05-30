import { useState, useEffect, useRef, useCallback } from 'react'
import type { Note } from '../data/notes'
import { NOTES } from '../data/notes'
import { searchNotesForTab } from '../lib/searchIndex'
import { getSpecialtyStyle, SPECIALTY_STYLES } from '../data/specialties'
import NoteRenderer from './NoteRenderer'

// ── Note search via shared searchIndex ───────────────────────────────────────
interface FilterResult {
  note: Note
  snippet: string | null
}

function filterNotes(query: string): FilterResult[] {
  if (!query.trim()) return NOTES.map(n => ({ note: n, snippet: null }))
  const hits = searchNotesForTab(query.trim(), 100)
  return hits.map(h => ({
    note: NOTES.find(n => n.id === h.id)!,
    snippet: h.snippet,
  })).filter(r => r.note)
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
  externalHighlightQuery?: string
}

export default function NotesTab({ highlightedNoteId, externalHighlightQuery }: NotesTabProps) {
  const [filterQuery, setFilterQuery]   = useState('')
  const [highlightQuery, setHighlightQuery] = useState<string | undefined>(undefined)
  const [openId, setOpenId]             = useState<string | null>(null)
  const [autoJump, setAutoJump]         = useState(false)
  const [specialty, setSpecialty]       = useState<string>('all')
  const [resetKey, setResetKey]         = useState(0)
  const [animatingId, setAnimatingId]   = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { favouriteIds, toggleFavourite } = useFavourites()

  const resetHome = useCallback(() => {
    setFilterQuery('')
    setHighlightQuery(undefined)
    setOpenId(null)
    setAutoJump(false)
    setSpecialty('all')
    setResetKey(k => k + 1)
  }, [])

  useEffect(() => {
    window.addEventListener('gpr-home', resetHome)
    return () => window.removeEventListener('gpr-home', resetHome)
  }, [resetHome])

  // Sync external highlight query from navigate-note events (from command palette)
  useEffect(() => {
    if (externalHighlightQuery !== undefined) {
      setHighlightQuery(externalHighlightQuery || undefined)
    }
  }, [externalHighlightQuery])

  // Open and scroll to a note when navigated externally
  useEffect(() => {
    if (!highlightedNoteId) return
    setFilterQuery('')
    setSpecialty('all')
    setOpenId(highlightedNoteId)
    setAutoJump(true)      // auto-jump when coming from palette/notelink
    setTimeout(() => {
      const el = document.querySelector(`[data-note-id="${highlightedNoteId}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }, [highlightedNoteId])

  const filteredResults = filterQuery ? filterNotes(filterQuery) : NOTES.map(n => ({ note: n, snippet: null as string | null }))
  const filtered = filteredResults
  const visible  = specialty === 'all'
    ? filtered
    : filtered.filter(r => r.note.tags.map(t => t.toLowerCase()).includes(specialty))

  useEffect(() => {
    if (visible.length === 1) {
      setOpenId(visible[0].note.id)
      setAutoJump(!!filterQuery)
    }
  }, [visible.length, visible[0]?.note.id])   // eslint-disable-line react-hooks/exhaustive-deps

  function handleSpecialty(tag: string) { setSpecialty(tag) }

  function clearFilter() {
    setFilterQuery('')
    setHighlightQuery(undefined)
    setAutoJump(false)
    inputRef.current?.focus()
  }

  function handleToggleFav(noteId: string) {
    toggleFavourite(noteId)
    setAnimatingId(noteId)
    setTimeout(() => setAnimatingId(null), 300)
  }

  const showingAll = !filterQuery && specialty === 'all'
  const searching  = Boolean(filterQuery)

  const favouritedVisible   = searching ? [] : visible.filter(r => favouriteIds.has(r.note.id))
  const unfavouritedVisible = searching ? visible : visible.filter(r => !favouriteIds.has(r.note.id))
  const hasFavSection = favouritedVisible.length > 0

  // The effective search query for highlighting (filter takes precedence)
  const activeHighlight = filterQuery.trim() || highlightQuery || undefined

  // ── Shared card renderer ─────────────────────────────────────────────────
  function renderCard({ note, snippet }: { note: Note; snippet: string | null }) {
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
        {/* ── Card header row ── */}
        <div style={{ display: 'flex', alignItems: 'stretch' }}>

          <button
            onClick={() => {
              const next = isOpen ? null : note.id
              setOpenId(next)
              setAutoJump(false)
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
              {/* Match snippet — shown when searching and note is closed */}
              {!isOpen && snippet && filterQuery && (
                <div style={{
                  marginTop: 5, fontSize: 11, color: '#6b7280',
                  backgroundColor: '#fef9c3', border: '1px solid #fde68a',
                  borderRadius: 5, padding: '3px 8px',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  maxWidth: '100%',
                }}>
                  <span style={{ fontWeight: 700, color: '#92400e', marginRight: 4 }}>↳</span>
                  {snippet}
                </div>
              )}
            </div>
            <span style={{
              color: isOpen ? sp.border : '#94a3b8', fontSize: 18, flexShrink: 0,
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s, color 0.2s',
            }}>▾</span>
          </button>

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
            <NoteRenderer
              blocks={note.content}
              searchQuery={activeHighlight}
              autoJump={autoJump && openId === note.id}
            />
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
                  Try a broader term or drug class — fuzzy matching is active,
                  so check for typos or try the ⌘K palette and <em>Ask AI</em>.
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
