import type { Note } from '../data/notes'

export const hidradenitisSuppurativa: Note = {
  id: 'hidradenitis-suppurativa',
  title: 'Hidradenitis Suppurativa (HS)',
  subtitle: 'Recurrent flexural abscesses and sinus tracts — Hurley staging, antibiotic regimens and biologics',
  tags: ['dermatology'],

  body: `hidradenitis suppurativa HS acne inversa recurrent abscess axilla groin inframammary perianal sinus tract tunnels scarring Hurley stage clindamycin lymecycline doxycycline rifampicin adalimumab biologics smoking weight loss metformin chlorhexidine de-roofing`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Hidradenitis suppurativa is a chronic, relapsing, inflammatory disease of the apocrine-gland-bearing flexures. It is frequently misdiagnosed for years as "recurrent boils", yet it scars and progresses, and carries a heavy quality-of-life and psychological burden. Early recognition, general measures and prompt treatment (started at the same time as dermatology referral) reduce long-term damage.',
    },

    { type: 'heading', level: 2, text: 'Recognition' },
    {
      type: 'list',
      items: [
        'Chronic, recurrent, painful nodules, abscesses, discharging sinus tracts ("tunnels") and rope-like scarring in flexural/apocrine sites: axillae, groin, inframammary folds, buttocks, perianal and natal cleft.',
        'A practical diagnostic clue: ≥2 recurrences in typical sites over 6 months. Blackheads/double-ended comedones are characteristic.',
        'Associations: smoking (strong), obesity/metabolic syndrome, diabetes, a family history, and inflammatory bowel disease (especially Crohn\'s with perianal disease).',
        'Differentials: ordinary boils/folliculitis, infected epidermoid cysts, acne, Crohn\'s perianal disease.',
      ],
    },

    { type: 'heading', level: 2, text: 'Hurley Staging' },
    {
      type: 'table',
      headers: ['Stage', 'Features', 'Typical approach'],
      rows: [
        ['I', 'Abscess(es) without sinus tracts or scarring', 'General measures + topical/oral antibiotics'],
        ['II', 'Recurrent abscesses with sinus tracts and scarring, separated lesions', 'Oral antibiotics ± specialist medical therapy; localised surgery'],
        ['III', 'Diffuse interconnected sinus tracts and abscesses across an area', 'Biologics and wide surgery — specialist-led'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'callout',
      variant: 'info',
      title: 'General Measures (Explain: HS Is NOT Poor Hygiene)',
      items: [
        'Smoking cessation and weight loss are disease-modifying — both improve HS and the metabolic associations.',
        'Antiseptic washes (e.g. chlorhexidine or benzoyl peroxide), loose clothing to reduce friction, and absorbent non-adhesive dressings.',
        'Good analgesia — HS pain is often under-treated; address the significant impact on mood and mental health.',
      ],
    },
    {
      type: 'table',
      headers: ['Setting', 'Treatment'],
      rows: [
        ['Acute flare / painful abscess', 'Intralesional or short oral corticosteroid; oral antibiotic (e.g. flucloxacillin); incision & drainage only of a pointing abscess (recurrence is common — de-roofing is preferred by specialists)'],
        ['Mild / maintenance', 'Topical clindamycin 1% BD'],
        ['Moderate–severe', 'Oral lymecycline 408 mg OD or doxycycline 100 mg OD, typically 12 weeks then reviewed; combination clindamycin + rifampicin (specialist) for a 10–12 week course'],
        ['Adjunct', 'Metformin (off-licence) can help, especially with metabolic syndrome; anti-androgen/hormonal therapy in some women; monitor bloods (FBC/U&E/LFT) on long-term antibiotics'],
      ],
    },
    {
      type: 'list',
      items: [
        'Refer to dermatology (the disease scars and progresses) — and START antibiotic treatment at the same time as referring rather than waiting.',
        'Specialist options: biologics (adalimumab and secukinumab are licensed for moderate–severe HS), systemic retinoids, and surgery (de-roofing, wide local excision, laser) for established sinus tracts/Hurley III.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hidradenitis Suppurativa', url: 'https://cks.nice.org.uk/topics/hidradenitis-suppurativa/' },
        { label: 'PCDS — Hidradenitis Suppurativa', url: 'https://www.pcds.org.uk/clinical-guidance/hidradenitis-suppurativa' },
        { label: 'The HS Trust', url: 'https://hstrust.org/' },
        { label: 'BAD — HS Patient Leaflet', url: 'https://www.bad.org.uk/pils/hidradenitis-suppurativa/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'impetigo', label: 'Impetigo & Folliculitis/Boils', subtitle: 'Recurrent boils — the key differential' },
        { id: 'acne-vulgaris', label: 'Acne Vulgaris', subtitle: 'Shares follicular pathology ("acne inversa"); overlapping treatments' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'HS associates with Crohn\'s; perianal disease overlap' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss improves HS; metabolic associations' },
        { id: 'smoking-cessation', label: 'Smoking Cessation', subtitle: 'A key disease-modifying intervention' },
      ],
    },

  ],
}
