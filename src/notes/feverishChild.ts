import type { Note } from '../data/notes'

export const feverishChild: Note = {
  id: 'feverish-child',
  title: 'Feverish Child Under 5',
  subtitle: 'NICE traffic light system, red flag conditions, meningococcal sepsis and Kawasaki',
  tags: ['paediatrics'],

  body: 'feverish child fever under 5 NICE traffic light red amber green temperature tympanic axillary neonate sepsis meningococcal meningitis benzylpenicillin benpen non-blanching petechiae purpuric rash Kawasaki disease prolonged fever coronary aneurysm febrile convulsion pneumonia antipyretic paracetamol ibuprofen safety net sepsis 6 PEWS',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Measuring Temperature',
      items: [
        'Neonates (<4 weeks): axillary temperature (tympanic thermometer not reliable)',
        'Older infants and children: tympanic thermometer (most practical in primary care)',
        'Fever defined as: temperature ≥38°C',
        'High fever: ≥39°C in infants <6 months or any child with concerning features',
      ],
    },

    { type: 'heading', level: 2, text: 'NICE Traffic Light System' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'RED — Immediate Action / 999 / Hospital Admission',
      items: [
        'Any respiratory rate >60 breaths/min OR moderate/severe increased work of breathing (iWOB)',
        'Heart rate >180 bpm (any age) OR reduced skin turgor / mottled skin',
        'Fever ≥38°C in infant <3 months',
        'Non-blanching rash (petechiae / purpura) — sepsis until proven otherwise',
        'Signs of meningism: neck stiffness, photophobia, Kernig\'s sign',
        'Neurological: new seizure, altered consciousness, bulging fontanelle, high-pitched cry, inconsolable',
        'Appears severely unwell to the clinician — clinical gestalt',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'AMBER — Safety Net / Urgent Assessment / Review Within 2 Hours',
      items: [
        'Respiratory rate >50 (under 1 year), >40 (under 2 years), >30 (older)',
        'Heart rate >160 (under 1 year), >150 (under 2 years), >140 (under 5 years)',
        'SpO2 <95%, simple nasal flaring or mild subcostal recession',
        'Dry signs: CRT >2 seconds, dry mucous membranes, reduced wet nappies',
        'Fever ≥39°C in infant <6 months; fever >5 days duration',
        'Non-weight-bearing on a limb; less interactive than normal; pallor reported by parent',
        'No focus of infection found',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'GREEN — Can Manage at Home with Safety Net',
      items: [
        'Well-appearing child with clear source of fever (e.g. viral URTI, otitis media)',
        'Normal vital signs for age, moist mucous membranes, interacting normally',
        'Clear parental safety net advice given (see below)',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flag Conditions — Always Think Sepsis' },

    {
      type: 'table',
      headers: ['Condition', 'Key Features', 'Action'],
      rows: [
        ['Meningococcal sepsis', 'Non-blanching petechiae/purpura, ill child, meningism, bulging fontanelle, seizures', '999 immediately; STAT IM benzylpenicillin (>10y: 1.2g; 1–10y: 600mg; <1y: 300mg) before transfer — do NOT delay'],
        ['HSV encephalitis', 'Altered GCS, neurological signs, seizures, fever', '999; admit urgently; IV aciclovir in hospital'],
        ['Pneumonia', 'Increased WOB, crackles, tachycardia, hypoxia, fever', 'Admit if any red flags; amoxicillin TDS 5 days if managing at home (systemically well, no complications)'],
        ['Scarlet fever', 'Sandpaper rash, strawberry tongue, tonsillar exudate, perioral pallor, flushing', 'Amoxicillin 10 days (or phenoxymethylpenicillin if preferred); notifiable disease'],
        ['Kawasaki disease', 'Fever >5 days + 4 of 5: rash (polymorphic), conjunctival injection (bilateral, non-purulent), lip/tongue changes (strawberry tongue, cracked lips), hand/foot swelling then desquamation, cervical lymphadenopathy', 'URGENT paediatric admission — risk of coronary artery aneurysms; treat with IV immunoglobulin + aspirin'],
        ['Urosepsis', 'Fever + dehydration + vomiting/abdominal pain + urine dipstick positive', 'Admit if <3 months; urine culture first; treat with appropriate antibiotic'],
        ['Septic arthritis/osteomyelitis', 'Non-weight bearing, hot/swollen joint, fever, systemically unwell', 'Urgent orthopaedic/paediatric admission — joint washout may be needed'],
      ],
    },

    { type: 'heading', level: 2, text: 'Other Causes of Prolonged Fever (>5 days)' },

    {
      type: 'list',
      items: [
        'EBV/CMV: glandular fever-type presentation — cervical lymphadenopathy, tonsillar exudate, hepatosplenomegaly; check monospot and EBV serology',
        'Lyme disease: erythema migrans rash (expanding red ring), tick exposure history; serological testing; doxycycline (>8y) or amoxicillin',
        'Cat scratch disease: unilateral lymphadenopathy, history of cat scratch or contact',
        'Malignancy (ALL especially): pallor, unexplained bruising, lymphadenopathy, hepatosplenomegaly — URGENT FBC',
        'Still\'s disease (systemic JIA): daily fever spike with salmon-pink evanescent rash, arthritis — URGENT paediatric referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Management and Safety Net' },

    {
      type: 'list',
      items: [
        'Antipyretics: paracetamol or ibuprofen — for comfort; do NOT prevent febrile convulsions',
        'Do NOT alternate paracetamol and ibuprofen routinely — may cause overdose; use one first; if insufficient, try the other',
        'Tepid sponging: NOT recommended — peripheral vasoconstriction risks raising core temperature',
        'Adequate hydration: encourage oral fluids; breast or formula feeding should continue',
        'Always check urine in any feverish child <3 months (urine dipstick/culture); lower threshold for admission',
        'Safety net: advise parents to return if: non-blanching rash appears, fever >5 days, significantly reduced wet nappies (dehydration), lethargy increases, increased work of breathing, or parent is concerned',
      ],
    },

    { type: 'heading', level: 2, text: 'Pneumonia in Children' },

    {
      type: 'list',
      items: [
        'Can be viral — NPA (nasopharyngeal aspirate) in hospital; cough may be absent early',
        'Manage at home only if: systemically well, no significant comorbidities, no features of complicated pneumonia or empyema',
        'First line: amoxicillin 40 mg/kg/day in 3 divided doses × 5 days',
        'Second line / atypical: clarithromycin or erythromycin BD',
        'Age >12: doxycycline',
        'Severe: co-amoxiclav',
        'Should respond within 48 hours — safety net to return if not improving',
        'Empyema (post-pneumonia): most common complication; often associated with recent varicella',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Paediatric A&E / urgent admission: UHDB Queen\'s Hospital Burton paediatric department',
        'Alternative: Good Hope Hospital (UHB) paediatric A&E for Sutton Coldfield-side families',
        'Meningococcal sepsis (999): give IM benzylpenicillin before ambulance arrives — do NOT delay for IV access',
        'Kawasaki disease: urgent paediatric admission UHDB Burton or direct transfer to QEHB Birmingham for cardiac echo and IVIG',
        'HV team: post-illness wellbeing check; MPFT community health visiting team',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG143 — Fever in Under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
        { label: 'NICE CKS — Feverish Children', url: 'https://cks.nice.org.uk/topics/feverish-children/' },
        { label: 'Meningitis Now', url: 'https://www.meningitisnow.org/' },
        { label: 'Kawasaki Disease Foundation', url: 'https://www.kdfoundation.org.uk/' },
      ],
    },
  ],
}
