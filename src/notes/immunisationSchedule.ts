import type { Note } from '../data/notes'

export const immunisationSchedule: Note = {
  id: 'immunisation-schedule',
  title: 'UK Immunisation Schedule',
  subtitle: 'Routine childhood and adult vaccines, key rules and the live-vaccine cautions',
  tags: ['general', 'paediatrics'],

  body: `immunisation schedule vaccines childhood 6-in-1 DTaP IPV Hib HepB rotavirus MenB PCV MMR HPV MenACWY BCG pneumococcal shingles influenza flu live vaccine immunosuppression pregnancy Green Book RSV pertussis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'Green Book — Immunisation Against Infectious Disease', url: 'https://www.gov.uk/government/collections/immunisation-against-infectious-disease-the-green-book' },
        { label: 'NHS — Vaccination Schedule', url: 'https://www.nhs.uk/vaccinations/nhs-vaccinations-and-when-to-have-them/' },
        { label: 'UKHSA — Complete Routine Schedule', url: 'https://www.gov.uk/government/publications/the-complete-routine-immunisation-schedule' },
      ],
    },

    {
      type: 'para',
      text: 'This is a quick-reference summary of the UK routine childhood and adult immunisation programmes plus the key prescribing rules — but the schedule, brands and eligibility change regularly, so the Green Book is always the definitive source. The two things worth committing to memory are the live-vaccine cautions (immunosuppression and pregnancy) and the principle of using every contact to catch up missed doses, which can be done at any age.',
    },
    { type: 'heading', level: 2, text: 'Routine Childhood Schedule' },

    {
      type: 'table',
      headers: ['Age', 'Vaccines'],
      rows: [
        ['At birth (if risk factors)', 'BCG (TB) — for babies with a parent/grandparent from a high-incidence country or in high-incidence areas; hepatitis B if maternal HBV'],
        ['8 weeks', '6-in-1 (DTaP/IPV/Hib/HepB), MenB, rotavirus (oral)'],
        ['12 weeks', '6-in-1 (2nd), PCV (pneumococcal), rotavirus (2nd)'],
        ['16 weeks', '6-in-1 (3rd), MenB (2nd)'],
        ['1 year', 'Hib/MenC, MMR (1st), PCV (2nd), MenB (3rd)'],
        ['2–3 years onward', 'Annual nasal (live) influenza vaccine (school-age programme)'],
        ['3 years 4 months', '4-in-1 pre-school booster (DTaP/IPV), MMR (2nd)'],
        ['12–13 years', 'HPV vaccine (Gardasil 9)'],
        ['14 years', '3-in-1 teenage booster (Td/IPV), MenACWY'],
      ],
      caption: 'Doses/brands change — always check the current Green Book. The oral rotavirus first dose must be given before 15 weeks (and the course completed by 24 weeks) due to a theoretical intussusception risk in older infants.',
    },

    { type: 'heading', level: 2, text: 'Adult & Selective Programmes' },

    {
      type: 'list',
      items: [
        'Influenza (annual): ≥65s, pregnant women, at-risk groups (chronic heart/lung/liver/kidney/neurological disease, diabetes, immunosuppression, asplenia), carers and health/social care workers',
        'Pneumococcal (PPV23): once at 65 (and for at-risk groups); asplenia/immunocompromise may need PCV and revaccination per Green Book',
        'Shingles: recombinant Shingrix (2 doses) for eligible older adults and immunocompromised (replaces the live Zostavax; preferred where immunosuppression present)',
        'Pertussis in pregnancy: offered from ~16 weeks to protect the newborn; also RSV vaccine in pregnancy and for older adults (newer programme)',
        'COVID-19 boosters per current seasonal guidance for eligible groups',
        'Travel and occupational vaccines as indicated (see TravelHealthPro)',
      ],
    },

    { type: 'heading', level: 2, text: 'Key Rules & Cautions' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Live Vaccines & Immunosuppression',
      items: [
        'Live vaccines (MMR, nasal flu, BCG, rotavirus, yellow fever, varicella, live Zostavax) are contraindicated in significant immunosuppression and pregnancy',
        'Give live vaccines ≥4 weeks before starting immunosuppression (e.g. DMARDs/biologics), or delay until sufficiently recovered afterwards — check the Green Book',
        'Egg allergy: most flu vaccines are safe; anaphylaxis to egg needs a specific low-ovalbumin/egg-free product or specialist setting',
        'Minor illness without fever is NOT a reason to defer; a moderate/severe febrile illness is',
        'Record all vaccines; use every contact to catch up missed immunisations (the schedule can be caught up at any age)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'tuberculosis', label: 'Tuberculosis', subtitle: 'BCG eligibility and latent TB' },
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Post-vaccination fever vs illness' },
        { id: 'dmards', label: 'DMARDs & Biologics', subtitle: 'Vaccinate before immunosuppression; avoid live vaccines' },
        { id: 'cervical-cancer', label: 'Cervical Cancer & Smear Screening', subtitle: 'HPV vaccination and cervical screening' },
      ],
    },

  ],
}
