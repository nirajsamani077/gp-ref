import type { Note } from '../data/notes'

export const hypocalcaemia: Note = {
  id: 'hypocalcaemia',
  title: 'Hypocalcaemia, Hypoparathyroidism & Hypomagnesaemia',
  subtitle: 'Admission thresholds, the PTH/vitamin D/magnesium algorithm and replacement',
  tags: ['endocrine'],

  body: `hypocalcaemia low calcium corrected calcium hypoparathyroidism hypomagnesaemia low magnesium PTH vitamin D deficiency QTc Chvostek Trousseau tetany paraesthesia calcium carbonate alfacalcidol PPI magnesium replacement renal bone disease`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hypocalcaemia', url: 'https://cks.nice.org.uk/topics/hypocalcaemia/' },
        { label: 'Society for Endocrinology — Emergency Guidance', url: 'https://www.endocrinology.org/clinical-practice/clinical-guidance/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Step 1 — Severity & Admission' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Use the CORRECTED Calcium',
      items: [
        'Corrected calcium <1.8 mmol/L, OR <2.0 with symptoms (perioral/peripheral paraesthesiae, muscle cramps/tetany, carpopedal spasm, seizures, prolonged QTc on ECG) → ADMIT for IV calcium replacement and cardiac monitoring',
        'Signs of neuromuscular irritability: Chvostek\'s sign (facial twitch on tapping the facial nerve) and Trousseau\'s sign (carpopedal spasm on inflating a BP cuff)',
        'Corrected calcium <2.2 (or <2.0 without symptoms) → investigate in primary care',
      ],
    },

    { type: 'heading', level: 2, text: 'Step 2 — Investigate: PTH, Vitamin D, Magnesium' },

    {
      type: 'list',
      items: [
        'Check PTH, vitamin D, magnesium, U&E, LFTs (and phosphate)',
        'Four main causes: true vitamin D deficiency; functional vitamin D deficiency (failure to hydroxylate — renal/liver disease); hypomagnesaemia; and hypoparathyroidism',
      ],
    },

    {
      type: 'table',
      headers: ['PTH', 'Then check', 'Interpretation'],
      rows: [
        ['Raised (appropriate response)', 'Vitamin D <30 nmol/L → true vitamin D deficiency — replace', 'Diet, lack of sun, malabsorption (coeliac)'],
        ['Raised', 'Vitamin D >30 → functional deficiency', 'Usually renal (failure to activate vitamin D) — refer; consider renal bone disease especially if eGFR <30'],
        ['Normal/low (inappropriate)', 'Magnesium <0.7 → hypomagnesaemia — replace and recheck', 'Low Mg impairs PTH secretion/action'],
        ['Normal/low', 'Magnesium >0.7 → hypoparathyroidism — refer endocrine', 'Low Ca with HIGH phosphate'],
      ],
    },

    { type: 'heading', level: 2, text: 'Hypoparathyroidism' },

    {
      type: 'list',
      items: [
        'Rare; biochemically low calcium with HIGH phosphate; causes include post-thyroid/parathyroid surgery, autoimmune, and rarely genetic',
        'Refer endocrinology; risk of renal stones (hypercalciuria with treatment), and associations with CKD, cataracts, basal ganglia calcification and dental problems',
        'Treatment: calcium and active vitamin D (alfacalcidol/calcitriol — vitamin D needs activating); calcium carbonate is preferred (citrate if on a PPI); do NOT take calcium with levothyroxine (impairs absorption); low-salt diet and sometimes a thiazide to reduce urinary calcium/stone risk; PTH analogues under specialist care',
        'Monitoring: 3–6-monthly calcium/Mg/U&E/vitamin D and 6–12-monthly urinary calcium; renal imaging for nephrocalcinosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Hypomagnesaemia' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'A Common, Often-Missed Cause of Low Calcium AND Potassium',
      items: [
        'Magnesium <0.3 mmol/L, or <0.7 with symptoms, → ADMIT (IV replacement); check an ECG same day if symptomatic — long QT/T-wave changes warrant admission',
        'Otherwise replace orally: magnesium aspartate ~10 mmol sachets 1–2/day (avoid if eGFR <30; often causes diarrhoea); recheck after 1–2 weeks',
        'You cannot correct hypocalcaemia or hypokalaemia until the magnesium is replaced',
        'Causes: GI loss/malabsorption (coeliac, laxatives, diarrhoea), and renal loss (PPIs — a common culprit, loop/thiazide diuretics, osmotic diuresis in hyperglycaemia, alcohol)',
        'If persistent despite correcting the cause → endocrine advice',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypercalcaemia', label: 'Hypercalcaemia', subtitle: 'The opposite end — PTH-driven vs malignancy' },
        { id: 'hyperparathyroidism', label: 'Hyperparathyroidism', subtitle: 'Parathyroid physiology and the PTH axis' },
        { id: 'vitamin-d', label: 'Vitamin D', subtitle: 'Deficiency assessment and replacement regimens' },
        { id: 'hypokalaemia', label: 'Hypokalaemia', subtitle: 'Hypomagnesaemia causes refractory hypokalaemia too' },
      ],
    },

  ],
}
