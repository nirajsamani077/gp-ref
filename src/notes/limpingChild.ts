import type { Note } from '../data/notes'

export const limpingChild: Note = {
  id: 'limpingChild',
  title: 'Limping Child & Paediatric Hip Conditions',
  subtitle: 'Age-based differential, red flags, DDH, Perthes, SUFE, transient synovitis and JIA',
  tags: ['symptoms', 'paediatrics', 'msk'],

  body: 'limping child hip knee limp paediatric septic arthritis DDH developmental dysplasia Perthes SUFE slipped upper femoral epiphysis transient synovitis irritable hip JIA juvenile idiopathic arthritis Barlow Ortolani Pavlik toddler fracture Osgood Schlatter Sever NAI non-accidental injury osteomyelitis avascular necrosis frog leg X-ray',

  content: [
    {
      type: 'callout',
      variant: 'warning',
      title: 'Red flags — act immediately',
      items: [
        'Any child unable to weight-bear with fever → A&E same day (septic arthritis / osteomyelitis until proven otherwise)',
        'Any child <3 with new limp → urgent assessment (septic arthritis, NAI, toddler\'s fracture)',
        'Any child >9 with hip/thigh/knee pain → same-day referral to exclude SUFE',
        'Concern for non-accidental injury (NAI) at any age → safeguarding pathway',
        'Systemic features (night sweats, weight loss, fever, lymphadenopathy) → exclude malignancy / JIA',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Age-Based Differential Diagnosis',
    },
    {
      type: 'table',
      headers: ['Age group', 'Most likely diagnoses', 'Key features', 'Action'],
      rows: [
        ['<3 years', 'Septic arthritis · Toddler\'s fracture · NAI · DDH (late presentation)', 'Unable to WB, fever, irritable; or spiral tibial fracture; check skin folds/leg length', 'A&E if unwell or can\'t WB. Skeletal survey if NAI suspected'],
        ['3–9 years', 'Transient synovitis · Perthes disease · Septic arthritis', 'Well child, recent URTI, unilateral hip pain, antalgic gait, limited IR/abduction', 'If well and able to WB: observe 48h. If no better or systemically unwell: refer / XR pelvis'],
        ['10–15 years', 'SUFE · Osgood-Schlatter · Sever\'s · Overuse apophysitis', 'Obese adolescent, out-toeing gait, thigh/knee pain (not always hip); or activity-related knee/heel pain', 'SUFE: same-day XR + orthopaedic referral. Apophysitis: reassurance, rest, physio'],
        ['Any age', 'Septic arthritis · JIA · Osteomyelitis · Malignancy', 'Fever + joint swelling; >3 months arthritis; bone pain at rest / night pain', 'Low threshold to refer urgently'],
      ],
    },

    {
      type: 'image',
      src: '/images/atraumatic-limp-flowchart-sep19.png',
      alt: 'Atraumatic limping child pathway flowchart',
      caption: 'Atraumatic limping child — clinical pathway by age and ability to weight-bear',
    },

    // ── SEPTIC ARTHRITIS ──────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Septic Arthritis & Osteomyelitis',
    },
    {
      type: 'list',
      items: [
        'Can occur at any age — most common <3 years. Staph aureus is the commonest organism',
        'Kocher criteria (septic vs transient synovitis): fever >38.5°C, non-weight-bearing, elevated ESR/CRP, elevated WBC — 3–4 criteria = high probability septic arthritis',
        'Hip: held in flexion, abduction, external rotation (position of comfort / maximal joint volume)',
        'Management: joint aspiration (diagnostic + therapeutic) + IV antibiotics + surgical washout',
        'Do not delay — avascular necrosis of femoral head can occur within hours of untreated infection',
      ],
    },

    // ── DDH ───────────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Developmental Dysplasia of the Hip (DDH)',
    },
    {
      type: 'image',
      src: '/images/hip-e26e01b.jpg',
      alt: 'DDH severity spectrum and incidence infographic',
      caption: 'DDH spectrum: 1 in 10 infants have hip instability; 1 in 500 are born with complete dislocation. Ranges from subluxation to high dislocation.',
    },
    {
      type: 'list',
      items: [
        'Spectrum from mild instability through subluxation to complete dislocation of femoral head from acetabulum',
        'Risk factors: female sex, breech presentation, family history, oligohydramnios, first-born, postural deformity (e.g. talipes)',
        'Clinical signs: asymmetric skin folds, unequal leg length (Galeazzi sign), limited abduction of the flexed hip',
        'Screening: Barlow and Ortolani tests at newborn and 6-week checks; ultrasound hip at 6 weeks if risk factors or clinical suspicion',
        'Treatment: Pavlik harness (0–6 months) — holds hips in flexion/abduction to encourage acetabular development; surgical reduction if late diagnosis or failed harness',
        'Late presentation (walking age): short-leg gait, Trendelenburg gait, increased lumbar lordosis',
      ],
    },
    {
      type: 'image',
      src: '/images/barlow-ortolani.png',
      alt: 'Barlow and Ortolani examination technique',
      caption: 'Barlow test: adduct and push posteriorly — positive if hip dislocates. Ortolani test: abduct and lift anteriorly — positive if dislocated hip reduces with a "clunk".',
    },
    {
      type: 'image',
      src: '/images/pavlik-harness.jpg',
      alt: 'Pavlik harness for DDH treatment',
      caption: 'Pavlik harness — maintains hips in safe zone of flexion and abduction. Worn continuously for 6–12 weeks. Success rate >90% when started before 3 months.',
    },

    // ── PERTHES ───────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Perthes Disease (Legg-Calvé-Perthes)',
    },
    {
      type: 'list',
      items: [
        'Avascular necrosis of the femoral head — blood supply interrupted → bone infarction → fragmentation → reossification → remodelling',
        'Age: 4–8 years. Boys >> girls (4:1). Unilateral in 90%; bilateral in 10% (but not simultaneous)',
        'Associations: short stature, hyperactivity, low birth weight — NOT obesity (contrast with SUFE)',
        'Presentation: insidious onset of limp, hip or knee pain (referred pain is common), restricted internal rotation and abduction',
        'X-ray: initially normal → increased density → fragmentation (crescent sign) → reossification → flattened/irregular femoral head (coxa magna/plana)',
        'MRI is the gold standard for early diagnosis',
        'Management: orthopaedic referral — containment (keeping femoral head within acetabulum): rest, physiotherapy, abduction bracing or surgery depending on age and severity',
        'Prognosis better in younger children (<6 years) and when <50% of head is involved',
      ],
    },
    {
      type: 'image',
      src: '/images/perthes.png',
      alt: 'X-ray showing bilateral Perthes disease',
      caption: 'Perthes disease — AP pelvis X-ray showing bilateral femoral head changes: increased density, fragmentation and flattening of the femoral heads.',
    },

    // ── SUFE ─────────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Slipped Upper Femoral Epiphysis (SUFE)',
    },
    {
      type: 'list',
      items: [
        'Fracture through the proximal femoral growth plate — epiphysis displaces posteriorly and inferiorly relative to the metaphysis',
        'Age: 10–15 years (adolescent growth spurt). Obese boys >> girls. 20% bilateral (can be sequential)',
        'Risk factors: obesity, hypothyroidism, hypogonadism, growth hormone deficiency, renal osteodystrophy',
        'Presentation: groin/thigh/knee pain (knee pain only in ~25% — always examine the hip in a child with knee pain), shortened limb, out-toeing gait, restricted internal rotation',
        'Classified as stable (can WB) or unstable (cannot WB — higher risk of AVN)',
        'X-ray: AP pelvis + frog-leg lateral. Klein\'s line (line along superior femoral neck should intersect femoral head) — fails to intersect in SUFE. Frog-leg lateral is most sensitive',
        'Management: non-weight-bearing immediately + urgent orthopaedic referral → in-situ fixation with cannulated screw. Urgent same-day referral — do not delay',
        'Complications: AVN (especially unstable SUFE), chondrolysis, premature osteoarthritis',
      ],
    },
    {
      type: 'image',
      src: '/images/SUFE_1.jpeg',
      alt: 'X-ray showing SUFE — slipped upper femoral epiphysis',
      caption: 'SUFE — AP pelvis X-ray. Arrow indicates the right hip where the femoral epiphysis has slipped posteriorly and inferiorly. Klein\'s line (along superior femoral neck) fails to intersect the femoral head on the affected side.',
    },
    {
      type: 'image',
      src: '/images/sufeperthes.jpg',
      alt: 'SUFE vs Perthes comparison diagram',
      caption: 'SUFE vs Perthes — key differentiating features. Both cause hip pain and limp but differ in age of onset, associations, X-ray findings and management.',
    },

    // ── TRANSIENT SYNOVITIS ───────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Transient Synovitis (Irritable Hip)',
    },
    {
      type: 'list',
      items: [
        'Most common cause of acute hip pain in children aged 3–10 years',
        'Presumed viral aetiology — often preceded by URTI 1–2 weeks before',
        'Presentation: sudden onset unilateral hip pain, antalgic gait, hip held in flexion/abduction/ER (same position as septic arthritis), usually afebrile or low-grade fever',
        'Diagnosis of exclusion — must rule out septic arthritis (Kocher criteria, bloods, ultrasound)',
        'Ultrasound: may show small effusion (non-specific — also seen in septic arthritis)',
        'Management: NSAIDs, rest, safety-netting. Resolves spontaneously in 1–4 weeks in most cases',
        'Safety net: return immediately if fever develops, worsening pain, unable to weight-bear, or no improvement in 48 hours → refer to orthopaedics / paediatrics',
        '~15% risk of Perthes disease in subsequent years — follow-up if symptoms recur',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Differentiating transient synovitis from septic arthritis',
      items: [
        'Kocher criteria: (1) fever >38.5°C, (2) non-weight-bearing, (3) ESR >40 mm/hr, (4) WBC >12,000/mm³',
        '0 criteria: <0.2% probability of septic arthritis',
        '1 criterion: ~3%',
        '2 criteria: ~40%',
        '3 criteria: ~93%',
        '4 criteria: ~99% — needs urgent joint aspiration and washout',
        'CRP >20 mg/L is a useful additional discriminator even if other criteria not met',
      ],
    },

    // ── JIA ───────────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Juvenile Idiopathic Arthritis (JIA)',
    },
    {
      type: 'list',
      items: [
        'Arthritis onset <16 years, persisting >6 weeks, excluding other causes',
        'Most common subtype: oligoarticular JIA (≤4 joints in first 6 months) — typically affects large joints (knee, ankle), ANA positive in 70%',
        'Hip involvement: pain at rest, morning stiffness, restricted range of movement, Trendelenburg gait',
        'Important complication: anterior uveitis (silent — no pain or redness) — regular slit-lamp screening required, risk of blindness if missed',
        'Referral: to paediatric rheumatology. Bloods: ANA, RF, anti-CCP, FBC, CRP, ESR, HLA-B27',
        'Treatment: NSAIDs, intra-articular steroids, methotrexate, biologics (anti-TNF if refractory)',
      ],
    },

    // ── APOPHYSITIS ───────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Apophysitis (Osgood-Schlatter & Sever\'s Disease)',
    },
    {
      type: 'table',
      headers: ['Condition', 'Site', 'Age / sex', 'Features', 'Management'],
      rows: [
        ['Osgood-Schlatter disease', 'Tibial tuberosity — patellar tendon insertion', '10–15y, active boys', 'Pain + swelling over tibial tuberosity, worse with jumping/kneeling, tender on palpation', 'Reassurance — self-limiting by skeletal maturity. Rest, NSAIDs, quadriceps stretching, physiotherapy. Knee pad for school'],
        ['Sever\'s disease', 'Calcaneal apophysis — Achilles insertion', '8–14y, active children', 'Heel pain worse with activity, squeeze test positive, no swelling', 'Reassurance. Heel raise insole, calf stretching, activity modification. Resolves 2 weeks–2 months; can recur until skeletal maturity'],
      ],
    },

    // ── SUMMARY TABLE ─────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Quick Reference Summary',
    },
    {
      type: 'table',
      headers: ['Condition', 'Age', 'Key features', 'X-ray', 'Management'],
      rows: [
        ['Septic arthritis', 'Any', 'Fever, can\'t WB, toxic, held in ER/flex/abd', 'May be normal; USS effusion', 'A&E — IV Abx + washout'],
        ['DDH', 'Newborn–infant', 'Risk factors, unequal leg length, limited abduction', 'Abnormal angle; USS at 6/52', 'Pavlik harness / surgery'],
        ['Transient synovitis', '3–10y', 'Well child, post-URTI, antalgic gait, resolves', 'Normal', 'NSAIDs, rest, safety-net 48h'],
        ['Perthes', '4–8y', 'Insidious limp, restricted IR, small/short stature', 'Flattened/dense femoral head', 'Orthopaedic referral; containment'],
        ['SUFE', '10–15y', 'Obese adolescent, out-toeing, knee pain, ↓IR', 'Frog-leg lateral — slip visible; Klein\'s line', 'NWB + same-day ortho referral'],
        ['JIA', '<16y', '>6/52 arthritis, morning stiffness, uveitis risk', 'Joint space narrowing (late)', 'Paediatric rheumatology'],
        ['Osgood-Schlatter', '10–15y', 'Tibial tuberosity pain, active child', 'May show fragmentation', 'Rest, physio — self-limiting'],
        ['Sever\'s', '8–14y', 'Heel pain on activity, squeeze test +', 'Normal', 'Heel raise, calf stretching'],
        ['Toddler\'s fracture', '<3y', 'Acute limp, often no clear mechanism', 'Subtle spiral tibial fracture', 'A&E, POP if confirmed'],
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'Limping Child Pathway (PDF)', url: '/pdfs/limping-child-pathway.pdf' },
        { label: 'NICE CKS — Hip Pain in Children', url: 'https://cks.nice.org.uk/topics/hip-pain-in-children/' },
        { label: 'NICE CKS — DDH', url: 'https://cks.nice.org.uk/topics/developmental-dysplasia-of-the-hip/' },
        { label: 'RCPCH — Limping Child', url: 'https://www.rcpch.ac.uk' },
      ],
    },
  ],
}
