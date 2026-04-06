import type { Note } from '../data/notes'

export const achillesTendinopathy: Note = {
  id: 'achilles-tendinopathy',
  title: 'Achilles Tendinopathy & Rupture',
  subtitle: 'Diagnosis, management, Simmonds triad & when to refer',
  tags: ['msk', 'orthopaedics', 'cks'],

  body: 'Achilles tendinopathy tendon rupture heel pain insertional mid-portion calcaneus Simmonds triad Thompson test calf squeeze plantar flexion dorsiflexion gap palpable eccentric exercises Alfredson shockwave ESWT ciprofloxacin fluoroquinolone corticosteroid steroid equinus moonboot orthopaedics casting plantar fasciitis bursitis retrocalcaneal Haglund sural nerve Severs calcaneal apophysitis RICE load management heavy slow resistance training hopping heel raise arc sign',

  content: [

    // ── Overview ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Achilles tendinopathy is one of the most common overuse injuries seen in primary care, affecting both athletes and sedentary patients. It describes a painful, degenerative process within the tendon (tendinosis) rather than acute inflammation. It is distinct from Achilles tendon rupture, though longstanding tendinopathy — and certain drugs — significantly increase rupture risk.',
    },
    {
      type: 'table',
      headers: ['Type', 'Location', 'Prevalence', 'Key features'],
      rows: [
        ['Mid-portion', '2–6 cm proximal to calcaneal insertion', '~69%', 'Fusiform swelling, arc sign positive, pain on calf loading'],
        ['Insertional',  'At the calcaneal insertion', '~16%', 'Pain at bone-tendon junction, may have Haglund\'s deformity or calcification, worse with heel tab of shoes'],
        ['Combined',     'Both locations', '~15%', 'Features of both; may indicate widespread tendon pathology'],
      ],
    },
    {
      type: 'image',
      src: '/images/559d2c_628a22661db446e29916a88e44bd97e3~mv2.png',
      alt: 'Achilles tendon anatomy showing mid-portion and insertional subtypes',
      caption: 'Mid-portion tendinopathy (69%) occurs 2–6 cm above insertion; insertional (16%) at the calcaneus. Tap to enlarge.',
    },

    // ── Presentation ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Presentation — Tendinopathy' },
    {
      type: 'list',
      items: [
        'Gradual onset aching or stiffness at the heel, typically worse with first steps in the morning ("start-up pain") then improving with activity, only to worsen again after.',
        'Pain increases with loading activities — running, jumping, prolonged walking, stairs.',
        'Localised swelling or nodularity visible or palpable over the tendon (mid-portion) or at the heel (insertional).',
        'Insertional: pain at the back of the heel, aggravated by the heel tab of footwear; may coexist with retrocalcaneal bursitis or Haglund\'s deformity.',
      ],
    },

    { type: 'heading', level: 3, text: 'Clinical tests' },
    {
      type: 'table',
      headers: ['Test', 'Method', 'Positive if'],
      rows: [
        ['Single-leg heel raise',   'Patient stands on one leg, raises onto tiptoe repeatedly', 'Unable to complete or pain reproduced — correlates with tendon load capacity'],
        ['Single-leg hop',          'Hop on affected leg',                                       'Pain reproduced at tendon'],
        ['Arc sign',                'Palpate tendon while passively dorsi- and plantarflexing the ankle', 'Tender nodule moves with the tendon (mid-portion) — distinguishes tendinopathy from paratendinitis where tenderness stays fixed'],
        ['Royal London Hospital test', 'Palpate 2–3 cm above insertion; then dorsiflex to 90°', 'Pain disappears on dorsiflexion — specific for insertional tendinopathy'],
        ['Palpation',               'Squeeze the tendon between thumb and finger', 'Localised tenderness — correlates with site of pathology'],
      ],
    },

    // ── Risk Factors ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Risk Factors' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Fluoroquinolone (quinolone) antibiotics — important drug cause',
      items: [
        'Ciprofloxacin and other quinolones (levofloxacin, moxifloxacin) cause fluoroquinolone-associated tendinopathy and are a recognised cause of spontaneous Achilles rupture.',
        'Risk is highest in patients over 60, those on concurrent corticosteroids, and renal transplant recipients.',
        'Always warn patients prescribed quinolones to report any new tendon pain immediately and to stop the antibiotic — MHRA black box warning.',
        'Avoid prescribing quinolones in patients with existing tendinopathy.',
      ],
    },
    {
      type: 'list',
      items: [
        'Training errors: sudden increase in intensity, volume, or change of surface.',
        'Biomechanical factors: overpronation, leg length discrepancy, tight gastrocnemius-soleus complex.',
        'Systemic inflammatory disease (e.g. rheumatoid arthritis, psoriatic arthritis, reactive arthritis).',
        'Metabolic: diabetes, obesity, metabolic syndrome, familial hypercholesterolaemia (tendon xanthomata).',
        'Endocrine: hypothyroidism, hyperparathyroidism.',
        'Corticosteroids (systemic or peritendinous injection) — weaken tendon collagen.',
        'Male sex, age 30–55, sedentary "weekend warriors".',
      ],
    },

    // ── Differential Diagnosis ───────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Differential Diagnosis' },
    {
      type: 'table',
      headers: ['Diagnosis', 'Distinguishing features'],
      rows: [
        ['Achilles tendon rupture',             'Sudden snap during activity, unable to plantarflex against resistance, palpable gap, positive Simmonds test — requires same-day orthopaedic review'],
        ['Plantar fasciitis',                   'Pain under the heel (plantar surface), worst on first steps in the morning, tenderness at medial calcaneal tubercle'],
        ['Retrocalcaneal bursitis',             'Pain deep to the tendon at the insertion, tenderness compressing the retrocalcaneal space, may coexist with insertional tendinopathy'],
        ['Haglund\'s deformity',               'Bony prominence at posterosuperior calcaneus, visible bump, aggravated by heel counter of shoes'],
        ['Sever\'s disease (calcaneal apophysitis)', 'Children aged 8–14, pain at calcaneal growth plate, bilateral in 60%'],
        ['Partial Achilles tear',               'May present similarly to tendinopathy but with acute exacerbation; consider USS'],
        ['Sural nerve neuropathy',              'Burning/shooting pain along lateral border of foot and 5th toe, positive Tinel\'s behind the lateral malleolus'],
        ['Posterior ankle impingement / os trigonum', 'Plantarflexion pain rather than dorsiflexion loading, dancers and gymnasts'],
        ['Stress fracture (calcaneus)',         'Diffuse heel pain, tenderness on medial-lateral calcaneal squeeze, history of sudden increase in training load'],
      ],
    },
    {
      type: 'image',
      src: '/images/bjsports-2025-July-59-13-891-F2.large.jpg',
      alt: 'Four-step diagnostic algorithm for Achilles tendinopathy',
      caption: 'Structured 4-step diagnostic approach — always exclude rupture and medical causes first. Tap to enlarge.',
    },

    // ── Management: Tendinopathy ─────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Management — Tendinopathy' },

    { type: 'heading', level: 3, text: 'Phase 1: Initial (0–7 days)' },
    {
      type: 'list',
      items: [
        'Relative rest — reduce aggravating activities (e.g. running) but do NOT enforce complete rest; disuse worsens tendinopathy.',
        'Ice (10–15 min, 3–4× daily) for symptom relief in acute flare.',
        'Simple analgesia — paracetamol or short-course NSAIDs for pain control (evidence for NSAIDs in tendinopathy is limited but they may help in early phase).',
        'Heel raises / wedges (1–1.5 cm) — particularly helpful for mid-portion; reduces Achilles load by reducing dorsiflexion range. Note: avoid in insertional tendinopathy as this increases insertional compression.',
        'Footwear review — avoid heel tabs that irritate the insertion; ensure adequate cushioning.',
      ],
    },

    { type: 'heading', level: 3, text: 'Phase 2: Loading programme (7–10 days onwards)' },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Exercise is the evidence-based cornerstone of treatment',
      items: [
        'Eccentric calf loading (Alfredson protocol) — traditionally first-line for mid-portion tendinopathy: 3 sets of 15 repetitions twice daily, going through pain (rated ≤5/10 VAS), over a 12-week programme.',
        'Heavy slow resistance (HSR) training is now considered at least equally effective and better tolerated — slower tempo eccentric-concentric loading with heavier weights, 3–4 sessions/week.',
        'Isometric loading (e.g. sustained heel raise hold) is useful in the very painful/acute phase as it provides immediate analgesia and can be performed without exacerbating symptoms.',
        'Insertional tendinopathy: avoid full range dorsiflexion in exercises — perform heel drops only to neutral (not below step level) to avoid compressive load at insertion.',
        'Refer to physiotherapy if not improving after 6–8 weeks of self-managed loading.',
      ],
    },
    {
      type: 'image',
      src: '/images/Achilles-Tendonitis-Infographic-ultime-guide-page-2.png',
      alt: 'Achilles tendinopathy exercise programme — isometric hold, isotonic calf raise, plantar flexion with resistance band',
      caption: 'Key exercises: isometric hold → isotonic calf raise → resistance band plantarflexion. Tap to enlarge.',
    },
    {
      type: 'linkrow',
      links: [
        { label: 'Achilles Exercise Videos (YouTube playlist)', url: 'https://www.youtube.com/playlist?list=PL1sDnegMCeASAQQBJtiW18BVTXsfoYk-c' },
      ],
    },

    { type: 'heading', level: 3, text: 'Phase 3: Secondary care options' },
    {
      type: 'table',
      headers: ['Intervention', 'Evidence & notes'],
      rows: [
        ['Extracorporeal Shockwave Therapy (ESWT)', 'Good evidence for mid-portion tendinopathy; NICE recommends with informed consent. 3–5 sessions. Can be effective in chronic cases that have failed loading.'],
        ['Platelet-Rich Plasma (PRP) injection',    'Emerging evidence; not routinely commissioned on NHS. May help in refractory tendinopathy.'],
        ['High-volume image-guided injection (HVIGI)', 'Saline + local anaesthetic ± corticosteroid injected around the paratenon under ultrasound. Targets neovascularisation. Secondary care only.'],
        ['Surgery',                                 'Last resort after ≥6 months of failed conservative treatment. Debridement, gastrocnemius release, or tendon transfer (FHL). Recovery 6–12 months.'],
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Do NOT inject corticosteroid into or around the Achilles tendon',
      items: [
        'Peritendinous corticosteroid injection significantly increases the risk of Achilles tendon rupture by disrupting collagen cross-linking.',
        'NICE and CREST guidelines explicitly advise against corticosteroid injection for Achilles tendinopathy.',
        'If a patient has been treated elsewhere with steroid injection, document and counsel about rupture risk; advise against high-impact activity for several weeks.',
      ],
    },

    // ── Achilles Rupture ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Achilles Tendon Rupture' },
    {
      type: 'para',
      text: 'Achilles tendon rupture typically occurs during sudden explosive activity — a forceful push-off, jump, or change of direction. The classic history is a 30–50-year-old male "weekend warrior" who feels a sudden snap at the back of the heel, as if hit from behind. May also occur spontaneously in those with predisposing factors.',
    },

    { type: 'heading', level: 3, text: 'Presentation' },
    {
      type: 'list',
      items: [
        'Sudden severe pain at the posterior heel — often described as a "snap" or feeling of being kicked from behind.',
        'Audible pop at the time of injury.',
        'Bruising and swelling developing over the heel and lower calf within hours.',
        'Difficulty or inability to weight bear normally — note: some patients can still walk (using other plantarflexors), which may falsely reassure.',
        'Unable to plantarflex against resistance (cannot raise onto tiptoe on the affected leg).',
        'Risk factors: pre-existing tendinopathy, quinolone antibiotics, systemic corticosteroids, male sex, age 30–50, sudden increase in activity.',
      ],
    },

    { type: 'heading', level: 3, text: 'Simmonds Triad (Thompson Test) — Diagnosing Rupture' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Simmonds examination — perform with patient prone, feet over the edge of the couch',
      items: [
        '1. PALPABLE GAP — run your fingers along the tendon; a defect or step 2–6 cm above the insertion indicates complete rupture. May be obscured by haematoma if presentation is delayed.',
        '2. ANGLE OF DECLINATION — compare the resting position of both feet. The injured foot hangs in greater dorsiflexion (less plantarflexion) due to loss of tendon tension. This is the most specific sign.',
        '3. CALF SQUEEZE TEST (Thompson / Simmonds) — firmly squeeze the bulk of the calf muscle. In an intact tendon, this produces passive plantarflexion. If there is NO plantarflexion = complete rupture (positive test).',
        'All three signs together = Simmonds triad. Positive calf squeeze alone has sensitivity ~96% and specificity ~93% for complete rupture.',
        'Partial tears may show a weakly positive squeeze with some residual plantarflexion — ultrasound or MRI needed for confirmation.',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: 'Simmonds Test — video demonstration', url: 'https://www.youtube.com/watch?v=xFnWAjrTGHc' },
      ],
    },

    { type: 'heading', level: 3, text: 'Management of Rupture' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Suspected Achilles rupture = same-day orthopaedic review',
      items: [
        'Do NOT allow the patient to leave without arranging same-day assessment by orthopaedics or an emergency department with orthopaedic cover.',
        'Apply a below-knee backslab in equinus (plantarflexion) to hold the tendon ends in approximation while awaiting review.',
        'Do NOT apply a neutral or dorsiflexed cast — this will allow the tendon to heal at the wrong length.',
      ],
    },
    {
      type: 'table',
      headers: ['Management option', 'Detail'],
      rows: [
        ['Conservative (functional rehabilitation)', 'Equinus casting or functional brace (moonboot) in staged plantarflexion, with early controlled mobilisation. Re-rupture rate similar to surgical management in RCTs. Preferred in older, less active patients or where surgical risk is high.'],
        ['Surgical repair', 'Primary tendon repair followed by functional rehabilitation. Generally preferred in young, active patients and athletes — faster return to sport, potentially lower re-rupture rate. Open or minimally invasive techniques available.'],
        ['Rehabilitation', 'Both routes require structured physiotherapy over 6–12 months. Return to recreational sport: typically 6 months; elite sport: 9–12 months.'],
        ['Moonboot / functional brace', 'Progressive weight bearing from early stage. Heel wedges progressively reduced over 6–8 weeks to allow gradual tendon lengthening to neutral.'],
      ],
    },

    // ── When to Refer ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Referral Summary' },
    {
      type: 'table',
      headers: ['Situation', 'Referral', 'Urgency'],
      rows: [
        ['Suspected complete Achilles rupture',           'Orthopaedics / Emergency Department',       'Same day'],
        ['Suspected partial tear',                         'Orthopaedics or MSK ultrasound',            'Urgent (within days)'],
        ['Tendinopathy not improving after 6–8 weeks of loading', 'Physiotherapy',                    'Routine'],
        ['Chronic tendinopathy — failed physio',          'MSK / Orthopaedics for shockwave or HVIGI', 'Routine'],
        ['Surgical consideration',                         'Orthopaedics',                              'Routine'],
        ['Suspected systemic inflammatory arthropathy',   'Rheumatology',                              'Routine / urgent depending on features'],
        ['Child with heel pain — ?Sever\'s',             'Paediatrics / Paediatric physio if severe',  'Routine'],
      ],
    },
  ],
}
