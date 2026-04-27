import type { Note } from '../data/notes'

export const antipsychoticsSmi: Note = {
  id: 'antipsychotics-smi',
  title: 'Antipsychotics & SMI Annual Review',
  subtitle: 'Monitoring schedules, side effect management, clozapine protocol, hyperprolactinaemia and SMI QOF review',
  tags: ['mental', 'prescribing'],

  body: 'antipsychotic clozapine olanzapine risperidone quetiapine aripiprazole haloperidol amisulpride monitoring FBC prolactin HbA1c lipids BMI weight ECG QTc EPSE extrapyramidal tardive dyskinesia akathisia dystonia hyperprolactinaemia agranulocytosis neutropenia metabolic syndrome SMI annual review QOF ESCA shared care shared care agreement CMHT psychosis schizophrenia bipolar anticholinergic sedation weight gain hyperglycaemia orthostatic hypotension clozapine missed doses smoking myocarditis hypersalivation',

  content: [

    { type: 'heading', level: 2, text: 'Antipsychotic Overview' },

    {
      type: 'table',
      headers: ['Class', 'Examples', 'Mechanism', 'Key notes'],
      rows: [
        ['Typical (1st generation)', 'Haloperidol, chlorpromazine, flupentixol, zuclopenthixol', 'D2 blockade', 'Higher EPSE risk; useful in depot formulations for adherence; haloperidol: lower sedation but high EPSE; chlorpromazine: high sedation, high metabolic risk'],
        ['Atypical (2nd generation)', 'Risperidone, olanzapine, quetiapine, aripiprazole, amisulpride, clozapine', 'D2 + 5-HT2A blockade (variable)', 'Better tolerated for negative symptoms; lower EPSE (except risperidone at high dose); but higher metabolic risk for most; preferred first-line'],
        ['Clozapine', 'Clozapine (Clozaril, Denzapine, Zaponex)', 'Multi-receptor; low D2 affinity', 'Most effective for treatment-resistant schizophrenia; mandatory blood monitoring for life due to agranulocytosis risk — see section below'],
      ],
      caption: 'Antipsychotic classes. Atypicals are first-line for most patients. Choice should be shared decision-making balancing efficacy, side effect profile and patient preferences.',
    },

    { type: 'heading', level: 2, text: 'Side Effect Profiles' },

    {
      type: 'image',
      src: '/images/antipsychotic-side-effects.png',
      alt: 'Comparison table of antipsychotic side effect profiles showing extrapyramidal, sedation, weight gain, hyperglycaemia, anticholinergic and orthostatic hypotension risk for atypical and typical antipsychotics',
      caption: 'Antipsychotic side effect comparison — frequency of key adverse effects across atypical and typical agents.',
      maxWidth: '640px',
    },

    {
      type: 'table',
      headers: ['Side effect', 'Higher risk agents', 'Lower risk agents', 'Management'],
      rows: [
        ['Weight gain / metabolic syndrome', 'Olanzapine (highest), clozapine, quetiapine, chlorpromazine', 'Aripiprazole, amisulpride, haloperidol', 'Monitor BMI, HbA1c, lipids; dietary advice; exercise; consider switch to aripiprazole; statin/metformin if indicated'],
        ['Extrapyramidal SE (EPSE)', 'Haloperidol (highest), risperidone (dose-dependent), amisulpride', 'Quetiapine, clozapine, aripiprazole', 'See EPSE section below'],
        ['Hyperprolactinaemia', 'Risperidone (highest), amisulpride, haloperidol', 'Quetiapine, clozapine, aripiprazole (lowers prolactin)', 'See hyperprolactinaemia section below'],
        ['Sedation', 'Clozapine (highest), quetiapine, olanzapine, chlorpromazine', 'Aripiprazole, amisulpride, haloperidol', 'Dose at night; reduce dose if tolerated; avoid driving if drowsy'],
        ['QTc prolongation', 'Haloperidol (IV), amisulpride, ziprasidone, chlorpromazine', 'Aripiprazole, olanzapine (low risk)', 'Baseline ECG; avoid combination with other QTc-prolonging drugs; check electrolytes'],
        ['Anticholinergic', 'Clozapine, olanzapine, chlorpromazine', 'Aripiprazole, haloperidol', 'Dry mouth, constipation, urinary retention, blurred vision, cognitive impairment'],
        ['Orthostatic hypotension', 'Clozapine (worst), quetiapine, risperidone initially', 'Haloperidol, aripiprazole', 'Rise slowly; check BP lying and standing; falls risk especially in elderly'],
        ['Agranulocytosis', 'Clozapine (1%), rarely other antipsychotics', 'All others', 'Mandatory FBC monitoring for clozapine — see section below'],
      ],
      caption: 'Key antipsychotic side effects with higher and lower risk agents. Aripiprazole generally has the most favourable metabolic and prolactin profile.',
    },

    { type: 'heading', level: 2, text: 'Monitoring Schedule' },

    {
      type: 'table',
      headers: ['Parameter', 'Baseline', '3 months', '6 months', 'Annual'],
      rows: [
        ['FBC (all)', '✓', '✓', '✓', '✓'],
        ['U&E, LFTs, TFTs', '✓', '', '', '✓'],
        ['HbA1c / fasting glucose', '✓', '', '✓', '✓'],
        ['Fasting lipid profile', '✓', '✓', '', '✓'],
        ['BMI / weight / waist-to-height ratio', '✓', '✓', '✓', '✓'],
        ['Blood pressure', '✓', 'When titrating dose', '', '✓'],
        ['Prolactin', '✓', '', '✓', '✓'],
        ['ECG (QTc)', '✓', '', '', 'If cardiac risk factors'],
        ['QRISK3 / CVD risk assessment', '✓', '', '', '✓'],
        ['Smoking, alcohol, exercise, diet', '✓', '', '', '✓'],
        ['Clozapine FBC', '✓', 'Weekly for 18 weeks, then 2-weekly for 1 year, then 4-weekly for life', '', ''],
      ],
      caption: 'Antipsychotic monitoring schedule. Timing is approximate — follow ESCA/shared care agreement for your specific patient. Clozapine has a separate mandatory blood monitoring programme.',
    },

    { type: 'heading', level: 2, text: 'Clozapine — Specific Protocol' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Clozapine — mandatory blood monitoring (CPMS)',
      items: [
        'Clozapine is the most effective antipsychotic but carries a 1% risk of agranulocytosis and 3% risk of neutropenia — this is potentially fatal if missed',
        'All patients on clozapine must be registered with the Clozapine Patient Monitoring Service (CPMS) — a "traffic light" system: GREEN = dispense, AMBER = monitor closely, RED = withhold and contact CMHT',
        'MANDATORY FBC SCHEDULE: weekly for first 18 weeks → 2-weekly for remainder of first year → 4-weekly for life',
        'If FBC result not obtained: pharmacy will NOT dispense clozapine',
        'Neutrophil thresholds: neutrophils <1.5 × 10⁹/L = AMBER (increase monitoring); neutrophils <1.0 × 10⁹/L or WBC <2.0 = RED → STOP clozapine immediately, contact prescribing psychiatrist urgently, admit if unwell',
        'Fever/sore throat/other infection in a clozapine patient → check FBC urgently (not just clinically assess)',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Clozapine — other important issues',
      items: [
        'Missed doses: if ≥2 consecutive doses missed → restart slowly from a low dose (re-titration needed); hypotension and excessive sedation occur with abrupt resumption',
        'If ≥3 days missed → FBC monitoring must recommence from beginning (weekly again)',
        'Smoking and clozapine: smoking induces CYP1A2 and SIGNIFICANTLY lowers clozapine levels by ~50%; if patient stops smoking → clozapine levels rise → toxicity risk; monitor carefully and contact psychiatrist to reduce dose',
        'Myocarditis: rare but serious (first 4–8 weeks of treatment); features: tachycardia, fever, flu-like illness, chest pain, raised troponin/CRP/CK — stop clozapine and admit urgently',
        'Hypersalivation: common (especially nocturnal); hyoscine hydrobromide patch or glycopyrrolate may help',
        'Reduced seizure threshold: dose-related; ensure good adherence and avoid combination with seizure-lowering drugs; consider prophylactic valproate if history of seizures',
        'Constipation: clozapine causes severe constipation — can lead to fatal bowel obstruction; prophylactic laxatives often needed; monitor closely',
      ],
    },

    { type: 'heading', level: 2, text: 'Hyperprolactinaemia' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Antipsychotic-induced hyperprolactinaemia',
      items: [
        'Dopamine normally inhibits prolactin secretion — D2 blockade by antipsychotics raises prolactin; highest risk with risperidone and amisulpride',
        'Check prolactin at baseline and 6-monthly; always check if symptomatic',
        'Symptoms in women: menstrual irregularities/amenorrhoea, galactorrhoea, reduced libido, vaginal dryness, infertility, osteoporosis (long-term)',
        'Symptoms in men: erectile dysfunction, reduced libido, gynaecomastia, galactorrhoea, reduced testosterone, osteoporosis',
        'Action: if symptomatic or prolactin >2× upper limit of normal → discuss with psychiatrist; options include dose reduction, switching to a prolactin-sparing agent (aripiprazole, quetiapine, clozapine), or adding low-dose aripiprazole (which lowers prolactin without compromising antipsychotic efficacy)',
        'Do NOT add a dopamine agonist (cabergoline, bromocriptine) without specialist advice — can worsen psychosis',
        'Exclude non-drug causes: MRI pituitary if prolactin very elevated (>5000 mU/L) or macro-adenoma suspected',
      ],
    },

    { type: 'heading', level: 2, text: 'Extrapyramidal Side Effects (EPSE)' },

    {
      type: 'table',
      headers: ['EPSE type', 'Timing', 'Features', 'Management'],
      rows: [
        ['Acute dystonia', 'Hours to days after starting/dose increase', 'Sustained muscle spasm: torticollis, oculogyric crisis, opisthotonus, laryngeal spasm', 'IM/IV procyclidine 5–10 mg or IM benztropine; prescribe oral anticholinergic prophylactically if recurs; switch drug if severe'],
        ['Akathisia', 'Days to weeks', 'Subjective restlessness, inability to sit still, pacing; often mistaken for agitation/anxiety', 'Reduce dose; switch to lower-EPSE agent; propranolol 30–80 mg/day; mirtazapine; DO NOT increase antipsychotic dose (worsens akathisia)'],
        ['Parkinsonism (pseudo)', 'Weeks', 'Tremor, rigidity, bradykinesia, mask-like face, shuffling gait', 'Reduce dose; switch agent; procyclidine 2.5–5 mg TDS if needed; avoid long-term anticholinergics'],
        ['Tardive dyskinesia (TD)', 'Months to years (late onset)', 'Involuntary repetitive movements: lip-smacking, tongue protrusion, choreoathetoid limb movements', 'Reduce/stop causative drug if possible; switch to clozapine (lowest TD risk); valbenazine or deutetrabenazine (specialist); often irreversible — prevention is key'],
      ],
      caption: 'EPSE types and management. Tardive dyskinesia is potentially irreversible — use AIMS scale to monitor; document regularly in patients on long-term antipsychotics.',
    },

    { type: 'heading', level: 2, text: 'SMI Annual Review (QOF)' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'SMI annual review — who qualifies and what to cover',
      items: [
        'QOF-registered SMI: schizophrenia, bipolar disorder, and other psychoses under secondary care — also includes severe depression, severe anxiety/PTSD/OCD under CMHT',
        'Annual review must be completed in primary care to meet QOF targets',
        'Bloods: FBC, U&E, LFTs, TFTs, HbA1c, fasting lipids, prolactin (if on antipsychotic)',
        'Physical measurements: BMI, waist-to-height ratio, blood pressure',
        'Lifestyle assessment: diet quality, physical activity level, smoking status and cessation support, alcohol and substance use',
        'Cardiovascular risk: QRISK3; statin consideration (high-risk patients — most SMI patients qualify)',
        'Social: housing stability, employment, caring responsibilities, social isolation',
        'Mental health: current symptoms, medication adherence, antipsychotic side effects, self-harm/suicidal ideation, crisis plan up to date',
        'Medication review: review all prescriptions for interactions, doses, ESCA compliance',
        'Invite via recall system — DNA rate is high in SMI patients; consider outreach letters; involve care coordinator',
      ],
    },

    { type: 'heading', level: 2, text: 'ESCA & Shared Care' },

    {
      type: 'callout',
      variant: 'info',
      title: 'GP responsibilities under ESCA',
      items: [
        'ESCA (Enhanced Shared Care Agreement): formal agreement between GP and psychiatry defining shared responsibilities for monitoring and prescribing after patient is stable on antipsychotic',
        'Typically initiated after 12 months of stability in secondary care — GP takes on ongoing prescribing and physical monitoring',
        'GP responsibilities: prescribing the antipsychotic, blood monitoring per schedule, annual SMI review, physical health management, referral back to CMHT if relapse',
        'Psychiatry responsibilities: clinical oversight, dose adjustments for psychiatric reasons, specialist monitoring (e.g. clozapine via CPMS), relapse assessment',
        'Do NOT accept ESCA if monitoring requirements are unclear — request a clear care plan from the CMHT before taking on prescribing responsibility',
        'Clozapine: GP does NOT prescribe clozapine independently — this remains with the prescribing psychiatrist and CPMS; GP may be asked to take blood samples only',
        'Depot antipsychotics: often administered by community psychiatric nurse (CPN) or practice nurse — ensure the administration record is clearly documented',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'psychosis-schizophrenia', label: 'Psychosis & Schizophrenia', subtitle: 'Diagnosis, referral, mania/hypomania, DVLA' },
        { id: 'lithium-bipolar', label: 'Lithium & Bipolar Disorder', subtitle: 'Lithium monitoring, bipolar medication overview' },
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'SSRI risk of manic switch in bipolar' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'St Michael\'s Court — South Staffs CMHT', url: 'https://www.staffordshireconnects.info/kb5/staffordshire/directory/service.page?id=SMYEg7qMULM' },
        { label: 'NICE CKS — Antipsychotic Medications', url: 'https://cks.nice.org.uk/topics/antipsychotic-medications/' },
        { label: 'NICE NG185 — Bipolar Disorder', url: 'https://www.nice.org.uk/guidance/ng185' },
        { label: 'Maudsley Prescribing Guidelines (BNF)', url: 'https://bnf.nice.org.uk/treatment-summaries/psychoses-and-schizophrenia/' },
        { label: 'NHS England — SMI Physical Health Checks', url: 'https://www.england.nhs.uk/mental-health/adults/serious-mental-illness/physical-health-checks/' },
        { label: 'UKPPG — Clozapine Guidelines', url: 'https://www.clozapinetrustguidelines.co.uk' },
        { label: 'Rethink — Clozapine (patient info)', url: 'https://www.rethink.org/advice-and-information/about-mental-illness/treatment-and-support/antipsychotics/clozapine/' },
      ],
    },

  ],
}
