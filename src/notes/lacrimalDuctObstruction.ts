import type { Note } from '../data/notes'

export const lacrimalDuctObstruction: Note = {
  id: 'lacrimal-duct-obstruction',
  title: 'Watery/Sticky Eye in Infancy (Lacrimal Duct Obstruction)',
  subtitle: 'Congenital nasolacrimal duct obstruction, massage, and the red flags that are NOT a blocked duct',
  tags: ['ophthalmology', 'paediatrics'],

  body: `congenital nasolacrimal duct obstruction watery eye epiphora sticky eye infant Crigler massage probing dacryocystitis conjunctivitis ophthalmia neonatorum congenital glaucoma buphthalmos red reflex white pupil`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A watery, sometimes sticky, eye in a baby is very common and is usually due to congenital nasolacrimal duct obstruction — a membrane at the lower end of the tear duct that has not yet opened. It is benign and the great majority resolve spontaneously by 12 months. The GP task is simple reassurance and massage advice, while confidently excluding the more serious causes of a watery or sticky infant eye.',
    },

    { type: 'heading', level: 2, text: 'Congenital Nasolacrimal Duct Obstruction' },
    {
      type: 'list',
      items: [
        'Persistent watering (epiphora) and tear-film debris/stickiness, often with recurrent crusting, usually from the first weeks of life; the eye itself is WHITE and not inflamed (the conjunctiva is not red).',
        'Reassure: ~90% resolve spontaneously by age 1 as the duct canalises.',
        'Advice: lacrimal-sac MASSAGE (Crigler technique — firm downward strokes over the tear-duct area beside the nose, a few times a day) and gentle cleansing of discharge with cooled boiled water; treat clear-cut secondary conjunctivitis if present.',
        'Refer to ophthalmology if not resolved by ~12 months (for probing ± syringing under anaesthetic), or earlier if recurrent infection/dacryocystitis.',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Acute Dacryocystitis',
      items: [
        'A tender, red, swollen lump over the lacrimal sac (at the inner canthus) with the eye becoming inflamed → infection of the obstructed sac. Treat with oral antibiotics and refer; admit if the child is systemically unwell or there is spreading/periorbital cellulitis.',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — NOT a Simple Blocked Duct' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Think Beyond the Tear Duct',
      items: [
        'Ophthalmia neonatorum (conjunctivitis in the first 28 days): a red eye with purulent discharge in a neonate can be gonococcal (hyperacute, profuse pus — sight-threatening, same-day) or chlamydial → urgent assessment, swabs (including for STIs) and treatment; involves treating the mother/partners.',
        'Congenital glaucoma: watering PLUS photophobia, an enlarged/cloudy cornea (buphthalmos) and blepharospasm → urgent ophthalmology (sight-threatening).',
        'An absent red reflex / white pupil (leucocoria) → urgent ophthalmology to exclude retinoblastoma/cataract.',
        'A red, painful, or photophobic eye, or any visual concern, is never simply a blocked duct — refer.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Conjunctivitis (Infective)', url: 'https://cks.nice.org.uk/topics/conjunctivitis-infective/' },
        { label: 'RCOphth — Patient Information', url: 'https://www.rcophth.ac.uk/' },
        { label: 'NHS — Watering Eyes', url: 'https://www.nhs.uk/conditions/watering-eyes/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'conjunctivitis', label: 'Conjunctivitis', subtitle: 'Infective conjunctivitis and ophthalmia neonatorum' },
        { id: 'red-eye', label: 'Red Painful Eye', subtitle: 'The red-flag causes to exclude' },
        { id: 'neonatal-jaundice', label: 'Neonatal Jaundice', subtitle: 'Wider newborn assessment / red reflex' },
        { id: '6-8-week-check', label: '6–8 Week Baby Check', subtitle: 'Red reflex and eye examination' },
      ],
    },

  ],
}
