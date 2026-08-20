import { useState } from 'react'
import { GUIDANCE_SECTIONS, MASTER_GUIDANCE_URL, MASTER_GUIDANCE_UPDATED } from '../data/referralGuidance'

const NAVY = '#1a365d'

/**
 * "How to send referrals" hub — a modal summary of the practice referral-
 * processing rules, with one click through to the full master PDF.
 */
export default function ReferralGuidance({ onClose }: { onClose: () => void }) {
  const [showPdf, setShowPdf] = useState(false)

  if (showPdf) {
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 1200, display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', backgroundColor: NAVY, color: '#fff', flexShrink: 0 }}>
          <button onClick={() => setShowPdf(false)} style={btn}>← Summary</button>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>Referral Guidance Information (master document)</div>
          <a href={MASTER_GUIDANCE_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, textDecoration: 'none' }}>↗ Open</a>
          <button onClick={onClose} style={btn}>✕ Close</button>
        </div>
        <iframe src={MASTER_GUIDANCE_URL} style={{ flex: 1, border: 'none', width: '100%' }} title="Referral Guidance Information" />
      </div>
    )
  }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1200, backgroundColor: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5vh 16px', overflowY: 'auto' }}>
      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 640, background: '#fff', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.3)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ background: NAVY, color: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 24 }}>📮</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>How to send referrals</div>
            <div style={{ fontSize: 11.5, opacity: 0.8 }}>Darwin practice · master guidance updated {MASTER_GUIDANCE_UPDATED}</div>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: 8, width: 28, height: 28, cursor: 'pointer', fontSize: 15 }}>✕</button>
        </div>

        {/* Sections */}
        <div style={{ padding: '14px 20px 8px', maxHeight: '62vh', overflowY: 'auto' }}>
          {GUIDANCE_SECTIONS.map((s, i) => (
            <section key={i} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <h3 style={{ margin: 0, fontSize: 13.5, fontWeight: 800, color: NAVY }}>{s.title}</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {s.points.map((p, j) => (
                  <li key={j} style={{ fontSize: 12.5, color: '#334155', lineHeight: 1.5 }}>{linkifyEmails(p)}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '12px 20px 16px', borderTop: '1px solid #eef2f7', display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={() => setShowPdf(true)} style={{ flex: 1, background: '#fffaf0', border: '1.5px solid #e0c88a', color: '#92400e', borderRadius: 10, padding: '10px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
            📄 Open full master document (40 pages)
          </button>
          <button onClick={onClose} style={{ background: '#eef3fb', border: '1.5px solid #dde6f0', color: NAVY, borderRadius: 10, padding: '10px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Done</button>
        </div>
      </div>
    </div>
  )
}

const btn = { background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: 8, padding: '5px 12px', cursor: 'pointer', fontSize: 13, fontWeight: 600 } as const

// Render inline email addresses as mailto links
function linkifyEmails(text: string) {
  const parts = text.split(/([\w.\-]+@[\w.\-]+\.[a-z]{2,})/gi)
  return parts.map((p, i) =>
    /^[\w.\-]+@[\w.\-]+\.[a-z]{2,}$/i.test(p)
      ? <a key={i} href={`mailto:${p}`} style={{ color: '#2b6cb0', fontWeight: 600 }}>{p}</a>
      : <span key={i}>{p}</span>
  )
}
