import type { Note } from '../data/notes'

export const paediatricCancer: Note = {
  id: 'paediatric-cancer',
  title: 'Childhood Cancer — Red Flags',
  subtitle: 'Recognising the leukaemias, brain tumours and solid tumours of childhood, and the urgent referral thresholds',
  tags: ['paediatrics'],

  body: `childhood cancer leukaemia ALL AML brain tumour lymphoma neuroblastoma Wilms tumour nephroblastoma retinoblastoma leucocoria bone tumour osteosarcoma Ewing rhabdomyosarcoma pallor bruising persistent bone pain abdominal mass headache HeadSmart`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Childhood cancer is rare but is a leading cause of death in children, and outcomes depend heavily on early recognition. The symptoms are often non-specific and overlap with common benign illness, so the skill is pattern recognition and appropriate safety-netting — persistent, unexplained, progressive or unusual symptoms deserve examination, a low threshold for a same-day FBC/blood film, and urgent referral.',
    },

    { type: 'heading', level: 2, text: 'Leukaemia (Commonest Childhood Cancer)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Persistent Pallor, Bruising, Fever or Bone Pain → Urgent FBC',
      items: [
        'Suspect leukaemia with unexplained persistent PALLOR/fatigue, easy BRUISING or bleeding, petechiae, recurrent/persistent infection or FEVER, bone/joint pain (a limping/refusing-to-walk child), lymphadenopathy, or hepatosplenomegaly.',
        'Arrange a very urgent (same-day) FBC and blood film — an abnormal count (anaemia, thrombocytopenia, abnormal white cells/blasts) needs immediate discussion with paediatric haematology/oncology.',
        'Unexplained petechiae/purpura or hepatosplenomegaly → immediate specialist referral.',
      ],
    },

    { type: 'heading', level: 2, text: 'Brain Tumours' },
    {
      type: 'list',
      items: [
        'Persistent or recurrent headache (especially waking/early-morning, or with vomiting), a change in behaviour/school performance, new squint/visual problems, unsteadiness/ataxia, or abnormal head position — think raised intracranial pressure/posterior fossa tumour.',
        'In infants: a rapidly increasing head circumference, developmental regression, or the "setting-sun" sign.',
        'Use the HeadSmart resource; refer urgently for imaging where there are persistent/progressive neurological features — do not repeatedly reassure a child with an evolving neurological picture.',
      ],
    },

    { type: 'heading', level: 2, text: 'Solid Tumours to Recognise' },
    {
      type: 'table',
      headers: ['Tumour', 'Classic clue'],
      rows: [
        ['Neuroblastoma', 'Abdominal mass in a young child (often <5), unwell, may cross the midline; bone pain, periorbital bruising'],
        ['Wilms tumour (nephroblastoma)', 'A painless abdominal mass/swelling in an otherwise well toddler — do not deeply palpate; urgent referral and imaging'],
        ['Retinoblastoma', 'LEUCOCORIA (a white pupil/absent red reflex, e.g. in photos) or a new squint — same-day ophthalmology; check the red reflex'],
        ['Bone tumours (osteosarcoma, Ewing)', 'Persistent localised bone pain/swelling in older children/adolescents, worse at night, ± a mass — X-ray and urgent referral'],
        ['Rhabdomyosarcoma / lymphoma', 'A persistent unexplained lump/mass, or lymphadenopathy with B symptoms'],
      ],
    },

    { type: 'heading', level: 2, text: 'General Principles' },
    {
      type: 'list',
      items: [
        'Take parental concern seriously — parents often notice subtle, persistent change; "not their usual self" over time is significant.',
        'A persistent, unexplained, or progressive symptom (mass, pain, neurological sign, bleeding/bruising, weight loss) warrants examination and urgent investigation/referral rather than repeated reassurance.',
        'Refer via the paediatric urgent/2WW pathway or discuss directly with paediatrics; when in doubt, a same-day FBC and a low threshold for specialist advice are the safest steps.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Children & Young People)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'HeadSmart — Brain Tumour Signs', url: 'https://www.headsmart.org.uk/' },
        { label: 'Children with Cancer UK', url: 'https://www.childrenwithcancer.org.uk/' },
        { label: 'CCLG — Children\'s Cancer & Leukaemia Group', url: 'https://www.cclg.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Leukaemia/lymphoma biology and adult context' },
        { id: 'limpingChild', label: 'Limping Child', subtitle: 'Bone pain/limp — leukaemia and bone tumour in the differential' },
        { id: 'brain-tumour', label: 'Brain Tumour & SOL', subtitle: 'Raised-ICP features and imaging' },
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Persistent fever and unwell-child assessment' },
        { id: 'neck-lumps', label: 'Neck Lumps', subtitle: 'Persistent lymphadenopathy work-up' },
      ],
    },

  ],
}
