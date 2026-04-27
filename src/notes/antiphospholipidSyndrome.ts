import type { Note } from '../data/notes'

export const antiphospholipidSyndrome: Note = {
  id: 'antiphospholipid-syndrome',
  title: 'Antiphospholipid Syndrome (APS)',
  subtitle: 'Autoimmune thrombophilia causing thrombosis and pregnancy complications — diagnosis, referral and management',
  tags: ['rheumatology', 'obstetrics', 'womens-health'],

  body: 'antiphospholipid syndrome APS lupus anticoagulant anticardiolipin anti-beta2 glycoprotein thrombosis VTE DVT PE stroke TIA miscarriage recurrent pregnancy loss obstetric pre-eclampsia HELLP livedo reticularis Raynaud thrombocytopenia warfarin aspirin LMWH COCP HRT hormones rheumatology recurrent miscarriage clinic Tommy catastrophic CAPS Sapporo Sydney criteria seronegative triple positivity DOAC rivaroxaban',

  content: [

    { type: 'heading', level: 2, text: 'What is APS?' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Antiphospholipid syndrome (APS) is a systemic autoimmune condition causing a hypercoagulable state and pregnancy complications, driven by persistent antiphospholipid antibodies',
        'Affects young people disproportionately — arterial thrombosis in a young person (stroke, MI, PE) should always prompt consideration of APS',
        'Primary APS: no underlying autoimmune disease',
        'Secondary APS: associated with another autoimmune disease — most commonly systemic lupus erythematosus (SLE); ~30% of SLE patients have antiphospholipid antibodies',
        'Catastrophic APS (CAPS): rare, life-threatening — rapid multi-organ thrombosis; mortality ~30%; manage in ITU with anticoagulation, steroids, IVIG/plasmapheresis',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Manifestations' },

    {
      type: 'image',
      src: '/images/antiphospholipid-syndrome.jpg',
      alt: 'Diagram of clinical manifestations of antiphospholipid syndrome including stroke, TIA, migraine, PE, cardiac valve pathology, renal thrombosis, obstetric complications, Raynaud\'s phenomenon, livedo reticularis and DVT',
      caption: 'Clinical manifestations of APS — thrombosis can affect any vascular bed. Obstetric complications and livedo reticularis are important non-thrombotic features.',
      float: 'right',
      maxWidth: '300px',
    },

    {
      type: 'table',
      headers: ['Category', 'Manifestations'],
      rows: [
        ['Venous thrombosis', 'DVT (often unprovoked or recurrent), pulmonary embolism, renal vein thrombosis, cerebral venous thrombosis, hepatic/portal vein thrombosis (Budd-Chiari)'],
        ['Arterial thrombosis', 'Stroke, TIA (especially in young patients), MI, peripheral arterial occlusion, renal infarction — always consider APS in young patients with arterial events'],
        ['Obstetric', '≥3 unexplained recurrent first-trimester miscarriages; ≥1 unexplained second/third-trimester fetal loss; early or severe pre-eclampsia (<34 weeks); HELLP syndrome; intrauterine growth restriction (IUGR); placental insufficiency'],
        ['Haematological', 'Thrombocytopenia (usually mild, 70–120); haemolytic anaemia'],
        ['Skin', 'Livedo reticularis (net-like purplish skin discolouration); skin ulcers; Raynaud\'s phenomenon'],
        ['Cardiac', 'Libman-Sacks (non-infective) endocarditis; valve thickening; coronary artery disease'],
        ['Neurological', 'Cognitive impairment; migraine; chorea; transverse myelitis'],
      ],
      caption: 'APS is a multi-system disorder. Consider it whenever there is unexplained thrombosis (especially in a young person or unusual site), recurrent pregnancy loss, or livedo reticularis with a thrombotic history.',
    },

    { type: 'heading', level: 2, text: 'Diagnosis — Sapporo/Sydney Criteria' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Diagnosis requires at least ONE clinical criterion AND ONE laboratory criterion',
      items: [
        'CLINICAL criteria:',
        '(1) Vascular thrombosis: ≥1 episode of arterial, venous or small vessel thrombosis in any tissue or organ, confirmed by imaging or histology',
        '(2) Pregnancy morbidity: ≥3 unexplained consecutive miscarriages <10 weeks; OR ≥1 unexplained fetal death ≥10 weeks; OR ≥1 premature birth <34 weeks due to pre-eclampsia, eclampsia, or placental insufficiency',
        'LABORATORY criteria (must be positive on TWO separate occasions ≥12 weeks apart):',
        '(1) Lupus anticoagulant (LA): functional coagulation assay — paradoxically causes thrombosis in vivo despite prolonging clotting time in vitro',
        '(2) Anticardiolipin antibodies (aCL): IgG or IgM, medium or high titre (>40 GPL/MPL or >99th percentile)',
        '(3) Anti-β2 glycoprotein I antibodies (anti-β2GPI): IgG or IgM, >99th percentile',
        'Triple positivity (all three laboratory tests positive) = highest thrombotic risk; single test positive = lower risk',
        'Seronegative APS: clinical picture consistent with APS but persistently negative antibody tests — poorly characterised; discuss with specialist',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Laboratory testing pitfalls',
      items: [
        'All three tests must be repeated ≥12 weeks apart to confirm — a single positive result alone does not diagnose APS',
        'Lupus anticoagulant testing is UNRELIABLE during acute thrombosis or if the patient is already anticoagulated — time testing appropriately',
        'Anticardiolipin antibodies can be transiently elevated by infection (e.g. COVID-19, hepatitis C) — always repeat',
        'Do NOT test in the context of acute illness or infection — false positives are common',
        'Refer to rheumatology or the recurrent miscarriage clinic to coordinate testing and interpret results',
      ],
    },

    { type: 'heading', level: 2, text: 'Who to Refer' },

    {
      type: 'list',
      items: [
        'Recurrent miscarriage clinic: ≥3 first-trimester miscarriages, or any 2nd/3rd trimester unexplained fetal loss, or pre-eclampsia <34 weeks — even before a diagnosis of APS is confirmed',
        'Rheumatology: suspected APS; positive antibodies found incidentally; underlying SLE/autoimmune disease; complex or recurrent thrombosis; for management decisions on anticoagulation',
        'Haematology: complex anticoagulation management, especially if DOAC use being considered or recurrent thrombosis on warfarin',
        'Obstetric medicine / maternal-fetal medicine: ALL pregnant women with confirmed APS — high-risk pregnancy management required throughout',
        'Do NOT attempt to manage confirmed APS independently in primary care — coordinate with specialist before starting or altering anticoagulation',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Avoid all hormonal contraception and HRT',
      items: [
        'Combined oral contraceptive pill (COCP), patch, and vaginal ring are CONTRAINDICATED in confirmed APS — very high risk of VTE and stroke',
        'HRT (oestrogen-containing) is also contraindicated',
        'Progesterone-only methods (POP, implant, Mirena IUS) are generally considered safer but discuss with specialist — Mirena is often preferred as it also reduces menstrual blood loss in women on anticoagulants',
        'Discuss at every prescription renewal — ensure patient and prescriber are aware of the diagnosis',
        'Emergency hormonal contraception (Levonorgestrel/ulipristal): use with caution; copper coil is preferred as emergency contraception in women with APS',
      ],
    },

    {
      type: 'table',
      headers: ['Scenario', 'Management'],
      rows: [
        ['APS with prior VTE (DVT/PE)', 'Lifelong anticoagulation with WARFARIN (target INR 2–3). If recurrent VTE on warfarin → increase target INR to 3–4 or add low-dose aspirin 75 mg (specialist decision)'],
        ['APS with prior arterial thrombosis (stroke/TIA/MI)', 'Lifelong warfarin (target INR 2–3) ± low-dose aspirin 75 mg. Some guidelines recommend higher INR target (3–4) for arterial events — specialist decision'],
        ['Antibody positive, no prior thrombosis', 'Low-dose aspirin 75 mg OD (debated — discuss with specialist); risk stratify by antibody profile (triple positive = higher risk); hydroxychloroquine if concurrent SLE'],
        ['Obstetric APS (no prior thrombosis)', 'Low-dose aspirin 75 mg from preconception; add prophylactic LMWH (e.g. enoxaparin) once pregnant — continue throughout pregnancy and 6 weeks postpartum'],
        ['Obstetric APS (with prior thrombosis)', 'Full therapeutic-dose LMWH throughout pregnancy (warfarin teratogenic in 1st trimester) + aspirin — convert to warfarin postpartum; lifelong anticoagulation'],
        ['Recurrent thrombosis despite anticoagulation', 'Increase INR target; add aspirin; consider hydroxychloroquine (reduces thrombotic risk); specialist review — exclude poor compliance, subtherapeutic INR periods'],
      ],
      caption: 'APS management summary. DOACs (rivaroxaban, apixaban, edoxaban) are NOT recommended in APS — RCT evidence (TRAPS, RISAPS) shows higher rates of recurrent thrombosis, particularly arterial, compared to warfarin. Warfarin remains standard of care.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'DOACs are NOT recommended in APS',
      items: [
        'Rivaroxaban, apixaban and other DOACs have shown higher rates of recurrent thrombosis in APS compared to warfarin in clinical trials (TRAPS trial, RISAPS trial)',
        'Risk is particularly high for arterial thrombosis (stroke, MI) — TRAPS trial stopped early due to excess arterial events in rivaroxaban arm',
        'Warfarin with regular INR monitoring remains the anticoagulant of choice in APS',
        'The exception may be VTE-only, single-positive antibody, lower-risk APS — but this requires specialist agreement',
        'If a patient with APS is currently on a DOAC, review urgently with haematology/rheumatology',
      ],
    },

    { type: 'heading', level: 2, text: 'GP Monitoring Roles' },

    {
      type: 'list',
      items: [
        'INR monitoring: most patients will be on warfarin — ensure they are enrolled in an anticoagulant clinic (can be GP-run or hospital); document target INR range in notes',
        'Review anticoagulation at every contact — bleeding risk, interacting medications (antibiotics, NSAIDs, new supplements), dietary changes',
        'Review contraception at every appointment — document that COCP/HRT is contraindicated; ensure patient understands why',
        'Ensure women of childbearing age have a pre-pregnancy plan with obstetric medicine — do not allow unplanned pregnancy without specialist involvement',
        'Monitor for features of underlying SLE: rash, joint pain, haematuria, proteinuria (ANA, anti-dsDNA if suspected)',
        'Thrombocytopenia monitoring: platelet count periodically — severe thrombocytopenia (<50) warrants specialist review as it may paradoxically increase bleeding risk despite the thrombophilic state',
        'Annual review: kidney function, blood pressure, cardiovascular risk reduction (statin, BP control, smoking cessation)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'amenorrhoea', label: 'Amenorrhoea', subtitle: 'Autoimmune causes, hormonal workup' },
        { id: 'atrialFibrillation', label: 'Atrial Fibrillation', subtitle: 'Anticoagulation, warfarin vs DOACs' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Tommy\'s — APS in Pregnancy', url: 'https://www.tommys.org/pregnancy-information/pregnancy-complications/antiphospholipid-syndrome-aps' },
        { label: 'Royal Berkshire — APS Patient Information', url: 'https://www.royalberkshire.nhs.uk/media/zzcfhoti/antiphospholipid-syndrome-aps-_oct25.pdf' },
        { label: 'APS Support UK — Understanding Factsheet', url: 'https://aps-support.org.uk/files/shares/factsheets/APS_UK_Understanding_Factsheet_How_Is_APS_Diagnosed.pdf' },
        { label: 'APS Support UK', url: 'https://aps-support.org.uk' },
        { label: 'NICE CKS — Antiphospholipid Syndrome', url: 'https://cks.nice.org.uk/topics/antiphospholipid-syndrome/' },
        { label: 'BSR — APS Guidelines', url: 'https://www.rheumatology.org.uk/practice-quality/guidelines/antiphospholipid-syndrome' },
      ],
    },

  ],
}
