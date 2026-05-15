import type { Note } from '../data/notes'

export const frailty: Note = {
  id: 'frailty',
  title: 'Frailty',
  subtitle: 'eFI, Rockwood CFS, proactive review, deprescribing, advance care planning and hospital avoidance',
  tags: ['geriatrics'],

  body: 'frailty eFI electronic frailty index Rockwood frailty scale CGA comprehensive geriatric assessment sarcopenia muscle strength weight loss fatigue sedentary slow gait weak grip delirium falls incontinence polypharmacy personalised care plan advanced care planning ACP DNACPR anticipatory care SMR structured medication review deprescribing NHS RightCare prevent protect prioritise protein supplement Fortisip STOPP START STOPP-frail hospital at home virtual ward ambulatory care social prescribing carer support',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'What Is Frailty? — The GP-Relevant Summary',
      items: [
        'Frailty: a state of increased vulnerability where a minor stressor (infection, fall, dehydration, new drug) causes disproportionate deterioration — much worse than would be expected in a robust person',
        'Not inevitable — it is modifiable; proactive identification and intervention can prevent or reverse mild-moderate frailty',
        '"Geriatric giants" that unmask frailty at acute presentation: falls, delirium, "off legs", incontinence, functional decline, poor oral intake',
        'Fried frailty phenotype: ≥3 of: weight loss >4.5 kg/year, exhaustion, weak grip strength, slow walking speed, low physical activity — meeting ≥3 = frail',
        'GP role: identify early, coordinate multidisciplinary care, avoid unnecessary hospital admissions, facilitate advance care planning',
      ],
    },

    { type: 'heading', level: 2, text: 'Identifying Frailty in Primary Care' },

    {
      type: 'table',
      headers: ['Tool', 'How to Use', 'GP Utility'],
      rows: [
        ['eFI (Electronic Frailty Index)', 'Automatically calculated from EMIS/SystmOne using 36 deficit parameters (diagnoses, medications, findings); gives score and category (none/mild/moderate/severe)', 'Use to proactively identify frailty for annual review coding; not perfect — treat as screening; always verify with clinical assessment'],
        ['Rockwood Clinical Frailty Scale (CFS)', '9-point scale: 1 (very fit) to 9 (terminally ill); based on clinical impression, function, and activity', 'Use in every consultation with frail patients; document CFS score; particularly useful for ACP discussions and ceiling-of-care decisions; should be documented at hospital admission'],
        ['Timed Up and Go (TUG)', 'Ask patient to stand from chair, walk 3 metres, turn, return and sit; time it; >12 seconds = mobility impairment', 'Simple in-surgery assessment; predicts falls risk; no equipment needed beyond a stopwatch'],
        ['MUST (Malnutrition Universal Screening Tool)', 'BMI + unintentional weight loss + acute disease effect; scored 0–6; ≥2 = high nutritional risk', 'At every frailty review; triggers dietician referral'],
      ],
    },

    { type: 'heading', level: 2, text: 'The 3 Ps — NHS RightCare Frailty Approach' },

    {
      type: 'table',
      headers: ['Level', 'Frailty Degree', 'Primary Care Action'],
      rows: [
        ['Prevent', 'No frailty (eFI: none / CFS 1–3)', 'Health promotion: lifestyle counselling, diet, exercise prescription (150 mins/week moderate aerobic), fall prevention, smoking cessation, social engagement. Ensure vaccinations up to date. Blood pressure, cholesterol, diabetes prevention.'],
        ['Protect', 'Mild frailty (eFI: mild / CFS 4–5)', 'Proactive annual frailty review: Comprehensive Geriatric Assessment (CGA) — address all domains. Medication review. Exercise prescription. Referral to community services (OT, physio, social prescribing). Hospital admission avoidance planning.'],
        ['Prioritise', 'Moderate–severe frailty (eFI: moderate–severe / CFS 6–9)', 'Personalised care plan. Structured Medication Review (SMR) with deprescribing. Advance Care Planning (ACP) and DNACPR discussion. EOL planning. Care home support. Carer assessment. Avoid unnecessary investigations and hospital admission.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Comprehensive Geriatric Assessment (CGA) in Primary Care' },

    {
      type: 'list',
      items: [
        'CGA is not just a checklist — it is a patient-centred MDT assessment across multiple domains that produces an individualised care plan',
        'Medical: comorbidities, medication review, visual and hearing assessment, falls risk, nutritional status, pain assessment',
        'Functional: ADLs (bathing, dressing, toileting), mobility (TUG), balance (Berg Balance Scale or similar)',
        'Cognitive: screen with MMSE or Montreal Cognitive Assessment (MoCA); document if delirium risk is high',
        'Psychological: depression (GDS-4 or PHQ-2), anxiety, behavioural and psychological symptoms',
        'Social: social support network, carer burden, housing, financial, transport',
        'Advance care planning: preferred place of care and death; DNACPR status; anticipatory medications; urgent care plan',
        'GP role: initiate CGA components annually; coordinate with HV, district nurse, OT, physio, social worker, social prescriber; refer to geriatrics for complex cases',
      ],
    },

    { type: 'heading', level: 2, text: 'Polypharmacy and Deprescribing' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Structured Medication Review (SMR) — Frailty Priority',
      items: [
        'Polypharmacy (≥5 medications) affects most frail patients — each additional drug increases fall risk, ADRs, non-adherence, and pill burden',
        'STOPP-Frail criteria: explicit list of medications inappropriate in end-stage frailty (e.g., antihypertensives causing dizziness in patient at falls risk, statins in terminal disease, bisphosphonates if immobile and unable to swallow correctly)',
        'Key deprescribing opportunities in frailty: statins (if life expectancy <2 years or terminal), antihypertensives (if systolic BP <130 on treatment — higher risk of falls), NSAIDs (GI bleed risk), anticholinergics (confusion, urinary retention, falls — STOPP FORTA Beer\'s list)',
        'Process: explain to patient and family the goal is to reduce burden and harm; always deprescribe gradually; involve pharmacist',
        'SMR: annual; coded on EMIS; pharmacist-led or GP-led; record what was stopped and why',
        'Tools: deprescribing.org; NHS FutureNHS STOPP-Frail; NHSi medicines optimisation toolkits',
      ],
    },

    { type: 'heading', level: 2, text: 'Physical Interventions for Frailty and Sarcopenia' },

    {
      type: 'list',
      items: [
        'Resistance training: minimum 2× per week; group-based classes preferred; evidence shows resistance training can REVERSE sarcopenia even in very elderly — refer to community exercise programme or falls prevention group',
        'Balance training: Tai Chi, yoga, Otago programme — reduces fall risk by up to 30%; refer via community physiotherapy or FCP',
        'Protein: 1.0–1.2 g/kg/day recommended; frail elderly often consume far less; if inadequate: prescribe Fortisip Compact Protein (125 mL, 18g protein, 300 kcal) — 2 per day between meals; code on prescription',
        'Vitamin D: supplement ALL frail elderly (800 IU daily, or 40,000 IU loading dose monthly); deficiency causes proximal myopathy and increases fall risk',
        'Nutritional assessment: MUST score at every review; if BMI <18.5 or significant weight loss (>5% in 3 months) → dietician referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Hospital Avoidance — When NOT to Admit' },

    {
      type: 'list',
      items: [
        'Frail patients admitted to hospital often deteriorate further — hospital-acquired delirium, deconditioning, infection, immobility',
        'Hospital at Home (HaH) / Virtual Ward: increasingly available in South Staffordshire — ask about UHDB virtual ward for frail patients who need IV antibiotics, monitoring, or physiotherapy without inpatient stay',
        'Ambulatory emergency care (AEC): for falls without injury, mild dehydration, mild infections — phone UHDB AEC or acute frailty service before admitting via A&E',
        'Anticipatory/crisis medications: for moderate-severe frailty — prescribe anticipatory medications in advance (e.g., haloperidol 0.5 mg SC for agitation, midazolam 2.5 mg SC for distress, morphine 2.5 mg SC for pain or breathlessness) to allow community management of acute deterioration at home',
        'Preferred place of care: document patient and family preference; communicate in urgent care plan (UCP); DNACPR completed and shared with OOH and ambulance service',
      ],
    },

    { type: 'heading', level: 2, text: 'Advance Care Planning (ACP) and DNACPR' },

    {
      type: 'list',
      items: [
        'Initiate ACP conversations proactively in all moderate-severe frailty (CFS ≥6) — do not wait for a crisis',
        '"Surprise question": "Would I be surprised if this patient died in the next 12 months?" — if NO, the patient needs an ACP now',
        'Explore: what matters most to the patient; understanding of their condition and prognosis; preferred place of care and death; specific fears and wishes',
        'DNACPR: a medical decision — discuss with patient, document sensitively; ensure shared across systems (SystmOne, OOH, ambulance via ReSPECT form)',
        'ReSPECT form (Recommended Summary Plan for Emergency Care and Treatment): single summary of personalised care preferences; used by paramedics, OOH, A&E; complete for all frail patients with a care plan',
        'Carer support: assess carer wellbeing; refer for carer assessment (local authority); signpost to Carers UK and local carer support groups (Staffordshire Carers — staffordshirecarers.co.uk)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BGS — Frailty: What Doctors Need to Know', url: 'https://www.bgs.org.uk/resources/frailty-what-doctors-need-to-know' },
        { label: 'Clinical Frailty Scale', url: 'https://www.dal.ca/sites/gmr/our-tools/clinical-frailty-scale.html' },
        { label: 'STOPP-Frail Criteria', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4884706/' },
        { label: 'NHS England — Frailty', url: 'https://www.england.nhs.uk/ourwork/clinical-policy/older-people/frailty/' },
        { label: 'Deprescribing Tools', url: 'https://deprescribing.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Comprehensive Geriatric Assessment (CGA): UHDB Queen\'s Hospital Burton Geriatric Medicine — via e-RS; include eFI/CFS score, current medications, main functional concerns',
        'Advice & Guidance (A&G): geriatric medicine A&G available via e-RS for non-urgent frailty queries without full referral',
        'Virtual Ward / Hospital at Home: contact UHDB Burton acute frailty team before admitting to A&E if clinically suitable',
        'Falls clinic: UHDB Burton Falls and Bone Health Service — referral via e-RS',
        'Community OT (home assessment, adaptive equipment): ICOTT (Integrated Community OT Team) — GP referral via Staffordshire SPA',
        'Social prescribing: Darwin Practice social prescriber (via reception) — Staffordshire Connects (staffordshireconnects.info)',
        'Dietician: UHDB community dietetics — for malnutrition, MUST score ≥2, significant weight loss',
        'Carer support: Staffordshire Carers — staffordshirecarers.co.uk; Carers UK 0808 808 7777',
      ],
    },
  ],
}
