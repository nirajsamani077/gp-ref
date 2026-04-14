import type { Note } from '../data/notes'

export const asthmaChild: Note = {
  id: 'asthmaChild',
  title: 'Asthma Management — Children (<12)',
  subtitle: 'NICE stepwise approach for under-5s and 5–11 year olds, inhaler choices, and paediatric doses',
  tags: ['Respiratory', 'Paediatrics'],

  body: 'asthma children paediatric management NICE stepwise <5 under 5 5-11 5-16 ICS LABA LTRA montelukast Clenil salbutamol SABA beclometasone budesonide Symbicort Turbohaler pMDI spacer Aerochamber low moderate high dose budesonide equivalent viral wheeze MART referral',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Key differences from adult management',
      items: [
        'MART is only licensed ≥12 years — use separate SABA reliever in children under 12',
        'Children <5 use pMDI (cannot reliably breath-activate DPI) — always prescribe with Aerochamber Plus spacer',
        'Children 5–11: DPI possible if they can demonstrate adequate inspiratory technique',
        'Paediatric dose thresholds use budesonide equivalents (not beclometasone)',
        'Viral wheeze in under-5s is very common — differentiate from true asthma (no symptom-free intervals, poor response to bronchodilators)',
        'Refer to paediatric respiratory services: >2 exacerbations/year, step 4+ treatment, diagnostic uncertainty',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'ICS Dose Bands — Budesonide Equivalents (Paediatric)',
    },
    {
      type: 'table',
      headers: ['Dose band', 'Budesonide/day', 'Beclometasone/day', 'Fluticasone prop/day'],
      rows: [
        ['Low', '<200 mcg', '<100 mcg', '<100 mcg'],
        ['Medium', '200–400 mcg', '200 mcg', '100–200 mcg'],
        ['High', '>400 mcg', '>200 mcg', '>200 mcg'],
      ],
      caption: 'Note: extra-fine beclometasone (Fostair) ~2× potency — 50 mcg extra-fine ≈ 100 mcg standard.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Children Under 5 — NICE Stepwise',
    },
    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Inhaler & dose', 'Notes'],
      rows: [
        ['Reliever (all steps)', 'SABA PRN', 'Salamol MDI 100 mcg + Aerochamber spacer — 1–2 puffs as needed', 'pMDI only at this age — cannot breath-activate. Always with spacer'],
        ['Step 1 — uncontrolled on SABA', '8-week trial of medium dose ICS', 'Clenil Modulite 100 mcg MDI — 2 puffs BD (= 400 mcg/day budesonide equiv)', 'If symptoms resolve and do NOT recur within 4 weeks of stopping: no maintenance needed. If recur <4 weeks: start low dose ICS. If recur >4 weeks: repeat 8-week trial'],
        ['Step 2 — uncontrolled on low ICS', 'Add LTRA', 'Montelukast 4 mg chewable tablet OD at night', 'Age ≥6 months. Warn about neuropsychiatric effects'],
        ['Step 3 — uncontrolled', 'Refer to paediatric respiratory specialist', '—', 'High dose ICS or oral theophylline on specialist advice only'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Children 5–11 Years — NICE Stepwise',
    },
    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Inhaler & dose', 'Notes'],
      rows: [
        ['Reliever (all steps)', 'SABA PRN', 'Easyhaler Salbutamol 100 mcg DPI if breath-activatable (≥5y). Otherwise Salamol MDI 100 mcg + spacer — 1–2 puffs as needed', 'Assess ability to use DPI at each review'],
        ['Step 1 — uncontrolled on SABA', 'Low dose ICS', 'Easyhaler Budesonide 200 mcg DPI — 1 puff OD (= 200 mcg/day) if can use DPI. OR Clenil Modulite 100 mcg MDI — 2 puffs BD + spacer', 'Budesonide Easyhaler licensed ≥6 years. Flixotide (fluticasone) Evohaler + spacer as pMDI alternative'],
        ['Step 2 — uncontrolled on low ICS', 'Add LTRA or switch to low dose ICS/LABA', 'Montelukast 5 mg chewable OD at night (age 6–14). OR Symbicort 100/6 Turbohaler — 2 puffs BD (only ICS/LABA DPI licensed ≥6y)', 'Symbicort 100/6 Turbohaler is the only ICS/LABA DPI licensed below 12 years. If cannot use DPI: Seretide Evohaler (fluticasone/salmeterol) pMDI + spacer'],
        ['Step 3 — MART or medium dose ICS/LABA', 'MART (only licensed ≥12y). Use medium dose ICS/LABA instead for <12', 'Seretide 100 Accuhaler — 1 blister inhaled BD (= 200 mcg fluticasone + salmeterol/day). Or Symbicort 200/6 Turbohaler 1 puff BD', 'MART not licensed <12. Refer to specialist at this step'],
        ['Step 4', 'High dose ICS (800 mcg budesonide equiv) + refer', '—', 'Specialist review essential. Consider theophylline only on specialist advice'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Inhaler Technique in Children',
    },
    {
      type: 'list',
      items: [
        '<5 years: pMDI + Aerochamber Plus spacer (face mask for <3 years; mouthpiece for ≥3 years who can seal lips)',
        '5–7 years: most can use Aerochamber with mouthpiece; some can use DPI — assess at each review',
        '≥8 years: majority can use DPI if technique confirmed; reduces pMDI propellant exposure',
        'Check technique at every asthma review — poor technique is the most common cause of apparent poor control',
        'Spacer care: wash monthly with warm soapy water, leave to air dry (do not wipe — static affects drug delivery), replace every 6–12 months',
        'Prescribe Aerochamber Plus Flow-Vu mouthpiece spacer with every pMDI prescription',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Exacerbations in Children',
    },
    {
      type: 'list',
      items: [
        'Acute wheeze: 10 puffs salbutamol via spacer (one puff at a time, 5 tidal breaths per puff) — reassess after 15 minutes',
        'Call 999: not improving, SpO₂ <92%, severe distress, unable to complete sentences',
        'Oral prednisolone: 20 mg OD for 3–5 days (age <5); 30–40 mg OD for 3–5 days (age 5–12)',
        'Prednisolone dose (if unable to swallow): soluble tablets — 4 × 5 mg dissolved in water',
        'Antibiotics: only if clear bacterial infection (fever, purulent sputum, consolidation on CXR) — most exacerbations are viral',
        'Follow-up: PAAP review + step up if exacerbation. Refer if >2 exacerbations/year',
      ],
    },

    {
      type: 'calclink',
      calculators: [
        { id: 'feno', label: 'FeNO Calculator', subtitle: 'Fractional Exhaled Nitric Oxide — eosinophilic airway inflammation' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Rightbreathe — inhaler choice tool', url: 'https://www.rightbreathe.com' },
        { label: 'NCL Child Asthma Attack Pathway (PDF)', url: '/pdfs/asthma-attack-child-pathway-ncl.pdf' },
        { label: 'PEFR Diary (print)', url: '/pdfs/pefr-diary.pdf' },
        { label: 'Asthma + Lung UK — children', url: 'https://www.asthmaandlung.org.uk/conditions/asthma/child' },
        { label: 'NICE CKS — Asthma in children', url: 'https://cks.nice.org.uk/topics/asthma/' },
        { label: 'Staffs & Stoke Asthma Guidelines (PDF)', url: '/pdfs/asthma-staffordshire-guidelines.pdf' },
      ],
    },
  ],
}
