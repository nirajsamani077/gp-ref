import type { Note } from '../data/notes'

export const impetigo: Note = {
  id: 'impetigo',
  title: 'Impetigo & Folliculitis/Boils',
  subtitle: 'Golden-crusted impetigo, hydrogen peroxide vs antibiotics, bullous impetigo and boils/carbuncles',
  tags: ['dermatology', 'infection'],

  body: `impetigo staphylococcus aureus group A strep golden honey crust hydrogen peroxide fusidic acid mupirocin flucloxacillin clarithromycin bullous impetigo folliculitis boil furuncle carbuncle abscess incision drainage MRSA PVL school exclusion decolonisation`,

  content: [

    { type: 'heading', level: 2, text: 'Impetigo' },
    {
      type: 'para',
      text: 'Impetigo is a common, highly contagious superficial bacterial skin infection (Staphylococcus aureus, sometimes with group A streptococcus), seen mostly on the face of children. NICE now recommends an antibiotic-sparing approach for localised non-bullous disease, reserving oral antibiotics for widespread, bullous or systemic infection.',
    },
    {
      type: 'list',
      items: [
        'Non-bullous (commonest): thin-walled vesicles/pustules that rupture to leave golden/honey-coloured crusts, usually around the nose and mouth.',
        'Bullous: flaccid fluid-filled blisters that rupture leaving a scald-like area (staph exfoliative-toxin mediated) — more often in young children and can cause systemic upset.',
        'Advice for all: wash affected areas with soap and water, don\'t share towels/flannels, and hand hygiene; SCHOOL/nursery EXCLUSION until lesions are crusted/healed OR 48 hours after starting antibiotics.',
      ],
    },
    {
      type: 'table',
      headers: ['Severity', 'Treatment (5 days)'],
      rows: [
        ['Localised non-bullous, systemically well', 'Topical hydrogen peroxide 1% cream (Crystacide) BD–TDS — first-line, antibiotic-sparing'],
        ['Localised, unsuitable for/not responding to peroxide', 'Topical antibiotic — fusidic acid 2% TDS (mupirocin if MRSA/resistance suspected)'],
        ['Widespread, bullous, or systemically unwell', 'Oral flucloxacillin (clarithromycin or erythromycin — the latter in pregnancy — if penicillin-allergic)'],
        ['Recurrent impetigo', 'Skin and nasal swabs; consider Staph/MRSA carriage and decolonisation'],
      ],
      caption: 'Do not use topical AND oral antibiotics together, and avoid topical fusidic acid for prolonged/repeated courses (resistance).',
    },

    { type: 'heading', level: 2, text: 'Folliculitis' },
    {
      type: 'list',
      items: [
        'Inflamed, tender follicular papules/pustules (usually staph); deeper/nodular disease can scar.',
        'Pseudofolliculitis (shaving/ingrown hairs) mimics it — needs antiseptic and a change in shaving technique, not antibiotics.',
        'Management: mild — chlorhexidine antiseptic wash; more extensive/persistent — oral flucloxacillin 7 days (clarithromycin if penicillin-allergic).',
        'Specific types: hot-tub folliculitis (Pseudomonas — usually self-limiting; ciprofloxacin if severe), beard folliculitis (associated with nasal MRSA — swab/decolonise), Malassezia (yeast) folliculitis (ketoconazole shampoo/antifungal).',
      ],
    },

    { type: 'heading', level: 2, text: 'Boils (Furuncles) & Carbuncles' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Abscesses — Drainage Plus Antibiotics if Needed',
      items: [
        'A boil (furuncle) is a deep follicular abscess; a carbuncle is a cluster of interconnected boils.',
        'Incision and drainage is the KEY treatment for a fluctuant abscess; antibiotics (flucloxacillin) are added for surrounding cellulitis, systemic features, immunosuppression, or facial location.',
        'Recurrent boils: check for diabetes/immunocompromise and Staph carriage (nasal + skin swabs → decolonisation); consider PVL-Staph if recurrent abscesses in the patient/household; consider hidradenitis suppurativa if in flexural sites.',
        'Swab pus only if discharge present, recurrent, or not responding.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG153 — Impetigo Antimicrobial Prescribing', url: 'https://www.nice.org.uk/guidance/ng153' },
        { label: 'NICE CKS — Impetigo', url: 'https://cks.nice.org.uk/topics/impetigo/' },
        { label: 'PCDS — Impetigo', url: 'https://www.pcds.org.uk/clinical-guidance/impetigo' },
        { label: 'NHS — Impetigo', url: 'https://www.nhs.uk/conditions/impetigo/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'cellulitis', label: 'Cellulitis & Skin Infections', subtitle: 'Deeper soft-tissue infection — antibiotic choice' },
        { id: 'boils-staph-carriage', label: 'Boils & Staph Carriage', subtitle: 'Recurrent boils and decolonisation' },
        { id: 'hidradenitis-suppurativa', label: 'Hidradenitis Suppurativa', subtitle: 'Recurrent flexural abscesses — a key differential' },
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Impetiginised eczema — secondary infection' },
      ],
    },

  ],
}
