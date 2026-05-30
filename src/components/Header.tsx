import type { TabId } from '../types'

interface Props {
  onNavigate: (tab: TabId, id: string) => void
  onHome: () => void
  onOpenPalette: () => void
}

export default function Header({ onHome, onOpenPalette }: Props) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'linear-gradient(135deg, #1a3558 0%, #2563a8 100%)',
      display: 'flex', alignItems: 'center',
      padding: '0 16px', height: 54,
      boxShadow: '0 2px 14px rgba(0,0,0,0.32)',
      gap: 12,
    }}>
      {/* Logo / home button */}
      <button
        onClick={onHome}
        title="Return to home"
        aria-label="GP Os — return to home"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '4px 6px', borderRadius: 8, flexShrink: 0,
          transition: 'opacity 0.15s, transform 0.15s',
          WebkitTapHighlightColor: 'transparent',
          display: 'flex', alignItems: 'center', gap: 8,
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.8' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        onMouseDown={e  => { e.currentTarget.style.transform = 'scale(0.94)' }}
        onMouseUp={e    => { e.currentTarget.style.transform = 'scale(1)' }}
        onTouchStart={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(0.94)' }}
        onTouchEnd={e   => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <line x1="12" y1="3" x2="12" y2="12" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
          <path d="M17.9 6 A8.5 8.5 0 1 1 6.1 6" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 0, lineHeight: 1 }}>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: 18, letterSpacing: '-0.3px' }}>GP</span>
          <span style={{
            fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px',
            background: 'linear-gradient(135deg, #a5f3fc 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>&thinsp;Os</span>
        </span>
      </button>

      {/* Universal search trigger */}
      <button
        onClick={onOpenPalette}
        aria-label="Search everything (⌘K)"
        style={{
          marginLeft: 'auto',
          display: 'flex', alignItems: 'center', gap: 8,
          backgroundColor: 'rgba(255,255,255,0.13)',
          border: '1px solid rgba(255,255,255,0.26)',
          borderRadius: 10, padding: '7px 12px',
          cursor: 'pointer', color: 'rgba(255,255,255,0.75)',
          fontSize: 13, fontFamily: 'inherit',
          transition: 'background 0.15s, border-color 0.15s',
          width: '100%', maxWidth: 300,
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.13)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.26)'
        }}
      >
        <span style={{ fontSize: 14, flexShrink: 0 }}>🔍</span>
        <span style={{ flex: 1, textAlign: 'left', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Search everything…
        </span>
        <kbd style={{
          flexShrink: 0,
          padding: '1px 6px', borderRadius: 5,
          border: '1px solid rgba(255,255,255,0.3)',
          fontSize: 11, color: 'rgba(255,255,255,0.6)',
          background: 'rgba(255,255,255,0.08)',
          fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', gap: 2,
        }}>⌘K</kbd>
      </button>
    </header>
  )
}
