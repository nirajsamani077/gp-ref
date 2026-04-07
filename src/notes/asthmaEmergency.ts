import type { Note } from '../data/notes'

export const asthmaEmergency: Note = {
  id: 'asthmaEmergency',
  title: 'Acute Severe Asthma — Emergency Management',
  subtitle: 'Severity grading, immediate treatment, prednisolone, and follow-up in adults and children',
  tags: ['Respiratory'],

  body: 'acute severe asthma emergency exacerbation attack PEFR peak flow sats SpO2 salbutamol nebuliser spacer prednisolone ipratropium magnesium wheeze breathless silent chest 999 severe life threatening near fatal adult children wheeze plan PAAP follow up',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Call 999 immediately if any life-threatening features',
      items: [
        'Silent chest (no wheeze despite severe distress — air movement too poor to wheeze)',
        'SpO₂ <92% on air',
        'PEFR <33% predicted/best',
        'Cyanosis, confusion, exhaustion, or reduced GCS',
        'Haemodynamic instability (hypotension, bradycardia)',
        'Children: unable to speak, grunting, severe intercostal/subcostal recession',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Severity Assessment — Adults',
    },
    {
      type: 'table',
      headers: ['Severity', 'PEFR', 'SpO₂', 'Clinical features', 'Action'],
      rows: [
        ['Moderate', '50–75% best/predicted', '≥92%', 'Increasing symptoms; able to speak full sentences', 'Salbutamol via spacer; oral prednisolone; review in 24–48 h'],
        ['Severe', '<50% best/predicted', '≥92%', 'Can\'t complete sentences; HR >110; RR >25', 'Salbutamol via spacer immediately; call 999 if no rapid response; prednisolone 40 mg stat'],
        ['Life-threatening', '<33% best/predicted', '<92%', 'Silent chest; altered consciousness; cyanosis; exhaustion', 'Call 999 now; continuous salbutamol nebuliser if available; high-flow O₂'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Severity Assessment — Children',
    },
    {
      type: 'table',
      headers: ['Severity', 'SpO₂', 'Age >5: RR / HR', 'Age 2–5: RR / HR', 'Clinical features', 'Action'],
      rows: [
        ['Moderate', '≥92%', 'RR ≤30; HR ≤125', 'RR ≤40; HR ≤140', 'Able to talk; some wheeze', 'Salbutamol via spacer; monitor; prednisolone if no improvement'],
        ['Severe', '<92%', 'RR >30; HR >125', 'RR >40; HR >140', 'Can\'t talk in sentences; marked recession', 'Salbutamol immediately; prepare for 999; prednisolone stat'],
        ['Life-threatening', '<92% + any of:', '—', '—', 'Silent chest; poor respiratory effort; cyanosis; altered GCS', 'Call 999 immediately'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Immediate Treatment in Primary Care',
    },
    {
      type: 'list',
      items: [
        'Salbutamol via spacer: 10 puffs one at a time — patient takes 5 normal tidal breaths through spacer after each puff. Reassess after 15 minutes',
        'If hypoxic (SpO₂ <94%): salbutamol nebuliser 2.5–5 mg and call 999 simultaneously',
        'If improving: repeat salbutamol every 20–30 minutes for first hour, then 4-hourly; continue monitoring',
        'Oral prednisolone: give immediately for moderate–severe acute asthma. Do not wait for specialist',
        'Oxygen: target SpO₂ 94–98%; avoid hyperoxia',
        'Ipratropium bromide (added to nebuliser in hospital): 0.5 mg via nebuliser Q20–30 min for first 2 hours in severe/life-threatening — arrange hospital transfer',
        'Call 999: no response to 10 puffs salbutamol, SpO₂ <92%, life-threatening features at any point',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Prednisolone Doses',
    },
    {
      type: 'table',
      headers: ['Patient group', 'Dose', 'Duration', 'Formulation'],
      rows: [
        ['Adults (≥16y)', 'Prednisolone 40 mg OD', '5 days', 'Prednisolone 5 mg tablets × 8 once daily for 5 days'],
        ['Children 5–15y', 'Prednisolone 30–40 mg OD', '3–5 days', 'Soluble tablets (better palatability): 6–8 × 5 mg tablets dissolved in water'],
        ['Children 2–5y', 'Prednisolone 20 mg OD', '3 days', '4 × 5 mg soluble tablets dissolved in water once daily for 3 days'],
        ['Children <2y (hospital)', 'Prednisolone 10 mg OD', '3 days', 'Specialist territory — arrange admission'],
      ],
      caption: 'No taper needed for courses ≤5 days. If patient has been on oral steroids ≥3 weeks or repeated courses within 3 months, consider adrenal suppression — taper required.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Rescue pack — when to issue and how to word it',
      items: [
        'Consider rescue pack for adults with: previous admission, ≥2 exacerbations/year needing oral steroids, poor access to GP, or previously slow to seek help',
        'Wording: "Prednisolone 5 mg tablets — 8 tablets (40 mg) once daily for 5 days. Use as directed as part of your asthma action plan when your symptoms significantly worsen"',
        'Educate: do not use rescue pack as a substitute for seeking medical help in severe/life-threatening attack — call 999 first',
        'Consider also: give written "wheeze plan" with action thresholds based on symptoms and/or PEFR readings',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Follow-Up After Exacerbation',
    },
    {
      type: 'list',
      items: [
        'Asthma nurse or GP review within 2 working days of a community-managed exacerbation',
        'Review within 24–48 hours of hospital discharge',
        'Review: complete recovery? step up regular treatment? triggers identified? PAAP updated?',
        'Refer to respiratory/specialist if: ≥2 exacerbations per year, previous life-threatening attack, brittle asthma, any doubt about diagnosis',
        'Annual asthma review: ACT score, inhaler technique, adherence, PEFR diary, smoking status, PAAP',
        'Patients who have had a near-fatal or ICU admission: refer to specialist asthma service regardless of current control',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NCL Child Asthma Attack Pathway (PDF)', url: '/pdfs/asthma-attack-child-pathway-ncl.pdf' },
        { label: 'Asthma + Lung UK — PAAP (print)', url: 'https://www.asthmaandlung.org.uk/sites/default/files/2023-03/your-asthma-plan-a4-trifold-digital-july22.pdf' },
        { label: 'RUH Adult Wheeze Plan', url: 'https://ruh.nhs.uk/patients/patient_information/EMD002_Adult_Asthma_Discharge_Management_Plan.pdf' },
        { label: 'Staffs & Stoke Asthma Guidelines (PDF)', url: '/pdfs/asthma-staffordshire-guidelines.pdf' },
        { label: 'PEFR Normal Ranges (PDF)', url: '/pdfs/pefr-normal-ranges.pdf' },
        { label: 'BTS/SIGN Emergency Asthma Guidance', url: 'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/asthma/' },
      ],
    },
  ],
}
