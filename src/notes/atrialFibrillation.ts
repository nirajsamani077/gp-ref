import type { Note } from '../data/notes'

export const atrialFibrillation: Note = {
  id: 'atrialFibrillation',
  title: 'Atrial Fibrillation (AF)',
  subtitle: 'Diagnosis, CHA\u2082DS\u2082-VASc, DOACs, rate control & rhythm control',
  tags: ['cardiology', 'symptoms'],
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

    { type: 'table',
      headers: ['ORBIT Score', 'Bleeding Risk', 'Major bleeds per 100 pt-years'],
      rows: [
        ['0\u20132', 'Low', '~2%/year'],
        ['3', 'Medium', '~4%/year'],
        ['4+', 'High', '~8%/year'],
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

    { type: 'linkrow', links: [
      { label: 'NICE CG180 \u2014 Atrial Fibrillation', url: 'https://www.nice.org.uk/guidance/cg180' },
      { label: 'NICE Patient Decision Aid \u2014 AF & Anticoagulation', url: 'https://www.nice.org.uk/guidance/cg180/resources/patient-decision-aid-pdf-243734797' },
      { label: 'MDCalc \u2014 CHA\u2082DS\u2082-VASc Calculator', url: 'https://www.mdcalc.com/cha2ds2-vasc-score-atrial-fibrillation-stroke-risk' },
      { label: 'MDCalc \u2014 ORBIT Bleeding Risk Score', url: 'https://www.mdcalc.com/calc/10227/orbit-bleeding-risk-score-atrial-fibrillation' },
      { label: 'MDCalc \u2014 Cockcroft-Gault CrCl', url: 'https://www.mdcalc.com/creatinine-clearance-cockcroft-gault-equation' },
      { label: 'AF Association UK', url: 'https://www.atrialfibrillation.org.uk' },
    ]},

  ]
}
