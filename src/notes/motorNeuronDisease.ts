import type { Note } from '../data/notes'

export const motorNeuronDisease: Note = {
  id: 'motor-neuron-disease',
  title: 'Motor Neuron Disease (MND)',
  subtitle: 'Mixed UMN/LMN signs, no sensory loss, riluzole, symptom control and advance care planning',
  tags: ['neurology'],

  body: `motor neuron disease MND amyotrophic lateral sclerosis ALS primary lateral sclerosis progressive muscular atrophy bulbar fasciculations wasting spasticity riluzole dysphagia dysarthria PEG NIV frontotemporal dementia RESPECT no sensory`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG42 — Motor Neurone Disease', url: 'https://www.nice.org.uk/guidance/ng42' },
        { label: 'NICE CKS — Motor Neurone Disease', url: 'https://cks.nice.org.uk/topics/motor-neurone-disease/' },
        { label: 'MND Association', url: 'https://www.mndassociation.org/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Recognition' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Suspect MND — Refer Urgently to Neurology',
      items: [
        'Progressive, often asymmetrical, painless limb weakness with WASTING and FASCICULATIONS, combining upper and lower motor neuron signs (e.g. brisk reflexes in a wasted, weak limb) — with NO sensory involvement (a key discriminator)',
        'Bulbar features (~25% at onset): dysarthria (slurred speech), dysphagia, tongue wasting/fasciculation, drooling',
        'No sphincter disturbance early, and eye movements are usually spared',
        'Red-flag combinations: split hand wasting, foot drop with fasciculations, progressive dysarthria — refer urgently (do not wait)',
      ],
    },

    { type: 'heading', level: 2, text: 'Subtypes' },

    {
      type: 'table',
      headers: ['Type', 'Features & prognosis'],
      rows: [
        ['Amyotrophic lateral sclerosis (ALS)', 'Commonest; mixed UMN + LMN; median survival ~2–3 years'],
        ['Progressive bulbar palsy', 'Bulbar-onset (speech/swallow); poorer prognosis'],
        ['Primary lateral sclerosis (PLS)', 'Rare, pure UMN (spasticity); slowest progression'],
        ['Progressive muscular atrophy (PMA)', 'Pure LMN (wasting, flaccid weakness); intermediate'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management (Specialist MDT + GP)' },

    {
      type: 'list',
      items: [
        'No cure; care is coordinated by a neurology/MND MDT with a specialist nurse, physiotherapy, OT, SALT, dietitian and respiratory/palliative teams',
        'Riluzole is the only licensed disease-modifying drug (for ALS) — modestly slows progression/extends survival (~few months); monitor LFTs and FBC',
        'Symptom control: muscle cramps/spasticity (quinine, baclofen, gabapentin, stretching/orthoses); hypersalivation (glycopyrronium or amitriptyline; botulinum toxin if refractory); emotional lability/pseudobulbar affect (amitriptyline, SSRI)',
        'Nutrition: early SALT assessment and consideration of gastrostomy (PEG/RIG) before swallowing/respiratory function deteriorates',
        'Respiratory: monitor for respiratory muscle weakness (breathlessness, orthopnoea, morning headaches); non-invasive ventilation (NIV) improves symptoms and survival; opioids/benzodiazepines for breathlessness and distress',
        'Cognition: association with frontotemporal dementia — assess and support',
        'Advance care planning early (RESPECT form, ventilation and feeding wishes, preferred place of care); involve palliative care early',
        'Signpost the MND Association',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'multiple-sclerosis', label: 'Multiple Sclerosis', subtitle: 'Other progressive neuro-disability — but MS has sensory signs' },
        { id: 'palliativeEOL', label: 'Palliative & End of Life Care', subtitle: 'Advance care planning, breathlessness, anticipatory care' },
        { id: 'dysphagia', label: 'Dysphagia', subtitle: 'Bulbar swallowing difficulty and aspiration risk' },
        { id: 'neuropathic-pain', label: 'Neuropathic Pain & Gabapentinoids', subtitle: 'Cramp/spasticity and pain management' },
      ],
    },

  ],
}
