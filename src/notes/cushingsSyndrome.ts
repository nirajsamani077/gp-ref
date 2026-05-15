import type { Note } from '../data/notes'

export const cushingsSyndrome: Note = {
  id: 'cushings-syndrome',
  title: "Cushing's Syndrome",
  subtitle: 'Exogenous vs endogenous, investigation sequence, adrenal incidentaloma and steroid tapering',
  tags: ['endocrine'],

  body: "Cushing's syndrome Cushing's disease cortisol ACTH pituitary adenoma adrenal adenoma ectopic ACTH CRH exogenous steroid moon face buffalo hump purple striae proximal myopathy easy bruising resistant hypertension hypokalaemia diabetes osteoporosis 24-hour urine cortisol dexamethasone suppression test late night salivary cortisol MRI pituitary MRI adrenals endocrine referral adrenal incidentaloma lipid rich non-functioning phaeochromocytoma metanephrines aldosteronoma ARR transsphenoidal surgery steroid tapering adrenal crisis sick day rules",

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: "Cushing's Syndrome — What Every GP Needs to Know",
      items: [
        'Most common cause seen in primary care: EXOGENOUS — long-term systemic corticosteroids (prednisolone, dexamethasone, high-dose inhaled or topical)',
        'Endogenous causes (rare but important): (1) Cushing\'s disease — pituitary ACTH-secreting adenoma (~70% of endogenous cases); (2) Adrenal tumour — cortisol-producing adenoma or carcinoma (~20%); (3) Ectopic ACTH — small cell lung cancer, bronchial carcinoid (~10%)',
        'SUSPECT endogenous Cushing\'s when: multiple features develop in a relatively young patient, or features develop despite minimal steroid use, or hypertension/diabetes resistant to treatment with centripetal obesity',
        'Do NOT investigate for endogenous Cushing\'s in a patient on high-dose exogenous steroids — the tests will be invalid',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features — What to Look For' },

    {
      type: 'table',
      headers: ['Feature', 'Notes / GP Relevance'],
      rows: [
        ['Moon face / facial plethora', 'Round face, flushed complexion; highly characteristic; not caused by simple obesity'],
        ['Central obesity / buffalo hump', 'Truncal fat accumulation with cervical fat pad; thin arms and legs (proximal muscle wasting)'],
        ['Easy bruising / thin skin', 'Spontaneous ecchymoses from minimal trauma; thin, fragile skin; slow wound healing'],
        ['Purple striae', 'Wide (>1 cm), purple or violaceous stretch marks on abdomen, flanks, thighs; normal striae are narrow and pinkish-white — width and colour distinguish Cushing\'s'],
        ['Proximal myopathy', 'Difficulty rising from chair without using arms; difficulty climbing stairs; shoulder weakness — test by asking to sit and stand repeatedly'],
        ['Hypertension', 'Often resistant to treatment; cortisol has mineralocorticoid activity raising BP'],
        ['New or worsening diabetes', 'Cortisol is anti-insulin; frequently causes or dramatically worsens pre-existing diabetes'],
        ['Osteoporosis / vertebral fractures', 'Cortisol suppresses osteoblasts; vertebral crush fractures common — look for height loss, back pain, kyphosis'],
        ['Hypokalaemia (electrolyte)', 'Particularly with ectopic ACTH — high ACTH levels → excess mineralocorticoid effect → low K+'],
        ['Psychiatric features', 'Depression, emotional lability, cognitive impairment; psychosis (less common)'],
        ['Menstrual irregularity / hirsutism', 'In women — adrenal androgen excess causes oligomenorrhoea, acne, hirsutism'],
        ['Recurrent infections', 'Glucocorticoid-mediated immunosuppression; opportunistic infections (Pneumocystis) in very severe cases'],
      ],
    },

    { type: 'heading', level: 2, text: 'Exogenous Cushing\'s — Managing in Primary Care' },

    {
      type: 'list',
      items: [
        'Review indication: is the steroid dose the minimum needed? Could the underlying condition be better controlled with steroid-sparing agents?',
        'Coordinate with relevant specialist: the specialist managing the primary condition (rheumatology, respiratory, dermatology) to explore dose reduction and steroid-sparing options',
        'Gradual reduction: never stop abruptly — risk of adrenal crisis (Addisonian crisis); reduction speed depends on starting dose and duration',
        'Typical taper: if on prednisolone >5 mg/day for >3 weeks → reduce by 2.5–5 mg every 1–4 weeks (guided by specialist); below 5 mg/day → reduce by 1 mg every 4 weeks',
        'Bone protection: ALWAYS prescribe alendronate or risedronate + calcium/vitamin D for patients on ≥7.5 mg prednisolone for >3 months; DEXA scan within 3 months of starting long-term steroids',
        'Screen for steroid-related complications: check BP (every review), HbA1c (annually or when clinically indicated), lipids (annually), depression (PHQ-9)',
        'Sick day rules: if patient vomits or is unable to take steroids → double dose for illness; if unable to absorb orally → emergency hospital for IV/IM hydrocortisone; ensure patient has steroid emergency card',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation Sequence for Endogenous Cushing\'s' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to Endocrinology BEFORE Investigating — Interpretation Is Complex',
      items: [
        'Do NOT start investigations independently — interpretation requires specialist expertise; false positives are common (depression, obesity, alcohol, polycystic ovaries can all raise cortisol)',
        'However, if endocrinology review will be delayed, GP can initiate: overnight dexamethasone suppression test (ODST) — 1 mg dexamethasone at 11 pm; serum cortisol at 9 am next day; if <50 nmol/L = effectively rules out Cushing\'s (low false-negative rate)',
        'ODST false positives: obesity, depression, alcohol excess, enzyme-inducing drugs (carbamazepine, phenytoin) — context is critical',
        '24-hour urinary free cortisol: requires 2–3 collections for reliability; high false-positive rate; interpretation requires specialist',
        'Late-night salivary cortisol: most sensitive screening test in specialist practice; done in endocrinology clinic',
        'Ask about mass effect: headache, diplopia, peripheral visual field loss (bitemporal hemianopia from pituitary macroadenoma) → urgent referral',
      ],
    },

    {
      type: 'table',
      headers: ['Step', 'Test', 'Who Orders', 'Interpretation'],
      rows: [
        ['1st line screening', 'Overnight 1 mg dexamethasone suppression test (ODST)', 'GP or endocrinology', '<50 nmol/L = Cushing\'s excluded; >50 nmol/L = abnormal → endocrinology'],
        ['Confirmatory', '24-hour urinary free cortisol (×2–3) and/or late-night salivary cortisol', 'Endocrinology', 'Elevated in endogenous Cushing\'s (but many false positives)'],
        ['ACTH level', 'Plasma ACTH (8 am, taken carefully — degrades rapidly)', 'Endocrinology', 'Low/suppressed ACTH = adrenal cause; elevated/normal ACTH = pituitary or ectopic'],
        ['Localisation (pituitary)', 'MRI pituitary (high resolution)', 'Endocrinology/radiology', 'Microadenoma visible in ~80%; small size makes identification challenging'],
        ['Localisation (adrenal)', 'CT/MRI adrenals', 'Endocrinology/radiology', 'Adrenal adenoma vs hyperplasia vs carcinoma'],
        ['Localisation (ectopic)', 'CT chest/abdomen/pelvis; FDG-PET if needed', 'Endocrinology/oncology', 'Small cell lung cancer, bronchial carcinoid, pancreatic tumour'],
      ],
    },

    { type: 'heading', level: 2, text: 'Adrenal Incidentaloma — GP Action Required' },

    {
      type: 'list',
      items: [
        'Any adrenal mass found incidentally on imaging (CT/MRI) performed for another reason: ALL require endocrinology referral for assessment',
        'Assess for hormonal activity: screen for (1) Cushing\'s (ODST), (2) phaeochromocytoma (24h urine fractionated metanephrines or plasma metanephrines — do BEFORE any surgery), (3) primary aldosteronism (aldosterone:renin ratio ARR, only if hypertensive or hypokalaemic), (4) sex hormone excess (androgens if virilisation)',
        'Biochemical diagnosis before surgery: always exclude phaeochromocytoma biochemically BEFORE any surgical procedure — unrecognised phaeochromocytoma causes hypertensive crisis under anaesthesia (life-threatening)',
        'If non-functioning AND lipid-rich (<10 HU on CT) AND <4 cm: likely benign adenoma — follow-up imaging at 6–12 months if first incidentaloma (endocrinology-directed)',
        'If size ≥4 cm OR HU >10 (lipid-poor) OR growth on surveillance: higher concern for adrenocortical carcinoma or metastasis — endocrinology MDT and likely surgical resection',
        'In known cancer: adrenal metastasis is common (lung, breast, kidney, melanoma) — always assess in cancer patients with new adrenal mass',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — Acute Adrenal Insufficiency (Addisonian Crisis)',
      items: [
        'At risk: any patient on long-term corticosteroids (≥5 mg prednisolone for >3 weeks), patients with confirmed adrenal insufficiency, post-adrenalectomy or post-pituitary surgery',
        'Triggers: intercurrent illness, vomiting, surgery, trauma — any physiological stress doubles cortisol requirements',
        'Features of adrenal crisis: collapse, profound hypotension, tachycardia, vomiting, confusion, hyponatraemia, hypoglycaemia',
        'Emergency action: 999 or hospital immediately; hydrocortisone 100 mg IM or IV — give before waiting for tests; all GPs should know this treatment',
        'Sick day rules (MUST be given to every patient on long-term steroids): double dose for illness; if vomiting → emergency hospital for injectable hydrocortisone; carry steroid alert card',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Cushing\'s Syndrome', url: 'https://cks.nice.org.uk/topics/cushings-syndrome/' },
        { label: 'Society for Endocrinology — Cushing\'s Guidance', url: 'https://www.endocrinology.org/clinical-practice/clinical-guidance/cushing-syndrome/' },
        { label: 'Society for Endocrinology — Adrenal Incidentaloma', url: 'https://www.endocrinology.org/clinical-practice/clinical-guidance/adrenal-incidentaloma/' },
        { label: 'Pituitary Foundation — Cushing\'s', url: 'https://www.pituitary.org.uk/information/pituitary-conditions/cushings-disease/' },
        { label: 'NHS — Cushing\'s Syndrome', url: 'https://www.nhs.uk/conditions/cushings-syndrome/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Endocrinology (suspected Cushing\'s or adrenal incidentaloma): UHDB Queen\'s Hospital Burton endocrinology — via e-RS; include clinical features, ODST result if done, relevant bloods, imaging report',
        'Alternative: Good Hope Hospital (UHB) endocrinology; New Cross Hospital Wolverhampton endocrinology',
        'Pituitary disease (Cushing\'s disease — definitive): QEHB Birmingham pituitary MDT for transsphenoidal surgery; UHDB Burton coordinates referral',
        'Phaeochromocytoma (urgent): ensure biochemical confirmation (metanephrines) before any surgical referral; endocrinology-urology/surgery MDT',
        'Urgent (visual field loss, severe headache, adrenal crisis): same-day A&E UHDB Burton; call endocrinology on call',
      ],
    },
  ],
}
