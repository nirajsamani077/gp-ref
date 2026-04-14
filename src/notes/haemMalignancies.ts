import type { Note } from '../data/notes'

export const haemMalignancies: Note = {
  id: 'haem-malignancies',
  title: 'Haematological Malignancies',
  subtitle: 'Recognition, investigation and referral of leukaemia, lymphoma, myeloma and myeloproliferative disorders in primary care',
  tags: ['haematology', 'oncology'],

  body: 'haematological malignancy leukaemia lymphoma myeloma myeloproliferative ALL AML CLL CML Hodgkin non-Hodgkin NHL DLBCL follicular lymphoma polycythaemia vera essential thrombocythaemia myelofibrosis Philadelphia chromosome imatinib pancytopenia B symptoms fever night sweats weight loss lymphadenopathy splenomegaly hepatomegaly blood film blasts lymphocytosis paraprotein CRAB calcium renal anaemia bone pain myeloma MGUS 2WW two week wait urgent referral neutropenic sepsis GVHD graft versus host bone marrow transplant stem cell transplant FBC blood count chemotherapy paediatric childhood cancer',

  content: [

    // ── OVERVIEW ─────────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/blood-cell-production.webp',
      alt: 'Blood cell production diagram showing pluripotent stem cell differentiating into myeloid and lymphoid lineages',
      caption: 'All blood cancers arise from malignant transformation of a stem cell or progenitor at various points in haematopoiesis. Myeloid cancers (AML, CML, PV, ET) arise from the myeloid lineage; lymphoid cancers (ALL, CLL, lymphoma, myeloma) from the lymphoid lineage.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Classification at a Glance',
      items: [
        'Acute leukaemia (ALL / AML) — immature blast cells proliferate; rapidly fatal if untreated; emergency diagnosis',
        'Chronic leukaemia (CLL / CML) — mature cells proliferate more slowly; often indolent presentation',
        'Lymphoma (Hodgkin / Non-Hodgkin) — malignancy of lymphocytes primarily in lymph nodes and lymphoid tissue',
        'Myeloma — malignant plasma cells in bone marrow; produces paraprotein; CRAB features',
        'Myeloproliferative disorders — polycythaemia vera, essential thrombocythaemia, myelofibrosis',
        'Epidemiology: ~8,000 new leukaemia diagnoses/year in UK; increasing incidence overall',
      ],
    },

    // ── RED FLAGS ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Three Cardinal Features to Check in Every Consultation',
    },
    {
      type: 'table',
      headers: ['Feature', 'What to ask / find', 'Significance'],
      rows: [
        ['Pancytopenia symptoms', 'Fatigue / breathlessness (anaemia); easy bruising, petechiae, bleeding gums (thrombocytopenia); recurrent or severe infections (neutropenia)', 'Bone marrow failure — blasts displacing normal haematopoiesis'],
        ['B symptoms', 'Unexplained fever >38°C; drenching night sweats; weight loss >10% body weight over 6 months', 'Systemic lymphoma or leukaemia; any ONE B symptom + lymphadenopathy = urgent referral'],
        ['Lymphadenopathy & organomegaly', 'Examine ALL lymph node groups; check for splenomegaly (percuss + palpate); hepatomegaly', 'Rubbery, firm, non-tender nodes — suspect lymphoma. Splenomegaly alone may be only sign in CML'],
      ],
      caption: 'Symptoms in haematological malignancy are non-specific and non-predictive individually — a normal FBC makes leukaemia very unlikely. Have a very low threshold to request FBC + blood film within 48 hours.',
    },

    // ── INITIAL INVESTIGATIONS ───────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Initial GP Investigations',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'First-Line Blood Tests',
      items: [
        'FBC + differential + blood film (EDTA tube) — within 48h if concerned; completely normal FBC makes leukaemia extremely unlikely',
        'Reticulocytes — haemolytic anaemia; leucoerythroblastic film (teardrop cells, nucleated RBCs) = marrow infiltration',
        'U&E + creatinine — unexplained renal failure (myeloma, urate nephropathy)',
        'LFTs — hepatic infiltration, haemolysis',
        'Bone profile (Ca²⁺, PO₄, ALP) — hypercalcaemia = myeloma until proven otherwise',
        'Serum protein electrophoresis + immunoglobulins — paraprotein (M-band); add urine Bence Jones protein if paraprotein found',
        'LDH + uric acid — tumour markers; raised LDH = lymphoma/aggressive disease',
        'ESR — markedly elevated in lymphoma, myeloma',
        'If lymphoma suspected: add β₂-microglobulin (staging); HIV test',
        'If CLL suggested (lymphocytosis on film): request flow cytometry on EDTA (FBC) tube',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Urgent Same-Day Actions',
      items: [
        'Blasts on blood film, pancytopenia with clinical deterioration, or any suspected AML/ALL → acute medical admission + discuss with on-call haematology immediately',
        'Suspected spinal cord compression (back pain + neurology) in known or suspected myeloma → 999 or phone haematology directly',
        'Paraprotein + hyperviscosity symptoms (visual disturbance, headache, confusion, bleeding) → same-day phone haematology',
        'Platelets <20 or <50 with active bleeding → same-day haematology by phone',
        'Neutrophil count <0.5 + fever (>38°C) in any patient with known haematological malignancy or on chemotherapy → 999 / acute admission (neutropenic sepsis)',
      ],
    },

    // ── LEUKAEMIA ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Leukaemias',
    },
    {
      type: 'image',
      src: '/images/blood-film-lymphocytosis.jpeg',
      alt: 'Blood film showing marked lymphocytosis — typical of chronic lymphocytic leukaemia (CLL)',
      caption: 'CLL blood film: marked lymphocytosis with small mature lymphocytes and characteristic smear (Gumprecht) cells. The degree of lymphocytosis does not equate to severity — refer all confirmed CLL for haematology assessment.',
    },
    {
      type: 'table',
      headers: ['Type', 'Who', 'Presentation', 'GP action', 'Treatment outline'],
      rows: [
        [
          'AML (Acute Myeloid)',
          'Adults (median age ~68y); de novo or secondary to MDS/chemo',
          'ACUTE: rapidly unwell. Pancytopenia (fatigue, infections, bleeding), fever, bone pain. Blasts on film.',
          'Same-day admission. Call haem on-call. Risk of neutropenic sepsis, DIC, tumour lysis',
          'Intensive chemo (if fit) + stem cell / bone marrow transplant. Worse prognosis than ALL.',
        ],
        [
          'ALL (Acute Lymphoblastic)',
          'Peak in children (2–5y); second peak adults >50y',
          'ACUTE: pancytopenia, bone pain (BM infiltration), HSM, testicular swelling in boys, CNS involvement, fever',
          'Same-day admission. Call haem on-call. 48h paediatric referral pathway',
          'Intensive chemo + BMT. Children have better outcomes; early relapse = poor prognosis. Poor prognostic factors: age extremes, WBC >20 at diagnosis, male, non-mixed phenotype.',
        ],
        [
          'CLL (Chronic Lymphocytic)',
          'Most common adult leukaemia; median age 70y; M>F',
          'Often incidental lymphocytosis on FBC. Lymphadenopathy, splenomegaly, fatigue, recurrent infections. B symptoms in advanced disease.',
          'Flow cytometry on EDTA tube. Stage A → urgent A&G to haem; Stage B/C → urgent 2WW referral. Monitor FBC 3-monthly initially.',
          'Stage A: often watch & wait (chemo harmful in early disease). Stage B/C: chlorambucil or chemoimmunotherapy. Counsel re: neutropenic sepsis risk.',
        ],
        [
          'CML (Chronic Myeloid)',
          'Rare; adults 40–60y; Philadelphia chromosome (BCR-ABL)',
          'Massive splenomegaly, fatigue, weight loss, night sweats, hyperviscosity. High WBC with basophilia on film.',
          'All confirmed/suspected CML → urgent 2WW haematology referral',
          'Lifelong tyrosine kinase inhibitor (imatinib first-line). Excellent response rates. Blast crisis if untreated = AML-like emergency.',
        ],
      ],
      caption: 'CLL staging (Binet): Stage A = lymphocytosis + <3 lymph node groups (watch & wait common); Stage B = >3 LN groups (urgent work-up); Stage C = Hb <100 or platelets <100 (urgent 2WW).',
    },

    // ── LYMPHOMAS ────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Lymphomas',
    },
    {
      type: 'table',
      headers: ['Feature', 'Hodgkin Lymphoma (HL)', 'Non-Hodgkin Lymphoma (NHL)'],
      rows: [
        ['Incidence', 'Bimodal: 15–35y and >55y; ~2,000/year UK', 'More common; ~14,000/year UK; median age 65y'],
        ['Lymph node pattern', 'Contiguous spread; often cervical or mediastinal; rubbery, non-tender nodes', 'Non-contiguous; any group; often multiple sites at presentation'],
        ['B symptoms', 'Present in ~40%; classic Pel-Ebstein cyclical fever', 'Common in aggressive subtypes (DLBCL); less so in indolent (follicular)'],
        ['Other features', 'Alcohol-induced pain in lymph nodes (pathognomonic); pruritus; mediastinal mass on CXR', 'Extranodal disease more common (GI, CNS, skin); Waldeyer ring involvement'],
        ['Diagnosis', 'Reed-Sternberg cells on lymph node biopsy', 'Immunohistochemistry (CD20 expression) on biopsy'],
        ['Treatment', 'ABVD or BEACOPP chemo ± radiotherapy; highly curable (~85% 5-year survival)', 'Depends on subtype: aggressive (DLBCL) = R-CHOP; indolent (follicular) = watch & wait or rituximab'],
        ['GP referral', '2WW for any unexplained lymphadenopathy >6 weeks or + B symptoms', '2WW for lymphadenopathy >1cm >6 weeks, B symptoms, splenomegaly, or abnormal FBC'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Lymphadenopathy — When to Refer (UHB criteria)',
      items: [
        'Urgent 2WW: lymph node >1cm persisting >6 weeks',
        'Urgent 2WW: any lymphadenopathy <6 weeks + at least one B symptom (fever >37.5°C, weight loss >10% over 6 months, drenching night sweats)',
        'Urgent 2WW: enlarging nodes or >1 site involved',
        'Urgent 2WW: lymphadenopathy + hepatosplenomegaly',
        'Urgent 2WW: lymphadenopathy + abnormal FBC',
        'Routine: persistent lymphadenopathy not meeting urgent criteria',
        'Always check: FBC, glandular fever screen (monospot/EBV), HIV, CMV — exclude reactive causes first',
      ],
    },

    // ── MYELOMA ──────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Myeloma (Multiple Myeloma)',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'CRAB Criteria — Any One Feature = Urgent Referral',
      items: [
        'C — Calcium: hypercalcaemia (corrected Ca >2.75 mmol/L). Symptoms: thirst, polyuria, constipation, confusion, nausea',
        'R — Renal: unexplained creatinine rise, AKI, or GFR <40 without clear cause',
        'A — Anaemia: normocytic normochromic anaemia (Hb <100 g/L), often with fatigue, without iron deficiency',
        'B — Bone: persistent unexplained back or bone pain; lytic lesions; pathological fracture. Plain X-ray often negative — request skeletal survey or whole-body low-dose CT',
        'Plus: recurrent bacterial infections (pneumococcal/Haemophilus — impaired opsonisation); hyperviscosity (headache, visual disturbance, bleeding); unexplained paraprotein on protein electrophoresis',
      ],
    },
    {
      type: 'table',
      headers: ['Investigation', 'Finding', 'Action'],
      rows: [
        ['Serum protein electrophoresis (SPEP)', 'M-band (paraprotein / monoclonal protein)', 'If + CRAB features → urgent 2WW haem. If isolated → routine referral (MGUS screening)'],
        ['Immunoglobulins (IgG, IgA, IgM)', 'Raised monoclonal Ig + suppressed others (immunoparesis)', 'Supports myeloma; check urine Bence Jones protein'],
        ['Urine Bence Jones protein', 'Free light chains in urine', 'Present in ~75% myeloma; particularly important in light-chain myeloma (SPEP may be negative)'],
        ['Serum free light chains (κ/λ ratio)', 'Abnormal κ:λ ratio', 'More sensitive than SPEP alone; used for MGUS monitoring'],
        ['Bone profile', 'Hypercalcaemia, raised ALP if fracture', 'ALP often normal in myeloma (no osteoblastic activity)'],
        ['β₂-microglobulin', 'Raised', 'Staging and prognosis'],
        ['Skeletal survey / whole-body CT', 'Lytic lesions (punched-out), osteoporosis, vertebral collapse', 'Do not request bone scan — myeloma lesions are lytic (no uptake)'],
      ],
      caption: 'MGUS (monoclonal gammopathy of undetermined significance): paraprotein <30 g/L, no CRAB features, <10% plasma cells in marrow. Risk of progression to myeloma ~1%/year. Refer routinely to haematology; monitor IgG 6-monthly if stable.',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Do NOT request bone scan in suspected myeloma',
      items: [
        'Myeloma lesions are purely lytic — they do not take up bone scan isotope and will appear falsely normal',
        'Request plain skeletal survey (skull, spine, pelvis, long bones) OR whole-body low-dose CT (preferred at most centres)',
        'Inform the radiology request with "?myeloma" to ensure correct imaging protocol is used',
      ],
    },

    // ── MYELOPROLIFERATIVE ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Myeloproliferative Disorders',
    },
    {
      type: 'table',
      headers: ['Disorder', 'Key features', 'Blood count', 'GP action'],
      rows: [
        [
          'Polycythaemia Vera (PV)',
          'Plethoric appearance; aquagenic pruritus (after hot shower); headache; visual disturbance; thrombosis risk (DVT/PE/stroke); JAK2 mutation in >95%',
          'HCT ♂>0.51 or ♀>0.48 (urgent if ♂>0.60 / ♀>0.56 or recent thrombosis). Raised WBC + platelets common',
          'Urgent 2WW if HCT raised + itch/thrombosis/raised WBC. Check secondary causes first (smoking, sleep apnoea, COPD, dehydration)',
        ],
        [
          'Essential Thrombocythaemia (ET)',
          'Often asymptomatic; thrombotic and haemorrhagic risk; headache, visual disturbance, erythromelalgia (burning red extremities); JAK2 in ~60%',
          'Platelets persistently >450 x10⁹/L (urgent >1000 or >600 + recent thrombosis/bleed)',
          'Routine referral if unexplained platelets >450 persistently. Urgent if >1000 or thrombosis. Rule out reactive thrombocytosis (iron deficiency, inflammation, infection)',
        ],
        [
          'Primary Myelofibrosis',
          'Massive splenomegaly (can reach pelvis); anaemia; fatigue; constitutional symptoms; leucoerythroblastic blood film; teardrop cells (dacrocytes)',
          'Anaemia; leucoerythroblastic picture on film; variable WBC and platelets',
          'Urgent 2WW: leucoerythroblastic film alone warrants urgent referral. Splenomegaly + constitutional symptoms → urgent',
        ],
        [
          'CML (see Leukaemias above)',
          'Massive splenomegaly; basophilia on film; Philadelphia chromosome',
          'Markedly elevated WBC (often >50) with full differential; basophilia is characteristic',
          'All → urgent 2WW haematology',
        ],
      ],
      caption: 'All myeloproliferative disorders carry significant thrombotic and haemorrhagic risk. JAK2 V617F mutation testing is available in primary care and should be sent with initial FBC in suspected PV or ET.',
    },

    // ── REFERRAL SUMMARY ────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Referral Thresholds — Quick Reference',
    },
    {
      type: 'table',
      headers: ['Finding', 'Urgent (same-day)', '2WW / Urgent referral', 'Routine referral'],
      rows: [
        ['Lymphadenopathy', 'Abnormal FBC + unwell; suspected lymphoma with B symptoms + acute deterioration', '>1cm >6 weeks; or any + B symptoms; or >1 site; or + HSM', 'Persistent, not meeting urgent criteria'],
        ['Lymphocytosis', 'Anaemia + ↓ANC + ↓platelets + B symptoms (i.e. likely CLL with complications)', 'Anaemia, ↓ANC, ↓platelets, splenomegaly, B symptoms, progressive lymphadenopathy', 'Persistent lymphocytes >5 x10⁹/L, no other features'],
        ['Pancytopenia / blasts', 'Blasts on film; pancytopenia + unwell → acute admission + haem on-call', 'Leucoerythroblastic film', 'Unexplained persistent cytopenia — discuss with haematology'],
        ['Paraprotein (M-band)', 'Spinal cord compression (by phone); hyperviscosity; ↑Ca; unexplained AKI; bone pain/# (by phone)', 'CRAB features (any one) — urgent 2WW', 'Isolated paraprotein without CRAB features (MGUS work-up)'],
        ['Raised HCT', 'HCT ♂>0.60 / ♀>0.56; recent thrombosis; neurological symptoms', 'Persistently elevated HCT ♂>0.51 / ♀>0.48 + itch or ↑WBC/platelets', 'Mildly elevated HCT — exclude secondary causes first'],
        ['Thrombocytopenia', 'Platelets <20 (by phone); <50 + active bleeding; <50 + other cytopenia', 'Platelets <50 or 50–100 + cytopenia / splenomegaly / pregnancy', 'Persistent <100 x10⁹/L'],
        ['Thrombocytosis', '—', 'Platelets >1000 or >600 + thrombosis/bleed', 'Unexplained persistent >450 x10⁹/L'],
        ['Neutropenia', 'Susceptibility to infection + pancytopenia', '—', 'Persistent <1.0 x10⁹/L (or <0.8 in African/Caribbean/East Asian)'],
        ['Macrocytosis', '—', 'MCV >105 + neurological symptoms', 'Persistent unexplained MCV >105 + ↓WBC or ↓platelets; suspected MDS'],
      ],
      caption: 'Source: UHB/HEFT Clinical Haematology Referral Criteria. "Persistent" = on ≥2 occasions, at least 6 weeks apart. If unsure, use Advice & Guidance before referral.',
    },

    // ── NEUTROPENIC SEPSIS ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Neutropenic Sepsis — Primary Care Recognition',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Any Patient on Chemotherapy with Fever ≥38°C = Medical Emergency',
      items: [
        'Call 999 / send to A&E immediately — neutropenic sepsis has >10% mortality',
        'Neutrophil nadir typically 1–2 weeks post chemotherapy; highest risk period',
        'In hospital: FBC will confirm neutrophils <0.5 x10⁹/L; IV tazobactam/piperacillin ± antifungal ± antiviral; G-CSF',
        'Do NOT prescribe paracetamol in patients receiving active chemotherapy — it masks fever (the most important warning sign)',
        'Do NOT prescribe NSAIDs — impair platelet function in already thrombocytopenic patients',
        'Avoid dental work and rectal examinations 2 weeks before to 6 weeks after chemotherapy cycles',
        'No live vaccines at any point during or after chemotherapy (indefinitely immunocompromised post-BMT)',
      ],
    },

    // ── ONGOING GP MANAGEMENT ────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Ongoing GP Role After Diagnosis',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Monitoring & Supportive Care',
      items: [
        'CLL (Stage A, watch & wait): FBC + differential 3-monthly × 1 year, then 6-monthly if stable, then annually if stable for 2 years. Any rising lymphocyte count, new symptoms or B symptoms → refer urgently',
        'All remission/surveillance patients: 5-year follow-up post-treatment; low threshold to request FBC + film within 48h at any illness — recurrence can occur at any time',
        'Transfusion thresholds (where GP is involved): Hb <70 g/L in all; Hb <80–100 g/L in cardiac/respiratory disease. Platelets <10 in all; <20 if fever; <50 if active bleeding',
        'Vaccinations: annual influenza (inactivated), pneumococcal, Hib, meningococcal (non-live only). No live vaccines. Household contacts should receive inactivated flu vaccine',
        'Psychosocial: high rates of anxiety and depression in haematological malignancy. Offer Macmillan referral, psychological support, financial/employment advice',
        'DVLA: most haematological malignancies require DVLA notification for Group 2 (HGV/PSV) licence holders',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Graft-versus-Host Disease (GvHD) — Post Bone Marrow Transplant',
      items: [
        'Chronic GvHD causes multi-organ dysfunction — can present years after transplant',
        'Skin: rash, sclerodermoid changes, sicca syndrome (dry eyes/mouth)',
        'GI: dysphagia, oesophageal stricture, diarrhoea, malabsorption',
        'Respiratory: bronchiolitis obliterans (progressive SOB, air trapping)',
        'Musculoskeletal: myositis, fasciitis, joint contractures',
        'Neurological: neuropathy, myasthenia gravis-like picture',
        'Action: refer back to the transplant centre — do not manage independently in primary care',
      ],
    },

    // ── PAEDIATRIC ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Paediatric Haematological Malignancies',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Children with Suspected Cancer — 48-Hour Review (Not Standard 2WW)',
      items: [
        'Any suspicion of paediatric leukaemia, sarcoma, or Wilms tumour requires very urgent review within 48 hours',
        'ALL is the most common childhood cancer and the most common childhood leukaemia',
        'Key features in children: pallor, unexplained bruising/petechiae, bone pain (refusing to walk), hepatosplenomegaly, testicular swelling in boys, unexplained fever',
        'Mediastinal mass on CXR in a child = T-cell ALL / NHL until proven otherwise — can cause SVC obstruction; do NOT sedate for investigations without anaesthetic team',
        'Poor prognostic factors for ALL: age <1y or >10y; WBC >20 x10⁹/L at diagnosis; non-common ALL phenotype (T-cell, mature B-cell); male sex; non-white ethnicity',
        'Do not delay — even if FBC is normal on first check, do not reassure if clinical concern persists. Repeat within 48h or refer',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer Recognition & Referral', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Haematological Cancers Recognition & Referral', url: 'https://cks.nice.org.uk/topics/haematological-cancers-recognition-referral/' },
        { label: 'Leukaemia UK — Patient information', url: 'https://leukaemiauk.org.uk' },
        { label: 'Lymphoma Action UK', url: 'https://lymphoma-action.org.uk' },
        { label: 'Myeloma UK — patient resources', url: 'https://www.myeloma.org.uk' },
        { label: 'Macmillan Cancer Support', url: 'https://www.macmillan.org.uk' },
      ],
    },

  ],
}
