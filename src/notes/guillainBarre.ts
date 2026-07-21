import type { Note } from '../data/notes'

export const guillainBarre: Note = {
  id: 'guillain-barre',
  title: 'Guillain-Barré Syndrome (GBS)',
  subtitle: 'Ascending weakness after infection — the respiratory red flags, urgent admission and disease-modifying treatment',
  tags: ['neurology'],

  body: `Guillain-Barre syndrome GBS acute inflammatory demyelinating polyneuropathy AIDP AMAN ascending weakness areflexia Campylobacter jejuni Miller Fisher ophthalmoplegia ataxia nerve conduction lumbar puncture albuminocytological dissociation IVIG intravenous immunoglobulin plasma exchange respiratory failure forced vital capacity FVC 20 30 40 rule autonomic dysfunction anti-GM1 anti-GQ1b`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Guillain-Barré Syndrome', url: 'https://cks.nice.org.uk/specialities/neurology/' },
        { label: 'GAIN — GBS/CIDP Support', url: 'https://www.gaincharity.org.uk/' },
        { label: 'Brighton Collaboration — GBS Case Definition', url: 'https://brightoncollaboration.us/' },
        { label: 'NHS — Guillain-Barré Syndrome', url: 'https://www.nhs.uk/conditions/guillain-barre-syndrome/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspect GBS → Admit Urgently (Do Not Watch and Wait)',
      items: [
        'Progressive, usually ASCENDING, symmetrical limb weakness with reduced/absent reflexes, evolving over hours to days (nadir usually by 2–4 weeks) — often 1–3 weeks after a preceding infection',
        'Preceding triggers: Campylobacter jejuni gastroenteritis (classic), CMV, EBV, Mycoplasma, influenza/other viral illness, and (rarely) vaccination',
        'The threats to life are RESPIRATORY muscle failure and AUTONOMIC instability (labile BP, arrhythmias) — refer/admit urgently to neurology/acute medicine for monitoring; do not wait to see how it evolves',
        'Back and limb pain is common early and can mislead; sensory symptoms (paraesthesiae) may occur but weakness dominates',
      ],
    },

    { type: 'heading', level: 2, text: 'Respiratory Monitoring — the "20/30/40 Rule"' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Serial FVC Detects Impending Respiratory Failure',
      items: [
        'Bedside forced vital capacity (FVC) is monitored serially — falling values predict the need for ventilation BEFORE oxygen saturations drop',
        'FVC < 20 mL/kg, maximal inspiratory pressure worse than −30 cmH₂O, or maximal expiratory pressure < 40 cmH₂O signals impending failure → escalate to ITU',
        'A weak cough, difficulty counting to 20 in one breath, staccato speech, or orthopnoea are worrying bedside signs',
        'Never rely on pulse oximetry alone — desaturation is a late sign in neuromuscular respiratory failure',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis & Variants' },

    {
      type: 'list',
      items: [
        'GBS is an immune-mediated, post-infectious acute polyradiculoneuropathy; the commonest form is acute inflammatory demyelinating polyradiculoneuropathy (AIDP), with axonal variants (AMAN/AMSAN)',
        'Investigations (hospital): nerve conduction studies (demyelination/conduction block) and lumbar puncture showing albuminocytological dissociation — raised CSF protein with a normal white-cell count (may be normal in the first week)',
        'Antibodies: anti-GM1 (ganglioside) in some axonal cases; the Brighton criteria formalise diagnostic certainty',
      ],
    },

    {
      type: 'table',
      headers: ['Variant', 'Features', 'Antibody'],
      rows: [
        ['AIDP (classic)', 'Ascending demyelinating weakness + areflexia', 'Various'],
        ['Miller Fisher syndrome', 'Ophthalmoplegia, ataxia and areflexia (± minimal weakness)', 'Anti-GQ1b (~90%)'],
        ['AMAN (axonal motor)', 'Pure motor, often post-Campylobacter', 'Anti-GM1/GD1a'],
        ['Bickerstaff encephalitis', 'MFS features + drowsiness/upgoing plantars', 'Anti-GQ1b'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Supportive care with close respiratory and autonomic/cardiac monitoring (may need ITU and mechanical ventilation); VTE prophylaxis; careful analgesia (neuropathic pain agents); bladder/bowel and pressure care',
        'Disease-modifying treatment: IV immunoglobulin (IVIG) OR plasma exchange — equally effective; IVIG is usually more practical. Start early in significant/progressing disease',
        'Corticosteroids are NOT effective in GBS and should not be used',
        'Prognosis: most improve over weeks to months; ~80% walk independently by 6 months, but recovery can be slow/incomplete and a minority have lasting disability; mortality (~3–7%) is from respiratory/autonomic complications',
        'GP role after discharge: monitor for relapse/CIDP (progression beyond 8 weeks suggests CIDP), coordinate neuro-rehabilitation and physiotherapy, manage residual neuropathic pain and fatigue, and signpost GAIN for support',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'motor-neuron-disease', label: 'Motor Neuron Disease', subtitle: 'Progressive weakness differential (but MND has no sensory features)' },
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Other immune-mediated neurological disease' },
        { id: 'bells-palsy', label: "Bell's Palsy", subtitle: 'Facial weakness — bilateral facial weakness can occur in GBS' },
        { id: 'gastroenteritis-children', label: 'Gastroenteritis', subtitle: 'Campylobacter — the classic antecedent infection' },
        { id: 'neuropathic-pain', label: 'Neuropathic Pain', subtitle: 'Managing the prominent pain of GBS' },
      ],
    },

  ],
}
