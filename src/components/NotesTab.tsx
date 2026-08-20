import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import type { Note, ContentBlock } from '../data/notes'
import { NOTES } from '../data/notes'
import { searchNotesForTab } from '../lib/searchIndex'
import { getSpecialtyStyle, SPECIALTY_STYLES } from '../data/specialties'
import { NOTE_SHARED_CARE } from '../data/noteSharedCare'
import NoteRenderer from './NoteRenderer'

/** Append a UHDB shared-care protocol link block when the note has a mapping. */
function blocksWithSharedCare(note: Note): ContentBlock[] {
  const links = NOTE_SHARED_CARE[note.id]
  if (!links || links.length === 0) return note.content
  return [
    ...note.content,
    { type: 'heading', level: 3, text: '🧪 Local UHDB shared-care protocol' },
    { type: 'linkrow', links: links.map(l => ({ label: l.label, url: `form:${l.id}` })) },
  ]
}

/* ───────────────────────── search helpers ───────────────────────── */

interface FilterResult {
  note:    Note
  snippet: string | null
}

function filterNotes(query: string): FilterResult[] {
  if (!query.trim()) return NOTES.map(n => ({ note: n, snippet: null }))
  const hits = searchNotesForTab(query.trim(), 200)
  const out: FilterResult[] = []
  for (const h of hits) {
    const note = NOTES.find(n => n.id === h.id)
    if (note) out.push({ note, snippet: h.snippet })
  }
  return out
}

/* ───────────────────────── specialty list ───────────────────────── */

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
  return list.sort((a, b) => a.label.localeCompare(b.label))
}
const SPECIALTIES = getSpecialties()

/* ───────────────────────── favourites ───────────────────────── */

const FAV_KEY = 'gpr-favourites'

function useFavourites() {
  const [ids, setIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(FAV_KEY)
      return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
    } catch { return new Set() }
  })
  useEffect(() => {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...ids])) } catch { /* quota */ }
  }, [ids])
  const toggle = useCallback((id: string) => {
    setIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }, [])
  return { favouriteIds: ids, toggleFavourite: toggle }
}

/* ───────────────────────── responsive ───────────────────────── */

function useIsDesktop() {
  const [d, setD] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 900)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const h = (e: MediaQueryListEvent) => setD(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])
  return d
}

/* ───────────────────────── component ───────────────────────── */

interface NotesTabProps {
  highlightedNoteId?:      string | null
  externalHighlightQuery?: string
}

