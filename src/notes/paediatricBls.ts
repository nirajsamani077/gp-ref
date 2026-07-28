import type { Note } from '../data/notes'

export const paediatricBls: Note = {
  id: 'paediatric-bls',
  title: 'Paediatric Basic Life Support & Choking',
  subtitle: 'The paediatric BLS sequence (5 rescue breaths first), compression ratios, and choking algorithms',
  tags: ['paediatrics'],

  body: `paediatric basic life support BLS resuscitation child infant 5 rescue breaths 15:2 compressions choking foreign body airway obstruction back blows chest thrusts abdominal thrusts Heimlich AED newborn life support hypoxia`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Paediatric cardiac arrest is usually secondary to HYPOXIA (respiratory or circulatory failure) rather than a primary cardiac event — which is why paediatric basic life support differs from adult BLS by prioritising oxygenation with rescue breaths first. Every GP and practice team member should be competent in the paediatric sequence and the choking algorithms; this is a quick reference, not a substitute for hands-on resuscitation training.',
    },

    { type: 'heading', level: 2, text: 'Paediatric BLS Sequence' },
    {
      type: 'list',
      items: [
        'Ensure safety → check responsiveness (talk/gently stimulate) → shout for help.',
        'Open the airway (head tilt–chin lift; neutral position in an infant) and check breathing for up to 10 seconds.',
        'Give 5 INITIAL RESCUE BREATHS (this is the key difference from adult BLS — hypoxia is the usual cause).',
        'Then assess for signs of life/circulation; if absent (or clearly not breathing normally with no response), start chest compressions.',
        'Ratio 15:2 (15 compressions to 2 breaths) for healthcare/trained responders; rate 100–120/min; depth about one-third of the chest.',
        'After ~1 minute of CPR, call the emergency services / 999 if not already done (if alone), and get/attach an AED as soon as available.',
      ],
    },
    {
      type: 'table',
      headers: ['Age group', 'Compression technique'],
      rows: [
        ['Infant (<1 year)', 'Two-thumb encircling technique (or two fingers if alone), lower half of the sternum'],
        ['Child (1 year–puberty)', 'Heel of one hand (or two hands if needed), lower half of the sternum'],
        ['At/after puberty', 'Use the adult sequence and ratio (30:2 if lay/single rescuer)'],
      ],
      caption: 'Newborns/at-birth resuscitation follows the separate Newborn Life Support (NLS) algorithm (5 inflation breaths, 3:1 ratio).',
    },

    { type: 'heading', level: 2, text: 'Choking (Foreign Body Airway Obstruction)' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Effective vs Ineffective Cough',
      items: [
        'If the cough is EFFECTIVE (can breathe, cry, cough loudly): encourage coughing and monitor closely — do not intervene.',
        'If INEFFECTIVE (silent/weak cough, unable to breathe/cry, cyanosis, decreasing consciousness) but conscious → alternate 5 BACK BLOWS and then 5 thrusts, rechecking after each set.',
        'Thrusts: use CHEST thrusts in an INFANT (<1 year) — never abdominal thrusts in infants; use ABDOMINAL thrusts (Heimlich) in a child ≥1 year.',
        'If the child becomes UNCONSCIOUS → start CPR (beginning with airway/rescue breaths), and call 999. After a choking episode where thrusts were used, arrange assessment (risk of internal injury).',
      ],
    },

    { type: 'heading', level: 2, text: 'Practice Points' },
    {
      type: 'list',
      items: [
        'Ensure the practice has paediatric-appropriate emergency equipment (bag-valve-mask sizes, AED with paediatric pads/mode) and that staff have current resuscitation training.',
        'Anaphylaxis is a key reversible cause — have IM adrenaline and the anaphylaxis algorithm readily available (see Anaphylaxis).',
        'Debrief and refer any child who has been resuscitated or had a significant choking/collapse episode.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'Resuscitation Council UK — Paediatric BLS', url: 'https://www.resus.org.uk/library/2021-resuscitation-guidelines/paediatric-basic-life-support-guidelines' },
        { label: 'Resuscitation Council UK — Choking', url: 'https://www.resus.org.uk/' },
        { label: 'Resuscitation Council UK — Newborn Life Support', url: 'https://www.resus.org.uk/library/2021-resuscitation-guidelines/newborn-resuscitation-and-support-transition-infants-birth' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'anaphylaxis', label: 'Anaphylaxis', subtitle: 'IM adrenaline and the emergency algorithm' },
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Recognising the seriously unwell/deteriorating child' },
        { id: 'croup', label: 'Croup', subtitle: 'Stridor and paediatric airway problems' },
        { id: 'bronchiolitis', label: 'Bronchiolitis', subtitle: 'Respiratory failure as a cause of arrest' },
      ],
    },

  ],
}
