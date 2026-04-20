import type { Note } from '../data/notes'

export const dementia: Note = {
  id: 'dementia',
  title: 'Dementia & Cognitive Impairment',
  subtitle: 'Diagnosis, investigation and management — Alzheimer\'s, vascular, Lewy body, frontotemporal — including drug initiation and monitoring',
  tags: ['neurology', 'mental'],

  body: 'dementia alzheimer vascular lewy body frontotemporal FTD cognitive impairment MCI mild cognitive memory loss confusion MMSE 6-CIT GPCOG donepezil rivastigmine galantamine memantine acetylcholinesterase AChEI NMDA delirium depression anticholinergic burden bradycardia pulse check capacity DVLA driving LPOA LPA power of attorney RESPECT form advanced care planning ACP agitation BPSD behavioural psychological symptoms risperidone haloperidol antipsychotic TSH B12 folate calcium HbA1c haematinics reversible hypothyroidism NPH subdural haematoma SDH neurosyphilis telogen safeguarding carers respite Alzheimer society dementia advisor',

  content: [

    // ── OVERVIEW ──────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Dementia — overview',
      items: [
        '~1 million people in the UK; costs ~£30bn/year (mostly social care); rising with ageing population',
        'Umbrella term: progressive neurodegeneration causing worsening memory, problem-solving, functioning and behaviour — ultimately affecting independence',
        'Most is mixed in the elderly — pure subtypes are less common in primary care than mixed Alzheimer\'s/vascular',
        'Diagnosis is clinical; subtyping requires memory clinic assessment (MRI/CT, sometimes PET/SPECT)',
        'Early diagnosis matters: enables ACP, legal planning (LPoA), access to support services and medications before capacity lost',
      ],
    },

    {
      type: 'image',
      src: '/images/dementia types.png',
      alt: 'Dementia umbrella diagram showing proportions: Alzheimer\'s disease 60-70%, vascular dementia 10-20%, frontotemporal dementia 10%, Lewy body dementia 5%, other dementias 5%',
      caption: 'Dementia is an umbrella term. Alzheimer\'s disease accounts for 60–70% of cases; vascular dementia 10–20%; frontotemporal and Lewy body 5–10% each. Mixed dementia (Alzheimer\'s + vascular) is the most common presentation in older adults.',
    },

    // ── TYPES ────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Types of Dementia' },

    {
      type: 'image',
      src: '/images/dementia-types-symptoms_0.png',
      alt: 'NIH infographic comparing four types of dementia: Alzheimer\'s disease (amyloid plaques, tau tangles), frontotemporal dementia (tau and TDP-43 accumulation), Lewy body dementia (alpha-synuclein deposits), and vascular dementia (blood clots disrupting flow)',
      caption: 'Brain pathology in the four main dementia subtypes. Alzheimer\'s: amyloid plaques and tau tangles. FTD: tau/TDP-43 in frontal and temporal lobes. Lewy body: alpha-synuclein disrupts chemical messengers. Vascular: ischaemia from blood clots or small vessel disease.',
    },

    {
      type: 'table',
      headers: ['Type', '% of cases', 'Key features', 'Drug treatment?'],
      rows: [
        ['Alzheimer\'s disease', '60–70%', 'Insidious onset; memory loss predominant early; gradual global decline; amyloid plaques + tau tangles; onset typically mid-60s+', 'Yes — AChEI (mild-moderate); memantine (moderate-severe)'],
        ['Vascular dementia', '10–20%', 'Step-wise decline after strokes/TIAs or gradual with small vessel disease; focal neuro signs; CVD risk factors prominent; onset >65', 'No specific drug — manage CVD risk factors aggressively'],
        ['Lewy body dementia (DLB)', '5–10%', 'Fluctuating cognition; vivid visual hallucinations; parkinsonism (rigidity, falls); REM sleep disorder; onset >50; AVOID antipsychotics (fatal sensitivity)', 'AChEI or memantine (similar to Alzheimer\'s)'],
        ['Frontotemporal dementia (FTD)', '~10%', 'Personality/behaviour change early (disinhibition, apathy, compulsions); language problems; memory relatively preserved; onset 45–64', 'No — AChEI/memantine NOT indicated for FTD'],
        ['Parkinson\'s dementia (PDD)', 'Rare', 'Dementia developing >1 year after Parkinson\'s motor symptoms; overlap with DLB; executive dysfunction', 'Rivastigmine licensed; AChEI generally'],
        ['Other (CJD, HIV, Huntington\'s)', 'Rare', 'CJD: rapidly progressive; HIV: 50% of AIDS; Huntington\'s: autosomal dominant chorea + dementia; neurosyphilis: reversible', 'Specific to cause'],
      ],
    },

    // ── EARLY FEATURES ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Early Features vs Normal Ageing' },

    {
      type: 'image',
      src: '/images/Table-3.-Early-features-of-dementia.jpg',
      alt: 'Table comparing normal cognition vs early dementia across six domains: memory (occasional lapses vs loss of recent events), orientation (full vs variable disorientation), judgement (solves problems vs difficulty with complex problems), outside home (independent vs not fully independent), at home (activities maintained vs difficult tasks abandoned), personal care (fully capable vs needs prompting)',
      caption: 'Early dementia versus normal cognitive ageing. Occasional forgetfulness is normal; loss of memory for recent events, disorientation and functional decline are not. The key question: does it affect daily functioning?',
    },

    // ── DIFFERENTIAL DIAGNOSIS ────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Differential Diagnosis' },

    {
      type: 'table',
      headers: ['Diagnosis', 'Key distinguishing features', 'Action'],
      rows: [
        ['Delirium', 'Acute onset (hours–days); fluctuating consciousness; identifiable trigger (infection, constipation, pain, medication, environment change); typically reversible', 'Find and treat cause; re-assess cognition when recovered'],
        ['Depression', 'Significant overlap (pseudodementia); low mood, anhedonia, sleep disturbance; may present as memory concerns; cognitive symptoms often improve with treatment', 'PHQ-9/HADS; treat depression; re-assess in 3 months'],
        ['Mild Cognitive Impairment (MCI)', 'Memory loss beyond normal ageing but no functional impairment; common outcome of memory clinic referral; 10–15%/year conversion to dementia', 'Annual review; address modifiable risk factors; refer if deteriorates'],
        ['Sensory impairment', 'Poor hearing or vision can mimic confusion; often overlooked', 'Assess vision/hearing; refer for aids if needed; eye/hearing test every 2 years'],
        ['Functional memory disorder', 'Patient concerned about memory but actually tests well; significant distress; psychiatric/health anxiety overlap', 'Validate concerns; reassure; CBT if distressing'],
        ['Anticholinergic drug effects', 'Oxybutynin, amitriptyline, antihistamines, antipsychotics — can all cause or worsen cognitive impairment', 'Review anticholinergic burden (use ACB scale); stop/switch where possible'],
      ],
    },

    // ── REVERSIBLE CAUSES ─────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'tip',
      title: 'Always exclude reversible causes of cognitive impairment',
      items: [
        'Metabolic: hypothyroidism (TSH), B12/folate deficiency, hypercalcaemia, hyperglycaemia',
        'Intracranial: chronic subdural haematoma (SDH — history of falls/head injury), space-occupying lesion, normal pressure hydrocephalus (NPH — triad: gait disturbance, urinary incontinence, dementia), neurosyphilis',
        'Chronic substance use: alcohol, benzodiazepines, opiates',
        'Medications: anticholinergics, sedatives — review full drug history and ACB score',
        'Infection: syphilis serology if risk factors; HIV if relevant history',
      ],
    },

    // ── HISTORY & EXAMINATION ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'History & Examination' },

    {
      type: 'list',
      items: [
        'Collateral history essential — ask family/carer (with patient consent); use IQCODE questionnaire if collateral available',
        'Memory loss: recent events (short-term worse than long-term in Alzheimer\'s); ask for specific examples',
        'Impact on ADLs: cooking, finances, driving, appointments, medication compliance, getting lost',
        'Behaviour and mood: personality change, disinhibition (FTD), visual hallucinations (DLB), agitation',
        'Sleep: REM sleep disorder (DLB), disruption patterns',
        '"Face-saving sign": patient deflects questions to carer; "head-turning sign": patient turns to carer to answer',
        'Medication review: anticholinergic burden (ACB scale); polypharmacy; sedatives; opiates',
        'Vascular risk factors: hypertension, diabetes, smoking, obesity, AF — especially relevant for vascular dementia',
        'Movement: parkinsonism features (rigidity, bradykinesia, tremor) — DLB or PDD',
        'Onset speed: sudden/stepwise = vascular; gradual = Alzheimer\'s; rapid = consider CJD, prion',
      ],
    },

    // ── COGNITIVE ASSESSMENT ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Cognitive Assessment' },

    {
      type: 'callout',
      variant: 'info',
      title: '6-CIT — recommended validated tool in primary care (score ≥8 = significant impairment)',
      items: [
        'Scoring: each correct answer = 0 points; weighted scoring for incorrect answers',
        'What year is it? (4 points if wrong)',
        'What month is it? (3 points if wrong)',
        'What time is it roughly? (3 points if wrong)',
        'Ask patient to remember: "John Smith, 42 West Street" — tested at end',
        'Count backwards from 20 to 1 (4 points if wrong)',
        'Say the months of the year in reverse (4 points if wrong)',
        'Recall the name and address: 5 parts, 2 points each (max 10 points)',
        'Total /28 — score ≥8 suggests significant cognitive impairment; refer to memory clinic',
        'GPCOG better for initial screening; MMSE too long and lacks sensitivity in early impairment',
      ],
    },

    {
      type: 'calclink',
      calculators: [
        { id: '6cit', label: '6-CIT Calculator', subtitle: 'Six Item Cognitive Impairment Test — score ≥8 suggests significant impairment' },
      ],
    },

    // ── INVESTIGATIONS ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Investigations & Referral' },

    {
      type: 'table',
      headers: ['Investigation', 'Rationale'],
      rows: [
        ['FBC', 'Anaemia, macrocytosis (B12/folate deficiency)'],
        ['Ferritin, B12, folate', 'Haematinic deficiency as reversible cause'],
        ['TSH', 'Hypothyroidism — common reversible cause'],
        ['U&E, calcium', 'Electrolyte disturbance; hypercalcaemia'],
        ['HbA1c, glucose', 'Hyperglycaemia; diabetic risk for vascular dementia'],
        ['LFTs', 'Alcohol-related liver disease; drug monitoring baseline'],
        ['Urine MSU', 'Exclude UTI causing delirium — common confounder'],
        ['ECG', 'Before initiating AChEI — assess for conduction abnormalities; baseline HR'],
        ['CT head (memory clinic)', 'Exclude SDH, SOL, NPH, vascular change; MRI preferred if available and tolerated'],
      ],
      caption: 'Request memory bloods + MSU + ECG in primary care before referral. Imaging is arranged by the memory clinic unless urgent (e.g. rapid onset, focal signs).',
    },

    {
      type: 'list',
      items: [
        'Refer to memory clinic if: no reversible cause identified on basic bloods + examination; geriatrician/old-age psychiatrist will assess, arrange MRI (or CT if can\'t lie still), consider PET/SPECT if subtype unclear',
        'Urgent/same-week referral to neurology or geriatrics: age <65, rapidly progressive decline (weeks), focal neurological signs, suspected CJD, HIV-related, unusual features',
        'Mild Cognitive Impairment: advise annual review; address modifiable CVD/lifestyle risk factors (BP, DM, smoking, exercise, social stimulation)',
        'Diagnosis does not require specialist — NICE allows GPs with specialist expertise to diagnose; most GPs should refer to memory service',
      ],
    },

    // ── DRUG TREATMENT ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Drug Treatment' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Which drug for which dementia?',
      items: [
        'Alzheimer\'s (mild–moderate): AChEI — donepezil 1st line, rivastigmine 2nd, galantamine 3rd',
        'Alzheimer\'s (moderate–severe): memantine — or add to AChEI if progressing on one',
        'Lewy body dementia & Parkinson\'s dementia: AChEI (rivastigmine has specific licence for PDD) or memantine if AChEI intolerant',
        'Mixed AD/vascular (predominant AD component): AChEI ± memantine',
        'Pure vascular dementia: NO specific drug — treat CVD risk factors only',
        'Frontotemporal dementia: NO AChEI or memantine — not indicated',
        'AChEI/memantine do NOT reverse dementia — modest cognitive/functional benefit over 12–24 months; not all patients respond',
        'Continue as long as there is benefit; do NOT stop solely because of disease severity',
        'Treatment requires caregiver available to monitor compliance and effects',
      ],
    },

    {
      type: 'image',
      src: '/images/dementia drugs.avif',
      alt: 'Summary chart of dementia drug treatments including donepezil, rivastigmine, galantamine and memantine with their indications, dosing and monitoring requirements',
      caption: 'Overview of dementia pharmacotherapy. Donepezil is the preferred first-line AChEI in primary care. Pulse monitoring is required for all AChEIs (not memantine). eGFR check required before memantine.',
    },

    { type: 'heading', level: 3, text: 'AChEI Dosing & Monitoring' },

    {
      type: 'table',
      headers: ['Drug', 'Starting dose', 'Titration', 'Max dose', 'Notes'],
      rows: [
        ['Donepezil (1st line)', '5 mg nocte', 'Increase to 10 mg nocte after 4 weeks if tolerated', '10 mg OD', 'No renal dose adjustment. Mild-moderate hepatic: titrate to tolerability. Use orodispersible if swallowing difficulties or severe BPSD'],
        ['Rivastigmine (2nd line)', '1.5 mg BD with meals', 'Increase by 1.5 mg BD every 2 weeks', '6 mg BD', 'Transdermal patch available for swallowing difficulties or GI side effects. Re-titrate from start if interrupted >several days'],
        ['Galantamine (3rd line)', '4 mg BD for 4 weeks, then 8 mg BD × 4 weeks', 'Can increase to 12 mg BD if tolerated', '12 mg BD (or 24 mg OD MR)', 'Modified release capsule: 8 mg OD → 16 mg OD → 16–24 mg OD. Ensure adequate fluid intake. MHRA warning: rare serious skin reactions (SJS). Avoid if eGFR <9'],
        ['Memantine', '5 mg OD week 1 → 10 mg week 2 → 15 mg week 3 → 20 mg from week 4', 'Starter pack available', '20 mg OD', 'Check eGFR: reduce to 10 mg if eGFR 5–29; avoid if eGFR <5. No pulse check needed. Can be used as add-on to AChEI in moderate-severe AD'],
      ],
      caption: 'All AChEIs require baseline pulse check and ECG review. Memantine requires baseline eGFR.',
    },

    { type: 'heading', level: 3, text: 'AChEI Pulse Monitoring Protocol' },

    {
      type: 'table',
      headers: ['Pulse', 'Action'],
      rows: [
        ['>60 bpm', 'Start/continue AChEI. Routine pulse checks at baseline, 1 month, 3 months, then annually'],
        ['50–60 bpm (asymptomatic)', 'Start/continue AChEI; check pulse again after 1 week. Carry out routine pulse checks'],
        ['50–60 bpm (symptomatic: syncope, funny turns)', 'Withhold AChEI; arrange ECG to look for underlying cause. If cause unrelated to drug, consider retrial. If pacemaker fitted, prescribe as usual'],
        ['<50 bpm', 'Withhold AChEI; arrange ECG. Only restart if cause found to be unrelated, or pacemaker fitted'],
        ['Bradycardia on rate-limiting drugs (beta-blocker, CCB, digoxin)', 'Consider reviewing/switching rate-limiting drug first before starting AChEI. If pacemaker fitted, proceed as normal'],
      ],
      caption: 'Pulse checks required at: baseline, 1 month, 3 months, annually and 1 week after any dose increase. Memantine does NOT require pulse monitoring.',
    },

    { type: 'heading', level: 3, text: 'Side Effects' },

    {
      type: 'table',
      headers: ['Drug', 'Very common / common', 'Watch out for'],
      rows: [
        ['Donepezil', 'Nausea, vomiting, diarrhoea, headache, dizziness, muscle cramps, fatigue', 'Vivid dreams / nightmares / insomnia — try switching to morning dose. Bradycardia — check pulse at every review. Rare: hepatotoxicity, seizures'],
        ['Rivastigmine', 'Nausea, vomiting, diarrhoea, anorexia, dizziness, headache', 'GI side effects more pronounced than donepezil — consider patch formulation. Re-titrate from start if interrupted'],
        ['Galantamine', 'Nausea, vomiting, diarrhoea, dizziness, headache', 'Arrhythmias more common than with donepezil. Rare: serious skin reactions (SJS) — stop at first rash'],
        ['Memantine', 'Dizziness, headache, drowsiness, constipation, hypertension', 'Confusion, hallucinations (uncommon). No bradycardia risk. Rare: seizures, hepatitis'],
      ],
      caption: 'Side effects are most common on starting or dose increase — usually settle within a few days. Reduce dose before stopping if not severe.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'AChEI cautions — check before prescribing',
      items: [
        'Cardiac: sick sinus syndrome, 2nd/3rd degree heart block (do NOT prescribe if unpaced), supraventricular conduction abnormalities — ↑ bradycardia risk',
        'GI: active or history of peptic ulceration — ↑ ulcer risk',
        'Respiratory: asthma/COPD — ↑ bronchospasm risk',
        'Neurological: history of seizures/epilepsy — ↑ convulsion risk',
        'If side effects severe: discontinue. If mild-moderate: reduce dose first, then re-titrate',
        'If interrupted for several days: always re-titrate from the starting dose',
        'Review at 4 weeks, 3 months, then 6-monthly to yearly — carer view often more informative than cognitive scales',
      ],
    },

    // ── MANAGING BPSD ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Managing BPSD (Behavioural & Psychological Symptoms)' },

    {
      type: 'table',
      headers: ['Symptom', 'First-line approach', 'Pharmacological (only if severe)'],
      rows: [
        ['Agitation / aggression', 'ALWAYS rule out delirium first (UTI, pain, constipation, environment). Social/sensory/environmental interventions: music, familiar objects, routine, lighting', 'Risperidone 0.25–1 mg OD/BD or haloperidol 0.5 mg — ONLY if severe distress or risk to self/others; lowest effective dose; review within 6 weeks; aim to stop within 12 weeks. AVOID antipsychotics in Lewy body (risk of fatal neuroleptic sensitivity)'],
        ['Depression / anxiety', 'CBT if patient able to engage; treat underlying triggers; social prescribing, reminiscence therapy', 'Avoid antidepressants unless pre-existing mental health problem; if required, use sertraline (avoid TCAs — anticholinergic)'],
        ['Sleep disturbance', 'Improve sleep hygiene; increase daytime activity/exercise; exposure to natural daylight; structured daily routine', 'Do NOT use benzodiazepines, Z-drugs or melatonin routinely — limited evidence; worsens falls/confusion'],
        ['Wandering', 'Environmental: door alarms, GPS tracker (wrist alert bracelet), structured daytime activity', 'No effective pharmacological treatment; avoid sedation'],
        ['Refusing medication', 'If patient has capacity and refuses — respect their decision (cannot give covertly). If lacks capacity: best interests meeting with NOK, IMCA; covert medication may be considered as last resort with formal documentation. If DOLs required, apply via local authority', '—'],
      ],
    },

    // ── GP POST-DIAGNOSIS DUTIES ──────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'GP Duties Post-Diagnosis' },

    {
      type: 'list',
      items: [
        'Arrange face-to-face appointment after diagnosis: answer questions, support patient and family, explain condition and plan',
        'Named GP: every patient with dementia should have a named GP for continuity',
        'Annual structured review: cognition, functioning, mood, carer wellbeing, medication review, advance care planning update',
        'Medication review: assess anticholinergic burden (ACB scale) — stop/switch anticholinergics where possible',
        'Physical needs: nutrition, hydration, falls risk (refer physio), infection prevention, hearing/vision tests every 2 years',
        'Referrals as needed: physiotherapy, OT, SALT (swallowing), dietician, social prescriber',
        'Cognitive stimulation: group cognitive stimulation therapy, reminiscence therapy, puzzles/games — evidenced for mild-moderate dementia',
        'Social care: refer for care package assessment; signpost to local council/gov websites; consider carer stress assessment',
        'Carer support: refer to Carers UK (carersuk.org); coded as carer in system; carer training and support programmes; respite care/breaks',
        'Safeguarding: be alert to abuse, self-neglect, exploitation of a vulnerable adult',
      ],
    },

    // ── ADVANCE CARE PLANNING & LEGAL ─────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Advance Care Planning & Legal' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Discuss early — while the patient has capacity',
      items: [
        'Lasting Power of Attorney (LPoA): encourage patient to register both health/welfare AND property/financial LPoA early — Age UK website',
        'Advance Directives (ADRT): document specific refusals of treatment (e.g. resuscitation, artificial feeding) while patient has capacity — legally binding',
        'RESPECT form: complete as dementia progresses; include CPR preferences, hospital admission preferences, preferred place of care and death',
        'Preferred Place of Care (PPC): most patients prefer to die at home or in a care home — document early and communicate with out-of-hours',
        'Mental Capacity Act (MCA): assess capacity decision-by-decision; assume capacity unless proven otherwise; if lacking capacity — best interests principle; consider IMCA for major decisions without family',
        'Deprivation of Liberty Safeguards (DoLS): if care home or hospital restricts freedom "in the person\'s best interests" — must be formally authorised by local authority',
      ],
    },

    // ── DRIVING & SAFETY ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Driving & Safety' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'DVLA — patient has a legal duty to notify',
      items: [
        'Patient must notify DVLA and their insurer of a dementia diagnosis; must stop driving unless DVLA confirms fitness after medical assessment',
        'Early dementia with good function: DVLA arranges formal medical (cognitive assessment, on-road test via local Driving Mobility centre); licence may continue with 1-year review',
        'Group 2 licence (lorry, bus, taxi): revoked on diagnosis — no exceptions',
        'Annual review by GP: document driving discussions and cognitive status',
        'If patient refuses to notify or you believe they are still driving: GP may breach confidentiality and notify DVLA directly after warning patient — document decision carefully',
        'Home safety: assess fire risk (gas hob, unattended cooking), wandering, falls; consider wrist alert bracelet / GPS tracker; remove trip hazards',
        'Firearms licence: must notify police if patient holds a licence — patient may lack safe capacity to hold firearms',
      ],
    },

    // ── END STAGE DEMENTIA ────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'End Stage Dementia' },

    {
      type: 'list',
      items: [
        'Signs of advancing/end-stage dementia: unable to recognise family members, unable to hold meaningful conversation',
        'Complete dependence on carers for all ADLs (washing, dressing, feeding, toileting)',
        'Incontinence (urinary and faecal)',
        'Dysphagia — aspiration risk; refer SALT; discuss DNACPR and artificial feeding with family',
        'Recurrent infections (aspiration pneumonia, UTIs, pressure sores)',
        'Recurrent delirium',
        'Ensure RESPECT form/advanced directive in place; confirm preferred place of death; palliative care team involvement',
        'Initiate anticipatory medications for end-of-life comfort (consider syringe driver prescription)',
        'Support carers: many will have been caring for years; ensure bereavement support offered',
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG97 — Dementia Guideline', url: 'https://www.nice.org.uk/guidance/ng97' },
        { label: 'NICE CKS — Dementia', url: 'https://cks.nice.org.uk/topics/dementia/' },
        { label: 'Alzheimer\'s Society', url: 'https://www.alzheimers.org.uk' },
        { label: 'DVLA — Dementia & Driving', url: 'https://www.gov.uk/dementia-and-driving' },
        { label: 'Carers UK', url: 'https://www.carersuk.org' },
        { label: 'Age UK — LPoA', url: 'https://www.ageuk.org.uk/information-advice/money-legal/legal-issues/power-of-attorney/' },
      ],
    },

  ],
}
