import type { Note } from '../data/notes'

export const inflammatoryArthritis: Note = {
  id: 'inflammatory-arthritis',
  title: 'Inflammatory Arthritis',
  subtitle: 'RA, psoriatic arthritis, axial spondyloarthritis, DMARDs, monitoring and extra-articular features',
  tags: ['rheumatology', 'msk'],

  body: 'rheumatoid arthritis RA psoriatic arthritis PsA ankylosing spondylitis axial spondyloarthritis axSpA reactive arthritis Reiter syndrome enteropathic arthritis dactylitis enthesitis morning stiffness RF CCP HLAB27 methotrexate MTX hydroxychloroquine sulfasalazine leflunomide TPMT biologicals anti-TNF infliximab adalimumab etanercept PEST screen erosions Schober test cardiovascular osteoporosis uveitis sicca dry eyes',

  content: [

    { type: 'heading', level: 2, text: 'Overview — Inflammatory vs Mechanical Joint Disease' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Key Features That Suggest Inflammatory Arthritis',
      items: [
        'Morning stiffness lasting >30–60 minutes (vs mechanical — improves with activity, stiffness <30 min)',
        'Rest pain — worse after prolonged inactivity (mechanical improves with rest)',
        'Systemic features — fatigue, weight loss, fever, elevated inflammatory markers',
        'Distribution — symmetrical small joint disease (RA); DIP involvement (PsA, OA); large joint asymmetric (ReA, PsA)',
        '"Time is joint" — urgent rheumatology referral prevents irreversible joint destruction; aim for review within 3 weeks of referral',
        'Positive squeeze test: transverse compression across MCPs or MTPs → pain in small joint inflammatory arthritis',
      ],
    },

    { type: 'heading', level: 2, text: 'Rheumatoid Arthritis (RA)' },

    {
      type: 'list',
      items: [
        'Prevalence: ~1% UK; F:M 3:1; peak onset 40–60 years; second peak in women post-menopause',
        'Pathophysiology: autoimmune synovitis → pannus formation → cartilage and bone erosion → joint destruction',
        'Distribution: symmetrical small joint polyarthritis — MCPs, PIPs (sparing DIPs), wrists, MTPs; can affect any synovial joint including cervical spine (C1–2 subluxation — pre-op assessment essential)',
        'Serology: RF (rheumatoid factor) positive in ~70%; anti-CCP (anti-cyclic citrullinated peptide) antibodies more specific (~95%); seronegative RA (both negative) — still possible and treated the same',
        'Radiology: XR hands and feet — look for juxta-articular osteoporosis, joint space narrowing, erosions (early periarticular, later large erosions); USS more sensitive for synovitis/erosions in early disease',
        'Average GP sees ~1 new case of RA per year',
        'Comorbidities: very high cardiovascular risk (CV risk equivalent to diabetes); osteoporosis; depression; anaemia of chronic disease; Sjögren\'s overlap (dry eyes, dry mouth)',
        'Extra-articular: nodules (olecranon, extensor surfaces), Felty\'s syndrome (RA + splenomegaly + neutropaenia), vasculitis (severe RA), lung disease (ILD, pleuritis, nodules), eye (episcleritis, scleritis)',
      ],
    },

    { type: 'heading', level: 2, text: 'Seronegative Spondyloarthropathies (SpA)' },

    {
      type: 'table',
      headers: ['Type', 'Key Features', 'Investigation Clues'],
      rows: [
        ['Axial Spondyloarthritis (axSpA) / Ankylosing Spondylitis (AS)', 'Inflammatory back pain: age <45, insidious onset, morning stiffness >30min, improves with exercise (NOT rest); sacroiliac joint pain; reduced spinal flexion (Schober\'s test <5 cm increase on forward flexion)', 'HLAB27 positive (~90% AS); raised CRP/ESR; MRI sacroiliac joints (bone marrow oedema = active inflammation, even before XR changes); XR pelvis/sacroiliac joints (late — sclerosis, erosions, ankylosis, "bamboo spine")'],
        ['Psoriatic Arthritis (PsA)', 'Screen all psoriasis patients annually (PEST questionnaire — 3+ = refer); 5 clinical patterns: DIP arthritis, asymmetric oligoarthritis, RA-like, axial, arthritis mutilans; dactylitis (sausage digit — diffuse swelling of whole digit); nail changes (onycholysis, pitting — preceding arthritis by years)', 'RF and CCP usually negative; HLAB27 if axial features; XR hands — "pencil in cup" deformity (arthritis mutilans), periostitis, DIP erosions'],
        ['Reactive Arthritis (ReA)', '"Can\'t see, can\'t pee, can\'t climb a tree" (Reiter\'s triad: arthritis + conjunctivitis + urethritis); follows GI (Salmonella, Campylobacter, Shigella, Yersinia) or urogenital infection (Chlamydia) by 1–4 weeks', 'HLAB27 positive in severe/persistent disease; urine NAAT for Chlamydia; stool MC&S; usually self-limiting; NSAIDs first-line; DMARDs if persistent >3 months'],
        ['Enteropathic Arthritis', 'Associated with IBD (UC, Crohn\'s) — peripheral arthritis correlates with gut activity; axial disease independent of gut; treat IBD to control peripheral arthritis', 'Raised faecal calprotectin if IBD suspected'],
      ],
      caption: '"Dactylitis + enthesitis = think spondyloarthropathy." Enthesitis = inflammation at tendon/ligament insertion points (Achilles, patellar, plantar fascia, olecranon, epicondyle) — tender to direct pressure.',
    },

    { type: 'heading', level: 2, text: 'Primary Care Management — Before Rheumatology Review' },

    {
      type: 'list',
      items: [
        'Check: inflammatory markers (CRP, ESR, plasma viscosity), RF, anti-CCP, FBC, U&E, LFT, HLAB27 (if axial SpA suspected), uric acid only if gout suspected',
        'XR hands and feet (if symptomatic MCP/wrist/MTP involvement); XR sacroiliac joints (if axial SpA suspected); XR troublesome joints',
        'Do NOT routinely start steroids in primary care before rheumatology review — steroids can mask synovitis, making diagnosis and joint aspiration more difficult to interpret; however if advised by rheum (via A&G or patient care plan), oral prednisolone or IM methylprednisolone/triamcinolone can provide bridge therapy while awaiting specialist',
        'NSAIDs (with PPI): useful for symptom control; for axSpA, NSAIDs are first-line treatment and may slow radiological progression; use with caution in IBD (trigger flares)',
        'Refer urgently to rheumatology for early inflammatory arthritis — waiting times vary but target is within 3 weeks of GP referral; most trusts have early arthritis clinics',
        'If severe/rapid onset with systemic features: same-day rheumatology advice or admission',
      ],
    },

    { type: 'heading', level: 2, text: 'DMARDs — Overview and Monitoring' },

    {
      type: 'table',
      headers: ['Drug', 'Used In', 'Key Monitoring / Points'],
      rows: [
        ['Methotrexate (MTX)', 'RA (most common DMARD), PsA, others', 'Weekly folic acid 5 mg (take on different day); FBC + LFT every 2 weeks until stable on dose, then every 3 months; avoid alcohol; teratogenic — effective contraception essential (stop 3 months pre-conception M/F); avoid live vaccines; pneumocystis pneumonia (PCP) risk if also on steroids — consider co-trimoxazole prophylaxis'],
        ['Hydroxychloroquine (HCQ)', 'RA (often in combination), SLE', 'Annual ophthalmology check after 5 years (retinal toxicity risk — "bulls eye" maculopathy); max dose 5 mg/kg/day; no FBC/LFT monitoring needed; safe in pregnancy (mainstay of SLE in pregnancy)'],
        ['Sulfasalazine (SSZ)', 'RA, PsA, IBD-associated arthritis', 'FBC + LFT every 2 weeks until dose stable, then every 3 months; may reduce sperm count (reversible); avoid in sulfa allergy; G6PD deficiency — haemolysis risk'],
        ['Leflunomide (LFN)', 'RA, PsA', 'FBC + LFT every 2 weeks until stable, then every 3 months; very long half-life — washout procedure (cholestyramine) needed before pregnancy; teratogenic; avoid alcohol'],
        ['Biologicals (anti-TNF, others)', 'RA, PsA, AS — usually after 2 DMARD failures', 'Exclude TB (IGRA/Mantoux + CXR), hepatitis B, HIV before starting; annual influenza + pneumococcal; NO live vaccines; high risk SCC/BCC — annual skin check; anti-TNF associated with infections, reactivation TB, lymphoma (small risk), demyelination (avoid in MS)'],
      ],
      caption: 'GP role in DMARD monitoring: ensure blood tests are performed at correct frequency and results reviewed; withhold if WCC <4, neutrophils <2, LFT >2× ULN; contact rheumatology if in doubt.',
    },

    { type: 'heading', level: 2, text: 'Cardiovascular and Osteoporosis Risk' },

    {
      type: 'list',
      items: [
        'Cardiovascular risk: RA carries a cardiovascular risk equivalent to type 2 diabetes — treat all modifiable CV risk factors aggressively; QRISK3 includes RA as a risk factor; aim for target BP, statin use (atorvastatin 20–40 mg), smoking cessation, exercise; NSAIDs and steroids further increase CV risk',
        'Osteoporosis: patients on long-term steroids require calcium + vitamin D supplementation and bisphosphonate (alendronate) — see steroid-induced osteoporosis protocol; DEXA if on steroids ≥3 months; methotrexate does NOT cause significant osteoporosis; anti-TNF may actually be bone-protective',
        'Skin cancer: anti-TNF agents (infliximab, adalimumab, etanercept) significantly increase risk of SCC and BCC — patients must be counselled on sun protection and have annual skin checks; refer urgently any suspicious lesion',
        'Infection risk: all immunosuppressants increase infection risk; low threshold to treat suspected infections; patients should carry alert card; seek urgent help for fever with neutropaenia',
        'Vaccinations: annual flu (inactivated); pneumococcal; Hep B (check serology); shingles (recombinant Shingrix preferred over live Zostavax if on immunosuppressants); all before starting biologicals if possible',
        'PEST questionnaire: 5 questions to screen psoriasis patients for psoriatic arthritis — score ≥3 → refer rheumatology; should be performed at EVERY psoriasis review',
      ],
    },

  ],
}
