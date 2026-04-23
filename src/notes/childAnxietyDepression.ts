import type { Note } from '../data/notes'

export const childAnxietyDepression: Note = {
  id: 'child-anxiety-depression',
  title: 'Child & Adolescent Anxiety & Depression',
  subtitle: 'Assessment, CAMHS referral criteria, local pathways and prescribing in under-18s',
  tags: ['mental', 'paediatrics'],

  body: 'child adolescent anxiety depression CAMHS referral criteria fluoxetine propranolol under 18 young person CYP Stay Well Staffordshire Connects MPFT South Staffs watchful waiting CBT psychotherapy school FTB self-harm suicide risk safeguarding bullying abuse looked after child LAC risk factors parental mental health behavioural activation family therapy interpersonal therapy bridging',

  content: [

    { type: 'heading', level: 2, text: 'Overview & Risk Factors' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Presentation in children and adolescents',
      items: [
        'Anxiety and depression in children often present differently to adults — look for: school refusal, somatic complaints (headaches, stomach aches), irritability, behavioural change, social withdrawal, declining academic performance',
        'Anxiety is the most common mental health problem in children; depression becomes more prevalent in adolescence',
        'Always consider the child in context — home, school, peer relationships, and family dynamics all contribute',
        'Comorbidity is common: anxiety + depression, ADHD + depression, ASD + anxiety',
        'Presentations may be masked by parents/carers — always listen to the child directly and age-appropriately',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Risk factors — flag for higher vigilance',
      items: [
        'Parental mental health problems, parental conflict, or domestic violence',
        'Parental alcohol or substance misuse',
        'Looked after child (LAC) / in care, homeless, or refugee/asylum seeker background',
        'Recent stressful life events: bereavement, parental separation, house move, school change',
        'Bullying (including cyberbullying)',
        'Abuse or neglect — physical, emotional, sexual — enquire sensitively; consider safeguarding',
        'LGBTQ+ identity — higher risk; create a safe and non-judgemental space',
        'Substance use in the young person themselves',
        'Chronic physical illness; ASD; learning disability',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Assessment approach in practice',
      items: [
        'Corroborate history from multiple sources: child, parent, school — always obtain school\'s perspective (pastoral or SENCO) if possible',
        'See the young person alone for part of the consultation — they will disclose more without parents present',
        'Enquire sensitively about: abuse (physical, emotional, sexual), bullying (including online), sexuality/gender identity, substance use, and home situation',
        'Use PHQ-A (adolescent version of PHQ-9) or Strengths & Difficulties Questionnaire (SDQ) to quantify severity',
        'Always assess for self-harm and suicidal ideation — use direct, open questioning; this does not increase risk',
        'Safeguarding: if any concerns about abuse or exploitation, refer promptly. LAC/CIN children require a higher threshold of vigilance',
        'Screen for physical causes: thyroid (low mood/fatigue), anaemia, coeliac, chronic pain, sleep disorders',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria & Stepped Care' },

    {
      type: 'table',
      headers: ['Level', 'Presentation', 'Action'],
      rows: [
        ['Watchful waiting', 'Very mild, brief (< 1 month), no functional impairment, clear precipitant', 'Review at 4 weeks. Psychoeducation to child and family. Lifestyle advice (sleep, exercise, routine, screen time). Signpost to Stay Well CYP and self-help resources.'],
        ['Low-intensity support', 'Mild, some functional impact, or watchful waiting not resolving', 'Refer to Stay Well CYP (Staffordshire self-referral CAMHS triage). Offer guided self-help, school support, wellbeing service. GP to monitor.'],
        ['CAMHS referral', 'Moderate-severe anxiety or depression, significant functional impairment, self-harm, or failed low-intensity intervention', 'Refer to CAMHS (South Staffs MPFT CAMHS). Use local pathway — see links below. CAMHS will offer assessment and specific psychotherapy (CBT, family therapy, IPT, psychodynamic).'],
        ['Urgent/emergency referral', 'Active suicidal ideation with plan, serious self-harm, acute psychosis, severe functional deterioration', 'Same-day CAMHS urgent referral or Crisis Team. If immediate risk to life — 999 or Emergency Department.'],
      ],
      caption: 'Stepped care for child and adolescent anxiety/depression. Most mild-moderate presentations can be supported at Steps 1-2 in primary care with local services before CAMHS involvement.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'What CAMHS offers',
      items: [
        'Individual CBT — gold-standard for anxiety and moderate-severe depression in young people',
        'Family therapy — particularly useful when family dynamics contribute; parents are involved in treatment',
        'Interpersonal therapy (IPT) — good for depression related to grief, role transition, or interpersonal disputes',
        'Psychodynamic therapy — for longer-standing difficulties with relationships and identity',
        'Medication management — fluoxetine (initiated by CAMHS); ongoing shared care may be arranged with GP',
        'Crisis support — CAMHS crisis team for urgent presentations outside of working hours via MPFT',
        'Refractory cases: CAMHS may consider other SSRIs or adjunctive medication (antipsychotics) under specialist supervision',
      ],
    },

    { type: 'heading', level: 2, text: 'Local Services — South Staffordshire' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Staffordshire CYP Mental Health Pathway',
      items: [
        'Stay Well CYP (staffs.staywellcyp.org): the first point of contact for children and young people\'s mental health in Staffordshire — online self-referral; offers triage and low-level wellbeing support before CAMHS',
        'Staffordshire Connects: local directory of all CYP mental health and wellbeing services — use to find the most appropriate community resource',
        'MPFT South Staffs CAMHS (mpft.nhs.uk): the specialist CAMHS service — multiple pathways including eating disorders, neurodevelopmental (ADHD/ASD), early intervention psychosis, and Tier 3 general CAMHS',
        'South Staffs CYP Mental Health Support Pathway: interactive map of ALL services from Tier 1 to CAMHS — use this when discussing options with young people and families',
        'School-based support: many schools have mental health leads/pastoral teams — liaise with school; some areas have Mental Health Support Teams (MHSTs) embedded in schools',
        'Staffordshire young carers, LAC health teams, social care — involve if relevant to presentation',
      ],
    },

    { type: 'heading', level: 2, text: 'Medications in Under-18s' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Prescribing principles — primary care role is limited',
      items: [
        'Psychological therapy (CBT) is always first-line — medication should not replace it',
        'NICE recommends: do NOT initiate antidepressants in under-18s in primary care without specialist (CAMHS) assessment and recommendation',
        'Fluoxetine is the ONLY licensed antidepressant for depression in children (from age 8) and the preferred agent for anxiety in adolescents — initiated by CAMHS, not GP',
        'If CAMHS recommends and initiates fluoxetine, shared care with GP may be arranged for ongoing prescribing — always check ESCA/shared care agreement',
        'Other SSRIs (sertraline, citalopram) are used off-licence in adolescents by CAMHS — do not initiate these in primary care',
        'Increased risk of suicidal ideation on starting SSRIs in under-18s — review at 1 week, then 2 weeks, then monthly; warn parents to watch for agitation, worsening mood, or any new suicidal thoughts',
        'Fluoxetine starting dose in children: 10 mg OD (may be increased to 20 mg by CAMHS); tablets can be crushed',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Propranolol — possible GP bridging for somatic anxiety symptoms',
      items: [
        'Propranolol is occasionally used by GPs as a bridging measure for distressing physical symptoms of anxiety (palpitations, tremor, blushing) while awaiting CAMHS assessment',
        'Most GPs do not routinely initiate this — it is a clinical judgement; consider it in moderate anxiety with significant somatic symptoms causing distress at school or in daily life',
        'Dose: 10–20 mg BD (off-licence in under-18s); check no contraindications (asthma, bradycardia, heart block)',
        'Propranolol treats peripheral symptoms only — it does not treat the underlying anxiety disorder; always combine with psychological support',
        'Discuss clearly with the family: this is a short-term bridging measure; definitive treatment is psychological',
        'If using propranolol, document discussion with parents, your rationale, and the plan for CAMHS review',
      ],
    },

    { type: 'heading', level: 2, text: 'Safety & Safeguarding' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Risk, safeguarding and safety netting',
      items: [
        'Always assess for self-harm and suicidal ideation at every contact — use direct, open language',
        'Involve parents/carers in safety planning for under-16s; use Fraser guidelines for 16–17 year olds re: confidentiality',
        'Self-harm in young people: common, especially in young females; function is often emotion regulation not suicidal intent — still requires full risk assessment and follow-up',
        'If any safeguarding concerns (abuse, neglect, exploitation, LAC) — refer to Children\'s Social Care; do not delay referral to CAMHS on this basis',
        'Provide crisis information to both young person and parents: MPFT CAMHS crisis line, Childline (0800 1111, free 24/7), Samaritans (116 123)',
        'Safety net fully: give written crisis plan; include what to do if things get worse before CAMHS review',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'anxiety-gad', label: 'Anxiety Disorders (Adults)', subtitle: 'CBT framework, drug choices, stepped care' },
        { id: 'depression', label: 'Depression (Adults)', subtitle: 'PHQ-9, stepped care, safety planning' },
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'Fluoxetine dosing, switching, SSRIs' },
        { id: 'suicide-self-harm', label: 'Suicide & Self-Harm', subtitle: 'Risk assessment, safety plan, crisis' },
        { id: 'adhd-child', label: 'ADHD in Children', subtitle: 'CAMHS, diagnosis, medication' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Stay Well CYP — Staffordshire (self-refer)', url: 'https://staffs.staywellcyp.org' },
        { label: 'Staffordshire Connects — CYP Services Directory', url: 'https://www.staffordshireconnects.info/kb5/staffordshire/directory/advice.page?id=0rWBovMeR5E' },
        { label: 'MPFT South Staffs CAMHS — All Pathways', url: 'https://www.mpft.nhs.uk/services/camhs/south-staffordshire' },
        { label: 'South Staffs CYP Mental Health Pathway Map (PDF)', url: 'https://www.staffsscp.org.uk/wp-content/uploads/2024/10/CYP-MENTAL-HEALTH-SUPPORT-PATHWAY-SOUTH-STAFFS-FINAL-v1-09-11-2020-1.pdf' },
        { label: 'NICE NG134 — Depression in Children & Young People', url: 'https://www.nice.org.uk/guidance/ng134' },
        { label: 'NICE CKS — Depression in Children', url: 'https://cks.nice.org.uk/topics/depression-in-children/' },
        { label: 'Childline — 0800 1111 (24/7, free)', url: 'https://www.childline.org.uk' },
        { label: 'Young Minds', url: 'https://www.youngminds.org.uk' },
        { label: 'MPFT — Emergency Mental Health Help', url: 'https://www.mpft.nhs.uk/service-users-and-carers/emergency-help' },
      ],
    },

  ],
}
