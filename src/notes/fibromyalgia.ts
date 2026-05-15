import type { Note } from '../data/notes'

export const fibromyalgia: Note = {
  id: 'fibromyalgia',
  title: 'Fibromyalgia',
  subtitle: 'Diagnosis, ACR criteria, central sensitisation, PAIN framework, drug doses and supported self-management',
  tags: ['rheumatology', 'msk'],

  body: 'fibromyalgia chronic widespread pain fatigue hypersensitivity central sensitisation symptom severity index SSI widespread pain index WPI ACR American College of Rheumatology PAIN framework exercise CBT ACT acupuncture antidepressant SSRI duloxetine amitriptyline gabapentinoid opioid rheumatoid arthritis RA CCP RF CFS hypermobility Ehlers-Danlos Beighton score sleep hygiene pacing graded exercise fatigue catastrophising allodynia hyperalgesia spinal cord sensitisation',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Fibromyalgia — Understanding It Well Enough to Explain It',
      items: [
        'Central sensitisation: in fibromyalgia, the central and peripheral nervous system is hypersensitised — normal, non-painful stimuli (touch, movement, temperature) are processed as painful; like a pain alarm system stuck in overdrive',
        'NOT an inflammatory condition — ESR, CRP, and inflammatory markers are NORMAL; this is a strength of the diagnosis, not a weakness',
        'NOT primarily psychological — there is neurobiological evidence of spinal cord and brain sensitisation; however, psychological factors (trauma, catastrophising, poor coping) significantly affect severity and disability',
        'Common triggers: infection (viral, Lyme), trauma (physical or emotional), surgery, significant psychosocial stressor — but fibromyalgia is a distinct condition, not simply a psychological reaction',
        'Strongly overlaps with: CFS/ME (fatigue-predominant), irritable bowel syndrome (gut sensitisation), interstitial cystitis, headache, and hypermobility-related disorders',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis — ACR 2010/2011 Criteria (Practical GP Version)' },

    {
      type: 'table',
      headers: ['Step', 'What to Assess', 'Threshold'],
      rows: [
        ['Step 1: Widespread Pain Index (WPI)', 'Count the number of areas with pain in the past week from 19 body regions (shoulders, arms, forearms, hands, hips, thighs, legs, feet, neck, upper back, lower back, upper and lower chest, abdomen, jaw)', 'Score 0–19'],
        ['Step 2: Symptom Severity Score (SSS)', 'Rate severity 0–3 of: (1) fatigue, (2) waking unrefreshed, (3) cognitive symptoms; PLUS count somatic symptoms (headache, abdominal pain/cramps, depression) 0–3', 'Score 0–12'],
        ['Diagnosis criteria', 'WPI ≥7 AND SSS ≥5 OR WPI 3–6 AND SSS ≥9', 'Symptoms present for ≥3 months; no other disorder that explains the pain'],
      ],
      caption: 'The 2010 ACR criteria removed the historic tender-point examination (18 tender points) — which was unreliable and examiner-dependent. Diagnosis is now clinical, based on symptom burden. Refer to rheumatology ONLY if significant diagnostic uncertainty (to exclude inflammatory arthritis).',
    },

    { type: 'heading', level: 2, text: 'Who to Investigate and What' },

    {
      type: 'list',
      items: [
        'ESR + CRP: typically NORMAL in fibromyalgia — an elevated CRP/ESR should prompt reconsideration of diagnosis and inflammatory arthritis screen',
        'RF (rheumatoid factor) + anti-CCP: to exclude rheumatoid arthritis (note: RF can be weakly positive in ~5% of healthy population; anti-CCP is more specific)',
        'TFTs: hypothyroidism causes widespread pain, fatigue, and cognitive symptoms — must exclude before diagnosing fibromyalgia',
        'ANA (antinuclear antibody): if systemic lupus suspected (photosensitivity, rash, joint swelling, serositis)',
        'Coeliac serology (tTG IgA + total IgA): coeliac disease mimics fibromyalgia with widespread pain, fatigue, and cognitive symptoms',
        'FBC, U&E, LFT, vitamin D: basic screen; vitamin D deficiency causes musculoskeletal pain — treat before labelling fibromyalgia',
        'Beighton score (0–9): if widespread joint hypermobility suspected (hEDS/HSD — hypermobile Ehlers-Danlos) — score ≥4 suggests hypermobility; this requires different physiotherapy approach',
      ],
    },

    { type: 'heading', level: 2, text: 'Exclude RA Before Diagnosing Fibromyalgia' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Inflammatory Arthritis vs Fibromyalgia — Key Distinguishing Features',
      items: [
        'Features NOT present in fibromyalgia but PRESENT in RA: joint swelling (warm, boggy joints), joint erythema, morning stiffness >60 minutes, synovitis on USS, elevated CRP, positive anti-CCP',
        'Note: inflammatory markers are NORMAL in ~40% of early RA — so normal CRP does NOT exclude RA',
        'If anti-CCP is positive OR RF is elevated in the context of clinical joint features: refer rheumatology before diagnosing fibromyalgia',
        'Fibromyalgia CAN coexist with RA (up to 20% of RA patients have comorbid fibromyalgia) — the two are not mutually exclusive',
        'Hypermobility (hEDS): joint hypermobility causes widespread pain, fatigue, frequent dislocations; Beighton ≥4 + systemic features; refer rheumatology if suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'Management — PAIN Framework' },

    {
      type: 'callout',
      variant: 'info',
      title: 'PAIN — The Four Pillars of Fibromyalgia Treatment',
      items: [
        'P — Physical activity: aerobic exercise AND resistance training — the most evidence-based treatment; group-based preferred (Walking groups, hydrotherapy, yoga); start LOW and SLOW (may initially worsen symptoms for 2–4 weeks — persist); graded exercise therapy (GET)',
        'A — Acupuncture: may help some patients; available via community physiotherapy or FCP; 6–10 sessions',
        'I — Integrated psychological therapy: CBT or ACT (Acceptance and Commitment Therapy); pain catastrophising and hypervigilance are very common and treatable; mindfulness-based cognitive therapy also helps',
        'N — No opioids, no NSAIDs routinely, no routine paracetamol: no evidence these help fibromyalgia; opioids worsen central sensitisation (opioid-induced hyperalgesia); may cause harm and dependence',
      ],
    },

    { type: 'heading', level: 2, text: 'Drug Treatments — Doses and GP Role' },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Evidence', 'Key Points'],
      rows: [
        ['Amitriptyline (first-line for sleep + pain)', 'Start 10 mg nocte 1–2 hours before bed; increase by 10 mg every 2–4 weeks up to 50–75 mg nocte', 'Good evidence for sleep, pain, and fatigue at low doses (NOT antidepressant doses)', 'The most commonly used pharmacological treatment in UK practice; explain it\'s being used as a pain modifier, not an antidepressant; morning grogginess improves with time; avoid in cardiac arrhythmia'],
        ['Duloxetine (SNRI)', 'Start 30 mg OD in morning; increase to 60 mg OD after 2 weeks', 'Moderate evidence for pain, fatigue, and mood; licensed for fibromyalgia in USA; off-label in UK', 'Useful if comorbid depression or anxiety; may cause nausea initially (take with food); do NOT stop abruptly'],
        ['Fluoxetine (SSRI)', '20–40 mg OD in morning', 'Moderate evidence for fatigue and mood; less evidence for pain alone', 'Useful if moderate–severe depression comorbid; may increase energy'],
        ['Pregabalin (if neuropathic features dominate)', 'Start 25–75 mg BD; increase up to 150 mg BD', 'Limited evidence for fibromyalgia specifically (NICE NG193 advises NOT routinely); some benefit for sleep', 'Significant side effects: cognitive dulling, weight gain, dizziness, falls; risk of dependence; use only if central neuropathic features dominate; requires careful monitoring'],
        ['Gabapentin', 'Start 100–300 mg TDS; increase to 1800 mg/day TDS', 'Similar to pregabalin; limited evidence', 'Same cautions; less evidence than pregabalin; not recommended routinely by NICE NG193'],
      ],
      caption: 'Opioids (codeine, tramadol, morphine): NO evidence of benefit in fibromyalgia; may worsen central sensitisation (opioid-induced hyperalgesia); risk of dependence; actively review and wean off if patient already on them.',
    },

    { type: 'heading', level: 2, text: 'Sleep, Fatigue, and Pacing — Practical GP Advice' },

    {
      type: 'list',
      items: [
        'Sleep hygiene: consistent wake time even on weekends; no daytime napping (counterintuitive for patients); sleep restriction therapy for insomnia comorbidity; amitriptyline helps sleep initiation',
        'Pacing: avoid the "push-crash" cycle (doing too much on good days, then crashing) — teach gradual consistent activity levels; FCP or physiotherapist can help develop a pacing plan',
        'Graded exercise: start with 5–10 minutes walking per day; increase by 1–2 minutes per week; the nervous system habituates — exercise initially increases pain temporarily before improving it',
        'Fatigue management: energy conservation strategies (OT referral); activity planning; rest breaks structured (short, scheduled — not reactive); address sleep disorder first',
        'Explaining to the patient: use the "pain volume dial" analogy — fibromyalgia turns the dial too high; the treatments (exercise, sleep, CBT) gradually turn it back down; medication is an adjunct, not the main treatment',
        'Patient resources: Fibromyalgia Action UK (fmauk.org); pain toolkit (paintoolkit.org); NHS Inform (nhsinform.scot/fibromyalgia)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting — When Diagnosis Needs Reconsideration',
      items: [
        'If pain changes significantly in character, becomes localised, or develops objective signs (joint swelling, neurological deficit) → do not assume fibromyalgia; review and investigate',
        'If patient develops new systemic features (fever, weight loss, rash, lymphadenopathy) → consider inflammatory/autoimmune disease or malignancy; recheck inflammatory markers',
        'If significant suicidal ideation develops (fibromyalgia carries elevated suicide risk due to chronic pain and social impact) → urgent psychiatric assessment; use PHQ-9 at every review',
        'Progressive functional decline not explained by pain: consider co-existing MSK disease, motor neurone disease, or other treatable cause',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG193 — Chronic Primary Pain', url: 'https://www.nice.org.uk/guidance/ng193' },
        { label: 'Fibromyalgia Action UK', url: 'https://www.fmauk.org/' },
        { label: 'EULAR Fibromyalgia Guidelines', url: 'https://ard.bmj.com/content/76/2/318' },
        { label: 'The Pain Toolkit', url: 'https://www.paintoolkit.org/' },
        { label: 'NHS — Fibromyalgia', url: 'https://www.nhs.uk/conditions/fibromyalgia/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Rheumatology (diagnostic uncertainty only): UHDB Queen\'s Hospital Burton rheumatology — via e-RS; include RF, anti-CCP, inflammatory markers, Beighton score, clinical features; do not refer for fibromyalgia management without diagnostic uncertainty',
        'Physiotherapy (graded exercise programme): UHDB community physiotherapy or FCP at Darwin Practice; request "fibromyalgia graded exercise and pain management programme"',
        'Talking Therapies (CBT/ACT): MPFT Staffordshire — staffordshire.everyonehealth.co.uk; self-referral available; 0333 005 0095; wait times apply — manage expectations',
        'Pain clinic (refractory fibromyalgia, complex polypharmacy): UHDB Burton Pain Management Service — via e-RS; include functional impact, medications tried and response',
        'FCP (First Contact Practitioner): at Darwin Practice for initial MSK assessment and exercise referral',
      ],
    },
  ],
}
