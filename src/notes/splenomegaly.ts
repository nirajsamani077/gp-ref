import type { Note } from '../data/notes'

export const splenomegaly: Note = {
  id: 'splenomegaly',
  title: 'Splenomegaly & Hyposplenism',
  subtitle: 'Causes by spleen size, examining the spleen, and the vaccination/prophylaxis rules after splenectomy',
  tags: ['haematology'],

  body: `splenomegaly massive moderate hepatosplenomegaly myeloproliferative CML myelofibrosis malaria lymphoproliferative ITP portal hypertension haemolytic anaemia splenectomy hyposplenism asplenia encapsulated bacteria pneumococcal penicillin prophylaxis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Splenomegaly', url: 'https://cks.nice.org.uk/specialities/haematology/' },
        { label: 'Green Book — Asplenia Immunisation', url: 'https://www.gov.uk/government/publications/pneumococcal-the-green-book-chapter-25' },
        { label: 'BSH — Splenectomy/Asplenia Guidance', url: 'https://b-s-h.org.uk/guidelines/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Causes by Spleen Size' },

    {
      type: 'table',
      headers: ['Size', 'Think'],
      rows: [
        ['Massive (crosses the midline / >8 cm below costal margin)', 'Myeloproliferative disease (CML, myelofibrosis) and chronic malaria / visceral leishmaniasis (tropical)'],
        ['Moderate', 'The above PLUS lymphoproliferative disease, ITP, and infiltration (amyloid, sarcoid, Gaucher\'s, Felty\'s syndrome)'],
        ['Tip / mild', 'The above PLUS portal hypertension, haemolytic anaemia (e.g. hereditary spherocytosis), and infections (EBV/glandular fever, infective endocarditis, hepatitis)'],
      ],
      caption: 'Group the causes as haematological, infective, infiltrative, or portal hypertension. Hepatosplenomegaly suggests myelo/lymphoproliferative disease, portal hypertension, or infection.',
    },

    { type: 'heading', level: 2, text: 'Examination & Investigation' },

    {
      type: 'list',
      items: [
        'A splenic mass: arises in the left upper quadrant, moves inferomedially with inspiration, is dull to percussion, has a palpable notch, and you cannot get above it or ballot it (unlike a kidney)',
        'Examine for lymphadenopathy, hepatomegaly, signs of chronic liver disease, and features of infective endocarditis/rheumatological disease',
        'Investigate: FBC and blood film, LFTs; abdominal ultrasound; then targeted work-up — if haematological: staging CT, bone marrow, lymph node biopsy; if infective: malaria films and viral serology',
        'Refer haematology for unexplained splenomegaly or where a haematological cause is suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'Splenectomy & Hyposplenism' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Lifelong Infection Prevention After Splenectomy/Asplenia',
      items: [
        'The (hypo)splenic patient is at high risk of overwhelming infection with ENCAPSULATED bacteria — pneumococcus, meningococcus, and Haemophilus influenzae type b',
        'Vaccinate (ideally ≥2 weeks BEFORE an elective splenectomy, or as soon as possible after emergency splenectomy): pneumococcal (with boosters per schedule), Hib, MenACWY and MenB, and annual influenza',
        'Lifelong prophylactic penicillin V (or a macrolide if penicillin-allergic) — at least for the first 2 years and in all high-risk patients; provide a standby course of antibiotics for febrile illness',
        'Carry a splenectomy/asplenia alert card; seek urgent medical care for any fever; take malaria prophylaxis seriously when travelling and use anti-tick/animal-bite precautions',
        'Causes of hyposplenism to remember: splenectomy, sickle cell disease (autosplenectomy), coeliac disease',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myelo/lymphoproliferative causes of splenomegaly' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Splenic sequestration and functional asplenia' },
        { id: 'immunisation-schedule', label: 'Immunisation Schedule', subtitle: 'Asplenia vaccination requirements' },
        { id: 'glandular-fever', label: 'Glandular Fever', subtitle: 'Common infective cause; splenic rupture risk' },
      ],
    },

  ],
}