export default function NotesTab({ highlightedNoteId, externalHighlightQuery }: NotesTabProps) {
  const [filterQuery,   setFilterQuery]   = useState('')
  const [highlightQuery, setHighlightQuery] = useState<string | undefined>(undefined)
  const [selectedId,    setSelectedId]    = useState<string | null>(null)
  const [autoJump,      setAutoJump]      = useState(false)
  const [specialty,     setSpecialty]     = useState<string>('all')
  const [favOnly,       setFavOnly]       = useState(false)
  const [mobileShowNote, setMobileShowNote] = useState(false)

  const inputRef  = useRef<HTMLInputElement>(null)
  const noteScrollRef = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop()

  const { favouriteIds, toggleFavourite } = useFavourites()

  /* home / reset */
  const resetHome = useCallback(() => {
    setFilterQuery('')
    setHighlightQuery(undefined)
    setSelectedId(null)
    setAutoJump(false)
    setSpecialty('all')
    setFavOnly(false)
    setMobileShowNote(false)
  }, [])
  useEffect(() => {
    window.addEventListener('gpr-home', resetHome)
    return () => window.removeEventListener('gpr-home', resetHome)
  }, [resetHome])

  /* external highlight query (command palette) */
  useEffect(() => {
    if (externalHighlightQuery !== undefined) setHighlightQuery(externalHighlightQuery || undefined)
  }, [externalHighlightQuery])

  /* external navigate-to-note (notelink / palette) */
  useEffect(() => {
    if (!highlightedNoteId) return
    setFilterQuery('')
    setSpecialty('all')
    setFavOnly(false)
    setSelectedId(highlightedNoteId)
    setAutoJump(true)
    setMobileShowNote(true)
    noteScrollRef.current?.scrollTo({ top: 0 })
  }, [highlightedNoteId])

  /* filtered + specialty/fav narrowed results */
  const filtered = useMemo(() => filterNotes(filterQuery), [filterQuery])
  const visible = useMemo(() => {
    let v = filtered
    if (specialty !== 'all') v = v.filter(r => r.note.tags.map(t => t.toLowerCase()).includes(specialty))
    if (favOnly) v = v.filter(r => favouriteIds.has(r.note.id))
    return v
  }, [filtered, specialty, favOnly, favouriteIds])

  const searching  = Boolean(filterQuery.trim())
  const visibleKey = visible.map(r => r.note.id).join('|')

  /* keep a valid selection within the visible list while searching/filtering */
  useEffect(() => {
    if (!searching && specialty === 'all' && !favOnly) return   // free browsing — don't auto-pick
    if (visible.length === 0) return
    const stillVisible = selectedId && visible.some(r => r.note.id === selectedId)
    if (!stillVisible) {
      setSelectedId(visible[0].note.id)
      setAutoJump(searching)
    }
  }, [visibleKey]) // eslint-disable-line react-hooks/exhaustive-deps

  const selectedNote = selectedId ? NOTES.find(n => n.id === selectedId) ?? null : null
  const activeHighlight = filterQuery.trim() || highlightQuery || undefined

  function selectNote(id: string, jump: boolean) {
    setSelectedId(id)
    setAutoJump(jump)
    setMobileShowNote(true)
    noteScrollRef.current?.scrollTo({ top: 0 })
  }

  function onSearchChange(v: string) {
    setFilterQuery(v)
    setAutoJump(false)      // don't yank scroll on each keystroke of an open note
  }

  function clearFilter() {
    setFilterQuery('')
    setAutoJump(false)
    inputRef.current?.focus()
  }

  /* keyboard navigation within the results list */
  function onSearchKeyDown(e: React.KeyboardEvent) {
    if (!visible.length) return
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const idx  = Math.max(0, visible.findIndex(r => r.note.id === selectedId))
      const next = e.key === 'ArrowDown'
        ? Math.min(visible.length - 1, idx + 1)
        : Math.max(0, idx - 1)
      selectNote(visible[next].note.id, searching)
    } else if (e.key === 'Enter' && !isDesktop && selectedId) {
      setMobileShowNote(true)
    }
  }

  const showList = isDesktop || !mobileShowNote
  const showNote = isDesktop || mobileShowNote

  /* ───────────────────── render ───────────────────── */
  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden', background: '#eef3f9' }}>

      {/* ══ LEFT: search + results list ══ */}
      {showList && (
        <div style={{
          width: isDesktop ? 372 : '100%',
          flexShrink: 0,
          display: 'flex', flexDirection: 'column',
          borderRight: isDesktop ? '1px solid #d6e0ec' : 'none',
          background: '#fbfdff',
          minWidth: 0,
        }}>
          {/* search box */}
          <div style={{ padding: '12px 14px 8px', flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#fff', border: '1.5px solid #d6e0ec',
              borderRadius: 10, padding: '8px 12px',
              transition: 'border-color .15s, box-shadow .15s',
            }}
              onFocusCapture={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,.12)' }}
              onBlurCapture={e => { e.currentTarget.style.borderColor = '#d6e0ec'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <span style={{ fontSize: 15, color: '#94a3b8', flexShrink: 0 }}>🔍</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search notes…"
                value={filterQuery}
                onChange={e => onSearchChange(e.target.value)}
                onKeyDown={onSearchKeyDown}
                style={{ flex: 1, minWidth: 0, border: 'none', background: 'transparent', outline: 'none', fontSize: 15, color: '#1a202c' }}
              />
              {filterQuery && (
                <button onClick={clearFilter} title="Clear" style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 18, lineHeight: 1, flexShrink: 0 }}>×</button>
              )}
            </div>
          </div>

          {/* filter row: specialty + favourites */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px 10px', flexShrink: 0 }}>
            <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
              <select
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}
                style={{
                  width: '100%', appearance: 'none', WebkitAppearance: 'none',
                  padding: '7px 30px 7px 12px', borderRadius: 8,
                  border: '1.5px solid #d6e0ec', background: specialty === 'all' ? '#fff' : getSpecialtyStyle(specialty).bg,
                  fontSize: 13, fontWeight: 600, color: '#334155', cursor: 'pointer', outline: 'none',
                }}
              >
                <option value="all">All specialties</option>
                {SPECIALTIES.map(s => <option key={s.tag} value={s.tag}>{s.label}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8', fontSize: 10 }}>▼</span>
            </div>
            <button
              onClick={() => setFavOnly(f => !f)}
              title="Show favourites only"
              style={{
                flexShrink: 0, display: 'flex', alignItems: 'center', gap: 5,
                padding: '7px 12px', borderRadius: 8, cursor: 'pointer',
                border: `1.5px solid ${favOnly ? '#f59e0b' : '#d6e0ec'}`,
                background: favOnly ? '#fffbeb' : '#fff',
                color: favOnly ? '#b45309' : '#64748b', fontSize: 13, fontWeight: 700,
                transition: 'all .15s',
              }}
            >
              <span style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
              {isDesktop && 'Favourites'}
            </button>
          </div>

          {/* count line */}
          <div style={{ padding: '0 16px 6px', flexShrink: 0, fontSize: 11.5, color: '#8a9bb0', fontWeight: 600 }}>
            {searching
              ? <>{visible.length} result{visible.length !== 1 ? 's' : ''} for <span style={{ color: '#475569' }}>“{filterQuery}”</span></>
              : favOnly
                ? <>{visible.length} favourite{visible.length !== 1 ? 's' : ''}</>
                : <>{visible.length} note{visible.length !== 1 ? 's' : ''}{specialty !== 'all' ? ` · ${getSpecialtyStyle(specialty).label}` : ''}</>}
          </div>

          {/* results */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '2px 8px 24px' }}>
            {visible.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>🔍</div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#64748b', margin: '0 0 6px' }}>
                  {searching ? `No notes for “${filterQuery}”` : 'Nothing here yet'}
                </p>
                {searching && <p style={{ fontSize: 12, lineHeight: 1.5, margin: 0 }}>Try a broader term or drug class, or use ⌘K → Ask AI.</p>}
              </div>
            ) : visible.map(r => (
              <ResultRow
                key={r.note.id}
                note={r.note}
                selected={r.note.id === selectedId}
                isFav={favouriteIds.has(r.note.id)}
                onOpen={() => selectNote(r.note.id, searching)}
                onToggleFav={() => toggleFavourite(r.note.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ══ RIGHT: note reader ══ */}
      {showNote && (
        <div ref={noteScrollRef} style={{ flex: 1, minWidth: 0, overflowY: 'auto', background: '#fff', position: 'relative' }}>
          {selectedNote ? (
            <NotePane
              note={selectedNote}
              highlight={activeHighlight}
              autoJump={autoJump}
              isFav={favouriteIds.has(selectedNote.id)}
              onToggleFav={() => toggleFavourite(selectedNote.id)}
              showBack={!isDesktop}
              onBack={() => setMobileShowNote(false)}
            />
          ) : (
            <EmptyReader total={NOTES.length} onFocusSearch={() => inputRef.current?.focus()} />
          )}
        </div>
      )}
    </div>
  )
}

/* ───────────────────────── result row ───────────────────────── */

function ResultRow({ note, selected, isFav, onOpen, onToggleFav }: {
  note: Note
  selected: boolean; isFav: boolean; onOpen: () => void; onToggleFav: () => void
}) {
  const sp = getSpecialtyStyle(note.tags[0])
  return (
    <div
      onClick={onOpen}
      style={{
        position: 'relative', cursor: 'pointer', marginBottom: 4,
        borderRadius: 9, padding: '9px 10px 9px 13px',
        background: selected ? sp.bg : 'transparent',
        boxShadow: selected ? `inset 3px 0 0 ${sp.border}` : 'inset 3px 0 0 transparent',
        transition: 'background .12s',
      }}
      onMouseEnter={e => { if (!selected) e.currentTarget.style.background = '#f1f6fc' }}
      onMouseLeave={e => { if (!selected) e.currentTarget.style.background = 'transparent' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{
              flex: 1, minWidth: 0, fontSize: 14, fontWeight: 700,
              color: selected ? '#0f2a4a' : '#1f3a5f',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {note.title}
            </span>
            <span style={{
              flexShrink: 0, fontSize: 9, fontWeight: 800, color: sp.text,
              background: sp.pill, padding: '2px 7px', borderRadius: 20,
              textTransform: 'uppercase', letterSpacing: '.05em',
            }}>
              {sp.label}
            </span>
          </div>
          <div style={{
            fontSize: 11.5, color: '#64748b', marginTop: 2,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {note.subtitle}
          </div>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onToggleFav() }}
          title={isFav ? 'Remove favourite' : 'Add favourite'}
          style={{
            flexShrink: 0, border: 'none', background: 'none', cursor: 'pointer',
            fontSize: 16, lineHeight: 1, padding: '1px 2px',
            color: isFav ? '#f59e0b' : '#cbd5e1',
          }}
        >
          {isFav ? '★' : '☆'}
        </button>
      </div>
    </div>
  )
}

/* ───────────────────────── note pane ───────────────────────── */

function NotePane({ note, highlight, autoJump, isFav, onToggleFav, showBack, onBack }: {
  note: Note; highlight?: string; autoJump: boolean
  isFav: boolean; onToggleFav: () => void; showBack: boolean; onBack: () => void
}) {
  const sp = getSpecialtyStyle(note.tags[0])
  return (
    <div>
      {/* mobile back bar */}
      {showBack && (
        <div style={{
          position: 'sticky', top: 0, zIndex: 30,
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '9px 14px', background: '#fff', borderBottom: '1px solid #e2e8f0',
        }}>
          <button onClick={onBack} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#2b6cb0', fontSize: 14, fontWeight: 700, padding: 0 }}>
            ‹ Back to list
          </button>
        </div>
      )}

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '20px 26px 60px' }}>
        {/* title block */}
        <div style={{ borderBottom: `2px solid ${sp.border}44`, paddingBottom: 12, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <h1 style={{ flex: 1, minWidth: 0, margin: 0, fontSize: 23, fontWeight: 800, color: '#0f2a4a', lineHeight: 1.2 }}>
              {note.title}
            </h1>
            <button
              onClick={onToggleFav}
              title={isFav ? 'Remove favourite' : 'Add favourite'}
              style={{ flexShrink: 0, border: 'none', background: 'none', cursor: 'pointer', fontSize: 24, lineHeight: 1, color: isFav ? '#f59e0b' : '#cbd5e1', marginTop: 2 }}
            >
              {isFav ? '★' : '☆'}
            </button>
          </div>
          {note.subtitle && (
            <p style={{ margin: '6px 0 0', fontSize: 14, color: '#5a6b80', lineHeight: 1.45 }}>{note.subtitle}</p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
            {note.tags.map((tag, i) => {
              const s = getSpecialtyStyle(tag)
              const known = tag.toLowerCase() in SPECIALTY_STYLES
              return (
                <span key={tag} style={{
                  fontSize: 10, fontWeight: 700,
                  color: i === 0 ? s.text : '#4a5568',
                  background: i === 0 ? s.pill : '#eef2f7',
                  padding: '2px 9px', borderRadius: 20,
                  textTransform: 'uppercase', letterSpacing: '.05em',
                }}>
                  {known ? s.label : tag}
                </span>
              )
            })}
          </div>
        </div>

        {/* body — NoteRenderer handles live highlighting + match navigator */}
        <NoteRenderer
          key={note.id}
          blocks={blocksWithSharedCare(note)}
          searchQuery={highlight}
          autoJump={autoJump}
          jumpToBlock={null}
        />
      </div>
    </div>
  )
}

/* ───────────────────────── empty reader ───────────────────────── */

function EmptyReader({ total, onFocusSearch }: { total: number; onFocusSearch: () => void }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 32, color: '#94a3b8' }}>
      <div style={{ fontSize: 46, marginBottom: 14, opacity: .5 }}>📖</div>
      <p style={{ fontSize: 17, fontWeight: 700, color: '#475569', margin: '0 0 6px' }}>Select a note to read</p>
      <p style={{ fontSize: 13, margin: '0 0 18px', lineHeight: 1.5, maxWidth: 340 }}>
        {total} clinical notes. Search on the left, or browse by specialty — the matched text is highlighted inside each note as you type.
      </p>
      <button
        onClick={onFocusSearch}
        style={{ padding: '9px 18px', borderRadius: 8, border: '1.5px solid #c3d9f0', background: '#eef4fb', color: '#2b6cb0', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
      >
        🔍 Start searching
      </button>
    </div>
  )
}
