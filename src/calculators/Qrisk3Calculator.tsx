import { useState, useMemo } from 'react'

// ─── QRISK3-2017 Algorithm ────────────────────────────────────────────────────
// Coefficients from QRISK3-2017ver9.R (CRAN QRISK3 package, LGPL-3.0)
// Reference: Hippisley-Cox J et al. BMJ 2017;357:j2099
// ─────────────────────────────────────────────────────────────────────────────

function qrisk3Female(
  age: number, eth: number, smk: number,
  sbp: number, sbps5: number, rati: number, bmi: number, town: number,
  b_AF: boolean, b_aap: boolean, b_cort: boolean, b_mig: boolean,
  b_ra: boolean, b_ren: boolean, b_semi: boolean, b_sle: boolean,
  b_htn: boolean, b_t1: boolean, b_t2: boolean, b_fhx: boolean
): number {
  const d = age / 10, bm = bmi / 10
  const a1 = d ** -2 - 0.053274843841791
  const a2 = d       - 4.332503318786621
  const b1 = bm ** -2 - 0.154946178197861
  const b2 = bm ** -2 * Math.log(bm) - 0.144462317228317
  const rc  = rati  - 3.476326465606690
  const sc  = sbp   - 123.130012512207030
  const s5c = sbps5 - 9.002537727355957
  const tc  = town  - 0.392308831214905

  const eArr = [0,0,0.28040314332995425,0.56298994142075398,0.29590000851116516,
    0.07278537987798255,-0.17072135508857317,-0.39371043314874971,-0.32632495283530272,-0.17127056883241784]
  const sArr = [0,0,0.13386833786546262,0.56200858012438537,0.66749593377502547,0.84948177644830847]

  let a = (eArr[eth] ?? 0) + (sArr[smk] ?? 0)
  a += a1 * -8.1388109247726188 + a2 * 0.79733376689699098
  a += b1 *  0.29236092275460052 + b2 * -4.1513300213837665
  a += rc  *  0.15338035820802554 + sc  *  0.013131488407103424
  a += s5c *  0.0078894541014586095 + tc *  0.077223790588590108

  if (b_AF)   a += 1.5923354969269663
  if (b_aap)  a += 0.25237642070115557
  if (b_cort) a += 0.59520725304601851
  if (b_mig)  a += 0.30126726087034500
  if (b_ra)   a += 0.21364803435181942
  if (b_ren)  a += 0.65194569493845833
  if (b_semi) a += 0.12555308058820178
  if (b_sle)  a += 0.75880938654267693
  if (b_htn)  a += 0.50931593683423004
  if (b_t1)   a += 1.7267977510537347
  if (b_t2)   a += 1.0688773244615468
  if (b_fhx)  a += 0.45445319020896213

  if (smk===2){a+=a1*-4.7057161785851891+a2*-0.0755892446431930}
  if (smk===3){a+=a1*-2.7430383403573337+a2*-0.1195119287486707}
  if (smk===4){a+=a1*-0.8660808882939218+a2*-0.1036630639757192}
  if (smk===5){a+=a1* 0.9024156236971065+a2*-0.1399185359171839}
  if (b_AF)  {a+=a1*19.9380348895465610+a2*-0.0761826510111625}
  if (b_cort){a+=a1*-0.9840804523593628+a2*-0.1200536494674247}
  if (b_mig) {a+=a1* 1.7634979587872999+a2*-0.0655869178986999}
  if (b_ren) {a+=a1*-3.5874047731694114+a2*-0.2268887308644251}
  if (b_sle) {a+=a1*19.6903037386382920+a2* 0.0773479496790163}
  if (b_htn) {a+=a1*11.8728097339218120+a2* 0.0009685782358817}
  if (b_t1)  {a+=a1*-1.2444332714320747+a2*-0.2872406462448895}
  if (b_t2)  {a+=a1* 6.8652342000009599+a2*-0.0971122525906955}
  if (b_fhx) {a+=a1* 0.9946780794043513+a2*-0.0768850516984230}

  a += a1*b1* 23.8026234121417420 + a1*b2*-71.1849476920870070
  a += a2*b1*  0.5236995893366443 + a2*b2*  0.0457441901223238
  a += a1*sc*  0.0341318423386155 + a2*sc* -0.0015082501423272
  a += a1*tc* -1.0301180802035639 + a2*tc* -0.0315934146749623

  return 100 * (1 - 0.988876402378082 ** Math.exp(a))
}

