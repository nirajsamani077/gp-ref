import { useState } from 'react'

// ORBIT-AF Bleeding Risk Score
// O = Older age (>75 years)                                    +1
// R = Reduced Hb / haematocrit                                 +2
//     (Hb <13 g/dL men or <12 g/dL women; Hct <40% men or <36% women)
// B = Bleeding history (prior major bleed, ICH, menorrhagia)  +2
// I = Insufficient renal function (eGFR <60 or dialysis)      +1
// T = Treatment with antiplatelets or NSAIDs                  +1
// Maximum score: 7
//
// Low (0–2): ~2.4 major bleeds / 100 pt-years
// Medium (3): ~4.7 major bleeds / 100 pt-years
// High (4+): ~8.1 major bleeds / 100 pt-years
//
// HIGH ORBIT SCORE ALONE should NOT be a reason to withhold anticoagulation.
// Instead: identify and address modifiable bleeding risk factors.

type Band = 'low' | 'medium' | 'high'

const BANDS: Record<Band, { label: string; color: string; bg: string; border: string; headline: string; rate: string }> = {
  low: {
    label: 'LOW BLEEDING RISK',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
    headline: 'Low risk of major bleeding on anticoagulation',
    rate: '~2.4 major bleeds / 100 patient-years',
  },
  medium: {
    label: 'MEDIUM BLEEDING RISK',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
    headline: 'Moderate risk — address modifiable bleeding risk factors',
    rate: '~4.7 major bleeds / 100 patient-years',
  },
  high: {
    label: 'HIGH BLEEDING RISK',
    color: '#742a2a',
    bg: '#fff5f5',
    border: '#feb2b2',
    headline: 'High risk — do NOT withhold anticoagulation on score alone',
    rate: '~8.1 major bleeds / 100 patient-years',
  },
}

const FACTORS = [
  { key: 'o', letter: 'O', label: 'Older age: >75 years',                                                                           pts: 1 },
  { key: 'r', letter: 'R', label: 'Reduced Hb / Hct  (Hb <13 g/dL men or <12 g/dL women; Hct <40% men or <36% women)',            pts: 2 },
  { key: 'b', letter: 'B', label: 'Bleeding history (prior major bleed, intracranial haemorrhage or severe menorrhagia)',           pts: 2 },
  { key: 'i', letter: 'I', label: 'Insufficient kidney function: eGFR <60 mL/min/1.73m² or on dialysis',                          pts: 1 },
  { key: 't', letter: 'T', label: 'Treatment with antiplatelet agents or NSAIDs',                                                  pts: 1 },
]

