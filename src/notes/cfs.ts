import type { Note } from '../data/notes'

export const cfs: Note = {
  id: 'cfs-me',
  title: 'Chronic Fatigue Syndrome (CFS/ME)',
  subtitle: 'Diagnosis, referral criteria, energy management and biopsychosocial support',
  tags: ['rheumatology', 'mental health'],

  body: 'chronic fatigue syndrome CFS ME myalgic encephalomyelitis post exertional malaise PEM brain fog unrefreshing sleep fatigue TATT tired all the time referral ME CFS service NICE NG206 energy management pacing CBT graded exercise programme children paediatrics Action for ME severity functional impairment Long COVID post viral',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosing CFS/ME',
      items: [
        'CFS/ME is a complex multi-system condition — NOT a diagnosis of exclusion alone; requires positive symptom recognition',
        'Consider if 4 symptom clusters present for >4–6 weeks:',
        '1. Debilitating fatigue — disproportionate, worsened by physical or mental activity, not relieved by rest',
        '2. Post-exertional malaise (PEM) — hallmark symptom; delayed worsening of symptoms after activity (may be 12–48h later)',
        '3. Unrefreshing sleep — despite normal sleep duration; cognitive symptoms on waking',
        '4. Cognitive impairment (brain fog) — slow responses, difficulty concentrating, memory problems',
        'Severity graded by functional impact: from still in work/education (mild) to housebound or bedbound (severe)',
        'Post-COVID syndrome ("Long COVID") can present identically — same management principles apply',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations — Exclude Other Causes First' },

    {
      type: 'callout',
      variant: 'warning',
      title: '"TATT" Bloods — Before Referral',
      items: [
        'FBC — anaemia, lymphopenia',
        'TFTs — hypothyroidism (common masquerader)',
        'U&E, eGFR — renal disease',
        'LFTs, ferritin — liver disease, haemochromatosis',
        'Glucose / HbA1c — diabetes',
        'CRP/ESR — inflammatory disease',
        'Haematinics (B12, folate, ferritin)',
        'Coeliac screen (tTG IgA + total IgA)',
        'Vitamin D',
        'Calcium',
        'CK — myopathy',
        'Urine dip',
        'Viral serology — only if clinically indicated (EBV, CMV, Lyme — not routine)',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer' },

    {
      type: 'table',
      headers: ['Group', 'Threshold', 'Where to Refer'],
      rows: [
        ['Adults', 'Symptoms persisting >6 weeks after bloods reviewed and other causes excluded', 'ME/CFS specialist service — via e-RS; NICE recommends referral within 3 months of symptom onset'],
        ['Children', 'Symptoms persisting >4 weeks', 'Refer to general paediatrics first (to exclude organic cause and confirm diagnosis); paediatrician can refer on to paediatric ME/CFS service'],
        ['Severe/very severe', 'Housebound or bedbound — significant functional impairment', 'Urgent referral; home visits may be required; multidisciplinary team essential'],
      ],
      caption: 'NICE NG206 (2021): CFS/ME is a genuine, complex physical condition. Graded exercise therapy (GET) should NOT be routinely offered — NICE removed this recommendation. Lightning Process is not recommended. CBT may help with associated psychological distress but is NOT a treatment for the underlying condition.',
    },

    { type: 'heading', level: 2, text: 'Management — Primary Care Role' },

    {
      type: 'list',
      items: [
        'Energy management (pacing): the cornerstone of management — patient-led approach; identify activity envelope and stay within it; avoid boom-bust cycles',
        'Post-exertional management: teach patient to recognise PEM triggers; rest proactively; plan activities carefully',
        'Sleep hygiene: regular sleep-wake times, avoid naps during day if possible, stimulus control',
        'Relaxation techniques: breathing exercises, mindfulness, progressive muscle relaxation',
        'Psychological support: CBT if associated anxiety/depression; NOT as primary treatment for CFS/ME itself — explain distinction carefully',
        'No medications treat core symptoms: review existing medications for potential worsening effects; avoid new medications that may cause fatigue',
        'Annual review in primary care: symptom assessment, medication review, functional status, safeguarding if severe (especially in young people)',
        'Signpost: Action for ME (actionforme.org.uk), ME Association (meassociation.org.uk) — evidence-based patient resources',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'What NOT to Say or Offer',
      items: [
        'Do NOT imply symptoms are psychological or "all in the mind" — CFS/ME is a recognised physical condition',
        'Do NOT offer graded exercise therapy (GET) — can worsen PEM and cause relapse',
        'Do NOT dismiss or minimise symptoms — patients often face years of diagnostic uncertainty',
        'Do NOT routinely offer paracetamol, NSAIDs, opiates, gabapentinoids, or stimulants',
        'If symptoms persist despite appropriate management — re-examine and consider whether alternative diagnosis has been missed',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Adult ME/CFS service: check Staffordshire/Midlands ME/CFS service availability — may be via MPFT or community provider; refer via e-RS',
        'Paediatric ME/CFS: refer to UHDB Burton paediatrics or Good Hope (UHB) paediatrics first; paediatric ME/CFS service as secondary referral',
        'Talking Therapies (for associated anxiety/depression): MPFT self-referral — staffordshire.everyonehealth.co.uk or 0333 005 0095',
        'Benefits and welfare support: PIP may be appropriate for moderate-severe CFS; provide supporting letter if requested',
        'Patient support: signpost to Action for ME (actionforme.org.uk) — includes resources on pacing, benefits, and management',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG206 — ME/CFS', url: 'https://www.nice.org.uk/guidance/ng206' },
        { label: 'NICE CKS — CFS/ME', url: 'https://cks.nice.org.uk/topics/chronic-fatigue-syndrome-cfs-me/' },
        { label: 'Action for ME', url: 'https://www.actionforme.org.uk/' },
        { label: 'ME Association', url: 'https://www.meassociation.org.uk/' },
        { label: 'NHS — CFS/ME', url: 'https://www.nhs.uk/conditions/chronic-fatigue-syndrome-cfs/' },
      ],
    },
  ],
}
