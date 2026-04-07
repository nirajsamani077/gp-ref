import { useState, useEffect, useRef } from 'react'
import Fuse from 'fuse.js'
import type { Note } from '../data/notes'
import { NOTES } from '../data/notes'
import { getSpecialtyStyle, SPECIALTY_STYLES } from '../data/specialties'
import NoteRenderer from './NoteRenderer'

// ── Fuse instance for live note filtering ────────────────────────────────────
const fuse = new Fuse(NOTES, {
  keys: [
    { name: 'title',    weight: 4 },
    { name: 'subtitle', weight: 2 },
    { name: 'body',     weight: 1 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 1,
})

function filterNotes(query: string): Note[] {
  if (!query.trim()) return NOTES
  return fuse.search(query.trim()).map(r => r.item)
}

// ── Specialty list derived from NOTES order ──────────────────────────────────
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

// ── Component ────────────────────────────────────────────────────────────────
export default function NotesTab() {
  const [filterQuery, setFilterQuery] = useState('')
  const [openId, setOpenId]           = useState<string | null>(null)
  const [specialty, setSpecialty]     = useState<string>('all')
  const inputRef = useRef<HTMLInputElement>(null)

  // Notes matching the text filter
  const filtered = filterQuery ? filterNotes(filterQuery) : NOTES

  // Then apply specialty filter on top
  const visible = specialty === 'all'
    ? filtered
    : filtered.filter(n => n.tags.map(t => t.toLowerCase()).includes(specialty))

  // Auto-open the note when only one result remains
  useEffect(() => {
    if (visible.length === 1) {
      setOpenId(visible[0].id)
    }
  }, [visible.length, visible[0]?.id])

  // Clear filter when specialty changes (keeps things predictable)
  function handleSpecialty(tag: string) {
    setSpecialty(tag)
  }

  function clearFilter() {
    setFilterQuery('')
    inputRef.current?.focus()
  }

  const showingAll = !filterQuery && specialty === 'all'

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
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          backgroundColor: '#f4f8fc',
          border: '1.5px solid #dde6f0',
          borderRadius: 10,
          padding: '7px 12px',
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
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: 15,
              color: '#1a202c',
            }}
          />
          {filterQuery && (
            <button
              onClick={clearFilter}
              style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: '#a0aec0',
                fontSize: 18,
                lineHeight: 1,
                padding: '0 2px',
                flexShrink: 0,
              }}
              title="Clear search"
            >×</button>
          )}
        </div>
      </div>

      {/* ── Specialty filter pills ── */}
      <div style={{
        display: 'flex',
        gap: 8,
        padding: '8px 16px',
        overflowX: 'auto',
        backgroundColor: '#fff',
        borderBottom: '1px solid #dde6f0',
        flexShrink: 0,
        scrollbarWidth: 'none',
      }}>
        <FilterPill label="All" active={specialty === 'all'} activeColour="#1a365d" onClick={() => handleSpecialty('all')} />
        {SPECIALTIES.map(({ tag, label }) => {
          const s = getSpecialtyStyle(tag)
          return (
            <FilterPill key={tag} label={label} active={specialty === tag} activeColour={s.border} onClick={() => handleSpecialty(tag)} />
          )
        })}
      </div>

      {/* ── Notes list ── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px 40px', backgroundColor: '#f0f5fb' }}>

        {/* Result count when filtering */}
        {!showingAll && (
          <p style={{ fontSize: 12, color: '#8a9bb0', margin: '0 0 10px', fontStyle: 'italic' }}>
            {visible.length === 0
              ? 'No notes match'
              : `${visible.length} note${visible.length !== 1 ? 's' : ''} found`}
            {filterQuery && <> for <strong style={{ color: '#4a5568' }}>"{filterQuery}"</strong></>}
          </p>
        )}

        {visible.length === 0 ? (
          <div style={{ padding: '40px 0', textAlign: 'center', color: '#a0aec0', fontSize: 15 }}>
            {filterQuery ? `No notes match "${filterQuery}"` : 'No notes in this specialty yet'}
          </div>
        ) : (
          visible.map((note: Note) => {
            const isOpen = openId === note.id
            const sp     = getSpecialtyStyle(note.tags[0])

            return (
              <article
                key={note.id}
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
                {/* Header / toggle */}
                <button
                  onClick={() => setOpenId(isOpen ? null : note.id)}
                  style={{
                    width: '100%',
                    padding: '13px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 10,
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
                  <span style={{
                    color: isOpen ? sp.border : '#94a3b8', fontSize: 18, flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                  }}>▾</span>
                </button>

                {/* Secondary tags */}
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

                {/* Body */}
                {isOpen && (
                  <div style={{ padding: '10px 14px 18px', borderTop: `1px solid ${sp.border}22` }}>
                    <NoteRenderer
                      blocks={note.content}
                      searchQuery={filterQuery.trim() || undefined}
                    />
                  </div>
                )}
              </article>
            )
          })
        )}
      </div>
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
