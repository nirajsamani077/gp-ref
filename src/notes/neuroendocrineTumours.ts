import type { Note } from '../data/notes'

export const neuroendocrineTumours: Note = {
  id: 'neuroendocrine-tumours',
  title: 'Neuroendocrine Tumours & Carcinoid',
  subtitle: 'Rare, often indolent tumours — recognising carcinoid syndrome and the diagnostic delay',
  tags: ['oncology'],

  body: `neuroendocrine tumour NET carcinoid syndrome flushing diarrhoea wheeze serotonin 5-HIAA chromogranin A gut lung pancreatic gastrinoma insulinoma somatostatin analogue octreotide MEN1 tricuspid`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Neuroendocrine tumours (NETs) are a rare, heterogeneous group arising from neuroendocrine cells (most commonly in the gut, pancreas and lung). They are often slow-growing and produce vague, intermittent symptoms, so there is a notoriously long diagnostic delay. A GP is unlikely to see many, but keeping NETs in mind for unexplained flushing, chronic diarrhoea, or recurrent "atypical" symptoms is what shortens that delay.',
    },

    { type: 'heading', level: 2, text: 'When to Think of a NET' },
    {
      type: 'list',
      items: [
        'Persistent, unexplained symptoms that don\'t fit a common diagnosis: chronic diarrhoea, episodic flushing, recurrent abdominal pain, or unexplained wheeze.',
        'Functioning tumours secrete hormones producing recognisable syndromes; many NETs are non-functioning and present late with mass effect or metastases (often to the liver).',
        'Associations: MEN1 (parathyroid, pituitary, pancreatic NETs) and other familial syndromes — consider in young patients or with a family history.',
      ],
    },

    { type: 'heading', level: 2, text: 'Carcinoid Syndrome' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Flushing + Diarrhoea + Wheeze',
      items: [
        'Carcinoid syndrome (usually from a midgut NET with LIVER metastases secreting serotonin) causes episodic FLUSHING, secretory DIARRHOEA, and sometimes bronchospasm/wheeze and abdominal cramps.',
        'Right-sided cardiac valve disease (carcinoid heart disease — tricuspid) can develop over time.',
        'It is easily mislabelled as menopause, IBS, or asthma — the combination, or symptoms provoked by food/alcohol/stress, should prompt investigation.',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation & Management' },
    {
      type: 'list',
      items: [
        'Investigations (largely specialist-directed): 24-hour urinary 5-HIAA (a serotonin metabolite) for carcinoid, and serum chromogranin A as a general NET marker; specific gut hormones (gastrin, insulin) for suspected functioning pancreatic NETs.',
        'Imaging and localisation with CT/MRI and functional scans (e.g. Ga-68 DOTATATE PET); biopsy and grading determine treatment.',
        'Refer to a specialist NET centre/MDT. Treatment ranges from surgery (potentially curative for localised disease) to somatostatin analogues (octreotide/lanreotide — control symptoms and slow growth), targeted/peptide-receptor radionuclide therapy, and liver-directed therapies.',
        'Symptom control of carcinoid syndrome with somatostatin analogues; avoid known triggers; specialist follow-up for cardiac surveillance.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Neuroendocrine Cancer UK', url: 'https://www.neuroendocrinecancer.org.uk/' },
        { label: 'UKINETS — Guidelines', url: 'https://www.ukinets.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'night-sweats', label: 'Night Sweats & Flushing', subtitle: 'Carcinoid in the flushing differential' },
        { id: 'ibs', label: 'Irritable Bowel Syndrome', subtitle: 'A common misdiagnosis for NET diarrhoea' },
        { id: 'hyperparathyroidism', label: 'Hyperparathyroidism', subtitle: 'MEN1 association' },
        { id: 'weight-loss', label: 'Unintentional Weight Loss', subtitle: 'Non-functioning NET presenting late' },
      ],
    },

  ],
}
