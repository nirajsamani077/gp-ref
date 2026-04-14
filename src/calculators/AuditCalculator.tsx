import { useState } from 'react'

// Full AUDIT (Alcohol Use Disorders Identification Test) — 10 questions
// Q1–Q8: scored 0/1/2/3/4
// Q9–Q10: scored 0/2/4
// Max score: 40
// 0–7: Low risk | 8–15: Hazardous | 16–19: Harmful | 20+: Probable dependence

type Band = 'low' | 'hazardous' | 'harmful' | 'dependent'
const BANDS: Record<Band, { label: string; color: string; bg: string; border: string; headline: string; action: string }> = {
  low: {
    label: 'LOW RISK',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
    headline: 'Low-risk drinking',
    action: 'Reinforce benefits of low-risk drinking. No specific intervention required.',
  },
  hazardous: {
    label: 'HAZARDOUS DRINKING',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
    headline: 'Increasing risk — brief intervention',
    action: 'Offer brief advice (FRAMES). Advise <14 units/week spread over ≥3 days. Signpost to Drinkaware / local alcohol service. Review at next appointment.',
  },
  harmful: {
    label: 'HARMFUL DRINKING',
    color: '#c05621',
    bg: '#fff5eb',
    border: '#fbd38d',
    headline: 'Higher risk — extended brief intervention',
    action: 'Extended brief intervention / motivational interviewing (20–30 min, up to 4 sessions). Check LFTs, FBC, GGT. Prescribe thiamine if malnourished or at risk. Refer to specialist alcohol service. Review closely.',
  },
  dependent: {
    label: 'PROBABLE ALCOHOL DEPENDENCE',
    color: '#742a2a',
    bg: '#fff5f5',
    border: '#feb2b2',
    headline: 'Probable dependence — specialist assessment',
    action: 'Refer to specialist alcohol service. Withdrawal assessment (SADQ). Consider community detox (chlordiazepoxide) if suitable (<75y, SADQ <30, no seizure history). Complete LFTs, FBC, ELF. Prescribe thiamine. Notify DVLA if dependent.',
  },
}

const FREQ_OPTIONS = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Monthly or less' },
  { value: 2, label: '2–4 times per month' },
  { value: 3, label: '2–3 times per week' },
  { value: 4, label: '4+ times per week' },
]
const UNITS_OPTIONS = [
  { value: 0, label: '1–2 units' },
  { value: 1, label: '3–4 units' },
  { value: 2, label: '5–6 units' },
  { value: 3, label: '7–9 units' },
  { value: 4, label: '10+ units' },
]
const SOMETIMES_OPTIONS = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Less than monthly' },
  { value: 2, label: 'Monthly' },
  { value: 3, label: 'Weekly' },
  { value: 4, label: 'Daily or almost daily' },
]
const INJURY_OPTIONS = [
  { value: 0, label: 'No' },
  { value: 2, label: 'Yes, but not in the last year' },
  { value: 4, label: 'Yes, during the last year' },
]

const QUESTIONS: { text: string; opts: { value: number; label: string }[] }[] = [
  { text: 'How often do you have a drink containing alcohol?', opts: FREQ_OPTIONS },
  { text: 'How many units of alcohol do you drink on a typical day when you are drinking?', opts: UNITS_OPTIONS },
  { text: 'How often have you had 6 or more units (women) or 8 or more units (men) on a single occasion in the last year?', opts: SOMETIMES_OPTIONS },
  { text: 'How often during the last year have you found that you were not able to stop drinking once you had started?', opts: SOMETIMES_OPTIONS },
  { text: 'How often during the last year have you failed to do what was normally expected from you because of your drinking?', opts: SOMETIMES_OPTIONS },
  { text: 'How often during the last year have you needed an alcoholic drink in the morning to get yourself going after a heavy drinking session?', opts: SOMETIMES_OPTIONS },
  { text: 'How often during the last year have you had a feeling of guilt or remorse after drinking?', opts: SOMETIMES_OPTIONS },
  { text: 'How often during the last year have you been unable to remember what happened the night before because you had been drinking?', opts: SOMETIMES_OPTIONS },
  { text: 'Have you or somebody else been injured as a result of your drinking?', opts: INJURY_OPTIONS },
  { text: 'Has a relative, friend, doctor or other health worker been concerned about your drinking or suggested you cut down?', opts: INJURY_OPTIONS },
]

function getBand(score: number): Band {
  if (score >= 20) return 'dependent'
  if (score >= 16) return 'harmful'
  if (score >= 8) return 'hazardous'
  return 'low'
}

function Radio({ options, value, onChange }: {
  options: { value: number; label: string }[]
  value: number | null
  onChange: (v: number) => void
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 8px', marginTop: 6 }}>
      {options.map(o => (
        <label key={o.value} style={{
          display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
          padding: '5px 10px', borderRadius: 8,
          border: `1.5px solid ${value === o.value ? '#3182ce' : '#e2e8f0'}`,
          background: value === o.value ? '#ebf8ff' : '#fff',
          fontSize: 13, fontWeight: value === o.value ? 600 : 400,
          transition: 'all 0.15s',
        }}>
          <input type="radio" style={{ display: 'none' }} checked={value === o.value} onChange={() => onChange(o.value)} />
          <span style={{
            width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
            border: `2px solid ${value === o.value ? '#3182ce' : '#cbd5e0'}`,
            background: value === o.value ? '#3182ce' : 'transparent', display: 'inline-block',
          }} />
          <span>
            <strong style={{ color: '#2d3748', marginRight: 3 }}>{o.value}</strong>
            {o.label}
          </span>
        </label>
      ))}
    </div>
  )
}

