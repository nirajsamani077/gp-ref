import type { Note } from '../data/notes'

export const dvt: Note = {
  id: 'dvt',
  title: 'DVT — Diagnosis & Management',
  subtitle: 'Wells score, D-dimer, anticoagulation, superficial thrombophlebitis and VTE in special circumstances',
  tags: ['vascular', 'cardiology'],

  body: 'DVT deep vein thrombosis Wells score D-dimer venous doppler ultrasound LMWH apixaban rivaroxaban anticoagulation thrombophilia provoked unprovoked post-thrombotic syndrome superficial venous thrombophlebitis compression stockings VTE pregnancy travel immobility malignancy',

  content: [

    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Refer Same Day / Call 999',
      items: [
        'Signs of pulmonary embolism — pleuritic chest pain, haemoptysis, unexplained tachycardia, hypoxia, collapse → 999',
        'Bilateral leg swelling with pitting oedema — consider cardiac, renal or hepatic cause',
        'Phlegmasia cerulea dolens — massive DVT causing severe limb ischaemia → 999, time critical',
        'Cannot offer D-dimer within 4 hours of assessment → give interim therapeutic anticoagulation (apixaban/rivaroxaban)',
      ],
    },

    { type: 'heading', level: 2, text: 'Two-Level Wells Score for DVT' },

    {
      type: 'table',
      headers: ['Clinical Feature', 'Points'],
      rows: [
        ['Active cancer (treatment ongoing, within 6 months or palliative)', '+1'],
        ['Paralysis, paresis, or recent plaster immobilisation of the legs', '+1'],
        ['Recently bedridden ≥3 days OR major surgery within 12 weeks requiring general or regional anaesthesia', '+1'],
        ['Localised tenderness along the distribution of the deep venous system', '+1'],
        ['Entire leg swollen', '+1'],
        ['Calf swelling ≥3 cm compared to asymptomatic leg (measured 10 cm below tibial tuberosity)', '+1'],
        ['Pitting oedema confined to the symptomatic leg', '+1'],
        ['Collateral superficial veins (non-varicose)', '+1'],
        ['Previously documented DVT', '+1'],
        ['Alternative diagnosis at least as likely as DVT', '−2'],
      ],
      caption: 'Score ≤1 = DVT unlikely → D-dimer. Score ≥2 = DVT likely → proximal leg vein USS within 4 hours.',
    },

    { type: 'heading', level: 2, text: 'Diagnostic Pathway' },

    {
      type: 'list',
      items: [
        'Score ≤1 (unlikely): D-dimer within 4 hours — if negative, DVT excluded; if positive, arrange proximal USS',
        'Score ≥2 (likely): proximal leg vein duplex USS within 4 hours — if negative and clinical suspicion remains, repeat USS in 6–8 days',
        'Cannot offer test within 4 hours: give interim therapeutic anticoagulation (apixaban or rivaroxaban) whilst arranging — take bloods before starting (FBC, U&E, LFT, clotting) but do not delay treatment waiting for results',
        'Bloods prior to anticoagulation: FBC, U&E, LFT, clotting, pregnancy test in women of childbearing age',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment — Anticoagulation' },

    {
      type: 'callout',
      variant: 'info',
      title: 'First-Line: DOACs (preferred over LMWH + warfarin in most patients)',
      items: [
        'Apixaban 10 mg BD for 7 days → 5 mg BD for at least 3 months (no loading LMWH needed)',
        'Rivaroxaban 15 mg BD for 21 days → 20 mg OD for at least 3 months (no loading LMWH needed)',
        'Both are factor Xa inhibitors; apixaban has less GI side effects; rivaroxaban requires taking with food',
        'Avoid DOACs in: antiphospholipid syndrome (use warfarin, INR 2–3), moderate/severe renal impairment (use LMWH), pregnancy (use LMWH)',
        'LMWH + warfarin: still used in malignancy-associated DVT if DOAC not tolerated, or renal impairment',
      ],
    },

    { type: 'heading', level: 2, text: 'Duration of Anticoagulation' },

    {
      type: 'table',
      headers: ['Scenario', 'Duration'],
      rows: [
        ['Provoked DVT (temporary reversible trigger: surgery, trauma, immobility, oestrogen)', '3 months minimum'],
        ['Unprovoked DVT — first episode, no identified cause', 'At least 3 months; discuss extended treatment based on bleeding risk vs recurrence risk'],
        ['DVT with active malignancy', 'Lifelong or until cancer treated/remission — LMWH or DOAC preferred'],
        ['Recurrent unprovoked DVT', 'Strongly consider lifelong anticoagulation'],
        ['Antiphospholipid syndrome with confirmed DVT', 'Lifelong warfarin (target INR 2–3)'],
      ],
      caption: 'Use a shared decision-making approach. Higher risk of recurrence = male sex, proximal DVT, obesity, strong thrombophilia. Higher risk of bleeding = elderly, previous GI bleed, concurrent antiplatelet.',
    },

    { type: 'heading', level: 2, text: 'Investigating for Underlying Cause' },

    {
      type: 'list',
      items: [
        'Unprovoked DVT: full clinical history and examination — do NOT routinely screen for occult malignancy with CT-TAP unless symptoms suggest it; offer FIT test if not up to date with bowel screening',
        'Thrombophilia screening: only if first-degree relative with documented VTE AND this would change management (i.e. not planning lifelong anticoagulation anyway); most tests invalid whilst anticoagulated',
        'Antiphospholipid antibodies: test if recurrent DVT, unprovoked DVT in young patient, or associated features (recurrent miscarriage, livedo reticularis, autoimmune history)',
        'Cancer-related thrombosis: if malignancy not yet identified, do basic screen — FBC, LFT, urinalysis, PSA in men, mammogram, CXR, abdominal USS — only if clinically indicated',
      ],
    },

    { type: 'heading', level: 2, text: 'Post-Thrombotic Syndrome' },

    {
      type: 'para',
      text: 'Affects up to 40% of patients after DVT due to persistent venous hypertension and valve damage. Features: heaviness, aching, swelling, skin changes (lipodermatosclerosis), and venous ulcers. Graduated compression stockings are no longer routinely recommended to prevent PTS after DVT (NICE 2020 — evidence of benefit is poor). Manage with elevation, exercise, and skin care. Refer to vascular for refractory cases or ulceration.',
    },

    { type: 'heading', level: 2, text: 'Superficial Venous Thrombophlebitis (SVT)' },

    {
      type: 'list',
      items: [
        'Thrombosis of a superficial vein — typically varicose, causing tender, hard, red cord along the vein',
        'Can also be infective (cannula sites), traumatic, or migratory (associated with occult malignancy — Trousseau\'s sign)',
        'Refer ALL for duplex venous USS to exclude DVT extension — DVT co-exists in up to 25%; D-dimer alone is NOT sufficient',
        'Most settle conservatively: topical diclofenac gel + graduated compression stockings',
        'If extensive (≥5 cm) or involving the long saphenous vein near the sapheno-femoral junction: refer vascular — may need fondaparinux 2.5 mg SC OD for 45 days or LMWH to prevent extension',
      ],
    },

    { type: 'heading', level: 2, text: 'DVT in Pregnancy' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Pregnancy — Special Considerations',
      items: [
        'Most DVTs in pregnancy are left-sided (80%) due to compression of left iliac vein by uterus — mimics SPD!',
        'Pelvic vessel DVT: presents like hip/SPD pain, not classic calf swelling — high index of suspicion needed',
        'D-dimer is unreliable in pregnancy (physiologically elevated)',
        'Imaging: proximal USS first; if negative and symptoms persist, MR venography or iliac vein USS',
        'Treatment: LMWH (enoxaparin or dalteparin) throughout pregnancy and 6 weeks postpartum — no DOACs in pregnancy',
        'Refer to obstetric haematology for guidance; anticoagulation clinic involved in management',
      ],
    },

    { type: 'heading', level: 2, text: 'DVT Risk in Travellers' },

    {
      type: 'list',
      items: [
        'Long-haul flights (>4 hours) double DVT risk — attributed to prolonged immobility and low cabin humidity',
        'DVT can be attributed to a flight up to 8 weeks after the journey if no other cause',
        'For most: mobilise frequently during flight, stay hydrated, avoid alcohol and sedatives',
        'Higher risk (previous DVT, thrombophilia, recent surgery, pregnancy, obesity): graduated compression stockings (below-knee, 15–30 mmHg) and consider a single prophylactic dose of LMWH before departure — advice to haematology via A&G if very high risk',
      ],
    },

  ],
}
