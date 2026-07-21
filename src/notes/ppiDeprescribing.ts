import type { Note } from '../data/notes'

export const ppiDeprescribing: Note = {
  id: 'ppi-deprescribing',
  title: 'PPIs — Side Effects & Deprescribing',
  subtitle: 'Long-term proton pump inhibitor risks, when to review, and how to step down safely',
  tags: ['prescribing'],

  body: `proton pump inhibitor PPI omeprazole lansoprazole deprescribing long term risks hypomagnesaemia B12 osteoporosis fracture C difficile rebound acid hypersecretion step down on demand famotidine review indication clopidogrel interaction`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Dyspepsia (Proven Non-Ulcer)', url: 'https://cks.nice.org.uk/topics/dyspepsia-proven-non-ulcer/' },
        { label: 'PrescQIPP — PPI Deprescribing', url: 'https://www.prescqipp.info/' },
        { label: 'BNF — Proton Pump Inhibitors', url: 'https://bnf.nice.org.uk/treatment-summaries/proton-pump-inhibitors/' },
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Effective Drugs, but Often Continued Without Review',
      items: [
        'PPIs are very effective and generally safe, but are frequently continued long-term without a clear ongoing indication',
        'Regularly review the indication — many patients started for a self-limiting reason (short GORD course, steroid/NSAID cover that has stopped) can stop or step down',
        'Deprescribing reduces polypharmacy, cost and long-term risk, but must be balanced against genuine ongoing need',
      ],
    },

    { type: 'heading', level: 2, text: 'Long-Term Risks (Mostly Modest, Association-Based)' },

    {
      type: 'table',
      headers: ['Risk', 'Notes'],
      rows: [
        ['Hypomagnesaemia', 'Can be significant; check magnesium if on long-term PPI with symptoms or on diuretics/digoxin'],
        ['Vitamin B12 deficiency', 'Reduced absorption over years; consider checking in long-term users'],
        ['Osteoporotic fracture', 'Small increased risk with prolonged high-dose use — relevant in at-risk patients'],
        ['Enteric infections', 'Increased C. difficile and other GI infection risk'],
        ['CKD / hyponatraemia / interstitial nephritis', 'Reported associations; rarely, idiosyncratic acute interstitial nephritis'],
      ],
    },

    { type: 'heading', level: 2, text: 'When NOT to Stop (Ongoing Indication)' },

    {
      type: 'list',
      items: [
        'Continue where there is a clear ongoing need: Barrett\'s oesophagus, severe oesophagitis/stricture, documented bleeding peptic ulcer, Zollinger-Ellison, and ongoing gastroprotection (e.g. long-term NSAID/antiplatelet in a high-risk patient)',
        'Note the clopidogrel interaction concern — where gastroprotection is needed with clopidogrel, use a PPI with less CYP2C19 effect (e.g. lansoprazole/pantoprazole) rather than omeprazole/esomeprazole',
      ],
    },

    { type: 'heading', level: 2, text: 'How to Deprescribe' },

    {
      type: 'list',
      items: [
        'Confirm no ongoing indication, then step down: halve the dose for a few weeks, then move to an "on-demand"/as-needed approach, or stop',
        'Warn about rebound acid hypersecretion — symptoms can transiently worsen for 1–2 weeks after stopping; this is expected and usually settles',
        'Bridge with lifestyle measures (weight loss, smaller meals, reduce alcohol/caffeine, raise the bed head, stop smoking), antacids/alginates PRN, or a short course of an H2-blocker (e.g. famotidine)',
        'Safety-net: if alarm features develop (dysphagia, weight loss, GI bleeding, persistent vomiting) → reassess and refer as appropriate',
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
