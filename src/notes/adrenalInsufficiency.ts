import type { Note } from '../data/notes'

export const adrenalInsufficiency: Note = {
  id: 'adrenal-insufficiency',
  title: 'Adrenal Insufficiency & Addison\'s Disease',
  subtitle: 'Diagnosis, crisis management, sick day rules, steroid replacement & anabolic steroids',
  tags: ['endocrinology'],

  body: 'adrenal insufficiency Addisons disease primary secondary tertiary cortisol aldosterone hydrocortisone fludrocortisone adrenal crisis sick day rules short synacthen test SST 9am morning cortisol ACTH CRH HPA axis pigmentation hypoglycaemia hyponatraemia hyperkalaemia postural hypotension steroid card medic alert home emergency kit IM injection stress dosing sick day rules anabolic steroids body dysmorphia needle exchange',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Adrenal Crisis — Immediate Management',
      items: [
        'Call 999 — adrenal crisis is life-threatening',
        'If strong clinical suspicion: give Hydrocortisone 100mg IM (succinate or phosphate — NOT acetate) immediately — do NOT wait for blood results',
        'Features: systemically unwell, profound hypotension, postural drop, hypoglycaemia, vomiting, abdominal pain, confusion, coma',
        'Precipitants: acute illness/infection (most common), surgery, trauma, vomiting (prevents oral steroids), missed doses',
        'In hospital: IV hydrocortisone 100mg stat → 50mg every 6 hours; IV saline + dextrose; treat precipitant',
        'GP home kit: Hydrocortisone 100mg IM phosphate or succinate (3–5 vials + 2ml syringe + blue needle)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Types of Adrenal Insufficiency',
    },
    {
      type: 'table',
      headers: ['Type', 'Lesion', 'Common Causes', 'Cortisol', 'Aldosterone', 'ACTH', 'CRH'],
      rows: [
        ['Primary (Addison\'s disease)', 'Adrenal gland destroyed', 'Autoimmune (80%), TB, haemorrhage (Waterhouse–Friderichsen), adrenalectomy, malignant infiltration', 'Low', 'Low', 'High (feedback)', 'High'],
        ['Secondary', 'Pituitary failure', 'Pituitary tumour, surgery, cranial irradiation, hypopituitarism, Sheehan\'s syndrome', 'Low', 'Normal', 'Low', 'High'],
        ['Tertiary (most common in GP)', 'Hypothalamic suppression', 'Exogenous steroid use (≥7.5mg pred for >3–4 weeks), sudden steroid withdrawal', 'Low', 'Normal', 'Low', 'Low'],
      ],
      caption: 'Key distinguishing feature: primary AI causes low aldosterone (postural hypotension, salt craving, hyperkalaemia) and high ACTH (pigmentation). Secondary/tertiary: aldosterone preserved, no pigmentation.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Clinical Features — Stable Addison\'s',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'The 5 Ts (Addison\'s)',
      items: [
        'Tired — profound fatigue, worse in afternoon',
        'Tripping — postural hypotension, dizziness on standing (drop >20 mmHg SBP)',
        'Tearful — low mood, depression, cognitive slowing',
        'Tanned — hyperpigmentation of skin creases, buccal mucosa, friction areas, sun-exposed skin (primary only — due to excess ACTH/MSH)',
        'Thin — weight loss, anorexia, nausea, abdominal pain',
      ],
    },
    {
      type: 'list',
      items: [
        'Salt craving — mineralocorticoid deficiency (primary only)',
        'Bloods: hyponatraemia, hyperkalaemia, hypoglycaemia, hypercalcaemia, eosinophilia',
        'Associated autoimmune conditions: hypothyroidism, T1DM, vitiligo, coeliac disease, pernicious anaemia — screen at diagnosis',
        'Women: adrenal androgens (DHEA) also lost — reduced libido, loss of axillary/pubic hair',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Investigation — Cortisol Pathway',
    },
    {
      type: 'table',
      headers: ['9am Cortisol', 'Interpretation', 'Action'],
      rows: [
        ['<100 nmol/L', 'Likely AI — high risk of crisis', 'Admit; do not delay treatment for further testing'],
        ['100–400 nmol/L', 'Borderline — requires dynamic testing', 'Refer for Short Synacthen Test (SST): 250mcg IV ACTH; cortisol measured at 0 and 30 min'],
        ['>400 nmol/L', 'Adrenal insufficiency highly unlikely', 'Reassure. Exception: if on oestrogen (raises CBG — may give falsely high result)'],
      ],
      caption: 'Short Synacthen Test result: 30-min cortisol ≥18 µg/dL (500 nmol/L) = AI ruled out. <18 µg/dL = AI confirmed → measure ACTH to distinguish primary (high ACTH) from secondary/tertiary (low/normal ACTH).',
    },
    {
      type: 'para',
      text: 'Note: 9am cortisol is the best GP screening test. Test should be done before starting any steroid treatment. If clinically unwell or cortisol <100 — do not wait for SST, treat and admit.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Long-Term Steroid Replacement',
    },
    {
      type: 'image',
      src: '/images/adrenal-hormone-replacement.jpg',
      alt: 'Adrenal hormone replacement doses for primary adrenal insufficiency — glucocorticoid and mineralocorticoid',
      caption: 'Replacement therapy for primary adrenal insufficiency. Glucocorticoid: hydrocortisone 15–25mg daily in 2–3 divided doses (largest in morning). Mineralocorticoid: fludrocortisone 100–200 mcg daily. Initiated by specialist; GP manages ongoing prescribing and monitoring.',
    },
    {
      type: 'table',
      headers: ['Drug', 'Role', 'Dose', 'Timing', 'Notes'],
      rows: [
        ['Hydrocortisone', 'Glucocorticoid replacement', '15–25mg/day in 2–3 divided doses', 'Largest dose on waking (e.g. 10mg AM, 5mg noon, 5mg 4pm). Never take late evening', 'Initiated by endocrinologist. Monitor weight, BP, energy. Lower glucocorticoid potency than prednisolone — less osteoporosis risk'],
        ['Fludrocortisone', 'Mineralocorticoid (aldosterone) replacement', '50–200 mcg OD (start 100 mcg)', 'Morning', 'Primary AI only — not needed in secondary/tertiary. Monitor BP (postural drop = underdose; oedema/hypertension = overdose). Do NOT double dose when sick'],
        ['DHEA', 'Adrenal androgen (women)', '25–50mg OD', 'Morning', 'Not routinely prescribed. Consider if persistent fatigue/low libido despite optimised HC/fludro. Specialist initiation'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'GP monitoring — 6-monthly review',
      items: [
        'Symptoms: energy levels, postural symptoms, mood, pigmentation change',
        'Weight and BP (lying and standing)',
        'U&E (hypo/hyperkalaemia guides fludrocortisone dose)',
        'Check steroid card is current and carried',
        'Confirm home emergency kit is in date and patient/carer trained to use it',
        'Annual flu vaccine (mandatory); one-off pneumococcal vaccine',
        'Free NHS prescription exemption — ensure form PP1 completed',
        'Advise to flag on ambulance register as steroid-dependent condition',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Sick Day Rules & Stress Dosing',
    },
    {
      type: 'table',
      headers: ['Situation', 'Hydrocortisone Adjustment', 'Notes'],
      rows: [
        ['Mild stress (minor emotional stress, strenuous exercise)', 'Small additional dose (4–10mg) — not universally required', 'Not always needed; patient judgement'],
        ['Major emotional stress (bereavement, trauma)', 'Additional daily dose', 'Return to normal when stress resolves'],
        ['Fever >38°C / infection requiring antibiotics', 'Double normal daily dose(s)', 'Continue until fully recovered, then reduce over 1–2 days. Do NOT double fludrocortisone'],
        ['Fever >39°C / severe infection (e.g. pneumonia)', 'Triple normal daily dose(s)', 'Consider hospital admission. If oral not tolerated → IM injection'],
        ['Vomiting or diarrhoea (any cause)', 'Triple oral dose. If vomiting persists and tablets cannot be kept down → IM hydrocortisone 100mg immediately', 'High-risk situation — oral absorption compromised while demand increases. GO TO A&E'],
        ['Surgical procedure / GA', 'Minor surgery: double dose day of procedure. Major surgery: IV hydrocortisone 100mg at induction then 50mg every 6h for 24h', 'Inform surgical/anaesthetic team — ensure steroid cover documented'],
        ['Severe illness or injury', 'IM hydrocortisone 100mg (home kit), then attend A&E', 'Do not delay for assessment'],
      ],
      caption: 'Infections are the most frequent precipitant of adrenal crisis. Maintain sick day doses until fully recovered, then reduce to usual over 1–2 days.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Home Emergency Kit',
    },
    {
      type: 'list',
      items: [
        'Hydrocortisone 100mg IM (phosphate or succinate formulation — NOT acetate, which is slow-release and unsuitable for emergency)',
        '3–5 vials; 2ml syringes; blue (23G) needles',
        'Prescribed to all patients with primary AI and those on steroid replacement for secondary AI',
        'Patient AND a nominated carer/family member must be trained to administer',
        'Prescribe as "Hydrocortisone sodium succinate 100mg powder for solution for injection" (Solu-Cortef) or phosphate equivalent',
        'Check expiry at every 6-monthly review — replace before expiry',
        'If on oral prednisolone (not hydrocortisone): do NOT use sick day rules — seek medical advice; different threshold for parenteral therapy',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Drug interactions — risk of adrenal crisis',
      items: [
        'Enzyme inducers reduce hydrocortisone levels → increased crisis risk: rifampicin, St John\'s Wort, carbamazepine, phenytoin, phenobarbital',
        'Advise patients to report any new medication changes to their endocrinologist',
        'Mitotane (adrenocortical cancer treatment) destroys adrenal tissue — very high replacement doses needed',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Anabolic Steroids',
    },
    {
      type: 'para',
      text: 'Estimated >5% of males use anabolic steroids. Doses are often 10–100× the therapeutic amount. Suppress the HPA axis (causing tertiary adrenal insufficiency on cessation) and carry significant health risks.',
    },
    {
      type: 'table',
      headers: ['Category', 'Effects'],
      rows: [
        ['Reversible effects', 'Acne, fluid retention/oedema, hypertension, aggression ("roid rage"), polycythaemia, dyslipidaemia (low HDL, high LDL), testicular atrophy (while taking), gynaecomastia'],
        ['Irreversible effects', 'Voice deepening (women), male-pattern baldness, cardiomyopathy (left ventricular hypertrophy), tendon rupture, hepatocellular carcinoma, BBV transmission (needle sharing), permanent testicular atrophy'],
        ['Other substances often co-used', 'Fat burners (clenbuterol, thyroxine, ephedrine), peptide hormones (GH, insulin), diuretics (to reduce water weight), aromatase inhibitors'],
      ],
    },
    {
      type: 'list',
      items: [
        'Examine (BP, cardiac, testicular size, acne, gynaecomastia), check baseline bloods (FBC, LFTs, lipids, testosterone, LH, FSH) and ECG',
        'Counsel on health risks and that it is banned in sport — document discussion',
        'Advise stopping — no need to taper anabolic steroids; however expect HPA axis suppression for months after stopping → monitor for adrenal insufficiency symptoms',
        'Signpost to local needle exchange programme',
        'Consider body dysmorphic disorder — refer to mental health if present',
        'Annual follow-up bloods if continues to use',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Addison\'s Disease Self Help Group (ADSHG)', url: 'https://www.adshg.org.uk' },
        { label: 'Barts Endocrinology — Living with Addison\'s', url: 'https://www.bartshealth.nhs.uk/addisons' },
        { label: 'Endocrinology — AI & Exogenous Steroids Patient Info', url: 'https://www.endocrinology.org/media/4142/ai-and-exogenous-steroids_pis_final.pdf' },
        { label: 'Society for Endocrinology — Emergency Guidance', url: 'https://www.endocrinology.org/clinical-practice/clinical-guidance/adrenal-insufficiency/' },
      ],
    },
  ],
}