function qrisk3Male(
  age: number, eth: number, smk: number,
  sbp: number, sbps5: number, rati: number, bmi: number, town: number,
  b_AF: boolean, b_aap: boolean, b_cort: boolean, b_mig: boolean,
  b_ra: boolean, b_ren: boolean, b_semi: boolean, b_sle: boolean,
  b_htn: boolean, b_t1: boolean, b_t2: boolean, b_fhx: boolean,
  b_imp: boolean
): number {
  const d = age / 10, bm = bmi / 10
  const a1 = d ** -1 - 0.234766781330109
  const a2 = d **  3 - 77.284080505371094
  const b1 = bm ** -2 - 0.149176135659218
  const b2 = bm ** -2 * Math.log(bm) - 0.141913309693336
  const rc  = rati  - 4.300998687744141
  const sc  = sbp   - 128.571578979492190
  const s5c = sbps5 - 8.756621360778809
  const tc  = town  - 0.526304900646210

  const eArr = [0,0,0.27719248760308279,0.47446360714931268,0.52961729919689371,
    0.03510015918629902,-0.35807899669327919,-0.40056485232165140,-0.41522792889830173,-0.26321348134749967]
  const sArr = [0,0,0.19128222863388983,0.55241588192645552,0.63835053027506072,0.78983819881858019]

  let a = (eArr[eth] ?? 0) + (sArr[smk] ?? 0)
  a += a1 * -17.8397816660055750 + a2 *  0.0022964880605765492
  a += b1 *   2.4562776660536358 + b2 * -8.3011122314711354
  a += rc  *   0.17340196856327111 + sc *  0.012910126542553305
  a += s5c *   0.010251914291290456 + tc *  0.033268201277287295

  if (b_AF)   a += 0.88209236928054657
  if (b_aap)  a += 0.13046879855173513
  if (b_cort) a += 0.45485399750445543
  if (b_imp)  a += 0.22251859086705383
  if (b_mig)  a += 0.25584178074159913
  if (b_ra)   a += 0.20970658013956567
  if (b_ren)  a += 0.71853261288274384
  if (b_semi) a += 0.12133039882047164
  if (b_sle)  a += 0.44015721744575220
  if (b_htn)  a += 0.51659871082695474
  if (b_t1)   a += 1.2343425521675175
  if (b_t2)   a += 0.85942071430932221
  if (b_fhx)  a += 0.54055469009390156

  if (smk===2){a+=a1*-0.2101113393351635+a2*-0.0004985487027533}
  if (smk===3){a+=a1* 0.7526867644750319+a2*-0.0007987563331739}
  if (smk===4){a+=a1* 0.9931588755640579+a2*-0.0008370618426625}
  if (smk===5){a+=a1* 2.1331163414389076+a2*-0.0007840031915564}
  if (b_AF)  {a+=a1* 3.4896675530623207+a2*-0.0003499560834064}
  if (b_cort){a+=a1* 1.1708133653489108+a2*-0.0002496045095297}
  if (b_imp) {a+=a1*-1.5064009857454310+a2*-0.0011058218441227}
  if (b_mig) {a+=a1* 2.3491159871402441+a2* 0.0001989644604148}
  if (b_ren) {a+=a1*-0.5065671632722369+a2*-0.0018325930166499}
  if (b_htn) {a+=a1* 6.5114581098532671+a2* 0.0006383805310417}
  if (b_t1)  {a+=a1* 5.3379864878006531+a2* 0.0006409780808753}
  if (b_t2)  {a+=a1* 3.6461817406221311+a2*-0.0002469569558887}
  if (b_fhx) {a+=a1* 2.7808628508531887+a2*-0.0002479180990740}

  a += a1*b1*  31.0049529560338860 + a1*b2*-111.2915718439164300
  a += a2*b1*   0.0050380102356322 + a2*b2*  -0.0130744830025243
  a += a1*sc*   0.0188585244698659 + a2*sc*  -0.0000127187419159
  a += a1*tc*  -0.1007554870063731 + a2*tc*  -0.0000932996423233

  return 100 * (1 - 0.977268040180206 ** Math.exp(a))
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Sex = 'male' | 'female'

interface Band {
  label: string; color: string; bg: string; border: string
  headline: string; action: string
}

const BANDS: { min: number; max: number; band: Band }[] = [
  { min: 0, max: 5, band: { label: 'LOW', color: '#276749', bg: '#f0fff4', border: '#9ae6b4', headline: 'Low risk (<5%)', action: 'Lifestyle advice. No statin indicated on risk alone.' } },
  { min: 5, max: 10, band: { label: 'LOW–MODERATE', color: '#2b6cb0', bg: '#ebf8ff', border: '#90cdf4', headline: 'Low–moderate risk (5–9.9%)', action: 'Lifestyle advice. Individual decision on statin — approaching NICE threshold.' } },
  { min: 10, max: 20, band: { label: 'MODERATE', color: '#c05621', bg: '#fffaf0', border: '#fbd38d', headline: 'Moderate risk (10–19.9%)', action: 'NICE CG181: offer high-intensity statin (e.g. atorvastatin 20mg). Optimise lifestyle.' } },
  { min: 20, max: Infinity, band: { label: 'HIGH', color: '#742a2a', bg: '#fff5f5', border: '#feb2b2', headline: 'High risk (≥20%)', action: 'NICE CG181: offer high-intensity statin (e.g. atorvastatin 20–40mg). Urgent lifestyle optimisation.' } },
]

function getBand(score: number): Band {
  return BANDS.find(b => score >= b.min && score < b.max)!.band
}

// ─── Component ────────────────────────────────────────────────────────────────

const ETH_OPTIONS = [
  [1, 'White or not stated'],
  [2, 'Indian'],
  [3, 'Pakistani'],
  [4, 'Bangladeshi'],
  [5, 'Other Asian'],
  [6, 'Black Caribbean'],
  [7, 'Black African'],
  [8, 'Chinese'],
  [9, 'Other ethnic group'],
] as const

const SMK_OPTIONS = [
  [1, 'Non-smoker'],
  [2, 'Ex-smoker'],
  [3, 'Light smoker (<10/day)'],
  [4, 'Moderate smoker (10–19/day)'],
  [5, 'Heavy smoker (≥20/day)'],
] as const

export default function Qrisk3Calculator() {
  // Demographics
  const [age,  setAge]  = useState('')
  const [sex,  setSex]  = useState<Sex>('male')
  const [eth,  setEth]  = useState(1)
  const [smk,  setSmk]  = useState(1)

  // Measurements
  const [sbp,   setSbp]   = useState('')
  const [rati,  setRati]  = useState('')
  const [bmi,   setBmi]   = useState('')

  // Advanced (defaulted to population means)
  const [sbps5, setSbps5] = useState('9')
  const [town,  setTown]  = useState('0')
  const [showAdv, setShowAdv] = useState(false)

  // Binary conditions
  const [b_AF,   setAF]   = useState(false)
  const [b_aap,  setAap]  = useState(false)
  const [b_cort, setCort] = useState(false)
  const [b_mig,  setMig]  = useState(false)
  const [b_ra,   setRa]   = useState(false)
  const [b_ren,  setRen]  = useState(false)
  const [b_semi, setSemi] = useState(false)
  const [b_sle,  setSle]  = useState(false)
  const [b_htn,  setHtn]  = useState(false)
  const [b_t1,   setT1]   = useState(false)
  const [b_t2,   setT2]   = useState(false)
  const [b_fhx,  setFhx]  = useState(false)
  const [b_imp,  setImp]  = useState(false) // male only

  const result = useMemo<number | null>(() => {
    const ageN  = parseFloat(age)
    const sbpN  = parseFloat(sbp)
    const ratiN = parseFloat(rati)
    const bmiN  = parseFloat(bmi)
    const s5N   = parseFloat(sbps5) || 9
    const townN = parseFloat(town)  || 0

    if (
      !ageN || ageN < 25 || ageN > 84 ||
      !sbpN || sbpN < 70 || sbpN > 210 ||
      !ratiN || ratiN < 1 || ratiN > 12 ||
      !bmiN || bmiN < 15 || bmiN > 47
    ) return null

    try {
      if (sex === 'female') {
        return qrisk3Female(ageN, eth, smk, sbpN, s5N, ratiN, bmiN, townN,
          b_AF, b_aap, b_cort, b_mig, b_ra, b_ren, b_semi, b_sle, b_htn, b_t1, b_t2, b_fhx)
      } else {
        return qrisk3Male(ageN, eth, smk, sbpN, s5N, ratiN, bmiN, townN,
          b_AF, b_aap, b_cort, b_mig, b_ra, b_ren, b_semi, b_sle, b_htn, b_t1, b_t2, b_fhx, b_imp)
      }
    } catch { return null }
  }, [age, sex, eth, smk, sbp, sbps5, rati, bmi, town,
      b_AF, b_aap, b_cort, b_mig, b_ra, b_ren, b_semi, b_sle, b_htn, b_t1, b_t2, b_fhx, b_imp])

  const band = result !== null ? getBand(result) : null

  function reset() {
    setAge(''); setSbp(''); setRati(''); setBmi(''); setSbps5('9'); setTown('0')
    setSex('male'); setEth(1); setSmk(1)
    setAF(false); setAap(false); setCort(false); setMig(false)
    setRa(false); setRen(false); setSemi(false); setSle(false)
    setHtn(false); setT1(false); setT2(false); setFhx(false); setImp(false)
  }

  const conditionsMale: [boolean, (v:boolean)=>void, string][] = [
    [b_AF,   setAF,   'Atrial fibrillation'],
    [b_htn,  setHtn,  'Treated hypertension'],
    [b_t1,   setT1,   'Type 1 diabetes'],
    [b_t2,   setT2,   'Type 2 diabetes'],
    [b_ra,   setRa,   'Rheumatoid arthritis'],
    [b_ren,  setRen,  'CKD (stage 3, 4 or 5)'],
    [b_sle,  setSle,  'Systemic lupus erythematosus'],
    [b_semi, setSemi, 'Severe mental illness (schizophrenia / bipolar)'],
    [b_mig,  setMig,  'Migraine'],
    [b_cort, setCort, 'Systemic corticosteroids'],
    [b_aap,  setAap,  'Atypical antipsychotics'],
    [b_fhx,  setFhx,  'Family hx angina/MI (1st-degree relative <60y)'],
    [b_imp,  setImp,  'Erectile dysfunction / impotence (males)'],
  ]
  const conditionsFemale = conditionsMale.slice(0, 12)
  const conditions = sex === 'male' ? conditionsMale : conditionsFemale

  return (
    <div style={{ maxWidth: 680 }}>
      {/* Formula note */}
      <div style={infoBox}>
        <p style={infoLabel}>QRISK3-2017</p>
        <p style={{ margin: 0, fontSize: 13, color: '#2a4365' }}>
          10-year risk of cardiovascular disease (heart attack, stroke, TIA). Valid ages 25–84.
          Coefficients: Hippisley-Cox et al., BMJ 2017;357:j2099.
        </p>
      </div>

      {/* ── DEMOGRAPHICS ── */}
      <SectionHead>Demographics</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: 12, marginBottom: 18 }}>
        <Num label="Age" unit="years" val={age} set={setAge} placeholder="25–84" min={25} max={84} step={1} />

        <div>
          <label style={labelStyle}>Sex</label>
          <div style={{ display: 'flex', gap: 6 }}>
            {(['male','female'] as Sex[]).map(s => (
              <button key={s} onClick={() => setSex(s)} style={{
                flex: 1, padding: '9px 0', fontSize: 13, fontWeight: 600, borderRadius: 8,
                border: `1.5px solid ${sex===s ? '#3b82f6' : '#dde6f0'}`,
                background: sex===s ? '#eff6ff' : '#f8fafc',
                color: sex===s ? '#1e3a5f' : '#6b7280', cursor: 'pointer',
                textTransform: 'capitalize',
              }}>{s}</button>
            ))}
          </div>
        </div>

        <div>
          <label style={labelStyle}>Ethnicity</label>
          <select value={eth} onChange={e => setEth(+e.target.value)} style={selectStyle}>
            {ETH_OPTIONS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
      </div>

      {/* ── LIFESTYLE ── */}
      <SectionHead>Lifestyle &amp; Measurements</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
        <Num label="Systolic BP" unit="mmHg" val={sbp} set={setSbp} placeholder="70–210" min={70} max={210} />
        <Num label="TC : HDL ratio" unit="" val={rati} set={setRati} placeholder="1–12" min={1} max={12} step={0.1} />
        <Num label="BMI" unit="kg/m²" val={bmi} set={setBmi} placeholder="15–47" min={15} max={47} step={0.1} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle}>Smoking status</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {SMK_OPTIONS.map(([v, l]) => (
            <button key={v} onClick={() => setSmk(v)} style={{
              padding: '7px 12px', fontSize: 12, fontWeight: 600, borderRadius: 7,
              border: `1.5px solid ${smk===v ? '#3b82f6' : '#dde6f0'}`,
              background: smk===v ? '#eff6ff' : '#f8fafc',
              color: smk===v ? '#1e3a5f' : '#6b7280', cursor: 'pointer',
            }}>{l}</button>
          ))}
        </div>
      </div>

      {/* ── ADVANCED ── */}
      <button onClick={() => setShowAdv(v => !v)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: 12, color: '#6b7280', fontWeight: 600,
        display: 'flex', alignItems: 'center', gap: 4, marginBottom: 10, padding: 0,
      }}>
        <span>{showAdv ? '▼' : '▶'}</span> Advanced inputs (SBP variability, Townsend deprivation)
      </button>

      {showAdv && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18, padding: '14px 16px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e8edf2' }}>
          <div>
            <Num label="SBP variability (SD)" unit="mmHg" val={sbps5} set={setSbps5} placeholder="SD last 5 readings" min={0} max={60} step={0.1} />
            <p style={{ fontSize: 11, color: '#8a9bb0', margin: '4px 0 0' }}>Standard deviation of last 5 systolic BP readings. Default 9 = population mean (no effect on score).</p>
          </div>
          <div>
            <Num label="Townsend deprivation score" unit="" val={town} set={setTown} placeholder="-7 (affluent) to +12" min={-10} max={14} step={0.1} />
            <p style={{ fontSize: 11, color: '#8a9bb0', margin: '4px 0 0' }}>From patient postcode. 0 = national average. Leave at 0 if unknown.</p>
          </div>
        </div>
      )}

      {/* ── CONDITIONS ── */}
      <SectionHead>Medical history</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 24 }}>
        {conditions.map(([val, setter, label]) => (
          <label key={label} style={{
            display: 'flex', alignItems: 'flex-start', gap: 8,
            padding: '8px 10px', borderRadius: 7, cursor: 'pointer',
            background: val ? '#eff6ff' : '#f8fafc',
            border: `1px solid ${val ? '#93c5fd' : '#e8edf2'}`,
            fontSize: 13, color: val ? '#1e3a5f' : '#374151',
            fontWeight: val ? 600 : 400, lineHeight: 1.4,
          }}>
            <input type="checkbox" checked={val} onChange={e => setter(e.target.checked)}
              style={{ marginTop: 2, accentColor: '#3b82f6', flexShrink: 0 }} />
            {label}
          </label>
        ))}
      </div>

      {/* ── RESULT ── */}
      {result !== null && band ? (
        <div style={{
          background: band.bg, border: `1px solid ${band.border}`,
          borderLeft: `5px solid ${band.color}`, borderRadius: 10,
          padding: '20px 24px', marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
              color: band.color, background: band.border,
              padding: '2px 8px', borderRadius: 4,
            }}>{band.label}</span>
            <span style={{ fontSize: 36, fontWeight: 800, color: band.color, fontVariantNumeric: 'tabular-nums' }}>
              {result.toFixed(1)}%
            </span>
            <span style={{ fontSize: 14, color: band.color, fontWeight: 600 }}>10-year CVD risk</span>
          </div>

          {/* Visual bar */}
          <div style={{ position: 'relative', height: 22, display: 'flex', borderRadius: 5, overflow: 'hidden', marginBottom: 14 }}>
            <div style={{ width: '10%',  background: '#68d391', display:'flex', alignItems:'center', justifyContent:'center' }}><span style={barLbl}>5%</span></div>
            <div style={{ width: '10%',  background: '#4299e1', display:'flex', alignItems:'center', justifyContent:'center' }}><span style={barLbl}>10%</span></div>
            <div style={{ width: '20%',  background: '#ed8936', display:'flex', alignItems:'center', justifyContent:'center' }}><span style={barLbl}>20%</span></div>
            <div style={{ flex: 1,       background: '#fc8181', display:'flex', alignItems:'center', justifyContent:'center' }}><span style={barLbl}>≥30%</span></div>
            <div style={{
              position: 'absolute', top: -3, bottom: -3,
              left: `${Math.min(result / 40 * 100, 97)}%`,
              width: 3, background: '#1a365d', borderRadius: 2,
              transform: 'translateX(-50%)', boxShadow: '0 0 0 2px #fff',
            }} />
          </div>

          <p style={{ fontSize: 14, fontWeight: 600, color: band.color, margin: '0 0 6px' }}>{band.headline}</p>
          <p style={{ fontSize: 13, color: '#2d3748', margin: 0 }}>
            <strong>Action:</strong> {band.action}
          </p>
        </div>
      ) : (
        <div style={{ padding: '20px', background: '#f8fafc', border: '1px dashed #dde6f0', borderRadius: 10, marginBottom: 20, textAlign: 'center', color: '#94a3b8', fontSize: 13 }}>
          Enter age (25–84), systolic BP, TC:HDL ratio and BMI to calculate
        </div>
      )}

      {/* NICE callout */}
      <div style={{ background: '#eef4fb', border: '1px solid #c3d9f0', borderLeft: '4px solid #2b6cb0', borderRadius: 8, padding: '12px 16px', marginBottom: 16, fontSize: 13 }}>
        <p style={{ fontWeight: 700, margin: '0 0 4px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#1e3a5f' }}>NICE CG181 (Lipid modification)</p>
        <ul style={{ margin: 0, paddingLeft: 18, color: '#2a4365', lineHeight: 1.7 }}>
          <li>Offer <strong>atorvastatin 20mg</strong> to patients with QRISK3 <strong>≥10%</strong></li>
          <li>Offer <strong>atorvastatin 20–80mg</strong> to patients with established CVD or T1DM with target-organ damage</li>
          <li>QRISK3 is not appropriate for: established CVD, T1DM on treatment, familial hypercholesterolaemia, CKD on RRT, age &lt;25 or &gt;84</li>
        </ul>
      </div>

      {/* Disclaimer + links */}
      <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 16 }}>
        Results use the QRISK3-2017 algorithm (LGPL licence). Minor floating-point differences (&lt;0.5%) vs qrisk.org may occur.
        Always verify with the <a href="https://qrisk.org" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>official QRISK3 calculator</a> for clinical use.
        QRISK2 (superseded): <a href="https://qrisk.org/2015/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>qrisk.org/2015</a>.
      </div>

      {(age || sbp || rati || bmi) && (
        <button onClick={reset} style={resetBtn}>Reset</button>
      )}
    </div>
  )
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#8a9bb0', margin: '0 0 10px', borderBottom: '1px solid #e8edf2', paddingBottom: 6 }}>
      {children}
    </p>
  )
}

