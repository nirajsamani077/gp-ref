import type { Note } from '../data/notes'

export const diabetesT1DM: Note = {
  id: 'diabetes-t1dm',
  title: 'T1DM Management',
  subtitle: 'Diagnosis, insulin regimens, CGM, DKA, hypoglycaemia & cardiovascular complications',
  tags: ['endocrinology', 'paediatrics'],

  body: 'type 1 diabetes T1DM diagnosis DKA diabetic ketoacidosis children childhood ketones insulin basal bolus Levemir Novorapid CGM continuous glucose monitoring flash glucose Libre HbA1C hypoglycaemia glucagon carb counting sick day rules anti-GAD C-peptide retinopathy nephropathy neuropathy statin ACE ARB DVLA driving HHS hyperosmolar hyperglycaemic state LADA adult autoimmune euglycaemic DKA SGLT2 JDRF insulin pump',

  content: [
    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspected T1DM / DKA — Same-day action',
      items: [
        'Check blood glucose (BM) AND blood ketones (urine ketones if blood unavailable)',
        'If blood ketones >1 mmol/L or urine ketones 2+ or more: ADMIT (paediatrics same-day, or ambulance if unwell)',
        'Blood glucose >11 mmol/L is high, but DKA can occur with normal glucose (euglycaemic DKA — especially with SGLT2i, ETOH, fasting, pregnancy, liver disease)',
        'Osmotic symptoms: polydipsia, polyuria, weight loss, TATT, recurrent infections',
        'Have a high index of suspicion in any child with vomiting, abdominal pain, or lethargy — do NOT assume gastroenteritis',
        'Diagnosis of T1DM is confirmed by specialist (C-peptide low, anti-GAD/anti-IA2 antibodies positive)',
        'HHS (adult T2DM): glucose >30 + high osmolality + dehydration + drowsiness — admit urgently (20% mortality)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Diagnosis',
    },
    {
      type: 'list',
      items: [
        'Random capillary glucose >11 mmol/L in a symptomatic patient is diagnostic — DO NOT wait for HbA1C',
        'HbA1C is unreliable in T1DM: rapid glucose fluctuations not reflected; also affected by haemolysis (falsely low) and haemoglobinopathies',
        'Specialist confirms: C-peptide (low = insulin deficiency), anti-GAD / anti-IA2 / anti-zinc transporter-8 antibodies',
        'Consider LADA (type 1.5) in adults presenting like T2DM but thin, failing OHAs quickly — check GAD antibodies',
        'MODY (monogenic): strong FHx, lean, young (<25), AD inheritance — refer genetics; HNF1a MODY very sensitive to gliclazide',
        'Signpost to JDRF (juvenile diabetes research foundation) for newly diagnosed patients and families',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Insulin Regimens',
    },
    {
      type: 'table',
      headers: ['Regimen', 'Insulin types', 'When used', 'Key points'],
      rows: [
        ['Basal-bolus (gold standard)', 'Long-acting basal: Levemir (detemir) OD or BD, Lantus (glargine) OD, or Toujeo 300u/ml OD. Rapid-acting bolus: NovoRapid (aspart), Humalog (lispro), Apidra (glulisine) — pre-meal', 'Standard for all T1DM adults and children capable of carb counting', 'Most physiological. Allows flexibility. Requires carb counting and dose adjustment per meal. Rotate injection sites to avoid lipodystrophy'],
        ['BD premixed', 'Premixed (e.g. Humulin M3 BD)', 'Only if basal-bolus not possible (compliance, cognitive issues)', 'Less flexible — meals must be at consistent times. Higher hypo risk'],
        ['Insulin pump (CSII)', 'Rapid-acting analogue via continuous SC infusion pump', 'HbA1C >69 mmol/mol despite optimised basal-bolus, OR recurrent hypoglycaemia, OR disabling hypoglycaemia unawareness. Paediatric preference', 'Specialist initiation. Requires intensive education and monitoring. Can combine with CGM (closed-loop "artificial pancreas")'],
      ],
    },
    {
      type: 'image',
      src: '/images/insulin-types-table.png',
      alt: 'Insulin types — rapid-acting, short-acting, intermediate, long-acting, premixed with onset peak and duration',
      caption: 'Insulin action profiles: rapid-acting analogues peak at 15–30 min, last 4h. Long-acting analogues (Lantus/Levemir) last 18–24h with no pronounced peak. Super-long (Toujeo/Tresiba) last 36h+. See insulin guidelines PDF.',
    },
    {
      type: 'linkrow',
      links: [
        { label: 'Insulin Guidelines PDF', url: '/pdfs/insulin-guidelines.pdf' },
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Monitoring & Targets',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Target / Schedule', 'Notes'],
      rows: [
        ['HbA1C', '<48 mmol/mol (6.5%). Measure every 6 months', 'More frequent if adjusting treatment or concerned about control'],
        ['CGM (gold standard)', 'Libre (flash/isCGM) or real-time CGM (rtCGM). Aim: ≥70% time in range (3.9–10 mmol/L)', 'Flash = intermittent scan. rtCGM = continuous alarms. CGM lags plasma glucose by ~15 min — check finger-prick if uncertain or in doubt'],
        ['Finger-prick BM', 'If no CGM: at least QDS pre-meal (and pre-bed, overnight, driving). Fasting BM target 5–7; pre-meal 4–7', 'Always finger-prick when symptoms don\'t match CGM reading, before driving, or if sensor unreliable'],
        ['Ketones', 'Check blood ketones if BM >14, unwell, or vomiting. Urine ketones acceptable if blood unavailable', 'Blood ketones >3 = severe DKA; 1–3 = treat and reassess; <1 = acceptable'],
        ['Annual review', 'HbA1C, eGFR, ACR, BP (lying/standing), lipids, weight, foot check, injection site check, retinal screening, thyroid function, coeliac antibodies', 'Check for other autoimmune conditions at diagnosis and periodically'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Hypoglycaemia — Recognition & Treatment',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Hypoglycaemia management',
      items: [
        'Mild/moderate (conscious, can swallow): 15–20g fast-acting glucose (glucose gel, 3–4 Glucotabs, 150ml fruit juice/non-diet fizzy drink)',
        'Follow with slow-acting carbohydrate (toast, crackers, biscuit) to prevent recurrence',
        'Recheck BM after 15 minutes — repeat fast-acting glucose if still <4 mmol/L',
        'Severe (unconscious or unable to swallow): IM glucagon (GlucaGen 1mg). Train all carers/family. If no response in 10 minutes → 999',
        'Hypoglycaemia unawareness: impaired ability to detect symptoms — high risk of severe hypo. Refer for blood glucose awareness training programme',
        'If frequent hypos: reduce insulin doses, relax HbA1C target, consider pump, refer specialist',
        'Nocturnal hypos: reduce basal insulin, consider bedtime snack, adjust bolus timing',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Sick Day Rules — T1DM',
    },
    {
      type: 'list',
      items: [
        'NEVER stop insulin — even if not eating. The body still needs basal insulin; stopping causes DKA',
        'Increase monitoring: BM every 2–4 hours; blood ketones every 2 hours if BM >14',
        'Increase insulin dose by 10–20% if glucose rising despite eating. Corrective dose = Total Daily Dose ÷ 6 (max 15 units)',
        'If vomiting and unable to eat: continue basal insulin at full dose; omit bolus (no food = no bolus)',
        'Keep sugary drinks close (glucose gel, juice) in case of unexpected hypo',
        'If blood ketones >3 or vomiting persisting >1–2 hours → seek medical advice / attend A&E',
        'Annual flu vaccine mandatory; one-off pneumococcal; regular dental checks',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Cardiovascular Risk & Complications',
    },
    {
      type: 'table',
      headers: ['Complication', 'Screening', 'Management'],
      rows: [
        ['Retinopathy', 'Annual digital retinal screening from age 12 (or from diagnosis if >12). Non-proliferative: microaneurysms, exudates, cotton wool spots (may be silent). Proliferative: neovascularisation → vitreous haemorrhage, retinal detachment', 'Primary prevention: tight glycaemic and BP control. Secondary: laser photocoagulation, anti-VEGF injections (bevacizumab), surgical vitrectomy'],
        ['Nephropathy', 'Annual ACR. ACR >3: start ACE inhibitor (regardless of BP). ACR >70: tighten BP to <130/80. Avoid SGLT2i in T1DM (risk of euglycaemic DKA)', 'ACE/ARB first-line. Tight BP control. Dietary protein restriction if advanced CKD'],
        ['Neuropathy', 'Annual 10g monofilament foot check. Ask about neuropathic pain, foot numbness. Autonomic: gastroparesis (bloating, early satiety, erratic BMs)', 'Neuropathic pain: duloxetine 60mg OD (first-line), amitriptyline 10–75mg nocte, gabapentin 300mg–3.6g/day, pregabalin 150–600mg/day'],
        ['Cardiovascular', 'Statin: atorvastatin 20mg if >40 AND T1DM >10 years, OR nephropathy OR other CVD risk factors. Atorvastatin 80mg if established CVD', 'ACE inhibitor. BP target 140/90 (130/80 if ACR >70). Aspirin only if established CVD (not primary prevention)'],
        ['Erectile dysfunction', 'Enquire sensitively. Common in T1DM men — autonomic neuropathy + vascular', 'PDE5 inhibitor (sildenafil/tadalafil). Refer if not responsive. Address glycaemic and BP control'],
        ['Mental health', 'Screen for depression, anxiety, eating disorders (diabulimia — insulin omission for weight loss), burnout', 'Psychological support essential. Refer IAPT / specialist. Address eating disorders urgently — high mortality'],
      ],
    },
    {
      type: 'para',
      text: 'Gastroparesis: small particle / mashed/puréed diet; small frequent meals. Prokinetics: metoclopramide or erythromycin short-term only (risk of tardive dyskinesia and QT prolongation with long-term use).',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Driving — Diabetes on Insulin',
    },
    {
      type: 'table',
      headers: ['Licence group', 'Rules'],
      rows: [
        ['Group 1 (car/motorcycle)', 'Must have had ≤1 hypoglycaemic episode requiring third-party assistance in the previous 12 months. Must have full hypoglycaemia awareness. Must check BM before driving and every 2 hours during longer journeys. If BM <5: do not drive; treat and wait 45 minutes after BM >5 before driving. Must inform DVLA'],
        ['Group 2 (HGV/bus)', 'Must have had NO hypoglycaemic episodes requiring third-party assistance in the previous 12 months. Must have full hypo awareness. Check BM before every drive and every 2 hours. DVLA arranges annual review with consultant — 3-month BM diary required'],
      ],
      caption: 'Patients must carry fast-acting glucose in the vehicle at all times. Stop driving immediately if hypoglycaemia develops while driving. Do not restart until BM >5 and 45 minutes have elapsed.',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'JDRF (Juvenile Diabetes Research Foundation)', url: 'https://jdrf.org.uk' },
        { label: 'DVLA — Diabetes and Driving', url: 'https://www.gov.uk/diabetes-driving' },
        { label: 'Insulin Guidelines PDF', url: '/pdfs/insulin-guidelines.pdf' },
        { label: 'Diabetes UK — T1DM Resources', url: 'https://www.diabetes.org.uk/type-1-diabetes' },
      ],
    },
  ],
}
