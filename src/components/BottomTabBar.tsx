import type { Tab, TabId } from '../types'

const NAVY = '#1a365d'

interface Props {
  tabs: Tab[]
  active: TabId
  onSelect: (id: TabId) => void
}

export default function BottomTabBar({ tabs, active, onSelect }: Props) {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 62,
        backgroundColor: '#fff',
        borderTop: '1px solid #dde6f0',
        boxShadow: '0 -2px 12px rgba(26,54,93,0.1)',
        display: 'flex',
        zIndex: 100,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              background: 'transparent',
              border: 'none',
              borderTop: isActive ? `3px solid ${NAVY}` : '3px solid transparent',
              cursor: 'pointer',
              color: isActive ? NAVY : '#94a3b8',
              padding: 0,
              transition: 'color 0.15s',
            }}
          >
            <span style={{ fontSize: 21 }}>{tab.icon}</span>
            <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 400, letterSpacing: isActive ? '0.02em' : 'normal' }}>
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
