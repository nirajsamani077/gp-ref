import type { Note } from '../data/notes'

export const impetigo: Note = {
  id: 'impetigo',
  title: 'Impetigo & Folliculitis/Boils',
  subtitle: 'Golden-crusted impetigo, hydrogen peroxide vs antibiotics, bullous impetigo and boils/carbuncles',
  tags: ['dermatology', 'infection'],

  body: `impetigo staph aureus group A strep golden crust hydrogen peroxide fusidic acid mupirocin flucloxacillin bullous impetigo folliculitis boil furuncle carbuncle abscess incision drainage MRSA school exclusion PVL`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG153 — Impetigo Antimicrobial Prescribing', url: 'https://www.nice.org.uk/guidance/ng153' },
        { label: 'NICE CKS — Impetigo', url: 'https://cks.nice.org.uk/topics/impetigo/' },
        { label: 'PCDS — Bacterial Infections', url: 'https://www.pcds.org.uk/clinical-guidance/impetigo' },
      ],
    },

    { type: 'heading', level: 2, text: 'Impetigo' },

    {
      type: 'list',
      items: [
        'Superficial skin infection (Staphylococcus aureus ± group A streptococcus), very contagious by direct contact with discharge/crusts; typically on the face/around the mouth in children',
        'Non-bullous (commonest): golden/honey-coloured crusted lesions; bullous: flaccid fluid-filled blisters that rupture (more often in young children, staph toxin-mediated)',
        'Advice for all: wash with soap and water, avoid sharing towels, hand hygiene; school exclusion until lesions are crusted/healed OR 48 hours after starting antibiotics',
      ],
    },

    {
      type: 'table',
      headers: ['Severity', 'Treatment'],
      rows: [
        ['Localised non-bullous, well/systemically fine', 'Topical hydrogen peroxide 1% cream (first-line, antibiotic-sparing) TDS for 5 days'],
        ['Localised, unsuitable for/ not responding to peroxide', 'Topical antibiotic — fusidic acid 2% (mupirocin if MRSA/resistance) TDS for 5 days'],
        ['Widespread, bullous, or systemically unwell', 'Oral flucloxacillin for 5 days (clarithromycin/erythromycin if penicillin-allergic)'],
        ['Recurrent impetigo', 'Send skin and nasal swabs (consider staph/MRSA carriage and decolonisation)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Folliculitis' },

    {
      type: 'list',
      items: [
        'Inflamed, tender follicular papules/pustules (usually staph); deeper/nodular disease suggests infection and can scar',
        'Pseudofolliculitis (shaving/ingrown hairs) mimics it — needs antiseptic wash and to stop the trigger, not antibiotics',
        'Management: mild — chlorhexidine antiseptic body wash; otherwise oral flucloxacillin 7–10 days (clarithromycin if penicillin-allergic)',
        'Specific types: hot-tub folliculitis (Pseudomonas — swab; ciprofloxacin), beard folliculitis (associated with nasal MRSA — swab and decolonise), Malassezia (yeast) folliculitis (ketoconazole shampoo)',
      ],
    },

    { type: 'heading', level: 2, text: 'Boils (Furuncles) & Carbuncles' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Abscesses — Drainage Plus Antibiotics if Needed',
      items: [
        'A boil (furuncle) is a deep follicular abscess; a carbuncle is a cluster of connected boils',
        'Incision and drainage is the key treatment for a fluctuant abscess; antibiotics (flucloxacillin) if surrounding cellulitis, systemic features, or facial location',
        'Recurrent boils: check for diabetes/immunocompromise and consider Staph carriage (decolonisation); if recurrent/severe with abscesses, check PVL-staph status; consider hidradenitis suppurativa if in flexural sites',
        'Swab pus only if discharge present, recurrent, or not responding',
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
