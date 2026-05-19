import type { Note } from '../data/notes'

export const hypertension: Note = {
  id: 'hypertension',
  title: 'Hypertension',
  subtitle: 'NICE NG136 classification, ABCD drug treatment, doses, monitoring and resistant HTN',
  tags: ['cardiovascular', 'metabolic'],

  body: 'hypertension high blood pressure BP stage 1 stage 2 stage 3 ABPM HBPM ambulatory home monitoring clinic white coat hypertension isolated systolic amlodipine ramipril lisinopril perindopril losartan candesartan indapamide chlortalidone bendroflumethiazide bisoprolol doxazosin spironolactone NICE NG136 QRISK target organ damage LVH left ventricular hypertrophy microalbuminuria eGFR retinopathy fundoscopy secondary hypertension renal artery stenosis phaeochromocytoma hyperaldosteronism Conn syndrome resistant hypertension 24h urine sodium DVLA pregnancy hypertension labetalol nifedipine methyldopa pre-eclampsia pulmonary hypertension orthostatic postural hypotension dipping nocturnal masked white coat ACE ARB combination RAAS',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Hypertension — Key GP Concepts',
      items: [
        'Affects ~30% of UK adults; accounts for the largest single preventable cause of premature death (MI, stroke, renal failure)',
        'Diagnosis requires ABPM or HBPM to confirm — a single raised clinic reading is not sufficient (avoids over-treating white-coat hypertension)',
        'Stage 1 HTN (ABPM 135/85–149/94 mmHg): treat only if ≤80 years AND QRISK3 ≥10% OR target organ damage OR existing CVD/T2DM/CKD; otherwise lifestyle advice and annual review',
        'Stage 2 HTN (ABPM ≥150/95 mmHg): treat ALL patients regardless of QRISK3 score',
        'Stage 3 / severe (clinic systolic ≥180 mmHg or diastolic ≥120 mmHg): SAME-DAY assessment; consider immediate treatment without waiting for ABPM',
        'Do NOT use QRISK3 to decide whether to TREAT if stage 2 — all stage 2 patients get drug treatment; QRISK guides whether to add a statin or antiplatelet',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis and Classification — NICE NG136' },

    {
      type: 'table',
      headers: ['Stage', 'Clinic BP', 'ABPM / HBPM Daytime Average', 'Action'],
      rows: [
        ['Normal / Optimal', '<130/85 mmHg', '<130/85 mmHg', 'Reassure; lifestyle advice; recheck in 5 years (annually if high-normal or risk factors)'],
        ['High-Normal', '130–139 / 85–89 mmHg', '—', 'Lifestyle; annual BP check; consider ABPM if any concern about masked HTN'],
        ['Stage 1 HTN', '140–159 / 90–99 mmHg', 'ABPM ≥135/85 mmHg', 'Treat if: ≤80 yrs AND QRISK3 ≥10%, OR TOD, OR CVD/DM/CKD present; otherwise lifestyle + annual review'],
        ['Stage 2 HTN', '160–179 / 100–119 mmHg', 'ABPM ≥150/95 mmHg', 'Treat ALL — drug therapy in addition to lifestyle; offer within 1 month'],
        ['Stage 3 / Severe', '≥180 / ≥120 mmHg', 'N/A — immediate action', 'Same-day clinical assessment; start treatment WITHOUT waiting for ABPM; exclude hypertensive emergency'],
      ],
      caption: 'ABPM (ambulatory BP monitoring) takes the average of daytime readings. HBPM (home BP monitoring) takes the average of 2 readings twice daily for at least 4 days. Clinic BP is ALWAYS higher than ABPM/HBPM — use ABPM/HBPM values to stage and treat. White-coat hypertension = raised clinic BP with normal ABPM — confirm with ABPM before labelling or treating as HTN.',
    },

    { type: 'heading', level: 2, text: 'Target Organ Damage (TOD) — Assess Before Treatment' },

    {
      type: 'list',
      items: [
        'Urine: spot urine albumin:creatinine ratio (UACR) — microalbuminuria indicates early renal/endothelial damage; 3–30 mg/mmol = microalbuminuria; >30 = macroalbuminuria',
        'Bloods: U&E, eGFR (renal impairment), HbA1c (DM comorbidity), fasting lipids (QRISK), TFTs if indicated',
        'ECG: LVH (left ventricular hypertrophy) — Sokolow-Lyon criteria or Romhilt-Estes; also look for AF, ischaemia',
        'Fundoscopy (if clinic ≥180/120 or established TOD): hypertensive retinopathy (Grade III = flame haemorrhages, cotton wool spots; Grade IV = papilloedema — EMERGENCY)',
        'eGFR: CKD is both a consequence and a cause of HTN; proteinuria accelerates CKD progression',
        'Consider echocardiogram if suspected LVH on ECG or significant cardiac symptoms — hypertensive cardiomyopathy',
      ],
    },

    { type: 'heading', level: 2, text: 'BP Targets — What to Aim For' },

    {
      type: 'table',
      headers: ['Population', 'Clinic BP Target', 'ABPM / HBPM Target'],
      rows: [
        ['Age <80 years (no DM, no proteinuric CKD)', '<140/90 mmHg', '<135/85 mmHg'],
        ['Age ≥80 years (frail or non-frail)', '<150/90 mmHg', '<145/85 mmHg'],
        ['Type 1 or Type 2 DM (with microalbuminuria or macroalbuminuria)', '<130/80 mmHg', '<125/75 mmHg'],
        ['CKD with proteinuria (UACR >70 mg/mmol)', '<130/80 mmHg', '<125/75 mmHg'],
        ['Established CVD (post-MI, stroke, PVD)', '<130/80 mmHg', '<125/75 mmHg'],
      ],
      caption: 'In frail elderly patients (>80 years), avoid over-treating — target ≤150/90 mmHg is appropriate; postural hypotension is a significant fall risk. Check standing BP before and during treatment in older patients. Do not push below 120/70 mmHg in elderly (J-curve effect).',
    },

    { type: 'heading', level: 2, text: 'Drug Treatment — ABCD Framework (NICE NG136)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'ABCD Drug Selection — Step by Step',
      items: [
        'Step 1: Start with A (ACE inhibitor or ARB) if age <55 OR if DM or CKD with proteinuria — OR — start with C (calcium channel blocker) if age ≥55 OR Afro-Caribbean origin',
        'Step 2: A + C (combine ACE/ARB with CCB — this is the most evidence-based combination); alternatively A + D (diuretic) if CCB not tolerated',
        'Step 3: A + C + D (triple therapy — add thiazide-like diuretic); if already on this and not controlled: check adherence, measure 24h sodium, review lifestyle before escalating',
        'Step 4 (Resistant HTN — see below): add low-dose spironolactone 25 mg OD if K+ <4.5 mmol/L; OR add alpha-blocker (doxazosin) or beta-blocker; refer to hypertension specialist',
        'NEVER combine A + A (ACE + ARB — dual RAAS blockade is contraindicated; worsens renal function and hyperkalaemia without additional BP benefit)',
        'A = ACE inhibitor OR ARB (not both); C = calcium channel blocker; D = thiazide-like diuretic (indapamide or chlortalidone preferred over bendroflumethiazide)',
      ],
    },

    { type: 'heading', level: 2, text: 'Drug Doses — Practical Prescribing' },

    {
      type: 'table',
      headers: ['Drug Class', 'Drug & Dose', 'Key Points'],
      rows: [
        ['ACE inhibitor (A)', 'Ramipril 2.5 mg OD → titrate to 10 mg OD; Lisinopril 10 mg OD → 40 mg OD; Perindopril 4 mg OD → 8 mg OD', 'Check K+ and eGFR 1–2 weeks after starting; expect up to 20% rise in creatinine (acceptable if <25% and K+ <5.5); cough in ~15% (switch to ARB); avoid in pregnancy and bilateral renal artery stenosis; ALWAYS check K+ with any dose increase'],
        ['ARB (A — if ACE not tolerated)', 'Losartan 50 mg OD → 100 mg OD; Candesartan 8 mg OD → 32 mg OD; Valsartan 80 mg OD → 320 mg OD', 'Same renal/K+ monitoring as ACE; no cough; preferred in: DM with proteinuria, CKD, heart failure with EF<40%; avoid in pregnancy'],
        ['Calcium channel blocker (C)', 'Amlodipine 5 mg OD → 10 mg OD; Lercanidipine 10 mg OD → 20 mg OD (less ankle oedema than amlodipine)', 'Ankle oedema common with amlodipine (~15%) — not a cardiac problem; try lercanidipine or felodipine as alternatives; amlodipine is well tolerated in renal impairment and CKD; NO significant drug monitoring required'],
        ['Thiazide-like diuretic (D)', 'Indapamide MR 1.5 mg OD (preferred); or Chlortalidone 12.5–25 mg OD; avoid bendroflumethiazide (less CV outcome data)', 'Check K+ and Na+ 4–6 weeks after starting; gout risk (avoid in active gout); hyponatraemia in elderly; can worsen glucose tolerance — check HbA1c; indapamide preferred over bendroflumethiazide per NICE'],
        ['Beta-blocker (B — not first line)', 'Bisoprolol 5–10 mg OD; atenolol 25–50 mg OD (less preferred); nebivolol for elderly HTN with HF', 'Not first-line for HTN alone; use if: AF, angina, HFrEF, post-MI, or intolerance to A/C/D; avoid in asthma and reactive airway disease; do not stop abruptly (rebound HTN + angina)'],
        ['Alpha-blocker (resistant HTN)', 'Doxazosin MR 4 mg OD → 8 mg OD', 'Use at Step 4; useful in BPH comorbidity; first-dose hypotension — start at night; do not use alone in HTN (ALLHAT trial — worse outcomes)'],
        ['Spironolactone (resistant HTN)', 'Spironolactone 25 mg OD (start low)', 'Step 4 add-on if K+ <4.5 mmol/L; check K+ within 4 weeks; gynecomastia (switch to eplerenone if problematic); avoid if eGFR <30; very effective in primary aldosteronism'],
      ],
      caption: 'Prescribing note: NICE prefers indapamide or chlortalidone over bendroflumethiazide as thiazide-like diuretics due to superior cardiovascular outcome data. Amlodipine remains the most used CCB in UK practice. Ramipril and lisinopril are most commonly used ACEi in UK. Losartan or candesartan for ARB.',
    },

    { type: 'heading', level: 2, text: 'Special Populations' },

    {
      type: 'table',
      headers: ['Population', 'Considerations'],
      rows: [
        ['Age ≥80 years', 'Target <150/90 mmHg clinic (not <140/90); always check standing BP; reduce risk of falls from postural hypotension; simplify regimen; continue treatment if started in younger years unless frailty changes balance of benefit'],
        ['Type 2 Diabetes', 'Strong ACEi/ARB preference (renoprotective); target <130/80 mmHg if tolerated; avoid diuretics in T2DM with poor glycaemic control (worsen insulin resistance); amlodipine generally well tolerated'],
        ['CKD (eGFR <60)', 'ACEi or ARB reduces proteinuria and slows progression — continue even if creatinine rises up to 25% (acceptable); stop if rise >25% or K+ >5.5; target <130/80 if UACR >70; avoid NSAIDs'],
        ['Afro-Caribbean', 'ACEi/ARB less effective as monotherapy (lower renin system activity); start with C (CCB) ± D; ARBs preferred over ACEi (lower rates of angioedema)'],
        ['Pregnancy', 'STOP ACEi/ARBs immediately (teratogenic — renal agenesis, oligohydramnios); use labetalol 100–200 mg BD (first-line), oral nifedipine MR, or methyldopa 250 mg BD-TDS; DO NOT use indapamide or spironolactone; refer obstetrics if ≥140/90 persistent'],
        ['Post-MI / IHD', 'ACEi (ramipril) + beta-blocker (bisoprolol) + statin is the cornerstone; CCB useful for angina; avoid diltiazem/verapamil with beta-blocker (complete heart block risk)'],
        ['Heart Failure (HFrEF)', 'ACEi/ARB, beta-blocker, spironolactone, SGLT2i are all first-line (quadruple therapy); CCBs are generally AVOIDED in HFrEF; amlodipine is the safest CCB if needed for BP control'],
        ['AF', 'Rate control with beta-blocker or rate-limiting CCB (diltiazem/verapamil) — both treat HTN and rate-control AF simultaneously; anticoagulation decision separate'],
      ],
    },

    { type: 'heading', level: 2, text: 'Resistant Hypertension — Step 4 Assessment' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Resistant Hypertension — Defined and What to Do',
      items: [
        'Resistant HTN: BP remains above target despite optimal doses of 3 drugs (A + C + D) — affects ~10% of treated HTN patients',
        'BEFORE adding a 4th drug: check compliance (pill count, pharmacy records, direct questioning); check ABPM (white-coat effect?); check 24h urine sodium (high dietary salt massively attenuates antihypertensive effect)',
        'Screen for secondary causes: (1) primary aldosteronism — aldosterone:renin ratio (ARR); (2) renal artery stenosis — USS renal arteries if sudden onset/young patient; (3) phaeochromocytoma — 24h urine metanephrines; (4) OSA — Epworth score, sleep study; (5) drug causes: NSAIDs, OCP, steroids, liquorice, decongestants, stimulants',
        'Step 4 add-on — if K+ <4.5 mmol/L: low-dose spironolactone 25 mg OD (most evidence); if K+ ≥4.5: add doxazosin MR 4–8 mg or bisoprolol 5–10 mg',
        'Refer to hypertension specialist clinic if: Step 4 needed; age <40 with HTN; suspected secondary HTN; BP uncontrolled despite 4 drugs; significant TOD',
        'NICE NG136: if K+ is high or patient intolerant of spironolactone at Step 4 — doxazosin or bisoprolol preferred',
      ],
    },

    { type: 'heading', level: 2, text: 'Hypertensive Emergency vs Urgency' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Act as an Emergency — Not All Very High BPs Are Emergencies',
      items: [
        'Hypertensive emergency (urgency with end-organ damage): BP ≥180/120 mmHg PLUS any of: acute chest pain (ACS/aortic dissection), severe headache + vomiting (hypertensive encephalopathy), acute pulmonary oedema, new focal neurology, Grade III–IV retinopathy, haematuria, eclampsia → 999 / A&E immediately; IV labetalol or sodium nitroprusside in hospital',
        'Hypertensive urgency (very high BP WITHOUT organ damage): BP ≥180/120 mmHg but patient asymptomatic or only mild headache → DO NOT lower BP abruptly (risk of cerebral ischaemia); start or adjust oral therapy; same-day clinical review',
        'Aortic dissection: do NOT miss — tearing chest/back pain radiating to jaw or interscapular; pulse differential between arms; widened mediastinum on CXR → 999 immediately',
        'Grade IV hypertensive retinopathy (papilloedema): fundoscopy in severe/symptomatic HTN; if papilloedema present → hypertensive encephalopathy → same-day hospital admission',
        'Note: "hypertensive urgency" (high BP, no organ damage) does NOT require IV treatment or emergency admission but DOES require same-day assessment and oral treatment initiation',
      ],
    },

    { type: 'heading', level: 2, text: 'Monitoring in Primary Care' },

    {
      type: 'table',
      headers: ['Timing', 'What to Check', 'Action'],
      rows: [
        ['Before starting drug treatment', 'Clinic BP ×2 (confirm); ABPM or HBPM; U&E, eGFR, UACR; lipids; HbA1c; ECG; BMI', 'Establish baseline; identify secondary causes or TOD; set QRISK3 score'],
        ['4–6 weeks after starting / dose change', 'Clinic BP (aim to titrate to target); U&E, eGFR, K+ (ACEi/ARB/diuretic)', 'Check BP response; look for side effects (cough, ankle oedema, dizziness); check renal function and K+ after each RAAS change'],
        ['Annually (stable)', 'Clinic BP; U&E, eGFR, K+; UACR; HbA1c; lipids; ECG if indicated; medication review', 'Confirm target BP maintained; recheck QRISK3 for statin/aspirin decisions; review lifestyle; screen for DM if borderline HbA1c'],
        ['Age ≥80 years / frail patients', 'Postural BP (standing after 1 min and 3 min) at every review', 'Postural drop >20 mmHg systolic or >10 mmHg diastolic = significant; reduce antihypertensives if causing symptoms; highest fall risk in first 4 weeks of starting new drug'],
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle Advice — Evidence-Based' },

    {
      type: 'list',
      items: [
        'Salt restriction: reduce to <6g NaCl/day (1 teaspoon); dietary salt has a large effect — reducing from 12g to 6g/day lowers systolic BP by 5–10 mmHg; advise avoiding processed food, ready meals, soy sauce, cured meats',
        'Weight loss: every 1 kg weight loss lowers BP by ~1 mmHg; target BMI <25; waist circumference <94 cm (men), <80 cm (women)',
        'Exercise: 150 min/week moderate aerobic activity (brisk walking, cycling, swimming); dynamic resistance exercise also lowers BP; isometric handgrip exercises have emerging evidence',
        'Alcohol: limit to ≤14 units/week; spread over >3 days; alcohol raises BP dose-dependently; reducing to safe limits lowers systolic by 3–5 mmHg',
        'DASH diet: Dietary Approaches to Stop Hypertension — high fruit/vegetables, low saturated fat; lowers BP by 8–14 mmHg when fully implemented',
        'Caffeine: high caffeine intake raises BP acutely; advise no more than 4 cups coffee/day; not a major driver compared to salt/weight',
        'Smoking cessation: does NOT directly lower BP but massively reduces overall CVD risk — always address in HTN management',
        'Stress management: evidence weaker; mindfulness/relaxation may help; avoid sustained psychological stress',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Useful Mnemonics and Practical Tips',
      items: [
        'ABCD: A = ACE/ARB, B = Beta-blocker (not first-line), C = Calcium channel blocker, D = Diuretic (thiazide-like)',
        'Step 1: A or C → Step 2: A+C → Step 3: A+C+D → Step 4: add spironolactone (K+ <4.5) or doxazosin/bisoprolol',
        'Renal monitoring with RAAS drugs (ACEi/ARB): check U&E + K+ before starting, 4–6 weeks after starting, and after every dose change — a 20% creatinine rise is acceptable; stop if >25% rise',
        'Ankle oedema with amlodipine: NOT a cardiac problem (not fluid overload); try lercanidipine 10–20 mg OD as alternative; adding an ACEi reduces amlodipine-related oedema via venodilation',
        'ACEi cough: persistent dry cough in up to 15% of patients (due to bradykinin accumulation); switch to ARB — equivalent efficacy, no cough',
        'Do not stop antihypertensives abruptly: especially beta-blockers (rebound tachycardia, hypertension, angina); taper over 2–4 weeks',
        'DVLA and HTN: patients with HTN are not required to notify DVLA (group 1 licence) unless there is a complication (stroke, TIA, heart failure) — advise patients accordingly',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG136 — Hypertension in Adults', url: 'https://www.nice.org.uk/guidance/ng136' },
        { label: 'NICE CKS — Hypertension', url: 'https://cks.nice.org.uk/topics/hypertension/' },
        { label: 'Blood Pressure UK — Patient Resources', url: 'https://www.bloodpressureuk.org/' },
        { label: 'NICE QRISK3 Calculator', url: 'https://qrisk.org/three/' },
        { label: 'BHS — Blood Pressure Charts', url: 'https://bihsoc.org/resources/bp-measurement/bp-charts-for-adults/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Hypertension specialist clinic (resistant HTN, suspected secondary HTN, age <40): UHDB Queen\'s Hospital Burton cardiology / general medicine — via e-RS; include current medications and doses, ABPM result, recent U&E and UACR, QRISK3 score',
        'Secondary HTN workup: if renal artery stenosis suspected (bilateral or young patient) → UHDB vascular/renal; if phaeochromocytoma suspected → UHDB endocrinology; arrange metanephrines and ARR before referring',
        'Hypertensive emergency (acute TOD): UHDB Queen\'s Hospital Burton A&E — 999; phone medical registrar if Grade IV retinopathy or hypertensive encephalopathy confirmed in surgery',
        'Nephrology (CKD + uncontrolled HTN with proteinuria): UHDB Burton nephrology — via e-RS; include eGFR trend, UACR, blood pressure readings, current antihypertensives',
        'Obstetric HTN / gestational HTN: UHDB Burton maternity triage — same day if BP ≥150/100 in pregnancy; Good Hope Hospital obstetrics as alternative',
        'ABPM service: available via UHDB Queen\'s Burton outpatients or community cardiology; alternatively consider practice ABPM machine for in-house monitoring if available',
      ],
    },
  ],
}
