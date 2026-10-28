import { REFERRAL_FORMS } from '../data/referralForms'
import { FORMS } from '../data/forms'
import { SHARED_CARE } from '../data/sharedCare'
import { EXTRA_DOCS } from '../data/extraDocs'
import { LINK_CATEGORIES } from '../data/links'

const NAVY = '#1a365d'

const PATHWAY_COUNT = FORMS.length + SHARED_CARE.length + EXTRA_DOCS.length
const LINK_COUNT = LINK_CATEGORIES.reduce((n, c) => n + c.links.length, 0)

interface Props {
  onOpenForms: (intent: { mode?: 'referral' | 'pathway'; guidance?: boolean }) => void
  onOpenLinks: () => void
  onOpenSearch: () => void
}

interface Card {
  icon: string; title: string; blurb: string; count: string; color: string
  onClick: (p: Props) => void
}

const CARDS: Card[] = [
  {
    icon: '🏥', title: 'Referral forms', color: '#2b6cb0',
    blurb: 'Local SES referral forms by specialty, trust, provider & age.',
    count: `${REFERRAL_FORMS.length} forms`,
    onClick: p => p.onOpenForms({ mode: 'referral' }),
  },
  {
    icon: '🧪', title: 'Pathways & protocols', color: '#38a169',
    blurb: 'Clinical pathways, UHDB shared-care result protocols & Darwin practice docs.',
    count: `${PATHWAY_COUNT} documents`,
    onClick: p => p.onOpenForms({ mode: 'pathway' }),
  },
  {
    icon: '📮', title: 'How to send referrals', color: '#92400e',
    blurb: 'Quick guide: Lexacom, Accumail, e-RS, trust rules and key contacts.',
    count: 'Guidance hub',
    onClick: p => p.onOpenForms({ guidance: true }),
  },
  {
    icon: '🔗', title: 'Links & calculators', color: '#2c7a7b',
    blurb: 'Trusted UK primary-care resources and validated risk calculators.',
    count: `${LINK_COUNT} links`,
    onClick: p => p.onOpenLinks(),
  },
]

export default function HomeDarwin(props: Props) {
  return (
    <div style={{ height: '100%', overflowY: 'auto', background: '#f7f9fb' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#2b6cb0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            Darwin Practice
          </div>
          <h1 style={{ margin: '0 0 10px', fontSize: 30, fontWeight: 800, color: '#0f2a4a', letterSpacing: '-0.5px' }}>
            Referral forms, pathways & guidance
          </h1>
          <p style={{ margin: '0 auto', maxWidth: 520, fontSize: 15, color: '#64748b', lineHeight: 1.55 }}>
            Fast access to up-to-date local forms, protocols and trusted links — all in one place.
          </p>
        </div>

        {/* Search */}
        <button onClick={props.onOpenSearch} style={{
          width: '100%', maxWidth: 560, margin: '0 auto 34px', display: 'flex', alignItems: 'center', gap: 12,
          background: '#fff', border: '1.5px solid #dde6f0', borderRadius: 14, padding: '15px 20px',
          cursor: 'pointer', boxShadow: '0 2px 10px rgba(26,54,93,0.05)', transition: 'border-color 0.15s, box-shadow 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#2b6cb0'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(43,108,176,0.12)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#dde6f0'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(26,54,93,0.05)' }}
        >
          <span style={{ fontSize: 18 }}>🔍</span>
          <span style={{ flex: 1, textAlign: 'left', color: '#64748b', fontSize: 15 }}>Search forms, pathways & links…</span>
          <kbd style={{ padding: '2px 8px', borderRadius: 6, border: '1px solid #dde6f0', fontSize: 12, color: '#94a3b8', fontFamily: 'inherit' }}>⌘K</kbd>
        </button>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {CARDS.map(card => (
            <button key={card.title} onClick={() => card.onClick(props)} style={{
              textAlign: 'left', background: '#fff', border: '1px solid #e2ecf7', borderRadius: 16,
              padding: '22px', cursor: 'pointer', transition: 'transform 0.12s, box-shadow 0.12s, border-color 0.12s',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 26px rgba(26,54,93,0.12)'; e.currentTarget.style.borderColor = '#b3c8f0' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e2ecf7' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: card.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{card.icon}</div>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: card.color, background: card.color + '14', border: `1px solid ${card.color}30`, borderRadius: 20, padding: '3px 10px' }}>{card.count}</span>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#0f2a4a' }}>{card.title}</div>
              <div style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.5 }}>{card.blurb}</div>
              <div style={{ marginTop: 'auto', fontSize: 13, fontWeight: 700, color: card.color, paddingTop: 6 }}>Open →</div>
            </button>
          ))}
        </div>

        {/* PoC footnote */}
        <p style={{ textAlign: 'center', marginTop: 34, fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>
          ⚠️ Proof of concept — not a medical device. Always verify a form is the current version before use.
          Not for patient-facing use.
        </p>
      </div>
    </div>
  )
}
