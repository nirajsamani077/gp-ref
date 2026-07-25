import type { Note } from '../data/notes'

export const pituitaryProlactinoma: Note = {
  id: 'pituitary-prolactinoma',
  title: 'Pituitary Tumours & Prolactinoma',
  subtitle: 'Mass effect vs hormone excess/deficiency, the 5 Ps of hyperprolactinaemia and dopamine agonists',
  tags: ['endocrine'],

  body: `pituitary tumour adenoma prolactinoma hyperprolactinaemia galactorrhoea bitemporal hemianopia acromegaly Cushing's disease hypopituitarism pituitary apoplexy dopamine agonist cabergoline bromocriptine transsphenoidal MRI visual fields 9am cortisol IGF-1`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hyperprolactinaemia', url: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
        { label: 'Society for Endocrinology', url: 'https://www.endocrinology.org/' },
        { label: 'The Pituitary Foundation', url: 'https://www.pituitary.org.uk/' },
      ],
    },

    {
      type: 'para',
      text: 'Pituitary tumours declare themselves in three ways — mass effect (headache, bitemporal hemianopia), hormone deficiency (hypopituitarism), and hormone excess (most commonly a prolactinoma) — and the primary-care approach is a single fasted 9am pituitary blood panel plus prompt referral. Two things to hold onto: pituitary apoplexy is a same-day emergency, and prolactinomas are one of the few tumours treated medically first, with dopamine agonists shrinking even large tumours.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Pituitary Apoplexy — Emergency',
      items: [
        'Sudden severe headache with visual loss/diplopia (± reduced consciousness) = pituitary apoplexy (haemorrhage/infarction into a pituitary tumour) → admit via A&E for urgent imaging, steroid cover and possible decompression',
        'Any acute bitemporal visual field loss with headache → same-day assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'How Pituitary Tumours Present' },

    {
      type: 'table',
      headers: ['Mechanism', 'Features'],
      rows: [
        ['Mass effect (macroadenoma >1 cm)', 'Headache; bitemporal hemianopia (chiasmal compression); cavernous sinus involvement (CN III/IV/VI palsies)'],
        ['Hypopituitarism (deficiency)', 'GH↓ (fatigue, altered body composition); LH/FSH↓ (erectile dysfunction, low libido, oligomenorrhoea, infertility, anaemia); TSH↓ (secondary hypothyroidism); ACTH↓ (secondary adrenal insufficiency — potentially life-threatening)'],
        ['Hormone excess (functioning)', 'Prolactin → prolactinoma (commonest); GH → acromegaly (large hands/feet, coarse features, sweating, prognathism); ACTH → Cushing\'s disease; TSH → secondary hyperthyroidism (rare)'],
      ],
    },

    {
      type: 'list',
      items: [
        'If suspected, take fasted 9am bloods: prolactin, LH/FSH, testosterone/oestradiol, TSH/free T4, 9am cortisol, and IGF-1 (screens for acromegaly)',
        'Refer endocrinology if abnormal (urgent for any mass effect); investigations include pituitary MRI and formal visual field testing',
        'Management: transsphenoidal surgery for most non-prolactin secreting tumours; replace any hormone deficiencies; surveillance if no mass effect/deficiency',
      ],
    },

    { type: 'heading', level: 2, text: 'Prolactinoma & Hyperprolactinaemia' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Presentation & the "5 Ps" of Raised Prolactin',
      items: [
        'Women: oligo/amenorrhoea, galactorrhoea, infertility; men: erectile dysfunction, low libido, gynaecomastia, galactorrhoea — both: subfertility',
        'Check a 9am fasting prolactin (with the other pituitary bloods): >~400 mU/L is raised (repeat); markedly raised (e.g. >1000–5000) is suggestive of a prolactinoma',
        'Exclude other causes of raised prolactin — the "5 Ps": Pregnancy/breastfeeding, Physiological (stress, exercise, recent examination/venepuncture), PCOS, Primary hypothyroidism (TRH stimulates prolactin — check TFTs), and Prescription drugs (metoclopramide, domperidone, antipsychotics/phenothiazines, haloperidol)',
        'Macroprolactin (an inactive complex) can cause a falsely raised result — the lab can check this',
      ],
    },

    {
      type: 'list',
      items: [
        'First-line treatment is a dopamine agonist (cabergoline weekly, or bromocriptine daily) — highly effective at shrinking the tumour (including decompressing the optic chiasm) and normalising prolactin',
        'Dopamine agonists carry a small risk of cardiac valve fibrosis (with high doses) and impulse-control disorders — baseline ECG/echo and monitoring for higher doses',
        'Fertility/pregnancy: aim to normalise prolactin pre-conception; specialist management in pregnancy (risk of tumour expansion — monitor visual fields); most can breastfeed',
        'Surgery is reserved for dopamine-agonist resistance/intolerance',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'amenorrhoea', label: 'Amenorrhoea & Oligomenorrhoea', subtitle: 'Hyperprolactinaemia as a cause; work-up' },
        { id: 'male-hypogonadism', label: 'Male Hypogonadism', subtitle: 'Secondary hypogonadism from a pituitary lesion' },
        { id: 'cushings-syndrome', label: "Cushing's Syndrome", subtitle: 'ACTH-secreting adenoma (Cushing\'s disease)' },
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'Secondary (ACTH-deficient) adrenal insufficiency' },
        { id: 'brain-tumour', label: 'Brain Tumour & SOL', subtitle: 'Mass effect, visual fields and imaging' },
      ],
    },

  ],
}
