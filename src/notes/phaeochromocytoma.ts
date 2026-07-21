import type { Note } from '../data/notes'

export const phaeochromocytoma: Note = {
  id: 'phaeochromocytoma',
  title: 'Phaeochromocytoma & Paraganglioma',
  subtitle: 'The catecholamine-secreting tumour — when to suspect it, plasma metanephrines and alpha-before-beta blockade',
  tags: ['endocrine'],

  body: `phaeochromocytoma paraganglioma catecholamine secreting tumour adrenal metanephrines normetanephrines plasma urinary paroxysmal hypertension headache sweating palpitations alpha blockade phenoxybenzamine doxazosin beta blocker MEN2 VHL SDH secondary hypertension`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'Endocrine Society — Pheochromocytoma Guideline', url: 'https://www.endocrine.org/clinical-practice-guidelines' },
        { label: 'NICE CKS — Hypertension (Secondary Causes)', url: 'https://cks.nice.org.uk/topics/hypertension/' },
        { label: 'Society for Endocrinology', url: 'https://www.endocrinology.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Suspect (Rare but Dangerous)',
      items: [
        'The classic triad — episodic Headache, Sweating and Palpitations — especially with paroxysmal or resistant hypertension',
        'Hypertension in a young person, resistant to ≥3 agents, or with a hypertensive crisis triggered by anaesthesia/surgery/beta-blockade',
        'An incidentally found adrenal mass ("incidentaloma") — always exclude phaeochromocytoma biochemically before any biopsy or surgery',
        'A relevant family/genetic syndrome (MEN2, von Hippel-Lindau, neurofibromatosis type 1, succinate dehydrogenase [SDH] mutations)',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },

    {
      type: 'list',
      items: [
        'First-line: plasma free metanephrines OR 24-hour urinary fractionated metanephrines — high sensitivity',
        'Advise on pre-test factors that cause false positives (caffeine, paracetamol, tricyclics, some interference); take plasma sample supine/rested where possible',
        'If biochemistry is positive → refer to endocrinology; cross-sectional imaging (CT/MRI adrenals) then functional imaging (MIBG/PET) to localise',
        'Genetic testing is offered — up to ~40% have an underlying germline mutation; paragangliomas are the extra-adrenal counterpart',
      ],
    },

    { type: 'heading', level: 2, text: 'Management Principle — Alpha Before Beta' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Never Give a Beta-Blocker First',
      items: [
        'Definitive treatment is surgical resection (laparoscopic adrenalectomy) by a specialist centre',
        'Pre-operative alpha-blockade (e.g. phenoxybenzamine or doxazosin) is started first to control blood pressure and allow volume re-expansion',
        'A beta-blocker may be ADDED afterwards for tachycardia — but giving a beta-blocker before adequate alpha-blockade leaves unopposed alpha-mediated vasoconstriction → hypertensive crisis',
        'Adequate salt/fluid intake and blood-pressure targets are met before surgery; the anaesthetic team manages intra-operative surges',
      ],
    },

    {
      type: 'list',
      items: [
        'A hypertensive crisis (severe headache, chest pain, very high BP, end-organ signs) is a medical emergency → same-day assessment; phentolamine/IV alpha-blockade in hospital',
        'Lifelong follow-up with annual biochemistry — recurrence and multifocal/malignant disease occur, especially in hereditary cases',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypertension', label: 'Hypertension', subtitle: 'Resistant/secondary hypertension work-up' },
        { id: 'palpitations', label: 'Palpitations', subtitle: 'Paroxysmal palpitations differential' },
        { id: 'cushings-syndrome', label: 'Cushing\'s Syndrome', subtitle: 'Another endocrine cause of secondary hypertension' },
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'The opposite adrenal disorder; post-adrenalectomy replacement' },
        { id: 'anxiety-gad', label: 'Generalised Anxiety Disorder', subtitle: 'Mimics episodic adrenergic symptoms' },
      ],
    },

  ],
}
