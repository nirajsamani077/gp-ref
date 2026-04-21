import type { Note } from '../data/notes'

export const acutelyDisturbedPerson: Note = {
  id: 'acutely-disturbed-person',
  title: 'Acutely Disturbed / Altered Person',
  subtitle: 'Delirium vs psychosis, Mental Capacity Act, MHA sections, and GP escalation',
  tags: ['symptoms', 'mental', 'emergency'],

  body: 'acutely disturbed altered person mental health delirium psychosis acute stress drug intoxication encephalopathy 4AT AMT4 confusion agitation aggression Mental Health Act MHA sections 2 3 4 5 136 135 17A CTO community treatment order Mental Capacity Act MCA capacity consent AMHP AMCP approved mental health practitioner section 12 approved RMP best interests 999 police crisis team CRHT home treatment place of safety psychiatric emergency DOLS deprivation liberty safeguards',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Immediate priorities in GP setting',
      items: [
        'Keep calm — listen, engage, reflect, reassure. Use slow clear language. Avoid confrontation',
        'Assess immediate risk: suicidality, threats to others, weapons, psychosis, impaired consciousness',
        'Raise the alarm if needed — silent panic button, emergency services (999), bring in a familiar face',
        'Do not be alone with a patient who poses physical risk — ensure your own safety first',
        'If immediate risk to self or others and patient refuses → police to detain under Section 136',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Differential Diagnosis — Causes of Acute Disturbance',
    },
    {
      type: 'table',
      headers: ['Cause', 'Clues', 'Action'],
      rows: [
        ['Delirium (acute confusional state)', 'Fluctuating cognition, inattention, disorientation, worse at night, visual hallucinations. Often underpinning medical cause. Check 4AT', 'Identify and treat underlying cause (infection, metabolic, drugs, pain). Admit if high risk or no safe home support'],
        ['Drug/alcohol intoxication or withdrawal', 'History of substance use, smell of alcohol, dilated/pinpoint pupils, track marks, tremor, sweating (withdrawal)', 'Supportive. Admit if withdrawal seizure risk (CIWA score), OD → 999/A&E'],
        ['Acute psychosis (first episode or relapse)', 'Auditory hallucinations, delusions, disorganised thought, preserved consciousness, known psychiatric history', 'Refer to crisis team (CRHT). If refuses and high risk → MHA assessment / s136'],
        ['Acute stress reaction / dissociation', 'Recent major stressor, emotional dysregulation, possible dissociative features, no psychosis features', 'Supportive. Crisis team if suicidal. Safeguarding if PTSD/trauma context'],
        ['Acute medical — encephalopathy', 'Liver failure (jaundice, asterixis), uraemia (CKD), sepsis, hypoglycaemia, hyponatraemia, Wernicke\'s (ataxia + ophthalmoplegia)', '999 immediately. Glucose check if any doubt. Thiamine if Wernicke\'s suspected'],
        ['Dementia with behavioural disturbance', 'Known diagnosis, carer present, episodic confusion, sundowning pattern, no fever', 'Address precipitant. Carer support. Avoid unnecessary sedation. Refer memory/CRHT'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: '4AT — Rapid Delirium Assessment Tool',
    },
    {
      type: 'para',
      text: 'Validated bedside screening tool for delirium. Score ≥4 = possible delirium. Score 1–3 = possible cognitive impairment. Score 0 = delirium unlikely (but not excluded if sedation present). No specialist training required.',
    },
    {
      type: 'table',
      headers: ['Domain', 'Assessment', 'Scoring'],
      rows: [
        ['Alertness', 'Observe during assessment — is patient clearly abnormal (lethargic, agitated, or fluctuating)?', 'Normal = 0; Mild sleepiness <10s after waking = 0; Clearly abnormal = 4'],
        ['AMT4', 'Ask: Age? Date of birth? Place (name of hospital or building)? Current year?', '0 errors = 0; 1 error = 1; 2+ errors or unable = 2'],
        ['Attention', '"Please tell me the months of the year backwards starting from December." Stop after 5 errors', '7 or more months correctly = 0; Starts but <7 months, or refuses = 1; Cannot start = 2'],
        ['Acute change or fluctuating course', 'Evidence of fluctuation in alertness, cognition, or behaviour over last 2 weeks and still present now', 'No = 0; Yes = 4'],
      ],
      caption: '4AT total ≥4: delirium likely → investigate cause, consider safe environment, avoid antipsychotics unless essential, do not sedate with benzodiazepines (worsens delirium).',
    },
    {
      type: 'image',
      src: '/images/4-at.png',
      alt: '4AT delirium assessment tool scoring card',
      caption: '4AT delirium screening tool: alertness, AMT4, attention (months backwards), acute change. Score ≥4 = possible delirium. Score 1–3 = possible cognitive impairment.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Escalation Pathways',
    },
    {
      type: 'table',
      headers: ['Situation', 'Action'],
      rows: [
        ['Patient accepts help', '999 for safe transport to A&E, OR refer to Crisis Resolution Home Treatment Team (CRHT) for urgent community assessment'],
        ['Patient refuses but no immediate risk', 'Contact CRHT for advice. Consider MHA assessment if mental disorder likely. Document capacity assessment'],
        ['Immediate risk to self or others, in public', 'Police — Section 136: remove to place of safety (up to 72h) for MHA assessment'],
        ['Immediate risk, on private property', 'Police + AMHP + warrant — Section 135: enter property and remove to place of safety'],
        ['Medical emergency (OD, altered GCS, hypoglycaemia)', '999 immediately. Do not delay for MHA process'],
        ['Child (<18)', 'Follow local CAMHS crisis pathway. Safeguarding consideration. Do not use adult MHA sections without specialist advice'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Mental Capacity Act (MCA) 2005 — The 4 Tests',
    },
    {
      type: 'para',
      text: 'Capacity is decision-specific and time-specific. Assume capacity unless proven otherwise. A person lacks capacity if they cannot do ANY ONE of the four steps below, AND this is due to an impairment or disturbance in the functioning of the mind or brain.',
    },
    {
      type: 'list',
      items: [
        'Understand: can they understand the information relevant to the decision (in plain language)?',
        'Retain: can they hold the information long enough to make the decision?',
        'Weigh up / use: can they use or weigh the information to arrive at a decision?',
        'Communicate: can they communicate their decision (by any means — words, gestures, AAC)?',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key MCA principles',
      items: [
        'Always assume capacity — the burden of proof lies with those asserting lack of capacity',
        'A person has the right to make an unwise decision — this alone does not indicate lack of capacity',
        'Make all practicable efforts to support the person to make their own decision before concluding they lack capacity',
        'Any act or decision made under MCA must be in the person\'s best interests and least restrictive option',
        'Advance decisions (living wills) must be respected if valid and applicable to the situation',
        'Lasting Power of Attorney (LPA) for health and welfare — confirm it is registered and covers the decision',
        'DOLS (Deprivation of Liberty Safeguards) apply when a person without capacity needs to be deprived of liberty in a care home or hospital for their own safety',
      ],
    },
    {
      type: 'image',
      src: '/images/PRN01699-mental-capacity-assessment-flowchart.png',
      alt: 'Mental Capacity Act assessment flowchart — the 4 capacity tests: understand, retain, weigh up, communicate',
      caption: 'MCA capacity assessment flowchart: if patient cannot understand, retain, weigh up, or communicate — due to a mind or brain impairment — they lack capacity for that specific decision.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Mental Health Act (MHA) 1983 — Key Sections for GPs',
    },
    {
      type: 'image',
      src: '/images/mha.png',
      alt: 'Mental Health Act 2007 sections summary table — sections 2, 3, 4, 5(2), 5(4)',
      caption: 'MHA sections at a glance. Orange = no treatment without consent (can sedate under common law only). AMHP = Approved Mental Health Practitioner. RMP = Registered Medical Practitioner.',
    },
    {
      type: 'image',
      src: '/images/Sections.png',
      alt: 'Detailed MHA sections table — purpose, recommendation, applicant and duration for sections 2, 3, 4, 135, 136, 5(2), 5(4)',
      caption: 'Mental Health Act sections: purpose, who recommends, who applies, and duration. Section 2 (assessment) and Section 3 (treatment) both require AMHP application and 2 doctors (one S12-approved).',
    },
    {
      type: 'table',
      headers: ['Section', 'Who can initiate', 'Purpose', 'Duration', 'Key GP points'],
      rows: [
        ['Section 2', 'AMHP (applies) + 2 doctors (one S12-approved)', 'Admission for assessment ± treatment', '28 days — non-renewable', 'Most common admission section. Convert to S3 if longer treatment needed'],
        ['Section 3', 'AMHP + 2 doctors (one S12-approved)', 'Admission for treatment', '6 months — renewable', 'Requires specific diagnosis. Treatment can be given without consent after 3 months'],
        ['Section 4', 'AMHP + 1 doctor (ideally S12)', 'Emergency admission for assessment when S2 is not possible (e.g. delays)', '72 hours — convert to S2 ASAP', 'GP can be the recommending doctor if S12 doctor unavailable. State why S2 is not possible'],
        ['Section 5(2)', 'Responsible Clinician (hospital doctor)', 'Detain voluntary inpatient who wishes to leave', '72 hours', 'Hospital use only — NOT for A&E patients or outpatients. Convert to S2/S3 ASAP'],
        ['Section 5(4)', 'Qualified mental health nurse', 'Detain inpatient until doctor arrives', '6 hours', 'Nurse holding power. Superseded by S5(2) when doctor arrives'],
        ['Section 17A (CTO)', 'Responsible Clinician + AMHP', 'Community Treatment Order for discharged S3 patients', 'Renewable 6 monthly', 'Allows recall if non-compliant. GP informed — check CTO conditions'],
        ['Section 135', 'Police + AMHP + magistrate warrant', 'Enter private property and move person to place of safety', '72 hours', 'Used when patient refuses entry. Requires a warrant — plan ahead'],
        ['Section 136', 'Police only', 'Remove from public place to place of safety for MHA assessment', '72 hours', 'Most relevant to GP — call police if patient is in public and poses immediate risk. No warrant needed'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'GP practical points for MHA',
      items: [
        'GPs can contribute a medical recommendation for S2, S3, or S4 — contact your local AMHP/CRHT to initiate',
        'S12 approval: GPs can apply to become S12 approved — check if you or a partner is already approved',
        'For S4: you must record why S2 cannot be used (e.g. second doctor not available urgently) — document clearly',
        'Always contact the Crisis Resolution Home Treatment Team (CRHT) before considering a section — they can often assess and support in the community',
        'AMHP coordinates the MHA assessment — you do not need to organise this alone. Contact CRHT or local MH team',
        'Common law (best interests): if a patient lacks capacity and is in immediate danger, you can act under common law while awaiting formal MHA process — document reasoning',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: 'Mind — Mental Health Act explained', url: 'https://www.mind.org.uk/information-support/legal-rights/mental-health-act-1983/' },
        { label: 'SANE crisis line 4pm–10pm', url: 'https://www.sane.org.uk/support/samaritans-and-sane' },
        { label: '4AT delirium tool (official)', url: 'https://www.the4at.com' },
        { label: 'MCA Code of Practice (GOV.UK)', url: 'https://www.gov.uk/government/publications/mental-capacity-act-code-of-practice' },
      ],
    },
  ],
}
