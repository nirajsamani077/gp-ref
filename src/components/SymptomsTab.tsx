import { useState, useEffect, useRef } from 'react'
import Fuse from 'fuse.js'
import type { Note } from '../data/notes'
import { NOTES } from '../data/notes'
import NoteRenderer from './NoteRenderer'

const SYMPTOM_GREEN = '#38a169'

// Only notes whose primary tag is 'symptoms'
const SYMPTOM_NOTES = NOTES.filter(n => n.tags[0]?.toLowerCase() === 'symptoms')

// Fuse instance scoped to symptom notes
const fuse = new Fuse(SYMPTOM_NOTES, {
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
  if (!query.trim()) return SYMPTOM_NOTES
  return fuse.search(query.trim()).map(r => r.item)
}

// Sub-category pills derived from secondary tags of symptom notes
function getSubCategories() {
  const seen = new Set<string>()
  const list: string[] = []
  for (const note of SYMPTOM_NOTES) {
    for (const tag of note.tags.slice(1)) {
      if (!seen.has(tag)) {
        seen.add(tag)
        list.push(tag)
      }
    }
  }
  return list
}
const SUB_CATS = getSubCategories()

// Card style helpers
const CARD_BORDER  = SYMPTOM_GREEN
const CARD_BG_OPEN = '#f0fff4'
const PILL_BG      = '#c6f6d5'
const PILL_TEXT    = '#1c4532'

export default function SymptomsTab() {
  const [filterQuery, setFilterQuery] = useState('')
  const [openId, setOpenId]           = useState<string | null>(null)
  const [subCat, setSubCat]           = useState<string>('all')
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = filterQuery ? filterNotes(filterQuery) : SYMPTOM_NOTES

  const visible = subCat === 'all'
    ? filtered
    : filtered.filter(n => n.tags.includes(subCat))

  useEffect(() => {
    if (visible.length === 1) setOpenId(visible[0].id)
  }, [visible.length, visible[0]?.id])

  function clearFilter() {
    setFilterQuery('')
    inputRef.current?.focus()
  }

  const showingAll = !filterQuery && subCat === 'all'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* ── Header banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a4731 0%, #276749 100%)',
        padding: '12px 16px 10px',
        flexShrink: 0,
      }}>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '-0.1px' }}>
          Symptoms &amp; DDx
        </div>
        <div style={{ color: '#9ae6b4', fontSize: 12, marginTop: 2 }}>
          Presentation-based guides · differential diagnosis · investigation approach
        </div>
      </div>

      {/* ── Search bar ── */}
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
          onFocusCapture={e => { e.currentTarget.style.borderColor = SYMPTOM_GREEN; e.currentTarget.style.boxShadow = `0 0 0 3px ${SYMPTOM_GREEN}22` }}
          onBlurCapture={e => { e.currentTarget.style.borderColor = '#dde6f0'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <span style={{ fontSize: 15, color: '#a0aec0', flexShrink: 0 }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search symptoms, e.g. cough, headache…"
            value={filterQuery}
            onChange={e => setFilterQuery(e.target.value)}
            style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 15, color: '#1a202c' }}
          />
          {filterQuery && (
            <button
              onClick={clearFilter}
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: 18, lineHeight: 1, padding: '0 2px', flexShrink: 0 }}
              title="Clear search"
            >×</button>
          )}
        </div>
      </div>

      {/* ── Sub-category pills ── */}
      {SUB_CATS.length > 0 && (
        <div style={{
          display: 'flex', gap: 8, padding: '8px 16px',
          overflowX: 'auto', backgroundColor: '#fff',
          borderBottom: '1px solid #dde6f0', flexShrink: 0, scrollbarWidth: 'none',
        }}>
          <SubPill label="All" active={subCat === 'all'} onClick={() => setSubCat('all')} />
          {SUB_CATS.map(cat => (
            <SubPill key={cat} label={cat} active={subCat === cat} onClick={() => setSubCat(cat)} />
          ))}
        </div>
      )}

      {/* ── Note list ── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px 40px', backgroundColor: '#f0fff4' }}>

        {!showingAll && (
          <p style={{ fontSize: 12, color: '#276749', margin: '0 0 10px', fontStyle: 'italic' }}>
            {visible.length === 0
              ? 'No results found'
              : `${visible.length} result${visible.length !== 1 ? 's' : ''}`}
            {filterQuery && <> for <strong>"{filterQuery}"</strong></>}
          </p>
        )}

        {visible.length === 0 ? (
          <div style={{ padding: '40px 0', textAlign: 'center', color: '#68d391', fontSize: 15 }}>
            {filterQuery ? `No symptom notes match "${filterQuery}"` : 'No notes in this category yet'}
          </div>
        ) : (
          visible.map((note: Note) => {
            const isOpen = openId === note.id
            return (
              <article
                key={note.id}
                style={{
                  marginBottom: 10,
                  backgroundColor: isOpen ? CARD_BG_OPEN : '#fff',
                  border: `1px solid ${isOpen ? CARD_BORDER + '55' : '#dde6f0'}`,
                  borderLeft: `5px solid ${CARD_BORDER}`,
                  borderRadius: 12,
                  boxShadow: isOpen
                    ? `0 4px 16px rgba(0,0,0,0.1), 0 0 0 1px ${CARD_BORDER}22`
                    : '0 2px 6px rgba(26,54,93,0.08)',
                  overflow: 'visible',
                  transition: 'box-shadow 0.2s, background 0.2s, border 0.2s',
                }}
              >
                {/* Header / toggle */}
                <button
                  onClick={() => setOpenId(isOpen ? null : note.id)}
                  style={{
                    width: '100%', padding: '13px 14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 10,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: '#0f2a4a' }}>{note.title}</span>
                      {note.tags.slice(1).map(tag => (
                        <span key={tag} style={{
                          fontSize: 10, fontWeight: 700, color: PILL_TEXT,
                          backgroundColor: PILL_BG, padding: '2px 8px',
                          borderRadius: 20, textTransform: 'uppercase',
                          letterSpacing: '0.06em', whiteSpace: 'nowrap',
                          border: `1px solid ${CARD_BORDER}44`,
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 3 }}>{note.subtitle}</div>
                  </div>
                  <span style={{
                    color: isOpen ? CARD_BORDER : '#94a3b8', fontSize: 18, flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s, color 0.2s',
                  }}>▾</span>
                </button>

                {/* Body */}
                {isOpen && (
                  <div style={{ padding: '10px 14px 18px', borderTop: `1px solid ${CARD_BORDER}22` }}>
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

function SubPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        flexShrink: 0, padding: '5px 15px', borderRadius: 20,
        fontSize: 13, fontWeight: 600, cursor: 'pointer',
        border: `1.5px solid ${active ? SYMPTOM_GREEN : '#c8d8ea'}`,
        backgroundColor: active ? SYMPTOM_GREEN : '#f8fafc',
        color: active ? '#fff' : '#374151',
        transition: 'all 0.15s', whiteSpace: 'nowrap',
        boxShadow: active ? `0 2px 8px ${SYMPTOM_GREEN}44` : 'none',
      }}
    >{label}</button>
  )
}
