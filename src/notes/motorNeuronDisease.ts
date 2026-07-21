import type { Note } from '../data/notes'

export const motorNeuronDisease: Note = {
  id: 'motor-neuron-disease',
  title: 'Motor Neuron Disease (MND)',
  subtitle: 'Mixed UMN/LMN signs with no sensory loss — riluzole, symptom control, NIV and advance care planning',
  tags: ['neurology'],

  body: `motor neuron disease MND amyotrophic lateral sclerosis ALS primary lateral sclerosis progressive muscular atrophy progressive bulbar palsy fasciculations wasting spasticity riluzole dysphagia dysarthria gastrostomy PEG RIG non-invasive ventilation NIV FVC frontotemporal dementia RESPECT split hand no sensory loss`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Motor neuron disease is a progressive neurodegenerative disorder of the upper and lower motor neurons, sparing sensory and (usually) eye-movement and sphincter function. It is incurable and life-limiting, so the GP\'s role spans early recognition and urgent referral, then long-term partnership with the specialist MDT for symptom control, anticipatory care and support of the patient and family.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect MND — Refer Urgently to Neurology',
      items: [
        'Progressive, often asymmetrical, PAINLESS weakness with WASTING and FASCICULATIONS, combining upper and lower motor neuron signs (e.g. brisk reflexes in a wasted, weak limb) — with NO sensory involvement (a key discriminator).',
        'Bulbar features (~25% at onset): dysarthria (slurred speech), dysphagia, tongue wasting/fasciculation, drooling; emotional lability (pseudobulbar affect).',
        'No sphincter disturbance early, and eye movements are usually spared.',
        'Red-flag combinations: "split hand" wasting, foot drop with fasciculations, and progressive dysarthria — refer urgently (do not wait to see how it evolves).',
      ],
    },

    { type: 'heading', level: 2, text: 'Subtypes' },
    {
      type: 'table',
      headers: ['Type', 'Features & prognosis'],
      rows: [
        ['Amyotrophic lateral sclerosis (ALS)', 'Commonest; mixed UMN + LMN; median survival ~2–3 years'],
        ['Progressive bulbar palsy', 'Bulbar onset (speech/swallow); poorer prognosis'],
        ['Primary lateral sclerosis (PLS)', 'Rare, pure UMN (spasticity); slowest progression'],
        ['Progressive muscular atrophy (PMA)', 'Pure LMN (wasting, flaccid weakness); intermediate prognosis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management (Specialist MDT + GP)' },
    {
      type: 'list',
      items: [
        'Care is coordinated by a neurology/MND MDT — specialist nurse, physiotherapy, OT, speech & language therapy, dietetics, respiratory and palliative teams — with the GP providing continuity and community care.',
        'Riluzole is the only licensed disease-modifying drug (for ALS) — modestly slows progression/extends survival (~few months); monitor LFTs and FBC.',
        'Nutrition: early SALT assessment; consider gastrostomy (PEG/RIG) BEFORE swallowing and respiratory function deteriorate (safer insertion).',
        'Respiratory: monitor for respiratory muscle weakness (breathlessness, orthopnoea, morning headaches, poor sleep); non-invasive ventilation (NIV) improves symptoms and survival; opioids/benzodiazepines relieve breathlessness and distress.',
        'Advance care planning EARLY — RESPECT/ReSPECT form, ventilation and feeding wishes, preferred place of care — and involve palliative care early, not just at the end.',
        'Signpost the MND Association (including local visitors and equipment loan).',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Symptom Control Toolkit',
      items: [
        'Cramps/spasticity: quinine (cramps), baclofen/tizanidine, gabapentin; stretching and orthoses.',
        'Hypersalivation/drooling: glycopyrronium or amitriptyline; hyoscine patches; botulinum toxin to salivary glands if refractory.',
        'Thick secretions: carbocisteine, adequate hydration, portable suction.',
        'Emotional lability (pseudobulbar affect): amitriptyline or an SSRI.',
        'Communication and mobility aids via SALT/OT; treat depression and support carers.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG42 — Motor Neurone Disease', url: 'https://www.nice.org.uk/guidance/ng42' },
        { label: 'NICE CKS — Motor Neurone Disease', url: 'https://cks.nice.org.uk/topics/motor-neurone-disease/' },
        { label: 'MND Association', url: 'https://www.mndassociation.org/' },
        { label: 'MND Scotland', url: 'https://www.mndscotland.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Other progressive neuro-disability — but MS has sensory signs' },
        { id: 'palliativeEOL', label: 'Palliative & End of Life Care', subtitle: 'Advance care planning, breathlessness, anticipatory care' },
        { id: 'dysphagia', label: 'Dysphagia', subtitle: 'Bulbar swallowing difficulty and aspiration risk' },
        { id: 'neuropathic-pain', label: 'Neuropathic Pain & Gabapentinoids', subtitle: 'Cramp/spasticity and pain management' },
        { id: 'guillain-barre', label: 'Guillain-Barré Syndrome', subtitle: 'Weakness differential — but GBS is acute with sensory symptoms' },
      ],
    },

  ],
}
