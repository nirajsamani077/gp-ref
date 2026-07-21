import type { Note } from '../data/notes'

export const guillainBarre: Note = {
  id: 'guillain-barre',
  title: 'Guillain-Barré Syndrome (GBS)',
  subtitle: 'Ascending weakness after infection, respiratory monitoring, and urgent admission',
  tags: ['neurology'],

  body: `Guillain-Barre syndrome GBS acute inflammatory demyelinating polyneuropathy ascending weakness areflexia Campylobacter Miller Fisher ophthalmoplegia ataxia nerve conduction lumbar puncture albuminocytological IVIG plasma exchange respiratory failure FVC`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Guillain-Barré Syndrome', url: 'https://cks.nice.org.uk/specialities/neurology/' },
        { label: 'GAIN — GBS Support', url: 'https://www.gaincharity.org.uk/' },
        { label: 'ABN — Guidelines', url: 'https://www.theabn.org/page/guidelines' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspect GBS → Admit Urgently',
      items: [
        'Progressive, usually ASCENDING, symmetrical limb weakness with reduced/absent reflexes, developing over days — often 1–3 weeks after a preceding infection (classically Campylobacter gastroenteritis, also viral/COVID)',
        'Autonomic involvement (BP/heart-rate instability), and bulbar/respiratory muscle weakness → risk of respiratory failure and cardiovascular instability',
        'Refer/admit urgently to neurology/acute medicine for monitoring — serial FVC (forced vital capacity) to detect respiratory compromise; do NOT wait to see how it evolves',
        'Sensory symptoms (pain, paraesthesiae) may occur but weakness dominates; back/limb pain is common early',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis & Variants' },

    {
      type: 'list',
      items: [
        'An acute inflammatory demyelinating polyradiculoneuropathy (immune-mediated, post-infectious); anti-GM1 (ganglioside) antibodies in ~25%',
        'Investigations (hospital): nerve conduction studies (demyelination) and lumbar puncture — CSF shows albuminocytological dissociation (raised protein with a normal cell count), though it may be normal in the first week',
        'Miller Fisher variant: ophthalmoplegia, ataxia and areflexia (anti-GQ1b antibodies in ~90%)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Supportive care with close respiratory and autonomic monitoring (may need ITU and ventilation); VTE prophylaxis; pain management',
        'Disease-modifying treatment: IV immunoglobulin (IVIG) or plasma exchange (do NOT use corticosteroids — ineffective in GBS)',
        'Prognosis: most recover over weeks to months, but recovery can be slow/incomplete; a minority have long-term disability; some deaths from respiratory/autonomic complications',
        'Signpost GAIN for support',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'motor-neuron-disease', label: 'Motor Neuron Disease', subtitle: 'Progressive weakness differential (but MND has no sensory features)' },
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Other immune-mediated neurological disease' },
        { id: 'bells-palsy', label: "Bell's Palsy", subtitle: 'Facial weakness — bilateral facial weakness can occur in GBS' },
      ],
    },

  ],
}
