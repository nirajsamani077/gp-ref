import type { Note } from '../data/notes'

export const lithiumBipolar: Note = {
  id: 'lithium-bipolar',
  title: 'Lithium & Bipolar Disorder',
  subtitle: 'Lithium monitoring in GP, toxicity, interactions, and bipolar medication overview',
  tags: ['mental', 'prescribing'],

  body: 'lithium bipolar disorder mood stabiliser lithium level monitoring toxicity hyponatraemia thyroid renal calcium NSAIDs ACE inhibitor diuretics mania depression quetiapine valproate lamotrigine olanzapine aripiprazole rapid cycling lithium register purple book Priadel Liskonum serum level 0.6 0.8 1.0 1.2 serotonin syndrome dehydration',

  content: [

    { type: 'heading', level: 2, text: 'Lithium in GP Practice' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Lithium is initiated by secondary care (psychiatry); GP maintains the prescription and monitoring in shared care',
        'Indications: bipolar disorder prophylaxis (first-line), acute mania (adjunct), bipolar depression, treatment-resistant depression (augmentation)',
        'Lithium has a narrow therapeutic index — monitoring is essential; toxicity can be life-threatening',
        'Additional benefits: reduces suicide risk; some evidence for reducing Alzheimer\'s dementia risk',
        'All patients on lithium should be on the practice lithium register and hold an MHRA purple lithium booklet',
        'ALWAYS prescribe by brand — Priadel and Liskonum have different bioavailability and are not interchangeable; check level 5 days after any brand change',
      ],
    },

    { type: 'heading', level: 2, text: 'Therapeutic Ranges' },

    {
      type: 'table',
      headers: ['Indication', 'Target serum level', 'Notes'],
      rows: [
        ['Prophylaxis / maintenance', '0.6–0.8 mmol/L', 'Aim for lowest effective level to minimise long-term toxicity'],
        ['Acute mania treatment', '0.8–1.2 mmol/L (minimum ~1.0)', 'Higher levels needed acutely; reduce back to maintenance range once episode resolves'],
        ['Treatment-resistant depression (augmentation)', '0.6–0.8 mmol/L', 'As for maintenance'],
        ['Toxicity threshold', '>1.5 mmol/L', 'Symptoms can occur within therapeutic range in elderly'],
        ['Potentially fatal', '>3.5 mmol/L', 'Haemodialysis recommended'],
      ],
      caption: 'Lithium therapeutic ranges. Always sample at 10–14 hours post-dose (usually morning, before first dose). Unreliable if sampling time is variable.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Lithium toxicity — recognise and act',
      items: [
        'Symptoms: blurred vision, anorexia, nausea/vomiting/diarrhoea, coarse tremor (fine tremor is normal at therapeutic levels), ataxia, dysarthria, drowsiness, confusion, convulsions',
        'Fine tremor at rest is common and normal; a coarse tremor, ataxia, or confusion = TOXICITY until proven otherwise',
        'Action: withhold next dose immediately; arrange urgent serum lithium level (still 10–14 hours post-dose); if symptoms are severe or level >2.0 mmol/L → send to ED',
        'Common precipitants: dehydration (vomiting, diarrhoea, heat, exercise), new NSAID, new ACE inhibitor/ARB/diuretic, reduced salt intake, renal deterioration',
        'Advise patients and carers to seek help if symptoms develop, especially during illness, hot weather, or before/after starting new medications',
      ],
    },

    { type: 'heading', level: 2, text: 'Monitoring in GP' },

    {
      type: 'table',
      headers: ['Test', 'Baseline', 'Ongoing', 'Notes'],
      rows: [
        ['Serum lithium level', 'Establish reliable steady state', 'Every 3 months (more frequently if high-risk)', 'Always 10–14 hours post-dose. Check 5 days after any dose/brand change or addition of interacting drug'],
        ['Renal function (eGFR, electrolytes, creatinine)', 'Yes', 'Every 3 months with lithium level', 'Lithium can cause nephrogenic DI and chronic kidney disease with long-term use'],
        ['Thyroid function (TSH)', 'Yes', '3 months after initiation, then every 6 months', 'Hypothyroidism is common — more so in women; treat with levothyroxine if needed without stopping lithium'],
        ['Serum calcium (and Mg)', 'Yes', 'Every 2 years', 'Hyperparathyroidism/hypercalcaemia — incidence up to 50%; if corrected Ca >2.75 mmol/L → discuss with renal/endocrinology'],
        ['Weight', 'Yes', 'Monthly initially, then every 6–12 months', 'Significant weight gain common — dietary counselling; do NOT use diuretics for weight/oedema'],
        ['Blood pressure', 'Yes', 'Ongoing', ''],
        ['ECG', 'If cardiac disease or age >45', 'Annually if cardiac/over 45', 'Lithium can cause benign T-wave changes; true toxicity causes arrhythmias'],
        ['Pregnancy test', 'Women of childbearing age', '—', 'Lithium is teratogenic (Ebstein\'s anomaly and other cardiac defects); requires specialist review if pregnancy considered'],
      ],
      caption: 'Lithium monitoring schedule in GP shared care. Three-monthly levels + renal function is the minimum standard. More frequent monitoring needed in elderly, those on interacting drugs, or with unstable renal function.',
    },

    { type: 'heading', level: 2, text: 'Drug Interactions' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Drugs that RAISE lithium levels — toxicity risk',
      items: [
        'NSAIDs and COXIBs: reduce renal lithium excretion; levels can rise significantly within the first week; check lithium weekly for first month if NSAID started; advise patient about OTC ibuprofen risk',
        'ACE inhibitors and ARBs: raise levels by 2–4 fold; risk of hospitalisation for toxicity is 7.6× higher when new ACE inhibitor is started; check lithium weekly for 4–6 weeks after starting',
        'Thiazide diuretics (bendroflumethiazide, indapamide): rapid and predictable rise within 7–10 days; avoid if possible',
        'Loop diuretics (furosemide): less risk but can still raise levels; monitor if started',
        'Metronidazole: raises lithium levels — check level during and after course',
        'Dehydration (any cause): vomiting, diarrhoea, fever, heat, vigorous exercise — all reduce lithium excretion; advise patients to maintain fluid intake and seek help if unwell',
      ],
    },

    {
      type: 'list',
      items: [
        'Drugs that LOWER lithium levels: theophylline (reduces by 20–30%); caffeine (similar effect); carbonic anhydrase inhibitors; monitor if theophylline dose is changed',
        'Serotonin syndrome risk: SSRIs, SNRIs, tramadol, triptans — lithium has serotonergic activity; combination with these drugs can precipitate serotonin syndrome; warn patient',
        'QTc prolongation risk: combinations with antipsychotics, TCAs — monitor ECG if necessary',
        'Antipsychotics: can mask early signs of toxicity and lower seizure threshold; monitor carefully in combination',
      ],
    },

    { type: 'heading', level: 2, text: 'Long-term Adverse Effects' },

    {
      type: 'table',
      headers: ['Effect', 'Details', 'Management'],
      rows: [
        ['Hypothyroidism', 'Common (more in women); biochemically identical to primary hypothyroidism; check for symptoms', 'Treat with levothyroxine; do not stop lithium'],
        ['Nephrogenic diabetes insipidus', 'Polyuria (>3 L/24h), polydipsia — affects 10% after 15+ years; lithium most common drug cause', 'Monitor renal function; consider switch to alternative if progressive; shared care with nephrology if needed'],
        ['Chronic kidney disease', 'Long-term lithium accumulates in renal tubules; slow but progressive; risk of permanent damage', 'Use lowest effective dose; once-daily dosing may reduce risk; monitor eGFR 3-monthly'],
        ['Hyperparathyroidism/Hypercalcaemia', 'Incidence up to 50%; not related to levels or duration; more common in women/elderly', 'If corrected Ca <2.75 mmol/L: monitor; >2.75 mmol/L: refer renal/endocrine; consider stopping lithium'],
        ['Weight gain', 'Common; mechanism partly related to polydipsia with high-calorie drinks', 'Dietary counselling; do NOT use diuretics; consider switch to valproate/carbamazepine if severe'],
        ['Fine tremor', 'Very common at therapeutic levels — usually benign', 'Propranolol 10–40 mg can help if distressing; reassure if no coarse tremor/ataxia'],
        ['Cognitive effects', 'Some patients report memory difficulties, "brain fog"', 'Often dose-related; try reducing to lowest effective level'],
      ],
      caption: 'Long-term lithium adverse effects. Regular monitoring and patient education are key to early detection.',
    },

    { type: 'heading', level: 2, text: 'Stopping Lithium' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Never stop lithium abruptly',
      items: [
        'Abrupt withdrawal greatly increases relapse risk — bipolar episode often occurs within 3 months of abrupt stop',
        'Taper over at least 2 weeks; ideally 4+ weeks (longer if on long-term treatment)',
        'Discuss with specialist before stopping in any patient who has been stable on lithium',
        'If pregnancy: specialist review essential — balance teratogenicity risk vs relapse risk to mother',
        'Educate patient on early relapse warning signs so they can seek help quickly',
      ],
    },

    { type: 'heading', level: 2, text: 'Bipolar Disorder — Medication Overview' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Principles of bipolar management',
      items: [
        'Bipolar disorder is managed by psychiatry (secondary care) — GP role is to continue prescriptions, monitor, and recognise relapse',
        'Long-term treatment goal: prevent both manic and depressive episodes; continuous treatment is superior to intermittent',
        'Efficacy for prevention of relapse (hospitalisation over 4 years): Lithium > Valproate > Olanzapine > Lamotrigine > Quetiapine > Carbamazepine',
        'Antidepressants in bipolar: RISK of triggering manic switch and rapid cycling — especially TCAs and SNRIs; SSRIs safer; always use with a mood stabiliser; discontinue as soon as possible in remission',
        'Valproate: RESTRICTED in patients of childbearing potential (MHRA guidance) — teratogenicity and neurodevelopmental harm to child; GP must check MHRA compliance at every review',
        'Lamotrigine: titrate slowly (rash risk — Stevens-Johnson); dose lower if co-prescribed with valproate; dose higher if co-prescribed with carbamazepine',
      ],
    },

    {
      type: 'table',
      headers: ['Agent', 'Use in bipolar', 'GP notes'],
      rows: [
        ['Lithium', 'First-line long-term prophylaxis; acute mania (adjunct); augmentation of antidepressants', 'Shared care — GP monitors. See lithium section above.'],
        ['Valproate (sodium valproate / valproic acid)', 'Acute mania; long-term prophylaxis (less effective than lithium alone)', 'RESTRICTED in women of childbearing potential. Annual Pregnancy Prevention Programme review if woman is on valproate. Monitor LFTs, FBC, weight.'],
        ['Quetiapine', 'Acute mania; bipolar depression; long-term prophylaxis (both poles)', 'Evidence for both poles. Metabolic monitoring essential (weight, glucose, lipids). Good for insomnia. Available as IR or MR.'],
        ['Olanzapine', 'Acute mania; bipolar depression (+ fluoxetine); long-term prophylaxis (mania-dominant)', 'Significant metabolic risk — weight gain, T2DM, dyslipidaemia. Monitor closely.'],
        ['Lamotrigine', 'Bipolar depression prevention (strongest evidence); maintenance', 'SLOW titration to avoid rash/SJS. Very slow titration if co-prescribed with valproate. Not effective for acute mania.'],
        ['Aripiprazole', 'Acute mania; maintenance', 'Lower metabolic risk than olanzapine/quetiapine. Weight neutral.'],
        ['Risperidone', 'Acute mania; LAI useful for maintenance if poor adherence', 'LAI (Risperdal Consta) is an option for long-term maintenance.'],
        ['Carbamazepine', 'Bipolar prophylaxis (alternative if lithium fails)', 'Significant enzyme inducer — many drug interactions; reduces efficacy of other drugs including OCP. Less favoured.'],
        ['Lurasidone', 'Bipolar depression (non-formulary — secondary care only)', 'Must take with a meal (>300 kcal). Cannot transfer prescribing to primary care.'],
      ],
      caption: 'Bipolar medications overview for GP awareness. Most are initiated in secondary care; GP role is ongoing prescribing and monitoring.',
    },

    { type: 'heading', level: 2, text: 'Mania vs Hypomania' },

    {
      type: 'table',
      headers: ['Feature', 'Mania', 'Hypomania'],
      rows: [
        ['Duration', '>7 days (or any duration if hospitalised)', '>4 days'],
        ['Functional impairment', 'Severe — unable to function normally', 'Mild — still functioning'],
        ['Psychotic symptoms', 'May be present (grandiose delusions, hallucinations)', 'Absent by definition'],
        ['Bipolar type (if also depressed)', 'Type 1 BAD', 'Type 2 BAD'],
        ['Hospitalisation', 'Often required', 'Usually not required'],
      ],
      caption: 'The mania vs hypomania distinction determines bipolar type and drives management intensity. Both require specialist assessment.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Antidepressant-induced mania & DVLA',
      items: [
        'If a patient on an SSRI/SNRI (particularly venlafaxine) develops manic or hypomanic symptoms → STOP the antidepressant; start an antipsychotic (e.g. risperidone); refer urgently to CMHT',
        'DVLA driving rules:',
        '• Stable disease (fewer than 4 mood swings per year): must not drive for 6 months after each episode, then may reapply',
        '• Unstable disease (≥4 mood swings per year): must not drive for 3 months — notify DVLA; DVLA will request medical reports',
        '• Acute mania or psychosis: must not drive — advise patient clearly and document this in the notes',
        'DVLA notification is the patient\'s legal responsibility — advise at each relevant contact and document',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Recognising bipolar relapse — when to refer urgently',
      items: [
        'Manic relapse: elated or irritable mood, reduced sleep without fatigue, increased energy/activity, disinhibition, grandiosity, pressured speech, risky behaviour — refer urgently to crisis team or psychiatry',
        'Depressive relapse: worsening low mood, anhedonia, suicidality — assess risk; refer if severe',
        'Mixed episode: elements of both mania and depression simultaneously — high suicide risk; refer urgently',
        'Antidepressant-induced switch: patient on antidepressant develops hypomanic/manic symptoms → STOP ANTIDEPRESSANT immediately, refer to psychiatry',
        'Rapid cycling (≥4 episodes/year): suspect if patient frequently relapses — review medications, check for hypothyroidism (lithium-induced), check for antidepressant or stimulant use',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'antidepressants', label: 'Antidepressants', subtitle: 'SSRI caution in bipolar, switching guidance' },
        { id: 'depression', label: 'Depression', subtitle: 'Depression screening, stepped care' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE — Bipolar Disorder (NG185)', url: 'https://www.nice.org.uk/guidance/ng185' },
        { label: 'NICE CKS — Bipolar Disorder', url: 'https://cks.nice.org.uk/topics/bipolar-disorder/' },
        { label: 'MHRA — Valproate Pregnancy Prevention Programme', url: 'https://www.gov.uk/guidance/valproate-use-by-women-and-girls' },
        { label: 'MHRA — Lithium Purple Book', url: 'https://www.gov.uk/drug-safety-update/lithium-new-patient-information-booklet' },
        { label: 'BNF — Lithium', url: 'https://bnf.nice.org.uk/drugs/lithium-carbonate/' },
      ],
    },

  ],
}
