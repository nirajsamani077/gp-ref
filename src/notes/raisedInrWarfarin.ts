import type { Note } from '../data/notes'

export const raisedInrWarfarin: Note = {
  id: 'raised-inr-warfarin',
  title: 'High INR on Warfarin',
  subtitle: 'Managing over-anticoagulation by INR band and bleeding status — vitamin K and PCC',
  tags: ['haematology'],

  body: `high INR warfarin over anticoagulation bleeding vitamin K phytomenadione prothrombin complex concentrate PCC Beriplex major bleeding minor bleeding INR 5 8 target range reversal interactions antibiotics`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'BNF — Warfarin & Reversal', url: 'https://bnf.nice.org.uk/drugs/warfarin-sodium/' },
        { label: 'BSH — Oral Anticoagulation with Warfarin', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NICE CKS — Anticoagulation (Oral)', url: 'https://cks.nice.org.uk/topics/anticoagulation-oral/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Any Major Bleed → 999',
      items: [
        'Major bleeding (intracranial, GI, or any bleed causing haemodynamic compromise) → emergency admission regardless of INR',
        'Hospital treatment: STOP warfarin, give IV vitamin K 5 mg AND prothrombin complex concentrate (PCC, e.g. Beriplex) for immediate reversal (FFP only if PCC unavailable)',
        'Do not manage a major bleed in the community',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by INR & Bleeding (No/Minor Bleeding)' },

    {
      type: 'table',
      headers: ['Situation', 'Action'],
      rows: [
        ['Major bleeding (any INR)', 'Stop warfarin; admit; IV vitamin K 5 mg + PCC'],
        ['INR >8, minor bleeding', 'Stop warfarin; give IV vitamin K 1–3 mg; repeat if INR still high at 24h; restart warfarin when INR <5'],
        ['INR >8, no bleeding', 'Stop warfarin; give oral vitamin K 1–5 mg; recheck INR at 24h; restart when INR <5'],
        ['INR 5–8, minor bleeding', 'Stop warfarin; give IV vitamin K 1–3 mg; restart when INR <5'],
        ['INR 5–8, no bleeding', 'Withhold 1–2 doses; reduce maintenance dose; recheck INR'],
      ],
      caption: 'Use small doses of vitamin K — larger doses can make the patient refractory to re-warfarinisation.',
    },

    { type: 'heading', level: 2, text: 'Why Did the INR Rise? Find the Trigger' },

    {
      type: 'list',
      items: [
        'New interacting drug: antibiotics (especially macrolides, metronidazole, ciprofloxacin, co-trimoxazole), antifungals (fluconazole, miconazole — including oral gel), amiodarone, and many others potentiate warfarin',
        'Reduced vitamin K intake (poor diet/illness), acute alcohol excess, diarrhoeal illness, liver dysfunction, decompensated heart failure',
        'Dosing error or a change in adherence',
        'Always document the likely cause and adjust monitoring frequency; counsel the patient about interaction risks (including OTC and herbal products)',
      ],
    },

    { type: 'heading', level: 2, text: 'Practical Safety Points' },

    {
      type: 'list',
      items: [
        'Give the patient clear "what to do" advice for bleeding and for missed/extra doses; provide the yellow anticoagulant book/alert card',
        'Recheck INR within 2–3 days after any dose change or interacting course of treatment',
        'Consider whether a DOAC would be more appropriate long-term (fewer interactions, no routine monitoring) where not contraindicated',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'The commonest indication for anticoagulation' },
        { id: 'doacs', label: 'DOACs', subtitle: 'Alternative anticoagulants and their reversal' },
        { id: 'dvt', label: 'DVT', subtitle: 'VTE treatment indication for warfarin' },
        { id: 'pulmonary-embolism', label: 'Pulmonary Embolism', subtitle: 'VTE anticoagulation' },
        { id: 'upper-gi-bleed', label: 'GI Bleeding', subtitle: 'Common site of major anticoagulant-related bleeding' },
      ],
    },

  ],
}
