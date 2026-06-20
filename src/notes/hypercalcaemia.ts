import type { Note } from '../data/notes'

export const hypercalcaemia: Note = {
  id: 'hypercalcaemia',
  title: 'Hypercalcaemia',
  subtitle: 'Bones, stones, moans & groans; PTH-driven vs malignancy; when to admit and the role of PTH',
  tags: ['endocrine'],

  body: `hypercalcaemia high calcium corrected calcium PTH parathyroid hormone primary hyperparathyroidism bony metastases myeloma bones stones moans groans nephrogenic diabetes insipidus polyuria thirst constipation IV fluids pamidronate zoledronate bisphosphonate sarcoidosis vitamin D toxicity thiazide milk alkali familial hypocalciuric hypercalcaemia FHH 2WW`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hypercalcaemia', url: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
        { label: 'NICE NG132 — Primary Hyperparathyroidism', url: 'https://www.nice.org.uk/guidance/ng132' },
      ],
    },

    { type: 'heading', level: 2, text: 'Symptoms — "Bones, Stones, Moans & Groans"' },

    {
      type: 'list',
      items: [
        'Bones — bone pain, osteoporosis, fractures',
        'Stones — renal calculi, nephrocalcinosis',
        'Moans — fatigue, depression, confusion, cognitive impairment ("psychic moans")',
        'Groans — abdominal pain, constipation, nausea, anorexia, peptic ulcers, pancreatitis',
        'Polyuria and polydipsia (nephrogenic diabetes insipidus from impaired renal concentrating ability) → dehydration, which further worsens calcium',
        'Severe: drowsiness, coma, cardiac arrhythmia (shortened QT)',
        'Mild hypercalcaemia is often asymptomatic and found incidentally',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 1 — Severity & When to Admit' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admission Thresholds (use CORRECTED calcium)',
      items: [
        'Corrected calcium >3.0 mmol/L → usually admit for IV fluids (0.9% saline rehydration) ± IV bisphosphonate (pamidronate/zoledronate)',
        'Corrected calcium 2.6–2.9 mmol/L WITH symptoms → admit; if asymptomatic → can investigate in primary care',
        'Always use the corrected calcium (adjusted for albumin) — the lab usually reports this',
        'Severe symptoms (confusion, drowsiness, marked dehydration, arrhythmia) at any level → admit',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — The Single Most Important Test: PTH' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Repeat Calcium with PTH',
      items: [
        '~90% of hypercalcaemia is due to either primary hyperparathyroidism or malignancy (bony metastases / myeloma)',
        'PTH is the key discriminator — it should be SUPPRESSED in the face of a high calcium; if it is not, the parathyroids are the problem',
        'Send paired corrected calcium + PTH; also consider TFTs, myeloma screen (protein electrophoresis, serum free light chains), phosphate, magnesium, vitamin D, U&E',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 3 — Interpret PTH' },

    {
      type: 'table',
      headers: ['PTH Level', 'Interpretation', 'Causes & Action'],
      rows: [
        ['Raised, OR inappropriately normal/high-normal (even mid- or below-mid-range with a high calcium)', 'PTH-driven hypercalcaemia', 'Primary hyperparathyroidism (most common) — refer endocrinology; also familial hypocalciuric hypercalcaemia (FHH — check urine calcium:creatinine clearance ratio; benign, avoid surgery), and lithium therapy'],
        ['Low / suppressed', 'Non-PTH-driven hypercalcaemia', 'Malignancy (bony metastases, myeloma, PTHrP-secreting tumours e.g. squamous lung), and rarer causes (sarcoidosis/granulomatous disease, vitamin D toxicity, thyrotoxicosis, thiazides, milk-alkali) → INVESTIGATE; 2WW if malignancy suspected'],
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Hyperparathyroidism' },

    {
      type: 'list',
      items: [
        'Most commonly a single parathyroid adenoma autonomously secreting PTH; usually found incidentally on a raised calcium',
        'Typically: raised (or inappropriately normal) PTH, raised calcium, low/low-normal phosphate',
        'Refer to endocrinology — parathyroidectomy is curative and indicated for symptomatic disease, end-organ damage (renal stones, osteoporosis/fractures, reduced eGFR), significantly raised calcium, or younger age',
        'Conservative management for mild asymptomatic disease: ensure good hydration, avoid thiazides and excess calcium/vitamin D supplements (but do not make patients vitamin D deficient), monitor calcium/renal function/bone density',
        'Cinacalcet (calcimimetic) for those unfit for or declining surgery — specialist-initiated',
      ],
    },

    { type: 'heading', level: 2, text: 'Suspected Malignancy (Low PTH)' },

    {
      type: 'list',
      items: [
        'Low PTH with hypercalcaemia points to malignancy until proven otherwise',
        'Myeloma screen: protein electrophoresis, serum free light chains, urine Bence-Jones, plus FBC, ESR, renal function (CRAB: Calcium, Renal, Anaemia, Bone lesions)',
        'Solid tumours: bony metastases (breast, lung, prostate, renal, thyroid) or PTHrP secretion (squamous cell lung cancer)',
        'Investigate per likely primary and refer on the appropriate 2WW pathway; consider CT/imaging',
        'Granulomatous causes (sarcoidosis, TB) raise calcium via increased 1,25-dihydroxyvitamin D',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Care Management of Mild/Moderate Hypercalcaemia' },

    {
      type: 'list',
      items: [
        'Encourage good oral hydration; review and stop contributing drugs (thiazides, calcium/vitamin D supplements, lithium if feasible — in discussion with prescriber)',
        'Repeat corrected calcium with PTH to characterise the cause before referral',
        'Avoid prolonged immobility (worsens hypercalcaemia)',
        'Safety-net: advise to seek help if increasing confusion, drowsiness, vomiting, or marked thirst/polyuria (dehydration spiral)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myeloma — CRAB features, screen and referral' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Suspected malignancy pathways when PTH is suppressed' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Bone disease in hyperparathyroidism; bisphosphonates' },
        { id: 'vitamin-d', label: 'Vitamin D', subtitle: 'Vitamin D toxicity as a cause; cautious supplementation in PHPT' },
      ],
    },

  ],
}
