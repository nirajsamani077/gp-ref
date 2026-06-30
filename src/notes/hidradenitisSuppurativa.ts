import type { Note } from '../data/notes'

export const hidradenitisSuppurativa: Note = {
  id: 'hidradenitis-suppurativa',
  title: 'Hidradenitis Suppurativa (HS)',
  subtitle: 'Recurrent flexural abscesses, Hurley staging, antibiotic regimens and when to refer for biologics',
  tags: ['dermatology'],

  body: `hidradenitis suppurativa HS recurrent abscess axilla groin sinus tract scarring Hurley stage clindamycin lymecycline doxycycline biologics adalimumab smoking weight loss metformin acne inversa`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hidradenitis Suppurativa', url: 'https://cks.nice.org.uk/topics/hidradenitis-suppurativa/' },
        { label: 'PCDS — Hidradenitis Suppurativa', url: 'https://www.pcds.org.uk/clinical-guidance/hidradenitis-suppurativa' },
        { label: 'The HS Trust', url: 'https://hstrust.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Recognition' },

    {
      type: 'list',
      items: [
        'Chronic, recurrent, painful nodules, abscesses, sinus tracts and "rope-like" scarring in flexural/apocrine-bearing sites: axillae, groin, under the breasts, perianal and natal cleft',
        'Diagnostic clue: ≥2 recurrences in 6 months in typical sites; often misdiagnosed as recurrent boils',
        'Associations: smoking, obesity, diabetes/metabolic syndrome, and a family history; significant impact on quality of life and mental health',
        'Differentials: ordinary boils/folliculitis, acne, Crohn\'s (perianal disease), infected cysts',
      ],
    },

    { type: 'heading', level: 2, text: 'Hurley Staging' },

    {
      type: 'table',
      headers: ['Stage', 'Features'],
      rows: [
        ['I', 'Abscess(es) without sinus tracts or scarring'],
        ['II', 'Recurrent abscesses with sinus tracts and scarring, separated lesions'],
        ['III', 'Diffuse involvement with interconnected sinus tracts and abscesses across an area'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'info',
      title: 'General Measures + Antibiotic Therapy',
      items: [
        'General: smoking cessation, weight loss, loose clothing, antiseptic washes (e.g. chlorhexidine — HS is NOT due to poor hygiene), and good analgesia; absorbent non-adhesive dressings',
        'Acute flare: intralesional or short oral corticosteroid, and antibiotics (e.g. flucloxacillin) ± incision and drainage of a pointing abscess',
        'Mild/maintenance: topical clindamycin 1% twice daily',
        'Moderate–severe: oral lymecycline (or doxycycline) — typically a 12-week course, reviewed and continued long-term if needed (annual FBC/U&E/LFT); a combination of clindamycin + rifampicin is used by specialists',
        'Metformin can be a useful off-licence adjunct (especially with metabolic syndrome)',
      ],
    },

    {
      type: 'list',
      items: [
        'Refer to dermatology (the disease scars and progresses) — start antibiotic treatment at the same time as referring',
        'Specialist options: biologics (adalimumab is licensed for moderate–severe HS), systemic retinoids, hormonal therapy (e.g. in women), and surgery (de-roofing, wide local excision, laser) for established sinus tracts/Hurley III',
        'Signpost The HS Trust for support',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'impetigo', label: 'Impetigo & Folliculitis/Boils', subtitle: 'Recurrent boils — the key differential' },
        { id: 'acne-vulgaris', label: 'Acne Vulgaris', subtitle: 'Shares follicular pathology ("acne inversa"); overlapping treatments' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'HS associates with Crohn\'s; perianal disease overlap' },
        { id: 'obesity', label: 'Obesity & Weight Management', subtitle: 'Weight loss improves HS; metabolic associations' },
      ],
    },

  ],
}
