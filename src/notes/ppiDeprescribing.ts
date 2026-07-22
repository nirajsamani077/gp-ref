import type { Note } from '../data/notes'

export const ppiDeprescribing: Note = {
  id: 'ppi-deprescribing',
  title: 'PPIs — Side Effects & Deprescribing',
  subtitle: 'Long-term proton pump inhibitor risks, when to continue, and how to step down safely',
  tags: ['prescribing'],

  body: `proton pump inhibitor PPI omeprazole lansoprazole pantoprazole esomeprazole deprescribing long term risks hypomagnesaemia B12 osteoporosis fracture C difficile interstitial nephritis rebound acid hypersecretion step down on-demand famotidine H2 blocker alginate review indication clopidogrel CYP2C19 Barrett's`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Proton pump inhibitors are very effective and generally safe, but they are one of the most over-continued drug classes in primary care — frequently prescribed for a self-limiting reason and then repeated indefinitely. Regular review of the indication, and structured deprescribing where there is no ongoing need, reduces polypharmacy, cost and the small long-term risks — while making sure the genuinely indicated patient stays protected.',
    },

    { type: 'heading', level: 2, text: 'Long-Term Risks (Mostly Modest, Association-Based)' },
    {
      type: 'table',
      headers: ['Risk', 'Notes'],
      rows: [
        ['Hypomagnesaemia', 'Can be clinically significant; check magnesium in long-term users with symptoms or on diuretics/digoxin'],
        ['Vitamin B12 deficiency', 'Reduced absorption over years — consider checking in long-term users'],
        ['Osteoporotic fracture', 'Small increased risk with prolonged high-dose use — relevant in at-risk patients'],
        ['Enteric infections', 'Increased C. difficile and other GI infection risk'],
        ['Renal', 'Reported association with CKD; rarely, idiosyncratic acute interstitial nephritis (and hyponatraemia)'],
      ],
      caption: 'Most associations are observational and of modest size — they justify REVIEW, not alarm; do not stop a genuinely indicated PPI on the basis of these alone.',
    },

    { type: 'heading', level: 2, text: 'When NOT to Stop (Ongoing Indication)' },
    {
      type: 'list',
      items: [
        'Continue where there is a clear ongoing need: Barrett\'s oesophagus, severe erosive oesophagitis/stricture, a documented bleeding peptic ulcer, Zollinger-Ellison syndrome, and ongoing gastroprotection (long-term NSAID or antiplatelet in a high-risk patient).',
        'Clopidogrel interaction: where gastroprotection is needed with clopidogrel, use a PPI with LESS CYP2C19 effect (lansoprazole or pantoprazole) rather than omeprazole/esomeprazole.',
      ],
    },

    { type: 'heading', level: 2, text: 'How to Deprescribe' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Step-Down Approach',
      items: [
        'Confirm no ongoing indication, then step down: halve the dose for a few weeks → move to an "on-demand"/as-needed approach → stop.',
        'Warn about REBOUND acid hypersecretion — symptoms can transiently worsen for 1–2 weeks after reducing/stopping; this is expected and settles, and is not a reason to automatically restart.',
        'Bridge with lifestyle measures (weight loss, smaller meals, reduce alcohol/caffeine, raise the bed head, stop smoking), antacids/alginates (e.g. Gaviscon) PRN, or a short course of an H2-blocker (famotidine).',
        'Safety-net: if ALARM features develop (dysphagia, weight loss, GI bleeding, persistent vomiting, iron-deficiency anaemia) → reassess and refer on the upper-GI pathway.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG184 — Dyspepsia & GORD', url: 'https://www.nice.org.uk/guidance/cg184' },
        { label: 'PrescQIPP — PPI Deprescribing Resources', url: 'https://www.prescqipp.info/' },
        { label: 'BNF — Proton Pump Inhibitors', url: 'https://bnf.nice.org.uk/treatment-summaries/proton-pump-inhibitors/' },
        { label: 'NICE CKS — Dyspepsia (Proven Non-Ulcer)', url: 'https://cks.nice.org.uk/topics/dyspepsia-proven-non-ulcer/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'The commonest indication and its management' },
        { id: 'barretts-oesophagus', label: 'Barrett\'s Oesophagus', subtitle: 'An indication to continue long-term PPI' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'Co-prescribed gastroprotection considerations' },
        { id: 'hiatus-hernia', label: 'Hiatus Hernia', subtitle: 'Common contributor to reflux symptoms' },
        { id: 'osteoporosis', label: 'Osteoporosis', subtitle: 'Fracture-risk consideration in long-term users' },
      ],
    },

  ],
}
