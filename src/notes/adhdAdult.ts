import type { Note } from '../data/notes'

export const adhdAdult: Note = {
  id: 'adhd-adult',
  title: 'ADHD (Adult)',
  subtitle: 'Diagnosis criteria, ASRS screening, RTC vs NHS referral pathways, Blueteq, shared care & medication monitoring',
  tags: ['mental', 'symptoms'],

  body: 'ADHD adult attention deficit hyperactivity disorder inattention impulsivity hyperactivity ASRS screening NICE NG87 right to choose RTC NHS referral Blueteq shared care agreement methylphenidate Ritalin Concerta XL Medikinet lisdexamfetamine Elvanse atomoxetine Strattera guanfacine Intuniv monitoring BP heart rate weight titration EMIS SystmOne Darwin ICB Staffordshire Midlands Partnership MPFT',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Diagnosis & NICE Criteria (NG87)',
    },
    {
      type: 'image',
      src: '/images/adhd-symptoms-cards.jpeg',
      alt: 'ADHD core symptom domains — impulsivity, inattention, and hyperactivity with key features listed',
      caption: 'The three core ADHD symptom domains. In adults ≥5 symptoms per domain (not 6) are required. Symptoms must be persistent, pervasive (≥2 settings), onset before age 12, and cause moderate-severe functional impairment.',
    },
    {
      type: 'para',
      text: 'ADHD affects ~5% of adults. It is a valid neurodevelopmental condition with genetic and environmental contributions. Most patients will self-present requesting assessment — consider ADHD when there is significant impact on work, relationships, self-esteem, or mental health.',
    },
    {
      type: 'table',
      headers: ['Domain', 'Core symptoms (need ≥5 in adults)'],
      rows: [
        ['Inattention', 'Difficulty organising tasks; careless mistakes; fails to finish tasks; easily distracted; forgetful in daily activities; does not listen when spoken to; avoids mentally demanding tasks; loses things regularly'],
        ['Hyperactivity / Impulsivity', 'Fidgety/squirms; leaves seat inappropriately; restless (on the go); talks excessively; blurts out answers; difficulty waiting turn; interrupts others; difficulty engaging in quiet activities'],
      ],
      caption: 'DSM-5 / NICE NG87: Requires ≥5 symptoms (not 6 as in children) in adults ≥17. Must be persistent, pervasive (≥2 settings: work, home, social), present before age 12, and cause moderate or severe impairment.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'NICE NG87 — Refer Adults for Assessment if ALL of the Following:',
      items: [
        'Evidence of hyperactivity/impulsivity AND/OR inattention',
        'Symptoms began during childhood (before age 12)',
        'Symptoms have persisted throughout life',
        'NOT explained by another psychiatric diagnosis (e.g. anxiety, bipolar, ASD — note these can be comorbid)',
        'Causing MODERATE or SEVERE psychological, social, educational or occupational impairment',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'GP Pre-Referral Assessment',
    },
    {
      type: 'list',
      items: [
        'Complete ASRS (Adult Self-Report Scale — 18 items or 6-item screening version). Score ≥4 on 6-item ASRS v1.1 is highly sensitive — support referral if patient wishes formal diagnosis',
        'Rule out or identify comorbidities: anxiety disorders, depression, bipolar, ASD, PTSD, substance use, sleep disorders. These can co-exist with ADHD (not exclusionary, but relevant for assessment)',
        'Gather collateral history: partner, parent, employer report. Ask "were there similar difficulties at school, as a child?"',
        'Assess functional impact — work performance, relationships, finances, self-esteem, legal issues, driving',
        'If mild impairment: discuss self-care strategies first (CANDDID ADHD videos, structured routines, CBT, Young Minds, ADDISS)',
        'If moderate-severe impairment and patient wants formal diagnosis: refer',
        'Document: onset in childhood, current impact in ≥2 settings, what has already been tried',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Adult ADHD Referral Pathways — Overview',
    },
    {
      type: 'table',
      headers: ['Pathway', 'Route', 'When to use'],
      rows: [
        ['NHS Local Service (MPFT)', 'Refer via Lexacom/task or complete the MPFT ADHD referral form and risk section', 'Patient under local NHS mental health services; face-to-face assessment needed; ASD suspected; significant risk; patient does not want RTC; childhood diagnosis requiring review'],
        ['Right to Choose (RTC)', 'Via ICB Referral Management Service — submit through Blueteq. Patient selects preferred provider from approved list', 'Patient requests assessment with a private RTC provider. Must meet NICE threshold. Patient NOT already under NHS MH services. No significant risks. No suspected ASD requiring face-to-face assessment'],
        ['Private (non-RTC)', 'Patient self-funds private assessment (not via NHS)', 'GP may prescribe if: diagnosis made using NICE-validated guidance, drug titrated and stabilised by specialist, on local formulary. No ICB LES payment applicable. Consider risks without formal shared care'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'RTC is NOT Appropriate When:',
      items: [
        'Identified risks: suicidal ideation, untreated alcohol/drug addiction, active safeguarding concerns',
        'Face-to-face appointment required or requested by patient',
        'ASD is also suspected (needs comprehensive in-person assessment)',
        'Patient would prefer non-pharmacological treatment options only',
        'Patient is already under a local NHS mental health provider',
        'Patient requires reasonable adjustments not available at chosen RTC provider',
        'Childhood diagnosis of ADHD which requires review/reassessment — refer to NHS commissioned service, not RTC management',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'RTC Pathway — Staffordshire ICB Process (via Blueteq)',
    },
    {
      type: 'image',
      src: '/images/adhd-rtc-pathway-flowchart.png',
      alt: 'ADHD RTC referral pathway flowchart showing patient, associate and GP roles in the Blueteq referral management process',
      caption: 'Staffordshire & Stoke-on-Trent ICB RTC referral process. Hosted by Midlands and Lancashire CSU via Blueteq. All adult ADHD RTC requests go through this management service.',
    },
    {
      type: 'table',
      headers: ['Step', 'Who', 'Action'],
      rows: [
        ['Part A — Patient', 'Patient', 'Care Navigation team sends form via email (or patient finds it themselves). Patient completes Part A within correct patient record (EMIS: search ADHD, select PRF020 — auto-fills patient details). Save to patient record; email to patient if possible (it is a long form)'],
        ['Part B — Associate', 'Friend/relative', 'Asked to comment on: patient behaviour as a child; observed impulsive behaviours in childhood; challenges at work or HE; relationship difficulties; observed impulsive behaviours now. Patient returns completed form — scanned and workflowed to doctor'],
        ['Part C — GP', 'GP (EMIS/SystmOne)', 'EMIS: add new document → search ADHD → select PRF021. SystmOne: auto-generates responses for current/past issues, medications, cardiac/psychiatric medication history. GP must answer: suicidal ideation/attempts; risk-taking/self-harm/self-neglect; CAMHS involvement; safeguarding; further comments'],
        ['Submission', 'Secretary / GP', 'Doctor saves completed PRF021 to patient record. Secretary uploads PRF020 + PRF021 to Blueteq portal. ICB Referral Management Service (ML) reviews and determines eligibility for NHS-funded assessment'],
        ['Decision', 'ICB/RMS', 'RMS assesses against threshold: moderate-severe impairment, not explained by other conditions. If approved: referred to chosen RTC provider (or suitable alternative). If declined: patient directed to complaints via PALS'],
      ],
      caption: 'All adult ADHD RTC referrals in Staffordshire now go through ICB referral management service — GPs do NOT directly refer to RTC providers. Contact for provider queries: MentalHealthPortfolioinbox@staffsstoke.icb.nhs.uk. Patient complaints/declines: patientservices@staffsstoke.icb.nhs.uk (PALS). Blueteq IT issues: trust@blueteq.co.uk',
    },
    {
      type: 'image',
      src: '/images/adhd-darwin-pathway-1.png',
      alt: 'Darwin practice ADHD referral new process — EMIS steps for PRF020 and PRF021 forms',
      caption: 'Darwin practice ADHD referral process: patient completes form A/B, GP completes form C (PRF021 in EMIS), secretaries upload to portal.',
    },
    {
      type: 'image',
      src: '/images/adhd-darwin-pathway-2.png',
      alt: 'Darwin ADHD note: all adult RTC referrals now through ICB referral management service',
      caption: 'All adult ADHD RTC referrals now via ICB referral management service. For MPFT adult referrals: complete form and risk section.',
    },
    {
      type: 'image',
      src: '/images/adhd-darwin-pathway-3.png',
      alt: 'Darwin ADHD clarification note: different processes for ADHD/ASD adult/child MPFT/RTC',
      caption: 'Key distinctions: adults → new forms via RTC management. NHS child → neurodevelopmental form with school. RTC child → referral information + Lexacom/task still needed. All RTC requests need documented clinical reasons.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'RTC Providers — England (Current Wait Times)',
    },
    {
      type: 'table',
      headers: ['Provider', 'Assessment Wait', 'Titration Wait', 'Shared Care', 'Notes'],
      rows: [
        ['Harrow Health', '~0 weeks', '~0 weeks', 'Optional', 'Medication often initiated at assessment'],
        ['Berkeley Psychiatrists', '~0 weeks', '~0 weeks', 'Optional', 'Exception: Kent/Medway patients (longer wait)'],
        ['CARE ADHD (Leicestershire)', '~0 weeks', '~10 weeks avg', 'No', 'Will continue prescribing if GP declines shared care'],
        ['Xyla', '~0 weeks', '~4 weeks', 'Flexible', 'Expanding ICB coverage'],
        ['Mentalwell', 'Variable', '3–5 days', 'Included', 'Psychiatrist-led; outcome letter within 5 working days'],
        ['Momenta Connect (Bolton)', 'Variable', 'Variable', 'Varies', 'Also offers ADHD child RTC (ages 0–19 in education)'],
        ['Evolve Psychology', '12–16 months', 'N/A', 'Varies', 'Adults: autism-only RTC. Private ADHD option available'],
      ],
      caption: 'Check adhduk.co.uk/right-to-choose/right-to-choose-wait-times for current wait times — these change frequently. Not all providers are available in all ICB areas. ICB may restrict choice — check MentalHealthPortfolioinbox@staffsstoke.icb.nhs.uk if unsure whether a provider is approved for Staffordshire patients.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Shared Care Agreements (ESCA)',
    },
    {
      type: 'list',
      items: [
        'Shared care is VOLUNTARY — GPs are not obligated to enter into a shared care agreement',
        'If GP agrees: GP prescribes maintenance dose, monitors BP/HR/weight, communicates with specialist',
        'If GP declines shared care: the RTC provider\'s NHS standard contract requires them to retain prescribing responsibility, provide ongoing monitoring and support',
        'ICB Local Enhanced Service (LES) payment applies ONLY to shared care with a recognised RTC provider (not private non-RTC providers)',
        'Diagnosis from a private (non-RTC) provider: GP may prescribe IF on local formulary AND medication has been fully titrated and stabilised by the specialist — consider risk of prescribing without formal shared care',
        'ESCA must cover the CURRENT episode of care — old ESCAs (e.g. from childhood) are not automatically valid',
        'If patient had ADHD treatment as a child but has since stopped: refer for full re-assessment before prescribing — do NOT use RTC management service for this scenario',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Medication Monitoring — GP Role Under Shared Care',
    },
    {
      type: 'image',
      src: '/images/adhd-medications-table.jpeg',
      alt: 'ADHD medications guide for healthcare professionals — methylphenidate, lisdexamfetamine, guanfacine and atomoxetine with doses and titration',
      caption: 'Full ADHD medication reference including IR:MR ratios, titration schedules, equivalent doses and maximum daily doses. MPH = methylphenidate; IR = immediate release; MR = modified release.',
    },
    {
      type: 'table',
      headers: ['Drug', 'Brand', 'Class', 'Starting dose (adults)', 'Max dose', 'Key monitoring'],
      rows: [
        ['Methylphenidate IR', 'Ritalin, Medikinet, Generic MPH', 'Stimulant — MPH', 'Start 5mg BD–TDS. Increase by 5–10mg/week', '60mg/day (or 2.1mg/kg, max 90mg)', 'BP, HR, weight at each visit. 6-monthly after stable. Appetite, sleep, mood, tics'],
        ['Methylphenidate MR', 'Concerta XL, Medikinet XL, Equasym XL, Ritalin LA', 'Stimulant — MPH long-acting', 'Start 18mg OD (Concerta) or 10–20mg OD (others). Increase weekly', '54mg/day Concerta; 60mg/day others', 'As above. Swallow whole — do not crush Concerta'],
        ['Lisdexamfetamine', 'Elvanse', 'Stimulant — amphetamine', 'Start 20–30mg OD morning. Increase by 10mg weekly', '70mg/day', 'As per stimulants. Also monitor mood, irritability, any history of substance misuse'],
        ['Atomoxetine', 'Strattera', 'Non-stimulant (SNRI)', '<70kg: 0.5mg/kg/day × 7 days → 1.2mg/kg/day. >70kg: 40mg × 7 days → 80–120mg/day', '<70kg: 1.8mg/kg or 120mg. >70kg: 120mg/day', '4–6 weeks before assessing response. Monitor BP, HR, liver function if symptoms of hepatic dysfunction. Suicide risk warning (young adults). Takes several weeks to work'],
        ['Guanfacine', 'Intuniv', 'Non-stimulant (alpha-2 agonist)', '1mg OD. Increase by 1mg/week', 'Up to 7mg/day (adults)', 'Significant BP/HR lowering — monitor closely. Avoid high fat meals, grapefruit. QTc monitoring if cardiac history. Risk of rebound hypertension if stopped abruptly'],
      ],
      caption: 'Monitoring frequency: before initiation — baseline BP/HR/weight/height. Then at 1, 3, 6 months after starting, then 6-monthly. Annual review with specialist. ECG only if clinically indicated (cardiac history, abnormal pulse). Drug holidays (weekend/school holidays) can be tried with stimulants to assess response and allow catch-up growth in young adults.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Stimulant Prescribing — Controlled Drug Rules',
      items: [
        'Methylphenidate and lisdexamfetamine are Schedule 2 Controlled Drugs — must be hand-signed prescriptions (or electronic Controlled Drug prescribing where active)',
        'Maximum 30-day supply per prescription',
        'Cannot issue FP10 repeat dispensing or batch prescribing for Schedule 2 CDs',
        'Emergency supplies: pharmacist cannot supply more than 5 days without a prescription for a CD — plan ahead for holidays, lost prescriptions',
        'Instruct patients: store securely at home. Report loss or theft to GP and police',
        'If concerns about diversion or misuse: discuss with prescribing specialist before continuing shared care',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Pre-Referral Checklist (EMIS form PRF020)',
      items: [
        'Willing to attend appointments and actively engage in assessment?',
        'Suicidal thoughts or self-harm plans?',
        'Using illegal/non-prescription drugs for symptoms?',
        'Willing to take lifelong medication if given diagnosis?',
        'Do they think they may also have autism (undiagnosed)?',
        'Currently receiving NHS mental health treatment?',
        'Interpreter/reasonable adjustment needed?',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'ADHD UK — Right to Choose Pathway', url: 'https://adhduk.co.uk/right-to-choose/' },
        { label: 'ADHD UK — RTC Current Wait Times', url: 'https://adhduk.co.uk/right-to-choose/right-to-choose-wait-times/' },
        { label: 'NICE NG87 — ADHD Diagnosis & Management', url: 'https://www.nice.org.uk/guidance/ng87' },
        { label: 'SSOT Formulary — CNS/Mental Health', url: 'https://www.staffordshiremedicinesoptimisation.com/' },
        { label: 'ICB RTC Provider Queries', url: 'mailto:MentalHealthPortfolioinbox@staffsstoke.icb.nhs.uk' },
        { label: 'PALS — Patient Complaints re RTC', url: 'mailto:patientservices@staffsstoke.icb.nhs.uk' },
      ],
    },
  ],
}
