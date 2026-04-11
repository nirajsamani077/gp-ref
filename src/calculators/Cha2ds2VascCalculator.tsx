import { useState } from 'react'

// CHA₂DS₂-VASc stroke risk score for non-valvular atrial fibrillation
// C  = Congestive heart failure / LV dysfunction    +1
// H  = Hypertension                                  +1
// A₂ = Age ≥75 years                                +2
// D  = Diabetes mellitus                             +1
// S₂ = Stroke / TIA / thromboembolism (history)     +2
// V  = Vascular disease (MI, PAD, aortic plaque)    +1
// A  = Age 65–74 years                              +1
// Sc = Sex category female                           +1
// Maximum score: 9
//
// NICE CG180: anticoagulate if score ≥2 (men) or ≥3 (women — female sex alone does not warrant anticoag)
// Annual stroke rates: 0→0%, 1→1.3%, 2→2.2%, 3→3.2%, 4→4.0%, 5→6.7%, 6→9.8%, 9→15.2%

type Band = 'none' | 'consider' | 'recommend'

const BANDS: Record<Band, { label: string; color: string; bg: string; border: string; headline: string }> = {
  none: {
    label: 'NO ANTICOAGULATION',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
    headline: 'Anticoagulation not indicated',
  },
  consider: {
    label: 'CONSIDER ANTICOAGULATION',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
    headline: 'Consider anticoagulation — patient discussion recommended',
  },
  recommend: {
    label: 'ANTICOAGULATION RECOMMENDED',
    color: '#742a2a',
    bg: '#fff5f5',
    border: '#feb2b2',
    headline: 'Offer anticoagulation (DOAC first-line)',
  },
}

const STROKE_RATES: Record<number, string> = {
  0: '0%',
  1: '~1.3%',
  2: '~2.2%',
  3: '~3.2%',
  4: '~4.0%',
  5: '~6.7%',
  6: '~9.8%',
  7: '~9.8%',
  8: '~15.2%',
  9: '~15.2%',
}

const FACTORS = [
  { key: 'c',  letter: 'C',   label: 'Congestive heart failure / LV dysfunction', pts: 1 },
  { key: 'h',  letter: 'H',   label: 'Hypertension',                               pts: 1 },
  { key: 'a2', letter: 'A₂',  label: 'Age ≥75 years',                              pts: 2 },
  { key: 'd',  letter: 'D',   label: 'Diabetes mellitus',                          pts: 1 },
  { key: 's2', letter: 'S₂',  label: 'Stroke / TIA / systemic thromboembolism (history)', pts: 2 },
  { key: 'v',  letter: 'V',   label: 'Vascular disease (prior MI, PAD, aortic plaque)', pts: 1 },
  { key: 'a',  letter: 'A',   label: 'Age 65–74 years',                             pts: 1 },
  { key: 'sc', letter: 'Sc',  label: 'Sex category: Female',                        pts: 1 },
]

