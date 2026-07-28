import type { Note } from '../data/notes'

export const priapism: Note = {
  id: 'priapism',
  title: 'Priapism',
  subtitle: 'The ischaemic-priapism emergency, causes (sickle cell, drugs), and time-critical referral',
  tags: ['urology'],

  body: `priapism ischaemic low-flow non-ischaemic high-flow persistent erection sickle cell intracavernosal injection PDE5 inhibitor trazodone antipsychotic aspiration corporal irrigation emergency urology 4 hours`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Priapism is a persistent penile erection (>4 hours) unrelated to, or continuing beyond, sexual stimulation. The critical distinction is ischaemic (low-flow) priapism — a compartment-syndrome-like urological EMERGENCY that causes permanent erectile dysfunction if not relieved promptly — versus the rarer non-ischaemic (high-flow) type, which is not an emergency.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Ischaemic Priapism → Same-Day Urology / ED',
      items: [
        'A painful, rigid erection lasting >4 hours is ischaemic priapism until proven otherwise — refer IMMEDIATELY to urology/ED; delay risks irreversible corporal fibrosis and permanent erectile dysfunction.',
        'Hospital management: cavernosal blood gas (dark, hypoxic, acidotic blood confirms ischaemia), aspiration of blood ± intracavernosal alpha-agonist (phenylephrine) irrigation, and shunt surgery if refractory.',
        'Time is tissue — the longer it persists, the worse the outcome.',
      ],
    },

    { type: 'heading', level: 2, text: 'Ischaemic vs Non-Ischaemic' },
    {
      type: 'table',
      headers: ['Feature', 'Ischaemic (low-flow)', 'Non-ischaemic (high-flow)'],
      rows: [
        ['Pain', 'Painful', 'Usually painless'],
        ['Rigidity', 'Fully rigid corpora', 'Partially rigid'],
        ['Mechanism', 'Veno-occlusive — trapped deoxygenated blood', 'Unregulated arterial inflow (often after perineal/genital trauma → fistula)'],
        ['Urgency', 'EMERGENCY', 'Not an emergency — refer routinely; often self-limits or embolisation'],
      ],
    },

    { type: 'heading', level: 2, text: 'Causes (Ischaemic)' },
    {
      type: 'list',
      items: [
        'Sickle cell disease (a common cause, including recurrent "stuttering" priapism in boys/young men — an important complication to ask about and safety-net).',
        'Drugs: intracavernosal injection therapy (alprostadil) and PDE5 inhibitors; trazodone and some antidepressants; antipsychotics (alpha-blockade); recreational drugs (cocaine); alpha-blockers.',
        'Haematological (leukaemia, myeloma), pelvic malignancy, and idiopathic.',
      ],
    },

    { type: 'heading', level: 2, text: 'Prevention & Follow-Up' },
    {
      type: 'list',
      items: [
        'Counsel men starting intracavernosal injections or with sickle cell to seek help urgently if an erection lasts >4 hours.',
        'Recurrent/stuttering priapism (esp. sickle cell) needs specialist management to prevent episodes.',
        'After an episode, arrange follow-up for erectile function and to address the underlying cause/medication.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BAUS — Priapism', url: 'https://www.baus.org.uk/patients/conditions/' },
        { label: 'NICE CKS — Erectile Dysfunction (Priapism note)', url: 'https://cks.nice.org.uk/topics/erectile-dysfunction/' },
        { label: 'NHS — Priapism', url: 'https://www.nhs.uk/conditions/priapism-painful-erections/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'sickle-cell', label: 'Sickle Cell Disease', subtitle: 'A key cause, incl. recurrent stuttering priapism' },
        { id: 'erectile-dysfunction', label: 'Erectile Dysfunction', subtitle: 'PDE5 inhibitors/injection therapy as causes' },
        { id: 'acute-testicular-pain', label: 'Acute Testicular Pain', subtitle: 'Other urological emergencies' },
        { id: 'antipsychotics-smi', label: 'Antipsychotics & SMI', subtitle: 'Alpha-blockade as a drug cause' },
      ],
    },

  ],
}
