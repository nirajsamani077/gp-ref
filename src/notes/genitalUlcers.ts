import type { Note } from '../data/notes'

export const genitalUlcers: Note = {
  id: 'genital-ulcers',
  title: 'Genital Ulcers & STI Contact Tracing',
  subtitle: 'The painful-vs-painless ulcer differential, GUM referral, and partner notification principles',
  tags: ['gynaecology'],

  body: `genital ulcers herpes simplex HSV painful syphilis chancre painless lymphogranuloma venereum chancroid Behçet's aphthous fixed drug eruption GUM referral partner notification contact tracing HIV STI screen`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Genital ulcers are most often infective (and usually a sexually transmitted infection), and the single most useful discriminator is whether they are PAINFUL or PAINLESS. Any suspected STI ulcer warrants GUM referral for accurate diagnosis, a full screen (including HIV and syphilis) and — crucially — partner notification/contact tracing, which GUM is best placed to coordinate.',
    },

    { type: 'heading', level: 2, text: 'Painful vs Painless' },
    {
      type: 'table',
      headers: ['', 'Painful', 'Painless'],
      rows: [
        ['Infective (STI)', 'Genital HERPES (HSV) — commonest; multiple grouped vesicles → shallow ulcers, tender lymphadenopathy, dysuria; chancroid (rare, tropical)', 'Primary SYPHILIS — a solitary indurated painless ulcer (chancre) with rubbery nodes; lymphogranuloma venereum (LGV)'],
        ['Non-infective', 'Aphthous ulcers, Behçet\'s (oral + genital ulcers + eye/skin), trauma, fixed drug eruption', 'Malignancy (vulval/penile — persistent, indurated), lichen planus'],
      ],
      caption: 'Remember the "painful = herpes, painless = syphilis" rule of thumb — but always confirm, as presentations overlap and co-infection occurs. A persistent, non-healing, indurated ulcer must not be assumed infective — consider cancer.',
    },

    { type: 'heading', level: 2, text: 'Assessment & Management' },
    {
      type: 'list',
      items: [
        'Take a sexual history; examine the genitalia, regional nodes, mouth, eyes and skin (Behçet\'s).',
        'Refer to GUM/sexual health for diagnosis (HSV PCR, syphilis serology/dark-ground, LGV/chlamydia NAAT), a FULL STI screen including HIV, and management — this is where testing, treatment and contact tracing are best coordinated.',
        'First-episode genital herpes: oral aciclovir (started within 5 days / while new lesions appearing), analgesia, saline bathing, topical anaesthetic; counsel on recurrence, transmission, and pregnancy implications.',
        'Syphilis is treated with benzathine penicillin (specialist); LGV/chancroid have specific regimens — all via GUM.',
        'A persistent/atypical ulcer, or one not responding, needs biopsy to exclude malignancy (see Vulval/Penile conditions).',
      ],
    },

    { type: 'heading', level: 2, text: 'Partner Notification (Contact Tracing)' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Break the Chain of Transmission',
      items: [
        'Partner notification identifies, tests and treats sexual contacts to prevent reinfection and onward spread and to detect asymptomatic infection — a core part of STI care.',
        'Methods: patient referral (the patient tells partners), provider referral (the service contacts them, anonymously), or contract referral — GUM specialist health advisers coordinate this and agree "look-back" periods per infection.',
        'Advise no sex until the patient (and partners) are treated and cleared per guidance; document and follow up.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BASHH — Genital Ulcer / HSV / Syphilis Guidelines', url: 'https://www.bashh.org/guidelines' },
        { label: 'NICE CKS — Herpes Simplex (Genital)', url: 'https://cks.nice.org.uk/topics/herpes-simplex-genital/' },
        { label: 'NHS — Find a Sexual Health Clinic', url: 'https://www.nhs.uk/service-search/sexual-health/find-a-sexual-health-clinic' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'stis', label: 'STIs', subtitle: 'Wider STI diagnosis, screening and management' },
        { id: 'hiv', label: 'HIV', subtitle: 'Always screen; ulcers increase HIV risk' },
        { id: 'vulval-conditions', label: 'Vulval Dermatoses & Cancer', subtitle: 'Non-infective and malignant ulcer causes' },
        { id: 'aphthous-ulcers', label: 'Mouth Ulcers', subtitle: 'Behçet\'s — oral + genital ulcers' },
        { id: 'notifiable-diseases', label: 'Notifiable Diseases', subtitle: 'Public-health context (e.g. syphilis)' },
      ],
    },

  ],
}