export default function Cha2ds2VascCalculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    c: false, h: false, a2: false, d: false, s2: false, v: false, a: false, sc: false,
  })

  const toggle = (key: string) => {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] }
      // Age bands are mutually exclusive
      if (key === 'a2' && next.a2) next.a  = false
      if (key === 'a'  && next.a)  next.a2 = false
      return next
    })
  }

  const score =
    (checked.c  ? 1 : 0) + (checked.h  ? 1 : 0) + (checked.a2 ? 2 : 0) +
    (checked.d  ? 1 : 0) + (checked.s2 ? 2 : 0) + (checked.v  ? 1 : 0) +
    (checked.a  ? 1 : 0) + (checked.sc ? 1 : 0)

  const anyChecked = Object.values(checked).some(Boolean)

  // Interpretation
  const femaleSexOnly = score === 1 && checked.sc &&
    !checked.c && !checked.h && !checked.a2 && !checked.d && !checked.s2 && !checked.v && !checked.a

  const getBand = (): Band => {
    if (score === 0)       return 'none'
    if (femaleSexOnly)     return 'none'
    if (score === 1)       return 'consider'
    return 'recommend'
  }

  const band = getBand()
  const cfg  = BANDS[band]

  function reset() {
    setChecked({ c: false, h: false, a2: false, d: false, s2: false, v: false, a: false, sc: false })
  }

  // Bar: display scores 0–9; thresholds at 1 and 2
  const barPct = (score / 9) * 100

  return (
    <div style={{ maxWidth: 540, width: '100%' }}>

      {/* Info callout */}
      <div style={{
        backgroundColor: '#eef4fb', border: '1px solid #c3d9f0',
        borderLeft: '4px solid #2b6cb0', borderRadius: 8,
        padding: '12px 16px', marginBottom: 20, fontSize: 13, color: '#2a4365',
      }}>
        <p style={{ fontWeight: 700, margin: '0 0 4px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          CHA₂DS₂-VASc — Stroke Risk in AF
        </p>
        <p style={{ margin: 0, lineHeight: 1.5 }}>
          Applies to non-valvular AF (including paroxysmal). Anticoagulate if score ≥2 (or ≥1 in men excluding female sex alone). Female sex alone (score = 1) does not warrant anticoagulation.
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
              backgroundColor: checked[f.key] ? '#eff6ff' : '#f8fafc',
              border: `1px solid ${checked[f.key] ? '#93c5fd' : '#e8edf2'}`,
              transition: 'all 0.12s',
            }}
          >
            <input
              type="checkbox"
              checked={checked[f.key]}
              onChange={() => toggle(f.key)}
              style={{ accentColor: '#3b82f6', width: 16, height: 16, flexShrink: 0, cursor: 'pointer' }}
            />
            <span style={{
              minWidth: 28, fontWeight: 700, fontSize: 13,
              color: checked[f.key] ? '#1e3a5f' : '#64748b',
            }}>
              {f.letter}
            </span>
            <span style={{
              flex: 1, fontSize: 13,
              color: checked[f.key] ? '#1e3a5f' : '#374151',
              fontWeight: checked[f.key] ? 600 : 400,
            }}>
              {f.label}
            </span>
            <span style={{
              fontSize: 13, fontWeight: 700, flexShrink: 0,
              color: checked[f.key] ? '#2b6cb0' : '#94a3b8',
            }}>
              +{f.pts}
            </span>
          </label>
        ))}
      </div>

      {/* Age mutual exclusion note */}
      <p style={{ fontSize: 11, color: '#8a9bb0', margin: '-10px 0 16px', fontStyle: 'italic' }}>
        ⓘ A₂ (≥75 yrs) and A (65–74 yrs) are mutually exclusive — selecting one clears the other.
      </p>

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
            <span style={{ fontSize: 13, color: cfg.color }}>/ 9</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 600, color: cfg.color, margin: '0 0 10px' }}>
            {cfg.headline}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {band === 'none' && [
              femaleSexOnly
                ? 'Female sex alone (score = 1) does not qualify for anticoagulation — no additional risk factors present.'
                : 'Score 0: annual stroke risk is very low (~0%). No anticoagulation indicated.',
              'Review annually or if new risk factors develop.',
              'Treat modifiable risk factors: BP control, glycaemic management, smoking cessation.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'consider' && [
              `Score 1 (male): annual stroke risk ~1.3% — consider anticoagulation after shared decision-making.`,
              'Weigh stroke risk against bleeding risk using ORBIT score.',
              'DOAC (e.g. apixaban 5mg BD, edoxaban 60mg OD) preferred over warfarin if anticoagulating.',
              'Document discussion and patient preference clearly.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'recommend' && [
              `Score ${score}: annual stroke risk ${STROKE_RATES[score] ?? '>10%'} — anticoagulation recommended.`,
              'DOAC first-line (edoxaban 60mg OD NHS-preferred, or apixaban 5mg BD).',
              'Check CrCl (Cockcroft-Gault with actual weight) to determine DOAC dose.',
              'Anticoagulation is lifelong — stroke risk persists even if AF resolves or after cardioversion/ablation.',
              'Assess bleeding risk with ORBIT score — high ORBIT alone should not prevent anticoagulation.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}
          </ul>

          <p style={{ margin: '10px 0 0', fontSize: 12, color: cfg.color, opacity: 0.8 }}>
            Annual stroke rate: {STROKE_RATES[score] ?? '>10%'}
          </p>
        </div>
      )}

      {/* Score bar */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8a9bb0', marginBottom: 8 }}>
          Score range
        </p>
        <div style={{ position: 'relative', height: 28, display: 'flex', borderRadius: 6, overflow: 'hidden' }}>
          {/* No anticoag: score 0 (~11%) */}
          <div style={{ width: '11.1%', background: '#68d391', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>0</span>
          </div>
          {/* Consider: score 1 (~11%) */}
          <div style={{ width: '11.1%', background: '#f6ad55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>1</span>
          </div>
          {/* Recommend: scores 2–9 (~78%) */}
          <div style={{ flex: 1, background: '#fc8181', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>2 – 9 → Anticoagulate</span>
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
          <span style={{ position: 'absolute', left: '11.1%', transform: 'translateX(-50%)' }}>1</span>
          <span style={{ position: 'absolute', left: '22.2%', transform: 'translateX(-50%)' }}>2</span>
          <span style={{ position: 'absolute', right: 0 }}>9</span>
        </div>
      </div>

      {/* Reference table */}
      <div style={{ border: '1px solid #dde6f0', borderRadius: 8, overflow: 'hidden', marginBottom: 20, fontSize: 13 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#dbeafe' }}>
              {['Score', 'Annual stroke risk', 'Action'].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, color: '#1e3a5f', fontSize: 12, borderBottom: '2px solid #93c5fd' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['0', '~0%', 'No anticoagulation', '#276749'],
              ['1 (male)', '~1.3%', 'Consider anticoagulation', '#744210'],
              ['1 (female sex only)', '~0%', 'No anticoagulation', '#276749'],
              ['≥2', '2.2–15%', 'Anticoagulation recommended (DOAC)', '#742a2a'],
            ].map(([s, r, a, c], i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f4f8fc' }}>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', fontWeight: 700, color: c }}>{s}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: '#374151' }}>{r}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: '#374151' }}>{a}</td>
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
