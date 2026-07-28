import type { Note } from '../data/notes'

export const neckLumps: Note = {
  id: 'neck-lumps',
  title: 'Neck Lumps',
  subtitle: 'Congenital, inflammatory and malignant causes — the HNSCC 2WW red flags and USS/FNAC pathway',
  tags: ['ent'],

  body: `neck lump lymphadenopathy branchial cyst thyroglossal cyst dermoid cystic hygroma reactive lymph node lymphoma thyroid nodule salivary gland parotid submandibular head and neck squamous cell carcinoma HNSCC 2WW ultrasound FNAC core biopsy persistent unexplained neck lump B symptoms`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Most neck lumps are benign — reactive lymphadenopathy from a viral URTI is by far the commonest — but the crucial task is to identify the minority that need urgent investigation for head-and-neck cancer or lymphoma. Age, duration, associated symptoms and the character of the lump guide the pathway. A persistent, unexplained neck lump in an adult is a 2WW referral until proven otherwise.',
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'History: duration and change in size, pain, systemic ("B") symptoms (fever, drenching night sweats, weight loss), smoking/alcohol, recent infection, and any voice change/dysphagia/otalgia/oral lesions.',
        'Examine the lump (site, size, consistency, mobility, fixation, pulsatility) and the whole neck, mouth/oropharynx, thyroid, and other lymph-node groups (± hepatosplenomegaly).',
        'Movement clues: a lump that moves on SWALLOWING suggests thyroid; one that moves on TONGUE PROTRUSION suggests a thyroglossal cyst.',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: '2WW Head & Neck / Haematology Referral',
      items: [
        'An unexplained neck lump in an adult persisting >3–6 weeks → 2WW suspected head & neck cancer referral.',
        'Persistent unexplained cervical lymphadenopathy → consider 2WW haematology (lymphoma) — check FBC/blood film first.',
        'Also 2WW: hoarseness >3 weeks, unexplained oral ulceration/lump >3 weeks, red or white patches in the mouth, or a persistent unilateral middle-ear effusion in an adult.',
        'Higher risk with smoking/alcohol and older age — do NOT falsely reassure a hard, fixed, or progressively growing painless node.',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes by Category' },
    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Congenital', 'Branchial cyst (smooth, anterolateral, presents in young adults, may enlarge/infect with URTI); thyroglossal cyst (midline, moves on tongue protrusion); dermoid cyst; cystic hygroma; vascular malformation'],
        ['Inflammatory / infective', 'Reactive lymphadenopathy (viral URTI — commonest; soft/tender/mobile, resolves); bacterial lymphadenitis/abscess; glandular fever; TB ("cold" abscess); HIV; toxoplasmosis'],
        ['Neoplastic', 'Lymphoma (rubbery, painless, ± B symptoms); metastatic squamous cell carcinoma (hard, fixed — search the upper aerodigestive tract); thyroid cancer; salivary gland tumours (parotid/submandibular)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },
    {
      type: 'list',
      items: [
        'Bloods: FBC and blood film (lymphoma/leukaemia); EBV/monospot if glandular fever likely; HIV test; TFTs if thyroid; consider LDH if lymphoma suspected.',
        'ULTRASOUND of the neck is first-line imaging, often with fine-needle aspiration cytology (FNAC) or core biopsy — arranged via the 2WW/ENT pathway.',
        'Do NOT excise a lymph node in primary care if lymphoma is possible (excisional biopsy is a specialist decision).',
        'Reactive nodes in a well child/young adult with a clear URTI can be safely observed and reviewed; refer if persistent, enlarging, or with red flags.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Head & Neck)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Neck Lump', url: 'https://cks.nice.org.uk/topics/neck-lump/' },
        { label: 'ENT UK — Neck Lumps Patient Info', url: 'https://www.entuk.org/patients/conditions/' },
        { label: 'Cancer Research UK — Head & Neck Cancer', url: 'https://www.cancerresearchuk.org/about-cancer/head-neck-cancer' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Head & neck and haematological cancer criteria' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Lymphoma — persistent painless lymphadenopathy' },
        { id: 'glandular-fever', label: 'Glandular Fever', subtitle: 'Common benign cause of cervical lymphadenopathy' },
        { id: 'goitre-thyroid-cancer', label: 'Goitre, Thyroid Nodules & Cancer', subtitle: 'Thyroid swelling — moves on swallowing' },
        { id: 'ome-glue-ear', label: 'Otitis Media with Effusion', subtitle: 'Adult unilateral OME — a head & neck red flag' },
        { id: 'salivary-gland-disease', label: 'Salivary Gland Disease', subtitle: 'Parotid/submandibular lumps and malignancy red flags' },
      ],
    },

  ],
}
