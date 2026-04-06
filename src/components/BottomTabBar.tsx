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
        height: 60,
        backgroundColor: '#fff',
        borderTop: '1px solid #e8edf2',
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
              borderTop: isActive ? `2px solid ${NAVY}` : '2px solid transparent',
              cursor: 'pointer',
              color: isActive ? NAVY : '#8a9bb0',
              padding: 0,
            }}
          >
            <span style={{ fontSize: 20 }}>{tab.icon}</span>
            <span style={{ fontSize: 10, fontWeight: isActive ? 600 : 400 }}>
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
