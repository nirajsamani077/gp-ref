import type { Note } from '../data/notes'

export const fibromyalgia: Note = {
  id: 'fibromyalgia',
  title: 'Fibromyalgia',
  subtitle: 'Diagnosis using ACR criteria, PAIN framework, and distinguishing from RA and CFS',
  tags: ['rheumatology', 'msk'],

  body: 'fibromyalgia chronic widespread pain fatigue hypersensitivity central sensitisation symptom severity index SSI widespread pain index WPI ACR American College of Rheumatology PAIN framework exercise CBT ACT acupuncture antidepressant SSRI duloxetine amitriptyline gabapentinoid opioid rheumatoid arthritis RA CCP RF CFS hypermobility Ehlers-Danlos Beighton score',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Fibromyalgia — What Is It?',
      items: [
        'A chronic pain syndrome characterised by widespread musculoskeletal pain, fatigue, sleep disturbance and cognitive difficulties ("fibro fog")',
        'Mechanism: central sensitisation — normal stimuli are perceived as painful; a form of "pain allergy" where the central/peripheral nervous system is hypersensitised',
        'NOT an inflammatory condition — ESR, CRP and inflammatory markers are typically NORMAL',
        'NOT the same as FND (functional neurological disorder — neurological symptoms without pain) or somatisation (where psychological distress drives physical symptoms)',
        'Overlaps with CFS/ME (predominantly fatigue) and joint hypermobility syndrome/hEDS (Ehlers-Danlos)',
        'Often triggered by: infection, trauma, surgery, or significant psychosocial stressor — but is a distinct biological condition',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — ACR Criteria' },

    {
      type: 'callout',
      variant: 'info',
      title: 'ACR 2010 Diagnostic Criteria (Fibromyalgia Diagnostic Worksheet)',
      items: [
        'Step 1: Calculate Widespread Pain Index (WPI) — count painful body regions from 0–19',
        'Step 2: Calculate Symptom Severity Index (SSI) — severity of fatigue, sleep problems, cognitive symptoms (0–12) + number and severity of additional somatic symptoms',
        'Diagnosis if: WPI ≥7 AND SSI ≥5 OR WPI 3–6 AND SSI ≥9',
        'Symptoms present for ≥3 months; no other diagnosis better explains the symptoms',
        'RCPCH fibromyalgia diagnostic worksheet: rcplondon.ac.uk — useful clinical tool',
        'Refer to rheumatology ONLY if clinical uncertainty about diagnosis (to exclude inflammatory arthritis)',
      ],
    },

    { type: 'heading', level: 2, text: 'Key Differential: Rheumatoid Arthritis' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Exclude RA Before Diagnosing Fibromyalgia',
      items: [
        'Inflammatory markers (ESR, CRP) are NORMAL in 60% of early RA — do NOT use normal CRP to exclude RA',
        'Check: RF (rheumatoid factor) AND anti-CCP antibodies (more specific for RA)',
        'RA features NOT present in fibromyalgia: joint swelling, erythema, warmth, morning stiffness >1 hour, synovitis',
        'Consider hypermobility: Beighton score ≥4/9 suggests hypermobility — check for hEDS (hypermobile Ehlers-Danlos) which can cause widespread pain and fatigue',
      ],
    },

    { type: 'heading', level: 2, text: 'Management — PAIN Framework' },

    {
      type: 'callout',
      variant: 'info',
      title: 'PAIN — Evidence-Based Treatments for Fibromyalgia',
      items: [
        'P — Physical activity: aerobic exercise and strength training — cornerstone of treatment; group-based preferred; structured, supervised programme; low and slow build-up',
        'A — Acupuncture: may help some patients; available via community physiotherapy or FCP',
        'I — Integrated psychological therapy: CBT or ACT (Acceptance and Commitment Therapy) — address the psychosocial component; explain that the pain is real and brain-based; mindfulness',
        'N — No opioids, no NSAIDs, no paracetamol, no gabapentinoids routinely — no evidence for fibromyalgia; may cause harm',
        'Consider antidepressants (off-label but evidence-based): SSRIs (fluoxetine, sertraline) or duloxetine; amitriptyline low-dose at night (may help sleep and pain)',
        'Involve specialist pain team if above measures insufficient',
      ],
    },

    {
      type: 'table',
      headers: ['Treatment', 'Evidence', 'Notes'],
      rows: [
        ['Aerobic exercise', 'Strong evidence; cornerstone', 'Start low and slow; may initially worsen symptoms; persist for 6–12 weeks for benefit'],
        ['CBT / ACT', 'Good evidence for distress and function', 'Pain catastrophising very common; CBT targets unhelpful thought patterns'],
        ['Duloxetine (SNRI)', 'Moderate evidence for pain and fatigue', '30–60 mg OD; licensed for fibromyalgia in USA; off-label in UK'],
        ['Amitriptyline', 'Good evidence for sleep and pain at low doses', '10–25 mg at night; increase slowly; helps sleep initiation and pain'],
        ['SSRIs', 'Moderate evidence for mood, fatigue, and pain', 'Fluoxetine 20–40 mg; useful if comorbid depression/anxiety'],
        ['Pregabalin / gabapentin', 'Limited evidence; NICE NG193 does NOT recommend routinely', 'Use only if central neuropathic features dominate; side effects: cognitive dulling, weight gain'],
        ['Opioids', 'No evidence; may worsen central sensitisation', 'Do NOT prescribe; risk of dependence without benefit'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Rheumatology (diagnostic uncertainty only): UHDB Queen\'s Hospital Burton rheumatology — via e-RS; include RF, anti-CCP, inflammatory markers, clinical features',
        'Physiotherapy (fibromyalgia exercise programme): UHDB community physiotherapy or FCP at Darwin Practice',
        'Talking Therapies (CBT/ACT): MPFT Staffordshire — staffordshire.everyonehealth.co.uk; self-referral; 0333 005 0095',
        'Pain clinic (refractory fibromyalgia): UHDB Burton Pain Management Service — via e-RS; include functional assessment, medications tried',
        'Patient resources: Fibromyalgia Action UK (fmauk.org); NHS Inform (nhsinform.scot)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG193 — Chronic Primary Pain', url: 'https://www.nice.org.uk/guidance/ng193' },
        { label: 'Fibromyalgia Action UK', url: 'https://www.fmauk.org/' },
        { label: 'EULAR — Fibromyalgia Guidelines', url: 'https://ard.bmj.com/content/76/2/318' },
        { label: 'NHS — Fibromyalgia', url: 'https://www.nhs.uk/conditions/fibromyalgia/' },
      ],
    },
  ],
}
