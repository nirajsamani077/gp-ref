import type { Note } from '../data/notes'

export const raisedInrWarfarin: Note = {
  id: 'raised-inr-warfarin',
  title: 'High INR on Warfarin',
  subtitle: 'Managing over-anticoagulation by INR band and bleeding status — vitamin K, PCC and finding the trigger',
  tags: ['haematology'],

  body: `high INR warfarin over anticoagulation bleeding vitamin K phytomenadione prothrombin complex concentrate PCC Beriplex Octaplex FFP major bleeding minor bleeding INR 5 8 target range interactions antibiotics miconazole amiodarone reversal`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A raised INR on warfarin is common and the response is dictated by two things: how high the INR is, and whether the patient is bleeding. Small doses of vitamin K are used to bring the INR down while preserving the ability to re-warfarinise; major bleeding needs immediate reversal in hospital with prothrombin complex concentrate. Every episode should also prompt a hunt for the trigger.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Any Major Bleed → 999 / Emergency',
      items: [
        'Major bleeding (intracranial, GI, or any bleed causing haemodynamic compromise) → emergency admission regardless of INR.',
        'Hospital treatment: STOP warfarin, give IV vitamin K 5 mg AND prothrombin complex concentrate (PCC, e.g. Beriplex/Octaplex) for immediate reversal (FFP only if PCC unavailable — slower and less effective).',
        'Do not attempt to manage a major bleed in the community.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management by INR & Bleeding (No/Minor Bleeding)' },
    {
      type: 'table',
      headers: ['Situation', 'Action'],
      rows: [
        ['Major bleeding (any INR)', 'Stop warfarin; admit; IV vitamin K 5 mg + PCC'],
        ['INR >8, minor bleeding', 'Stop warfarin; IV vitamin K 1–3 mg; repeat if INR still high at 24h; restart warfarin when INR <5'],
        ['INR >8, no bleeding', 'Stop warfarin; oral vitamin K 1–5 mg (use the IV preparation orally); recheck INR at 24h; restart when INR <5'],
        ['INR 5–8, minor bleeding', 'Stop warfarin; IV vitamin K 1–3 mg; restart when INR <5'],
        ['INR 5–8, no bleeding', 'Withhold 1–2 doses; reduce maintenance dose; recheck INR'],
      ],
      caption: 'Use SMALL doses of vitamin K — larger doses can make the patient refractory to re-warfarinisation for days.',
    },

    { type: 'heading', level: 2, text: 'Why Did the INR Rise? Find the Trigger' },
    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Interacting drugs (potentiate)', 'Antibiotics — macrolides, metronidazole, ciprofloxacin, co-trimoxazole; antifungals — fluconazole, MICONAZOLE (including the oral gel and vaginal use); amiodarone; SSRIs; cranberry juice/alcohol binge'],
        ['Reduced vitamin K / illness', 'Poor dietary intake, acute illness, diarrhoea/vomiting, decompensated heart failure, liver dysfunction'],
        ['Other', 'Dosing error, changed adherence, new hyperthyroidism, herbal/OTC products'],
      ],
    },
    {
      type: 'list',
      items: [
        'Document the likely cause, adjust the maintenance dose if appropriate, and increase monitoring frequency.',
        'Recheck INR within 2–3 days of any dose change or after an interacting course of treatment.',
        'Counsel the patient about interaction risks (including OTC/herbal and antifungal gels) and what to do if they bleed or miss/take extra doses; provide the yellow anticoagulant alert card.',
        'Consider whether a DOAC would be more suitable long-term (fewer interactions, no routine monitoring) where not contraindicated.',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BNF — Warfarin (Reversal & Monitoring)', url: 'https://bnf.nice.org.uk/drugs/warfarin-sodium/' },
        { label: 'BSH — Oral Anticoagulation with Warfarin (Guideline)', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NICE CKS — Anticoagulation (Oral)', url: 'https://cks.nice.org.uk/topics/anticoagulation-oral/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'The commonest indication for anticoagulation' },
        { id: 'doacs', label: 'DOACs', subtitle: 'Alternative anticoagulants and their reversal' },
        { id: 'dvt', label: 'DVT', subtitle: 'VTE treatment indication for warfarin' },
        { id: 'pulmonary-embolism', label: 'Pulmonary Embolism', subtitle: 'VTE anticoagulation' },
        { id: 'upper-gi-bleed', label: 'Upper GI Bleed', subtitle: 'Common site of major anticoagulant-related bleeding' },
      ],
    },

  ],
}
