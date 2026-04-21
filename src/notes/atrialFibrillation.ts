import type { Note } from '../data/notes'

export const atrialFibrillation: Note = {
  id: 'atrialFibrillation',
  title: 'Atrial Fibrillation (AF)',
  subtitle: 'Diagnosis, CHA\u2082DS\u2082-VASc, DOACs, rate control & rhythm control',
  tags: ['symptoms', 'cardiology'],
  body: 'atrial fibrillation AF flutter PAF paroxysmal persistent permanent ECG DOAC anticoagulation CHA2DS2-VASc ORBIT HAS-BLED apixaban dabigatran edoxaban rivaroxaban warfarin bisoprolol diltiazem digoxin cardioversion ablation rate control rhythm control stroke palpitations',
  content: [

    // ── Diagnosis ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Diagnosis & ECG Features' },

    { type: 'para', text: 'AF is the most common sustained cardiac arrhythmia. Suspect in patients with palpitations, breathlessness, chest pain, dizziness, fatigue or a new stroke/TIA. An irregular pulse on examination is highly suggestive.' },

    { type: 'image', src: '/images/af-ecg-12lead.jpg', alt: '12-lead ECG showing atrial fibrillation with irregularly irregular rhythm and absent P waves', caption: '12-lead ECG showing AF: no P waves, irregularly irregular QRS complexes, fibrillatory baseline' },

    { type: 'image', src: '/images/af-rhythms.jpg', alt: 'Rhythm strip comparison: atrial fibrillation, atrial flutter and multifocal atrial tachycardia', caption: 'Rhythm strip comparison \u2014 AF (irregularly irregular, no P waves), atrial flutter (sawtooth flutter waves at ~300bpm), multifocal atrial tachycardia (3+ P-wave morphologies)' },

    { type: 'table',
      caption: 'ECG features of AF',
      headers: ['Feature', 'Description'],
      rows: [
        ['P waves', 'Absent \u2014 replaced by fibrillatory baseline (f-waves), irregular and chaotic'],
        ['QRS rhythm', 'Irregularly irregular \u2014 no repeating pattern'],
        ['QRS morphology', 'Usually narrow (normal) unless bundle branch block or aberrant conduction'],
        ['Rate', 'Ventricular rate typically 100\u2013160bpm if untreated; may be slow if on rate-control drugs'],
        ['Baseline', 'Fine or coarse fibrillatory oscillations between QRS complexes'],
      ]
    },

    { type: 'heading', level: 3, text: 'Classification' },
    { type: 'table',
      headers: ['Type', 'Definition', 'Notes'],
      rows: [
        ['Paroxysmal (PAF)', 'Self-terminating, usually within 48h (max 7 days)', 'Still needs anticoagulation if risk factors present; often missed \u2014 request Holter or loop recorder'],
        ['Persistent', 'Lasts >7 days or requires cardioversion to restore sinus rhythm', 'May be converted to sinus rhythm with appropriate intervention'],
        ['Long-standing persistent', '>1 year, rhythm control still being attempted', 'Harder to cardiovert successfully; atrial remodelling'],
        ['Permanent', 'Accepted that AF is ongoing; no attempt to restore SR', 'Focus on rate control and anticoagulation only'],
      ]
    },

    { type: 'heading', level: 3, text: 'Differentials / Mimics' },
    { type: 'list', items: [
      'Atrial flutter: sawtooth flutter waves at ~300bpm, typically 2:1 block giving ventricular rate ~150bpm; regular or regularly irregular',
      'Multifocal atrial tachycardia (MAT): 3+ P-wave morphologies, associated with COPD exacerbations',
      'Sinus arrhythmia: irregular but clearly P waves visible, variation with breathing',
      'Frequent ectopics: irregular but P waves present with normal QRS between ectopics',
    ]},

    { type: 'heading', level: 3, text: 'Common Risk Factors / Causes' },
    { type: 'list', items: [
      'Hypertension (most common cause in UK)',
      'Ischaemic heart disease',
      'Valvular heart disease (especially mitral stenosis/regurgitation)',
      'Heart failure',
      'Thyrotoxicosis \u2014 check TFTs in all new AF',
      'Excess alcohol intake',
      'Obesity and OSA',
      'Infection / sepsis (often transient AF)',
      'Post-surgery (especially cardiac / thoracic)',
      'Electrolyte imbalance (hypokalaemia, hypomagnesaemia)',
      'Idiopathic (lone AF) \u2014 younger patients with structurally normal heart',
    ]},

    // ── Red Flags ──────────────────────────────────────────────────
    { type: 'callout', variant: 'danger', title: 'Acute Referral \u2014 Same-day / Emergency', items: [
      'Loss of consciousness or near-syncope',
      'Acute significant breathlessness and/or light-headedness',
      'Chest pain \u2014 ?ACS with AF',
      'TIA or stroke symptoms',
      'Haemodynamic instability (SBP <90, HR >150, hypoperfusion)',
      'New AF with severe heart failure (pulmonary oedema)',
      'Suspected acute MI with AF',
    ]},

    // ── Investigations ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Initial Investigations' },

    { type: 'table',
      headers: ['Investigation', 'Purpose'],
      rows: [
        ['12-lead ECG', 'Confirm AF diagnosis; identify LVH, ischaemia, WPW, BBB'],
        ['FBC', 'Anaemia as cause; baseline before anticoag'],
        ['U&E / CrCl (Cockcroft-Gault)', 'Renal function for DOAC dosing \u2014 MUST use actual body weight; NOT eGFR'],
        ['LFTs', 'Liver disease (raised INR, thrombocytopenia); DOAC safety'],
        ['TFTs', 'Thyrotoxicosis is common reversible cause'],
        ['Calcium, Magnesium', 'Electrolyte causes of AF'],
        ['HbA1c / glucose', 'Diabetes as risk factor'],
        ['ECHO', 'After rate controlled; prior to cardioversion (LA size, LAA thrombus); if structural disease/murmur suspected'],
        ['24\u201372h Holter / ambulatory ECG', 'Suspected paroxysmal AF with normal resting ECG; ILR/loop recorder if still unconfirmed'],
        ['Chest X-ray', 'If respiratory cause suspected; heart failure signs'],
      ]
    },

    { type: 'callout', variant: 'warning', title: 'Renal Function for DOAC Dosing', items: [
      'Use Cockcroft-Gault formula with ACTUAL body weight \u2014 NOT eGFR, NOT ideal body weight',
      'CrCl (ml/min) = (140 \u2212 age) \u00d7 weight(kg) / (serum creatinine \u00d7 1.23) \u2014 multiply by 0.85 for women',
      'Available at: MDCalc Cockcroft-Gault calculator',
      'CrCl determines which DOAC dose and whether contraindicated',
    ]},

    // ── Management Overview ────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management Framework: AC-DC' },

    { type: 'para', text: 'The AC-DC framework covers the two core decisions in AF management: Anticoagulation (AC) to prevent stroke, and Decide rate vs rhythm Control (DC).' },

    { type: 'image', src: '/images/af-management-flowchart.png', alt: 'AF management flowchart: confirmed AF vs suspected AF, haemodynamic compromise pathway, CHA2DS2-VASc scoring, rate control options', caption: 'AF management pathway \u2014 confirmed AF (left): haemodynamic compromise \u2192 A&E; stable \u2192 CHA\u2082DS\u2082-VASc + rate control. Suspected AF (right): GP assessment, refer if no reversible cause' },

    // ── Stroke Risk ────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Stroke Risk \u2014 CHA\u2082DS\u2082-VASc Score' },

    { type: 'callout', variant: 'tip', title: 'Interactive Calculator Available', items: [
      'Use the CHA\u2082DS\u2082-VASc calculator in the Calculators tab \u2014 tick each risk factor for an instant score, annual stroke rate and anticoagulation recommendation.',
    ]},

    { type: 'para', text: 'Calculate for all patients with AF (including PAF). Anticoagulation reduces stroke risk by approximately 2/3. For most patients the benefits of anticoagulation outweigh bleeding risks.' },

    { type: 'table',
      caption: 'CHA\u2082DS\u2082-VASc scoring',
      headers: ['Factor', 'Points'],
      rows: [
        ['C \u2014 Congestive heart failure / LV dysfunction', '1'],
        ['H \u2014 Hypertension', '1'],
        ['A\u2082 \u2014 Age \u226575 years', '2'],
        ['D \u2014 Diabetes mellitus', '1'],
        ['S\u2082 \u2014 Stroke / TIA / systemic embolism (history)', '2'],
        ['V \u2014 Vascular disease (prior MI, PAD, aortic plaque)', '1'],
        ['A \u2014 Age 65\u201374 years', '1'],
        ['Sc \u2014 Sex category female', '1'],
        ['Maximum score', '9'],
      ]
    },

    { type: 'image', src: '/images/af-chadsvasc-table.png', alt: 'CHA2DS2-VASc risk factor scoring table showing each letter, factor and points', caption: 'CHA\u2082DS\u2082-VASc scoring reference' },

    { type: 'table',
      caption: 'Anticoagulation decision by CHA\u2082DS\u2082-VASc score',
      headers: ['Score', 'Stroke rate (%/yr)', 'Decision'],
      rows: [
        ['0', '0%', 'No anticoagulation'],
        ['1 (male only)', '1.3%', 'Consider anticoagulation \u2014 patient discussion, weigh risk/benefit'],
        ['1 (female sex only)', '0%', 'No anticoagulation \u2014 female sex alone does not count as a risk factor'],
        ['\u22652 (or \u22651 in men with another risk factor)', '2.2\u201315%', 'Offer anticoagulation'],
      ]
    },


    { type: 'callout', variant: 'info', title: 'Anticoagulation Decision \u2014 Key Points', items: [
      'Applies to all AF types including PAF and post-cardioversion',
      'Falls risk alone is NOT a reason to withhold anticoagulation (falling rarely causes major intracranial bleed)',
      'Age alone should not be used to withhold anticoag \u2014 risk of stroke rises steeply with age',
      'DOACs are first-line; start promptly \u2014 every day without anticoag is a stroke risk',
      'Patient-led decision: use decision aid tools; document discussion clearly',
      'If already on warfarin with good INR control (TTR >70%), may continue warfarin',
      'Anticoagulation is lifelong \u2014 AF recurs even after cardioversion or ablation',
    ]},

    // ── Bleeding Risk ──────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Bleeding Risk \u2014 ORBIT Score' },

    { type: 'callout', variant: 'tip', title: 'Interactive Calculator Available', items: [
      'Use the ORBIT-AF calculator in the Calculators tab \u2014 tick each factor for bleeding risk category, bleeds per 100 patient-years and advice on modifiable risk factors.',
    ]},

    { type: 'table',
      caption: 'ORBIT bleeding risk score (preferred over HAS-BLED in primary care)',
      headers: ['Factor', 'Points'],
      rows: [
        ['O \u2014 Older age: >75 years', '1'],
        ['R \u2014 Reduced haemoglobin (Hb <130 men, <120 women) / haematocrit <40% men, <36% women', '2'],
        ['B \u2014 Bleeding history (prior major bleed or predisposition to bleed)', '2'],
        ['I \u2014 Insufficient renal function: eGFR <60 or on dialysis', '1'],
        ['T \u2014 Treatment with antiplatelets or NSAIDs', '1'],
        ['Maximum score', '7'],
      ]
    },

    { type: 'image', src: '/images/af-orbit-scoring.jpg', alt: 'ORBIT-AF scoring system table showing variables and points for bleeding risk prediction', caption: 'ORBIT-AF scoring reference' },

    { type: 'table',
      headers: ['ORBIT Score', 'Bleeding Risk', 'Major bleeds per 100 pt-years'],
      rows: [
        ['0\u20132', 'Low', '~2.4/year'],
        ['3', 'Medium', '~4.7/year'],
        ['4+', 'High', '~8.1/year'],
      ]
    },


    { type: 'callout', variant: 'warning', title: 'High ORBIT/HAS-BLED Score', items: [
      'High bleeding score is NOT a reason to withhold anticoagulation alone',
      'Instead: identify and address modifiable risk factors (BP control, avoid NSAIDs, address heavy alcohol use, anaemia management)',
      'Use the score to justify closer monitoring and shared decision making',
    ]},

    // ── DOACs ──────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'DOAC Prescribing \u2014 Doses & Dose Reduction' },

    { type: 'image', src: '/images/af-doac-treatment-table.jpg', alt: 'DOAC treatment regimens in Non-Valvular AF: dabigatran, rivaroxaban, apixaban, edoxaban with starting and reduced doses', caption: 'DOAC treatment regimens for non-valvular AF \u2014 standard vs reduced doses with dose reduction criteria' },

    { type: 'table',
      caption: 'DOAC dosing in non-valvular AF (all require CrCl \u226515ml/min)',
      headers: ['DOAC', 'Standard Dose', 'Reduced Dose', 'Dose Reduction Criteria', 'Contraindicated if'],
      rows: [
        ['Apixaban', '5mg BD', '2.5mg BD', '\u22652 of: age \u226580, weight \u226460kg, serum creatinine \u2265133 \u03bcmol/L\nOR CrCl 15\u201329ml/min', 'CrCl <15ml/min'],
        ['Dabigatran', '150mg BD', '110mg BD', 'Age >80; on verapamil; consider reduction for: age 75\u201380, CrCl 30\u201350, reflux/GORD/oesophagitis, increased bleed risk', 'CrCl <30ml/min'],
        ['Edoxaban', '60mg OD', '30mg OD', '\u22651 of: weight \u226460kg; CrCl 15\u201350ml/min; on P-gp inhibitor (ciclosporin, dronedarone, erythromycin, ketoconazole)\nNote: avoid if CrCl >95ml/min (reduced efficacy)', 'CrCl <15ml/min'],
        ['Rivaroxaban', '20mg OD with food', '15mg OD with food', 'CrCl 15\u201349ml/min', 'CrCl <15ml/min'],
        ['Warfarin', 'Target INR 2\u20133', '\u2014', 'Required for: mechanical valve, moderate-severe mitral stenosis, antiphospholipid syndrome', 'N/A \u2014 used when DOACs contraindicated'],
      ]
    },

    { type: 'image', src: '/images/af-doac-visual-guide.jpg', alt: 'NOAC dosage guidance visual chart showing dose adjustments by renal function (CrCl) thresholds for apixaban, dabigatran, edoxaban and rivaroxaban', caption: 'NOAC dosage by CrCl: 80ml/min (normal), 50ml/min (mild impairment), 30ml/min (moderate), 15ml/min (severe), dialysis' },

    { type: 'callout', variant: 'info', title: 'Which DOAC to Choose?', items: [
      'Edoxaban is NHS England first-line choice for new initiations (procurement guidance)',
      'Apixaban: historically first-line; BD dosing; most safety evidence; preferred if GI intolerance issues',
      'Rivaroxaban / Edoxaban: once-daily \u2014 better adherence but missed dose = gap in cover',
      'Dabigatran: avoid if CrCl <30; avoid if reflux/oesophagitis; can be reversed with idarucizumab',
      'No large head-to-head RCT between DOACs; choice should be shared decision with patient',
      'Patients on warfarin with good TTR (>70%): no need to switch unless patient preference',
      'DOAC contraindications: mechanical heart valve, moderate-severe mitral stenosis, antiphospholipid syndrome',
    ]},

    // ── DOAC Monitoring ────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'DOAC Monitoring' },

    { type: 'image', src: '/images/af-doac-monitoring-table.jpg', alt: 'DOAC monitoring requirements table showing CrCl-based renal monitoring frequency, FBC and LFTs annually', caption: 'DOAC monitoring requirements: check renal function at frequency determined by CrCl; FBC and LFTs annually' },

    { type: 'table',
      caption: 'DOAC monitoring frequency by renal function',
      headers: ['CrCl (ml/min)', 'Renal function check (U&E)', 'FBC', 'LFTs'],
      rows: [
        ['>60', '12-monthly', '12-monthly', '12-monthly'],
        ['30\u201359', '6-monthly', '12-monthly', '12-monthly'],
        ['15\u201329', '3-monthly', '12-monthly', '12-monthly'],
        ['<15', 'DOAC contraindicated \u2014 refer to specialist', '\u2014', '\u2014'],
        ['Also: elderly >75 or frail', '6-monthly regardless of CrCl', '12-monthly', '12-monthly'],
      ]
    },

    { type: 'list', items: [
      'Review at 1 month post-initiation: side effects, adherence, pharmacy NMS, CrCl check, bleeding events',
      'At each annual review: check age-adjusted dose still appropriate; review weight; check for interacting drugs',
      'Dabigatran contraindicated in CrCl <30; recalculate if any new medication affecting renal function',
      'Patients over 75 or frail: 6-monthly renal monitoring regardless of CrCl',
      'Address modifiable bleed risk factors at every review: BP, alcohol, NSAIDs/antiplatelet co-prescribing',
    ]},

    // ── Rate Control ───────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Rate Control' },

    { type: 'para', text: 'Rate control is first-line for most patients (especially elderly, minimal symptoms, long-standing AF). Target resting heart rate <90bpm (RACE-II study target); <100bpm acceptable if asymptomatic. Never combine beta-blocker with rate-limiting calcium channel blocker (verapamil/diltiazem) \u2014 risk of complete heart block.' },

    { type: 'table',
      caption: 'Rate control drug selection by clinical context',
      headers: ['Drug', 'Scenario', 'Starting Dose', 'Titration / Max', 'Notes'],
      rows: [
        ['Bisoprolol', 'AF + heart failure (preferred)', '1.25mg OD', 'Up to 10mg OD', 'Also carvedilol 3.125mg BD, nebivolol 1.25mg OD in HF'],
        ['Atenolol', 'AF alone, AF + IHD, AF + diabetes', '25\u201350mg OD', 'Up to 100mg OD', 'Metoprolol or propranolol alternatives in IHD'],
        ['Diltiazem MR \u2014 Viazem XL', 'AF without HF, when beta-blocker contraindicated', '120mg OD', 'Up to 360mg OD', 'Off-label for AF; do NOT use in HFrEF'],
        ['Diltiazem MR \u2014 Angitil SR', '', '120mg OD', 'Up to 180mg OD', 'All diltiazem preparations interchangeable with caution'],
        ['Diltiazem MR \u2014 Slozem', '', '120mg OD', 'Up to 300mg OD', ''],
        ['Verapamil', 'AF without HF (second choice CCB)', '40mg TDS', 'Up to 120mg TDS', 'Avoid with dabigatran (use 110mg BD dabigatran if needed); avoid with digoxin'],
        ['Digoxin', 'AF + HF; mainly housebound patients; dual therapy', 'Load 250mcg OD \u00d77 days', 'Maintenance 62.5\u2013250mcg OD', 'Only reduces rate at rest; monitor levels; narrow therapeutic window; not first-line'],
      ]
    },

    { type: 'callout', variant: 'warning', title: 'Rate Control Cautions', items: [
      'Never combine beta-blocker + verapamil or diltiazem \u2014 risk of complete heart block',
      'Avoid verapamil and diltiazem in heart failure with reduced ejection fraction (HFrEF)',
      'Digoxin: check plasma levels if toxicity suspected (nausea, vomiting, visual changes, bradycardia)',
      'If single agent insufficient: add digoxin as second agent (not another rate-limiting drug of different class)',
      'Refer for rhythm control / ablation if rate control fails or patient remains symptomatic',
    ]},

    // ── Rhythm Control ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Rhythm Control' },

    { type: 'heading', level: 3, text: 'When to Consider Rhythm Control' },
    { type: 'list', items: [
      'New witnessed onset of AF <48 hours duration',
      'Obvious reversible cause (e.g. chest infection, recent surgery)',
      'AF precipitating new heart failure',
      'Young patient with structurally normal heart and symptomatic AF',
      'Ongoing symptoms despite adequate rate control',
      'Patient preference after discussion of risks/benefits',
    ]},

    { type: 'heading', level: 3, text: 'DC Electrical Cardioversion' },
    { type: 'list', items: [
      'Refer to cardiology for planned DCCV (direct current cardioversion)',
      'Requires echo first \u2014 assess LA size and rule out left atrial appendage thrombus',
      'If AF <48h witnessed onset: anticoag cover for 4 weeks after; if >48h: anticoag minimum 3 weeks before + 4 weeks after (or TOE to exclude thrombus)',
      'Success rates higher with shorter duration of AF, smaller LA size, structurally normal heart',
    ]},

    { type: 'heading', level: 3, text: 'Long-term Rhythm Maintenance' },
    { type: 'table',
      headers: ['Drug', 'When used', 'Notes'],
      rows: [
        ['Bisoprolol / beta-blocker', 'First-line for rate + rhythm prevention in most', 'Especially for vagally-mediated AF (exercise, alcohol)'],
        ['Flecainide', 'Pill in the pocket (PAF with structurally normal heart)', 'Must have resting HR and BP normal at time of use; avoid if ischaemia, HF, structural disease'],
        ['Sotalol', 'Long-term rhythm prevention', 'Proarrhythmic; monitor QTc; specialist-initiated'],
        ['Amiodarone', 'Especially if LVSD / heart failure', 'Most effective but significant toxicity (thyroid, lung, liver, eyes, skin); specialist-initiated; annual TFT/LFT/CXR'],
        ['Dronedarone', 'Alternative to amiodarone without structural heart disease', 'Avoid in HF, permanent AF or severe hepatic disease; less toxic than amiodarone'],
      ]
    },

    { type: 'heading', level: 3, text: 'Catheter Ablation (LAAA)' },
    { type: 'list', items: [
      'Left atrial appendage ablation (pulmonary vein isolation \u2014 PVI) \u2014 refer cardiology / electrophysiology',
      'Consider if failed pharmacological rhythm control or patient preference',
      'Most effective in paroxysmal AF with structurally normal heart',
      'Anticoagulation continued for minimum 3 months post-ablation; decision to stop based on CHA\u2082DS\u2082-VASc score',
      'Some patients need amiodarone for 3 months post-ablation to maintain SR',
    ]},

    // ── Atrial Flutter ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Atrial Flutter' },

    { type: 'para', text: 'Atrial flutter is a macro-re-entrant atrial arrhythmia with a characteristic sawtooth pattern on ECG. It is closely related to AF and the two often coexist or convert between each other. Management differs significantly \u2014 catheter ablation is first-line for flutter (unlike AF where it is second-line).' },

    { type: 'image', src: '/images/af-flutter-vs-af-diagram.jpg', alt: 'Diagram comparing atrial flutter (single circular re-entrant circuit in right atrium around AV node) versus atrial fibrillation (multiple chaotic wavelets throughout both atria)', caption: 'Flutter vs AF: flutter has one organised circular re-entrant circuit (right atrium, around AV node) producing a regular fast signal. AF has multiple chaotic simultaneous wavelets firing throughout both atria \u2014 explaining why flutter is regular and treatable with ablation, while AF is irregular and harder to cure.' },

    { type: 'image', src: '/images/af-flutter-ecg.webp', alt: 'ECG strip showing atrial flutter with 2:1, 3:1 and 4:1 AV block conduction ratios at 25mm/sec', caption: 'Atrial flutter with variable AV block: 2:1 block gives ventricular rate ~150bpm; 3:1 gives ~100bpm; 4:1 gives ~75bpm. Sawtooth flutter waves best seen in inferior leads and V1.' },

    { type: 'heading', level: 3, text: 'ECG Features of Atrial Flutter' },
    { type: 'table',
      headers: ['Feature', 'Description'],
      rows: [
        ['Atrial rate', '~300bpm (range 250\u2013350bpm); regular sawtooth flutter waves'],
        ['Sawtooth pattern', 'Negative flutter waves best seen in leads II, III, aVF; positive in V1; no isoelectric baseline between waves'],
        ['Ventricular rate (2:1 block)', '~150bpm \u2014 regular tachycardia at exactly 150bpm = flutter until proven otherwise'],
        ['Ventricular rate (3:1 block)', '~100bpm \u2014 may appear deceptively normal; flutter waves between QRS complexes'],
        ['Ventricular rate (4:1 block)', '~75bpm \u2014 can be missed clinically; look carefully for flutter waves'],
        ['Variable block', 'Irregular ventricular rhythm if AV block ratio changes \u2014 can mimic AF'],
        ['QRS morphology', 'Typically narrow unless bundle branch block or aberrant conduction'],
      ]
    },

    { type: 'callout', variant: 'tip', title: 'ECG Tips \u2014 Spotting Flutter', items: [
      'Regular tachycardia at ~150bpm: always suspect flutter; look for sawtooth waves \u201chidden\u201d in T waves or QRS complexes',
      'Use adenosine 6mg IV (hospital setting) to temporarily increase AV block and reveal flutter waves \u2014 for diagnosis only, not treatment',
      'Flutter waves are usually negative (inverted) in inferior leads (II, III, aVF); positive in V1',
      'If flutter waves not obvious: try calipers at 300bpm spacing \u2014 every other wave may be partially buried in QRS/T',
      'Variable block (2:1 then 3:1 then 4:1) creates an irregular rhythm which can be mistaken for AF',
    ]},

    { type: 'heading', level: 3, text: 'Types of Atrial Flutter' },
    { type: 'table',
      headers: ['Type', 'Circuit', 'Features'],
      rows: [
        ['Typical (type I)', 'Counter-clockwise re-entry around tricuspid valve via cavotricuspid isthmus (CTI)', 'Most common; classic sawtooth in inferior leads; highly amenable to catheter ablation (CTI ablation)'],
        ['Reverse typical (type I)', 'Clockwise re-entry through same CTI circuit', 'Positive flutter waves in inferior leads; still CTI-dependent; ablation effective'],
        ['Atypical (type II)', 'Re-entry circuit outside CTI (e.g. around pulmonary veins, mitral annulus, scar tissue)', 'Less common; often post-cardiac surgery or ablation; more complex ablation required'],
      ]
    },

    { type: 'heading', level: 3, text: 'Anticoagulation in Atrial Flutter' },
    { type: 'callout', variant: 'info', title: 'Same CHA\u2082DS\u2082-VASc Approach as AF', items: [
      'Stroke risk in atrial flutter is comparable to AF \u2014 anticoagulate using the same CHA\u2082DS\u2082-VASc thresholds',
      'DOACs are first-line; same dose reduction criteria and monitoring as for AF (see DOAC section above)',
      'Anticoagulation required for minimum 4 weeks post-cardioversion regardless of flutter duration; or 3 weeks before if >48h duration',
      'If planning catheter ablation: continue anticoagulation for at least 8 weeks post-procedure',
      'Do NOT withhold anticoagulation assuming flutter is \u201cless risky\u201d than AF',
    ]},

    { type: 'heading', level: 3, text: 'Rate Control in Atrial Flutter' },
    { type: 'para', text: 'Rate control is harder to achieve in atrial flutter than in AF. The strong and regular re-entrant circuit resists drug-induced slowing of AV nodal conduction. Definitive treatment with ablation is preferred over long-term rate control.' },
    { type: 'list', items: [
      'Beta-blockers (bisoprolol, atenolol) and rate-limiting CCBs (diltiazem, verapamil): less effective than in AF; often cannot achieve adequate rate control at tolerable doses',
      'Digoxin: similarly limited effectiveness in flutter; not first-line',
      'High-dose drug combinations may be needed but carry toxicity risk \u2014 ablation is preferable',
      'If haemodynamically unstable: same-day DC cardioversion (synchronised); usually reverts quickly with low energy (50\u2013100J)',
      'If rate can be controlled: proceed to definitive ablation electively',
    ]},

    { type: 'heading', level: 3, text: 'Rhythm Control \u2014 Catheter Ablation (First-line for Flutter)' },
    { type: 'callout', variant: 'info', title: 'CTI Ablation \u2014 Highly Effective', items: [
      'Cavotricuspid isthmus (CTI) ablation is first-line definitive treatment for typical atrial flutter',
      'Success rate >95% for typical flutter; low recurrence rate',
      'Preferred over long-term antiarrhythmic drug therapy',
      'Refer cardiology / electrophysiology for all patients with symptomatic or recurrent flutter',
      'Atypical flutter: more complex circuits; discuss with specialist; may need different approach',
    ]},
    { type: 'list', items: [
      'DC cardioversion (DCCV): effective for acute termination; flutter often reverts with low energy (50\u2013100J synchronised)',
      'Chemical cardioversion: IV flecainide or amiodarone (hospital); note flecainide can paradoxically accelerate AV conduction in flutter \u2014 give a rate-limiting agent first',
      'Antiarrhythmics (amiodarone, flecainide, dronedarone): less effective for flutter than for AF; ablation preferred for long-term management',
      'Post-ablation: continue anticoagulation for at least 8 weeks; then review CHA\u2082DS\u2082-VASc',
      'After successful ablation some patients develop AF \u2014 ongoing monitoring required',
    ]},

    // ── Paroxysmal AF ──────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Paroxysmal AF (PAF)' },

    { type: 'callout', variant: 'warning', title: 'PAF \u2014 Easily Missed', items: [
      'Episodic, self-terminating; often normal resting ECG at presentation',
      'Request 24h, 48h or 7-day Holter monitor if ECG normal but symptoms suggest PAF',
      'Implantable loop recorder (ILR/Reveal) if still unconfirmed after monitoring',
      'Anticoagulate based on CHA\u2082DS\u2082-VASc as for persistent AF \u2014 stroke risk is the same',
      'Refer to cardiology to decide on rate control vs rhythm control approach',
    ]},

    { type: 'list', items: [
      'Common precipitants: caffeine, alcohol, dehydration, stress, illness \u2014 address modifiable triggers',
      '\u201cPill in the pocket\u201d flecainide: suitable for infrequent symptomatic PAF, structurally normal heart, normal resting HR and BP',
      'Long-term rhythm control: beta-blocker, sotalol (specialist), amiodarone or dronedarone (specialist)',
      'Refer for ablation if symptomatic despite medication',
    ]},

    // ── Special Populations ────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Special Situations' },

    { type: 'table',
      headers: ['Situation', 'Guidance'],
      rows: [
        ['Valvular AF (mitral stenosis / mechanical valve)', 'DOACs contraindicated \u2014 use warfarin (target INR 2\u20133 for most; 2.5\u20133.5 for mechanical valve)'],
        ['Antiphospholipid syndrome (APS)', 'Warfarin only \u2014 DOACs less effective at preventing clot in APS; discuss with haematology'],
        ['AF + ACS / PCI (triple therapy)', 'Discuss with cardiologist; usually DOAC + single antiplatelet for limited period; avoid triple therapy if possible'],
        ['AF in pregnancy', 'Warfarin or LMWH depending on stage; seek obstetric cardiology/haematology advice; DOACs teratogenic'],
        ['AF + chronic kidney disease (CrCl 15\u201329)', 'Apixaban preferred (dose-reduced to 2.5mg BD); or warfarin; avoid dabigatran'],
        ['AF + dialysis', 'DOACs all contraindicated; warfarin or aspirin only after risk/benefit discussion; seek specialist advice'],
        ['Newly discovered AF on travel / remote location', 'Rate-control urgently; anticoag same day if CHA\u2082DS\u2082-VASc \u22652 men / \u22652 women; review within 48h'],
      ]
    },

    // ── Counselling & Links ────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Patient Counselling Points' },

    { type: 'list', items: [
      'Explain what AF is: \u201cThe top chambers of your heart are beating irregularly due to abnormal electrical signals. The main risk is that blood can pool and form a clot which can travel to the brain and cause a stroke.\u201d',
      'Anticoagulant: \u201cThis medication slows your blood from clotting \u2014 it does not thin the blood but reduces the chance of a harmful clot forming. For most people, the benefit far outweighs the bleeding risk.\u201d',
      'DOAC: no routine INR monitoring; fixed dosing; no dietary restrictions; alcohol permitted in moderation',
      'Missed dose: take as soon as remembered same day; never double dose next day',
      'Seek medical advice promptly if: prolonged/unusual bleeding, severe headache, blood in urine or faeces, coughing or vomiting blood',
      'Carry anticoagulant alert card',
      'Inform all healthcare professionals including dentists and surgeons that they are on an anticoagulant',
      'Signpost to: British Heart Foundation (BHF) AF page, AF Association UK (atrialfibrillation.org.uk)',
    ]},

    {
      type: 'calclink',
      calculators: [
        { id: 'cha2ds2vasc', label: 'CHA₂DS₂-VASc — Stroke Risk', subtitle: 'Anticoagulation threshold in AF' },
        { id: 'orbit', label: 'ORBIT-AF — Bleeding Risk', subtitle: 'Bleeding risk before starting anticoagulation' },
      ],
    },

    { type: 'linkrow', links: [
      { label: 'NICE CG180 \u2014 Atrial Fibrillation', url: 'https://www.nice.org.uk/guidance/cg180' },
      { label: 'NICE Patient Decision Aid \u2014 AF & Anticoagulation', url: 'https://www.nice.org.uk/guidance/cg180/resources/patient-decision-aid-pdf-243734797' },
      { label: 'MDCalc \u2014 Cockcroft-Gault CrCl', url: 'https://www.mdcalc.com/creatinine-clearance-cockcroft-gault-equation' },
      { label: 'AF Association UK', url: 'https://www.atrialfibrillation.org.uk' },
    ]},

  ]
}
