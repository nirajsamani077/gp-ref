import type { Note } from '../data/notes'

export const hpvVaccination: Note = {
  id: 'hpv-vaccination',
  title: 'HPV Vaccination',
  subtitle: 'The schools programme, eligible groups, cancers prevented, and catch-up',
  tags: ['gynaecology'],

  body: `HPV human papillomavirus vaccine Gardasil 9 cervical cancer anal penile oropharyngeal genital warts school year 8 single dose MSM immunocompromised catch-up cervical screening`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'HPV vaccination protects against the human papillomavirus types that cause the majority of cervical cancer, a large share of other anogenital and oropharyngeal cancers, and genital warts. It is one of the most effective cancer-prevention interventions available and is delivered mainly through a schools programme. GPs field questions about eligibility, catch-up and the continued need for cervical screening.',
    },

    { type: 'heading', level: 2, text: 'Who Is Offered It' },
    {
      type: 'list',
      items: [
        'Routine: all children in school Year 8 (around age 12–13), both girls and boys, using the Gardasil 9 vaccine.',
        'A SINGLE dose is now used for the routine adolescent programme and for eligible people up to age 25 (schedule simplified from the earlier 2-dose course); immunocompromised people and those with HIV need a multi-dose schedule.',
        'Catch-up: available for those who missed the school programme up to their 25th birthday (girls born after Sept 2006 / boys after Sept 2006 per the programme rules).',
        'Additional eligible groups: gay, bisexual and other men who have sex with men (GBMSM) up to age 45 (via sexual-health services), and certain immunocompromised/HIV-positive individuals.',
      ],
    },

    { type: 'heading', level: 2, text: 'What It Prevents' },
    {
      type: 'table',
      headers: ['Cancer / condition', 'HPV link'],
      rows: [
        ['Cervical cancer', 'HPV (esp. types 16/18) causes ~almost all cases — the vaccine is driving major reductions'],
        ['Anal, vulval, vaginal, penile cancers', 'A substantial proportion are HPV-related'],
        ['Oropharyngeal (throat) cancer', 'Rising incidence, HPV-related — a key reason for vaccinating boys'],
        ['Genital warts', 'Types 6/11 (covered by Gardasil 9)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Practical Points' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Vaccination Does NOT Replace Screening',
      items: [
        'Vaccinated women STILL need cervical screening — the vaccine does not cover every high-risk HPV type; reinforce attendance for smears (now HPV primary screening).',
        'The vaccine is prophylactic (works best before HPV exposure) — hence the pre-adolescent timing; it does not treat existing HPV infection or disease.',
        'It is safe and well tolerated (sore arm, common vaccine effects); not a live vaccine.',
        'Encourage catch-up for eligible young adults who missed it, and signpost GBMSM to sexual-health services.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'Green Book — HPV (Chapter 18a)', url: 'https://www.gov.uk/government/publications/human-papillomavirus-hpv-the-green-book-chapter-18a' },
        { label: 'NHS — HPV Vaccine', url: 'https://www.nhs.uk/vaccinations/hpv-vaccine/' },
        { label: 'Jo\'s Cervical Cancer Trust — HPV', url: 'https://www.jostrust.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'cervical-cancer', label: 'Cervical Cancer & Smear Screening', subtitle: 'HPV primary screening — still needed after vaccination' },
        { id: 'genital-warts', label: 'Genital Warts', subtitle: 'HPV 6/11 — prevented by Gardasil 9' },
        { id: 'immunisation-schedule', label: 'Immunisation Schedule', subtitle: 'Where HPV sits in the routine programme' },
        { id: 'testicular-penile-cancer', label: 'Testicular & Penile Cancer', subtitle: 'HPV-related penile cancer' },
      ],
    },

  ],
}
