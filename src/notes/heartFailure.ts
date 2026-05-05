import type { Note } from '../data/notes'

export const heartFailure: Note = {
  id: 'heart-failure',
  title: 'Heart Failure (HFrEF & HFpEF)',
  subtitle: 'BNP/NT-proBNP, ABCDEF drug management, and monitoring in primary care',
  tags: ['cardiology'],

  body: 'heart failure HFrEF HFpEF HFMREF reduced ejection fraction preserved diastolic systolic BNP NT-proBNP echocardiogram ACE ARB beta-blocker spironolactone eplerenone furosemide dapagliflozin digoxin entresto sacubitril valsartan ARNI ivabradine CRT ICD cardiac resynchronisation NYHA dyspnoea orthopnoea PND ankle swelling breathlessness ejection fraction ischaemic hypertensive cardiomyopathy iron deficiency ferrinject pulmonary rehab cardiac rehab DVLA',

  content: [

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'BEAT-HF Campaign — Think Heart Failure',
      items: [
        'Breathless, Exhausted, Ankle Swelling = Time for a simple blood test (BNP/NT-proBNP)',
        'Classic symptoms: SOBOE, orthopnoea, PND, ankle swelling, fatigue',
        'Major causes: IHD (HFREF) and hypertension (HFpEF)',
        'Other causes: valvular disease, AF, cardiomyopathy, congenital, viral myocarditis (HIV, Lyme), chemotherapy (trastuzumab, doxorubicin), haemochromatosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Classification of Heart Failure' },

    {
      type: 'table',
      headers: ['Type', 'Ejection Fraction', 'Description', 'Common Cause'],
      rows: [
        ['HFrEF', '<40%', 'Reduced EF — impaired systolic contraction', 'IHD/MI — most common cause'],
        ['HFmrEF', '40–50%', 'Mildly reduced EF — mild systolic + diastolic dysfunction', 'Mixed aetiology'],
        ['HFpEF', '>50%', 'Preserved EF — impaired filling/relaxation, normal contraction', 'Hypertension — gradual remodelling; can progress to HFrEF'],
      ],
      caption: 'Up to 50% of heart failure is HFpEF, with similar mortality (50% at 5 years) and admission rate as HFrEF, but harder to diagnose — 1 in 5 have normal BNP (less LV wall stress). Underlying factors: inflammation, obesity, hypertension, AF.',
    },

    { type: 'heading', level: 2, text: 'Initial Investigations' },

    {
      type: 'table',
      headers: ['Test', 'Result / Interpretation', 'Action'],
      rows: [
        ['NT-proBNP (preferred — more sensitive)', '<400 pg/mL', 'Heart failure unlikely'],
        ['NT-proBNP', '400–2000 pg/mL', 'Echo within 6 weeks with specialist MDT referral'],
        ['NT-proBNP', '>2000 pg/mL', 'Echo within 2 weeks — poor prognosis; urgent cardiology input'],
        ['False HIGH BNP', 'COPD, PE, liver failure, CKD', 'Clinical context essential — BNP not diagnostic alone'],
        ['False LOW BNP', 'Afro-Caribbean ethnicity, ACE/β-blocker/diuretic use', 'Do not rely on BNP to exclude HF in these groups'],
        ['ECG', 'AF, LVH, LBBB, ischaemia', 'Wide QRS → candidate for CRT; AF → consider cause of HF'],
        ['Bloods', 'U&E, eGFR, HbA1c, lipids, UACR, FBC', 'Anaemia worsens HF; CKD affects drug titration'],
        ['CXR (CTR)', 'Cardiomegaly, pulmonary oedema, pleural effusions', 'Supportive only — not diagnostic'],
        ['Spirometry', 'Exclude COPD as differential', 'Consider if smoker or diagnostic uncertainty'],
      ],
    },

    // ── MANAGEMENT — HFREF ────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management — HFrEF (The ABCDEF of Drugs)' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Non-Drug Interventions — Essential for All',
      items: [
        'Cardiac rehabilitation — exercise and education programme; improves QOL and reduces admissions',
        'Smoking cessation, alcohol reduction',
        'Annual flu vaccination + one-off pneumococcal vaccination',
        'Malnutrition screening (common — involve dietician)',
        'Depression screening (very common — untreated worsens outcomes)',
        'Fluid restriction (usually <1.5 L/day) and daily weight monitoring — weight gain >1 kg/day needs increased furosemide',
        'Advanced care planning — ReSPECT form (discuss prognosis, deactivation of ICD at end of life)',
      ],
    },

    {
      type: 'table',
      headers: ['Drug Class', 'Drug / Dose', 'Key Monitoring', 'Notes'],
      rows: [
        ['A — ACE inhibitor or ARB', 'Ramipril up to 10 mg OD; Lisinopril up to 35 mg; Enalapril up to 40 mg. ARBs: Losartan 150 mg, Candesartan 32 mg', 'U&E 1–2 weeks after starting/increasing; K⁺ <5.5', 'For all HFrEF. Start low, go slow to maximum tolerated dose. If not tolerated or Afro-Caribbean: hydralazine + nitrate (ISDN) under specialist'],
        ['ARNI upgrade', 'Entresto (sacubitril/valsartan)', 'U&E closely; washout period from ACE required', 'Specialist initiated if still symptomatic on max ACE/ARB. Reduces mortality vs enalapril (PARADIGM-HF)'],
        ['B — Beta-blocker (HF-licensed)', 'Bisoprolol up to 10 mg OD; Carvedilol up to 50 mg BD', 'BP and HR after each dose increase', 'For all HFrEF. Start low, go slow. Caution (not contraindicated) in COPD, PVD, ED, DM'],
        ['C — MRA (Aldosterone antagonist)', 'Spironolactone 25–50 mg OD; Eplerenone 25–50 mg OD', 'K⁺ before starting (<5.0); recheck 1–2w; U&E 3-monthly', 'Add if still symptomatic on max ACE/β-blocker. High hyperkalaemia risk — especially with ACE/ARB. Monitor more closely in CKD'],
        ['D — Dapagliflozin', 'Dapagliflozin 10 mg OD', 'eGFR, U&E', 'Licensed for HFrEF with or without T2DM. Start if still symptomatic — often initiated by cardiology'],
        ['E — Diuretic (furosemide)', 'Furosemide up to 80 mg/day', 'U&E 1–2w after starting/increasing', 'For fluid overload symptoms ONLY — no mortality benefit. Self-weighing: if >1 kg/day increase furosemide'],
        ['F — Further specialist options', 'Digoxin; ivabradine; CRT/ICD', 'Digoxin levels; ECG; BP', 'Digoxin if severe/worsening HFrEF + slow AF or sedentary. Ivabradine if SR >75 on max β-blocker. CRT if wide QRS; ICD if LVEF <35%'],
      ],
      caption: 'Specialist may combine ACE + ARB in selected patients — NOT for primary care. Extended treatments (ARNI, ivabradine, CRT, ICD) require LVEF <35% and NYHA Class II+ symptoms.',
    },

    // ── HFPEF ─────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management — HFpEF / HFmrEF' },

    {
      type: 'list',
      items: [
        'No specific drug treatments with proven mortality benefit (unlike HFrEF)',
        'Treat underlying causes: hypertension (tight BP control), AF (rate control), obesity (weight loss)',
        'Furosemide for fluid overload and symptoms — often requires high doses',
        'Dapagliflozin ± ARNI (Entresto) recently approved for HFpEF/HFmrEF — initiation under specialist',
        'Cardiac rehabilitation improves functional capacity and QOL',
        'Screen and manage anaemia (ferrinject preferred over IV EPO in HF-related iron deficiency)',
      ],
    },

    // ── ANAEMIA IN HF ─────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'Anaemia in Heart Failure',
      items: [
        'Common and worsens breathlessness (high-output state)',
        'Often IDA or anaemia of chronic disease (malnutrition, malabsorption, chronic inflammation)',
        'Check: FBC, ferritin, transferrin saturation, reticulocytes, B12, folate',
        'IV iron (ferrinject/ferric maltol) preferred over oral — better absorbed, quicker correction, reduces HF admissions (FAIR-HF trial)',
        'Consider referral if not responding — EPO rarely used in HF',
      ],
    },

    // ── MONITORING ────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Monitoring in Primary Care' },

    {
      type: 'table',
      headers: ['Frequency', 'What to Check'],
      rows: [
        ['At each dose change', 'U&E (particularly K⁺), BP, HR — within 1–2 weeks'],
        ['3-monthly (stable, max dose)', 'U&E, eGFR, BP, weight, symptom score (NYHA/MRC)'],
        ['Annually', 'BNP/NT-proBNP trend, FBC, HbA1c, lipids, echo review, medication adherence, vaccination status, depression screen, advance care planning review'],
        ['Daily (patient)', 'Self-weigh — gain >1 kg/day = increase furosemide (pre-agreed plan); record symptoms in diary'],
      ],
    },

    // ── DVLA ──────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'DVLA Notification Obligations',
      items: [
        'Group 1 (car/motorcycle): must notify DVLA if NYHA Class 4 (severe HF)',
        'Group 2 (HGV/bus licence): must notify DVLA for ANY degree of HF — DVLA apply specific EF and symptom criteria',
        'Always document DVLA advice given in the consultation record',
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Cardiology (echo and specialist HF clinic): Good Hope Hospital (UHB, Birmingham) — primary cardiology referral for South Staffordshire',
        'Alternative: UHDB Queen\'s Hospital Burton (general cardiology and heart failure clinic)',
        'Heart failure specialist nurses: community heart failure nurse team — refer via GP/cardiology for monitoring support at home',
        'NT-proBNP >2000 → urgent (2-week) echo pathway via e-RS to cardiology at Good Hope or Burton',
        'Patient may prefer alternative local site — discuss at consultation',
        'Cardiac rehabilitation: refer via community physiotherapy / cardiac rehab team (Staffordshire ICFT)',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E (UHDB Burton): flash pulmonary oedema, severe breathlessness at rest, new hypotension, cardiac arrhythmia causing symptoms',
        'NHS 111 / same-day GP: weight gain >2 kg in 24–48 hours, worsening ankle swelling, increased breathlessness not settling with furosemide dose increase',
        'Red flags for urgent cardiology review: NT-proBNP >2000 pg/mL, new AF, decompensated HF not responding to diuretic adjustment',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG106 — Chronic Heart Failure', url: 'https://www.nice.org.uk/guidance/ng106' },
        { label: 'NICE CKS — Heart Failure', url: 'https://cks.nice.org.uk/topics/heart-failure-chronic/' },
        { label: 'ESC Heart Failure Guidelines 2021', url: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-and-Chronic-Heart-Failure' },
        { label: 'BHF — Heart Failure', url: 'https://www.bhf.org.uk/informationsupport/conditions/heart-failure' },
        { label: 'NHS — Heart Failure', url: 'https://www.nhs.uk/conditions/heart-failure/' },
      ],
    },
  ],
}
