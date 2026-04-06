import type { Note } from '../data/notes'

export const epilepsyAdults: Note = {
  id: 'epilepsyAdults',
  title: 'Epilepsy in Adults',
  subtitle: 'Diagnosis, AED prescribing, monitoring, DVLA rules, and SUDEP — GP reference',
  tags: ['neurology'],

  body: 'epilepsy adults seizure AED antiepileptic antiseizure medication sodium valproate lamotrigine levetiracetam keppra carbamazepine phenytoin ethosuximide focal generalised tonic clonic absence myoclonic GTC LOC loss of consciousness post-ictal aura DVLA driving first seizure referral neurology EEG MRI status epilepticus SUDEP sudden unexpected death valproate pregnancy prevention programme PPP teratogen neural tube defect NTD enzyme inducer drug interaction COC pill warfarin DOAC FRAX bone health monitoring older adults transient epileptic amnesia west syndrome juvenile myoclonic epilepsy drug resistant ketogenic diet VNS surgery',

  content: [
    // ── DIAGNOSIS & REFERRAL ──────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosis & Referral',
      items: [
        'Refer any first seizure urgently — seen within 2 weeks by neurologist (NICE)',
        'Advise patient not to drive from the time of suspected seizure — inform DVLA',
        'Investigations organised by neurologist: EEG and MRI brain',
        'AEDs are usually started only after 2 or more unprovoked seizures',
        'Single seizure with high-risk EEG/MRI findings may prompt earlier AED discussion with specialist',
      ],
    },

    // ── SEIZURE TYPES ─────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Seizure Types',
    },
    {
      type: 'table',
      headers: ['Type', 'Key Features'],
      rows: [
        ['Generalised tonic-clonic (GTC)', 'Loss of consciousness (LOC); tonic stiffening then clonic jerking; post-ictal confusion, drowsiness, headache; may have tongue bite, incontinence'],
        ['Focal (aware or impaired awareness)', 'Partial or full awareness; aura common (smell, taste, tingling, d\u00e9j\u00e0 vu); motor or sensory features; may secondarily generalise'],
        ['Absence', 'Brief blank stare (seconds); no post-ictal phase; provoked by hyperventilation; common in childhood'],
        ['Myoclonic', 'Sudden brief muscle jerks; no LOC; often on waking; associated with juvenile myoclonic epilepsy (JME)'],
        ['Tonic / Atonic', 'Tonic: sudden stiffening; Atonic (drop attacks): sudden loss of tone causing falls; both high injury risk'],
      ],
    },

    // ── HISTORY TAKING ────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'History Taking',
    },
    {
      type: 'para',
      text: 'Obtain a witness account wherever possible — request video footage if available. Ask about: precipitating trigger (sleep deprivation, alcohol, illness, flashing lights); any aura beforehand; during the episode — was there LOC? What movements occurred? Were eyes open? Was there tongue biting or incontinence? After the episode — post-ictal confusion, headache, or drowsiness? Duration of each phase? For subtle or uncertain episodes, ask specifically about: tingling or numbness, unusual smell or taste, d\u00e9j\u00e0 vu or jamais vu, automatisms (lip smacking, fumbling), brief memory gaps.',
    },

    // ── AED PRESCRIBING PRINCIPLES ────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'AED Prescribing Principles',
    },
    {
      type: 'list',
      items: [
        'Start with monotherapy and titrate slowly to the lowest effective dose',
        'Prescribe by brand name for narrow therapeutic index AEDs — especially carbamazepine and phenytoin (bioavailability varies between manufacturers)',
        'Goal: seizure free with minimal side effects — achieved in approximately 70% of patients',
        'Drug-resistant epilepsy = failure of 2 or more appropriately chosen and dosed AEDs \u2192 refer to tertiary epilepsy centre; options include ketogenic diet, vagus nerve stimulation (VNS), or epilepsy surgery',
        'Stopping AEDs: specialist decision only; consider after >2 years seizure-free; withdrawal must be very gradual (months); patient must stop driving for 6 months from date of stopping',
      ],
    },

    // ── COMMON AEDs TABLE ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Common AEDs',
    },
    {
      type: 'table',
      headers: ['Drug', 'Main Uses', 'Key Cautions / Contraindications', 'Side Effects'],
      rows: [
        [
          'Sodium valproate',
          'All seizure types; generalised epilepsy first-line',
          'CONTRAINDICATED in women of childbearing potential (teratogen — NTD risk); Valproate PPP required for all women; avoid in males <55 unless 2 specialists agree; monitor LFTs',
          'Weight gain, tremor, hair loss, hepatotoxicity',
        ],
        [
          'Lamotrigine',
          'All seizure types (focal first-line); safe in adults, children and neonates',
          'Avoid in myoclonic epilepsy (can worsen); dose increase needed in pregnancy; slow titration essential to avoid rash',
          'Rash (risk of Stevens-Johnson syndrome), insomnia, headache',
        ],
        [
          'Levetiracetam (Keppra)',
          'All seizure types; preferred in elderly',
          'Avoid if pre-existing psychiatric or behavioural conditions (can worsen significantly)',
          'Psychiatric and behavioural side effects, irritability, aggression',
        ],
        [
          'Carbamazepine',
          'Focal seizures (second-line)',
          'NOT for tonic, atonic, absence, or myoclonic seizures (worsens); check HLA-B*1502 before starting in East/SE Asian patients (Stevens-Johnson risk); enzyme inducer',
          'Rash / Stevens-Johnson, hyponatraemia, leukopenia, dizziness, sedation, diplopia',
        ],
        [
          'Phenytoin',
          'Rarely used now; status epilepticus (IV)',
          'Enzyme inducer; narrow therapeutic index; IV use requires cardiac monitoring and wide bore access; zero-order kinetics',
          'Gum hypertrophy, ataxia, diplopia, rash, hirsutism',
        ],
        [
          'Ethosuximide',
          'Absence seizures (children primarily)',
          'Not effective for other seizure types',
          'GI upset, headache, dizziness',
        ],
      ],
    },

    // ── IMAGE ─────────────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/table-1-epilepsy-2.png.webp',
      alt: 'Antiseizure medicines comparison: sodium valproate, lamotrigine, levetiracetam, carbamazepine \u2014 indications, contraindications, metabolism and side effects',
      caption: 'Common ASMs \u2014 indications, contraindications and side effects',
    },

    // ── DRUG INTERACTIONS ─────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Drug Interactions',
    },
    {
      type: 'list',
      items: [
        'Enzyme inducers (carbamazepine, phenytoin, phenobarbital): reduce efficacy of the combined oral contraceptive pill, warfarin, DOACs, and other AEDs',
        'Enzyme inhibitors (valproate): increase levels of lamotrigine (can cause toxicity) and other drugs',
        'Always check drug interactions before prescribing any new medication in a patient on AEDs',
        'Prescribe the COC pill with caution in patients on enzyme inducers \u2014 it becomes less effective; recommend LARC (IUD/IUS/implant) instead',
      ],
    },

    // ── MONITORING IN PRIMARY CARE ────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Monitoring in Primary Care',
    },
    {
      type: 'table',
      headers: ['Area', 'What to Monitor', 'Frequency'],
      rows: [
        ['Seizure control', 'Seizure diary \u2014 frequency, type, duration, triggers', 'Every review'],
        ['AED side effects', 'Ask about rash, mood, cognition, GI symptoms, weight, vision changes', 'Every review'],
        ['Blood tests', 'LFTs, FBC, electrolytes (especially valproate, carbamazepine) \u2014 not routine for all AEDs unless symptomatic', 'Annually or as clinically indicated'],
        ['Drug levels', 'Phenytoin: check level if toxicity suspected or poor control; not routinely needed for most AEDs', 'As clinically indicated'],
        ['Bone health', 'Long-term AED use (especially enzyme inducers) \u2192 reduced bone density; check vitamin D; calculate FRAX score', 'Annually'],
        ['Mental health', 'Mood, anxiety, depression (levetiracetam especially), cognition, memory', 'Every review'],
        ['SUDEP risk', 'Discuss risk \u2014 highest in poorly controlled generalised epilepsy and nocturnal seizures; seizure-free = lower risk', 'Annually'],
        ['Valproate PPP', 'Annual acknowledgement form (completed by specialist); confirm effective contraception (LARC preferred); annual review', 'Annually'],
      ],
    },

    // ── SUDEP ─────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'warning',
      title: 'SUDEP \u2014 Sudden Unexpected Death in Epilepsy',
      items: [
        'Risk approximately 1:1000 per year in people with epilepsy',
        'Higher risk: uncontrolled epilepsy, nocturnal seizures, alcohol use, young adults with generalised epilepsy',
        'Lower risk when seizure-free',
        'Discuss openly with all patients and carers \u2014 this is a NICE requirement',
        'Refer to SUDEP Action charity for patient information and support (sudep.org)',
      ],
    },

    // ── VALPROATE & PREGNANCY ─────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Valproate & Women of Childbearing Potential',
      items: [
        'Valproate is CONTRAINDICATED in women of childbearing potential unless no alternative exists (requires sign-off from 2 specialists)',
        '10% risk of neural tube defects (NTD) including spina bifida',
        '30\u201340% risk of neurodevelopmental problems in the child (autism, learning difficulties)',
        'All women on valproate MUST be enrolled in the Valproate Pregnancy Prevention Programme (PPP)',
        'Annual risk acknowledgement form must be completed \u2014 responsibility lies with the prescribing specialist but GP should be aware',
        'Ensure effective contraception is in place \u2014 LARC (IUD, IUS, implant) preferred',
      ],
    },
    {
      type: 'image',
      src: '/images/valproate.webp',
      alt: 'Valproate pregnancy prevention programme patient guide \u2014 what women and girls need to know',
      caption: 'Valproate Pregnancy Prevention Programme (PPP)',
    },

    // ── EPILEPSY AND PREGNANCY ────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Epilepsy and Pregnancy',
    },
    {
      type: 'image',
      src: '/images/epilepsy-pregnancy.jpeg',
      alt: 'Management algorithm for women with epilepsy in childbearing years \u2014 pre-pregnancy planning, early pregnancy, and postpartum',
      caption: 'Epilepsy in pregnancy \u2014 management pathway',
    },
    {
      type: 'list',
      items: [
        'Pre-conception counselling: discuss seizure control, AED risks, and contraception well before pregnancy',
        'Avoid valproate \u2014 switch to safer AED (lamotrigine or levetiracetam) under specialist guidance before conception',
        'High-dose folic acid 5mg daily from pre-conception until at least 12 weeks',
        'Discuss risk of seizure deterioration during pregnancy (altered drug pharmacokinetics)',
        'Specialist input required throughout pregnancy and postpartum',
        'DVLA rules during pregnancy: DVLA rules still apply \u2014 patient cannot drive if seizures are uncontrolled regardless of pregnancy',
      ],
    },

    // ── DRIVING & DVLA RULES ──────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Driving & DVLA Rules',
    },
    {
      type: 'table',
      headers: ['Situation', 'DVLA Rule'],
      rows: [
        ['First seizure (no diagnosis yet)', 'Must not drive; must inform DVLA; can reapply to drive after 6 months seizure-free (Group 1)'],
        ['Established epilepsy (Group 1 \u2014 car/motorcycle)', 'Must be seizure-free for 12 months to hold a licence'],
        ['Change in AED (prescribed by specialist with seizure risk)', '3 months off driving from date of change'],
        ['Stopping AEDs', '6 months off driving from date of stopping'],
        ['HGV / bus (Group 2)', '10 years seizure-free and off all AEDs'],
        ['Patient responsibility', 'Patient must inform DVLA; GP should document the discussion and advise patient in writing if they continue to drive against medical advice'],
      ],
    },

    // ── OLDER ADULTS ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Older Adults',
    },
    {
      type: 'list',
      items: [
        'New-onset epilepsy after age 65 almost always has an underlying structural or medical cause',
        'Common causes: post-stroke epilepsy, intracerebral haemorrhage, neurodegenerative disease (Alzheimer\'s, vascular dementia)',
        'Transient epileptic amnesia (TEA): recurrent brief episodes of amnesia often with olfactory hallucinations \u2014 can mimic TIA',
        'Preferred AEDs in older adults: levetiracetam and lamotrigine \u2014 fewer drug interactions, better tolerated',
        'Avoid carbamazepine and phenytoin where possible: significant drug interactions, hyponatraemia risk, cardiac effects',
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: '\uD83D\uDD17 Epilepsy Shared Care Protocol \u2014 STH', url: 'https://www.sth.nhs.uk/clientfiles/File/Epilepsy_in_adults%20-%20shared%20care%20protocol%20April%202022.pdf' },
        { label: '\uD83D\uDD17 AED Interface Document \u2014 NEL ICB', url: 'https://primarycare.northeastlondon.icb.nhs.uk/wp-content/uploads/2023/08/Anti-Epileptic-Drug-Interface-Document-Final1.pdf' },
        { label: '\uD83D\uDD17 NICE QS211 \u2014 Epilepsies', url: 'https://www.nice.org.uk/guidance/qs211' },
        { label: '\uD83D\uDD17 Epilepsy Society \u2014 Monitoring Medication', url: 'https://epilepsysociety.org.uk/about-epilepsy/anti-seizure-medication/monitoring-your-medication' },
        { label: '\uD83D\uDD17 SUDEP Action', url: 'https://sudep.org' },
      ],
    },
  ],
}
