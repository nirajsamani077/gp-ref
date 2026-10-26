import { useEffect, useState } from 'react'

// Patient explainers: self-contained animated HTML pages in public/explainers/.
// Shown in an iframe so their own styles and scripts stay isolated from the app.

interface Explainer {
  id: string
  file: string
  title: string
  subtitle: string
}

interface Group {
  label: string
  items: Explainer[]
}

const GROUPS: Group[] = [
  {
    label: 'Heart and circulation',
    items: [
      { id: 'cholesterol', file: 'cholesterol-lorries.html', title: 'How cholesterol travels', subtitle: 'LDL, HDL, triglycerides, Lp(a), ApoB and non-HDL as lorries' },
      { id: 'qrisk', file: 'heart-risk-grid.html', title: '100 people like you', subtitle: 'QRISK3 as a people grid · statin, BP and smoking effects' },
      { id: 'bp', file: 'blood-pressure-pump.html', title: 'Blood pressure', subtitle: 'Systolic and diastolic · stiff pipes · home readings · what lowers it' },
    ],
  },
  {
    label: 'Sugar and weight',
    items: [
      { id: 'hba1c', file: 'sugar-and-insulin.html', title: 'Sugar, HbA1c and insulin', subtitle: 'Sugar-coated red cells · 3-month average · insulin keys' },
      { id: 'insulin-resistance', file: 'insulin-resistance-cycle.html', title: 'Weight, insulin and sugar', subtitle: 'Fat cupboard overflow · jammed locks · the vicious cycle' },
      { id: 'glp1', file: 'weight-loss-medicines.html', title: 'Weight loss medicines', subtitle: 'Semaglutide, tirzepatide and tablets · side effects · UK access' },
    ],
  },
  {
    label: 'Kidneys and liver',
    items: [
      { id: 'kidney', file: 'kidney-filters.html', title: 'Kidney tests', subtitle: 'eGFR and urine ACR as sieves · KDIGO risk grid' },
      { id: 'liver', file: 'fatty-liver.html', title: 'Fatty liver', subtitle: 'Fat, irritation and scarring · ALT · FIB-4 · reversal' },
    ],
  },
  {
    label: "Men's health",
    items: [
      { id: 'psa', file: 'psa-explained.html', title: 'The PSA test', subtitle: 'Smoke alarm · age thresholds · 100 men · turtles, rabbits, birds' },
    ],
  },
]

const NAVY = '#1a365d'
const src = (file: string) => `${import.meta.env.BASE_URL}explainers/${file}`

export default function ExplainersTab() {
  const [open, setOpen] = useState<Explainer | null>(null)

  // Return to the list when the tab is re-selected from the nav
  useEffect(() => {
    const reset = () => setOpen(null)
    window.addEventListener('gpr-explainers-home', reset)
    return () => window.removeEventListener('gpr-explainers-home', reset)
  }, [])

  if (open) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px',
          borderBottom: '1px solid #dce6f0', backgroundColor: '#fff', flexShrink: 0,
        }}>
          <button
            onClick={() => setOpen(null)}
            style={{
              border: '1px solid #cbd5e0', background: '#fff', borderRadius: 8, padding: '6px 12px',
              fontSize: 13.5, fontWeight: 600, color: NAVY, cursor: 'pointer',
            }}
          >
            ← All explainers
          </button>
          <span style={{ fontSize: 15, fontWeight: 700, color: NAVY, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {open.title}
          </span>
          <a
            href={src(open.file)}
            target="_blank"
            rel="noopener"
            style={{ fontSize: 13, color: '#2b6cb0', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Open full screen ↗
          </a>
        </div>
        <iframe
          key={open.id}
          src={src(open.file)}
          title={open.title}
          style={{ flex: 1, width: '100%', border: 'none', backgroundColor: '#f6f8f8' }}
        />
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ padding: '24px 20px 90px', maxWidth: 900, width: '100%', margin: '0 auto' }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 4px' }}>Patient explainers</h1>
        <p style={{ fontSize: 13, color: '#718096', margin: '0 0 24px' }}>
          Animated step-throughs to share on screen when explaining results. Simplified for patients; sources in each footnote.
        </p>
        {GROUPS.map(group => (
          <section key={group.label} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 12, fontWeight: 700, color: '#8a9bb0', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>
              {group.label}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
              {group.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setOpen(item)}
                  style={{
                    textAlign: 'left', backgroundColor: '#fff', border: '1px solid #dce6f0',
                    borderLeft: '5px solid #0f6e64', borderRadius: 10, padding: '14px 16px',
                    cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: '#718096', lineHeight: 1.45 }}>{item.subtitle}</div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
