import type { Note } from '../data/notes'

export const ckd: Note = {
  id: 'ckd',
  title: 'Chronic Kidney Disease (CKD)',
  subtitle: 'Diagnosis, staging, management, renal protection and referral criteria',
  tags: ['renal', 'cardiology'],

  body: 'chronic kidney disease CKD eGFR UACR ACR proteinuria albuminuria staging G1 G2 G3 G4 G5 A1 A2 A3 kidney failure renal replacement therapy dialysis transplant ACE ARB dapagliflozin finerenone atorvastatin nephrotoxic NSAID metformin bisphosphonate DOAC nephropathy hypertension anaemia anaemia of chronic disease normocytic haematuria haematinics phosphate bicarbonate PCKD RAS renal artery stenosis nephrotic syndrome glomerulonephritis kidney failure risk equation KFRE hyperkalaemia CKD RW Darwin UHDB Burton nephrology',

  content: [

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'CKD Diagnosis — Two Criteria',
      items: [
        'eGFR <60 mL/min/1.73m² AND/OR UACR ≥3 mg/mmol — confirmed on TWO readings ≥3 months apart',
        'Structural kidney problems (e.g. polycystic kidneys, solitary kidney, obstruction) regardless of eGFR',
        'New low eGFR: if no prior result, repeat in 2 weeks (or sooner) to exclude AKI before labelling CKD',
        'CKD is classified by G grade (eGFR) + A grade (UACR) — e.g. G3aA2',
      ],
    },

    { type: 'heading', level: 2, text: 'CKD Staging — G (eGFR) and A (Albumin) Categories' },

    {
      type: 'table',
      headers: ['G Stage', 'eGFR (mL/min/1.73m²)', 'Description', 'Review frequency'],
      rows: [
        ['G1', '≥90', 'Normal or high — only CKD if structural/UACR evidence', 'Annual if stable'],
        ['G2', '60–89', 'Mildly decreased', 'Annual if stable'],
        ['G3a', '45–59', 'Mild-moderately decreased', 'Annual (6-monthly if A2/A3)'],
        ['G3b', '30–44', 'Moderate-severely decreased', '6-monthly'],
        ['G4', '15–29', 'Severely decreased — prepare for renal replacement', '3–4 monthly'],
        ['G5', '<15', 'Kidney failure — dialysis or transplant', 'Monthly (nephrology-led)'],
      ],
      caption: 'UACR grading: A1 <3 mg/mmol (normal), A2 3–30 mg/mmol (moderately increased), A3 >30 mg/mmol (severely increased). Confirm UACR with early morning urine sample; if 3–70 repeat to confirm; if >70 no need to repeat. Higher G and A grades = higher CVD and progression risk.',
    },

    // ── INITIAL WORKUP ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Initial Workup When CKD Formally Diagnosed' },

    {
      type: 'list',
      items: [
        'BP — target <140/90 in clinic; lower to <130/80 if UACR >70 mg/mmol',
        'Urine dip — rule out haematuria (dipstick; microhaematuria alone does not need microscopy in CKD)',
        'Bloods — U&E, eGFR, FBC, HbA1c, lipids, LFTs, calcium, phosphate, bicarbonate, parathyroid hormone (if G4/G5)',
        'Renal USS — indicated if: eGFR <30, accelerated decline ≥25% in 1 year, change in G category, haematuria, suspected obstruction, or family history of PCKD',
        'Kidney Failure Risk Equation (KFRE) — 5-year risk of renal replacement therapy; if >5% refer to nephrology; requires phosphate and bicarbonate results',
        'Calculate: CKD cardiovascular risk is very high regardless of QRISK — treat accordingly',
      ],
    },

    // ── MANAGEMENT ────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management — The 5 As' },

    {
      type: 'table',
      headers: ['Pillar', 'Action', 'Detail'],
      rows: [
        ['Advice', 'Lifestyle & monitoring', 'Weight loss, smoking cessation, low-salt diet, avoid NSAIDs; annual review (6-monthly if eGFR <30 or UACR >30)'],
        ['ACE/ARB', 'Renoprotection', 'Offer to all with UACR >70 (without diabetes) or UACR >3 (with diabetes). Titrate to maximum tolerated dose. Check U&E 1–2 weeks after starting/increasing.'],
        ['SGLT2 inhibitor', 'Renoprotection', 'Dapagliflozin 10 mg OD: licensed for CKD with UACR ≥22.6 mg/mmol and eGFR 25–75. Reduces CKD progression and cardiovascular events independently of glucose.'],
        ['Atorvastatin', 'CVD prevention', 'Offer 20 mg to all CKD patients regardless of lipid levels — cannot use QRISK reliably in CKD. If eGFR <30 and <40% non-HDL reduction, discuss with renal rather than increasing dose.'],
        ['Annual review', 'Monitoring', 'eGFR trend, BP, UACR, FBC, haematinics, flu/pneumococcal vaccination (annual flu; one-off pneumococcal), medication review (nephrotoxics)'],
      ],
      caption: 'New mineralocorticoid receptor antagonist: finerenone (Kerendia) — approved for CKD with type 2 diabetes after dapagliflozin. Reduces progression and cardiovascular events. Initiate under renal/cardiology guidance.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Medications Requiring Caution or Dose Adjustment in CKD',
      items: [
        'NSAIDs — avoid in CKD (vasoconstrict afferent arteriole → accelerate decline, fluid retention, hyperkalaemia)',
        'Metformin — safe to eGFR 30; halve dose eGFR 30–45; STOP eGFR <30 (lactic acidosis risk)',
        'DOACs — use Cockcroft-Gault creatinine clearance (not eGFR) for dosing; eGFR can overestimate function in elderly/extremes of muscle mass; check BNF for each agent',
        'Bisphosphonates — contraindicated if eGFR <30',
        'Tetracyclines, nitrofurantoin — avoid in significant CKD',
        'Opiates — significantly reduced clearance; start low, increase slowly',
        'Starting/increasing ACE/ARB: do not start if K+ >5.0 or acute AKI; recheck U&E at 2 weeks; if eGFR drops >25% or K+ >6.0, stop and review (consider RAS, dehydration, NSAIDs)',
      ],
    },

    // ── ANAEMIA ───────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Anaemia in CKD' },

    {
      type: 'list',
      items: [
        'Normocytic or microcytic anaemia of chronic disease (ACD) — common in CKD; rarely the sole cause if eGFR >30',
        'If eGFR 30–60: investigate haematinics (ferritin, B12, folate) and exclude other causes before attributing to CKD',
        'If eGFR <30 and Hb <100 g/L: refer to nephrology for consideration of erythropoiesis-stimulating agents (ESAs) and IV iron',
        'Ensure adequate iron stores before starting ESA — ferritin >100 µg/L, transferrin saturation >20%',
        'IV iron (e.g. ferric maltol, ferrinject) preferred in CKD as oral iron poorly absorbed and causes GI side effects',
      ],
    },

    // ── NEPHROTIC SYNDROME ───────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Nephrotic Syndrome — Refer Urgently to Renal',
      items: [
        'Urine PCR >300 mg/mmol (not ACR) + oedema + severe hypoalbuminaemia + hyperlipidaemia (TC often >10)',
        'Rare in adults (3/100,000/year); causes include: diabetic nephropathy, IgA nephropathy, focal segmental glomerulosclerosis, membranous nephropathy, minimal change disease',
        'Secondary causes: diabetes, SLE, amyloid, myeloma, drugs (NSAIDs, penicillamine), infections (Hep B/C, HIV)',
        'Massive proteinuria, oedema, HTN → refer all to nephrology urgently; often requires biopsy',
      ],
    },

    // ── REFERRAL CRITERIA ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Referral Criteria — When to Refer to Nephrology' },

    {
      type: 'table',
      headers: ['Indication', 'Action'],
      rows: [
        ['5-year KFRE score >5%', 'Refer to nephrology — requires phosphate and bicarbonate for calculation'],
        ['UACR >70 mg/mmol', 'Refer (all patients with significant proteinuria)'],
        ['UACR >30 mg/mmol + haematuria', 'Refer (dual injury — glomerulonephritis until proven otherwise)'],
        ['Accelerated decline ≥25% eGFR in 1 year (3 readings)', 'Refer urgently — consider RAS, obstruction, acute on chronic'],
        ['Suspected rare cause: RAS, PCKD, GN', 'Refer'],
        ['Poorly controlled hypertension (≥4 agents)', 'Refer'],
        ['Suspected obstruction with hydronephrosis', 'Urology referral'],
        ['eGFR <30 (G4) — prepare for renal replacement', 'Nephrology involvement for planning'],
        ['Nephrotic syndrome', 'Urgent nephrology referral'],
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Refer to Nephrology via e-RS: UHDB Queen\'s Hospital Burton (primary) — Renal & Nephrology department',
        'Alternative: Walsall Manor Hospital (UHB) for general nephrology if patient preference',
        'Patient may prefer alternative local site — discuss at consultation',
        'For suspected obstruction/hydronephrosis: refer to Urology at UHDB Burton',
        'Emergency AKI on CKD or suspected RVT: UHDB Burton A&E',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E (UHDB Burton): rapid deterioration, severe fluid overload (flash pulmonary oedema), anuric AKI, hyperkalaemia causing cardiac symptoms',
        'NHS 111 / same-day GP: marked worsening of breathlessness, ankle swelling, significant reduction in urine output, K+ results >6.0',
        'Red flags for review: rapid eGFR decline >25% in 3 months, new haematuria, uncontrolled HTN, severe anaemia',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — CKD', url: 'https://cks.nice.org.uk/topics/chronic-kidney-disease/' },
        { label: 'NICE NG203 — CKD', url: 'https://www.nice.org.uk/guidance/ng203' },
        { label: 'NHS — Chronic Kidney Disease', url: 'https://www.nhs.uk/conditions/kidney-disease/' },
        { label: 'Kidney Care UK', url: 'https://www.kidneycareuk.org/' },
        { label: 'KFRE Calculator', url: 'https://kidneyfailurerisk.com/' },
        { label: 'Patient.info — CKD', url: 'https://patient.info/kidney-urinary-tract/chronic-kidney-disease-leaflet' },
      ],
    },
  ],
}
