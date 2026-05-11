import type { Note } from '../data/notes'

export const frailty: Note = {
  id: 'frailty',
  title: 'Frailty',
  subtitle: 'eFI screening, Rockwood scale, 3Ps framework, sarcopenia and personalised care planning',
  tags: ['geriatrics'],

  body: 'frailty eFI electronic frailty index Rockwood frailty scale CGA comprehensive geriatric assessment sarcopenia muscle strength weight loss fatigue sedentary slow gait weak grip delirium falls incontinence polypharmacy personalised care plan advanced care planning SMR structured medication review deprescribing NHS RightCare prevent protect prioritise protein supplement fortisip',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'What Is Frailty?',
      items: [
        'A state of increased vulnerability where a minor stressor causes a MAJOR impact — disproportionate to what would be expected in a robust individual',
        'Age-related but NOT inevitable — it is preventable, modifiable, and should be proactively identified',
        'Strongly linked with: dementia, falls, multimorbidity, polypharmacy, hospitalisation, reduced quality of life and mortality',
        'Acute "geriatric giants" that unmask frailty: falls, delirium, "off legs", polypharmacy complications, incontinence',
        'Chronic "frailty phenotype" (Fried criteria): unexplained weight loss, exhaustion/fatigue, physical inactivity, slow walking speed, weak grip strength',
      ],
    },

    { type: 'heading', level: 2, text: 'Identifying Frailty' },

    {
      type: 'table',
      headers: ['Tool', 'Description', 'Use'],
      rows: [
        ['eFI (Electronic Frailty Index)', 'Uses 36 deficit parameters extracted automatically from GP records to categorise frailty (none/mild/moderate/severe)', 'Embedded in EMIS/SystmOne; use for proactive population identification; not perfect — a screening tool only'],
        ['Rockwood Clinical Frailty Scale (CFS)', '9-point scale from "very fit" to "terminally ill" based on clinical assessment; validated and widely used', 'Use in clinical consultations for frailty staging; documented at hospital admission; good for ACP discussions'],
        ['Timed Up and Go (TUG)', '>12 seconds = mobility impairment and falls risk', 'Assessment tool in frailty and falls reviews'],
        ['Grip strength', 'Measured with dynamometer; low grip strength = sarcopenia proxy', 'Useful in research and specialist clinics'],
      ],
    },

    { type: 'heading', level: 2, text: 'NHS RightCare Frailty Approach — The 3 Ps' },

    {
      type: 'table',
      headers: ['Level', 'Frailty Degree', 'Action'],
      rows: [
        ['Prevent', 'No frailty (eFI: none)', 'Health promotion: lifestyle, exercise, fall prevention, diet, social engagement; vaccinations up to date'],
        ['Protect', 'Mild frailty (eFI: mild)', 'Proactive Comprehensive Geriatric Assessment (CGA) — MDT approach; refer for geriatric assessment; personalised care and support plan; reduce hospitalisation risk'],
        ['Prioritise', 'Moderate to severe frailty (eFI: moderate/severe)', 'Personalised care plan; SMR (structured medication review); annual review; advanced care planning (ACP); deprescribing; EOL planning; care home support if needed'],
      ],
    },

    { type: 'heading', level: 2, text: 'Interventions for Frailty and Sarcopenia' },

    {
      type: 'list',
      items: [
        'Muscle strength and resistance training: minimum 30 minutes, 4 times per week; group-based preferred — proven to reverse sarcopenia and reduce fall risk',
        'Protein supplementation: ensure adequate dietary protein; prescribe 2× 200 mL Fortisip Compact Protein (or equivalent) per day if struggling to meet dietary needs — each 125 mL provides 18g protein and 300 kcal',
        'Vitamin D: supplement all frail elderly; deficiency contributes to sarcopenia and falls',
        'Polypharmacy review/deprescribing: structured medication review (SMR) — stop unnecessary medications; use STOPPFrail or STOPP/START criteria',
        'Occupational therapy: home assessment, adaptive equipment, aids, falls prevention',
        'Social prescribing and community support: Staffordshire Connects, community volunteers, befriending services — combat social isolation',
        'Vaccinations: flu, COVID, pneumococcal, RSV (new) — frail elderly are priority groups',
      ],
    },

    { type: 'heading', level: 2, text: 'Unexplained Weight Loss in Frailty' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Unintentional Weight Loss — Always Investigate',
      items: [
        'Unintentional weight loss is NEVER normal — always investigate regardless of frailty status',
        'Screen for: cancer (FBC, CRP, liver function, FIT/PSA), diabetes (HbA1c), thyrotoxicosis (TFTs), depression (PHQ-9), malabsorption (coeliac screen), chronic infection',
        'Also consider: medication side effects, dentition/swallowing problems, food access issues, depression',
        'Refer for dietician assessment if BMI <18.5 or significant weight loss (>5–10% in 3–6 months)',
        'MUST monitoring malnutrition (MUST score) at all reviews',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Comprehensive Geriatric Assessment (CGA): refer to UHDB Queen\'s Hospital Burton Geriatric Medicine — via e-RS; include eFI score, CFS, current medications, main functional concerns',
        'Advice & Guidance (A&G): geriatric medicine A&G available via e-RS for non-urgent frailty queries',
        'Community OT (home assessment): ICOTT (Integrated Community OT Team) — GP referral via Staffordshire SPA',
        'Falls clinic: UHDB Burton Falls and Bone Health Service',
        'Social prescribing: Darwin Practice social prescriber (via reception) — Staffordshire Connects (staffordshireconnects.info)',
        'Dietician: UHDB community dietetics — GP referral for malnutrition/weight loss',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BGS — Frailty Framework', url: 'https://www.bgs.org.uk/resources/frailty-what-doctors-need-to-know' },
        { label: 'NICE NG56 — Multimorbidity', url: 'https://www.nice.org.uk/guidance/ng56' },
        { label: 'NHS England — Frailty', url: 'https://www.england.nhs.uk/ourwork/clinical-policy/older-people/frailty/' },
        { label: 'Clinical Frailty Scale', url: 'https://www.dal.ca/sites/gmr/our-tools/clinical-frailty-scale.html' },
      ],
    },
  ],
}
