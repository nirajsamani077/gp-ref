import type { Note } from '../data/notes'

export const angina: Note = {
  id: 'angina-ihd',
  title: 'Angina & IHD',
  subtitle: 'Stable angina — diagnosis, RACPC referral, sequential drug treatment, and post-MI management',
  tags: ['cardiology'],

  body: 'angina ischaemic heart disease IHD stable angina ACS NSTEMI STEMI chest pain exertional GTN glyceryl trinitrate spray nitrate beta blocker bisoprolol atenolol CCB amlodipine diltiazem verapamil ISMN isosorbide mononitrate nicorandil ivabradine ranolazine aspirin clopidogrel atorvastatin statin ACE inhibitor ramipril RACPC rapid access chest pain clinic atherosclerosis coronary artery disease CAD CTCA CT coronary angiogram PCI CABG DAPT dual antiplatelet ticagrelor prasugrel secondary prevention Takotsubo cardiomyopathy broken heart syndrome',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Angina = chest pain/discomfort due to myocardial ischaemia — supply-demand mismatch, usually from atherosclerotic coronary artery disease (CAD)',
        'Typical angina: all 3 features — (1) constricting discomfort in chest/neck/jaw/shoulders/arms; (2) precipitated by exertion; (3) relieved by rest or GTN within 5 minutes',
        'Atypical angina: 2 of 3 features; non-cardiac chest pain: 0–1 features',
        'Stable angina: predictable, exertional, settles with rest/GTN; Unstable/ACS: rest pain, crescendo, >15 min → emergency',
        'Risk factors: male sex, age, smoking, hypertension, hyperlipidaemia, diabetes, family history of premature CVD, obesity, sedentary lifestyle',
      ],
    },

    {
      type: 'image',
      src: '/images/ihd-pathophysiology.jpg',
      alt: 'Diagram showing progressive stages of atherosclerosis in a coronary artery from initial lesion with foam cells through fatty streak, intermediate lesion, atheroma, fibroatheroma to complicated lesion with thrombosis',
      caption: 'Atherosclerosis progression. Plaques begin silently from the 1st decade; fibroatheroma from the 4th decade can rupture → thrombosis → ACS. Risk factor modification can stabilise plaques at any stage.',
    },

    {
      type: 'image',
      src: '/images/Atherosclerosis-coronary-artery-affected.webp',
      alt: 'Anatomical illustration of heart showing coronary arteries with inset comparing a normal artery to a diseased artery narrowed by atherosclerotic fatty plaque',
      caption: 'Coronary artery narrowed by atherosclerosis. A >70% luminal stenosis typically causes exertional ischaemia; plaque rupture at any stenosis degree can cause ACS.',
    },

    { type: 'heading', level: 2, text: 'Acute Presentation — Rule Out ACS First' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'If ACS suspected — act immediately',
      items: [
        'Features of ACS: pain at rest, >15 minutes duration, not fully relieved by GTN, diaphoresis, nausea/vomiting, SOB, jaw or arm radiation, haemodynamic instability',
        'Current pain: call 999 immediately, give 300 mg aspirin (chewed), GTN spray 1 puff sublingually — repeat after 5 min if no relief; do NOT delay for ECG',
        'Pain-free now but occurred in last 12 hours: urgent same-day hospital assessment; give aspirin 300 mg; arrange ECG but do not delay referral',
        'Pain 12–72 hours ago, now resolved, normal ECG: same-day emergency care',
        'Also consider: aortic dissection (tearing pain radiating to back, unequal BPs), PE, pericarditis (sharp, pleuritic, relieved sitting forward)',
      ],
    },

    {
      type: 'image',
      src: '/images/chest-pain.webp',
      alt: 'Flowchart for suspected cardiac chest pain: exertion-only with no red flags → RACPC; at rest with no red flags → same-day emergency care; red flags present → 999',
      caption: 'Cardiac chest pain triage pathway. Stable exertional symptoms without red flags → RACPC referral. Any red flag or rest pain → same-day emergency or 999.',
    },

    { type: 'heading', level: 2, text: 'Rapid Access Chest Pain Clinic (RACPC)' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'RACPC — Who to refer (UHNM / South Staffordshire)',
      items: [
        'Refer adults with NEW onset chest pain with intermediate-to-high probability of stable angina from coronary disease',
        'Start aspirin 75 mg daily whilst awaiting appointment; give GTN spray with instructions',
        'Arrange ECG and bloods (FBC, U&E, HbA1c, lipids, TFTs, LFTs) before or at time of referral',
        'Consider CXR if cardiac failure, respiratory cause or aortic aneurysm suspected',
      ],
    },

    {
      type: 'table',
      headers: ['Include — refer to RACPC', 'Exclude — do NOT refer to RACPC'],
      rows: [
        ['New onset chest pain with features of typical or atypical stable angina', 'Previously diagnosed CAD (angina, MI, PCI, CABG) — refer to general cardiology'],
        ['Suspected stable angina, not previously investigated', 'Known significant cardiac disease (heart failure, valve disease, cardiomyopathy) — refer to general cardiology'],
        ['Intermediate–high pre-test probability of CAD based on age, sex, symptoms and risk factors', 'Previously investigated or treated by a cardiologist within the past 5 years'],
        ['Worsening exertional symptoms in a patient with no prior cardiac history', 'Suspected ACS or unstable angina — call 999 / admit same day'],
        ['', 'Chest pain clearly non-cardiac in nature (musculoskeletal, pleuritic, GI) with <10% CAD probability'],
      ],
      caption: 'RACPC inclusion/exclusion criteria (UHNM — Royal Stoke/Stafford, serving South Staffordshire). Patients are seen within 2 weeks. Risk stratified using clinical pre-test probability on receipt.',
    },

    {
      type: 'list',
      items: [
        'RACPC investigations depend on pre-test probability of CAD:',
        'Suspected but not definite angina (atypical history) → CT coronary angiography (CTCA): NPV 99.5% — no CAD rules out angina; non-obstructive CAD → start secondary prevention; obstructive CAD → start treatment, consider formal angiography ± PCI/CABG',
        'Typical angina with high probability → functional testing: exercise ECG, stress echo, myocardial perfusion scan (SPECT) or cardiac MRI',
        'Significant left main stem or triple vessel disease on investigation → refer for formal angiography and revascularisation (PCI or CABG)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of Stable Angina' },

    { type: 'heading', level: 3, text: 'All Patients — Secondary Prevention' },

    {
      type: 'list',
      items: [
        'Aspirin 75 mg OD (lifelong) — if intolerant: clopidogrel 75 mg OD',
        'Atorvastatin 80 mg ON — high-intensity statin; target LDL <2 mmol/L (JBS guideline); QOF target TC <5 mmol/L',
        'ACE inhibitor if proven CAD: ramipril 2.5–10 mg OD or lisinopril 10–20 mg OD; if ACE intolerant with co-existing hypertension: candesartan 4–16 mg OD or irbesartan 150–300 mg OD',
        'Lifestyle: smoking cessation (strongly recommend access to service), diet, weight reduction, regular exercise, BP and diabetes optimisation, limit alcohol',
        'GTN spray for all symptomatic patients — give clear instructions at every opportunity',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'GTN spray — how to use (counsel every patient)',
      items: [
        'Sit down before using — GTN can drop BP and cause dizziness',
        '1 puff (400 mcg) under the tongue at onset of pain',
        'If pain not relieved after 5 minutes: take a 2nd puff',
        'If pain still not relieved after a further 5 minutes: call 999 — do not take a 3rd dose',
        'Can also use prophylactically 5 minutes before activity known to trigger pain',
        'GTN SL spray: no expiry once opened (unlike tablets which have 8-week shelf life once opened)',
        'Caution: avoid with PDE5 inhibitors (sildenafil, tadalafil, vardenafil) — severe hypotension risk; at least 24–48 h gap required',
      ],
    },

    { type: 'heading', level: 3, text: 'Sequential Drug Treatment for Symptoms' },

    {
      type: 'image',
      src: '/images/Guideline-for-pharmacological-management-of-stable-angina.png',
      alt: 'NHS Lothian guideline flowchart for pharmacological management of stable angina showing anti-ischaemic drugs (beta-blocker first, CCB if contra-indicated, then add-on agents), antiplatelet, lipid lowering, ACE inhibition and miscellaneous measures',
      caption: 'NHS Lothian pharmacological management of stable angina. Anti-ischaemic ladder: beta-blocker (or rate-limiting CCB) → add DHP-CCB if HR controlled → add nitrate/nicorandil → specialist drugs. Secondary prevention runs in parallel for all patients.',
    },

    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Key points'],
      rows: [
        [
          '1st line',
          'Beta-blocker OR rate-limiting CCB\n(choose one based on comorbidities)',
          'Beta-blocker: bisoprolol 2.5–10 mg OD, atenolol 25–100 mg OD, metoprolol 50–100 mg BD/TDS\nRate-limiting CCB (if BB contra-indicated): diltiazem MR (Angitil 120–180 mg BD or Adizem 120–300 mg OD) or verapamil SR 120–240 mg BD\nNever combine BB + rate-limiting CCB (risk of bradycardia/heart block)',
        ],
        [
          '2nd line',
          'Add DHP-CCB to beta-blocker\nOR switch/combine as appropriate',
          'Amlodipine 5–10 mg OD (1st choice) or felodipine 2.5–10 mg OD\nNifedipine MR: Adipine MR 10–20 mg BD or Coracten XL 30–60 mg OD\nIf on rate-limiting CCB, consider switching to BB + amlodipine',
        ],
        [
          '3rd line',
          'Add long-acting nitrate\n(ISMN)',
          'Isosorbide mononitrate 10–40 mg BD — use asymmetric dosing (e.g. 8 am and 2 pm) to allow ≥10 hr nitrate-free period and prevent tolerance\nOR ISMN SR once-daily formulation (Monomil/Chemydur XL 60 mg OD)\nAvoid symmetrically-dosed BD regimens — causes tolerance',
        ],
        [
          '4th line',
          'Add nicorandil\n(or ivabradine under cardiology direction)',
          'Nicorandil 10–30 mg BD (start 5 mg BD if headache prone; max 40 mg BD)\nCaution: avoid in patients with prior GI ulceration — risk of oral/oesophageal/skin/GI/eye ulcers\nIvabradine 2.5–7.5 mg BD: only in sinus rhythm with HR ≥70–75 bpm; both BB and rate-limiting CCB contra-indicated or not tolerated; stop if no improvement in 3 months or resting HR <50 bpm',
        ],
        [
          '5th line\n(specialist only)',
          'Ranolazine\n(cardiologist initiation only)',
          'Ranolazine MR 375–750 mg BD, titrate up\nLate sodium channel inhibitor — does not affect HR or BP\nCheck for drug interactions; prolongs QT — caution with other QT-prolonging drugs\nOnly if all other treatments not tolerated or symptoms inadequately controlled and unsuitable for revascularisation',
        ],
      ],
      caption: 'Sequential anti-anginal drug treatment (adapted from SIGN 96 / NICE CG126 / Tayside formulary). Do not add a 3rd anti-anginal unless symptoms uncontrolled on 2 drugs and patient awaiting or unsuitable for revascularisation. Review 2–4 weeks after each change.',
    },

    {
      type: 'image',
      src: '/images/Angina_prescribed_medication_580x377px.jpg',
      alt: 'Table of commonly prescribed medications for stable angina listing beta-blockers, DHP and non-DHP calcium channel blockers, nitrates, nicorandil, ranolazine and ivabradine with their mechanisms, adverse effects and dosing regimes',
      caption: 'Commonly prescribed medications for stable angina — mechanisms, adverse effects and dosing. Note: non-DHP CCBs (verapamil, diltiazem) must not be combined with beta-blockers.',
    },

    { type: 'heading', level: 3, text: 'Refer to Cardiology If' },

    {
      type: 'list',
      items: [
        'Symptoms not controlled on maximum doses of 2 anti-anginal drugs',
        'High-risk findings on RACPC testing (significant left main stem or triple vessel disease)',
        'Suspected ACS at any point during review',
        'Diagnostic uncertainty or atypical features requiring specialist input',
        'For consideration of PCI (percutaneous coronary intervention) or CABG (coronary artery bypass grafting)',
      ],
    },

    { type: 'heading', level: 2, text: 'Post-MI / ACS — Secondary Prevention & DAPT' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Post-MI DAPT — dual antiplatelet therapy',
      items: [
        'Aspirin 75 mg OD (lifelong) PLUS one of: clopidogrel 75 mg OD / ticagrelor 90 mg BD / prasugrel 5–10 mg OD',
        'Duration: continue DAPT for 12 months post-ACS/PCI — do not stop early without cardiology advice',
        'Add PPI (e.g. lansoprazole 15–30 mg OD) to reduce GI bleeding risk throughout DAPT course',
        'After DAPT course: continue aspirin 75 mg OD alone (lifelong)',
        'High ischaemic risk patients: rivaroxaban 2.5 mg BD + aspirin may be considered (usually cardiology-initiated)',
        'Beta-blocker post-MI: bisoprolol 1.25–10 mg OD preferred if also heart failure; atenolol 25–100 mg OD otherwise',
        'Atorvastatin 80 mg ON, ACE inhibitor, and lifestyle measures as per stable angina — all continue lifelong',
      ],
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Takotsubo cardiomyopathy ("broken heart syndrome") — a GP pearl',
      items: [
        'Apical ballooning of the left ventricle due to coronary artery spasm triggered by acute emotional or physical stress',
        'Mimics MI: ECG changes, troponin and BNP rise — but normal coronaries on angiography',
        'Management: supportive; ACE inhibitor, beta-blocker and MRA can reduce cardiac load short-term (often stopped after recovery)',
        '~95% return to normal LV function within 3 weeks; serial echos may be arranged by cardiology',
        'Reassure patient — generally excellent prognosis but risk of recurrence with future stressful events',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG126 — Stable Angina', url: 'https://www.nice.org.uk/guidance/cg126' },
        { label: 'NICE CG95 — Chest Pain of Recent Onset', url: 'https://www.nice.org.uk/guidance/cg95' },
        { label: 'UHNM RACPC Referral Info', url: 'https://www.uhnm.nhs.uk/our-services/cardiology/' },
        { label: 'SIGN 96 — Stable Angina', url: 'https://www.sign.ac.uk/our-guidelines/management-of-stable-angina/' },
      ],
    },

  ],
}
