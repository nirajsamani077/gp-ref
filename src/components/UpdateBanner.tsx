import { useServiceWorker } from '../hooks/useServiceWorker'

export function UpdateBanner() {
  const { needsUpdate, applyUpdate } = useServiceWorker()
  if (!needsUpdate) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#863bff',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '14px 20px',
        boxShadow: '0 -2px 16px rgba(134,59,255,0.35)',
        // Sit above bottom nav bar on iOS
        paddingBottom: 'max(14px, env(safe-area-inset-bottom))',
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3 }}>
        A new version of GP Ref is available
      </span>
      <button
        onClick={applyUpdate}
        style={{
          flexShrink: 0,
          background: '#fff',
          color: '#863bff',
          border: 'none',
          borderRadius: 8,
          padding: '7px 18px',
          fontWeight: 700,
          fontSize: 14,
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        Update now
      </button>
    </div>
  )
}
