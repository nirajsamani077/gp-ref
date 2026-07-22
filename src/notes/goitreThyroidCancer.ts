import type { Note } from '../data/notes'

export const goitreThyroidCancer: Note = {
  id: 'goitre-thyroid-cancer',
  title: 'Goitre, Thyroid Nodules & Thyroid Cancer',
  subtitle: 'Assessing thyroid enlargement, the 2WW red flags, triple assessment (USS/FNA) and cancer types',
  tags: ['endocrine'],

  body: `goitre thyroid nodule thyroid cancer papillary follicular medullary anaplastic lymphoma MEN2 2WW neck lump hoarseness stridor recurrent laryngeal nerve ultrasound U-classification FNA fine needle aspiration Thy classification thyroidectomy TSH suppression levothyroxine radioactive iodine thyroglobulin calcitonin`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Thyroid enlargement (goitre) and nodules are common and usually benign, but a minority harbour cancer. Clinical examination is a poor discriminator of malignancy, so the emphasis is on recognising red flags, checking thyroid function, and referring appropriately for triple assessment. Most thyroid cancers are differentiated and have an excellent prognosis when treated.',
    },

    { type: 'heading', level: 2, text: 'Assessing Thyroid Enlargement' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags & Urgent Referral',
      items: [
        'Stridor or airway compromise from a thyroid mass → urgent A&E assessment.',
        '2WW head & neck referral for: an unexplained thyroid lump, or a neck lump/hoarseness that is new or persists >3 weeks — especially with a fixed, hard or craggy mass.',
        'Higher-risk features: rapid growth, fixation, cervical lymphadenopathy, hoarseness (recurrent laryngeal nerve involvement), age extremes, a history of neck/childhood radiotherapy, or a family history of thyroid cancer/MEN2.',
      ],
    },
    {
      type: 'list',
      items: [
        'Examine: position, size, consistency, fixation, whether it moves up on swallowing (thyroid) — and check for cervical lymphadenopathy.',
        'Check TFTs in everyone with a goitre/nodule (most are euthyroid; a "hot"/toxic nodule causes hyperthyroidism and is very rarely malignant).',
        'Secondary care performs TRIPLE ASSESSMENT: examination + ultrasound (U1–U5 classification) + fine-needle aspiration cytology (Thy1–Thy5) of suspicious nodules.',
        'Most euthyroid nodules without malignant features need no treatment — reassure and follow the specialist surveillance plan.',
      ],
    },

    { type: 'heading', level: 2, text: 'Thyroid Cancer Types' },
    {
      type: 'table',
      headers: ['Type', 'Notes'],
      rows: [
        ['Papillary (~80%)', 'Commonest; younger adults; spreads to cervical nodes; excellent prognosis'],
        ['Follicular (~10%)', 'Spreads haematogenously (lung/bone); good prognosis; needs excision (FNA cannot distinguish adenoma from carcinoma)'],
        ['Medullary (~5%)', 'Parafollicular C cells → CALCITONIN marker; associated with MEN2 (screen for phaeochromocytoma/hyperparathyroidism); offer genetic testing'],
        ['Anaplastic (rare)', 'Elderly; aggressive, rapidly enlarging, poor prognosis; may present with airway compromise'],
        ['Lymphoma (rare)', 'May arise on a background of Hashimoto\'s thyroiditis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Confirmed Cancer (Specialist)' },
    {
      type: 'list',
      items: [
        'Surgery — hemithyroidectomy or total thyroidectomy, with radioactive iodine ablation of residual/differentiated disease.',
        'Lifelong levothyroxine with TSH SUPPRESSION (aim TSH <0.1 in higher-risk differentiated cancer, as they can be TSH-driven) — often higher doses; balance against AF and osteoporosis risk.',
        'Complications of thyroid surgery to counsel about: hypoparathyroidism (hypocalcaemia — check calcium) and recurrent laryngeal nerve palsy (voice change).',
        'Follow-up uses thyroglobulin as a tumour marker in differentiated cancer (calcitonin/CEA in medullary); signpost the Butterfly Thyroid Cancer Trust.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Thyroid)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Goitre', url: 'https://cks.nice.org.uk/topics/goitre/' },
        { label: 'British Thyroid Foundation', url: 'https://www.btf-thyroid.org/' },
        { label: 'Butterfly Thyroid Cancer Trust', url: 'https://www.butterfly.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hyperthyroidism', label: 'Hyperthyroidism & Thyrotoxicosis', subtitle: 'Toxic nodular goitre and Graves\'' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Hashimoto\'s goitre; levothyroxine dosing' },
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Differential and 2WW pathway for neck masses' },
        { id: 'phaeochromocytoma', label: 'Phaeochromocytoma', subtitle: 'MEN2 association with medullary thyroid cancer' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Head & neck cancer referral criteria' },
      ],
    },

  ],
}
