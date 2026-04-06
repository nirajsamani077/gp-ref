import { useState } from 'react'

// ── FIB-4 Formula ─────────────────────────────────────────────────────────────
// FIB-4 = (Age × AST) / (Platelets × √ALT)
// Age: years | AST: U/L | Platelets: ×10⁹/L | ALT: U/L
//
// Cutoffs (NAFLD / general hepatology):
//   < 1.30  → Low risk (rule out advanced fibrosis, F0–F1)
//   1.30–2.67 → Indeterminate — needs further testing (ELF, fibroscan)
//   ≥ 2.67  → High risk (rule in advanced fibrosis, F3–F4)
//
// Note: FIB-4 is less reliable in patients >75 yrs (higher false positives)
//       and inaccurate with excess alcohol (use ELF instead)

type Band = 'low' | 'indeterminate' | 'high'

const BANDS: Record<Band, { label: string; color: string; bg: string; border: string; headline: string }> = {
  low: {
    label: 'LOW RISK',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
    headline: 'Low risk of advanced fibrosis (F0–F1)',
  },
  indeterminate: {
    label: 'INDETERMINATE',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
    headline: 'Indeterminate — further testing required',
  },
  high: {
    label: 'HIGH RISK',
    color: '#742a2a',
    bg: '#fff5f5',
    border: '#feb2b2',
    headline: 'High risk of advanced fibrosis (F3–F4)',
  },
}

function getBand(score: number): Band {
  if (score < 1.30) return 'low'
  if (score < 2.67) return 'indeterminate'
  return 'high'
}

