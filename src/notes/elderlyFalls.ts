import type { Note } from '../data/notes'

export const elderlyFalls: Note = {
  id: 'elderly-falls',
  title: 'Elderly Falls Assessment',
  subtitle: 'Falls risk categories, postural hypotension, TUG test, polypharmacy and prevention',
  tags: ['geriatrics', 'msk'],

  body: 'elderly falls assessment fall prevention frailty postural hypotension orthostatic BP Timed Up and Go TUG test polypharmacy anticholinergic DOAC falls clinic falls prevention programme physiotherapy occupational therapy home hazard assessment grip strength sarcopenia NOF neck of femur Colles fracture osteoporosis FRAX DEXA',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Falls — Epidemiology and Importance',
      items: [
        'Falls affect 1 in 3 people over 65 and 1 in 2 people over 80 each year',
        '90% of neck of femur (NOF) fractures and Colles\' fractures result from falls',
        'Falls are a key marker of frailty — interlinked with blood pressure, balance, gait, sarcopenia and cognition',
        'Many falls are preventable — a structured multifactorial assessment should be offered to all patients who meet criteria',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Offer Falls Assessment' },

    {
      type: 'list',
      items: [
        '>1 fall in the past year',
        'Any fall requiring medical attention',
        'Patient reporting problems with mobility or balance',
        'Presentation following an acute fall or long lie — even if no injury',
      ],
    },

    { type: 'heading', level: 2, text: 'Three Categories of Elderly Fall' },

    {
      type: 'table',
      headers: ['Category', 'Features', 'Action'],
      rows: [
        ['Red flag fall', 'Suspected fracture, head injury, syncope, arrhythmia, seizure, ECG abnormality, neurological change', 'Same-day ED assessment'],
        ['Hot fall', 'Minor illness precipitating fall in a frail patient — e.g. UTI, dehydration, hypoglycaemia causing decompensation', 'Treat precipitant; multifactorial falls assessment after recovery'],
        ['Spontaneous fall', 'No precipitant; significant underlying frailty; may include "drop attacks" without LOC', 'Full multifactorial falls assessment; consider cardiac monitor if LOC'],
      ],
    },

    { type: 'heading', level: 2, text: 'Falls Assessment — Components' },

    {
      type: 'list',
      items: [
        'Full history: onset, activity at time, prodrome, LOC, injury sustained, frequency, medications',
        'Medication review: DOAC (bleeding risk), antihypertensives, sedatives/hypnotics, anticholinergics, diuretics — all increase fall risk; deprescribe where safe',
        'Mobility aids: check appropriateness and technique (walking stick used on OPPOSITE side to bad hip/knee)',
        'Heart rate and rhythm (AF, bradycardia)',
        'Postural blood pressure measurement',
        'Gait and balance assessment',
        'Visual and auditory assessment',
        'Brief cognitive screen (6-CIT or MMSE)',
        'Joint examination: OA of hip/knee',
        'Foot and footwear review',
      ],
    },

    { type: 'heading', level: 2, text: 'Key Clinical Tests' },

    {
      type: 'table',
      headers: ['Test', 'Technique', 'Positive Result / Action'],
      rows: [
        ['Postural blood pressure', 'BP after lying for 5 min, then at 1 min and 3 min after standing', 'Drop in SBP >20 mmHg or DBP >10 mmHg = postural hypotension. Action: slowly titrate down antihypertensives; advise slow positional changes; increase fluid intake 2L/day; if persistent → consider fludrocortisone (via geriatrics A&G)'],
        ['Timed Up and Go (TUG)', 'Patient sits in chair; stand, walk 3 metres, turn, return to chair, sit — record time', '>12 seconds = higher fall risk; refer to physiotherapy/falls prevention programme'],
        ['6-CIT / cognitive screen', 'Brief validated cognitive assessment', 'Cognitive impairment significantly increases falls risk'],
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Intervention', 'Detail'],
      rows: [
        ['Physiotherapy', 'Specific falls prevention programme: group-based exercise and strength/balance training; refer to community falls prevention group'],
        ['Occupational therapy', 'Home hazard assessment: remove rugs/trip hazards, grab rails, stair rails, bathroom adaptations, lighting; appropriate footwear advice'],
        ['Polypharmacy review', 'Deprescribe anticholinergics, sedatives, hypnotics, unnecessary antihypertensives; assess DOAC vs benefit/risk of bleeding'],
        ['Vision', 'Annual optician check; cataract treatment if impaired'],
        ['Audiology', 'Hearing impairment contributes to imbalance; refer if not recently tested'],
        ['Osteoporosis', 'FRAX assessment at every falls review; offer DEXA if high risk; start bisphosphonate if indicated (see osteoporosis note)'],
        ['Falls clinic referral', 'Multi-disciplinary; also consider A&G (Advice & Guidance) geriatrics for complex patients'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Investigations',
      items: [
        'Baseline bloods: FBC, U&E, LFT, TFTs, glucose, Vitamin D (deficiency contributes to muscle weakness and falls)',
        'ECG/cardiac tape (Holter): especially if "drop attacks", LOC, cardiac symptoms, or history suggests arrhythmia',
        'FRAX assessment: online tool to calculate 10-year fracture probability; determines who needs DEXA',
        'DEXA scan: if FRAX suggests high risk or patient on long-term steroids',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Falls clinic: UHDB Queen\'s Hospital Burton Falls and Bone Health Service — via e-RS; include TUG result, medications, FRAX score',
        'Physiotherapy (falls prevention): UHDB community physio or via Falls clinic referral; NICE recommends group-based falls prevention exercise',
        'Occupational therapy (home hazard): community OT via ICOTT (Integrated Community OT Team) — SPA referral via GP',
        'Geriatrics Advice & Guidance: UHDB Burton geriatric medicine — A&G available via e-RS for complex polypharmacy and postural hypotension management',
        'DEXA/bone health: UHDB Burton bone health service — requested via falls clinic or GP',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG161 — Falls in Older People', url: 'https://www.nice.org.uk/guidance/ng161' },
        { label: 'NICE CKS — Falls — Risk Assessment', url: 'https://cks.nice.org.uk/topics/falls-risk-assessment/' },
        { label: 'NHS — Preventing Falls', url: 'https://www.nhs.uk/conditions/falls/' },
        { label: 'Age UK — Fall Prevention', url: 'https://www.ageuk.org.uk/information-advice/health-wellbeing/exercise-fitness/falls-prevention/' },
      ],
    },
  ],
}
