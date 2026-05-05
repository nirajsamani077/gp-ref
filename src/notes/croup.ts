import type { Note } from '../data/notes'

export const croup: Note = {
  id: 'croup',
  title: 'Croup (Laryngotracheobronchitis)',
  subtitle: 'Westley scoring, dexamethasone dosing and admission criteria',
  tags: ['paediatrics'],

  body: 'croup laryngotracheobronchitis viral barking seal cough stridor parainfluenza 6 months 6 years dexamethasone prednisolone Westley score IWOB intercostal recession moderate severe epiglottitis bacterial tracheitis foreign body FBS anaphylaxis nebulised adrenaline epinephrine admission criteria',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Croup — Key Facts',
      items: [
        'Most common cause of acute stridor in children aged 6 months to 6 years (peak 1–2 years)',
        'Caused by parainfluenza virus (most common), also RSV, influenza, adenovirus',
        'Subglottic oedema causes characteristic inspiratory stridor and barking/seal-like cough',
        'Preceded by coryzal symptoms for 1–3 days; hoarse voice common',
        'Severity peaks at night — nocturnal worsening is characteristic',
        'Usually mild and self-limiting in most children',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Differential Diagnosis — Do Not Miss',
      items: [
        'Epiglottitis (bacterial — H. influenzae type b): toxic/unwell child, high fever, drooling, prefers sitting forward (tripod position), muffled voice, NO cough, rapidly progressive — DO NOT examine throat; 999 immediately',
        'Bacterial tracheitis (rare): toxic child, high fever, does not improve with treatment — admit urgently',
        'Foreign body aspiration: sudden onset choking history, unilateral wheeze, no cough or mild — can present similarly to croup',
        'Anaphylaxis: rapid onset, urticaria, other allergic features, exposure to allergen',
        'Retropharyngeal or peritonsillar abscess: very sore throat, drooling, unilateral neck swelling, trismus',
      ],
    },

    { type: 'heading', level: 2, text: 'Westley Croup Score — Assessment' },

    {
      type: 'table',
      headers: ['Score', 'Severity', 'Features', 'Management'],
      rows: [
        ['0–2', 'Mild', 'Barking cough only when distressed; no stridor at rest; no IWOB', 'Dexamethasone 0.15 mg/kg STAT (or prednisolone 1 mg/kg if dex unavailable) — treat ALL grades; reassure parents; manage at home if mild'],
        ['3–5', 'Moderate', 'Stridor AT REST; mild-moderate IWOB (subcostal/intercostal recession)', 'Dexamethasone STAT + ADMIT for observation; nebulised adrenaline 5 mL 1:1000 if distressed'],
        ['≥6', 'Severe', 'Severe IWOB, altered consciousness, lethargy, RR >60/min, cyanosis', '999 immediately; keep child calm (distress worsens obstruction); nebulised adrenaline; anaesthetic review'],
      ],
      caption: 'Always give dexamethasone 0.15 mg/kg PO STAT to ALL children with croup — regardless of severity grade. If dexamethasone unavailable: prednisolone 1 mg/kg PO STAT. A single dose is usually sufficient and provides benefit for up to 48 hours.',
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Keep child calm — crying and distress worsen upper airway obstruction significantly; do not separate from parent',
        'DO NOT examine the throat with a spatula — risk of complete obstruction',
        'Dexamethasone 0.15 mg/kg STAT PO (max 10 mg) — single dose; available as soluble tablet; onset within 30 minutes',
        'Prednisolone 1 mg/kg PO if dexamethasone unavailable — continue for 3 days if hospital treatment',
        'Nebulised adrenaline (1:1000, 5 mL undiluted): for moderate-severe at rest or hospital use — fast-acting but short-lived (1–2 hours); can be repeated; observe for 4 hours after last dose',
        'Humidified air / steam: no evidence of benefit — not recommended',
        'Antibiotics: not indicated (viral aetiology)',
        'Oxygen: if SpO₂ <92% — give via blow-by technique first if child distressed by mask',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Admit to Hospital if…',
      items: [
        'Moderate croup (stridor at rest) or Westley score ≥3',
        'Severely unwell, lethargic, or cyanosed',
        'Immunocompromised, chronic lung disease, or CHD',
        'Aged <6 months',
        'Parental concern or inability to manage at home safely',
        'Not responding to dexamethasone after 30 minutes (re-assess)',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Admission: UHDB Queen\'s Hospital Burton — paediatric A&E',
        'Call 999: severe croup (altered consciousness, severe distress, cyanosis)',
        'Dexamethasone: hold 0.15 mg/kg STAT in practice — give before transfer if moderate/severe; check surgery drug stock',
        'Telephone advice for borderline cases: UHDB Burton paediatric on-call',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — Written Advice for Parents',
      items: [
        '999: if child goes blue, is unable to breathe or swallow, is exhausted/limp, stops making sounds, drooling',
        'Same-day A&E: stridor at rest (breathing noisy all the time not just when crying), breathing very hard, not improving 30 minutes after dexamethasone',
        'Expected course: peaks night 2–3; most mild cases resolve in 3–7 days; barking cough may persist 1–2 weeks; recurrence is possible with future viral illnesses',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Croup', url: 'https://cks.nice.org.uk/topics/croup/' },
        { label: 'RCPCH — Croup Guideline', url: 'https://www.rcpch.ac.uk/' },
        { label: 'NHS — Croup', url: 'https://www.nhs.uk/conditions/croup/' },
      ],
    },
  ],
}