export default function AuditCalculator() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null))

  const answered = answers.every(a => a !== null)
  const score = answered ? answers.reduce((s, a) => s + (a ?? 0), 0) : null
  const band = score !== null ? getBand(score) : null
  const b = band ? BANDS[band] : null
  const maxScore = 40
  const answeredCount = answers.filter(a => a !== null).length

  function set(i: number, v: number) {
    setAnswers(prev => { const next = [...prev]; next[i] = v; return next })
  }
  function reset() { setAnswers(Array(10).fill(null)) }

  const bandColors: [number, number, string][] = [[0, 7, '#48bb78'], [8, 15, '#e6a817'], [16, 19, '#ed8936'], [20, 40, '#e53e3e']]

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#2d3748', maxWidth: 660 }}>

      {/* Progress */}
      <div style={{ marginBottom: 14, fontSize: 12, color: '#718096' }}>
        Questions answered: <strong style={{ color: answeredCount === 10 ? '#276749' : '#1a365d' }}>{answeredCount}/10</strong>
      </div>

      {/* Questions */}
      {QUESTIONS.map((q, i) => (
        <div key={i} style={{
          marginBottom: 14, padding: '12px 14px',
          background: answers[i] !== null ? '#f7fafc' : '#fff',
          borderRadius: 10, border: `1px solid ${answers[i] !== null ? '#c3dafe' : '#e2e8f0'}`,
        }}>
          <div style={{ fontWeight: 600, color: '#1a365d', marginBottom: 2, fontSize: 13 }}>
            <span style={{
              background: answers[i] !== null ? '#3182ce' : '#a0aec0',
              color: '#fff', borderRadius: 6, padding: '1px 7px', fontSize: 11, marginRight: 8,
            }}>Q{i + 1}</span>
            {q.text}
          </div>
          <Radio options={q.opts} value={answers[i]} onChange={v => set(i, v)} />
        </div>
      ))}

      {/* Score */}
      {answered && score !== null && (
        <>
          <div style={{ margin: '20px 0 6px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#718096' }}>
            <span>Total score: <strong style={{ fontSize: 18, color: '#1a365d' }}>{score}</strong> / {maxScore}</span>
          </div>

          {/* Colour-banded bar */}
          <div style={{ height: 12, borderRadius: 6, display: 'flex', overflow: 'hidden', marginBottom: 6 }}>
            {bandColors.map(([lo, hi, col]) => {
              const width = ((hi - lo + 1) / 41) * 100
              return <div key={lo} style={{ width: `${width}%`, background: col, opacity: score >= lo && score <= hi ? 1 : 0.25 }} />
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#718096', marginBottom: 16 }}>
            <span>0–7 Low</span><span>8–15 Hazardous</span><span>16–19 Harmful</span><span>20+ Dependence</span>
          </div>

          {/* Result */}
          <div style={{
            padding: '14px 18px', borderRadius: 12,
            background: b?.bg, border: `1.5px solid ${b?.border}`, marginBottom: 16,
          }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: b?.color, marginBottom: 4 }}>{b?.label} — Score {score}</div>
            <div style={{ color: '#4a5568', fontSize: 13, marginBottom: 6 }}>{b?.headline}</div>
            <div style={{ color: '#4a5568', fontSize: 13, borderTop: '1px solid #e2e8f0', paddingTop: 8 }}>
              <strong>Action: </strong>{b?.action}
            </div>
          </div>

          {/* Scoring reference */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '12px 16px', marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#1a365d', marginBottom: 8, fontSize: 13 }}>Score interpretation</div>
            {([
              ['0–7', 'Low risk', 'Reinforce safe drinking; no intervention needed', score <= 7],
              ['8–15', 'Hazardous', 'Brief intervention (FRAMES, ≤10 min)', score >= 8 && score <= 15],
              ['16–19', 'Harmful', 'Extended brief intervention / motivational interviewing; consider referral', score >= 16 && score <= 19],
              ['20–40', 'Probable dependence', 'Withdrawal assessment (SADQ), specialist referral, community detox if suitable', score >= 20],
            ] as [string, string, string, boolean][]).map(([range, label, action, highlight]) => (
              <div key={range} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                padding: '6px 10px', marginBottom: 4, borderRadius: 7,
                background: highlight ? b?.bg : 'transparent',
                border: highlight ? `1px solid ${b?.border}` : 'none',
              }}>
                <span style={{ minWidth: 40, fontWeight: 700, color: '#2d3748', fontSize: 13 }}>{range}</span>
                <span style={{ color: '#4a5568', fontSize: 13 }}><strong>{label}</strong> — {action}</span>
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
