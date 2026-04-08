import type { Note } from '../data/notes'

export const diabeticComplications: Note = {
  id: 'diabetic-complications',
  title: 'Diabetic Complications',
  subtitle: 'Foot, neuropathy, retinopathy, nephropathy, Charcot & annual review',
  tags: ['endocrinology', 'vascular'],

  body: 'diabetic complications foot neuropathy retinopathy nephropathy Charcot arthropathy diabetic foot infection DFI osteomyelitis monofilament ABPI ulcer gangrene cellulitis podiatry tier 1 tier 2 IDFS foot protection service duloxetine amitriptyline gabapentin pregabalin capsaicin ACE ARB ACR albuminuria microalbuminuria statin atorvastatin VEGF laser photocoagulation vitrectomy diabetic retinopathy screening annual review HbA1C foot check BP lipids UACR renal function gastroparesis erectile dysfunction depression eating disorder diabulimia',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Annual Diabetes Review — Checklist',
    },
    {
      type: 'table',
      headers: ['Domain', 'Assessment', 'Target / Action'],
      rows: [
        ['HbA1C', 'Every 6 months (T1DM); at least annually (T2DM)', 'T1DM <48; T2DM personalised (48–64 depending on treatment)'],
        ['Blood pressure', 'Clinic + home readings', '<140/90 (clinic); <130/80 if ACR >70; <150/90 if age >80. ACE/ARB first-line'],
        ['Lipids', 'Fasting lipid profile + non-HDL cholesterol', 'Atorvastatin 20mg (primary prevention QRISK >10%); 80mg (CVD). Aim >40% non-HDL reduction at 3 months'],
        ['Renal function', 'eGFR (U&E) + urine ACR', 'ACR >3: start ACE/ARB. ACR >30: add SGLT2i (dapagliflozin). ACR >70: tighten BP to <130/80'],
        ['Foot', '10g monofilament, pulses, CRT, ABPI, inspect for callus/ulcer/deformity', 'Any abnormality beyond callus → refer to foot protection service (Tier 1). Active problem → urgent Tier 2 or admit'],
        ['Eyes', 'Annual digital retinal photograph via NHS screening programme', 'Refer to ophthalmology if any change from baseline. Maculopathy / proliferative changes: urgent referral'],
        ['Weight / BMI', 'Body weight and BMI', 'Discuss weight management. Refer if BMI >30 for pharmacological or surgical options'],
        ['Smoking', 'Ask and record', 'Strongly linked to microvascular and macrovascular complications — cessation support essential'],
        ['Mental health', 'PHQ-9 / GAD-7. Screen for diabulimia (T1DM)', 'Refer IAPT or diabetes psychology. Diabulimia (insulin omission) = urgent referral'],
        ['Driving', 'Check DVLA requirements if on insulin or SU', 'See T1DM note for Group 1/Group 2 rules'],
        ['Vaccinations', 'Annual flu, one-off pneumococcal', 'Offer at every review if not up to date'],
        ['Injection sites', 'Check for lipodystrophy if on insulin', 'Advise site rotation. Lipodystrophy causes erratic absorption'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diabetic Foot',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Active diabetic foot problems — urgent action',
      items: [
        'Ulcer with signs of deep infection, tracking sinuses, or exposed bone → Tier 2 same-day discussion or urgent referral',
        'Any gas/crepitus, systemic sepsis, or suspected osteomyelitis → ADMIT immediately',
        'Critical ischaemia (rest pain, pallor, absent pulses, non-healing ulcer) → ADMIT (limb threat)',
        'Charcot foot (hot, swollen, red foot with intact skin) → SDEC for urgent weight-bearing XR ± MRI',
        'Gangrene → emergency surgical/vascular review',
      ],
    },
    {
      type: 'table',
      headers: ['Risk level', 'Features', 'Pathway'],
      rows: [
        ['Low risk', 'Normal sensation, pulses, no deformity, no ulcer history', 'Annual check by GP/practice nurse. Foot care education'],
        ['Moderate risk (Tier 1)', 'Neuropathy OR peripheral arterial disease OR deformity OR callus (without ulcer)', 'Refer to Foot Protection Service (podiatry-led). More frequent review'],
        ['High risk / Active (Tier 2)', 'Previous ulcer/amputation, OR active diabetic foot problem (ulcer, ischaemia, Charcot)', 'Interdisciplinary Foot Care Service (IDFS): podiatry + vascular + orthotics + microbiology + diabetes team'],
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Diabetic Foot Infection (DFI) — Antibiotics',
    },
    {
      type: 'table',
      headers: ['Severity', 'Antibiotic', 'Duration / Notes'],
      rows: [
        ['Mild (skin only — cellulitis, no systemic features)', 'Flucloxacillin 500mg–1g QDS. Alt: clarithromycin, erythromycin, or doxycycline if penicillin allergy', '7 days. Swab only if persistent. Skin changes may persist after infection clears — reassess clinically'],
        ['Moderate (deeper, systemically well)', 'Co-amoxiclav 625mg TDS OR co-trimoxazole + metronidazole. Add ciprofloxacin if Pseudomonas suspected. Linezolid if MRSA confirmed', '14 days minimum. Review culture sensitivity. Usually needs IV if moderate-severe → admit'],
        ['Severe (systemic sepsis, osteomyelitis, deep space infection)', 'IV antibiotics (piperacillin-tazobactam ± vancomycin if MRSA risk). Admit', 'Admit for IV therapy, surgical debridement, microbiology input, imaging (MRI for osteomyelitis)'],
      ],
      caption: 'X-ray is poor at detecting osteomyelitis — changes take >2 weeks to appear. If suspected: MRI is gold standard. Check NVI (neurovascular integrity) at every visit. Monitor BMs — hyperglycaemia worsens infection.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Charcot Arthropathy',
    },
    {
      type: 'list',
      items: [
        'Rare but serious — neuropathy + poor microcirculation → bony destruction and joint collapse',
        'Classic presentation: hot, red, swollen foot WITH intact skin (may or may not be painful due to neuropathy)',
        'DDx: cellulitis, gout, DVT, sprain, acute fracture — high index of suspicion in any diabetic patient',
        'Action: DO NOT weight-bear — immobilise immediately. Send to SDEC for urgent weight-bearing XR (if XR normal but suspicious: MRI). Same-day Tier 2 / specialist referral',
        'Treatment: total contact casting and complete offloading (non-weight bearing) for months. Without prompt treatment → osteolysis, chronic deformity, limb loss',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diabetic Neuropathy',
    },
    {
      type: 'table',
      headers: ['Type', 'Features', 'Management'],
      rows: [
        ['Sensory', 'Burning, tingling, numb feet; glove-and-stocking distribution; don\'t notice injuries; neuropathic pain worse at night', 'Neuropathic analgesia (see below). Foot protection. Good glycaemic control'],
        ['Motor', 'Loss of intrinsic foot muscle bulk; abnormal weight-bearing; claw toes; increased callus formation', 'Orthotics. Podiatry input. Footwear modification'],
        ['Autonomic', 'Postural hypotension, gastroparesis, erectile dysfunction, gustatory sweating, bladder dysfunction, anhidrosis', 'Address individually. Gastroparesis: small frequent meals, mashed/soft diet, prokinetics (short-term only)'],
      ],
    },
    {
      type: 'table',
      headers: ['Drug', 'Starting dose', 'Maintenance dose', 'Notes'],
      rows: [
        ['Duloxetine (first-line)', '30mg OD × 2 weeks', '60mg OD (max 120mg/day in 2 divided doses)', 'Review at 3 months. Avoid in severe hepatic impairment, eGFR <30. Taper on stopping'],
        ['Amitriptyline', '10mg nocte', 'Increase by 10mg weekly. Usual 30–70mg nocte (max 75mg)', 'Anticholinergic side effects (dry mouth, urinary retention, constipation). Avoid in cardiac disease, elderly. Warn about drowsiness'],
        ['Gabapentin', '300mg OD (or 100mg TDS in elderly/renal)', 'Increase slowly. Max 3.6g/day in 3 divided doses (e.g. 1200mg TDS)', 'Controlled drug (schedule 3). Sedation, dizziness. Dose reduce in renal impairment. Avoid abrupt stop'],
        ['Pregabalin', '75mg BD (or 25mg TDS in elderly)', 'Increase slowly. Max 600mg/day in 2–3 divided doses (e.g. 200mg TDS)', 'Controlled drug (schedule 3). Faster onset than gabapentin. Dose reduce in renal impairment'],
        ['Capsaicin (topical)', 'Cream 0.075%: apply QDS. Patch 8% (Qutenza): specialist only', 'Adjunct only', 'Burns on application initially — warn patients. Not first-line. Specialist patch for refractory cases'],
        ['Tramadol', 'Up to 50–100mg QDS PRN', 'Short-term rescue only — not for long-term use', 'Controlled drug. Not for chronic neuropathic pain maintenance. Seizure threshold lowered'],
      ],
      caption: 'If one agent fails, try another from the list — individual response varies considerably. Combination therapy (e.g. duloxetine + pregabalin) may be needed for refractory pain. Refer pain clinic if severe.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diabetic Retinopathy',
    },
    {
      type: 'list',
      items: [
        'National screening programme: annual digital retinal photography for all diabetics from age 12',
        'Non-proliferative (background): microaneurysms, hard exudates, haemorrhages, cotton wool spots. May be asymptomatic — only detected on screening',
        'Pre-proliferative: venous beading, IRMA (intraretinal microvascular abnormalities), multiple cotton wool spots',
        'Proliferative: neovascularisation on disc or elsewhere → vitreous haemorrhage, traction retinal detachment → sudden visual loss',
        'Diabetic maculopathy: oedema or exudates at macula → affects central vision (reading, faces)',
        'Primary prevention: tight glycaemic control + BP control (each 10 mmHg reduction in SBP = 35% risk reduction)',
        'Treatment: laser photocoagulation (reduces progression but may not improve vision); anti-VEGF injections (bevacizumab, ranibizumab) for maculopathy; surgical vitrectomy as last resort',
        'Any new visual symptoms in a diabetic patient → same-day urgent ophthalmology referral',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diabetic Nephropathy',
    },
    {
      type: 'table',
      headers: ['ACR (mg/mmol)', 'Stage', 'Action'],
      rows: [
        ['<3', 'Normal', 'Annual ACR. Optimise BP and glycaemia'],
        ['3–30 (microalbuminuria)', 'Incipient nephropathy', 'Start ACE inhibitor (or ARB) regardless of BP. Optimise BP to <140/90. Tight glycaemic control'],
        ['30–300 (macroalbuminuria)', 'Established nephropathy', 'ACE/ARB at maximum tolerated dose. Add dapagliflozin (or empagliflozin) for cardio/renoprotection. QRISK and statin'],
        ['>70', 'Advanced albuminuria', 'BP target <130/80. Refer to nephrology if rapid decline in eGFR or ACR not improving'],
        ['eGFR <30', 'Advanced CKD', 'Review all medications. Stop/reduce metformin. Consider nephrology referral'],
      ],
      caption: 'CKD in diabetes: SGLT2i provide nephroprotection independent of glucose-lowering. Dapagliflozin licensed for CKD with ACR >22.6 mg/mmol (eGFR 25–75) even without diabetes. Do NOT use SGLT2i in T1DM (euglycaemic DKA risk).',
    },
  ],
}
