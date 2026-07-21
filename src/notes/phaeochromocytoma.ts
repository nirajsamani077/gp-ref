import type { Note } from '../data/notes'

export const phaeochromocytoma: Note = {
  id: 'phaeochromocytoma',
  title: 'Phaeochromocytoma & Paraganglioma',
  subtitle: 'The catecholamine-secreting tumour — when to suspect it, plasma metanephrines and alpha-before-beta blockade',
  tags: ['endocrine'],

  body: `phaeochromocytoma paraganglioma catecholamine secreting tumour adrenal incidentaloma plasma free metanephrines normetanephrines 24 hour urinary paroxysmal hypertension headache sweating palpitations alpha blockade phenoxybenzamine doxazosin beta blocker MEN2 VHL NF1 SDH hypertensive crisis phentolamine`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Phaeochromocytomas are rare catecholamine-secreting tumours of the adrenal medulla (paragangliomas are their extra-adrenal counterpart). They are important out of proportion to their rarity because they cause severe, sometimes fatal, hypertensive crises — and because a specific management principle (alpha-blockade before beta-blockade) can be lifesaving. Up to ~40% are part of an inherited syndrome.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'When to Suspect',
      items: [
        'The classic triad — episodic HEADACHE, SWEATING and PALPITATIONS — especially with paroxysmal or resistant hypertension.',
        'Hypertension that is young-onset, resistant to ≥3 agents, or associated with a crisis triggered by anaesthesia, surgery or beta-blockade.',
        'An incidentally found adrenal mass ("incidentaloma") — ALWAYS exclude phaeochromocytoma biochemically before any biopsy or surgery.',
        'A relevant genetic syndrome — MEN2, von Hippel-Lindau, neurofibromatosis type 1, or succinate dehydrogenase (SDH) mutations.',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigation' },
    {
      type: 'list',
      items: [
        'First-line: plasma free metanephrines OR 24-hour urinary fractionated metanephrines — high sensitivity (a normal result largely excludes it).',
        'Advise on pre-test factors that cause false positives (caffeine, paracetamol, tricyclics, acute stress); take the plasma sample supine and rested where the protocol allows.',
        'A positive biochemical result → refer to endocrinology; cross-sectional imaging (CT/MRI adrenals) then functional imaging (MIBG/PET) to localise.',
        'Offer genetic testing — a large proportion have a germline mutation; paragangliomas particularly associate with SDH mutations.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management Principle — Alpha Before Beta' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Never Give a Beta-Blocker First',
      items: [
        'Definitive treatment is surgical resection (usually laparoscopic adrenalectomy) at a specialist centre.',
        'Pre-operative ALPHA-blockade (phenoxybenzamine or doxazosin) is started FIRST to control blood pressure and allow volume re-expansion.',
        'A beta-blocker may be ADDED afterwards for tachycardia — but giving a beta-blocker before adequate alpha-blockade leaves unopposed alpha-mediated vasoconstriction → hypertensive crisis.',
        'The anaesthetic team manages intra-operative surges; blood-pressure targets and salt/fluid loading are achieved before surgery.',
      ],
    },
    {
      type: 'list',
      items: [
        'A hypertensive crisis (severe headache, chest pain, very high BP, end-organ signs) is a medical emergency → same-day assessment; IV alpha-blockade (phentolamine) in hospital.',
        'Lifelong follow-up with periodic biochemistry — recurrence and multifocal/malignant disease occur, especially in hereditary cases.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'Endocrine Society — Pheochromocytoma Guideline', url: 'https://www.endocrine.org/clinical-practice-guidelines' },
        { label: 'Society for Endocrinology — Patient Info', url: 'https://www.yourhormones.info/endocrine-conditions/phaeochromocytoma/' },
        { label: 'NICE CKS — Hypertension (Secondary Causes)', url: 'https://cks.nice.org.uk/topics/hypertension/' },
        { label: 'AMEND — Adrenal Tumour Support', url: 'https://www.amend.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypertension', label: 'Hypertension', subtitle: 'Resistant/secondary hypertension work-up' },
        { id: 'palpitations', label: 'Palpitations', subtitle: 'Paroxysmal palpitations differential' },
        { id: 'cushings-syndrome', label: 'Cushing\'s Syndrome', subtitle: 'Another endocrine cause of secondary hypertension' },
        { id: 'adrenal-insufficiency', label: 'Adrenal Insufficiency', subtitle: 'Post-adrenalectomy replacement; the opposite disorder' },
        { id: 'anxiety-gad', label: 'Generalised Anxiety Disorder', subtitle: 'Mimics episodic adrenergic symptoms' },
      ],
    },

  ],
}
