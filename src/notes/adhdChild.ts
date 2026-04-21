import type { Note } from '../data/notes'

export const adhdChild: Note = {
  id: 'adhd-child',
  title: 'ADHD (Children & Young People)',
  subtitle: 'Diagnosis, watchful waiting, MPFT neurodevelopmental referral pathway, CAMHS, Community Paediatrics & medication monitoring',
  tags: ['symptoms', 'paediatrics', 'mental'],

  body: 'ADHD child children young people neurodevelopmental referral CAMHS Community Paediatrics CYP autism ASD inattention hyperactivity impulsivity watchful waiting watchful wait 10 weeks parental training Medikinet Concerta XL lisdexamfetamine Elvanse methylphenidate Ritalin Equasym atomoxetine Strattera guanfacine Intuniv height weight monitoring BP HR Staffordshire MPFT CaFSPA graduated response SENCO school',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Presentation & Diagnostic Criteria',
    },
    {
      type: 'image',
      src: '/images/adhd-symptoms-cards.jpeg',
      alt: 'ADHD core symptom domains — impulsivity, inattention, and hyperactivity with key features listed',
      caption: 'The three core ADHD symptom domains. All must be persistent (≥6 months), pervasive (≥2 settings), present before age 12, and causing significant functional impairment.',
    },
    {
      type: 'para',
      text: 'ADHD prevalence is ~2.5–5% in children. It is more commonly diagnosed in males (3:1). Most diagnoses are made between ages 3–7. Symptoms must be present in at least two settings (home, school, social) and cause significant functional impairment.',
    },
    {
      type: 'table',
      headers: ['Domain', 'Key symptoms (need ≥6; ≥5 if age >16)'],
      rows: [
        ['Inattention (AD)', 'Easily distracted; forgetful about daily activities; fails to follow through on tasks; avoids mentally intense tasks; difficulty organising; does not listen when spoken to directly; loses things needed for tasks; careless mistakes'],
        ['Hyperactivity (H)', 'Unable to be quiet/play quietly; talks excessively; does not wait turn; spontaneously leaves seat; always "on the go"; runs/climbs when inappropriate; fidgets/squirms; interruptive; answers before question is finished'],
      ],
      caption: 'Persistent (≥6 months), pervasive (≥2 settings), and impactful. Onset of symptoms before age 12. Rule out: hearing loss, visual impairment, sleep disorders, anxiety, learning disability, ASD, social/emotional difficulties, trauma.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Subtypes',
      items: [
        'ADHD — Combined type: both inattention AND hyperactivity/impulsivity criteria met (most common)',
        'ADHD — Predominantly inattentive: ≥6 inattention symptoms, <6 hyperactivity (often missed in girls)',
        'ADHD — Predominantly hyperactive/impulsive: ≥6 hyperactivity symptoms, <6 inattention (less common, often younger children)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'GP Role — Assessment & Watch and Wait',
    },
    {
      type: 'list',
      items: [
        'Gather information from MULTIPLE sources: parents/carers, school (SENCO), after-school clubs — must be pervasive across settings',
        'Rule out hearing/vision problems (audiology + optometrist if not already done)',
        'Rule out sleep problems (sleep hygiene intervention first)',
        'Rule out or identify comorbidities: anxiety, autism, learning difficulties, emotional/behavioural difficulties',
        'Consider social/environmental context: adverse childhood experiences (ACEs), domestic violence, trauma, frequent school changes',
        'Use Conners rating scale, Vanderbilt, or practice-approved questionnaire (available on AccuRx/EMIS)',
        'If mild-moderate impairment: offer 10-week watch and wait with ADHD-focused parent support',
        'If severe impairment: refer directly without watch and wait',
        'GP is generally NOT the most appropriate referrer — school usually has more detailed information. Advise parents to discuss with school/SENCO first',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: '10-Week Watch and Wait — What to Offer Parents',
      items: [
        'ADHD-focused parent training/education: structured reward systems, positive attention, clear instructions, consistent boundaries',
        'Planning strategies: visual timetables, checklists, structured daily routines, breaking tasks into smaller steps',
        'Sleep hygiene: consistent bedtime, screen-free 1hr before bed, quiet wind-down routine',
        'Physical activity: regular exercise reduces ADHD symptoms significantly',
        'School strategies: preferential seating (front of class, away from distractions), movement breaks, reduced task length, verbal prompts',
        'Document: review in 10 weeks to assess whether impairment persists. If moderate-severe at review: refer',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Referral Pathways — Children (South Staffordshire MPFT)',
    },
    {
      type: 'image',
      src: '/images/adhd-neurodev-referral-mpft.png',
      alt: 'MPFT neurodevelopmental referrals page — ADHD and autism referral pathways for children and young people',
      caption: 'MPFT integrated neurodevelopmental referral form — covers ADHD (Community Paediatrics age 6–11; CAMHS age 11–18) and autism (CYP Autism Service). School involvement is strongly recommended and usually required.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Important — Who Should Refer?',
      items: [
        'MPFT advises that the professional who knows the child BEST makes the referral — usually from the child\'s educational setting',
        'GPs are discouraged from being the primary referrer — "GP knowledge of a child/young person is usually more limited than other professionals"',
        'Best pathway: discuss concerns with the child\'s school → school/SENCO completes referral with parent/carer',
        'If GP is making the referral: detailed education information MUST still be provided (school reports, SENCO observations, graduated response evidence)',
        'Referrals without school information will be returned before clinical screening',
        'Referrals are accepted from professionals only — no self-referral',
      ],
    },
    {
      type: 'table',
      headers: ['Condition / Age', 'Service', 'Contact', 'Referral email'],
      rows: [
        ['ADHD — Age 6 to 11', 'Community Paediatrics', '01283 505160', 'CommunityPaedsreferrals@mpft.nhs.uk — mpft.nhs.uk/services/community-paediatrics'],
        ['ADHD — Age 11 to 18', 'CAMHS / CaFSPA', '0808 178 0611 (Option 2)', 'cafspa@mpft.nhs.uk — camhs.mpft.nhs.uk'],
        ['Autism (ASC) — all ages', 'CYP Autism Service', '0300 303 0691', 'autism.referrals@mpft.nhs.uk — mpft.nhs.uk/services/children-and-young-people-autism-service'],
        ['Autism — under 5 years', 'Community Paediatrics (NOT autism service)', '01283 505160', 'Use Community Paediatrics referral form — development assessment first'],
        ['Mental health concerns', 'CAMHS (separate referral form)', '0808 178 0611', 'Use CAMHS referral form (not neurodevelopmental form)'],
      ],
      caption: 'Use the integrated Neurodevelopmental Referral Form for all ADHD and ASC assessment requests — this replaces all previous separate forms and includes the school report section.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Pre-Referral Checklist (Required Before Submitting)',
    },
    {
      type: 'image',
      src: '/images/adhd-pre-referral-checklist.png',
      alt: 'ADHD pre-referral checklist — questions about engagement, risks, medication willingness, autism and NHS mental health treatment',
      caption: 'Pre-referral screening questions included in the MPFT Neurodevelopmental Referral Form. All sections must be complete before submission or the referral will be returned.',
    },
    {
      type: 'list',
      items: [
        'Parent/carer feedback gathered ✓',
        'Graduated response within education has been followed to support CYP needs ✓',
        'Referring from education OR have education feedback to complete the referral ✓',
        'Referrals received without the above will be returned for completion before clinical screening',
        'The graduated response toolkit for Staffordshire schools is available via Staffordshire County Council website',
      ],
    },
    {
      type: 'table',
      headers: ['Form section', 'What is required'],
      rows: [
        ['Part 1 — Demographics', 'Child details, NHS number, preferred pronouns, ethnicity. Parent/carer details (both carers), parental responsibility, consent'],
        ['Legal status', 'LAC, CP plan, CiN plan, adopted, SGO, MHA — if any apply: social worker details required'],
        ['Reason for referral', 'ADHD or autism (or both). CYP\'s own view of difficulties. Why referring NOW'],
        ['Part 2 — Presenting needs', 'Developmental history (pregnancy, milestones, regression); family/social history; speech/language; SEMH; play/behaviour; sensory/physical; medical conditions'],
        ['Education', 'Current school, SENCO contact, level of attainment vs peers, support plans (SEN, EHCP, APDR)'],
        ['School observations', 'Graded severity for: interrupting, speaking out of turn, forgetfulness, losing things, poor organisation, leaving seat, fidgeting, careless errors, easily distracted, sustained attention, response to rules'],
        ['Graduated response', 'What has been tried in school to support the child and what was the response'],
        ['Part 3 — Services involvement', 'Previous/current involvement: 0-19 service, speech therapy, CAMHS, paediatrics, educational psychology, early help'],
        ['Part 4 — Risk', 'Self-harm, suicidal ideation, aggression, exploitation, safeguarding. Safety plan if any risk identified'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Right to Choose (RTC) — Children',
    },
    {
      type: 'para',
      text: 'RTC for children is significantly more limited than for adults. Very few providers accept children via RTC.',
    },
    {
      type: 'list',
      items: [
        'Momenta Connect (Bolton) and Evolve Psychology (ages 0–19 in education) are the main RTC providers for children',
        'RTC child referrals still require full referral information — a completed questionnaire alone is NOT sufficient',
        'If an NHS child is requesting RTC: still need the neurodevelopmental form with school information',
        'All RTC requests need documented clinical reasons for referring after assessment with patient/parent',
        'Complete referral on Lexacom/task or fill in the referral form — do not just send a completed questionnaire',
        'If unsure whether a provider accepts children via RTC in Staffordshire: contact MentalHealthPortfolioinbox@staffsstoke.icb.nhs.uk',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Medications — Children & Young People',
    },
    {
      type: 'image',
      src: '/images/adhd-medications-table.jpeg',
      alt: 'ADHD medications guide for healthcare professionals — methylphenidate, lisdexamfetamine, guanfacine and atomoxetine with doses and titration',
      caption: 'ADHD medications reference: stimulant medications (MPH-based: Medikinet, Ritalin, Concerta XL; amphetamine-based: Elvanse) and non-stimulants (Guanfacine/Intuniv, Atomoxetine/Strattera). IR:MR ratio determines timing and duration of effect.',
    },
    {
      type: 'para',
      text: 'Medications are only prescribed after specialist assessment and diagnosis. GP role under shared care is to prescribe maintenance doses and monitor. Medications are only licensed for age ≥5 years.',
    },
    {
      type: 'table',
      headers: ['Drug', 'Brand', 'Formulation', 'Duration', 'Dosing / Titration', 'Max dose/day'],
      rows: [
        ['Methylphenidate IR', 'Medikinet, Ritalin, Generic', 'Tablet (can be crushed)', 'Short-acting — up to 4 hrs', 'Start 5mg 1–2× daily. Increase by 5–10mg at weekly intervals. Given 2–3× daily', '60mg/day or 2.1mg/kg (max 90mg)'],
        ['Methylphenidate MR — 50:50 IR:MR', 'Medikinet XL (5/10/20/30/40/50/60mg)', 'Capsule — sprinkle on food', 'Long-acting — covers school day (up to 8hrs)', 'Start 5–10mg OD morning with/after breakfast. Increase weekly by 10mg', '60mg/day or 2.1mg/kg (90mg)'],
        ['Methylphenidate MR — 30:70 IR:MR', 'Equasym XL (10/20/30mg)', 'Capsule — sprinkle on food', 'Long-acting — up to 8hrs', 'Start 10mg OD morning before breakfast. Increase weekly', '60mg/day or 2.1mg/kg (90mg)'],
        ['Methylphenidate MR — 22:78 IR:MR', 'Concerta XL, Xaggitin XL (18/27/36/54mg)', 'Tablet — swallow whole', 'Covers school AND home day (up to 12hrs)', 'Start 18mg OD morning ± food. Increase by 9–18mg at weekly intervals. 18mg=5mg TDS; 36mg=10mg TDS; 54mg=15mg TDS', '54mg/day licensed; up to 2.1mg/kg or 108mg'],
        ['Lisdexamfetamine', 'Elvanse (20/30/40/50/60/70mg)', 'Capsule — dissolve in water', 'Long-acting — up to 13hrs', 'Start 20–30mg OD morning. Increase by 10mg weekly. Once daily, with or without food', '70mg/day'],
        ['Guanfacine', 'Intuniv (1/2/3/4mg)', 'Tablet — swallow whole', 'Non-stimulant — up to 24hrs', '6–12yr (≥25kg): start 1mg OD, increase by 1mg/week. 13–17yr: same, max dose varies by weight. Once daily (am or pm) — avoid high fat meal / grapefruit', '6–12yr: 4mg. 13–17yr: 5mg (41.5–49.4kg)'],
        ['Atomoxetine', 'Strattera (10/18/25/40/60/80mg)', 'Capsule — swallow whole', 'Non-stimulant — up to 24hrs', '<70kg: start 0.5mg/kg/day × 7 days → 1.2mg/kg/day. >70kg: start 40mg × 7 days → 80mg/day. OD or divided BD', '<70kg: 1.8mg/kg/day or 120mg. >70kg: 120mg/day'],
      ],
      caption: 'MPH = methylphenidate; IR = immediate release; MR = modified release. IR:MR ratio shows proportion released immediately vs over time. All medications: monitor response at 4 weeks, reassess at 3 months, then 6-monthly. QbTest may assist diagnosis and monitoring response to treatment.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'GP Monitoring Under Shared Care',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Frequency', 'Action if abnormal'],
      rows: [
        ['Height (plot on centile chart)', 'Every 3–6 months', 'If crossing centile lines downward: discuss drug holiday or dose reduction with specialist. Growth suppression is a recognised stimulant effect — often recovers on weekends/school holidays'],
        ['Weight', 'Every 3–6 months', 'If <3rd centile or crossing centiles: refer to dietitian; consider timing doses to allow better appetite at mealtimes; drug holiday'],
        ['Blood pressure', 'Every 3–6 months (at each review)', 'If raised: check with specialist. Consider reducing dose or switching to non-stimulant'],
        ['Heart rate', 'Every 3–6 months', 'Tachycardia (>100 bpm resting) or palpitations: discuss with specialist. ECG if cardiac symptoms'],
        ['Sleep', 'Each review', 'Stimulants can delay sleep onset. Try earlier dosing or switch to shorter-acting agent. Melatonin may be needed (prescribe with caution)'],
        ['Appetite', 'Each review', 'Common. Give medication after breakfast. Encourage calorie-dense evening meals. Use weekends for catch-up eating'],
        ['Mood / tics', 'Each review', 'New or worsened tics: consider reducing dose or switching to non-stimulant. Emotional lability, irritability, rebound effect: adjust timing/preparation'],
        ['ECG', 'Only if clinically indicated', 'Baseline ECG ONLY if cardiac history, family history of arrhythmia/sudden cardiac death, abnormal cardiac exam, or symptomatic palpitations. NOT required routinely'],
        ['Annual review', 'Yearly', 'Specialist review recommended annually — reassess diagnosis, response, need for ongoing treatment. Consider drug holiday in summer to reassess'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Medication — When to STOP and Seek Urgent Advice',
      items: [
        'New onset or significant worsening of psychiatric symptoms (psychosis, mania, severe mood disturbance)',
        'Seizures (especially if no prior history) — stimulants lower seizure threshold',
        'Chest pain, syncope, dyspnoea, palpitations — refer for cardiac assessment',
        'Severe hypertension (BP >95th centile for age on repeated measurements)',
        'Liver dysfunction (atomoxetine) — jaundice, dark urine, abdominal pain: stop immediately',
        'Suicidal ideation or self-harm (rare — atomoxetine carries black box warning in young people)',
        'Signs of diversion or misuse (especially stimulants in adolescents)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'MPFT Neurodevelopmental Referral Form', url: 'https://www.mpft.nhs.uk/services/camhs/south-staffordshire/how-make-referral#neurodevelopmental-referrals' },
        { label: 'NICE NG87 — ADHD Diagnosis & Management', url: 'https://www.nice.org.uk/guidance/ng87' },
        { label: 'CAMHS CaFSPA (Age 11–18)', url: 'https://camhs.mpft.nhs.uk/' },
        { label: 'Community Paediatrics (Age 6–11)', url: 'https://www.mpft.nhs.uk/services/community-paediatrics' },
        { label: 'CYP Autism Service', url: 'https://www.mpft.nhs.uk/services/children-and-young-people-autism-service' },
        { label: 'Staffordshire Graduated Response Toolkit', url: 'https://www.staffordshire.gov.uk/Education/Educational-psychology/Graduated-Response-Toolkit.aspx' },
        { label: 'SSOT Formulary — CNS', url: 'https://www.staffordshiremedicinesoptimisation.com/' },
      ],
    },
  ],
}
