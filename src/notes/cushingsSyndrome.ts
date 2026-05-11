import type { Note } from '../data/notes'

export const cushingsSyndrome: Note = {
  id: 'cushings-syndrome',
  title: "Cushing's Syndrome",
  subtitle: 'Exogenous vs endogenous, clinical features, investigation and adrenal incidentaloma',
  tags: ['endocrine'],

  body: "Cushing's syndrome Cushing's disease cortisol ACTH pituitary adenoma adrenal adenoma ectopic ACTH CRH exogenous steroid moon face buffalo hump purple striae proximal myopathy easy bruising resistant hypertension hypokalaemia diabetes osteoporosis 24-hour urine cortisol dexamethasone suppression test MRI pituitary MRI adrenals endocrine referral adrenal incidentaloma lipid rich non-functioning",

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: "Cushing's Syndrome — Overview",
      items: [
        'Hypercortisolism — either exogenous (steroids) or endogenous (tumour)',
        'Most common cause: EXOGENOUS — long-term systemic corticosteroids (including high-dose inhaled)',
        'Endogenous causes: (1) Cushing\'s disease — pituitary ACTH-secreting adenoma (most common endogenous cause); (2) Adrenal cortisol-producing tumour; (3) Ectopic ACTH tumour (lung/SCLC, carcinoid)',
        'SUSPECT if: unexplained weight gain, refractory hypertension/diabetes, easy bruising, proximal muscle weakness, osteoporosis, or specific clinical features below',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'table',
      headers: ['Feature', 'Notes'],
      rows: [
        ['Moon face / facial plethora', 'Round face with flushed complexion; highly characteristic'],
        ['Central obesity / buffalo hump', 'Central adiposity with dorsocervical fat pad ("buffalo hump"); thin arms and legs'],
        ['Easy bruising / thin skin', 'Spontaneous bruising; fragile skin; slow wound healing'],
        ['Purple striae', 'Wide (>1 cm) purple or violaceous striae — on abdomen, flanks, thighs; normal striae are pinkish-white and narrow'],
        ['Proximal myopathy', 'Difficulty rising from chair or climbing stairs; difficulty lifting arms above head'],
        ['Hypertension', 'Often resistant to treatment; cortisol has mineralocorticoid effects'],
        ['Diabetes / impaired glucose', 'Cortisol is anti-insulin; frequently causes or worsens diabetes'],
        ['Osteoporosis', 'Cortisol suppresses bone formation; vertebral fractures common'],
        ['Hypokalaemia', 'From mineralocorticoid excess — particularly in ectopic ACTH'],
        ['Psychiatric symptoms', 'Depression, anxiety, cognitive impairment, psychosis'],
        ['Menstrual irregularity / hirsutism', 'In women — androgen excess from adrenals'],
        ['Mass effect', 'Headache, visual field defects — pituitary macroadenoma'],
      ],
    },

    { type: 'heading', level: 2, text: 'Exogenous Cushing\'s (Most Common in Primary Care)' },

    {
      type: 'list',
      items: [
        'Caused by supraphysiological doses of systemic corticosteroids — prednisolone, dexamethasone, hydrocortisone',
        'Can also occur with prolonged high-dose inhaled corticosteroids (especially in patients who are CYP3A4 slow metabolisers)',
        'Management: gradually reduce steroid dose to the minimum effective dose; may need steroid-sparing agents (azathioprine, methotrexate) under specialist guidance',
        'MUST NOT stop abruptly if on long-term steroids — risk of Addisonian crisis',
        'Primary care: review dose and indication at every appointment; explore steroid-sparing options with relevant specialist',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigating Endogenous Cushing\'s — Refer First' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to Endocrinology If Clinically Suspected',
      items: [
        'Refer to endocrinology before initiating investigation — interpretation is complex; false positives and negatives are common',
        '24-hour urinary free cortisol (2–3 collections required for reliability): needs normal eGFR; high false-positive rate (depression, obesity, alcohol, diabetes can all raise cortisol)',
        'Overnight dexamethasone suppression test (ODST): 1 mg dexamethasone at 11 pm; cortisol measured at 9 am; if <50 nmol/L = Cushing\'s effectively ruled out (low false-negative rate)',
        'Late-night salivary cortisol: high sensitivity; done in endocrinology',
        'MRI pituitary and/or adrenals: only after biochemical confirmation — arranged by specialist',
        'Ask about mass effect symptoms: headache, diplopia, peripheral visual field loss — pituitary adenoma',
      ],
    },

    { type: 'heading', level: 2, text: 'Adrenal Incidentaloma' },

    {
      type: 'list',
      items: [
        'Any adrenal mass found incidentally on imaging (CT/MRI) — increasingly common due to widespread imaging',
        'ALL adrenal incidentalomas should be referred to endocrinology for MDT assessment',
        'Assess for hormonal activity: screen for Cushing\'s (ODST), phaeochromocytoma (urine/plasma metanephrines), aldosteronoma (ARR), androgens',
        'If non-functioning AND lipid-rich (<10 HU on CT) AND <4 cm: likely benign adrenocortical adenoma — may be followed up or discharged after MDT review',
        'If size ≥4 cm or HU >10 or growth on surveillance: concern for adrenocortical carcinoma or metastasis — further workup and likely surgical resection',
        'Phaeochromocytoma: biochemical diagnosis first (urine/plasma metanephrines) before surgical referral — anaesthetic risk',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Endocrinology referral (suspected Cushing\'s or adrenal incidentaloma): UHDB Queen\'s Hospital Burton endocrinology — via e-RS; include clinical features, relevant bloods (FBC, U&E, glucose), any imaging reports',
        'Alternative: Good Hope Hospital (UHB) endocrinology or New Cross Hospital, Wolverhampton endocrinology',
        'Pituitary disease (Cushing\'s disease): UHDB Burton or Queen Elizabeth Hospital Birmingham (QEHB) pituitary MDT for definitive management',
        'Urgent referral (mass effect symptoms — visual field loss, severe headache): same-day neurosurgery referral via UHDB or QEHB pituitary neurosurgery team',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Cushing\'s Syndrome', url: 'https://cks.nice.org.uk/topics/cushings-syndrome/' },
        { label: 'RCEM — Cushing\'s Guidance', url: 'https://www.endocrinology.org/clinical-practice/clinical-guidance/cushing-syndrome/' },
        { label: 'Society for Endocrinology — Incidentaloma', url: 'https://www.endocrinology.org/clinical-practice/clinical-guidance/adrenal-incidentaloma/' },
        { label: 'NHS — Cushings Syndrome', url: 'https://www.nhs.uk/conditions/cushings-syndrome/' },
      ],
    },
  ],
}
