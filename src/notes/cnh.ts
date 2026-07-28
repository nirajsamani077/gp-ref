import type { Note } from '../data/notes'

export const cnh: Note = {
  id: 'cnh',
  title: 'Chondrodermatitis Nodularis Helicis',
  subtitle: 'The painful ear nodule — pressure relief, and distinguishing it from skin cancer',
  tags: ['dermatology', 'ent'],

  body: `chondrodermatitis nodularis helicis CNH painful ear nodule helix antihelix pressure sleeping side pillow relief cushion basal cell carcinoma squamous cell carcinoma actinic keratosis biopsy`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Chondrodermatitis nodularis helicis (CNH) is a benign but characteristically PAINFUL small nodule on the ear, caused by pressure/ischaemia over the cartilage (classically from lying on that side). Its importance is twofold: the pain is very disruptive to sleep and readily relieved by offloading pressure, and it must be distinguished from skin cancers, which occur at the same sun-exposed site.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'A small (few mm), firm, tender nodule on the upper ear — the HELIX in men, the antihelix more often in women — sometimes with a central crust/scale.',
        'The hallmark is PAIN, especially on pressure/lying on that side (patients often can\'t sleep on the affected side) — benign lumps and most skin cancers are painless.',
        'Common in older, fair-skinned people with sun exposure.',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Exclude Skin Cancer',
      items: [
        'The ear is a common, high-risk site for basal and squamous cell carcinoma and actinic keratosis — a non-healing, ulcerated, enlarging, bleeding or atypical lesion should be regarded as possible skin cancer.',
        'If there is diagnostic doubt, or features suggesting malignancy, refer for assessment/biopsy rather than assuming CNH.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'list',
      items: [
        'PRESSURE RELIEF is the mainstay and often curative: avoid lying on the affected ear — use a pressure-relieving "CNH pillow" (a foam pillow with a hole cut out) or a soft cushion/foam ring; this alone resolves many cases.',
        'A potent topical corticosteroid can reduce inflammation/pain; intralesional steroid is an option.',
        'For persistent lesions: refer for specialist treatment — cryotherapy, curettage, or excision of the affected cartilage; histology also confirms the diagnosis and excludes malignancy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Chondrodermatitis Nodularis Helicis', url: 'https://www.pcds.org.uk/clinical-guidance/chondrodermatitis-nodularis-helicis' },
        { label: 'DermNet — Chondrodermatitis Nodularis', url: 'https://dermnetnz.org/topics/chondrodermatitis-nodularis' },
        { label: 'BAD — Patient Information', url: 'https://www.bad.org.uk/pils/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bcc', label: 'Basal Cell Carcinoma', subtitle: 'The commonest ear-site skin cancer to exclude' },
        { id: 'scc-bowens', label: 'SCC, Bowen\'s & Keratoacanthoma', subtitle: 'High-risk ear-site SCC' },
        { id: 'actinic-keratosis', label: 'Actinic Keratosis', subtitle: 'Sun damage on the same site' },
      ],
    },

  ],
}
