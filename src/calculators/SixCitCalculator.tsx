import { useState } from 'react'

// ── Scoring reference ────────────────────────────────────────────────────────
// Q1  What year is it?              Correct=0  Incorrect=4
// Q2  What month is it?             Correct=0  Incorrect=3
// [Administer address: John Smith, 42 High Street, Bedford]
// Q3  About what time is it?        Correct=0  Incorrect=3
// Q4  Count backwards 20→1         Correct=0  1 error=2  >1 error=4
// Q5  Months in reverse             Correct=0  1 error=2  >1 error=4
// Q6  Recall address phrase         0 wrong=0  1=2  2=4  3=6  4=8  5=10
// Total max = 28
// 0–7   Normal, no referral required
// 8–9   Mild impairment, probably refer
// 10–28 Significant impairment, refer

type Band = 'normal' | 'mild' | 'significant'

const BAND_CONFIG: Record<Band, { label: string; headline: string; color: string; bg: string; border: string }> = {
  normal: {
    label: 'NORMAL',
    headline: 'No significant cognitive impairment detected',
    color: '#276749',
    bg: '#f0fff4',
    border: '#9ae6b4',
  },
  mild: {
    label: 'MILD IMPAIRMENT',
    headline: 'Mild cognitive impairment — further assessment recommended',
    color: '#744210',
    bg: '#fffbeb',
    border: '#fbd38d',
  },
  significant: {
    label: 'SIGNIFICANT IMPAIRMENT',
    headline: 'Significant cognitive impairment — referral indicated',
    color: '#742a2a',
    bg: '#fff5f5',
    border: '#feb2b2',
  },
}

function getBand(score: number): Band {
  if (score <= 7) return 'normal'
  if (score <= 9) return 'mild'
  return 'significant'
}

// ── Sub-types for each question answer ──────────────────────────────────────
type BinaryAnswer  = 0 | 4 | null  // Q1: 0=correct, 4=wrong
type TernaryAnswer = 0 | 2 | 4 | null  // Q4/Q5: 0/1 error/2+ errors
type Q2Answer = 0 | 3 | null
type Q3Answer = 0 | 3 | null
type Q6Answer = 0 | 2 | 4 | 6 | 8 | 10 | null

interface Answers {
  q1: BinaryAnswer
  q2: Q2Answer
  q3: Q3Answer
  q4: TernaryAnswer
  q5: TernaryAnswer
  q6: Q6Answer
}

const INITIAL: Answers = { q1: null, q2: null, q3: null, q4: null, q5: null, q6: null }

function computeScore(a: Answers): number | null {
  const vals = [a.q1, a.q2, a.q3, a.q4, a.q5, a.q6]
  if (vals.some(v => v === null)) return null
  return (vals as number[]).reduce((s, v) => s + v, 0)
}

// ─────────────────────────────────────────────────────────────────────────────

