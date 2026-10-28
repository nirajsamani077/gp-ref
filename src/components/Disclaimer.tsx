import { useState } from 'react'
import { EDITION } from '../edition'

const NAVY = '#1a365d'
const ACK_KEY = 'darwin-poc-ack-v1'

function alreadyAcked(): boolean {
  try { return localStorage.getItem(ACK_KEY) === '1' } catch { return false }
}

/**
 * One-time proof-of-concept disclaimer (clinical-safety advice, DCB 0129/0160).
 * Shown on first load per device; remembered in localStorage. Deliberately not
 * a security control — just informed-use framing for trusted practice users.
 */
export default function Disclaimer() {
  const [open, setOpen] = useState(() => !alreadyAcked())
  if (!open) return null

  const accept = () => {
    try { localStorage.setItem(ACK_KEY, '1') } catch { /* private mode — show again next time */ }
    setOpen(false)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 16px',
    }}>
      <div style={{ width: '100%', maxWidth: 520, background: '#fff', borderRadius: 16, boxShadow: '0 24px 70px rgba(0,0,0,0.35)', overflow: 'hidden' }}>
        <div style={{ background: NAVY, color: '#fff', padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 22 }}>⚠️</span>
          <div style={{ fontSize: 16, fontWeight: 800 }}>{EDITION.title} — proof of concept</div>
        </div>

        <div style={{ padding: '18px 22px', color: '#334155', fontSize: 13.5, lineHeight: 1.55 }}>
          <p style={{ margin: '0 0 12px' }}>
            This is an <b>internal proof-of-concept tool</b> for quick access to local referral forms,
            pathways, guidance and links. It is <b>not a medical device</b> and must not be used for
            clinical decision-making or in front of patients.
          </p>
          <ul style={{ margin: '0 0 12px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>For use by <b>trusted Darwin Practice staff</b> only — do not share externally.</li>
            <li><b>Always verify</b> that a form or protocol is the current version on the source site before use.</li>
            <li>External links open third-party sites that are the authoritative source — defer to them.</li>
            <li>No patient-identifiable data should be entered anywhere in this tool.</li>
          </ul>
          <p style={{ margin: 0, color: '#64748b', fontSize: 12 }}>
            By continuing you acknowledge these limitations.
          </p>
        </div>

        <div style={{ padding: '0 22px 18px' }}>
          <button onClick={accept} style={{
            width: '100%', background: NAVY, color: '#fff', border: 'none', borderRadius: 10,
            padding: '12px', fontSize: 14, fontWeight: 700, cursor: 'pointer',
          }}>I understand — continue</button>
        </div>
      </div>
    </div>
  )
}
