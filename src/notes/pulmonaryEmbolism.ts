import type { Note } from '../data/notes'

export const pulmonaryEmbolism: Note = {
  id: 'pulmonary-embolism',
  title: 'Pulmonary Embolism (PE)',
  subtitle: 'PERC, Wells PE score, D-dimer vs CTPA, anticoagulation and PE in pregnancy',
  tags: ['respiratory', 'cardiology'],

  body: `pulmonary embolism PE VTE venous thromboembolism PERC rule Wells PE score D-dimer CTPA CT pulmonary angiogram VQ scan apixaban rivaroxaban LMWH anticoagulation massive PE thrombolysis right heart strain pleuritic chest pain haemoptysis breathlessness tachycardia hypoxia provoked unprovoked malignancy thrombophilia pregnancy PESI`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG158 — VTE Diagnosis & Management', url: 'https://www.nice.org.uk/guidance/ng158' },
        { label: 'NICE CKS — Pulmonary Embolism', url: 'https://cks.nice.org.uk/topics/pulmonary-embolism/' },
        { label: 'Wells PE Score (MDCalc)', url: 'https://www.mdcalc.com/calc/115/wells-criteria-pulmonary-embolism' },
        { label: 'PERC Rule (MDCalc)', url: 'https://www.mdcalc.com/calc/347/perc-rule-pulmonary-embolism' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Think PE — and When to Admit Immediately',
      items: [
        'Consider PE in ANY unexplained breathlessness, pleuritic chest pain, haemoptysis, tachycardia, hypoxia, syncope/dizziness, or unexplained signs of DVT',
        'Massive PE (haemodynamic instability — hypotension, syncope, signs of right heart strain): 999 / blue-light to ED — may need thrombolysis',
        'Hypoxia (SpO₂ <94%), marked tachycardia, or significantly unwell → same-day emergency assessment',
        'If PE suspected but assessment/imaging will be delayed → give interim therapeutic anticoagulation (apixaban or rivaroxaban) unless contraindicated, while arranging urgent assessment',
        'Pregnancy/postpartum: have a low threshold — do NOT use D-dimer (unreliable); refer for imaging (see below)',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnostic Pathway — PERC, Wells, then D-dimer or CTPA' },

    {
      type: 'list',
      items: [
        'Step 1 — In low-risk patients aged <50, apply the PERC rule. If ALL 8 PERC criteria are negative, the probability of PE is <2% and no further testing is needed — consider an alternative diagnosis',
        'PERC criteria (any one positive = cannot exclude PE): age ≥50, HR ≥100, SpO₂ <95%, unilateral leg swelling, haemoptysis, recent trauma/surgery (≤4 weeks), prior VTE, oestrogen use',
        'Note: any patient ≥50 is automatically PERC-positive (age criterion) — go straight to the Wells score',
        'Step 2 — Calculate the two-level Wells PE score (see table)',
        'Wells ≤4 ("PE unlikely"): D-dimer — if negative, PE excluded; if positive, arrange CTPA',
        'Wells >4 ("PE likely"): arrange CTPA directly (do not rely on D-dimer)',
        'If CTPA cannot be done immediately, give interim anticoagulation while awaiting',
        'Use age-adjusted D-dimer in patients >50 (age × 10 µg/L) to improve specificity per local policy',
      ],
    },

    { type: 'heading', level: 2, text: 'Two-Level Wells Score for PE' },

    {
      type: 'table',
      headers: ['Clinical Feature', 'Points'],
      rows: [
        ['Clinical signs and symptoms of DVT (leg swelling + pain on palpation)', '3'],
        ['PE is the most likely diagnosis (or equally likely)', '3'],
        ['Heart rate >100 bpm', '1.5'],
        ['Immobilisation ≥3 days OR surgery in the previous 4 weeks', '1.5'],
        ['Previous DVT/PE', '1.5'],
        ['Haemoptysis', '1'],
        ['Malignancy (treatment ongoing, within 6 months, or palliative)', '1'],
      ],
      caption: 'Score ≤4 = "PE unlikely" → D-dimer (CTPA only if positive). Score >4 = "PE likely" → CTPA. If CTPA contraindicated (renal impairment, contrast allergy) or in pregnancy, use V/Q scan instead.',
    },

    { type: 'heading', level: 2, text: 'Investigations Supporting Assessment' },

    {
      type: 'list',
      items: [
        'CTPA: definitive test in most patients; V/Q (or V/Q SPECT) where CTPA contraindicated (contrast allergy, renal impairment) or to reduce radiation (young women, pregnancy)',
        'ECG: sinus tachycardia is the commonest finding; classic S1Q3T3 and right heart strain (RBBB, right axis, T-wave inversion V1–V4) are uncommon but specific',
        'Baseline bloods before anticoagulation: FBC, U&E, LFT, clotting, and pregnancy test in women of childbearing age',
        'ABG may show type 1 respiratory failure (hypoxia with low CO₂) but is not diagnostic',
        'CXR is often normal — mainly to exclude alternatives (pneumonia, pneumothorax)',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment — Anticoagulation' },

    {
      type: 'callout',
      variant: 'info',
      title: 'First-Line: DOACs',
      items: [
        'Apixaban 10 mg BD for 7 days → 5 mg BD (no LMWH lead-in required)',
        'Rivaroxaban 15 mg BD for 21 days → 20 mg OD (take with food; no LMWH lead-in)',
        'LMWH then dabigatran/edoxaban is an alternative regimen (requires ≥5 days LMWH lead-in)',
        'Use LMWH (or LMWH→warfarin) in: antiphospholipid syndrome (warfarin, target INR 2–3), severe renal impairment, and pregnancy',
        'Malignancy-associated PE: a DOAC or LMWH (DOACs now first-line for many cancers — caution with GI/GU tumours and bleeding risk)',
        'Haemodynamically unstable (massive) PE: thrombolysis (alteplase) — hospital/ED decision',
      ],
    },

    { type: 'heading', level: 2, text: 'Duration & Cause Investigation' },

    {
      type: 'table',
      headers: ['Scenario', 'Duration'],
      rows: [
        ['Provoked PE (transient reversible factor — surgery, immobility, oestrogen)', 'At least 3 months, then stop'],
        ['Unprovoked PE — first episode', 'At least 3 months; consider long-term anticoagulation weighing recurrence vs bleeding risk'],
        ['PE with active cancer', 'Continue while cancer active / on treatment; review'],
        ['Recurrent unprovoked VTE / antiphospholipid syndrome', 'Long-term anticoagulation (warfarin INR 2–3 for APS)'],
      ],
      caption: 'For unprovoked PE: take a history and examine, but do NOT routinely screen for occult cancer with CT-TAP unless symptoms suggest it. Only test for thrombophilia if a first-degree relative has had VTE AND it would change management (not if planning lifelong anticoagulation).',
    },

    { type: 'heading', level: 2, text: 'PE in Pregnancy' },

    {
      type: 'list',
      items: [
        'Have a low threshold — VTE is a leading cause of direct maternal death; symptoms overlap with normal pregnancy',
        'D-dimer is NOT useful (physiologically raised) — do not use it to exclude PE in pregnancy',
        'If DVT symptoms present, do a leg duplex first (if positive, treat and avoid chest imaging)',
        'Imaging: CXR first; then V/Q scan or CTPA (counsel on the small radiation risks — V/Q gives slightly higher fetal dose, CTPA higher maternal breast dose)',
        'Treatment: LMWH (enoxaparin/dalteparin) throughout pregnancy and for ≥6 weeks postpartum (minimum 3 months total) — DOACs and warfarin are avoided in pregnancy',
        'Refer to obstetric medicine / haematology',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'dvt', label: 'DVT', subtitle: 'The other half of VTE — Wells DVT score, anticoagulation, special cases' },
        { id: 'doacs', label: 'DOACs', subtitle: 'Apixaban/rivaroxaban dosing, renal adjustment, reversal' },
        { id: 'antiphospholipid-syndrome', label: 'Antiphospholipid Syndrome', subtitle: 'Use warfarin not DOACs; unprovoked/recurrent VTE in the young' },
        { id: 'lung-cancer', label: 'Lung Cancer', subtitle: 'Malignancy-associated VTE; differential for breathlessness/haemoptysis' },
      ],
    },

  ],
}
