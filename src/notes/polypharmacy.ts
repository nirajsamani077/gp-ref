import type { Note } from '../data/notes'

export const polypharmacy: Note = {
  id: 'polypharmacy',
  title: 'Polypharmacy, Multimorbidity & Anticholinergic Burden',
  subtitle: 'Structured medication review, deprescribing, the anticholinergic burden and problematic polypharmacy',
  tags: ['prescribing'],

  body: `polypharmacy multimorbidity deprescribing structured medication review SMR anticholinergic burden ACB falls cognitive impairment STOPP START criteria pill burden adherence problematic appropriate polypharmacy treatment burden NNT frailty`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Polypharmacy — the use of multiple medicines — is often entirely appropriate in multimorbidity, but tips into "problematic polypharmacy" when the medicines no longer provide benefit proportionate to their harms, burden and interactions. As populations age, structured medication review and thoughtful deprescribing become core GP skills. The goal is not simply fewer drugs, but the right drugs for this person\'s goals — balancing evidence, life expectancy, frailty and what matters to them.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Appropriate vs Problematic Polypharmacy',
      items: [
        'Appropriate: medicines optimised to manage the patient\'s conditions, where benefit outweighs harm and aligns with their priorities.',
        'Problematic: multiple medicines prescribed inappropriately, or where the intended benefit is not realised — drug interactions, high pill burden/poor adherence, prescribing cascades, and continued medicines with no ongoing indication.',
        'Single-disease guidelines summed across several conditions can produce an unmanageable, sometimes harmful, regimen — this is where individualised review adds value.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Structured Medication Review (SMR)' },
    {
      type: 'list',
      items: [
        'A patient-centred, shared-decision review of ALL medicines (including OTC/herbal), ideally with the notes, latest bloods and the patient\'s own account of what they actually take and value.',
        'For each medicine ask: Is there still a valid indication? Is it effective (and would the patient notice if stopped)? Is it safe (interactions, monitoring, renal/hepatic function)? Is the benefit worthwhile given life expectancy and frailty? Does the patient want to take it?',
        'Use validated tools to prompt review: STOPP/START criteria (potentially inappropriate prescriptions and prescribing omissions in older people) and NO TEARS / the 7-Steps approach.',
        'Prioritise the highest-risk combinations: the "triple whammy" (NSAID + ACEi/ARB + diuretic → AKI), anticoagulant + antiplatelet, multiple sedatives/opioids, and drugs that lower BP/cause falls.',
      ],
    },

    { type: 'heading', level: 2, text: 'Anticholinergic Burden' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Cumulative Anticholinergic Effect',
      items: [
        'Many common drugs have anticholinergic activity — the CUMULATIVE burden (measured by scales such as the ACB) is associated with falls, confusion/cognitive decline, and increased mortality in older people.',
        'Culprits include: amitriptyline and other tricyclics, oxybutynin/tolterodine (bladder antimuscarinics), sedating antihistamines (chlorphenamine, hydroxyzine, promethazine), some antipsychotics, hyoscine, and older antidepressants.',
        'Reducing the total anticholinergic load — by switching to lower-burden alternatives (e.g. a beta-3 agonist for overactive bladder, a non-sedating antihistamine) or stopping — is a high-value deprescribing target, especially in dementia and falls.',
      ],
    },

    { type: 'heading', level: 2, text: 'Deprescribing Safely' },
    {
      type: 'list',
      items: [
        'Agree goals with the patient/carer; deprescribe one drug at a time where possible, with a clear plan and monitoring.',
        'Taper drugs with withdrawal/rebound effects (benzodiazepines/Z-drugs, opioids, gabapentinoids, PPIs, beta-blockers, long-term steroids, antidepressants).',
        'Document the rationale and safety-net (what to look for if the condition returns); review the effect and be prepared to restart if needed.',
        'Target reviews at transitions (hospital discharge), the frail/housebound, care-home residents, those on ≥8–10 medicines or high-risk drugs, and end-of-life (align medicines with comfort/goals).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG5 — Medicines Optimisation', url: 'https://www.nice.org.uk/guidance/ng5' },
        { label: 'NICE NG56 — Multimorbidity', url: 'https://www.nice.org.uk/guidance/ng56' },
        { label: 'PrescQIPP — Polypharmacy & Deprescribing', url: 'https://www.prescqipp.info/' },
        { label: 'Scottish Polypharmacy Guidance (7-Steps)', url: 'https://www.polypharmacy.scot.nhs.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'frailty', label: 'Frailty', subtitle: 'Comprehensive assessment and individualised prescribing' },
        { id: 'elderly-falls', label: 'Falls in the Elderly', subtitle: 'Medication review is a core falls intervention' },
        { id: 'ppi-deprescribing', label: 'PPIs — Side Effects & Deprescribing', subtitle: 'A worked example of stepwise deprescribing' },
        { id: 'nsaids', label: 'NSAIDs', subtitle: 'The triple whammy and high-risk combinations' },
        { id: 'dementia', label: 'Dementia', subtitle: 'Anticholinergic burden and cognitive harm' },
        { id: 'capacity-mca', label: 'Mental Capacity Act', subtitle: 'Shared/best-interests decisions in medication review' },
      ],
    },

  ],
}
