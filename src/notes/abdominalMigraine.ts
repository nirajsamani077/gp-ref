import type { Note } from '../data/notes'

export const abdominalMigraine: Note = {
  id: 'abdominal-migraine',
  title: 'Abdominal Migraine',
  subtitle: 'Episodic functional abdominal pain in children — diagnosis, management and related conditions',
  tags: ['paediatrics', 'gastroenterology'],

  body: `abdominal migraine children paediatric episodic abdominal pain cyclical vomiting gut brain axis functional disorder red flags photophobia nausea vomiting pallor periumbilical pain school absence FHx family history migraine pizotifen sumatriptan intranasal acute prophylaxis triggers avoid dark quiet room paracetamol ibuprofen functional dyspepsia IBS irritable bowel syndrome constipation CMPA coeliac TTG UTI DKA dip urine recurrent belly ache tummy ache`,

  content: [
    {
      type: 'linkrow',
      links: [
        { label: '🔗 National Migraine Centre — Abdominal Migraine', url: 'https://www.nationalmigrainecentre.org.uk/understanding-migraine/factsheets-and-resources/abdominal-migraine/' },
      ],
    },

    // ── OVERVIEW ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'What is Abdominal Migraine?',
      items: [
        'Episodic, severe periumbilical pain lasting 1–72 hours with complete resolution between attacks',
        'Affects ~5% of children; F > M; strong family history of migraine',
        'Gut–brain axis disorder — not an organic GI condition',
        'Often no headache — migraine manifests as abdominal pain in children',
        'Many will develop typical headache migraine in later childhood/adolescence',
        'Most children grow out of it by age 10–12 — reassurance is key',
        'Chronic/recurrent abdominal pain accounts for 2–4% of GP visits and 50% of paediatric gastroenterology referrals',
      ],
    },

    // ── FLOWCHART IMAGE ───────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Abdominal Pain in a Child — Diagnostic Pathway',
    },
    {
      type: 'image',
      src: '/images/F1.large.jpg',
      align: 'full',
      alt: 'Flowchart: abdominal pain in a child. Red flags → acute (emergency referral) or chronic (investigate). No red flags → consider abdominal migraine or other functional abdominal pain.',
      caption: 'Key decision: red flags present? If yes, emergency referral or investigate. If no, consider functional diagnoses including abdominal migraine, functional dyspepsia, IBS.',
    },

    // ── RED FLAGS ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Step 1 — Rule Out Red Flags',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Do Not Miss',
      items: [
        'Acute abdomen — peritonism, guarding, rebound tenderness → emergency referral',
        'DKA — dip urine for ketones and glucose; check BM; fruity breath; weight loss, polydipsia',
        'Recurrent UTI — always dip urine in a child with abdominal pain (MSU if positive dipstick)',
        'CMPA (cow\'s milk protein allergy) — particularly <2 years; diarrhoea, vomiting, eczema, poor weight gain',
        'Coeliac disease — check anti-TTG IgA + total IgA; diarrhoea, faltering growth, bloating',
        'Crohn\'s disease — perianal disease, mouth ulcers, weight loss, diarrhoea, blood PR; check CRP, ESR, faecal calprotectin',
        'Malignancy — weight loss, unexplained anaemia, abdominal mass, lymphadenopathy, drenching night sweats',
        'Appendicitis — migration of pain to RIF, Rovsing\'s sign, guarding; McBurney\'s point tenderness',
      ],
    },
    {
      type: 'table',
      headers: ['Investigation', 'Excludes', 'Notes'],
      rows: [
        ['Urine dipstick + MSU', 'UTI, DKA, haematuria', 'Do in every child with abdominal pain — cheap and quick'],
        ['BG / blood ketones', 'DKA', 'If unwell, weight loss, polyuria/polydipsia'],
        ['FBC, CRP, ESR', 'Infection, IBD, malignancy', 'Anaemia + raised inflammatory markers → investigate further'],
        ['Anti-TTG IgA + total IgA', 'Coeliac disease', 'Total IgA first — IgA deficiency gives false-negative TTG'],
        ['Faecal calprotectin', 'IBD (Crohn\'s/UC)', 'Raised (>50 µg/g) → refer paediatric gastroenterology'],
        ['USS abdomen', 'Appendicitis, ovarian pathology, lymphadenopathy', 'If recurrent or diagnostic uncertainty'],
      ],
    },

    // ── DIAGNOSIS ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Step 2 — Make a Positive Diagnosis',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Rome IV Diagnostic Criteria (all must be met, ≥2 episodes in 6 months)',
      items: [
        '1. Paroxysmal episodes of acute periumbilical, midline, or diffuse abdominal pain lasting ≥1 hour',
        '2. Episodes interfere with normal activities',
        '3. Stereotyped pattern and symptoms in each attack for the individual patient',
        '4. Pain associated with ≥2 of: anorexia, nausea, vomiting, headache, photophobia, pallor',
        '5. Completely symptom-free between episodes (normal exam and development between attacks)',
        '6. No other diagnosis explains the symptoms after appropriate evaluation',
      ],
    },
    {
      type: 'para',
      text: 'Make a positive diagnosis — do not frame this as "nothing wrong". Explain the gut–brain axis: the nervous system of the gut (enteric nervous system) is highly sensitive to stress, hormones, and triggers, causing real pain without structural disease. Validate the child\'s experience and empower them.',
    },

    // ── MANAGEMENT ───────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Management',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Acute Attack',
    },
    {
      type: 'table',
      headers: ['Treatment', 'Detail', 'Notes'],
      rows: [
        ['Rest in dark, quiet room', '80% of attacks resolve with rest alone', 'First-line; reassure parents this is effective'],
        ['Paracetamol or ibuprofen', 'Standard doses; give early in attack', 'Take at onset — waiting until pain is severe reduces effectiveness'],
        ['Domperidone', 'Helps gastric motility; reduces nausea, vomiting, abdominal pain', 'Use caution — restricted use in UK; short-term only; avoid if cardiac risk'],
        ['Intranasal sumatriptan', '10 mg each nostril (2 mg/kg max); licensed >12 years', 'Consider if simple analgesia fails; off-label in younger children — specialist advice'],
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Prophylaxis (if frequent/disabling attacks)',
    },
    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Notes'],
      rows: [
        ['Pizotifen', '0.25 mg BD, increasing to 0.5 mg BD (max 1.5 mg/day)', 'First-line preventative; takes 4–6 weeks to work; review after 3 months; side effects: weight gain, drowsiness'],
        ['Propranolol', '10–20 mg BD–TDS (if ≥12 years)', 'Alternative if pizotifen not tolerated; avoid in asthma'],
        ['Amitriptyline', '10 mg ON (low dose)', 'Consider if anxiety/sleep component; specialist or GP with interest'],
        ['Cyproheptadine', '0.25 mg/kg/day divided doses', 'Used in younger children; appetite stimulant — useful if poor weight gain'],
      ],
      caption: 'Prophylaxis indicated if ≥3 attacks/month, or attacks significantly disrupting school/life. Discuss with paediatrics or GP with special interest before initiating.',
    },

    // ── LIFESTYLE ─────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 3,
      text: 'Lifestyle & Non-Pharmacological',
    },
    {
      type: 'table',
      headers: ['Area', 'Advice'],
      rows: [
        ['Diet', 'Regular meals; slow-release energy foods (wholegrains, oats); avoid skipping meals; add a bedtime snack if attacks occur at night; avoid excessive refined carbohydrates/sugary drinks'],
        ['Hydration', 'Adequate fluids throughout the day; ensure hydrated before and after exercise'],
        ['Sleep', 'Consistent bedtime routine; good sleep hygiene — disrupted sleep is a key trigger'],
        ['Triggers diary', 'Abdominal pain diary: record attacks, duration, associated symptoms, possible triggers (stress, menstrual cycle, foods, dehydration, sleep)'],
        ['Stress & school', 'Acknowledge triggers; relaxation techniques, mindfulness, CBT if available; encourage continued school attendance'],
        ['Avoid overmedicalising', 'Avoid repeated A&E visits and investigations — they reinforce illness behaviour; have an agreed home management plan'],
      ],
    },

    // ── RELATED CONDITIONS ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Related Functional Abdominal Pain Conditions',
    },
    {
      type: 'table',
      headers: ['Condition', 'Definition', 'Key Feature'],
      rows: [
        ['Abdominal migraine', 'Episodic periumbilical pain ≥1h with migraine features (photophobia, nausea, pallor)', 'Episodic with symptom-free intervals; FHx migraine'],
        ['Functional dyspepsia', 'Upper abdominal pain/discomfort with no change in stool consistency or frequency', 'Epigastric; no relief with defaecation; consider H. pylori if persistent'],
        ['Irritable bowel syndrome (IBS)', 'Abdominal pain ≥1×/week for ≥2 months + associated change in stool form or frequency', 'Change in bowel habits; improved or worsened by defaecation'],
        ['Functional abdominal pain syndrome', 'Pain >25% of the time not meeting criteria above; associated with headache, limb pain, difficulty sleeping', 'Most debilitating; requires biopsychosocial approach; pain persists between episodes'],
        ['Cyclical vomiting syndrome', 'Stereotyped episodic vomiting lasting hours to days with complete resolution between episodes', 'Overlap with abdominal migraine; same spectrum; same management principles'],
      ],
      caption: 'All are gut–brain axis disorders. Management principles are similar: positive diagnosis, lifestyle, psychological support, and avoiding overmedicalisation.',
    },

    // ── PROGNOSIS / REFERRAL ──────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: 'Prognosis, School & Referral',
      items: [
        'Most children improve significantly by age 10–12; many transition to headache migraine in adolescence',
        'Early positive diagnosis dramatically reduces unnecessary investigations and surgery',
        'Letter to school: explain the diagnosis and that child may need to go home/lie down during an attack — this reduces anxiety and teacher conflict',
        'Encourage normal activity between attacks — avoid secondary disability from illness behaviour',
        'Refer to paediatrics/paediatric gastroenterology if: red flags, diagnostic uncertainty, severe or increasing frequency, failure of 2 prophylactic agents, or significant school absence',
        'Psychological support (CAMHS referral) if significant anxiety, depression, or school refusal component',
      ],
    },
  ],
}