function computeFib4(age: number, ast: number, platelets: number, alt: number): number | null {
  if (!age || !ast || !platelets || !alt || alt <= 0 || platelets <= 0) return null
  return (age * ast) / (platelets * Math.sqrt(alt))
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Fib4Calculator() {
  const [age, setAge]             = useState('')
  const [ast, setAst]             = useState('')
  const [platelets, setPlatelets] = useState('')
  const [alt, setAlt]             = useState('')

  const ageN  = parseFloat(age)
  const astN  = parseFloat(ast)
  const pltN  = parseFloat(platelets)
  const altN  = parseFloat(alt)

  const allFilled = age && ast && platelets && alt
  const score     = allFilled ? computeFib4(ageN, astN, pltN, altN) : null
  const band      = score !== null && !isNaN(score) ? getBand(score) : null
  const cfg       = band ? BANDS[band] : null

  const elderlyWarning = ageN > 75

  function reset() {
    setAge(''); setAst(''); setPlatelets(''); setAlt('')
  }

  return (
    <div style={{ maxWidth: 540, width: '100%' }}>

      {/* ── Formula callout ── */}
      <div style={{
        backgroundColor: '#eef4fb',
        border: '1px solid #c3d9f0',
        borderLeft: '4px solid #2b6cb0',
        borderRadius: 8,
        padding: '12px 16px',
        marginBottom: 24,
        fontSize: 13,
        color: '#2a4365',
      }}>
        <p style={{ fontWeight: 700, margin: '0 0 6px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          FIB-4 Formula
        </p>
        <p style={{ margin: 0, fontFamily: 'monospace', fontSize: 15, fontWeight: 600, letterSpacing: '0.02em' }}>
          (Age × AST) ÷ (Platelets × √ALT)
        </p>
        <p style={{ margin: '6px 0 0', fontSize: 12, color: '#4a6fa5' }}>
          Platelets in ×10⁹/L · AST and ALT in U/L · Age in years
        </p>
      </div>

      {/* ── Inputs ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
        <InputField label="Age" unit="years" value={age} onChange={setAge} placeholder="e.g. 52" min={18} max={100} />
        <InputField label="AST" unit="U/L" value={ast} onChange={setAst} placeholder="e.g. 45" min={1} max={2000} />
        <InputField label="Platelets" unit="×10⁹/L" value={platelets} onChange={setPlatelets} placeholder="e.g. 220" min={1} max={1000} />
        <InputField label="ALT" unit="U/L" value={alt} onChange={setAlt} placeholder="e.g. 60" min={1} max={2000} />
      </div>

      {/* ── Elderly warning ── */}
      {elderlyWarning && (
        <div style={{
          backgroundColor: '#fffbeb', border: '1px solid #fbd38d',
          borderLeft: '4px solid #d97706', borderRadius: 8,
          padding: '10px 14px', marginBottom: 16, fontSize: 13, color: '#744210',
        }}>
          ⚠️ <strong>Age &gt;75 years:</strong> FIB-4 has higher false-positive rates in older patients. Interpret with caution — consider ELF test or fibroscan before referral.
        </div>
      )}

      {/* ── Result ── */}
      {cfg && score !== null && (
        <div style={{
          backgroundColor: cfg.bg,
          border: `1px solid ${cfg.border}`,
          borderLeft: `5px solid ${cfg.color}`,
          borderRadius: 10,
          padding: '18px 20px',
          marginBottom: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              color: cfg.color, backgroundColor: cfg.border,
              padding: '2px 8px', borderRadius: 4,
            }}>
              {cfg.label}
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: cfg.color, fontVariantNumeric: 'tabular-nums' }}>
              {score.toFixed(2)}
            </span>
          </div>

          <p style={{ fontSize: 15, fontWeight: 600, color: cfg.color, margin: '0 0 12px' }}>
            {cfg.headline}
          </p>

          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {band === 'low' && [
              'FIB-4 <1.30: Low probability of advanced hepatic fibrosis (NPV ~90%).',
              'Manage in primary care — no urgent referral needed on FIB-4 alone.',
              'For NAFLD/MASLD: lifestyle advice (10% weight loss target), annual LFTs, HbA1c, lipids, BP.',
              'If alcohol-related: use ELF test instead (FIB-4 less reliable with excess alcohol).',
              'Repeat FIB-4 in 1–3 years or sooner if clinical concern increases.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'indeterminate' && [
              'FIB-4 1.30–2.67: Cannot rule in or rule out advanced fibrosis.',
              'Order ELF (Enhanced Liver Fibrosis) test — send in gold top tube.',
              'ELF ≥9.8 → refer to gastroenterology for fibroscan.',
              'ELF <9.8 → manage in primary care with annual review.',
              'Avoid FIB-4 alone for referral decisions in this range.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'high' && [
              'FIB-4 ≥2.67: High probability of advanced fibrosis (F3–F4) (PPV ~65%).',
              'Refer to gastroenterology — fibroscan/liver biopsy to stage fibrosis.',
              'Do not delay referral — cirrhosis screening and management needed.',
              'Optimise metabolic risk factors (weight, diabetes, lipids, alcohol) while awaiting review.',
              'Check AFP and USS liver to exclude hepatocellular carcinoma if cirrhosis confirmed.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}
          </ul>
        </div>
      )}

      {/* ── Score bar ── */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8a9bb0', marginBottom: 8 }}>
          Risk thresholds
        </p>

        {/* Bar — capped at 4.0 for display */}
        <div style={{ position: 'relative', height: 28, display: 'flex', borderRadius: 6, overflow: 'hidden' }}>
          {/* Green: 0–1.30 (32.5%) */}
          <div style={{ width: '32.5%', background: '#68d391', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>Low</span>
          </div>
          {/* Amber: 1.30–2.67 (34.25%) */}
          <div style={{ width: '34.25%', background: '#f6ad55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>Indeterminate</span>
          </div>
          {/* Red: 2.67–4.0 (33.25%) */}
          <div style={{ flex: 1, background: '#fc8181', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={barLabel}>High</span>
          </div>

          {/* Score marker (capped at 4.0 for display) */}
          {score !== null && !isNaN(score) && (
            <div style={{
              position: 'absolute',
              left: `${Math.min((score / 4.0) * 100, 98)}%`,
              top: -4, bottom: -4,
              width: 3,
              backgroundColor: '#1a365d',
              borderRadius: 2,
              transform: 'translateX(-50%)',
              boxShadow: '0 0 0 2px #fff',
            }} />
          )}
        </div>

        {/* Axis labels */}
        <div style={{ position: 'relative', height: 18, marginTop: 4, fontSize: 11, color: '#8a9bb0' }}>
          <span style={{ position: 'absolute', left: 0 }}>0</span>
          <span style={{ position: 'absolute', left: '32.5%', transform: 'translateX(-50%)' }}>1.30</span>
          <span style={{ position: 'absolute', left: '66.75%', transform: 'translateX(-50%)' }}>2.67</span>
          <span style={{ position: 'absolute', right: 0 }}>≥4.0</span>
        </div>
      </div>

      {/* ── Cutoff reference table ── */}
      <div style={{
        border: '1px solid #dde6f0', borderRadius: 8, overflow: 'hidden', marginBottom: 24, fontSize: 13,
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#dbeafe' }}>
              <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, color: '#1e3a5f', fontSize: 12, borderBottom: '2px solid #93c5fd' }}>FIB-4 Score</th>
              <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, color: '#1e3a5f', fontSize: 12, borderBottom: '2px solid #93c5fd' }}>Risk</th>
              <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, color: '#1e3a5f', fontSize: 12, borderBottom: '2px solid #93c5fd' }}>Next step</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['< 1.30', 'Low — F0–F1', 'Manage in primary care; repeat in 1–3 yrs'],
              ['1.30 – 2.67', 'Indeterminate', 'ELF test; refer if ELF ≥9.8'],
              ['≥ 2.67', 'High — F3–F4', 'Refer gastroenterology (fibroscan/biopsy)'],
            ].map(([score, risk, action], i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f4f8fc' }}>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', fontWeight: 700, color: ['#276749','#744210','#742a2a'][i] }}>{score}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: '#374151' }}>{risk}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8edf2', color: '#374151' }}>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Reset ── */}
      {(age || ast || platelets || alt) && (
        <button
          onClick={reset}
          style={{
            padding: '8px 18px', fontSize: 13, fontWeight: 600,
            color: '#4a5568', backgroundColor: '#f7fafc',
            border: '1px solid #dce6f0', borderRadius: 7, cursor: 'pointer',
          }}
        >
          Reset
        </button>
      )}
    </div>
  )
}

// ── Input field ───────────────────────────────────────────────────────────────
function InputField({
  label, unit, value, onChange, placeholder, min, max,
}: {
  label: string; unit: string; value: string
  onChange: (v: string) => void; placeholder: string; min?: number; max?: number
}) {
  const filled = value !== ''
  return (
    <div>
      <label style={{ fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 4 }}>
        {label} <span style={{ color: '#6b7280', fontWeight: 400 }}>({unit})</span>
      </label>
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        style={{
          width: '100%',
          padding: '9px 12px',
          fontSize: 16,
          fontWeight: 600,
          border: `1.5px solid ${filled ? '#3b82f6' : '#dde6f0'}`,
          borderRadius: 8,
          outline: 'none',
          backgroundColor: filled ? '#eff6ff' : '#f8fafc',
          color: '#1e3a5f',
          boxSizing: 'border-box',
          transition: 'border-color 0.15s, background 0.15s',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)' }}
        onBlur={e => { e.currentTarget.style.borderColor = filled ? '#3b82f6' : '#dde6f0'; e.currentTarget.style.boxShadow = 'none' }}
      />
    </div>
  )
}

// ── Action list item ──────────────────────────────────────────────────────────
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
