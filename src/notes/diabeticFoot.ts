import type { Note } from '../data/notes'

export const diabeticFoot: Note = {
  id: 'diabetic-foot',
  title: 'Diabetic Foot',
  subtitle: 'Annual foot assessment, ulcers, Charcot arthropathy, neuropathic pain and referral tiers',
  tags: ['diabetes', 'vascular'],

  body: 'diabetic foot foot protection service tier 1 podiatry interdisciplinary foot care service tier 2 10g monofilament neuropathy ABPI peripheral vascular disease critical ischaemia Charcots arthropathy Charcot foot ulcer infection osteomyelitis diabetic foot infection DFI flucloxacillin co-amoxiclav neuropathic pain duloxetine amitriptyline gabapentin pregabalin capsaicin annual diabetic review',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Diabetic Foot — Two-Tier Service',
      items: [
        'Tier 1 — Foot Protection Service: podiatry-led; orthotics, wound care, low-risk patients (callus, minor skin changes)',
        'Tier 2 — Interdisciplinary Foot Care Service: MDT — podiatry, orthotics, microbiology, diabetes specialists (DSNs), vascular surgery, orthopaedics; for high-risk and active foot problems',
        'IMMEDIATE ADMISSION if: life- or limb-threatening (spreading infection, critical ischaemia, systemic sepsis, gas gangrene)',
        'URGENT TIER 2 referral (same-day discussion): active diabetic foot problem — ulcer, critical ischaemia, gangrene, Charcot foot (red, hot, swollen foot)',
      ],
    },

    { type: 'heading', level: 2, text: 'Annual Diabetic Foot Assessment' },

    {
      type: 'list',
      items: [
        'Inspect feet: ulcers, callus, deformity, infection, gangrene, skin breaks, interdigital maceration',
        'Check pulses: dorsalis pedis and posterior tibial; assess capillary refill time (CRT)',
        'ABPI (ankle-brachial pressure index): if suspecting peripheral vascular disease — refer vascular surgery if ABPI <0.5 or >1.3',
        '10g monofilament test: test 4 sites per foot; inability to detect monofilament = significant peripheral neuropathy (referral to Tier 1)',
        'Ask about intermittent claudication symptoms',
        'Check for Charcot arthropathy: ask about hot, swollen foot with or without pain',
        'Any finding beyond simple callus: refer to Tier 1 Foot Protection Service',
      ],
    },

    { type: 'heading', level: 2, text: 'Diabetic Foot Infection (DFI)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Recognising and Treating DFI',
      items: [
        'SUSPECT DFI if: red, warm, tender foot; raised blood glucose; ulcer with purulent discharge or deep tracking; crepitus, fluctuance or systemic upset',
        'Inflammatory markers may be NORMAL in DFI — do not use to exclude infection',
        'Gas on imaging or clinical crepitus: immediate 999 admission (gas gangrene / necrotising fasciitis)',
        'Suspected osteomyelitis: MRI is investigation of choice (X-ray insensitive — changes take >2 weeks to appear)',
      ],
    },

    {
      type: 'table',
      headers: ['Severity', 'Antibiotic', 'Duration'],
      rows: [
        ['Mild (cellulitis only, no deep infection)', 'Flucloxacillin 500 mg–1 g QDS PO', '7 days (skin changes may take longer to fully resolve)'],
        ['Mild, penicillin allergy', 'Clarithromycin 500 mg BD or doxycycline 100 mg BD', '7 days'],
        ['Moderate (tissue involvement)', 'Co-amoxiclav 625 mg TDS PO or co-trimoxazole (Septrin) ± metronidazole', '10–14 days; consider hospital if not responding to oral within 48h'],
        ['Severe / MRSA suspected / Pseudomonas', 'Hospital admission; IV antibiotics (piperacillin-tazobactam, clindamycin, linezolid for MRSA)', 'Hospital decision'],
      ],
      caption: 'Always check neurovascular integrity (NVI) at each review. Monitor blood glucose — infection raises glucose even in well-controlled diabetes. Send wound swab only if persistent or complex infection (surface swabs are not helpful for DFI diagnosis).',
    },

    { type: 'heading', level: 2, text: 'Charcot Arthropathy' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Charcot Foot — Do Not Miss',
      items: [
        'Rare but serious: red, hot, swollen foot with intact skin — may or may not be painful (due to neuropathy)',
        'Differential: sprain, gout, cellulitis, DVT — but in any diabetic with a hot swollen foot, THINK CHARCOT',
        'Mechanism: peripheral neuropathy leads to disrupted blood flow and bone/joint destruction',
        'REFER URGENTLY for weight-bearing X-ray or MRI — same-day/next-day SDEC or Tier 2 MDT',
        'Without prompt treatment (total non-weight bearing): progressive osteolysis leading to chronic deformity, Charcot joint, and increased ulceration risk',
        'Management: total contact casting and non-weight bearing under Tier 2 MDT',
      ],
    },

    { type: 'heading', level: 2, text: 'Neuropathic Pain in Diabetic Neuropathy' },

    {
      type: 'table',
      headers: ['Drug', 'Starting Dose', 'Maintenance / Max', 'Notes'],
      rows: [
        ['Duloxetine', '30 mg OD × 2 weeks, then 60 mg OD', '60–120 mg/day; review at 3 months', 'First line in NICE guidelines; also helps depression/anxiety'],
        ['Amitriptyline', '10 mg at night', 'Increase by 10 mg/week; usual 30–70 mg at night', 'Cheap and effective; caution in cardiac/elderly; also helps sleep'],
        ['Gabapentin', '300 mg OD, titrate slowly', 'Max 3.6 g/day in 3 divided doses (e.g. 1200 mg TDS)', 'Titrate over weeks; schedule 3 controlled drug'],
        ['Pregabalin', '75 mg BD, titrate slowly', 'Max 600 mg/day in 2–3 divided doses (e.g. 200 mg TDS)', 'Schedule 3 controlled drug; renal dose adjustment needed'],
      ],
      caption: 'Try one agent at a time for at least 4–6 weeks at adequate dose before switching. Tramadol is for acute rescue only — not for long-term neuropathic pain management. Capsaicin (cream or 8% patch) is licensed under specialist care only if unable to use oral agents.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Tier 1 Foot Protection Service: UHDB Burton podiatry — refer any finding beyond simple callus on annual foot assessment',
        'Tier 2 Interdisciplinary Foot Care Service: UHDB Burton — urgent/same-day referral for active foot ulcer, Charcot, critical ischaemia, deep infection; phone direct to avoid delay',
        'Vascular surgery (critical ischaemia, ABPI <0.5): UHDB Burton vascular surgery — urgent via e-RS or direct telephone referral',
        'Charcot foot (acute): UHDB Burton SDEC / A&E — same-day weight-bearing X-ray/MRI',
        'Orthopaedics (chronic Charcot deformity): UHDB Burton orthopaedics via Tier 2 MDT',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG19 — Diabetic Foot Problems', url: 'https://www.nice.org.uk/guidance/ng19' },
        { label: 'NICE CKS — Diabetic Foot', url: 'https://cks.nice.org.uk/topics/diabetic-foot-problems/' },
        { label: 'Diabetes UK — Foot Care', url: 'https://www.diabetes.org.uk/guide-to-diabetes/complications/feet' },
        { label: 'IWGDF — Diabetic Foot Guidelines', url: 'https://iwgdfguidelines.org/' },
      ],
    },
  ],
}
