import type { Note } from '../data/notes'

export const bronchiolitis: Note = {
  id: 'bronchiolitis',
  title: 'Bronchiolitis',
  subtitle: 'RSV viral LRTI in infants — recognition, severity assessment and admission criteria',
  tags: ['paediatrics', 'respiratory'],

  body: 'bronchiolitis RSV respiratory syncytial virus viral LRTI infant under 2 years wheeze crackles coryza cough IWOB intercostal recession subcostal tachypnoea apnoea feeding poor oxygen saturation sats 90 92 CPAP NGT nasogastric admission criteria premature CHD congenital heart disease CLD chronic lung disease severity assessment',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Bronchiolitis — Key Facts',
      items: [
        'Most common severe respiratory illness in children under 2 years (peak age 3–6 months)',
        '1 in 3 infants will develop bronchiolitis in the first year of life',
        'Predominantly caused by RSV (Respiratory Syncytial Virus) — seasonal (October to March)',
        'Clinical: coryza → cough/wheeze + increased work of breathing (IWOB) + apnoeas (especially <6 weeks)',
        'Fever usually mild (<39°C); chest auscultation shows wheeze and crackles (mixed pattern)',
        'Severity peaks at 3–5 days — if presenting early in illness, consider admission for monitoring',
        'Treatment is SUPPORTIVE: observation, oxygen, hydration (± nasogastric feeding if poor intake)',
      ],
    },

    { type: 'heading', level: 2, text: 'Severity Assessment — Admission Criteria' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Admit / Call 999 if ANY of the Following',
      items: [
        'SpO₂ <90% on air (or <92% if age <6 weeks / premature <36 weeks)',
        'Severe increased work of breathing: respiratory rate >60/min, moderate to severe intercostal/subcostal recession, nasal flaring, grunting',
        'History of apnoea (cessation of breathing) — especially in young infants',
        'Poor feeding: less than 50% of normal feeds, signs of dehydration',
        'Concerns about ability to manage at home / inadequate parental support',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Lower Threshold for Admission in High-Risk Groups',
      items: [
        'Premature infant (born <36 weeks gestation)',
        'Age <3 months',
        'Chronic lung disease (CLD) — including ex-premature infants on home oxygen',
        'Congenital heart disease (CHD) — especially cyanotic',
        'Immunodeficiency',
        'Down syndrome',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Condition', 'Distinguishing Features'],
      rows: [
        ['Bacterial pneumonia', 'Higher fever (>39°C), more toxic appearance, focal consolidation on CXR, no coryza'],
        ['Viral-induced wheeze (VIW)', '"Old wheezer" — recurrent wheeze in older infants, often with URI; responds better to salbutamol; more atopic history'],
        ['Aspiration / foreign body', 'Sudden onset, unilateral wheeze, history of choking'],
        ['Cardiac failure (CHD)', 'Poor weight gain, hepatomegaly, gallop rhythm, murmur, bibasal crackles without wheeze'],
        ['Croup (laryngotracheobronchitis)', 'Barking cough, inspiratory stridor, older children (6 months–3 years)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Supportive care is the mainstay — no proven effective drug treatment',
        'Oxygen: target SpO₂ ≥92% (≥94% in very young or premature); via nasal cannula or face mask',
        'Feeding: encourage small frequent feeds; NGT (nasogastric tube) feeding if taking <50% normal feeds',
        'CPAP: high-flow nasal cannula (HFNC) or CPAP in hospital if increased work of breathing persists',
        'No routine: salbutamol (no evidence in bronchiolitis), ipratropium, systemic steroids, antibiotics (unless secondary bacterial infection), chest physiotherapy',
        'Saline nasal drops: can help relieve nasal congestion and improve feeding (isotonic 0.9% nasal saline)',
        'Avoid passive smoking and ensure no smoke exposure post-discharge',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Palivizumab (Prevention) — Specialist-Only',
      items: [
        'Monthly IM injection of palivizumab (anti-RSV monoclonal antibody) during RSV season (Oct–March)',
        'Offered to high-risk infants: ex-premature with CLD on home oxygen, significant CHD — arranged by specialist paediatric team',
        'Not routinely available for all premature infants — criteria apply',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Admit: UHDB Queen\'s Hospital Burton — paediatric A&E',
        'Call 999: severe IWOB, apnoea, sats <90%',
        'Community monitoring: safety net clearly — provide written plan for parents; advise on feeding, hydration monitoring, breathing assessment',
        'Paediatric telephone advice: UHDB Burton paediatric team can be called for borderline cases — use clinical judgement',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — Provide to ALL Parents',
      items: [
        '999: blue lips, not breathing, limp or unresponsive, not waking, breathing very fast with skin pulling in sharply',
        'Same-day A&E: breathing much harder (nostrils flaring, chest pulling in), very hard to wake, not feeding at all',
        'Return to GP: not improving after 3 days, breathing getting faster, very sleepy, nappy dry for 12 hours (dehydration)',
        'Expected: symptoms peak at day 3–5; most infants recover fully at home within 2–3 weeks; ongoing cough may persist 4 weeks',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Bronchiolitis', url: 'https://cks.nice.org.uk/topics/bronchiolitis/' },
        { label: 'NICE NG9 — Bronchiolitis in Children', url: 'https://www.nice.org.uk/guidance/ng9' },
        { label: 'NHS — Bronchiolitis', url: 'https://www.nhs.uk/conditions/bronchiolitis/' },
        { label: 'Bliss — Premature Baby Resources', url: 'https://www.bliss.org.uk/' },
      ],
    },
  ],
}
