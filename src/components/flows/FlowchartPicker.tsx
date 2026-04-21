import { useState } from 'react'
import { FLOWCHARTS, FLOW_CATEGORY_META } from '../../data/flowcharts'
import type { Flowchart, FlowCategory } from '../../data/flowcharts'

type Filter = 'all' | FlowCategory

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...Object.entries(FLOW_CATEGORY_META).map(([id, m]) => ({ id: id as FlowCategory, label: m.label })),
]

interface Props {
  onSelect: (fc: Flowchart) => void
}

export default function FlowchartPicker({ onSelect }: Props) {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? FLOWCHARTS : FLOWCHARTS.filter(f => f.category === filter)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* Hero strip */}
      <div style={{
        padding: '16px 16px 14px',
        background: 'linear-gradient(135deg, #1a3558 0%, #2563a8 100%)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          {/* Small icon mark */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="8" height="6" rx="2" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
            <rect x="14" y="8" width="8" height="6" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <rect x="7" y="16" width="10" height="6" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <line x1="6" y1="8" x2="6" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <line x1="6" y1="10" x2="18" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <line x1="18" y1="10" x2="18" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <line x1="12" y1="14" x2="12" y2="16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          </svg>
          <h2 style={{
            color: '#fff', fontSize: 18, fontWeight: 800,
            letterSpacing: '-0.3px', margin: 0,
          }}>
            Clinical Flowcharts
          </h2>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, margin: 0 }}>
          Interactive decision-support pathways — tap nodes to expand
        </p>
      </div>

      {/* Category filter pills */}
      <div style={{
        display: 'flex', gap: 7, padding: '10px 16px',
        overflowX: 'auto', background: '#fff',
        borderBottom: '1px solid #dde6f0', flexShrink: 0,
        scrollbarWidth: 'none',
      }}>
        {FILTERS.map(({ id, label }) => {
          const isActive = filter === id
          const colour = id === 'all' ? '#1a365d' : FLOW_CATEGORY_META[id as FlowCategory].border
          return (
            <button
              key={id}
              onClick={() => setFilter(id)}
              style={{
                flexShrink: 0, padding: '5px 14px', borderRadius: 20,
                fontSize: 12, fontWeight: 600, cursor: 'pointer',
                border: `1.5px solid ${isActive ? colour : '#c8d8ea'}`,
                backgroundColor: isActive ? colour : '#f8fafc',
                color: isActive ? '#fff' : '#374151',
                transition: 'all 0.15s', whiteSpace: 'nowrap',
                boxShadow: isActive ? `0 2px 8px ${colour}44` : 'none',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Card list or empty state */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 40px', background: '#f0f5fb' }}>
        {visible.length === 0 ? (
          <EmptyState hasFilter={filter !== 'all'} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {visible.map(fc => (
              <FlowchartCard key={fc.id} flowchart={fc} onSelect={onSelect} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Individual card ───────────────────────────────────────────────────────────

function FlowchartCard({ flowchart: fc, onSelect }: { flowchart: Flowchart; onSelect: (f: Flowchart) => void }) {
  const cat = FLOW_CATEGORY_META[fc.category]
  const nodeCount = fc.nodes.length

  return (
    <button
      onClick={() => onSelect(fc)}
      style={{
        width: '100%', textAlign: 'left',
        background: '#fff',
        border: `1px solid ${cat.border}44`,
        borderLeft: `5px solid ${cat.border}`,
        borderRadius: 14,
        padding: '14px 16px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(26,54,93,0.07)',
        transition: 'box-shadow 0.15s, transform 0.12s',
        display: 'flex', alignItems: 'center', gap: 12,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,54,93,0.13)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(26,54,93,0.07)'
        e.currentTarget.style.transform = 'none'
      }}
      onTouchStart={e => { e.currentTarget.style.transform = 'scale(0.98)' }}
      onTouchEnd={e => { e.currentTarget.style.transform = 'none' }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Category badge */}
        <span style={{
          display: 'inline-block',
          fontSize: 9, fontWeight: 700,
          color: cat.text, background: cat.pill,
          padding: '2px 8px', borderRadius: 20,
          textTransform: 'uppercase', letterSpacing: '0.07em',
          border: `1px solid ${cat.border}44`,
          marginBottom: 6,
        }}>
          {cat.label}
        </span>

        {/* Title */}
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0f2a4a', marginBottom: 4, lineHeight: 1.3 }}>
          {fc.title}
        </div>

        {/* Description */}
        <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5, marginBottom: 8 }}>
          {fc.description}
        </div>

        {/* Node count badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            fontSize: 10, color: '#94a3b8', fontWeight: 500,
            background: '#f1f5f9', padding: '2px 7px', borderRadius: 10,
          }}>
            {nodeCount} {nodeCount === 1 ? 'node' : 'nodes'}
          </span>
        </div>
      </div>

      {/* Chevron */}
      <span style={{ color: cat.border, fontSize: 22, flexShrink: 0, opacity: 0.8, lineHeight: 1 }}>›</span>
    </button>
  )
}

// ── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ hasFilter }: { hasFilter: boolean }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '60px 24px', textAlign: 'center',
    }}>
      {/* Mini flowchart illustration */}
      <svg width="72" height="64" viewBox="0 0 72 64" fill="none" style={{ marginBottom: 20, opacity: 0.35 }}>
        <rect x="22" y="0" width="28" height="16" rx="5" fill="#3b82f6" />
        <line x1="36" y1="16" x2="36" y2="24" stroke="#94a3b8" strokeWidth="2"/>
        <rect x="10" y="24" width="24" height="14" rx="4" fill="#f59e0b" />
        <rect x="38" y="24" width="24" height="14" rx="4" fill="#10b981" />
        <line x1="22" y1="38" x2="22" y2="46" stroke="#94a3b8" strokeWidth="2"/>
        <line x1="50" y1="38" x2="50" y2="46" stroke="#94a3b8" strokeWidth="2"/>
        <rect x="8" y="46" width="28" height="14" rx="4" fill="#ef4444" />
        <rect x="36" y="46" width="28" height="14" rx="4" fill="#8b5cf6" />
      </svg>

      <div style={{ fontSize: 16, fontWeight: 700, color: '#334155', marginBottom: 8 }}>
        {hasFilter ? 'No flowcharts in this category yet' : 'Flowcharts coming soon'}
      </div>
      <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6, maxWidth: 260 }}>
        {hasFilter
          ? 'Try selecting a different category, or check back soon.'
          : 'Interactive clinical decision-support pathways will appear here. Tap a node to expand it and see detailed guidance.'}
      </div>

      {/* Colour key preview */}
      {!hasFilter && (
        <div style={{
          marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8,
          justifyContent: 'center', maxWidth: 280,
        }}>
          {[
            { colour: '#3b82f6', bg: '#dbeafe', label: 'Presentation' },
            { colour: '#f59e0b', bg: '#fef3c7', label: 'Decision' },
            { colour: '#10b981', bg: '#d1fae5', label: 'Action' },
            { colour: '#ef4444', bg: '#fee2e2', label: 'Urgent' },
            { colour: '#8b5cf6', bg: '#ede9fe', label: 'Monitor' },
          ].map(({ colour, bg, label }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: '#fff', border: `1px solid ${colour}33`,
              borderLeft: `3px solid ${colour}`,
              borderRadius: 8, padding: '4px 10px',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: bg, border: `1.5px solid ${colour}` }} />
              <span style={{ fontSize: 11, color: '#475569', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
