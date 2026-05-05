import type { Note } from '../data/notes'

export const gout: Note = {
  id: 'gout',
  title: 'Gout & Hyperuricaemia',
  subtitle: 'Acute attack treatment, urate-lowering therapy and long-term management',
  tags: ['msk', 'rheumatology'],

  body: 'gout hyperuricaemia uric acid urate crystals colchicine allopurinol febuxostat NSAID prednisolone 1st MTP first metatarsophalangeal joint tophi joint aspiration pseudogout calcium pyrophosphate monosodium urate attack flare renal calculi kidney stones diet purine alcohol beer seafood red meat RICE elevation dehydration septic arthritis differential diagnosis',

  content: [

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Recognising Gout',
      items: [
        'Classic: rapid onset (overnight) severe pain, swelling, warmth and redness of 1st metatarsophalangeal joint (big toe)',
        'Also: midfoot, ankle, knee (rarely polyarticular)',
        'Peripheral/cooler joints affected preferentially — urate crystallises at lower temperatures',
        'Tophi: chalky white deposits over joints, ears, Achilles — indicate chronic or poorly controlled gout',
        'Triggers: high-purine foods (red meat, offal, seafood), beer/alcohol, dehydration, diuretics (especially thiazides), aspirin (low-dose), sudden illness or surgery',
        'Risk factors: CKD, HTN, metabolic syndrome, drugs (thiazides, low-dose aspirin, ciclosporin)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Differential Diagnosis — Exclude Before Treating',
      items: [
        'Septic arthritis — hot, swollen joint with fever and systemically unwell: admit urgently for joint aspiration and IV antibiotics',
        'Pseudogout (calcium pyrophosphate deposition) — knee/wrist more common than toe; similar appearance; managed differently (aspiorin/NSAIDs/colchicine); confirm with X-ray (chondrocalcinosis)',
        'Reactive arthritis — following infection (GI/GU), often asymmetric oligoarthritis',
        'Inflammatory arthritis (RA, psoriatic) — polyarticular, symmetrical, morning stiffness',
        'If in doubt: joint aspiration + crystals under polarised light → negatively birefringent needle-shaped crystals = gout; positive birefringent rhomboid crystals = pseudogout',
      ],
    },

    { type: 'heading', level: 2, text: 'Examination and Investigations' },

    {
      type: 'list',
      items: [
        'Examine all involved joints — assess for septic joint (fever, systemically unwell, severe limitation of movement)',
        'If significant systemic upset, unable to weight-bear, or large effusion (e.g. knee): admit for joint aspiration, X-ray and exclusion of septic arthritis',
        'Bloods: uric acid (check 3–4 weeks AFTER attack — falsely low/normal during acute attack), U&E, eGFR, FBC, glucose, lipids, CRP',
        'X-ray: may show soft tissue swelling in acute attack; tophi, punched-out erosions in chronic gout',
        'Urine: 24-hour urate if recurrent disease or considering uricosuric agents',
      ],
    },

    // ── ACUTE TREATMENT ───────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Acute Attack Treatment' },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Notes'],
      rows: [
        ['Colchicine', '500 mcg BD–QDS for up to 3 days (total max 6 mg per course)', 'Gout-specific — produces diagnostic clear response within 24–48 hours if gout. Safe in CKD (eGFR >15, but reduce dose). Common SE: diarrhoea and vomiting (limit dose)'],
        ['NSAID (e.g. naproxen)', 'Naproxen 500 mg BD with PPI cover', 'Alternative or adjunct to colchicine. Avoid in CKD, peptic ulcer, anticoagulation'],
        ['Colchicine + NSAID combined', 'As above — use together in severe attacks', 'Combination more effective than either alone for severe attacks'],
        ['Prednisolone', '15–20 mg/day for 5 days (taper over further 5 days)', 'Use if CKD (eGFR <15) or unable to tolerate colchicine/NSAIDs; or joint aspiration + intra-articular corticosteroid for large joint'],
        ['RICE', 'Rest, Ice, Compression, Elevation', 'Supportive — cooling reduces inflammation and pain; avoid pressure on joint'],
      ],
      caption: 'DO NOT start allopurinol or change urate-lowering therapy dose during an acute attack — this can prolong or worsen the flare. Continue existing urate-lowering therapy if already prescribed.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit to Hospital if…',
      items: [
        'Systemically unwell (fever, rigors) with hot swollen joint — exclude septic arthritis urgently',
        'Unable to weight-bear significantly impairs mobility',
        'Large joint effusion (e.g. knee) requiring aspiration for diagnosis and treatment',
        'Septic arthritis cannot be confidently excluded',
      ],
    },

    // ── URATE-LOWERING THERAPY ────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Urate-Lowering Therapy (ULT) — Long-Term Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'When to Offer Urate-Lowering Therapy',
      items: [
        'Check serum urate 3–4 weeks after acute attack (falsely low during attack) — if >0.36 mmol/L, confirms hyperuricaemia',
        'First attack + low risk: counsel regarding diet, lifestyle and allopurinol; offer if patient wishes',
        'Recurrent attacks (≥2/year), tophi, CKD, urate renal calculi, or joint damage: OFFER allopurinol',
        'Target urate: <0.36 mmol/L (or <0.30 mmol/L if tophi present)',
        'Check urate every 4 weeks when titrating; annually once stable',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Key Points'],
      rows: [
        ['Allopurinol (first-line)', 'Start 100 mg OD; increase by 100 mg every 4 weeks until target urate achieved (usual range 200–300 mg; max 900 mg)', 'ALWAYS start with colchicine cover (500 mcg OD or BD) for 3–6 months to prevent mobilisation flare. HLA-B*5801 screening before starting if South/East Asian ethnicity (risk of SJS). Dose-reduce in CKD. Interaction with azathioprine (fatal — check before prescribing).'],
        ['Febuxostat', '80–120 mg OD', 'Use if allopurinol not tolerated or target urate not achieved on maximum dose. Refer to rheumatology first. Recent evidence of slightly increased cardiovascular events vs allopurinol — caution in CVD'],
      ],
      caption: 'Paradox: when starting allopurinol, early gout attacks are common (mobilising crystals) — reassure patient this is expected and means treatment is working. Always co-prescribe colchicine cover for at least 3–6 months. Once urate is stable and target achieved: annual urate check and review of CV/renal risk.',
    },

    // ── LIFESTYLE ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Lifestyle Advice' },

    {
      type: 'list',
      items: [
        'Reduce high-purine foods: red meat, offal, shellfish, oily fish (sardines, anchovies)',
        'Avoid beer and spirits — fructose in beer promotes urate production; gin/vodka less harmful',
        'Adequate hydration (≥2 L/day) — reduces urate crystallisation',
        'Weight loss if overweight — reduces urate levels',
        'Cherry extract / tart cherries — some evidence for reducing flare frequency',
        'Review medications: avoid thiazide diuretics if possible (switch to amlodipine or ARB for HTN); stop low-dose aspirin if clinically appropriate',
        'Manage underlying CVD risk: HTN, diabetes, dyslipidaemia (all increase gout risk and are worsened by it)',
      ],
    },

    // ── LOCAL REFERRAL ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Rheumatology: UHDB Queen\'s Hospital Burton — primary rheumatology referral for South Staffordshire',
        'Alternative: Good Hope Hospital (UHB) or Walsall Manor Hospital for rheumatology if patient preference',
        'Indications for referral: diagnostic uncertainty (septic arthritis cannot be excluded), allopurinol failure or intolerance, recurrent tophi, febuxostat initiation, polyarticular gout, renal urate calculi',
        'Joint aspiration: can be arranged via MSK/radiology at UHDB Burton or Cannock Chase Hospital',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    // ── SAFETY NETTING ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When to Act Urgently',
      items: [
        '999 / A&E: hot swollen joint + fever + systemically unwell — septic arthritis is a medical emergency requiring IV antibiotics and surgical drainage',
        'Same-day GP: severe attack not improving after 24 hours of colchicine, new fever during an attack, worsening despite treatment',
        'Red flags: failure to improve within 24–48 hours of starting colchicine (consider alternative diagnosis), multiple joints involved acutely (polyarticular septic arthritis or reactive arthritis)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Gout', url: 'https://cks.nice.org.uk/topics/gout/' },
        { label: 'NICE NG219 — Gout', url: 'https://www.nice.org.uk/guidance/ng219' },
        { label: 'BSR — Gout Guidelines', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines/gout' },
        { label: 'Versus Arthritis — Gout', url: 'https://www.versusarthritis.org/about-arthritis/conditions/gout/' },
        { label: 'NHS — Gout', url: 'https://www.nhs.uk/conditions/gout/' },
      ],
    },
  ],
}