function Num({ label, unit, val, set, placeholder, min, max, step = 1 }: {
  label: string; unit: string; val: string; set: (v: string) => void
  placeholder: string; min?: number; max?: number; step?: number
}) {
  const filled = val !== ''
  return (
    <div>
      <label style={labelStyle}>{label}{unit && <span style={{ color: '#6b7280', fontWeight: 400 }}> ({unit})</span>}</label>
      <input type="number" value={val} onChange={e => set(e.target.value)}
        placeholder={placeholder} min={min} max={max} step={step}
        style={{ width: '100%', padding: '8px 10px', fontSize: 15, fontWeight: 600,
          border: `1.5px solid ${filled ? '#3b82f6' : '#dde6f0'}`, borderRadius: 8, outline: 'none',
          background: filled ? '#eff6ff' : '#f8fafc', color: '#1e3a5f', boxSizing: 'border-box' }}
        onFocus={e => { e.currentTarget.style.borderColor='#2563eb'; e.currentTarget.style.boxShadow='0 0 0 3px rgba(59,130,246,0.12)' }}
        onBlur={e => { e.currentTarget.style.borderColor=filled?'#3b82f6':'#dde6f0'; e.currentTarget.style.boxShadow='none' }}
      />
    </div>
  )
}

const labelStyle: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: '#374151', display: 'block', marginBottom: 4 }
const selectStyle: React.CSSProperties = { width: '100%', padding: '9px 10px', fontSize: 13, border: '1.5px solid #dde6f0', borderRadius: 8, background: '#f8fafc', color: '#1e3a5f', outline: 'none' }
const infoBox: React.CSSProperties = { background: '#eef4fb', border: '1px solid #c3d9f0', borderLeft: '4px solid #2b6cb0', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }
const infoLabel: React.CSSProperties = { fontWeight: 700, margin: '0 0 4px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#1e3a5f' }
const barLbl: React.CSSProperties = { fontSize: 10, fontWeight: 700, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.25)', pointerEvents: 'none' }
const resetBtn: React.CSSProperties = { padding: '8px 18px', fontSize: 13, fontWeight: 600, color: '#4a5568', background: '#f7fafc', border: '1px solid #dce6f0', borderRadius: 7, cursor: 'pointer' }
