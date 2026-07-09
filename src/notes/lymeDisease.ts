import type { Note } from '../data/notes'

export const lymeDisease: Note = {
  id: 'lyme-disease',
  title: 'Lyme Disease & Tick Bites',
  subtitle: 'Erythema migrans, when to treat empirically, ELISA/immunoblot testing and doxycycline',
  tags: ['infection'],

  body: `Lyme disease Borrelia burgdorferi tick bite erythema migrans bullseye rash doxycycline amoxicillin ELISA immunoblot serology facial palsy Bannwarth Lyme arthritis carditis tick removal prophylaxis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG95 — Lyme Disease', url: 'https://www.nice.org.uk/guidance/ng95' },
        { label: 'NICE CKS — Lyme Disease', url: 'https://cks.nice.org.uk/topics/lyme-disease/' },
        { label: 'UKHSA — Lyme Disease', url: 'https://www.gov.uk/government/collections/lyme-disease-guidance-data-and-analysis' },
      ],
    },

    { type: 'heading', level: 2, text: 'Overview' },

    {
      type: 'list',
      items: [
        'Caused by the spirochaete Borrelia burgdorferi, transmitted by infected tick bites; incidence in the UK is rising (endemic areas include woodland/heathland — e.g. Scottish Highlands, New Forest, Exmoor)',
        'Tick removal: remove promptly with fine-tipped tweezers, gripping close to the skin and pulling steadily upward; clean the area; do not burn/twist. Antibiotic prophylaxis after a tick bite is NOT routinely recommended',
      ],
    },

    { type: 'heading', level: 2, text: 'Presentation' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Erythema Migrans — Treat on Sight, No Test Needed',
      items: [
        'Erythema migrans: an expanding red "bulls-eye"/target rash, usually painless and non-itchy, appearing days to ~4 weeks after a bite — it is PATHOGNOMONIC of Lyme disease (present in ~2/3 of cases)',
        'If you see erythema migrans → diagnose clinically and TREAT — do NOT wait for or rely on blood tests (serology is often negative early)',
        'Early non-specific features: fatigue, fever, headache, myalgia/arthralgia, and lymphadenopathy',
      ],
    },

    {
      type: 'table',
      headers: ['Stage', 'Features'],
      rows: [
        ['Early localised', 'Erythema migrans ± flu-like symptoms'],
        ['Early disseminated', 'Multiple EM lesions; neuroborreliosis (facial/other cranial nerve palsy, meningitis, painful radiculopathy — Bannwarth syndrome); Lyme carditis (heart block, myo/pericarditis)'],
        ['Late', 'Lyme arthritis (large joints, e.g. knee); rarely chronic neurological features'],
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation (Only if No Erythema Migrans)' },

    {
      type: 'list',
      items: [
        'If Lyme is suspected but there is no erythema migrans → do an ELISA; if positive (or equivocal), confirm with an immunoblot',
        'If the ELISA is negative but symptoms started within the last 4 weeks, repeat it 4–6 weeks later (antibodies take time to develop)',
        'If the ELISA is negative but symptoms persist >12 weeks, do an immunoblot and consider specialist advice',
        'Do not diagnose Lyme on non-validated tests; beware over-diagnosis for chronic non-specific symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Antibiotics (per NICE NG95)',
      items: [
        'Erythema migrans / early Lyme: oral doxycycline for 21 days (first-line in adults and children ≥12/≥45 kg)',
        'Amoxicillin is the alternative (and the option in young children/pregnancy where doxycycline is unsuitable); azithromycin is third-line',
        'Lyme arthritis / carditis / acrodermatitis: longer oral courses (e.g. 28 days) — seek specialist advice',
        'Neuroborreliosis: oral doxycycline (or IV ceftriaxone for CNS involvement) under specialist guidance; refer',
        'Antibiotics treat the acute infection — they do not reliably help persistent non-specific symptoms (which overlap with CFS/fibromyalgia); a Jarisch-Herxheimer reaction can occur early in treatment',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bells-palsy', label: "Bell's Palsy", subtitle: 'Facial palsy — consider Lyme (esp. bilateral or endemic exposure)' },
        { id: 'fever-returning-traveller', label: 'Fever in the Returning Traveller', subtitle: 'Systematic approach to fever + exposures' },
        { id: 'cfs-me', label: 'Chronic Fatigue Syndrome (CFS/ME)', subtitle: 'Overlap with persistent post-Lyme symptoms' },
      ],
    },

  ],
}
