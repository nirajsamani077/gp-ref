import type { Note } from '../data/notes'

export const hyperparathyroidism: Note = {
  id: 'hyperparathyroidism',
  title: 'Hyperparathyroidism',
  subtitle: 'Primary, secondary & tertiary — PTH/calcium patterns, parathyroidectomy and monitoring',
  tags: ['endocrine'],

  body: `hyperparathyroidism primary secondary tertiary parathyroid adenoma PTH calcium phosphate vitamin D parathyroidectomy cinacalcet MEN bones stones moans groans osteoporosis DEXA renal stones hypercalcaemia CKD`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG132 — Primary Hyperparathyroidism', url: 'https://www.nice.org.uk/guidance/ng132' },
        { label: 'NICE CKS — Hypercalcaemia', url: 'https://cks.nice.org.uk/topics/hypercalcaemia/' },
        { label: 'Society for Endocrinology', url: 'https://www.endocrinology.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Parathyroid Physiology' },

    {
      type: 'list',
      items: [
        'PTH (from the parathyroid glands) raises serum calcium by increasing gut absorption (via activating vitamin D), increasing renal calcium reabsorption (and phosphate excretion), and mobilising calcium from bone',
        'Understanding the calcium/phosphate/PTH pattern is the key to classifying the type',
      ],
    },

    { type: 'heading', level: 2, text: 'The Three Types' },

    {
      type: 'table',
      headers: ['Type', 'Mechanism', 'Calcium', 'PTH'],
      rows: [
        ['Primary (PHPT)', 'Autonomous parathyroid adenoma (or hyperplasia)', 'High', 'High — OR inappropriately normal (not suppressed); phosphate low/low-normal'],
        ['Secondary', 'Appropriate PTH rise in response to LOW calcium (severe vitamin D deficiency, CKD, malabsorption)', 'Low/normal', 'High'],
        ['Tertiary', 'Long-standing secondary (usually CKD) → autonomous PTH secretion with loss of feedback', 'High', 'High'],
      ],
      caption: 'Replacing vitamin D in secondary hyperparathyroidism can unmask underlying primary disease. Familial hypocalciuric hypercalcaemia (FHH) mimics PHPT but is benign — check the urine calcium:creatinine clearance ratio (low in FHH) before parathyroid surgery.',
    },

    { type: 'heading', level: 2, text: 'Primary Hyperparathyroidism' },

    {
      type: 'list',
      items: [
        'Usually a single parathyroid adenoma; most are found incidentally on a raised calcium and are asymptomatic',
        'Symptoms (when present) are those of hypercalcaemia — "bones, stones, abdominal groans and psychic moans": osteoporosis/fractures, renal stones, constipation/abdominal pain, fatigue, low mood, polyuria/polydipsia',
        'Associated with MEN syndromes (consider if young or with other endocrine tumours)',
        'Classic (late) X-ray signs: "pepperpot skull", subperiosteal erosions of the phalanges (acro-osteolysis), and osteopenia',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Work-up & Referral',
      items: [
        'Confirm with paired corrected calcium + PTH; also check vitamin D, phosphate, magnesium, U&E, and a 24-hour (or spot) urine calcium (to exclude FHH)',
        'Assess end-organ effects: renal function and renal imaging (stones/nephrocalcinosis), and a DEXA scan (bone density)',
        'Refer all suspected primary hyperparathyroidism to endocrinology',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Surgery (parathyroidectomy) is curative and indicated for: symptomatic disease, end-organ damage (renal stones, osteoporosis/fractures, reduced eGFR), corrected calcium ≥2.85 mmol/L, or younger patients',
        'Conservative measures for mild asymptomatic disease: maintain good hydration, avoid thiazides and lithium, keep vitamin D in the normal range (>50 — do not leave the patient deficient), and avoid excessive calcium supplements',
        'Cinacalcet (a calcimimetic — increases the sensitivity of the calcium-sensing receptor, lowering PTH and calcium) for those unfit for or declining surgery',
        'Consider a bisphosphonate (specialist advice) if osteoporosis/raised fracture risk',
        'Monitoring (whether or not operated): at least annual bone profile and U&E, with DEXA every 2–3 years',
        'Secondary/tertiary hyperparathyroidism: treat the cause — replace vitamin D, manage CKD-mineral bone disease (phosphate binders, activated vitamin D) with renal input',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypercalcaemia', label: 'Hypercalcaemia', subtitle: 'The presenting biochemistry — PTH-driven vs malignancy algorithm' },
        { id: 'hypocalcaemia', label: 'Hypocalcaemia & Hypoparathyroidism', subtitle: 'The opposite parathyroid problem' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Bone disease in PHPT — DEXA and bisphosphonates' },
        { id: 'renal-stones', label: 'Renal Stones', subtitle: 'Recurrent stones — screen for hyperparathyroidism' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Secondary/tertiary hyperparathyroidism and CKD-MBD' },
      ],
    },

  ],
}
