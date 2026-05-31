import type { Note } from '../data/notes'

export const osteoporosis: Note = {
  id: 'osteoporosis',
  title: 'Osteoporosis — FRAX, DEXA & Treatment',
  subtitle: 'Risk stratification, bisphosphonates, secondary osteoporosis, steroid-induced, vertebral fractures',
  tags: ['geris', 'metabolic', 'msk'],

  body: 'osteoporosis FRAX DEXA T-score fragility fracture bisphosphonate alendronate risedronate zoledronate denosumab teriparatide romosozumab calcium vitamin D steroid-induced vertebral fracture osteopenia NOGG NICE secondary osteoporosis bone density osteonecrosis jaw atypical femoral fracture',

  content: [

    { type: 'heading', level: 2, text: 'Who to Screen and How' },

    {
      type: 'table',
      headers: ['Patient Group', 'Action'],
      rows: [
        ['All women >65 and men >75 with any risk factor', 'FRAX score → guide DEXA or direct treatment'],
        ['Any age with fragility fracture (any low-impact fracture)', 'FRAX + DEXA; if >75 with hip/vertebral fracture → treat directly with bisphosphonate (IV zoledronate preferred)'],
        ['Age <40 with fragility fracture, POF, or oral prednisolone >7.5 mg/day for ≥3 months', 'DEXA directly — FRAX less valid at young age'],
        ['Osteopenia on DEXA (T-score −1 to −2.5)', 'DEXA ± FRAX every 2–3 years; treat if NOGG guidance suggests benefit, especially if >65'],
      ],
      caption: 'NOGG (National Osteoporosis Guideline Group) guidance helps interpret FRAX scores — use the NOGG calculator to determine whether to reassure, offer DEXA, or treat directly.',
    },

    { type: 'heading', level: 2, text: 'FRAX and DEXA Interpretation' },

    {
      type: 'list',
      items: [
        'FRAX: calculates 10-year probability of major osteoporotic fracture (hip, spine, wrist, shoulder) — uses clinical risk factors with or without BMD',
        'Input bone mineral density (BMD) if DEXA available — improves accuracy; if no DEXA, use clinical FRAX alone',
        'T-score: comparison to young healthy adult peak BMD',
        'T-score > −1.0: normal',
        'T-score −1.0 to −2.5: osteopenia',
        'T-score < −2.5: osteoporosis',
        'Z-score: age-matched comparison — Z-score < −2.0 prompts investigation for secondary cause',
        'Cross reference FRAX result with NOGG thresholds — intervention threshold (treat), assessment threshold (DEXA), and reassurance',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations for Secondary Osteoporosis' },

    {
      type: 'list',
      items: [
        'Bloods: FBC, U&E, bone profile (calcium, phosphate, ALP), LFT, TFT, CRP/ESR, vitamin D, PTH',
        'Myeloma screen: serum protein electrophoresis (SPEP), urinary Bence-Jones protein — especially if bone pain or hypercalcaemia',
        'Consider: coeliac screen (tTG IgA), testosterone in men, oestrogen in premenopausal women with amenorrhoea',
        'Lateral lumbar spine X-ray: can identify asymptomatic vertebral insufficiency fractures — request if: >50 with T-score osteoporotic, long-term steroids, back pain, height loss >4 cm, or kyphosis',
        'If vertebral fracture found: refer OTS urgently — not surgically correctable but markedly increases fracture risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Pharmacological Management' },

    {
      type: 'list',
      items: [
        'Weight-bearing exercise: walking, dancing, resistance training — stimulates bone remodelling; balance/flexibility training reduces falls',
        'Nutrition: adequate dietary calcium (700 mg/day recommended; supplemental if diet inadequate) — use CGEM calcium calculator to assess dietary intake',
        'Supplement only if dietary intake insufficient: calcium carbonate 1000–1200 mg/day AND vitamin D 800–1000 IU/day; take at least 2 hours apart from bisphosphonates',
        'Falls prevention: review medications causing falls (antihypertensives, sedatives, opioids), refer to falls service or OT, consider TEDS/non-slip footwear, Otago exercise programme',
        'Lifestyle: reduce alcohol to <14 units/week; smoking cessation (smoking reduces BMD by 10–20%)',
      ],
    },

    { type: 'heading', level: 2, text: 'Bisphosphonate Treatment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Starting Bisphosphonates — Pre-Treatment Checklist',
      items: [
        'Renal function: check eGFR — contraindicated if eGFR <35 ml/min (oral); zoledronate avoid if eGFR <35',
        'Dental review: osteonecrosis of the jaw (ONJ) risk — advise dental check and complete any invasive dental work before starting; avoid extractions during treatment if possible',
        'Calcium and vitamin D adequacy: correct deficiency before starting (hypocalcaemia risk)',
        'Bone profile: check calcium, phosphate, ALP are not indicating Paget\'s or other pathology',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'Route & Dose', 'Key Notes'],
      rows: [
        ['Alendronate (first line)', 'PO 70 mg weekly', 'Take on empty stomach with full glass of water, remain upright 30 min, no food/drink/medication for 30 min'],
        ['Risedronate (second line PO)', 'PO 35 mg weekly or 150 mg monthly', 'Less GI side effects than alendronate; same administration rules'],
        ['Zoledronate (IV, annual)', 'IV 5 mg once yearly infusion', 'No GI issues; ideal for non-adherence or intolerance to oral; give post-fracture (within 90 days of hip fracture improves survival)'],
        ['Denosumab (SC)', 'SC 60 mg 6-monthly', 'Second-line to bisphosphonates; do NOT stop without specialist review — rebound vertebral fractures can occur; not affected by renal impairment'],
        ['Teriparatide / Romosozumab', 'Daily SC / Monthly SC', 'Anabolic agents — reserved for very high risk (T-score < −4, ≥2 vertebral fractures) via specialist only'],
      ],
      caption: 'ONJ risk: rare but higher with IV bisphosphonates and denosumab; inform patients. Atypical femoral fractures (subtrochanteric): rare but associated with prolonged bisphosphonate use — warn patients of thigh pain and stop if suspected.',
    },

    { type: 'heading', level: 2, text: 'Duration of Treatment' },

    {
      type: 'table',
      headers: ['Risk Category', 'Oral Bisphosphonate', 'IV Zoledronate'],
      rows: [
        ['Standard risk', '5 years then review', '3 years then review'],
        ['High risk (age >70, previous hip or spinal fracture, ≥2 spinal fractures, long-term prednisolone)', '10 years then review', '6 years then review'],
        ['Review at end of duration', 'Repeat DEXA and FRAX — if still high risk, continue or switch; if low risk, bisphosphonate holiday', 'As for oral'],
      ],
      caption: '"Bisphosphonate holiday": after standard duration, if T-score >−2.5 and no new fractures, can consider stopping for 2–3 years and monitoring. Do NOT offer a holiday if still high risk. Denosumab must not be stopped without specialist review — unlike bisphosphonates, there is no residual effect after cessation.',
    },

    { type: 'heading', level: 2, text: 'Steroid-Induced Osteoporosis' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Prednisolone ≥7.5 mg/day for ≥3 months (or equivalent)',
      items: [
        'High risk (age >70, previous fragility fracture, post-menopausal): start bisphosphonate at the same time as steroids — do not wait for DEXA result',
        'Lower risk (younger, pre-menopausal): DEXA first, then treat if osteoporotic',
        'Intermittent courses: also triggers risk — oral prednisolone >30 mg for ≥4 weeks in any 3-month period requires same consideration',
        'Consider prophylaxis with calcium + vitamin D if taking any steroid dose for >3 months',
        'Review steroid dose regularly — use minimum effective dose; consider steroid-sparing agents',
      ],
    },

    { type: 'heading', level: 2, text: 'Osteopenia — Special Considerations' },

    {
      type: 'para',
      text: 'The majority of fragility fractures actually occur in people with osteopenia (T-score −1 to −2.5) because osteopenia is far more prevalent than osteoporosis. SIGN guidance (not NICE) suggests that patients >65 with osteopenia may benefit from 18 months of IV zoledronate — discuss with specialist or use NOGG tool to guide individual decisions. Otherwise: non-pharmacological measures and DEXA monitoring every 2–3 years.',
    },

  ],
}
