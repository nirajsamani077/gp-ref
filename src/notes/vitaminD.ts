import type { Note } from '../data/notes'

export const vitaminD: Note = {
  id: 'vitamin-d',
  title: 'Vitamin D',
  subtitle: 'Supplementation, deficiency vs insufficiency, loading dose, CKD exception',
  tags: ['endocrine', 'metabolic', 'osteoporosis', 'bones'],

  body: 'vitamin D cholecalciferol colecalciferol deficiency insufficiency loading dose maintenance dose supplement sunlight rickets osteomalacia osteoporosis calcium PHPT primary hyperparathyroidism ALP alkaline phosphatase coeliac malabsorption CKD chronic kidney disease alfacalcidol zoledronate denosumab anti-epileptic AED orlistat breastfeeding pregnancy dark skin institutionalised DEXA',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Vitamin D Basics',
      items: [
        'Mainly from **sunlight** (UVB on skin) + dietary sources (fortified foods, mushrooms, margarine)',
        'Absorbed from skin/gut → **converted in liver** then **kidney** to active form (1,25-OH vitamin D)',
        'Active form regulates **calcium**, essential for bone and muscle strength',
        'Low vitamin D → risk of osteoporosis, myopathy, fatigue',
      ],
    },

    // ── THREE SCENARIOS ──────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Three Clinical Scenarios',
    },
    {
      type: 'list',
      items: [
        '**1. Routine supplementation** — low sunlight exposure, pregnancy, breastfeeding',
        '**2. Check vitamin D level** — high-risk medical condition',
        '**3. Acting on a vitamin D result** — deficiency or insufficiency + check calcium',
      ],
    },

    // ── SCENARIO 1: SUPPLEMENTATION ──────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: '1 — Routine Supplementation (OTC)',
    },
    {
      type: 'table',
      headers: ['Group', 'Dose', 'Timing'],
      rows: [
        ['Known low sun exposure (institutionalised, skin always covered, dark skin)', '400 IU (10 mcg) colecalciferol OTC', 'All year round'],
        ['Pregnant / breastfeeding', '400 IU (10 mcg) OTC', 'All year round'],
        ['Age 5–65 without risk factors', '400 IU (10 mcg) OTC', 'October–March only'],
        ['Infants <1 year (especially breastfed)', '10 mcg (400 IU) daily', 'All year round — critical if exclusively breastfed'],
      ],
      caption: 'Breast milk is low in vitamin D — supplements essential for breastfed infants',
    },

    // ── SCENARIO 2: WHEN TO CHECK ────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: '2 — When to Check Vitamin D Level',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Symptoms Suggesting Deficiency',
      items: [
        '**Children — Rickets:** bone pain, skeletal deformity, myopathy, tetany — **refer paediatrics**',
        '**Adults — Osteomalacia:** TATT, myalgia, fragility fractures — check DEXA if fracture risk',
      ],
    },
    {
      type: 'list',
      items: [
        '**Known osteoporosis** — as part of work-up or before starting non-oral treatments (zoledronate/denosumab): correct vitamin D first to avoid hypocalcaemia (not needed if already on maintenance supplementation)',
        '**Malabsorption:** coeliac disease, Crohn\'s, bariatric surgery',
        '**CKD** — special case (see below)',
        '**Isolated raised ALP** — consider vitamin D deficiency / osteomalacia',
        '**Medications:** anti-epileptics (AEDs), orlistat — impair absorption/conversion',
        '**Hyperparathyroidism (HPT)** — relevant to calcium/vitamin D axis',
      ],
    },

    // ── SCENARIO 3: ACTING ON RESULT ─────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: '3 — Acting on the Vitamin D Result',
    },
    {
      type: 'table',
      headers: ['Level', 'Category', 'Management'],
      rows: [
        [
          '<25 nmol/L',
          '**Deficiency**',
          'Loading dose: **colecalciferol 50,000 IU once weekly × 6 weeks** (total ~300,000 IU)\nThen maintenance: 800 IU OTC daily\nCheck calcium **1 month after** loading dose (correction can unmask PHPT)',
        ],
        [
          '25–50 nmol/L',
          '**Insufficiency**',
          'Maintenance: **800 IU OTC colecalciferol** daily\nCheck calcium intake (use dietary calculator)\nCheck calcium **1 month after** starting',
        ],
        [
          '>50 nmol/L',
          'Sufficient',
          'No treatment needed unless symptomatic or pre-non-oral osteoporosis Rx',
        ],
      ],
      caption: 'Check calcium ~1 month after loading dose — deficiency can mask PHPT by lowering calcium',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Same Loading Dose for Pre-Non-Oral Osteoporosis Treatment',
      items: [
        'Before starting **zoledronate** or **denosumab**, ensure vitamin D adequacy',
        'If not already on supplementation and level unknown → use loading dose protocol above',
        'Starting non-oral osteoporosis treatment with uncorrected vitamin D deficiency risks **severe hypocalcaemia**',
      ],
    },

    // ── WHEN NOT TO GIVE COLECALCIFEROL ─────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'When NOT to Give Colecalciferol',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Contraindications to Standard Colecalciferol',
      items: [
        '**Known hypercalcaemia** — do not give colecalciferol (will worsen)',
        '**CKD Stage 4+ (eGFR <30)** — kidneys cannot hydroxylate to active form; need **alfacalcidol** (1α-hydroxylase bypass) — **initiated by renal team**',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS – Vitamin D deficiency in adults', url: 'https://cks.nice.org.uk/topics/vitamin-d-deficiency-in-adults/' },
        { label: 'NICE PH56 – Vitamin D supplementation', url: 'https://www.nice.org.uk/guidance/ph56' },
        { label: 'RCGP Vitamin D guidance', url: 'https://www.rcgp.org.uk/' },
      ],
    },
  ],
}
