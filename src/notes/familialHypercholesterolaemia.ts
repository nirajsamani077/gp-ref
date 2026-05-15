import type { Note } from '../data/notes'

export const familialHypercholesterolaemia: Note = {
  id: 'familial-hypercholesterolaemia',
  title: 'Familial Hypercholesterolaemia (FH)',
  subtitle: 'Simon Broome criteria, when to start vs refer, statin monitoring, PCSK9 inhibitors and cascade testing',
  tags: ['cardiovascular', 'metabolic'],

  body: 'familial hypercholesterolaemia FH Simon Broome criteria Dutch Lipid Clinic Network criteria total cholesterol LDL HDL tendon xanthoma corneal arcus premature CVD PCSK9 inhibitor evolocumab inclisiran alirocumab ezetimibe bempedoic acid statin high intensity atorvastatin rosuvastatin cascade testing lipid clinic index case 1 500 LDL receptor mutation pregnancy statin stop monitoring CK ALT statin intolerance myopathy myositis rhabdomyolysis heterozygous homozygous',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'FH — Why It Matters in Primary Care',
      items: [
        'Autosomal dominant inherited condition — prevalence 1 in 250 (heterozygous FH); most remain undiagnosed',
        'LDL receptor mutation (80%), apolipoprotein B or PCSK9 gain-of-function mutations — impaired LDL clearance → very high LDL from birth → accelerated cardiovascular disease',
        'Without treatment: males commonly have MI by age 50; females by age 60',
        'SUSPECT when: total cholesterol >7.5 mmol/L on fasting lipids; LDL >4.9 mmol/L; premature CVD in patient or first-degree relative <60 years; physical signs (tendon xanthomata, corneal arcus <45y)',
        'GP role: identify, screen, refer to lipid clinic, initiate treatment where appropriate, arrange cascade testing of family, and manage statin monitoring shared care',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Suspect FH — Clinical Triggers for GP' },

    {
      type: 'list',
      items: [
        'Total cholesterol >7.5 mmol/L on repeated fasting lipid profile (untreated) — this alone should prompt FH assessment',
        'LDL >4.9 mmol/L (untreated)',
        'Personal history of premature IHD or stroke (<60 years in men, <65 years in women)',
        'First-degree relative with premature CVD (<60 years), very high cholesterol (TC >7.5 mmol/L), or confirmed FH',
        'Physical signs: tendon xanthomata (thickened Achilles tendons, knuckle/extensor xanthomata on hands — highly specific for FH), corneal arcus before age 45, xanthelasma',
        'Children: test at age 10 if one parent has confirmed FH (test at age 5 if both parents have FH)',
        'Refer urgently to lipid clinic if: TC >9 mmol/L or non-HDL >7.5 mmol/L with no family history — possible homozygous FH (extremely rare, very severe)',
      ],
    },

    { type: 'heading', level: 2, text: 'Simon Broome Criteria — Used in UK Practice' },

    {
      type: 'table',
      headers: ['Category', 'Criteria'],
      rows: [
        ['DEFINITE FH', 'TC >7.5 mmol/L (adults) or LDL >4.9 mmol/L PLUS: tendon xanthomata in patient OR first/second-degree relative, OR confirmed pathogenic LDL receptor / apoB / PCSK9 mutation in patient or first-degree relative'],
        ['POSSIBLE FH', 'TC >7.5 mmol/L (adults) or LDL >4.9 mmol/L PLUS any of: family history of MI in first-degree relative <60 years or second-degree relative <50 years; OR family history of TC >7.5 mmol/L in first- or second-degree relative'],
        ['Children (<16 years)', 'TC >6.7 mmol/L or LDL >4.0 mmol/L PLUS: tendon xanthomata, or family history (parent with definite/possible FH and/or confirmed FH mutation)'],
      ],
      caption: 'Simon Broome criteria are used in UK for clinical diagnosis. Dutch Lipid Clinic Network (DLCN) scoring system is used in some specialist centres — based on family history, clinical history, physical examination, and LDL level (scored 1–8 points; >8 = definite FH).',
    },

    { type: 'heading', level: 2, text: 'Treatment' },

    {
      type: 'table',
      headers: ['Agent', 'Role', 'Key Points'],
      rows: [
        ['High-intensity statin (first-line)', 'Cornerstone; start as soon as FH confirmed or strongly suspected — even in young adults (20s)', 'Atorvastatin 80 mg OD or rosuvastatin 20–40 mg OD. Aim: ≥50% LDL reduction from pre-treatment baseline. Can be initiated by GP once FH is suspected; lipid clinic will confirm and adjust'],
        ['Ezetimibe (second-line add-on)', 'Add if LDL target not met on statin alone', 'Ezetimibe 10 mg OD; reduces LDL by additional ~20%; well tolerated; can be initiated by GP'],
        ['Bempedoic acid (Nexletol)', 'Add-on if statin-intolerant or target not met', '180 mg OD orally; inhibits ATP citrate lyase; does NOT cause myopathy (acts upstream of mevalonate pathway); additional ~20% LDL reduction; suitable for statin-intolerant patients'],
        ['PCSK9 inhibitors', 'Confirmed FH with established CVD OR inadequate LDL response to statin + ezetimibe', 'Evolocumab (Repatha) 140 mg SC every 2 weeks or 420 mg monthly; alirocumab (Praluent) 75–150 mg SC every 2 weeks; up to 60% additional LDL reduction; SPECIALIST INITIATION ONLY; expensive; very effective'],
        ['Inclisiran (Leqvio)', 'PCSK9 siRNA — RNA silencing therapy', 'SC injection: 284 mg at 0, 3 months, then every 6 months; ~50% LDL reduction; now available on NHS via specialist initiation; fewer injection days than monoclonal antibody PCSK9i'],
      ],
      caption: 'Treatment target: ≥50% LDL reduction from pre-treatment baseline (NICE NG71). Some centres target absolute LDL <1.8 mmol/L (established CVD) or <2.5 mmol/L (primary prevention). Lipid clinic sets individual targets.',
    },

    { type: 'heading', level: 2, text: 'GP Statin Monitoring — What to Check and When' },

    {
      type: 'table',
      headers: ['Timing', 'Tests', 'Action'],
      rows: [
        ['Before starting statin', 'Fasting lipid profile; LFTs; CK; HbA1c; TFTs (exclude hypothyroidism as secondary cause)', 'Establish baseline; treat any secondary cause first; document LDL for % reduction target'],
        ['4–12 weeks after starting / dose change', 'Fasting lipid profile; LFTs; CK if symptomatic (muscle aches)', 'Check LDL reduction achieved (aim ≥50%); check ALT <3× ULN (if higher → reduce dose or stop); assess for statin-related symptoms'],
        ['Annually (established)', 'Fasting lipid profile; LFTs; HbA1c (statins slightly increase T2DM risk); CK if symptomatic', 'Assess ongoing target attainment; update cardiovascular risk'],
      ],
      caption: 'Routine CK monitoring is NOT recommended in asymptomatic patients. Check CK only if muscle symptoms develop (myalgia, weakness). CK >10× ULN → stop statin and monitor. CK >5× ULN with symptoms → reduce dose or switch statin.',
    },

    { type: 'heading', level: 2, text: 'Statin Intolerance — Common GP Scenario' },

    {
      type: 'list',
      items: [
        'Myalgia without CK elevation: very common (~10–20% on statins); usually dose-dependent and drug-specific; try lowest effective dose, alternate-day dosing (rosuvastatin has long half-life — suitable), or switch to different statin',
        'Proven statin myopathy (CK >5× ULN with symptoms): stop statin; re-challenge with low-dose rosuvastatin 5 mg after 2–4 weeks; if re-occurs → consider statin-free regimen (ezetimibe + bempedoic acid)',
        'Hepatotoxicity: ALT >3× ULN → stop statin; recheck in 4 weeks; if resolves → re-challenge with lower dose or alternative statin; may be transient and manageable',
        'Statins and diabetes: new T2DM diagnosis in FH patient on statin — continue statin (CVD benefit far outweighs DM risk); optimise glucose control',
        'Bempedoic acid: useful specifically in statin-intolerant patients; does NOT cause myopathy as it requires CoA activation in liver (not in skeletal muscle — hence no muscle symptoms)',
      ],
    },

    { type: 'heading', level: 2, text: 'Cascade Testing and Special Situations' },

    {
      type: 'list',
      items: [
        'Cascade testing: screen ALL first-degree relatives (parents, siblings, children) of confirmed FH — 50% probability of inheriting the condition; arrange via lipid clinic or GP blood request (fasting lipid profile)',
        'Children: test at age 10 if one parent confirmed FH (or age 5 if both parents); high-intensity statin started from age 8–10 if confirmed (specialist decision)',
        'PREGNANCY: STATINS ARE TERATOGENIC — stop statin at LEAST 3 months BEFORE conception attempt and throughout pregnancy and breastfeeding; switch to ezetimibe (some caution, but generally used) under specialist guidance; bile acid sequestrants (colestyramine) tolerated but poorly accepted',
        'Homozygous FH (HoFH): extremely rare (1 in 1,000,000); TC often >12–15 mmol/L; requires specialist centre — LDL apheresis, lomitapide, evinacumab (anti-ANGPTL3); liaise with QEHB Birmingham',
        'Cardiovascular risk: FH patients are high-risk by definition — primary prevention targets are as aggressive as secondary prevention in FH',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Key GP Safety Points',
      items: [
        'Do NOT use QRISK3 to estimate cardiovascular risk in FH — it substantially underestimates risk in FH; FH patients are automatically high-risk',
        'Do NOT stop statin without discussion — in FH, the LDL has been elevated since birth; stopping statin for mild myalgia without alternative arranged significantly increases MI risk',
        'Statin before surgery: continue statin throughout peri-operative period — withdrawal increases vascular risk',
        'Do NOT use LDL target alone — some FH patients still have high absolute risk despite statin; PCSK9 inhibitor may be appropriate even if LDL appears reasonable',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG71 — Familial Hypercholesterolaemia', url: 'https://www.nice.org.uk/guidance/cg71' },
        { label: 'Heart UK — FH Patient Resources', url: 'https://www.heartuk.org.uk/genetic-conditions/familial-hypercholesterolaemia' },
        { label: 'NICE NG238 — CVD Risk Assessment', url: 'https://www.nice.org.uk/guidance/ng238' },
        { label: 'Deprescribing.org — Statins', url: 'https://deprescribing.org/resources/deprescribing-guidelines-algorithms/statin-deprescribing/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Lipid clinic: UHDB Queen\'s Hospital Burton lipid/metabolic clinic — via e-RS; include untreated lipid profile, family history, clinical signs (tendon xanthomata?), relevant PMH',
        'Alternative: Good Hope Hospital (UHB) lipid clinic',
        'Genetic testing: via lipid clinic who coordinates referral to genetics (QEHB Birmingham Molecular Genetics); cascade testing also coordinated via lipid clinic',
        'Homozygous FH or refractory FH: QEHB Birmingham specialist lipid service; lipid clinic will refer',
        'Heart UK FH Specialist Nurse: national service available for complex cases — heartuk.org.uk',
      ],
    },
  ],
}
