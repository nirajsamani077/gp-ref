import { useState } from 'react'

type AgeGroup = 'adult' | 'child'
type ResultLevel = 'low' | 'intermediate' | 'high' | null

interface Thresholds {
  low: number        // < low  → LOW
  intermediate: number  // < intermediate → INTERMEDIATE, else HIGH
  barMax: number     // scale for the range bar
}

const THRESHOLDS: Record<AgeGroup, Thresholds> = {
  adult: { low: 25,  intermediate: 50,  barMax: 100 },
  child: { low: 20,  intermediate: 35,  barMax: 70  },
}

const RESULT_CONFIG = {
  low: {
    label: 'LOW',
    headline: 'Eosinophilic inflammation unlikely',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
    actions: [
      'Asthma less likely — consider VCD, dysfunctional breathing, COPD, cardiac causes',
      'Does NOT exclude non-eosinophilic asthma — peak flow diary if symptoms persist',
      'Smoking suppresses FeNO — do not over-reassure symptomatic smokers on low FeNO alone',
      'If already on ICS: suggests good adherence, consider step-down review',
    ],
  },
  intermediate: {
    label: 'INTERMEDIATE',
    headline: 'Borderline — interpret with spirometry and symptoms',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
    actions: [
      'Combine with history, spirometry, and BDR before deciding',
      'Consider ICS trial if obstructive spirometry and symptomatic',
      'Repeat FeNO in 4–6 weeks if still uncertain',
      'Atopy and allergic rhinitis can elevate FeNO without asthma',
    ],
  },
  high: {
    label: 'HIGH',
    headline: 'Significant eosinophilic inflammation — supports asthma',
    color: '#742a2a',
    bg: '#fff5f5',
    border: '#feb2b2',
    actions: [
      'Start or optimise ICS — strong predictor of steroid responsiveness',
      'If already on ICS and still high: check adherence and inhaler technique first',
      'Very high (>150 ppb) with refractory asthma — consider biologics referral',
      'Treat co-morbid allergic rhinitis — contributes to elevated FeNO and poor asthma control',
    ],
  },
}

function getResult(value: number, ageGroup: AgeGroup): ResultLevel {
  const t = THRESHOLDS[ageGroup]
  if (value < t.low) return 'low'
  if (value < t.intermediate) return 'intermediate'
  return 'high'
}

export default function FenoCalculator() {
  const [raw, setRaw]           = useState('')
  const [ageGroup, setAgeGroup] = useState<AgeGroup>('adult')

  const value   = parseFloat(raw)
  const hasValue = raw !== '' && !isNaN(value) && value >= 0
  const result: ResultLevel = hasValue ? getResult(value, ageGroup) : null

  const t = THRESHOLDS[ageGroup]

  // Bar segment widths (%)
  const lowPct  = (t.low / t.barMax) * 100
  const intPct  = ((t.intermediate - t.low) / t.barMax) * 100
  const highPct = 100 - lowPct - intPct

  // Marker position (clamped 0–100%)
  const markerPct = hasValue ? Math.min((value / t.barMax) * 100, 99) : null

  const cfg = result ? RESULT_CONFIG[result] : null

  return (
    <div style={{ maxWidth: 560, width: '100%' }}>

      {/* Inputs */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 140px' }}>
          <label style={labelStyle}>FeNO value (ppb)</label>
          <input
            type="number"
            min={0}
            max={500}
            placeholder="e.g. 35"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ flex: '1 1 160px' }}>
          <label style={labelStyle}>Age group</label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
            style={inputStyle}
          >
            <option value="adult">Adult (16+)</option>
            <option value="child">Child (under 16)</option>
          </select>
        </div>
      </div>

      {/* Result card */}
      {cfg && result && (
        <div
          style={{
            backgroundColor: cfg.bg,
            border: `1px solid ${cfg.border}`,
            borderLeft: `5px solid ${cfg.color}`,
            borderRadius: 10,
            padding: '18px 20px',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: cfg.color,
                backgroundColor: cfg.border,
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              {cfg.label}
            </span>
            <span style={{ fontSize: 13, color: '#4a5568' }}>
              {value} ppb · {ageGroup === 'adult' ? 'Adult' : 'Child'}
            </span>
          </div>

          <p style={{ fontSize: 15, fontWeight: 600, color: cfg.color, margin: '0 0 14px' }}>
            {cfg.headline}
          </p>

          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {cfg.actions.map((action, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#2d3748', lineHeight: 1.5 }}>
                <span style={{ color: cfg.color, flexShrink: 0, marginTop: 1 }}>›</span>
                {action}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reference range bar */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8a9bb0', marginBottom: 8 }}>
          Reference range — {ageGroup === 'adult' ? 'Adult' : 'Child'}
        </p>

        <div style={{ position: 'relative', height: 28, borderRadius: 6, overflow: 'visible', display: 'flex' }}>
          {/* Green segment */}
          <div style={{
            width: `${lowPct}%`,
            background: '#68d391',
            borderRadius: '6px 0 0 6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={barLabelStyle}>Low</span>
          </div>
          {/* Amber segment */}
          <div style={{
            width: `${intPct}%`,
            background: '#f6ad55',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={barLabelStyle}>Int.</span>
          </div>
          {/* Red segment */}
          <div style={{
            width: `${highPct}%`,
            background: '#fc8181',
            borderRadius: '0 6px 6px 0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={barLabelStyle}>High</span>
          </div>

          {/* Marker */}
          {markerPct !== null && (
            <div
              style={{
                position: 'absolute',
                left: `${markerPct}%`,
                top: -6,
                bottom: -6,
                width: 3,
                backgroundColor: '#1a365d',
                borderRadius: 2,
                transform: 'translateX(-50%)',
                boxShadow: '0 0 0 2px #fff',
              }}
            />
          )}
        </div>

        {/* Threshold labels */}
        <div style={{ position: 'relative', height: 18, marginTop: 4, fontSize: 11, color: '#8a9bb0' }}>
          <span style={{ position: 'absolute', left: 0 }}>0</span>
          <span style={{ position: 'absolute', left: `${lowPct}%`, transform: 'translateX(-50%)' }}>
            {t.low}
          </span>
          <span style={{ position: 'absolute', left: `${lowPct + intPct}%`, transform: 'translateX(-50%)' }}>
            {t.intermediate}
          </span>
          <span style={{ position: 'absolute', right: 0 }}>{t.barMax}+</span>
        </div>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: '#4a5568',
  marginBottom: 6,
  letterSpacing: '0.03em',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  fontSize: 15,
  border: '1px solid #dce6f0',
  borderRadius: 7,
  outline: 'none',
  backgroundColor: '#fff',
  color: '#1a365d',
  appearance: 'none',
  WebkitAppearance: 'none',
}

const barLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: '#fff',
  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
  pointerEvents: 'none',
}
