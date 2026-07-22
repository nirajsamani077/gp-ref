import type { Note } from '../data/notes'

export const splenomegaly: Note = {
  id: 'splenomegaly',
  title: 'Splenomegaly & Hyposplenism',
  subtitle: 'Causes by spleen size, examining the spleen, and the vaccination/prophylaxis rules after splenectomy',
  tags: ['haematology'],

  body: `splenomegaly massive moderate mild hepatosplenomegaly myeloproliferative CML myelofibrosis malaria visceral leishmaniasis lymphoproliferative lymphoma ITP portal hypertension haemolytic anaemia spherocytosis glandular fever splenectomy hyposplenism asplenia encapsulated bacteria pneumococcal Hib meningococcal penicillin V prophylaxis Howell-Jolly`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'An enlarged spleen is a physical sign, not a diagnosis — the task is to work back to its cause, grouped as haematological, infective, infiltrative or portal hypertension. Spleen size is a useful discriminator. Separately, the hyposplenic/asplenic patient (after splenectomy or from functional asplenia) needs lifelong protection against overwhelming infection — a key ongoing GP responsibility.',
    },

    { type: 'heading', level: 2, text: 'Causes by Spleen Size' },
    {
      type: 'table',
      headers: ['Size', 'Think'],
      rows: [
        ['Massive (crosses midline / >8 cm below costal margin)', 'Chronic myeloid leukaemia, myelofibrosis; chronic malaria / visceral leishmaniasis (tropical)'],
        ['Moderate', 'The above PLUS lymphoproliferative disease (lymphoma/CLL), other leukaemias, ITP, and infiltration (amyloid, sarcoid, Gaucher\'s, Felty\'s syndrome)'],
        ['Tip / mild', 'The above PLUS portal hypertension (cirrhosis), haemolytic anaemia (e.g. hereditary spherocytosis), and infections (EBV/glandular fever, infective endocarditis, hepatitis)'],
      ],
      caption: 'Hepatosplenomegaly especially suggests myelo/lymphoproliferative disease, portal hypertension, or infection.',
    },

    { type: 'heading', level: 2, text: 'Examination & Investigation' },
    {
      type: 'list',
      items: [
        'A splenic mass: arises in the left upper quadrant, moves inferomedially with inspiration, is dull to percussion, has a palpable notch, and you CANNOT get above it or ballot it (unlike a kidney).',
        'Examine for lymphadenopathy, hepatomegaly, stigmata of chronic liver disease, and features of infective endocarditis or rheumatological disease.',
        'Investigate: FBC and blood film, LFTs, and abdominal ultrasound; then targeted work-up — haematological (staging CT, bone marrow, lymph-node biopsy) or infective (malaria films, viral serology).',
        'Refer to haematology for unexplained splenomegaly or where a haematological cause is suspected.',
      ],
    },

    { type: 'heading', level: 2, text: 'Splenectomy & Hyposplenism' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Lifelong Infection Prevention After Splenectomy / Asplenia',
      items: [
        'The (hypo)splenic patient is at high risk of overwhelming post-splenectomy infection (OPSI) with ENCAPSULATED bacteria — pneumococcus, meningococcus, and Haemophilus influenzae type b.',
        'Vaccinate (ideally ≥2 weeks BEFORE elective splenectomy, or asap after emergency splenectomy): pneumococcal (PPV23 with boosters), Hib/MenC, MenACWY and MenB, and annual influenza.',
        'Lifelong prophylactic penicillin V (or a macrolide if penicillin-allergic) — at least for the first 2 years and in all higher-risk patients; provide a standby ("rescue") antibiotic course for febrile illness.',
        'Carry a splenectomy/asplenia alert card; seek urgent care for any fever; take malaria prophylaxis and anti-tick/animal-bite precautions seriously when travelling.',
        'Remember functional causes of hyposplenism: sickle cell disease (autosplenectomy) and coeliac disease (a blood film may show Howell-Jolly bodies).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'Green Book — Asplenia/Splenic Dysfunction Immunisation', url: 'https://www.gov.uk/government/publications/immunisation-of-individuals-with-underlying-medical-conditions-the-green-book-chapter-7' },
        { label: 'BSH — Prevention & Treatment of Infection in Asplenia', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NICE CKS — Splenomegaly/Haematology', url: 'https://cks.nice.org.uk/specialities/haematology/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Myelo/lymphoproliferative causes of splenomegaly' },
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'Splenic sequestration and functional asplenia' },
        { id: 'immunisation-schedule', label: 'Immunisation Schedule', subtitle: 'Asplenia vaccination requirements' },
        { id: 'glandular-fever', label: 'Glandular Fever', subtitle: 'Common infective cause; splenic rupture risk' },
        { id: 'polycythaemia', label: 'Polycythaemia', subtitle: 'Splenomegaly in myeloproliferative neoplasms' },
      ],
    },

  ],
}