export default function OrbitAfCalculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    o: false, r: false, b: false, i: false, t: false,
  })

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }))

  const score =
    (checked.o ? 1 : 0) + (checked.r ? 2 : 0) + (checked.b ? 2 : 0) +
    (checked.i ? 1 : 0) + (checked.t ? 1 : 0)

  const anyChecked = Object.values(checked).some(Boolean)

  const getBand = (): Band => {
    if (score <= 2) return 'low'
    if (score === 3) return 'medium'
    return 'high'
  }

  const band = getBand()
  const cfg  = BANDS[band]

  function reset() {
    setChecked({ o: false, r: false, b: false, i: false, t: false })
  }

  // Bar: 0–7; thresholds at 3 and 4
  const barPct = (score / 7) * 100

  // Modifiable risk factors present
  const modifiable = [
    checked.r && 'Anaemia — investigate and treat underlying cause; optimise Hb',
    checked.i && 'Renal impairment — review DOAC dose; avoid nephrotoxic drugs',
    checked.t && 'Antiplatelet / NSAID use — review indication; consider stopping if possible',
  ].filter(Boolean) as string[]

  return (
    <div style={{ maxWidth: 540, width: '100%' }}>

      {/* Info callout */}
      <div style={{
        backgroundColor: '#fffbeb', border: '1px solid #fbd38d',
        borderLeft: '4px solid #d97706', borderRadius: 8,
        padding: '12px 16px', marginBottom: 20, fontSize: 13, color: '#744210',
      }}>
        <p style={{ fontWeight: 700, margin: '0 0 4px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          ORBIT-AF — Bleeding Risk Before Starting Anticoagulation
        </p>
        <p style={{ margin: 0, lineHeight: 1.5 }}>
          A high ORBIT score alone should <strong>not</strong> prevent anticoagulation. Use the score to identify modifiable bleeding risks and guide monitoring intensity. Balance against CHA₂DS₂-VASc stroke risk.
        </p>
      </div>

      {/* Factor checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
        {FACTORS.map(f => (
          <label
            key={f.key}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px', borderRadius: 8, cursor: 'pointer',
              backgroundColor: checked[f.key] ? '#fffbeb' : '#f8fafc',
              border: `1px solid ${checked[f.key] ? '#fbd38d' : '#e8edf2'}`,
              transition: 'all 0.12s',
            }}
          >
            <input
              type="checkbox"
              checked={checked[f.key]}
              onChange={() => toggle(f.key)}
              style={{ accentColor: '#d97706', width: 16, height: 16, flexShrink: 0, cursor: 'pointer' }}
            />
            <span style={{
              minWidth: 20, fontWeight: 700, fontSize: 13,
              color: checked[f.key] ? '#744210' : '#64748b',
            }}>
              {f.letter}
            </span>
            <span style={{
              flex: 1, fontSize: 13,
              color: checked[f.key] ? '#744210' : '#374151',
              fontWeight: checked[f.key] ? 600 : 400,
            }}>
              {f.label}
            </span>
            <span style={{
              fontSize: 13, fontWeight: 700, flexShrink: 0,
              color: checked[f.key] ? '#d97706' : '#94a3b8',
            }}>
              +{f.pts}
            </span>
          </label>
        ))}
      </div>

      {/* Result */}
      {anyChecked && (
        <div style={{
          backgroundColor: cfg.bg,
          border: `1px solid ${cfg.border}`,
          borderLeft: `5px solid ${cfg.color}`,
          borderRadius: 10, padding: '18px 20px', marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
              color: cfg.color, backgroundColor: cfg.border,
              padding: '2px 8px', borderRadius: 4,
            }}>{cfg.label}</span>
            <span style={{ fontSize: 32, fontWeight: 800, color: cfg.color }}>{score}</span>
            <span style={{ fontSize: 13, color: cfg.color }}>/ 7</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 600, color: cfg.color, margin: '0 0 4px' }}>
            {cfg.headline}
          </p>
          <p style={{ fontSize: 13, color: cfg.color, margin: '0 0 12px', opacity: 0.85 }}>
            {cfg.rate}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {band === 'low' && [
              'Low bleeding risk — benefits of anticoagulation generally outweigh bleed risk.',
              'Start DOAC as per CHA₂DS₂-VASc recommendation.',
              'Annual monitoring: U&E, FBC, LFTs; renal function more frequently if CrCl <60.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'medium' && [
              'Moderate bleeding risk — discuss with patient; shared decision-making.',
              'Address all modifiable risk factors before or at time of starting anticoagulation.',
              'Consider more frequent monitoring (6-monthly U&E and FBC).',
              'Avoid NSAIDs, excess alcohol, and unnecessary antiplatelet co-prescribing.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'high' && [
              'High ORBIT score — do NOT withhold anticoagulation on score alone.',
              'Identify and address ALL modifiable bleeding risk factors (see below).',
              'Discuss risks and benefits clearly with patient; document decision.',
              'More frequent monitoring: 3–6 monthly review including U&E, FBC.',
              'Falls risk alone is rarely a reason to withhold anticoag — evidence favours treating.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}
          </ul>

          {/* Modifiable factors */}
          {modifiable.length > 0 && (
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${cfg.border}` }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: cfg.color, margin: '0 0 8px' }}>
                Modifiable risk factors identified:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {modifiable.map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Score bar */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8a9bb0', marginBottom: 8 }}>
          Risk thresholds
        </p>
        <div style={{ position: 'relative', height: 28, display: 'flex', borderRadius: 6, overflow: 'hidden' }}>
          {/* Low: 0–2 (42.9%) */}
          <div style={{ width: '42.9%', background: '#68d391', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>Low (0–2)</span>
          </div>
          {/* Medium: 3 (14.3%) */}
          <div style={{ width: '14.3%', background: '#f6ad55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>3</span>
          </div>
          {/* High: 4–7 (42.8%) */}
          <div style={{ flex: 1, background: '#fc8181', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>High (4+)</span>
          </div>
          {/* Marker */}
          {anyChecked && (
            <div style={{
              position: 'absolute',
              left: `${Math.min(barPct, 98)}%`,
              top: -4, bottom: -4, width: 3,
              backgroundColor: '#1a365d', borderRadius: 2,
              transform: 'translateX(-50%)',
              boxShadow: '0 0 0 2px #fff',
            }} />
          )}
        </div>
        <div style={{ position: 'relative', height: 18, marginTop: 4, fontSize: 11, color: '#8a9bb0' }}>
          <span style={{ position: 'absolute', left: 0 }}>0</span>
          <span style={{ position: 'absolute', left: '42.9%', transform: 'translateX(-50%)' }}>3</span>
          <span style={{ position: 'absolute', left: '57.1%', transform: 'translateX(-50%)' }}>4</span>
          <span style={{ position: 'absolute', right: 0 }}>7</span>
        </div>
      </div>

      {/* Reference table */}
      <div style={{ border: '1px solid #dde6f0', borderRadius: 8, overflow: 'hidden', marginBottom: 20, fontSize: 13 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#dbeafe' }}>
              {['Score', 'Risk', 'Bleeds / 100 pt-years'].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, color: '#1e3a5f', fontSize: 12, borderBottom: '2px solid #93c5fd' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['0 – 2', 'Low',    '~2.4',  '#276749'],
              ['3',     'Medium', '~4.7',  '#744210'],
              ['4 – 7', 'High',   '~8.1',  '#742a2a'],
            ].map(([s, r, b, c], i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f4f8fc' }}>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', fontWeight: 700, color: c }}>{s}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: '#374151' }}>{r}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: '#374151' }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reset */}
      {anyChecked && (
        <button
          onClick={reset}
          style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, color: '#4a5568', backgroundColor: '#f7fafc', border: '1px solid #dce6f0', borderRadius: 7, cursor: 'pointer' }}
        >
          Reset
        </button>
      )}
    </div>
  )
}

function ActionItem({ color, text }: { color: string; text: string }) {
  return (
    <li style={{ display: 'flex', gap: 8, fontSize: 13, color: '#2d3748', lineHeight: 1.5 }}>
      <span style={{ color, flexShrink: 0, marginTop: 1 }}>›</span>
      {text}
    </li>
  )
}

const barLabel: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, color: '#fff',
  textShadow: '0 1px 2px rgba(0,0,0,0.2)', pointerEvents: 'none',
}
