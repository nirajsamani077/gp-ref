import { useState } from 'react'

// AUDIT-C — Alcohol Use Disorders Identification Test (Consumption)
// 3-question screening tool. Score ≥5 = positive → proceed to full AUDIT
// Q1: Frequency of drinking   0–4
// Q2: Units on typical day    0–4
// Q3: Heavy episodic drinking 0–4  (≥6u female / ≥8u male)
// Max score: 12

type Band = 'low' | 'positive'
const BANDS: Record<Band, { label: string; color: string; bg: string; border: string; headline: string }> = {
  low: {
    label: 'LOW RISK',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
    headline: 'Drinking at safe levels — reinforce benefits of low-risk drinking',
  },
  positive: {
    label: 'AUDIT-C POSITIVE',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
    headline: 'Increasing or higher risk drinking — complete full AUDIT',
  },
}

const Q1_OPTIONS = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Monthly or less' },
  { value: 2, label: '2–4 times per month' },
  { value: 3, label: '2–3 times per week' },
  { value: 4, label: '4 or more times per week' },
]
const Q2_OPTIONS = [
  { value: 0, label: '1–2 units' },
  { value: 1, label: '3–4 units' },
  { value: 2, label: '5–6 units' },
  { value: 3, label: '7–9 units' },
  { value: 4, label: '10 or more units' },
]
const Q3_OPTIONS = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Less than monthly' },
  { value: 2, label: 'Monthly' },
  { value: 3, label: 'Weekly' },
  { value: 4, label: 'Daily or almost daily' },
]

function getBand(score: number): Band {
  return score >= 5 ? 'positive' : 'low'
}

function Radio({ options, value, onChange }: {
  options: { value: number; label: string }[]
  value: number | null
  onChange: (v: number) => void
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px', marginTop: 6 }}>
      {options.map(o => (
        <label key={o.value} style={{
          display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
          padding: '5px 10px', borderRadius: 8,
          border: `1.5px solid ${value === o.value ? '#3182ce' : '#e2e8f0'}`,
          background: value === o.value ? '#ebf8ff' : '#fff',
          fontSize: 13, fontWeight: value === o.value ? 600 : 400,
          transition: 'all 0.15s',
        }}>
          <input
            type="radio"
            style={{ display: 'none' }}
            checked={value === o.value}
            onChange={() => onChange(o.value)}
          />
          <span style={{
            width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
            border: `2px solid ${value === o.value ? '#3182ce' : '#cbd5e0'}`,
            background: value === o.value ? '#3182ce' : 'transparent',
            display: 'inline-block',
          }} />
          <span style={{ color: o.value === 0 ? '#6b7a8d' : undefined }}>
            {o.value > 0 && <strong style={{ color: '#2d3748', marginRight: 3 }}>{o.value}</strong>}
            {o.value === 0 && <strong style={{ color: '#2d3748', marginRight: 3 }}>0</strong>}
            {o.label}
          </span>
        </label>
      ))}
    </div>
  )
}

export default function AuditCCalculator() {
  const [q1, setQ1] = useState<number | null>(null)
  const [q2, setQ2] = useState<number | null>(null)
  const [q3, setQ3] = useState<number | null>(null)

  const answered = q1 !== null && q2 !== null && q3 !== null
  const score = answered ? (q1 ?? 0) + (q2 ?? 0) + (q3 ?? 0) : null
  const band = score !== null ? getBand(score) : null
  const b = band ? BANDS[band] : null
  const maxScore = 12

  function reset() { setQ1(null); setQ2(null); setQ3(null) }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#2d3748', maxWidth: 640 }}>

      {/* Questions */}
      {[
        { q: 'How often do you have a drink containing alcohol?', opts: Q1_OPTIONS, val: q1, set: setQ1 },
        { q: 'How many units of alcohol do you drink on a typical day when you are drinking?', opts: Q2_OPTIONS, val: q2, set: setQ2 },
        { q: 'How often have you had 6 or more units (women) or 8 or more units (men) on a single occasion in the last year?', opts: Q3_OPTIONS, val: q3, set: setQ3 },
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: 18, padding: '14px 16px', background: '#f7fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 600, color: '#1a365d', marginBottom: 2 }}>
            <span style={{ background: '#3182ce', color: '#fff', borderRadius: 6, padding: '1px 7px', fontSize: 12, marginRight: 8 }}>Q{i + 1}</span>
            {item.q}
          </div>
          <Radio options={item.opts} value={item.val} onChange={item.set} />
        </div>
      ))}

      {/* Score bar */}
      {answered && score !== null && (
        <>
          <div style={{ margin: '20px 0 6px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#718096' }}>
            <span>Score: <strong style={{ fontSize: 16, color: '#1a365d' }}>{score}</strong> / {maxScore}</span>
            <span>Positive threshold: ≥5</span>
          </div>
          <div style={{ height: 10, borderRadius: 6, background: '#e2e8f0', overflow: 'hidden', marginBottom: 16 }}>
            <div style={{
              height: '100%',
              width: `${(score / maxScore) * 100}%`,
              background: score >= 5 ? '#e6a817' : '#48bb78',
              borderRadius: 6, transition: 'width 0.3s',
            }} />
          </div>

          {/* Result */}
          <div style={{
            padding: '14px 18px', borderRadius: 12,
            background: b?.bg, border: `1.5px solid ${b?.border}`,
            marginBottom: 16,
          }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: b?.color, marginBottom: 4 }}>{b?.label} — Score {score}</div>
            <div style={{ color: '#4a5568', fontSize: 13 }}>{b?.headline}</div>
            {band === 'positive' && (
              <div style={{ marginTop: 8, fontSize: 12, color: '#744210' }}>
                → Complete full AUDIT (10 questions) to guide intervention level
              </div>
            )}
          </div>

          {/* Next steps */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '12px 16px', marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#1a365d', marginBottom: 8, fontSize: 13 }}>Interpretation</div>
            {[
              { range: '0–4', label: 'AUDIT-C negative', action: 'Safe drinking — reinforce current behaviour', highlight: score !== null && score <= 4 },
              { range: '5–12', label: 'AUDIT-C positive', action: 'Increasing/higher risk — proceed to full AUDIT', highlight: score !== null && score >= 5 },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                padding: '6px 10px', marginBottom: 4, borderRadius: 7,
                background: r.highlight ? (score !== null && score >= 5 ? '#fffbeb' : '#f0fff4') : 'transparent',
                border: r.highlight ? `1px solid ${score !== null && score >= 5 ? '#fbd38d' : '#9ae6b4'}` : 'none',
              }}>
                <span style={{ minWidth: 40, fontWeight: 700, color: '#2d3748', fontSize: 13 }}>{r.range}</span>
                <span style={{ color: '#4a5568', fontSize: 13 }}><strong>{r.label}</strong> — {r.action}</span>
              </div>
            ))}
          </div>

          <button onClick={reset} style={{
            padding: '8px 20px', borderRadius: 8, border: '1.5px solid #cbd5e0',
            background: '#fff', cursor: 'pointer', fontSize: 13, color: '#4a5568', fontWeight: 600,
          }}>↺ Reset</button>
        </>
      )}
    </div>
  )
}
