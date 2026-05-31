import type { Note } from '../data/notes'

export const hiv: Note = {
  id: 'hiv',
  title: 'HIV in Primary Care',
  subtitle: 'Testing, seroconversion, CD4 count, antiretrovirals, opportunistic infections and long-term monitoring',
  tags: ['gum', 'infectious'],

  body: 'HIV human immunodeficiency virus AIDS CD4 count viral load antiretroviral therapy ART HAART seroconversion PEP post-exposure prophylaxis PrEP pre-exposure prophylaxis testing rapid point-of-care POC BHIVA opportunistic infection Pneumocystis PCP tuberculosis CMV toxoplasmosis Kaposi sarcoma cryptococcal meningitis NNRTI NRTI integrase inhibitor MSM IVDU vertical transmission mother-to-baby undetectable untransmittable U=U TasP treatment as prevention',

  content: [

    { type: 'heading', level: 2, text: 'Who to Test' },

    {
      type: 'callout',
      variant: 'info',
      title: 'HIV Testing — Universal and Targeted Approach',
      items: [
        'HIGH PREVALENCE AREAS (diagnosed HIV rate ≥2/1000): offer HIV test to ALL new registrations and new presentations for any reason — this is standard NHS policy for areas such as London, Brighton, and many urban areas',
        'All patients with: any sexually transmitted infection, TB, hepatitis B or C, lymphoma, cervical cancer, mononucleosis-like illness, unexplained immunosuppression',
        'Ongoing HIV indicator conditions: seborrhoeic dermatitis, psoriasis, unexplained peripheral neuropathy, unexplained weight loss, pneumococcal pneumonia, herpes zoster (shingles in young patient), idiopathic thrombocytopenia',
        'High-risk groups (offer annual testing): MSM (men who have sex with men), IV drug users (needle sharing), sex workers, people from countries with HIV prevalence >1% (sub-Saharan Africa, parts of Caribbean, SE Asia)',
        'Currently ~105,000 people living with HIV in UK; ~5% undiagnosed',
      ],
    },

    { type: 'heading', level: 2, text: 'How to Test' },

    {
      type: 'list',
      items: [
        'Formal lab serology (fourth-generation): HIV antibody + p24 antigen combined test — detects HIV from approximately 4 weeks post-exposure (window period ~28 days for combined test); most widely used in NHS',
        'Rapid point-of-care (POC) test: finger-prick blood or oral swab; result in 20–60 minutes; used in community settings, GUM clinics, outreach — requires 3-month window period for a negative result to be reliable (less sensitive than lab test)',
        'Normalise testing: frame as a routine health check — "I offer this test to all my patients/new registrations"',
        'Pre-test discussion: ensure test is voluntary and informed; brief counselling on what positive result would mean; confidentiality',
        'Positive result: confirm with repeat formal lab serology; refer to HIV specialist (GUM/ID clinic — Umbrella service or equivalent) same day or next working day; do NOT leave patient without a follow-up plan',
      ],
    },

    { type: 'heading', level: 2, text: 'Seroconversion Illness' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Primary HIV Infection (Seroconversion) — 2–4 Weeks Post-Exposure',
      items: [
        'Period of HIGHEST viral load and HIGHEST infectivity',
        'Clinical features: fever, severe pharyngitis (often mistaken for EBV/glandular fever), cervical lymphadenopathy, arthralgia/myalgia, maculopapular rash (trunk, face), oral ulcers — the "worst ever" flu',
        'Test: HIV RNA/p24 antigen — positive even before antibody develops; do not rely on standard combined test which may be negative in first 28 days',
        'Investigate for glandular fever, CMV, toxoplasmosis if HIV suspected — all can mimic seroconversion',
        'Document and act: if seroconversion suspected, refer urgently to GUM/ID — early treatment improves long-term outcomes',
      ],
    },

    { type: 'heading', level: 2, text: 'CD4 Count and Clinical Staging' },

    {
      type: 'table',
      headers: ['CD4 Count (cells/μL)', 'Clinical Significance', 'Associated Infections/Conditions'],
      rows: [
        ['>500 (normal range 500–1500)', 'Asymptomatic; immunologically normal', 'No specific opportunistic infections'],
        ['350–500', 'Mildly impaired; increased susceptibility', 'Recurrent bacterial infections, herpes zoster, oral candida'],
        ['200–350', 'Moderate immunosuppression', 'Kaposi\'s sarcoma (KS), PCP risk begins, TB risk, hairy leucoplakia'],
        ['<200 (AIDS-defining threshold)', 'Severe immunosuppression — AIDS', 'PCP (Pneumocystis jirovecii pneumonia), toxoplasmosis, CMV retinitis/colitis, MAC (Mycobacterium avium complex), cryptosporidiosis'],
        ['<50', 'Profound immunosuppression', 'CMV (retinitis → blindness, colitis, oesophagitis), MAC, cryptococcal meningitis, PML (progressive multifocal leucoencephalopathy)'],
      ],
      caption: 'AIDS is defined as CD4 <200 cells/μL OR the presence of an AIDS-defining illness regardless of CD4 count. With effective ART, CD4 typically rises and opportunistic infections are prevented.',
    },

    { type: 'heading', level: 2, text: 'AIDS-Defining Illnesses' },

    {
      type: 'list',
      items: [
        'Respiratory: PCP (Pneumocystis jirovecii pneumonia — dry cough, exertional SOB, low-grade fever, bilateral interstitial shadowing on CXR; treatment cotrimoxazole high dose)',
        'CNS: toxoplasmosis (ring-enhancing lesions on CT/MRI with surrounding oedema; fever, headache, focal neurology; treatment pyrimethamine + sulfadiazine), cryptococcal meningitis (subacute meningitis, CSF India ink stain, treatment amphotericin B + fluconazole), PML (JC virus — white matter lesions)',
        'Eye: CMV retinitis (visual symptoms, fundoscopy — "pizza pie" appearance; ganciclovir)',
        'Skin/Lymph: Kaposi\'s sarcoma (HHV-8; violaceous skin and mucous membrane lesions in immunosuppressed — especially MSM), non-Hodgkin\'s lymphoma',
        'GI: CMV colitis/oesophagitis, Cryptosporidium diarrhoea (watery, chronic), MAC',
        'Gynaecological: invasive cervical cancer',
        'Wasting: >10% body weight loss + diarrhoea or fever >30 days',
      ],
    },

    { type: 'heading', level: 2, text: 'Antiretroviral Therapy (ART)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'ART Principles',
      items: [
        'ALL people with HIV should be offered ART regardless of CD4 count — BHIVA guidelines 2023',
        'Aim: undetectable viral load (<50 copies/mL) within 6 months',
        'Undetectable = Untransmittable (U=U): people with undetectable viral load on stable ART CANNOT transmit HIV sexually — this is a significant counselling point',
        'Lifelong treatment — NOT a cure; stopping ART leads to viral rebound within weeks',
        'All ART initiated and managed by HIV specialist; GP role is to be aware of drug interactions and support adherence',
        'Modern regimens: typically 2 NRTIs + 1 integrase inhibitor (e.g. bictegravir/emtricitabine/tenofovir alafenamide — Biktarvy single pill OD); very effective and well tolerated',
      ],
    },

    { type: 'heading', level: 2, text: 'Drug Class Summary' },

    {
      type: 'table',
      headers: ['Class', 'Examples', 'Key GP Interactions'],
      rows: [
        ['NRTI (nucleoside reverse transcriptase inhibitors)', 'Tenofovir (TDF or TAF), emtricitabine (FTC), abacavir (ABC), lamivudine (3TC)', 'Tenofovir TDF: nephrotoxic — avoid NSAIDs; TAF safer in CKD; ABC: hypersensitivity (HLA-B*5701 test before use)'],
        ['NNRTI (non-nucleoside RTIs)', 'Efavirenz, rilpivirine, doravirine', 'CYP450 inducers/inhibitors — many drug interactions; efavirenz: vivid dreams, depression, avoid in mental health conditions'],
        ['Integrase inhibitors (INSTIs)', 'Dolutegravir, bictegravir, raltegravir, cabotegravir', 'Generally safe; dolutegravir can raise creatinine (tubular secretion effect — GFR unchanged); separate antacids by 2 hours'],
        ['Protease inhibitors (PIs)', 'Atazanavir, darunavir (boosted with cobicistat or ritonavir)', 'Ritonavir/cobicistat = potent CYP3A4 inhibitors — CHECK interactions for statins, macrolides, azoles, rifampicin, PPIs, etc.'],
        ['Entry inhibitors', 'Maraviroc (CCR5 antagonist), ibalizumab', 'Specialist use; require CCR5 tropism test before maraviroc'],
      ],
      caption: 'CRITICAL drug interactions to know: rifampicin significantly reduces levels of most ART — always check before prescribing TB treatment; statins (simvastatin and lovastatin contraindicated with boosted PIs — use pravastatin or rosuvastatin); PPIs reduce rilpivirine absorption (rilpivirine needs acid); St John\'s Wort contraindicated with all ART.',
    },

    { type: 'heading', level: 2, text: 'PEP and PrEP' },

    {
      type: 'table',
      headers: ['', 'PEP (Post-Exposure Prophylaxis)', 'PrEP (Pre-Exposure Prophylaxis)'],
      rows: [
        ['What', 'ART given AFTER potential HIV exposure to prevent infection', 'ART taken BEFORE potential HIV exposure to prevent infection'],
        ['Indication', 'Significant exposure within 72 hours: unprotected sex with HIV+ person (unknown/detectable VL), needle-stick injury, sharing needles', 'High-risk individuals: MSM with multiple partners, serodiscordant couples, sex workers, IVDU'],
        ['Timing', 'Must start within 72 hours — IDEALLY within 24 hours; effectiveness decreases with delay', 'Ongoing (daily or event-based); requires regular HIV testing every 3 months'],
        ['Where to access', 'A&E departments 24/7; GUM clinics during hours; occupational health for needle-stick', 'GUM clinics, NHS sexual health services (now funded on NHS); or private (Prepster, online pharmacies)'],
        ['Regimen', 'Usually tenofovir + emtricitabine + raltegravir or dolutegravir for 28 days', 'Tenofovir + emtricitabine (Truvada or generic) — daily or on-demand (2-1-1 schedule for MSM)'],
      ],
    },

    { type: 'heading', level: 2, text: 'GP Long-Term Monitoring Role' },

    {
      type: 'list',
      items: [
        'HIV monitoring (done by specialist team): viral load + CD4 every 3–6 months until stable, then 6-monthly; annual bloods (FBC, U&E, LFT, lipids, glucose, eGFR)',
        'GP monitoring: annual CV risk assessment (Framingham/QRISK — HIV patients have higher CVD risk); bone health (DEXA at age 50 or earlier if on tenofovir); mental health; sexual health review',
        'Vaccinations: pneumococcal (two doses — PCV13 + PPV23), annual influenza, hepatitis A and B (if not immune), HPV (if not previously vaccinated), meningococcal ACWY — CHECK if live vaccines safe (avoid if CD4 <200)',
        'Cervical cancer: annual smear for women living with HIV — more frequent than standard programme',
        'Anal cancer screening: annual anal cytology for MSM living with HIV — increasing evidence supports this in specialist centres',
        'Long-term complications of HIV: higher rates of CVD, osteoporosis, renal disease, cognitive decline, non-AIDS malignancies — screen proactively',
        'Comorbidity management: same principles as general population but check drug interactions carefully with all new prescriptions',
      ],
    },

  ],
}
