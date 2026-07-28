import type { Note } from '../data/notes'

export const dvlaFitnessToDrive: Note = {
  id: 'dvla-fitness-to-drive',
  title: 'DVLA Fitness to Drive',
  subtitle: 'A consolidated reference — who must notify, common condition rules (Group 1 vs 2) and the GP\'s duties',
  tags: ['general'],

  body: `DVLA fitness to drive Group 1 Group 2 notify licence seizure epilepsy syncope stroke TIA diabetes hypoglycaemia visual field MI arrhythmia dementia alcohol drugs confidentiality GMC breach mandatory reporting`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Driving fitness is a frequent, and sometimes medicolegally fraught, part of general practice. The core principle is that it is the PATIENT\'S legal duty to notify the DVLA of a relevant condition — but the GP must advise them of that duty, document it, and, in defined circumstances, breach confidentiality to inform the DVLA if a patient continues to drive against advice. Rules differ for Group 1 (car/motorcycle) and the stricter Group 2 (lorry/bus). Always check the current DVLA guidance for the specific condition — the thresholds change.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Who Notifies, and the GP\'s Role',
      items: [
        'The DUTY to notify the DVLA rests with the driver (and to inform their insurer). The GP\'s role is to advise the patient of that duty and any need to stop driving, and to record this clearly.',
        'Advise a patient NOT to drive when a condition/medication makes it unsafe, and that continuing may invalidate their insurance.',
        'If a patient lacks insight/capacity, or continues to drive against advice despite reasonable efforts to persuade them (and to involve carers), the GMC permits — and expects — you to inform the DVLA medical adviser, ideally after telling the patient of your intention. Document the reasoning.',
      ],
    },

    { type: 'heading', level: 2, text: 'Common Condition Rules (Group 1 — Car/Motorcycle)' },
    {
      type: 'table',
      headers: ['Condition', 'Typical Group 1 rule (check current DVLA)'],
      rows: [
        ['First unprovoked/single seizure', 'Stop driving; must not drive for 6 months (longer if abnormal investigations); epilepsy = 12 months seizure-free (or established pattern)'],
        ['Simple faint (typical vasovagal)', 'No restriction; unexplained syncope/likely-cardiac → 4 weeks off (or 6 months if recurrent/no cause)'],
        ['Stroke / TIA', 'Must not drive for 1 month; may resume after 1 month if satisfactory recovery (no need to notify unless deficit persists >1 month or multiple TIAs)'],
        ['MI / ACS', 'Stop for 1 week (after successful PCI) or 4 weeks (no PCI); no need to notify Group 1'],
        ['Diabetes on insulin', 'Must notify; must recognise hypos, monitor glucose, and have had no severe hypo (needing help) — ≥2 severe hypos while awake within 12 months bars driving'],
        ['Dementia / cognitive impairment', 'Must notify; licence depends on severity/safety assessment'],
      ],
      caption: 'Group 2 (lorry/bus) rules are substantially stricter and longer for almost every condition. This table is an aide-memoire — always verify against the live "Assessing Fitness to Drive" guide.',
    },

    { type: 'heading', level: 2, text: 'Other Common Triggers to Remember' },
    {
      type: 'list',
      items: [
        'Visual: must meet the number-plate standard and visual-field/acuity requirements; conditions affecting fields (glaucoma, stroke, retinopathy) may need notification.',
        'Alcohol/drug misuse or dependence; sedating medication (advise about impairment — driving while impaired is an offence).',
        'Severe sleep apnoea with excessive sleepiness → stop until controlled and notify.',
        'Arrhythmias, ICDs/pacemakers, and significant cardiac disease have specific rules.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'DVLA — Assessing Fitness to Drive (Clinician Guide)', url: 'https://www.gov.uk/government/publications/assessing-fitness-to-drive-a-guide-for-medical-professionals' },
        { label: 'GOV.UK — Tell DVLA About a Medical Condition', url: 'https://www.gov.uk/health-conditions-and-driving' },
        { label: 'GMC — Confidentiality: Reporting to the DVLA', url: 'https://www.gmc-uk.org/professional-standards/professional-standards-for-doctors/confidentiality' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'epilepsyAdults', label: 'Epilepsy (Adults)', subtitle: 'Seizure driving rules and counselling' },
        { id: 'syncope', label: 'Syncope & Collapse', subtitle: 'Driving rules after faints/blackouts' },
        { id: 'stroke-tia', label: 'Stroke & TIA', subtitle: '1-month rule and Group 2 restrictions' },
        { id: 'dementia', label: 'Dementia', subtitle: 'Notification and capacity considerations' },
        { id: 'hypoglycaemia', label: 'Hypoglycaemia', subtitle: 'Severe-hypo rules for insulin-treated drivers' },
      ],
    },

  ],
}