export default function SixCitCalculator() {
  const [answers, setAnswers] = useState<Answers>(INITIAL)

  function set<K extends keyof Answers>(key: K, val: Answers[K]) {
    setAnswers(prev => ({ ...prev, [key]: val }))
  }

  const score = computeScore(answers)
  const band  = score !== null ? getBand(score) : null
  const cfg   = band ? BAND_CONFIG[band] : null

  // Progress — how many questions answered
  const answered = Object.values(answers).filter(v => v !== null).length

  return (
    <div style={{ maxWidth: 580, width: '100%' }}>

      {/* ── Address phrase prompt ── */}
      <div style={{
        backgroundColor: '#eef4fb',
        border: '1px solid #c3d9f0',
        borderLeft: '4px solid #2b6cb0',
        borderRadius: 8,
        padding: '12px 16px',
        marginBottom: 24,
        fontSize: 13,
        color: '#2a4365',
        lineHeight: 1.6,
      }}>
        <p style={{ fontWeight: 700, margin: '0 0 4px', textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.06em' }}>
          Address phrase to administer
        </p>
        <p style={{ margin: 0 }}>
          Tell the patient: <em>"I am going to give you an address to remember. After I have finished asking you some questions, I will ask you to repeat it back to me."</em>
        </p>
        <p style={{ margin: '8px 0 0', fontWeight: 700, fontSize: 14, letterSpacing: '0.02em' }}>
          John Smith · 42 High Street · Bedford
        </p>
      </div>

      {/* ── Questions ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>

        {/* Q1 */}
        <QuestionCard
          number={1}
          text="What year is it?"
          answered={answers.q1 !== null}
          options={[
            { label: 'Correct', value: 0, color: '#276749' },
            { label: 'Incorrect', value: 4, color: '#742a2a' },
          ]}
          selected={answers.q1}
          onSelect={(v) => set('q1', v as BinaryAnswer)}
          scoreLabel={answers.q1 !== null ? `+${answers.q1}` : undefined}
        />

        {/* Q2 */}
        <QuestionCard
          number={2}
          text="What month is it?"
          answered={answers.q2 !== null}
          options={[
            { label: 'Correct', value: 0, color: '#276749' },
            { label: 'Incorrect', value: 3, color: '#742a2a' },
          ]}
          selected={answers.q2}
          onSelect={(v) => set('q2', v as Q2Answer)}
          scoreLabel={answers.q2 !== null ? `+${answers.q2}` : undefined}
        />

        {/* Q3 */}
        <QuestionCard
          number={3}
          text="About what time is it? (within 1 hour counts as correct)"
          answered={answers.q3 !== null}
          options={[
            { label: 'Correct', value: 0, color: '#276749' },
            { label: 'Incorrect', value: 3, color: '#742a2a' },
          ]}
          selected={answers.q3}
          onSelect={(v) => set('q3', v as Q3Answer)}
          scoreLabel={answers.q3 !== null ? `+${answers.q3}` : undefined}
        />

        {/* Q4 */}
        <QuestionCard
          number={4}
          text="Count backwards from 20 to 1"
          answered={answers.q4 !== null}
          options={[
            { label: 'No errors', value: 0, color: '#276749' },
            { label: '1 error', value: 2, color: '#744210' },
            { label: '2+ errors', value: 4, color: '#742a2a' },
          ]}
          selected={answers.q4}
          onSelect={(v) => set('q4', v as TernaryAnswer)}
          scoreLabel={answers.q4 !== null ? `+${answers.q4}` : undefined}
        />

        {/* Q5 */}
        <QuestionCard
          number={5}
          text="Say the months of the year in reverse (starting from December)"
          answered={answers.q5 !== null}
          options={[
            { label: 'No errors', value: 0, color: '#276749' },
            { label: '1 error', value: 2, color: '#744210' },
            { label: '2+ errors', value: 4, color: '#742a2a' },
          ]}
          selected={answers.q5}
          onSelect={(v) => set('q5', v as TernaryAnswer)}
          scoreLabel={answers.q5 !== null ? `+${answers.q5}` : undefined}
        />

        {/* Q6 */}
        <QuestionCard
          number={6}
          text="Repeat the address phrase — John Smith, 42 High Street, Bedford (5 components)"
          answered={answers.q6 !== null}
          options={[
            { label: '0 errors', value: 0,  color: '#276749' },
            { label: '1 error',  value: 2,  color: '#4a7c59' },
            { label: '2 errors', value: 4,  color: '#744210' },
            { label: '3 errors', value: 6,  color: '#9c4221' },
            { label: '4 errors', value: 8,  color: '#822727' },
            { label: 'All wrong', value: 10, color: '#742a2a' },
          ]}
          selected={answers.q6}
          onSelect={(v) => set('q6', v as Q6Answer)}
          scoreLabel={answers.q6 !== null ? `+${answers.q6}` : undefined}
        />

      </div>

      {/* ── Progress bar (when not all answered) ── */}
      {score === null && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#8a9bb0', marginBottom: 4 }}>
            <span>{answered} of 6 questions answered</span>
          </div>
          <div style={{ height: 6, backgroundColor: '#e8edf2', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${(answered / 6) * 100}%`,
              backgroundColor: '#2b6cb0',
              borderRadius: 3,
              transition: 'width 0.3s',
            }} />
          </div>
        </div>
      )}

      {/* ── Result card ── */}
      {cfg && score !== null && (
        <div style={{
          backgroundColor: cfg.bg,
          border: `1px solid ${cfg.border}`,
          borderLeft: `5px solid ${cfg.color}`,
          borderRadius: 10,
          padding: '18px 20px',
          marginBottom: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              color: cfg.color, backgroundColor: cfg.border,
              padding: '2px 8px', borderRadius: 4,
            }}>
              {cfg.label}
            </span>
            <span style={{
              fontSize: 22, fontWeight: 700, color: cfg.color,
            }}>
              {score}
            </span>
            <span style={{ fontSize: 13, color: '#4a5568' }}>/ 28</span>
          </div>

          <p style={{ fontSize: 15, fontWeight: 600, color: cfg.color, margin: '0 0 12px' }}>
            {cfg.headline}
          </p>

          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {band === 'normal' && [
              'Score 0–7: No significant cognitive impairment on 6-CIT.',
              'No referral required based on this score alone.',
              'Consider repeating if clinical concern remains or patient/family reports decline.',
              'Document result and contextual factors in notes.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'mild' && [
              'Score 8–9: Mild cognitive impairment — borderline result.',
              'Consider referring to memory clinic or specialist cognitive assessment.',
              'Exclude reversible causes: thyroid dysfunction, B12/folate deficiency, depression, medication effects.',
              'Safety-net and review in 3–6 months. Involve carers if appropriate.',
              'Document result; consider GP cognitive assessment (MMSE/MoCA if available).',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}

            {band === 'significant' && [
              'Score 10–28: Significant cognitive impairment — referral indicated.',
              'Refer to memory clinic / old age psychiatry for further assessment.',
              'Exclude reversible causes: thyroid, B12/folate, depression, medications, infection.',
              'Assess driving safety — consider DVLA notification if patient is driving.',
              'Safeguarding and capacity considerations — involve family/carers early.',
              'Ensure safety in the home — occupational therapy referral if needed.',
            ].map((t, i) => <ActionItem key={i} color={cfg.color} text={t} />)}
          </ul>
        </div>
      )}

      {/* ── Score bar ── */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8a9bb0', marginBottom: 8 }}>
          Score range
        </p>

        <div style={{ position: 'relative', height: 28, display: 'flex', borderRadius: 6, overflow: 'visible' }}>
          {/* Green 0–7 */}
          <div style={{
            width: `${(8 / 28) * 100}%`,
            background: '#68d391',
            borderRadius: '6px 0 0 6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={barLabelStyle}>Normal</span>
          </div>
          {/* Amber 8–9 */}
          <div style={{
            width: `${(2 / 28) * 100}%`,
            background: '#f6ad55',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* too narrow for label */}
          </div>
          {/* Red 10–28 */}
          <div style={{
            flex: 1,
            background: '#fc8181',
            borderRadius: '0 6px 6px 0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={barLabelStyle}>Significant</span>
          </div>

          {/* Marker */}
          {score !== null && (
            <div style={{
              position: 'absolute',
              left: `${Math.min((score / 28) * 100, 99)}%`,
              top: -6, bottom: -6,
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
          <span style={{ position: 'absolute', left: `${(8 / 28) * 100}%`, transform: 'translateX(-50%)' }}>8</span>
          <span style={{ position: 'absolute', left: `${(10 / 28) * 100}%`, transform: 'translateX(-50%)' }}>10</span>
          <span style={{ position: 'absolute', right: 0 }}>28</span>
        </div>
        {/* Band labels */}
        <div style={{ position: 'relative', height: 14, fontSize: 10, color: '#8a9bb0', marginTop: 2 }}>
          <span style={{ position: 'absolute', left: 0 }}>Normal</span>
          <span style={{ position: 'absolute', left: `${(8 / 28) * 100}%`, transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>Mild</span>
          <span style={{ position: 'absolute', right: 0 }}>Significant</span>
        </div>
      </div>

      {/* Reset */}
      {answered > 0 && (
        <button
          onClick={() => setAnswers(INITIAL)}
          style={{
            marginTop: 24,
            padding: '8px 18px',
            fontSize: 13,
            fontWeight: 600,
            color: '#4a5568',
            backgroundColor: '#f7fafc',
            border: '1px solid #dce6f0',
            borderRadius: 7,
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      )}
    </div>
  )
}

// ── Question card ─────────────────────────────────────────────────────────────
interface Option {
  label: string
  value: number
  color: string
}

function QuestionCard({
  number,
  text,
  answered,
  options,
  selected,
  onSelect,
  scoreLabel,
}: {
  number: number
  text: string
  answered: boolean
  options: Option[]
  selected: number | null
  onSelect: (v: number) => void
  scoreLabel?: string
}) {
  return (
    <div style={{
      backgroundColor: answered ? '#f7fafc' : '#fff',
      border: `1px solid ${answered ? '#c3d9f0' : '#dce6f0'}`,
      borderLeft: `4px solid ${answered ? '#2b6cb0' : '#dce6f0'}`,
      borderRadius: 8,
      padding: '14px 16px',
      transition: 'background 0.15s, border-color 0.15s',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <span style={{
            flexShrink: 0,
            width: 22, height: 22,
            borderRadius: '50%',
            backgroundColor: answered ? '#2b6cb0' : '#e8edf2',
            color: answered ? '#fff' : '#8a9bb0',
            fontSize: 12,
            fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: 1,
          }}>
            {number}
          </span>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#1a202c', lineHeight: 1.4 }}>
            {text}
          </span>
        </div>
        {scoreLabel !== undefined && (
          <span style={{
            flexShrink: 0,
            fontSize: 13,
            fontWeight: 700,
            color: selected === 0 ? '#276749' : '#742a2a',
            backgroundColor: selected === 0 ? '#c6f6d5' : '#fed7d7',
            padding: '2px 8px',
            borderRadius: 4,
          }}>
            {scoreLabel}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {options.map(opt => {
          const isSelected = selected === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              style={{
                padding: '6px 14px',
                fontSize: 13,
                fontWeight: 600,
                borderRadius: 6,
                cursor: 'pointer',
                border: `1.5px solid ${isSelected ? opt.color : '#dce6f0'}`,
                backgroundColor: isSelected ? opt.color : '#fff',
                color: isSelected ? '#fff' : '#4a5568',
                transition: 'all 0.12s',
              }}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
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

const barLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: '#fff',
  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
  pointerEvents: 'none',
}
