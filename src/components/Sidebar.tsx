import type { Tab, TabId } from '../types'

const NAVY = '#1a365d'

interface Props {
  tabs: Tab[]
  active: TabId
  onSelect: (id: TabId) => void
}

export default function Sidebar({ tabs, active, onSelect }: Props) {
  return (
    <nav
      style={{
        width: 180,
        flexShrink: 0,
        borderRight: '1px solid #e8edf2',
        backgroundColor: '#f7f9fb',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 12,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '11px 18px',
              background: isActive ? '#e6eef7' : 'transparent',
              borderLeft: isActive ? `3px solid ${NAVY}` : '3px solid transparent',
              border: 'none',
              borderLeftStyle: 'solid',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? NAVY : '#4a5568',
              width: '100%',
              transition: 'background 0.12s',
            }}
          >
            <span style={{ fontSize: 16 }}>{tab.icon}</span>
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
