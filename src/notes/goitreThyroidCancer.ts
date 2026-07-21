import type { Note } from '../data/notes'

export const goitreThyroidCancer: Note = {
  id: 'goitre-thyroid-cancer',
  title: 'Goitre, Thyroid Nodules & Thyroid Cancer',
  subtitle: 'Assessing thyroid enlargement, the 2WW red flags, USS/FNA and papillary/medullary cancer',
  tags: ['endocrine'],

  body: `goitre thyroid nodule thyroid cancer papillary follicular medullary anaplastic MEN2 2WW neck lump hoarseness stridor ultrasound FNA fine needle aspiration thyroidectomy TSH suppression thyroxine radioactive iodine`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Thyroid)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Goitre', url: 'https://cks.nice.org.uk/topics/goitre/' },
        { label: 'British Thyroid Foundation', url: 'https://www.btf-thyroid.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Assessing Thyroid Enlargement' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags & Urgent Referral',
      items: [
        'Stridor / airway compromise from a thyroid mass → urgent A&E assessment',
        '2WW head & neck referral for: an unexplained thyroid lump, or a neck lump/hoarseness that is new or persists >3 weeks — especially with a fixed, hard, or craggy mass',
        'Clinical examination is a poor discriminator of malignancy — refer any unexplained thyroid enlargement for assessment',
        'Higher-risk features: rapid growth, fixation, cervical lymphadenopathy, hoarseness (recurrent laryngeal nerve), age extremes, a history of neck radiotherapy, or a family history of thyroid cancer/MEN2',
      ],
    },

    {
      type: 'list',
      items: [
        'Examine: position, size, consistency, fixation, and whether it moves up on swallowing (thyroid) — and check for lymphadenopathy',
        'Check TFTs in everyone with a goitre/nodule (most are euthyroid; a "hot"/toxic nodule causes hyperthyroidism)',
        'If found incidentally on imaging: examine, check TFTs, and refer 2WW if any concerning feature/risk factor; otherwise refer for assessment',
        'Secondary care performs triple assessment: examination + ultrasound (U-classification of nodules) + fine-needle aspiration cytology (Thy classification) of suspicious nodules',
        'Most euthyroid nodules without malignant features need no treatment — reassure and (per specialist) surveillance',
      ],
    },

    { type: 'heading', level: 2, text: 'Thyroid Cancer Types' },

    {
      type: 'table',
      headers: ['Type', 'Notes'],
      rows: [
        ['Papillary (~80%)', 'Commonest; young adults; spreads to cervical nodes; excellent prognosis'],
        ['Follicular (~10%)', 'Spreads haematogenously (lung/bone); good prognosis'],
        ['Medullary (~5%)', 'Parafollicular C cells → calcitonin; associated with MEN2 (screen for phaeochromocytoma/hyperparathyroidism); genetic testing'],
        ['Anaplastic (rare)', 'Elderly; aggressive, rapidly enlarging, poor prognosis'],
        ['Lymphoma', 'Rare; may arise on a background of Hashimoto\'s thyroiditis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Confirmed Cancer (Specialist)' },

    {
      type: 'list',
      items: [
        'Surgery — hemithyroidectomy or total thyroidectomy, with radioactive iodine ablation of residual/differentiated disease',
        'Lifelong levothyroxine with TSH SUPPRESSION (aim TSH <0.1) as differentiated cancers can be TSH-driven — often higher doses; balance against AF/osteoporosis risk',
        'Complications of thyroid surgery to be aware of: hypoparathyroidism (hypocalcaemia) and recurrent laryngeal nerve palsy (voice change)',
        'Follow-up with thyroglobulin as a tumour marker (in differentiated cancer); signpost CRUK/Butterfly Thyroid Cancer Trust',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hyperthyroidism', label: 'Hyperthyroidism & Thyrotoxicosis', subtitle: 'Toxic nodular goitre and Graves\'' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Hashimoto\'s goitre; levothyroxine dosing' },
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Differential and 2WW pathway for neck masses' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Head & neck cancer referral criteria' },
      ],
    },

  ],
}
