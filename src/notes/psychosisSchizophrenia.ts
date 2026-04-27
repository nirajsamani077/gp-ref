import type { Note } from '../data/notes'

export const psychosisSchizophrenia: Note = {
  id: 'psychosis-schizophrenia',
  title: 'Psychosis & Schizophrenia',
  subtitle: 'Recognition, referral, first episode workup, mania vs hypomania, and DVLA rules',
  tags: ['mental'],

  body: 'psychosis schizophrenia hallucinations delusions thought disorder positive negative symptoms prodrome first episode FEP CMHT crisis team referral NMDA encephalitis organic psychosis mania hypomania bipolar type 1 type 2 DVLA driving CBT family therapy antipsychotic St Michaels Court relapse prevention ESCA shared care schizoaffective brief psychotic disorder',

  content: [

    { type: 'heading', level: 2, text: 'What is Psychosis?' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Explaining psychosis to patients and families',
      items: [
        '"Experiencing the outside world abnormally — unable to distinguish what\'s real from what isn\'t"',
        '"It\'s a brain issue, not a character flaw — there\'s no specific test but there is a strong genetic component (10% risk if first-degree relative affected)"',
        'Schizophrenia is the most common primary psychotic disorder — onset typically in late teens to mid-30s; men present earlier than women',
        'Associated with significantly elevated suicide risk — address at every contact',
        'Psychosis is a symptom, not a single diagnosis — exclude organic and drug-related causes first',
      ],
    },

    { type: 'heading', level: 2, text: 'Positive & Negative Symptoms' },

    {
      type: 'table',
      headers: ['Positive symptoms (excess/distortion of normal)', 'Negative symptoms (reduction/absence of normal)'],
      rows: [
        ['Auditory hallucinations (voices — commenting, commanding, third-person)', 'Social withdrawal and isolation'],
        ['Paranoid delusions (persecution, reference, grandiosity)', 'Blunted or flat affect'],
        ['Thought disorder (loosening of associations, flight of ideas, tangentiality)', 'Apathy and loss of motivation'],
        ['Thought insertion, withdrawal, broadcast', 'Poverty of speech (alogia)'],
        ['Passivity phenomena (made feelings/impulses)', 'Avolition (inability to initiate activity)'],
        ['Perceptual disturbances (visual, somatic, olfactory hallucinations)', 'Catatonia (in severe cases)'],
      ],
      caption: 'ICD-11 schizophrenia: ≥1 month of symptoms, with ≥1 positive symptom + functional impairment. Negative symptoms are often more persistent and harder to treat than positive symptoms.',
    },

    { type: 'heading', level: 2, text: 'Referral' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Who to refer and how urgently',
      items: [
        'ACUTE PSYCHOSIS with risk to self or others → crisis team same day; if imminent danger → 999; consider MHA s136 if needed',
        'FIRST EPISODE PSYCHOSIS (FEP) → urgent CMHT referral (within days); Early Intervention in Psychosis (EIP) team where available — best outcomes with early treatment',
        'PRODROME / emerging psychosis → early CMHT referral even if not yet full psychosis: unexplained functional decline, borderline psychotic symptoms, abnormal behaviour, or strong family history; 4 in 5 prodromal presentations resolve without developing full psychosis, but early input is protective',
        'SUSPECTED ORGANIC PSYCHOSIS → urgent medical review first (see workup below)',
        'Local service: St Michael\'s Court — South Staffordshire CMHT (see links)',
      ],
    },

    { type: 'heading', level: 2, text: 'Organic Workup' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Always exclude organic causes before diagnosing primary psychosis',
      items: [
        'FBC, U&E, LFTs, TFTs (thyroid disease), glucose, calcium',
        'B12 and folate deficiency (can cause psychosis)',
        'HIV and blood-borne virus screen (HIV encephalopathy)',
        'Syphilis serology (neurosyphilis)',
        'Anti-NMDA receptor antibodies — autoimmune encephalitis; typically young women; associated with ovarian teratoma; presents with psychiatric symptoms before neurological features',
        'Urine toxicology — cannabis (especially high-potency), amphetamines, cocaine, ketamine, novel psychoactive substances (NPS) can all trigger or sustain psychosis',
        'CT/MRI head: if focal neurology, first presentation in older age, or any atypical features',
        'Consider: Wilson\'s disease (young patient), Huntington\'s, Cushing\'s, steroid-induced psychosis',
      ],
    },

    { type: 'heading', level: 2, text: 'Before Starting an Antipsychotic' },

    {
      type: 'list',
      items: [
        'FBC (baseline; essential before clozapine)',
        'Fasting glucose / HbA1c and fasting lipid profile',
        'Prolactin (baseline)',
        'U&E, LFTs, TFTs',
        'ECG (QTc — baseline; antipsychotics can prolong QTc)',
        'BMI and waist-to-height ratio',
        'QRISK3 cardiovascular risk assessment',
        'Blood pressure',
        'Document all results — shared care monitoring will be based against these baselines',
      ],
    },

    { type: 'heading', level: 2, text: 'Management Overview' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Principles of management — usually led by secondary care',
      items: [
        'Antipsychotic medication: initiated in secondary care; GP continues prescription under ESCA after 12 months of stability',
        'Continue antipsychotic for at least 2 years after first episode remission — risk of relapse after stopping is very high (>80% within 5 years)',
        'CBT for psychosis: effective for positive symptoms; family therapy significantly reduces relapse rate',
        'Psychosocial support: employment, housing, social inclusion — recovery-focused approach',
        'Ensure relapse prevention plan and crisis plan are documented — identify early warning signs',
        'Annual SMI review in primary care — metabolic monitoring, physical health, smoking, alcohol, exercise',
        'Clozapine: considered after failure of two adequate antipsychotic trials — most effective antipsychotic for treatment-resistant schizophrenia',
      ],
    },

    { type: 'heading', level: 2, text: 'Mania vs Hypomania & DVLA' },

    {
      type: 'table',
      headers: ['Feature', 'Mania', 'Hypomania'],
      rows: [
        ['Duration', '>7 days (or any duration if hospitalised)', '>4 days'],
        ['Functional impairment', 'Severe — cannot function normally', 'Mild — still functioning'],
        ['Psychotic symptoms', 'May be present (grandiose delusions, hallucinations)', 'Absent by definition'],
        ['Bipolar type', 'Type 1 BAD (if depressive episode also present)', 'Type 2 BAD (if depressive episode also present)'],
        ['Hospitalisation', 'Often required', 'Usually not required'],
      ],
      caption: 'Mania vs hypomania distinction determines BAD type and drives management intensity. Both require specialist assessment.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Antidepressant-induced mania and DVLA rules',
      items: [
        'If a patient on an SSRI/SNRI (particularly venlafaxine) develops manic or hypomanic symptoms → STOP the antidepressant and start an antipsychotic (e.g. risperidone); refer urgently to CMHT',
        'DVLA driving rules for bipolar:',
        '• Stable disease (fewer than 4 mood swings per year): must not drive for 6 months after each episode; then may reapply',
        '• Unstable disease (≥4 mood swings per year): must not drive for 3 months — notify DVLA; DVLA will request medical reports',
        '• Acute mania or psychosis: must not drive; advise patient and document clearly',
        'DVLA notification is the patient\'s legal responsibility — advise them clearly and document this advice in the notes',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antipsychotics-smi', label: 'Antipsychotics & SMI Review', subtitle: 'Monitoring, side effects, clozapine, SMI annual review' },
        { id: 'lithium-bipolar', label: 'Lithium & Bipolar Disorder', subtitle: 'Lithium monitoring, bipolar medications' },
        { id: 'depression', label: 'Depression', subtitle: 'Screening, CBT, safety planning' },
        { id: 'suicide-self-harm', label: 'Suicide & Self-Harm', subtitle: 'Risk assessment, crisis plan' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'St Michael\'s Court — South Staffs CMHT', url: 'https://www.staffordshireconnects.info/kb5/staffordshire/directory/service.page?id=SMYEg7qMULM' },
        { label: 'MPFT — Emergency Mental Health Help', url: 'https://www.mpft.nhs.uk/service-users-and-carers/emergency-help' },
        { label: 'NICE CKS — Psychosis & Schizophrenia', url: 'https://cks.nice.org.uk/topics/psychosis-and-schizophrenia/' },
        { label: 'NICE NG185 — Bipolar Disorder', url: 'https://www.nice.org.uk/guidance/ng185' },
        { label: 'DVLA — Bipolar & Psychiatric Conditions', url: 'https://www.gov.uk/guidance/psychiatric-disorders-assessing-fitness-to-drive' },
        { label: 'MIND — Schizophrenia', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/schizophrenia/' },
        { label: 'Rethink Mental Illness', url: 'https://www.rethink.org' },
      ],
    },

  ],
}
