import type { Note } from '../data/notes'

export const cancerPain: Note = {
  id: 'cancer-pain',
  title: 'Cancer Pain & Opioid Prescribing',
  subtitle: 'Opioid titration, conversion maths, patches and palliative prescribing in primary care',
  tags: ['palliative', 'prescribing', 'oncology'],

  body: 'cancer pain opioid morphine MST Zomorph Oramorph oxycodone fentanyl patch buprenorphine patch diamorphine SC subcutaneous conversion maths TDD total daily dose breakthrough dose 1/6 laxative constipation senna docusate naloxegol renal impairment palliative prescribing anticipatory CSCI syringe driver',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Principles of Cancer Pain Management',
      items: [
        'Start with paracetamol ± NSAID ± adjuvants (neuropathics, steroids) — but weak opioids (codeine, tramadol) rarely helpful in cancer pain; escalate to low-dose strong opioids early',
        'Standard approach: oral sustained-release (SR) morphine BD + immediate-release (IR) morphine PRN as breakthrough (1/6 of total daily dose, max 6 doses/day)',
        'ALWAYS co-prescribe a laxative — opioids ALWAYS cause constipation. Use senna + docusate (softener), NOT osmotic laxatives (patients often dehydrated)',
        'Nausea and sedation usually transient — reassure; if persists or dose too high, reduce',
        'Naloxegol licensed for opioid-induced constipation resistant to standard laxatives',
      ],
    },

    { type: 'heading', level: 2, text: 'Starting Oral Morphine' },

    {
      type: 'table',
      headers: ['Patient', 'Sustained-Release (BD)', 'Breakthrough (PRN — 1/6 TDD)'],
      rows: [
        ['Standard (normal renal/liver function)', 'Zomorph/MST 15 mg BD (TDD = 30 mg)', 'Oramorph/Sevredol 5 mg PRN (up to 6×/day)'],
        ['Frail or elderly', 'MST 10 mg BD (TDD = 20 mg)', 'Oramorph 2.5 mg PRN'],
        ['Renal impairment (eGFR <30)', 'DO NOT use morphine — seek palliative care advice; consider fentanyl or alfentanil', 'As above — specialist guidance required'],
      ],
      caption: 'Titrate every 24–48 hours based on breakthrough use. If needing >3 breakthroughs/day, increase the SR dose by 30–50%. Review laxatives at every dose increase.',
    },

    { type: 'heading', level: 2, text: 'Opioid Conversion Maths' },

    {
      type: 'table',
      headers: ['Conversion', 'Factor', 'Example'],
      rows: [
        ['Oral codeine → oral morphine', '÷ 10', '60 mg codeine = 6 mg oral morphine'],
        ['Oral tramadol → oral morphine', '÷ 10', '200 mg tramadol = 20 mg oral morphine'],
        ['Oral morphine → oral oxycodone', '÷ 2', '30 mg oral morphine = 15 mg oral oxycodone'],
        ['Oral morphine → SC morphine', '÷ 2', '30 mg oral morphine = 15 mg SC morphine'],
        ['Oral morphine → SC diamorphine', '÷ 3', '30 mg oral morphine = 10 mg SC diamorphine'],
        ['Fentanyl patch (mcg/h) → oral morphine', '12 mcg/h = 30 mg/24h oral morphine', '25 mcg/h patch = 60 mg/24h oral morphine'],
        ['Buprenorphine patch → oral morphine', '10 mcg/h = 24 mg/24h oral morphine', '20 mcg/h patch = 48 mg/24h oral morphine'],
      ],
      caption: 'Diamorphine is only available for SC use (syringe driver/CSCI). SC morphine is half as potent as oral morphine. Fentanyl and buprenorphine patches are very potent — do NOT use in opioid-naive patients (risk of fatal respiratory depression).',
    },

    { type: 'heading', level: 2, text: 'Opioid Patches in Palliative Care' },

    {
      type: 'list',
      items: [
        'Use when oral route not possible (dysphagia, absorption problems, strong preference)',
        'NOT suitable if pain is unstable (cannot titrate quickly) or if fever present (excess absorption)',
        'Avoid as approaching end of life if anticipating syringe driver — switch to SC route instead',
        'Apply to non-broken, non-hairy skin; rotate sites; patient can shower (do not soak)',
        'Fentanyl (Matrifen): 12/25/50/75/100 mcg/h — change every 72 hours (3 days); prescribe by brand',
        'Buprenorphine (Butrans): 5/10/15/20 mcg/h — change every 7 days; takes 72 hours to reach steady state; do not re-apply to same site',
        'Lidocaine 5% patch (Versatis): only for specialist palliative neuropathic pain — review at 2 weeks, stop after 4 weeks',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Renal Impairment — Opioid Choice',
      items: [
        'eGFR <30: avoid morphine and codeine (toxic metabolite accumulation — myoclonus, seizures)',
        'Preferred opioids in renal impairment: fentanyl or alfentanil (SC/patch — no active metabolites)',
        'Oxycodone: may be used with caution in MODERATE renal impairment only — ~1.5× more potent than oral morphine (use lower doses)',
        'Avoid in liver disease: oxycodone; prefer morphine with dose reduction',
        'Always seek advice from palliative care team when opioids needed with renal impairment',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Respiratory depression: naloxone 400 mcg IM/IV — dilute and titrate carefully in opioid-dependent patients (too much causes severe withdrawal and pain crisis)',
        'Patches in opioid-naive patients: CONTRAINDICATED — risk of fatal respiratory depression',
        'Never start a patch if pain is unstable or patient has never had opioids before',
        'Driving: patients on strong opioids should not drive unless stable for >1 month and no sedation — legal responsibility on patient but advise clearly',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Palliative care advice (opioid titration, complex symptom management): MPFT Community Palliative Care Team — via SPA or GP direct referral',
        'Inpatient palliative care: St Giles Hospice, Lichfield (tel: 01543 432031) — for inpatient or day hospice; community support also available',
        'Macmillan nurse: UHDB Burton or via GP referral for community support',
        'Out-of-hours palliative emergencies: palliative care on-call via UHDB Burton or St Giles 24-hour advice line',
        'Anticipatory medications (just-in-case box): arrange via palliative care referral or community nursing team — standard CSCI meds: diamorphine, midazolam, cyclizine/haloperidol, hyoscine butylbromide',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG31 — Care of Dying Adults', url: 'https://www.nice.org.uk/guidance/ng31' },
        { label: 'Palliative Drugs — Opioid Equivalence', url: 'https://www.palliativedrugs.com/' },
        { label: 'Faculty of Pain Medicine — Opioid Aware', url: 'https://fpm.ac.uk/opioids-aware' },
        { label: 'St Giles Hospice', url: 'https://www.stgileshospice.com/' },
      ],
    },
  ],
}
