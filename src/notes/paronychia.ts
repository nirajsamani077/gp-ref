import type { Note } from '../data/notes'

export const paronychia: Note = {
  id: 'paronychia',
  title: 'Paronychia & Digital Myxoid Cyst',
  subtitle: 'Acute vs chronic nail-fold infection/inflammation, and the benign mucoid cyst',
  tags: ['dermatology'],

  body: `paronychia acute bacterial staph incision drainage flucloxacillin chronic paronychia candida irritant wet work topical steroid antifungal digital myxoid cyst mucous cyst DIP osteoarthritis nail groove herpetic whitlow`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Paronychia is inflammation of the nail fold, and the crucial distinction is acute (usually a bacterial infection needing drainage/antibiotics) versus chronic (an irritant/inflammatory process with secondary Candida, needing skin protection rather than antibiotics). The digital myxoid (mucous) cyst is a separate, benign lump near the nail linked to finger-joint osteoarthritis.',
    },

    { type: 'heading', level: 2, text: 'Acute Paronychia' },
    {
      type: 'list',
      items: [
        'Rapid-onset painful, red, swollen nail fold, often after minor trauma/nail-biting; may point to a small abscess (pus).',
        'Usually Staphylococcus aureus. Management: warm soaks; incision & drainage if fluctuant/pus present (the mainstay); oral flucloxacillin (clarithromycin if penicillin-allergic) if significant cellulitis or not settling.',
        'Consider HERPETIC WHITLOW if there are grouped vesicles and severe pain out of proportion (HSV — do NOT incise; treat with aciclovir).',
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Paronychia' },
    {
      type: 'callout',
      variant: 'info',
      title: 'An Irritant Problem — Not "Just an Infection"',
      items: [
        'Persistent (>6 weeks) swelling of the nail folds with loss of the cuticle, in people with WET/irritant exposure (cleaners, bar staff, healthcare, food handlers) or hand dermatitis; often affects several fingers; secondary Candida is common but is a passenger, not the primary cause.',
        'Management is primarily HAND PROTECTION: keep hands dry, wear gloves for wet work, avoid irritants and nail-biting/manipulation, and use emollients.',
        'A topical corticosteroid (± a topical antifungal/imidazole) treats the inflammation and Candida; systemic antifungals are rarely needed. It improves slowly — counsel on realistic timescales.',
        'Refer if refractory, or consider other causes (psoriasis, eczema) or, rarely, malignancy in a single chronic non-healing nail-fold lesion.',
      ],
    },

    { type: 'heading', level: 2, text: 'Digital Myxoid (Mucous) Cyst' },
    {
      type: 'list',
      items: [
        'A small, dome-shaped, translucent cyst near the distal interphalangeal joint or nail fold, containing gelatinous fluid; associated with osteoarthritis of the DIP joint (connects to the joint).',
        'It can cause a longitudinal groove/ridge in the nail by pressing on the nail matrix.',
        'Benign — reassure; most need no treatment. If symptomatic/troublesome, refer for specialist options (cryotherapy, aspiration/injection, or excision — recurrence is common); avoid repeatedly puncturing it (infection risk).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Paronychia (Acute)', url: 'https://cks.nice.org.uk/topics/paronychia-acute/' },
        { label: 'PCDS — Chronic Paronychia', url: 'https://www.pcds.org.uk/clinical-guidance/chronic-paronychia' },
        { label: 'DermNet — Myxoid Cyst', url: 'https://dermnetnz.org/topics/digital-myxoid-cyst' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'contact-dermatitis', label: 'Contact Dermatitis', subtitle: 'Irritant hand dermatitis underlies chronic paronychia' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin & Nail Infections', subtitle: 'Candida and fungal nail differentials' },
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'When acute infection spreads' },
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'DIP-joint OA and the myxoid cyst link' },
      ],
    },

  ],
}
