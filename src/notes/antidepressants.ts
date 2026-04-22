import type { Note } from '../data/notes'

export const antidepressants: Note = {
  id: 'antidepressants',
  title: 'Antidepressants',
  subtitle: 'Choosing, starting, switching, stopping — GP prescribing guide including cross-tapering',
  tags: ['mental', 'prescribing'],

  body: 'antidepressant SSRI SNRI mirtazapine sertraline citalopram escitalopram fluoxetine paroxetine venlafaxine duloxetine cross taper switch switching stopping withdrawal discontinuation serotonin syndrome augmentation depression anxiety GAD OCD PTSD panic QTc hyponatraemia GI bleeding sexual dysfunction fluoxetine paroxetine half life washout MAOI moclobemide TCA lofepramine PHQ-9 under 18 CAMHS fluoxetine children',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Psychological therapies (CBT, IPT) are just as effective as antidepressants for most conditions and are usually first-line — offer before or alongside medication',
        'NICE NG222: do NOT routinely offer antidepressants first-line for less severe depression (PHQ-9 <16) unless patient preference',
        'SSRIs are first-line pharmacological treatment for most conditions; SNRIs and mirtazapine are alternatives with higher efficacy but more side effects',
        'Choice should be shared decision-making — discuss: reason, dose, side effects (including sexual dysfunction), withdrawal risk, time to effect (4 weeks), and need for 6+ months after remission',
        'Always review within 2 weeks of starting; 1 week if patient is under 25 or has increased suicide risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Choosing an Antidepressant' },

    {
      type: 'table',
      headers: ['Drug', 'Class', 'Key advantages', 'Key cautions / notes'],
      rows: [
        ['Sertraline', 'SSRI', 'Fewest interactions; generally well tolerated; evidence across depression, anxiety, PTSD, OCD', 'Standard first choice; take with food in morning'],
        ['Citalopram / Escitalopram', 'SSRI', 'Well tolerated; escitalopram slightly more potent', 'QTc prolongation — avoid with other QT-prolonging drugs (TCAs, venlafaxine, erythromycin, ciprofloxacin, fluconazole, amiodarone); max dose citalopram 20 mg if >65 or hepatic impairment'],
        ['Fluoxetine', 'SSRI', 'Longest half-life (reduces discontinuation symptoms); licensed for children ≥8 years', 'Most interactions (strong CYP2D6 inhibitor — raises TCA/antipsychotic levels); inhibits tamoxifen metabolism; long half-life means can\'t cross-taper; wait 4–7 days after stopping before starting most agents; activating — take in morning'],
        ['Paroxetine', 'SSRI', 'Effective', 'AVOID: highest discontinuation risk (shortest half-life SSRI); strong CYP2D6 inhibitor; avoid in women of childbearing potential (foetal cardiac risk); most anticholinergic SSRI'],
        ['Venlafaxine', 'SNRI', 'More effective for severe depression; good for anxiety; evidence for neuropathic pain', 'Higher discontinuation risk; mild hypertensive effect (check BP); QTc risk at high doses; use with caution in cardiac disease; short half-life — highest discontinuation risk of all antidepressants'],
        ['Duloxetine', 'SNRI', 'Evidence for depression, GAD, neuropathic pain, fibromyalgia', 'Nausea common especially at start; take with food'],
        ['Mirtazapine', 'NaSSA', 'Sedating (useful if insomnia or anxiety); fewer sexual side effects; antiemetic; most serotonergic; useful in elderly', 'Most weight gain of all antidepressants; most sedation especially at lower doses (7.5–15 mg — counterintuitive, less sedation at higher dose); avoid with triptans (serotonin syndrome)'],
        ['Lofepramine', 'TCA', 'Preferred TCA in primary care — low cardiotoxicity', 'Only TCA to consider initiating in primary care; others (amitriptyline, dosulepin) too toxic in overdose'],
        ['Amitriptyline / Dosulepin', 'TCA', 'Widely used for pain/sleep', 'DO NOT START for depression — overdose toxicity outweighs benefit; if already on for pain, assess ongoing need'],
        ['Vortioxetine', 'SSRI+', 'Some cognitive benefits; useful if cognitive impairment prominent', 'Amber3 — secondary care initiation'],
        ['Agomelatine', 'Melatonin agonist', 'Less weight gain, less sexual dysfunction', 'LFT monitoring required (hepatotoxic); Amber2 — secondary care initiation; can stop abruptly'],
      ],
      caption: 'Antidepressant comparison. Sertraline is most commonly used first choice. Paroxetine should be avoided due to discontinuation risk and interactions.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'SSRI risks to consider — especially in elderly',
      items: [
        'GI bleeding: SSRIs inhibit platelet serotonin → increased bleeding risk; significantly amplified by concurrent NSAIDs, aspirin, or anticoagulants → consider PPI cover; or switch to mirtazapine',
        'Hyponatraemia (SIADH): check sodium especially in elderly, on diuretics, or low body weight; can present as confusion, falls, seizures',
        'Falls and fractures: SSRIs affect bone density and balance — increased falls risk, especially in elderly',
        'Weight gain: modest with most SSRIs; significant with mirtazapine (and paroxetine)',
        'Sexual dysfunction: affects up to 30–40%; often not volunteered — ask directly; can persist after stopping',
        'QTc prolongation: mainly citalopram and escitalopram; avoid with other QT-prolonging agents',
        'Serotonin syndrome risk with triptans: especially with high-dose SSRI + triptan; offer mirtazapine instead if migraine is a concern',
        'Neonatal withdrawal: discuss risks with women of childbearing age, especially paroxetine (foetal cardiac effects)',
      ],
    },

    { type: 'heading', level: 2, text: 'Condition-Specific Choices' },

    {
      type: 'table',
      headers: ['Condition', 'First-line', 'Second-line', 'Notes'],
      rows: [
        ['Depression (less severe, PHQ-9 <16)', 'Psychological therapy (CBT, guided self-help)', 'SSRI if patient preference', 'Do not routinely offer antidepressant first'],
        ['Depression (more severe, PHQ-9 ≥16)', 'SSRI (sertraline) + psychological therapy', 'SNRI or mirtazapine if SSRI fails; consider dose increase at 4 weeks', 'Allow 6–8 weeks to assess full effect; increase dose or switch after 4 weeks if no response'],
        ['GAD', 'SSRI (sertraline); CBT', 'Alternate SSRI or SNRI (duloxetine); only if both SSRI and SNRI fail → pregabalin', 'Pregabalin is last resort due to dependence risk'],
        ['Panic disorder', 'SSRI (any)', 'Other SSRI or TCA (imipramine/clomipramine — off-licence)', 'SSRIs may initially worsen anxiety — start at low dose and warn patient'],
        ['Social anxiety disorder', 'SSRI (sertraline or escitalopram)', 'Other SSRI or SNRI', ''],
        ['OCD', 'SSRI (any) at higher doses, longer duration (12+ months)', 'Switch to alternative SSRI; augmentation with antipsychotic (secondary care)', 'Higher doses and longer trials than for depression'],
        ['Body dysmorphic disorder', 'SSRI (fluoxetine preferred) at higher doses', 'As for OCD', ''],
        ['PTSD', 'SSRI (sertraline or paroxetine) or venlafaxine; trauma-focused CBT', 'Antipsychotics in secondary care', 'Note paroxetine interaction/discontinuation risks'],
      ],
      caption: 'Condition-specific antidepressant choices. Psychological therapy should be offered alongside or before medication for most conditions.',
    },

    { type: 'heading', level: 2, text: 'Starting, Reviewing & Monitoring' },

    {
      type: 'list',
      items: [
        'Warn patients at initiation: nausea (worst when hungry — take with food), dry mouth, initial worsening of anxiety, and rarely agitation or suicidality in the first 1–2 weeks',
        'Avoid benzodiazepines for initial anxiety agitation — review early and reassure instead',
        'Review at 2 weeks (1 week if under 25, or increased suicide risk); then monthly for 3 months; then 3–6 monthly',
        'At each review: tolerability (ask directly about sexual dysfunction), adherence, suicidality, PHQ-9, ongoing stressors, alcohol/drugs, hypomanic symptoms',
        'Time to full effect: typically 4–6 weeks; some patients up to 8 weeks — do not abandon too early',
        'If no response at 4 weeks: check adherence; consider dose increase if tolerated; or switch drug',
        'Duration after remission: minimum 6 months (12 months for GAD, OCD, BDD — higher relapse risk); discuss long-term maintenance in recurrent depression',
        'Long-term antidepressant review: every 6 months — PHQ-9, side effects, patient wishes to continue, psychosocial factors',
      ],
    },

    { type: 'heading', level: 2, text: 'Switching Antidepressants' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Three methods of switching',
      items: [
        '1. CROSS-TAPER (preferred method): gradually reduce old drug while slowly introducing new drug — done over 2–4 weeks; reduces gap in treatment and discontinuation symptoms',
        '2. DIRECT SWITCH (taper and start next day): used when: short duration on first antidepressant, or intolerable side effects — taper current drug to starting dose, begin new drug the next day',
        '3. TAPER, STOP, WAIT, THEN START: required when co-administration is contraindicated or dangerous (e.g. involving fluoxetine/fluvoxamine, MAOIs, or moclobemide)',
        'Avoid abrupt withdrawal unless a serious adverse effect demands it',
        'Risks of too-rapid switching: serotonin syndrome, discontinuation symptoms, additive side effects',
        'Always review during the switch — in under-25s, review within 1 week of switching',
      ],
    },

    {
      type: 'image',
      src: '/images/Cross-Taper-Switch.png',
      alt: 'Cross-taper switch diagram: Step 1 — the first antidepressant is gradually reduced and stopped over several weeks. Step 2 — the second antidepressant is introduced at a low dose partway through the reduction of the first, so both are taken simultaneously. Step 3 — the dose of the second antidepressant is increased to the therapeutic dose once the first has been stopped. Note: considered in patients with high risk of relapse; risk of medication interactions and adverse reactions due to combinations; clinicians should base cross-tapering on the half-life of the first antidepressant.',
      caption: 'Cross-taper switch method. The overlap period allows the new drug to reach a therapeutic level before the old one is stopped, minimising discontinuation symptoms and treatment gaps. Duration of overlap is guided by the half-life of each agent.',
    },

    {
      type: 'table',
      headers: ['Switching FROM', 'Switching TO', 'Method', 'Key notes'],
      rows: [
        ['SSRI (not fluoxetine)', 'SSRI (not fluoxetine)', 'Cross-taper cautiously OR taper/stop/start next day', 'Most switches between SSRIs — taper down, start new at low dose'],
        ['Any SSRI/SNRI (not fluoxetine)', 'Venlafaxine', 'Cross-taper cautiously, start at 37.5 mg', ''],
        ['Any SSRI/SNRI (not fluoxetine)', 'Mirtazapine', 'Cross-taper cautiously, start at 15 mg', 'Usually well tolerated; mirtazapine started while SSRI tapers down'],
        ['Any SSRI/SNRI (not fluoxetine)', 'TCA (lofepramine)', 'Cross-taper cautiously; start TCA at low dose', 'Some SSRIs (fluoxetine/paroxetine) raise TCA levels — start even lower'],
        ['FLUOXETINE', 'Any other SSRI or SNRI', 'Stop fluoxetine → wait 4–7 days → start new drug at low dose', 'Long half-life (5–6 days + active metabolite norfluoxetine ~16 days) — CANNOT cross-taper; levels persist for weeks'],
        ['FLUOXETINE', 'TCA', 'Stop fluoxetine → wait 4–7 days → start TCA at LOW dose', 'Fluoxetine inhibits TCA metabolism (CYP2D6) — higher TCA toxicity risk even after 4–7 day gap; titrate slowly'],
        ['FLUOXETINE', 'MAOI or moclobemide', 'Stop fluoxetine → wait 5–6 WEEKS', 'Critical — severe serotonin syndrome risk from residual norfluoxetine'],
        ['Paroxetine / Venlafaxine', 'Any other SSRI/SNRI', 'Taper slowly then cross-taper or direct switch', 'Highest discontinuation risk — taper very gradually; paroxetine can\'t be stopped quickly'],
        ['MAOI (phenelzine/tranylcypromine)', 'Any SSRI, SNRI, or TCA', 'Stop MAOI → wait 2 WEEKS → start new drug at low dose', 'Absolute minimum washout 14 days; even a single SSRI dose during washout can cause fatal serotonin syndrome'],
        ['MAOI (phenelzine/tranylcypromine)', 'Clomipramine', 'Stop MAOI → wait 3 WEEKS', ''],
        ['MOCLOBEMIDE (reversible MAOI)', 'Any antidepressant', 'Stop moclobemide → wait 24 HOURS only', 'Reversible and short-acting — much shorter washout than irreversible MAOIs'],
        ['Any antidepressant', 'MAOI', 'Taper/stop → wait 1–2 weeks → start MAOI', 'From fluoxetine: 5–6 week washout required'],
        ['AGOMELATINE', 'Any antidepressant', 'Stop agomelatine, start new drug immediately — no overlap or delay needed', 'No serotonergic activity'],
        ['TCA', 'MAOI', 'Taper TCA → stop → wait 2 weeks (3 weeks for imipramine)', ''],
        ['Any SSRI/SNRI', 'Moclobemide', 'Taper/stop → wait 1 week', 'From fluoxetine: 5–6 weeks'],
      ],
      caption: 'Key switching combinations. Fluoxetine (long half-life) and MAOIs (potentially fatal interactions) require the most caution. When in doubt, seek specialist advice or check the full AWP/Nottinghamshire switching guidance.',
    },

    {
      type: 'image',
      src: '/images/Switching-guide-for-antidepressants.png',
      alt: 'Example of stopping citalopram 40 mg: 35-year-old male on 40 mg citalopram for 18 months. GP agrees tapering plan of 50% dose reductions every 4 weeks: 40 mg → 20 mg → 10 mg → 5 mg (half a 10 mg tablet or liquid) → arranged review 8 weeks into taper → 2.5 mg (liquid) → 1.25 mg (liquid) → 0.6 mg (liquid) → stop medication.',
      caption: 'Example hyperbolic tapering plan for stopping citalopram 40 mg after 18 months. Each step reduces by ~50% of previous dose every 4 weeks. Liquid preparations are essential for very low doses. Arrange a review mid-taper. Speed is patient-led — pause if withdrawal symptoms appear.',
    },

    {
      type: 'image',
      src: '/images/switching.avif',
      alt: 'Australian Prescriber full switching table: guidelines for switching between specific antidepressants. Rows = FROM drug (SSRIs, fluoxetine, fluvoxamine, vortioxetine, agomelatine, SNRIs, mianserin/mirtazapine, reboxetine, TCAs, clomipramine, moclobemide, MAOIs). Columns = TO drug. Each cell describes the specific switching method with dose guidance.',
      caption: 'Australian Prescriber full antidepressant switching reference table (Keks et al 2016). Key rule: taper means gradual dose reduction in increments every few days over ~4 weeks. Fluoxetine requires washout before starting most agents. MAOIs require strict washout periods in both directions.',
    },

    { type: 'heading', level: 2, text: 'Stopping & Withdrawal' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Withdrawal symptoms — common and often mismanaged',
      items: [
        'Can occur with ANY antidepressant; most severe with venlafaxine and paroxetine (shortest half-life) — warn patients at initiation',
        'Symptoms: dizziness, "brain zaps" (electric shock sensations), nausea, sweating, anxiety, irritability, tearfulness, insomnia, flu-like feeling, palpitations, muscle aches',
        'Onset within a few days of stopping/reducing; most resolve in 1–2 weeks but can last longer',
        'Distinguishing withdrawal from relapse: withdrawal has rapid onset (days), distinctive somatic symptoms (brain zaps, dizziness), and resolves quickly if drug restarted; relapse develops over weeks and mirrors original illness',
        'RULE: antidepressants taken for months → withdraw over weeks; taken for years → withdraw over months',
        'Taper in hyperbolic steps (each step = 50% of previous dose), not equal steps — receptor occupancy is non-linear',
        'Consider liquid preparations or tapering strips for very low doses',
        'If severe withdrawal: restart at previous dose; re-taper more slowly after symptoms resolve',
        'Fluoxetine: fewer withdrawal symptoms due to long half-life; can switch to alternate-day dosing at end of taper',
      ],
    },

    {
      type: 'table',
      headers: ['Drug', 'Stopping guidance'],
      rows: [
        ['Sertraline', 'Reduce over at least 4 weeks (longer after prolonged use)'],
        ['Citalopram / Escitalopram', 'Reduce over at least 4 weeks'],
        ['Fluoxetine', 'Reduce to 20 mg over 2 weeks, then stop; alternate-day dosing can be used at the end'],
        ['Paroxetine', 'SLOW taper over at least 4–8 weeks (often longer) — highest SSRI withdrawal risk; 5 mg liquid helpful'],
        ['Venlafaxine', 'SLOW taper over at least 4 weeks (often months after long-term use); 37.5 mg MR capsules or liquid for very slow taper'],
        ['Duloxetine', 'Reduce over at least 4 weeks'],
        ['Mirtazapine', 'Reduce over at least 4 weeks; anxiety and insomnia on withdrawal'],
        ['TCAs (lofepramine etc)', 'Reduce over at least 4 weeks'],
        ['Vortioxetine', 'Reduce to 10 mg over 1 week, then stop'],
        ['Agomelatine', 'Can stop abruptly — no serotonergic mechanism'],
      ],
      caption: 'Antidepressant stopping guidance. All SSRIs/SNRIs require tapering. Speed is always patient-led — pause at each step until any withdrawal symptoms resolve.',
    },

    { type: 'heading', level: 2, text: 'Serotonin Syndrome' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Serotonin syndrome — recognise and act urgently',
      items: [
        'Caused by excess serotonergic activity — most severe with MAOI + SSRI/SNRI combination; also occurs with single high-dose agent or other combinations',
        'Triad: (1) altered mental status: agitation, confusion, restlessness; (2) neuromuscular: tremor, clonus, hyperreflexia, myoclonus, rigidity; (3) autonomic: hyperthermia, tachycardia, hypertension, diaphoresis, mydriasis, diarrhoea',
        'Non-antidepressant serotonergic agents: tramadol, fentanyl, triptans, selegiline/rasagiline, ondansetron, metoclopramide, bupropion, St John\'s Wort, lithium',
        'Onset rapid — within hours to days of adding a serotonergic drug',
        'Mild: stop offending agent(s), supportive care; Severe: Emergency Department — IV fluids, benzodiazepines, cyproheptadine',
        'Tamoxifen note: fluoxetine, paroxetine, and duloxetine inhibit CYP2D6 and reduce tamoxifen efficacy — use sertraline or citalopram instead',
      ],
    },

    { type: 'heading', level: 2, text: 'Augmentation' },

    {
      type: 'list',
      items: [
        'Augmentation = adding a second agent to an antidepressant that has had partial response',
        'Common in primary care: mirtazapine added to SSRI/SNRI ("California rocket fuel" — dual serotonergic + noradrenergic + histaminergic); well tolerated but significant sedation and weight gain',
        'Lithium augmentation: strong evidence for treatment-resistant depression; initiated in secondary care; GP maintains monitoring (see Lithium note)',
        'Quetiapine (low dose, e.g. 25–50 mg nocte): off-label; good evidence for augmentation; useful if anxiety or sleep disturbance; secondary care usually initiates',
        'Buspirone: weak evidence; sometimes used in GAD',
        'Aripiprazole, olanzapine: antipsychotic augmentation for treatment-resistant depression — secondary care',
        'Lamotrigine: used in bipolar depression alongside mood stabiliser — secondary care',
        'St John\'s Wort: OTC — some evidence for mild–moderate depression; significant drug interactions (enzyme inducer — reduces efficacy of many drugs); advise patients to disclose use',
      ],
    },

    { type: 'heading', level: 2, text: 'Under-18s' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Antidepressants in children and young people — key rules',
      items: [
        'Psychological therapy is first-line for all severity — refer to CAMHS or Talking Therapies; antidepressants should not be prescribed without psychological therapy',
        'FLUOXETINE is the only antidepressant with UK marketing authorisation for depression in children ≥8 years; use first-line if medication needed',
        'Start at 10 mg/day; increase to 20 mg after 1 week if needed; continue for at least 6 months after remission',
        'Sertraline and citalopram are second-line (off-label) — only after CAMHS psychiatrist advice and failed fluoxetine trial',
        'CONTRAINDICATED in under-18s: paroxetine (avoid), venlafaxine (avoid), TCAs (avoid)',
        'Review after 1 WEEK in all under-25s when starting or increasing dose — check for increased suicidality, agitation, or hostility',
        'GP initiation of fluoxetine may be appropriate if CAMHS wait would cause unacceptable clinical risk — alongside Talking Therapies referral',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG222 — Depression in Adults', url: 'https://www.nice.org.uk/guidance/ng222' },
        { label: 'NICE CKS — Depression', url: 'https://cks.nice.org.uk/topics/depression/' },
        { label: 'NICE CKS — Antidepressants', url: 'https://cks.nice.org.uk/topics/antidepressant-treatment/' },
        { label: 'MHRA — Citalopram/Escitalopram QT Interval', url: 'https://www.gov.uk/drug-safety-update/citalopram-and-escitalopram-qt-interval-prolongation' },
        { label: 'Royal College of Psychiatrists — Antidepressants', url: 'https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/antidepressants' },
      ],
    },

  ],
}
