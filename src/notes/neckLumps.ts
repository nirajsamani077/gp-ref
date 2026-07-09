import type { Note } from '../data/notes'

export const neckLumps: Note = {
  id: 'neck-lumps',
  title: 'Neck Lumps',
  subtitle: 'Congenital, inflammatory and malignant causes — the HNSCC 2WW red flags and USS/FNAC',
  tags: ['ent'],

  body: `neck lump lymphadenopathy branchial cyst thyroglossal cyst dermoid cystic hygroma reactive lymph node lymphoma thyroid nodule salivary gland head and neck squamous cell carcinoma HNSCC 2WW ultrasound FNAC persistent unexplained neck lump`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Head & Neck)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Neck Lump', url: 'https://cks.nice.org.uk/topics/neck-lump/' },
        { label: 'ENT UK — Neck Lumps', url: 'https://www.entuk.org/patients/conditions/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'History: duration and change in size, pain, systemic (B) symptoms (fever, night sweats, weight loss), smoking/alcohol, recent infection, and any voice change/dysphagia/otalgia',
        'Examine the lump (site, size, consistency, mobility, fixation, pulsatility) and the whole neck, mouth/oropharynx, thyroid, and other lymph node groups (± hepatosplenomegaly)',
        'A lump that moves on swallowing suggests thyroid; one that moves on tongue protrusion suggests a thyroglossal cyst',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: '2WW Head & Neck Referral',
      items: [
        'An unexplained neck lump in an adult persisting for >3–6 weeks → 2WW suspected head & neck cancer referral',
        'Persistent unexplained cervical lymphadenopathy → consider 2WW haematology (lymphoma) — check FBC/blood film',
        'A persistent unilateral middle-ear effusion, hoarseness >3 weeks, unexplained oral ulceration/lump >3 weeks, or red/white patches in the mouth → head & neck 2WW',
        'Higher risk with smoking/alcohol and increasing age; do NOT falsely reassure a hard, fixed, or growing painless node',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes by Category' },

    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Congenital', 'Branchial cyst (smooth, anterolateral, presents in late childhood/young adult, may become infected/enlarge with URTI, can fistulate); thyroglossal cyst (midline, moves on tongue protrusion); dermoid cyst; cystic hygroma; vascular malformation'],
        ['Inflammatory / infective', 'Reactive lymphadenopathy (viral URTI — the commonest cause, soft/tender/mobile, resolves); bacterial lymphadenitis/abscess; glandular fever; TB (cold abscess); HIV; toxoplasmosis'],
        ['Neoplastic', 'Lymphoma (rubbery, painless, ± B symptoms); metastatic squamous cell carcinoma (hard, fixed — search the upper aerodigestive tract); thyroid cancer; salivary gland tumours (parotid/submandibular)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },

    {
      type: 'list',
      items: [
        'Bloods: FBC and blood film (lymphoma/leukaemia), consider EBV/monospot if glandular fever likely, HIV test, and TFTs if thyroid',
        'Ultrasound of the neck is the first-line imaging, often with fine-needle aspiration cytology (FNAC) or core biopsy — arranged via the 2WW/ENT pathway',
        'Do NOT excise a lymph node in primary care if lymphoma is possible (excisional biopsy is a specialist decision)',
        'Reactive nodes in a well child/young adult with a clear URTI can be safely observed and reviewed; refer if persistent, enlarging, or with red flags',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Head & neck and haematological cancer criteria' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Lymphoma — persistent painless lymphadenopathy' },
        { id: 'glandular-fever', label: 'Glandular Fever', subtitle: 'Common benign cause of cervical lymphadenopathy' },
        { id: 'hyperthyroidism', label: 'Hyperthyroidism & Thyrotoxicosis', subtitle: 'Thyroid swelling — goitre and nodules' },
      ],
    },

  ],
}
