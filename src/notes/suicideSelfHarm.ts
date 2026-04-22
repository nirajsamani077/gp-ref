import type { Note } from '../data/notes'

export const suicideSelfHarm: Note = {
  id: 'suicide-self-harm',
  title: 'Suicide & Self-Harm',
  subtitle: 'Risk assessment, safety planning, crisis management and immediate referral pathways',
  tags: ['mental'],

  body: 'suicide suicidal ideation self-harm deliberate self-harm DSH cutting overdose risk assessment safety plan crisis plan MPFT samaritans 999 protective factors risk factors intent lethality plan method previous attempts mental health alcohol depression bipolar PTSD OCD personality disorder safeguarding NOK next of kin crisis team referral',

  content: [

    { type: 'heading', level: 2, text: 'How to Ask' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Opening the conversation',
      items: [
        '"Are there times where you\'ve thought about or have hurt or harmed yourself — things like cutting or overdosing on tablets — or even ending your own life?"',
        'Link to something the patient has said: "Sometimes when people are feeling very down, they have thoughts like that — has that been the case for you?"',
        'Explore any disclosure fully, empathetically, and without judgement',
        'Asking about suicide does NOT increase the risk of it — it often provides relief and opens the door to help',
        'Never use negative questioning ("You haven\'t had any thoughts of harming yourself, have you?")',
      ],
    },

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'image',
      src: '/images/Risk-Factors-for-Suicide-During-a-Major-Depressive-Epi-sode-Level-3-Evidence.png',
      alt: 'Table of non-modifiable and modifiable risk factors for suicide — including older men, past attempts, family history, active suicidal ideation, hopelessness, anxiety, substance use, PTSD, personality disorder and cancer',
      caption: 'Suicide risk factors — non-modifiable (fixed) and modifiable (targetable in treatment). Comorbid conditions and active symptoms are the highest-yield targets for intervention.',
      maxWidth: '560px',
    },

    {
      type: 'table',
      headers: ['Risk factors', 'Protective factors'],
      rows: [
        ['Previous suicide attempt (strongest single predictor)', 'Strong reasons for living (children, family, responsibility)'],
        ['Mental illness (depression, bipolar, schizophrenia, PTSD, borderline PD)', 'Religious or cultural beliefs against suicide'],
        ['Deliberate self-harm history', 'Good social support and connectedness'],
        ['Male sex, middle age (40–60), elderly', 'Engaged in treatment; therapeutic alliance with GP/team'],
        ['Social isolation, living alone', 'Future plans and hope'],
        ['Alcohol or substance misuse', 'Problem-solving ability; resilience'],
        ['Recent major adverse life event (bereavement, relationship breakdown, job loss, legal/financial problems)', 'Children at home (particularly for women)'],
        ['Family history of suicide', ''],
        ['Access to lethal means (medications, firearms, height)', ''],
        ['Active suicidal ideation or current plan', ''],
        ['Hopelessness (often stronger predictor than depression severity)', ''],
        ['Psychotic symptoms — command hallucinations', ''],
        ['Recent psychiatric inpatient discharge (risk highest in first 3 months)', ''],
      ],
      caption: 'Suicide risk and protective factors. No single factor is predictive — integrate all into a clinical judgement.',
    },

    { type: 'heading', level: 2, text: 'Risk Assessment' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Structured risk assessment',
      items: [
        'Explore the spectrum: vague fleeting thoughts of escape → passive wish to be dead → active ideation → formulated plan → intent to act → previous attempt',
        'If active ideation present — explore: frequency, intensity, duration, triggers, plan (method, means, time), rehearsal or preparatory acts, last thing stopping them',
        'Assess intent and lethality of any plan: tablets stored, rope purchased, specific date chosen = HIGH risk',
        'Ask about past attempts: method, lethality, circumstances of discovery, intent at the time',
        'Assess hopelessness — more predictive than depression severity; "Do you see any way things could get better?"',
        'Assess alcohol and substance use — disinhibits impulsive acts; a patient intoxicated with suicidal intent is at acute high risk',
        'Document your assessment clearly — include quotes, risk level judgement, and your management plan',
      ],
    },

    { type: 'heading', level: 2, text: 'Deliberate Self-Harm (DSH)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'DSH — key principles',
      items: [
        'DSH is common, especially in young women — associated with significantly higher risk of completed suicide; higher risk for cutting than overdose',
        'In many cases the function is to regulate overwhelming emotions rather than to end life — always explore motivation; do not assume intent',
        'Ask about social media influence, online self-harm communities, and cyberbullying — particularly in young people',
        'Risk assess every situation individually — avoid assumptions; a patient who self-harms "to cope" still needs full risk assessment',
        'Refer all patients with DSH to CMHT if there is risk of repetition — early intervention can prevent completed suicide',
        'Refer to crisis team if: high level of distress, violent or high-lethality method, active suicidal plans',
        'Offer close follow-up within days of any DSH disclosure; safety net fully and involve next of kin/family support if the patient consents',
        'Safeguard: if a young person or vulnerable adult is self-harming, consider safeguarding referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Immediate Management by Risk Level' },

    {
      type: 'table',
      headers: ['Risk level', 'Features', 'Action'],
      rows: [
        ['Imminent / high', 'Active suicidal ideation with specific plan and intent; violent/high-lethality method; intoxicated with plan; unable to contract for safety', 'Do not leave alone. Call 999 or arrange emergency psychiatric assessment. Detain under MHA s136 if necessary. Contact family/NOK if safe to do so.'],
        ['High', 'Active ideation with plan but less imminent; recent serious attempt; psychotic with command hallucinations; extreme hopelessness', 'Same-day referral to crisis team (MPFT). Do not leave without a plan. Remove access to means if possible (medication quantities). Involve family.'],
        ['Moderate', 'Passive ideation without plan; previous attempts; significant risk factors; some impulsivity', 'Urgent CMHT referral (within days). Close GP follow-up. Safety plan. Involve NOK if consented. Restrict medication quantities prescribed.'],
        ['Lower', 'Fleeting thoughts of escape, no plan, good protective factors, engaged', 'Regular GP review. Safety plan. Crisis information. Treat underlying condition. Low threshold to step up.'],
      ],
      caption: 'Risk-stratified management. These are guides — clinical judgement must prevail. When in doubt, refer.',
    },

    { type: 'heading', level: 2, text: 'Safety Plan' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Co-create a written safety plan with the patient',
      items: [
        'Warning signs: what thoughts, feelings, situations or behaviours signal that a crisis is building',
        'Things that help me cope: breathing exercises, having a bath, walking, listening to music — personalise',
        'Reasons for living: write down names of loved ones, responsibilities, future plans — tangible and specific',
        'People I can contact: name, relationship, phone number of at least 2–3 trusted people',
        'Safe environment: actions to make the environment safer (e.g. give surplus medications to family; remove access to means)',
        'Professional contacts: GP name and number; MPFT crisis line number',
        'Emergency action: "If I feel I am about to act on my thoughts, I will call [name], then the crisis team, then 999 if needed"',
        'Give the patient a physical copy and keep a copy in the notes',
      ],
    },

    { type: 'heading', level: 2, text: 'Crisis Information' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Provide crisis information at every contact',
      items: [
        'MPFT 24/7 Mental Health Crisis Line — available for Staffordshire and Stoke patients at any time of day or night',
        'Samaritans — 116 123 (free, 24/7, anonymous) — for anyone in distress, not only those with suicidal thoughts',
        'MIND — mind.org.uk — information, support and crisis resources',
        'Get Self Help — getselfhelp.co.uk — CBT-based self-help including safety planning tools',
        'If imminent risk to life — call 999 or attend Emergency Department immediately',
        'Consider impact of serious suicide presentations on yourself — debrief with a colleague; use clinical supervision',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'MPFT — Emergency Mental Health Help (24/7)', url: 'https://www.mpft.nhs.uk/service-users-and-carers/emergency-help' },
        { label: 'Samaritans — 116 123', url: 'https://www.samaritans.org' },
        { label: 'MIND — Suicidal Feelings', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/suicidal-feelings/' },
        { label: 'Get Self Help — Safety Planning', url: 'https://www.getselfhelp.co.uk/safetyplan.htm' },
        { label: 'Staffordshire & Stoke Talking Therapies', url: 'https://staffsandstoketalkingtherapies.nhs.uk' },
        { label: 'NICE CKS — Self-Harm', url: 'https://cks.nice.org.uk/topics/self-harm/' },
        { label: 'NICE NG225 — Self-Harm', url: 'https://www.nice.org.uk/guidance/ng225' },
        { label: 'Zero Suicide Alliance Training', url: 'https://www.zerosuicidealliance.com' },
      ],
    },

  ],
}
