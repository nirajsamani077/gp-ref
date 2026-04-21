import type { Note } from '../data/notes'

export const alopecia: Note = {
  id: 'alopecia',
  title: 'Alopecia & Hair Loss',
  subtitle: 'Distinguishing scarring from non-scarring alopecia — areata, androgenetic, telogen effluvium, tinea capitis and scarring causes',
  tags: ['dermatology', 'symptoms'],

  body: 'alopecia hair loss scarring non-scarring androgenetic male female pattern baldness androgenic alopecia areata totalis universalis ophiasis telogen effluvium traction trichotillomania tinea capitis ringworm kerion lichen planopilaris discoid lupus folliculitis decalvans frontal fibrosing alopecia CCCA central centrifugal cicatricial exclamation mark hairs pull test Ludwig scale minoxidil Regaine finasteride terbinafine griseofulvin ketoconazole Nizoral betamethasone valerate dermovate clobetasol ferritin TFT thyroid FBC FAI prolactin PCOS androgen excess intralesional triamcinolone dithranol',

  content: [

    // ── KEY DISTINCTION ───────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'The key question: is it scarring or non-scarring?',
      items: [
        'Non-scarring: hair follicles intact, scalp looks normal or mildly inflamed — hair can regrow; accounts for the vast majority of GP presentations',
        'Scarring: follicles destroyed by inflammation → permanent bald patches, shiny atrophic scalp, loss of follicular openings — semi-urgent dermatology referral (within 6 weeks) except tinea capitis (treat first)',
        'Examination clue: part the hair and look — follicular openings visible = non-scarring; absent = scarring',
      ],
    },

    {
      type: 'image',
      src: '/images/alopecia.webp',
      alt: 'Hair loss diagnosis and treatment overview showing androgenetic alopecia, alopecia areata and telogen effluvium with corresponding treatments',
      caption: 'The three commonest causes of hair loss in primary care: androgenetic alopecia (patterned), alopecia areata (patchy), and telogen effluvium (diffuse shedding). Each has a distinct clinical picture and management pathway.',
    },

    // ── INITIAL ASSESSMENT ────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Initial Assessment' },

    {
      type: 'list',
      items: [
        'Pattern: diffuse (all-over thinning/shedding) vs focal/patchy (circumscribed bald patches)',
        'Scarring signs: shiny scalp, loss of follicular openings, erythema, scale, pustules',
        'Duration and rate of loss; previous episodes; family history (males and females)',
        'Trigger history: childbirth (3 months prior?), surgery, illness, crash diet, stress, medications',
        'Systemic features: fatigue, weight change, heat/cold intolerance (thyroid); irregular periods, acne, hirsutism (PCOS/androgen excess)',
        'Hair styling: tight styles, chemical treatments, bleaching → traction/damage',
        'Pull test: grasp 40–60 hairs at root, slide fingers to tip — >6 hairs extracted suggests active shedding (positive in telogen effluvium and active alopecia areata)',
        'QoL impact: hair loss causes significant psychological distress — always ask',
      ],
    },

    {
      type: 'table',
      headers: ['Investigation', 'Rationale', 'When to check'],
      rows: [
        ['FBC', 'Iron deficiency anaemia — common cause of diffuse shedding', 'All diffuse hair loss'],
        ['Ferritin', 'Aim >70 µg/L for hair regrowth — low ferritin alone can cause telogen effluvium', 'All cases; treat if <70'],
        ['TFTs (TSH)', 'Hypo- and hyperthyroidism both cause diffuse hair loss', 'All diffuse hair loss'],
        ['ANA', 'Diffuse loss: screen for SLE; scarring: discoid lupus', 'Diffuse loss; suspected DLE'],
        ['Vitamin D, B12, folate', 'Nutritional deficiencies contributing to shedding', 'Diffuse, especially if diet restricted'],
        ['FSH, LH, prolactin, testosterone, SHBG, DHEAS', 'Female pattern loss: screen for PCOS, androgen excess, peri/menopause', 'Female pattern loss, especially pre-menopausal'],
        ['Skin scraping + plucked hairs (mycology)', 'Confirm tinea capitis', 'Scaly/inflamed scalp, any suspected tinea'],
      ],
    },

    // ── NON-SCARRING ALOPECIA ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Non-Scarring Alopecia' },

    {
      type: 'image',
      src: '/images/alopecia-types.jpg',
      alt: 'Types of alopecia illustrated: alopecia areata, androgenetic, traction areata, central centrifugal cicatricial, chemotherapy-induced, lichen planopilaris, trichotillomania',
      caption: 'Common types of alopecia. Alopecia areata (round patches), androgenetic (patterned thinning), and traction (hairline/temple loss from tight styling) are the most common in GP practice.',
    },

    {
      type: 'table',
      headers: ['Type', 'Pattern', 'Key Features', 'First-line management'],
      rows: [
        ['Alopecia areata', 'Patchy (round/oval)', 'Well-circumscribed smooth bald patches; exclamation mark hairs at margins; normal or slightly red skin; can affect beard/brows/lashes; nail pitting', 'Watchful waiting if <50% or regrowth present; topical steroid if >50% and no regrowth; see below'],
        ['Androgenetic — male', 'Patterned (frontal + vertex)', 'Frontal triangular recession → vertex involvement; family history; no scalp inflammation', 'Minoxidil 5% foam OTC (Regaine) — blacklisted on NHS, purchase OTC; finasteride 1 mg — private prescription only (not NHS for hair loss)'],
        ['Androgenetic — female', 'Diffuse (centroparietal)', 'Crown and parietal thinning; frontal hairline preserved; Ludwig scale I–III; can overlap with PCOS', 'Minoxidil 5% OTC (Regaine for Women) — blacklisted on NHS; refer if severe or androgen excess'],
        ['Telogen effluvium', 'Diffuse (all-over)', 'Acute diffuse shedding 2–6 months after trigger; pull test positive; typically self-limiting', 'Identify/treat trigger; ferritin >70; reassure; minoxidil 5% OTC if persistent (not NHS prescribable)'],
        ['Traction alopecia', 'Fronto-temporal hairline', 'History of tight hairstyles; fringe sign — small spared hairs at hairline; early = reversible', 'Stop causative styling; minoxidil 5% OTC (not NHS prescribable); camouflage'],
        ['Trichotillomania', 'Irregular patchy (often vertex)', 'Self-inflicted pulling (often subconscious); irregular bizarre-shaped patches; broken hairs of varying length; may deny', 'Psychological support; CBT; safeguarding if child'],
      ],
      caption: 'Mnemonic for non-scarring causes: AATT — Areata, Androgenetic, Telogen, Traction/Trichotillomania',
    },

    // ── ALOPECIA AREATA ───────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Alopecia Areata' },

    {
      type: 'image',
      src: '/images/person-with-alopecia-areata-653778784.webp',
      alt: 'Close-up of a man\'s scalp showing multiple well-circumscribed smooth bald patches of alopecia areata on the crown and occipital area',
      caption: 'Alopecia areata: multiple well-demarcated, smooth, totally bald patches. The surrounding scalp appears entirely normal — no scarring, scale or inflammation. Exclamation mark hairs (short broken hairs tapering at the root) may be visible at the active patch margins.',
    },

    {
      type: 'image',
      src: '/images/types-of-alopecia---picture-data.jpg',
      alt: 'Clinical photographs showing alopecia areata, telogen effluvium, triangular alopecia, traction alopecia and scarring alopecia',
      caption: 'Clinical appearances of alopecia areata (discrete round bald patches), telogen effluvium (diffuse thinning along central parting), traction alopecia (hairline recession), and scarring alopecia (shiny scalp with follicle loss).',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'Alopecia Areata — Clinical Features',
      items: [
        'Autoimmune T-cell mediated attack on hair follicles — associated with other autoimmune disease (thyroid, vitiligo, diabetes)',
        'Well-circumscribed, totally bald, smooth patches — skin normal or slightly erythematous',
        'Exclamation mark hairs: short broken hairs that taper at the base, seen at active patch margins',
        'Nail changes in ~20%: pitting (most common), onycholysis, leukonychia',
        'Variants: totalis (whole scalp), universalis (all body hair), ophiasis (band-like occipital), sisaipho (vertex sparing)',
        'Prognosis: 50% spontaneous regrowth within 1 year; 90% eventually — but recurrence is common',
        'Treatments assist regrowth but do not cure — always counsel on realistic expectations',
      ],
    },

    { type: 'heading', level: 3, text: 'Management by Extent' },

    {
      type: 'table',
      headers: ['Extent / Finding', 'Action'],
      rows: [
        ['Any evidence of regrowth', 'Watchful waiting — reassure; review at 3–6 months'],
        ['<20% loss (small patches), no regrowth', 'Watchful waiting; or potent topical steroid — betamethasone valerate 0.1% scalp application'],
        ['>20% and <50% loss, no regrowth', 'Potent topical steroid (betamethasone valerate 0.1%) × 3 months; if no response → very potent (clobetasol propionate 0.05% / Dermovate) × up to 3 months; review at 4–8 weeks'],
        ['>50% loss or no response to topical steroids', 'Refer to dermatology; consider Betnovate/Dermovate scalp application while awaiting referral'],
        ['Facial/beard involvement', 'Topical tacrolimus (Protopic) as steroid-sparer — avoid potent steroids on face'],
        ['Alopecia barbae (beard only)', 'Refer to dermatology'],
        ['Totalis / universalis', 'Refer to dermatology'],
        ['Child, pregnant/breastfeeding, significant distress', 'Refer to dermatology'],
      ],
      caption: 'Do not use potent/very potent topical steroids on beard area or eyebrows.',
    },

    {
      type: 'list',
      items: [
        'Bloods: TFTs and ferritin in all patients; check for associated autoimmune conditions if clinically indicated',
        'Sun protection: advise SPF on exposed bald scalp',
        'Camouflage: hair fibres (e.g. Nanogen), styling, extensions, wigs — available via secondary care NHS or privately',
        'Support: Alopecia UK (alopecia.org.uk) — patient support, wig services, psychological support',
        'Secondary care options: intralesional triamcinolone, dithranol, topical immunotherapy (DPCP), JAK inhibitors (baricitinib — NICE approved 2023 for severe AA), phototherapy',
      ],
    },

    // ── ANDROGENETIC ALOPECIA ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Androgenetic Alopecia (Pattern Baldness)' },

    { type: 'heading', level: 3, text: 'Male Pattern Hair Loss' },

    {
      type: 'list',
      items: [
        'Affects ~50% of men by age 50 — DHT-mediated miniaturisation of hair follicles',
        'Pattern: frontal triangular recession → vertex involvement; Hamilton-Norwood scale I–VII',
        'No investigation usually needed — clinical diagnosis; check ferritin/TFTs if any atypical features',
        'Minoxidil 5% foam (Regaine for Men) — OTC only; blacklisted on NHS (cannot be prescribed); apply once daily; takes up to 12 months for visible effect; must continue indefinitely or hair loss resumes',
        'Finasteride 1 mg OD — 5-alpha reductase inhibitor; NOT prescribable on NHS for hair loss (only licensed on NHS for BPH); private prescription only; review at 4–6 months; continue if effective, stop if no response after 1 year; side effects: sexual dysfunction (~2%), post-finasteride syndrome (rare)',
        'Hair transplant — not available on NHS; private only',
        'Do not refer to dermatology for male pattern baldness alone',
      ],
    },

    { type: 'heading', level: 3, text: 'Female Pattern Hair Loss' },

    {
      type: 'image',
      src: '/images/female-pattern-hair-loss-vs-telogen-effluvium-main-1024x683.png.webp',
      alt: 'Side-by-side illustration comparing female pattern hair loss (thinning on crown, hairline preserved) with telogen effluvium (diffuse thinning across whole scalp)',
      caption: 'Key distinction: female pattern hair loss shows centroparietal thinning with the frontal hairline preserved. Telogen effluvium causes diffuse thinning across the entire scalp. Both can coexist — treat the underlying cause first.',
    },

    {
      type: 'image',
      src: '/images/types-of-hair-loss-women-uk-guide.jpg.webp',
      alt: 'Female hair loss patterns: alopecia areata (circular bald patches), telogen effluvium (diffuse thinning), traction alopecia (hairline), nutritional deficiency (brittle thinning)',
      caption: 'Female hair loss patterns. Androgenetic alopecia causes diffuse centroparietal thinning with preserved frontal hairline (unlike male pattern). Traction shows fronto-temporal loss along the hairline.',
    },

    {
      type: 'image',
      src: '/images/ludwig-scale-female-hair-loss-grades.jpg.webp',
      alt: 'Ludwig scale grades I, II and III showing progressively severe female pattern hair loss with widening central parting',
      caption: 'Ludwig Scale for female androgenetic alopecia: Grade I — mild widening of central parting; Grade II — wider parting, visible scalp; Grade III — extensive crown thinning. Minoxidil is appropriate for all grades; refer Grade III or if androgen excess features.',
    },

    {
      type: 'list',
      items: [
        'Diffuse centroparietal thinning with preserved frontal hairline (distinguish from telogen effluvium by gradual onset and pattern)',
        'Ludwig Scale I–III — all grades consider Minoxidil 5% solution once daily (OTC, Regaine for Women); blacklisted on NHS — patients must purchase OTC; review at 6 months; continue indefinitely if effective',
        'Pre-menopausal: check FSH, LH, prolactin, testosterone, SHBG, DHEAS, 17-hydroxyprogesterone; USS pelvis if PCOS suspected',
        'Post-menopausal: check ferritin, TFTs, ANA',
        'If acne or hirsutism: check free androgen index (FAI) + prolactin; consider PCOS or androgen-secreting tumour',
        'Refer to dermatology if: severe (Ludwig III), distressing, no response to minoxidil after 1 year, features of androgen excess needing specialist input',
        'Secondary care options: oral finasteride (off-label), spironolactone, co-cyprindiol (Dianette)',
      ],
    },

    // ── TELOGEN EFFLUVIUM ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Telogen Effluvium' },

    {
      type: 'image',
      src: '/images/1-hair-growth-cycle.jpg',
      alt: 'Hair growth cycle diagram showing anagen (growing), catagen (transition), telogen (resting) and telogen effluvium (shedding) phases with cross-sectional follicle illustrations',
      caption: 'The hair growth cycle. In telogen effluvium, a systemic stressor triggers a mass shift of follicles from anagen into the telogen (resting) phase. When these hairs are shed 2–6 months later, diffuse thinning results. Follicles remain intact — regrowth occurs once the trigger resolves.',
    },

    {
      type: 'list',
      items: [
        'Diffuse hair shedding due to a shift of follicles into the resting (telogen) phase en masse — occurs 2–6 months after a physiological stressor',
        'Common triggers: childbirth (very common — postpartum effluvium), severe illness, surgery, high fever, crash dieting, marked weight loss, emotional stress, COVID-19',
        'Drug causes: chemotherapy, TCAs, allopurinol, retinoids, anticoagulants, anticonvulsants, beta-blockers, lithium, OCP cessation',
        'Pull test: positive (>6 hairs); diffuse thinning across entire scalp',
        'Investigations: FBC, ferritin (aim >70 µg/L), TFTs, ANA, vitamin D, B12/folate; zinc/magnesium if restricted diet',
        'Treatment: identify and treat underlying cause; reassure that regrowth occurs in 6–9 months; correct nutritional deficiencies; minoxidil 5% OTC (blacklisted on NHS — purchase OTC) can accelerate recovery',
        'Refer to dermatology if no improvement after 9 months — to exclude diffuse alopecia areata or chronic telogen effluvium',
        'Chronic telogen effluvium (>6 months): more common in women; often multifactorial — ongoing stress, thyroid, iron deficiency; may overlap with female pattern',
      ],
    },

    // ── TRACTION & TRICHOTILLOMANIA ───────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Traction Alopecia & Trichotillomania' },

    {
      type: 'table',
      headers: ['', 'Traction Alopecia', 'Trichotillomania'],
      rows: [
        ['Cause', 'Mechanical tension from tight hairstyles (braids, weaves, extensions, tight ponytail)', 'Repetitive compulsive hair pulling — often subconscious; OCD spectrum'],
        ['Pattern', 'Fronto-temporal hairline recession; spares small hairs not involved in styling ("fringe sign")', 'Irregular bizarre-shaped patches, typically vertex/crown; broken hairs of varying length at edges'],
        ['Scalp', 'Normal; perifollicular erythema early', 'Normal; hairs twisted/broken, not absent'],
        ['Reversibility', 'Reversible if caught early; irreversible scarring if prolonged', 'Reversible if behaviour stopped'],
        ['Management', 'Stop causative styling; minoxidil 5% OTC; camouflage; refer if advanced scarring', 'CBT; habit reversal therapy; consider safeguarding if child; refer psychology/psychiatry'],
      ],
    },

    // ── SCARRING ALOPECIA ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Scarring Alopecia' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Scarring alopecia — refer semi-urgently (within 6 weeks) to dermatology',
      items: [
        'Permanent hair loss due to inflammatory destruction of follicles — early treatment prevents further irreversible loss',
        'Exception: tinea capitis — treat with oral antifungals in primary care; only refer if kerion or no response',
        'While awaiting referral (all except tinea): start Dermovate (clobetasol propionate 0.05%) scalp application to slow progression',
        'Skin biopsy often needed for definitive diagnosis',
      ],
    },

    {
      type: 'table',
      headers: ['Cause', 'Key Features', 'Initial Management'],
      rows: [
        ['Tinea capitis', 'Scaly, red, inflamed; itchy; broken hairs; kerion (boggy pustular mass) in severe cases; most common in children; Afro-Caribbean background (T. tonsurans)', 'Skin scrapings + plucked hairs for mycology; oral terbinafine or griseofulvin — see below; only reversible cause'],
        ['Discoid lupus (DLE)', 'Scaly disc-like plaques, follicular plugging, pigment changes (hyperpigmentation/hypopigmentation); face and scalp; may precede systemic lupus', 'ANA/ENA; topical clobetasol; refer semi-urgently'],
        ['Lichen planopilaris', 'Smooth white patches; perifollicular scale and erythema at margins; spiny on palpation; more common in young women; frontal fibrosing alopecia is a variant (hairline recession in postmenopausal women)', 'Topical clobetasol × 8 weeks; doxycycline 100 mg OD × 3–6 months; refer'],
        ['Frontal fibrosing alopecia', 'Progressive band-like recession of frontal/temporal hairline; perifollicular erythema; often postmenopausal women; eyebrow loss common', 'Topical clobetasol; doxycycline 100 mg OD; refer semi-urgently'],
        ['Folliculitis decalvans', 'Pustular, erosive; grouped follicular pustules at margins of expanding bald area; scarring, pain, itch', 'Swab; hibiscrub + doxycycline 100 mg OD or lymecycline 408 mg OD × 3–6 months; refer if severe'],
        ['CCCA (Central Centrifugal Cicatricial)', 'Starts at vertex/mid-scalp, expands outwards; most common in Black women; traction often coexists; tenderness, itch, burning', 'Topical clobetasol × 8 weeks; doxycycline 100 mg OD × 3–6 months; stop traumatic hair styling; refer'],
        ['Dissecting cellulitis', 'Boggy fluctuant abscesses and sinus tracts at vertex; interconnected channels; scarring; predominantly young Black men', 'Swab; hibiscrub + doxycycline/lymecycline; refer if severe'],
      ],
    },

    // ── TINEA CAPITIS ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Tinea Capitis (Scalp Ringworm)' },

    {
      type: 'para',
      text: 'The only scarring alopecia where early GP treatment can prevent permanent hair loss. Most common in children; rare in adults. Two main species in the UK: Trichophyton tonsurans (most common, Afro-Caribbean children, spread person-to-person) and Microsporum canis (from animals — cats, dogs).',
    },

    {
      type: 'image',
      src: '/images/329-tinea-capitis-with-associated-alopecia-1-1024x1024.jpg',
      alt: 'Clinical photograph of tinea capitis showing a scaly, erythematous, inflamed patch of hair loss on the scalp being examined with gloved hands',
      caption: 'Tinea capitis: inflamed, scaly, erythematous patch with associated hair loss. Note the scaling and erythema distinguishing this from the smooth, non-inflamed patches of alopecia areata. Send skin scrapings and plucked hairs for mycology before starting treatment.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Kerion — refer urgently to dermatology',
      items: [
        'Boggy, painful, pustular mass on scalp — intense inflammatory response to fungal infection',
        'Associated lymphadenopathy; patient may be systemically unwell with fever',
        'Hairs fall out leaving boggy bald area; if untreated → permanent scarring alopecia',
        'Refer urgently — may require systemic steroids alongside antifungals to reduce scarring',
      ],
    },

    {
      type: 'image',
      src: '/images/kerion.jpg',
      alt: 'Clinical photograph of a kerion on the scalp — a boggy, pustular, inflammatory mass with yellow crusting and hair loss',
      caption: 'Kerion: a boggy, painful, pustular mass representing an intense inflammatory reaction to tinea capitis. Associated lymphadenopathy is common. Without urgent treatment (oral antifungals ± systemic steroids), permanent scarring alopecia results. Refer urgently to dermatology.',
    },

    {
      type: 'table',
      headers: ['Species', 'Source', 'Treatment', 'Duration'],
      rows: [
        ['Trichophyton tonsurans', 'Person-to-person; sharing combs, hats, pillows', 'Oral terbinafine (Lamisil) 250 mg OD (unlicensed in children — weight-based if <40 kg)', '4 weeks; adjust when culture results available'],
        ['Microsporum canis', 'Animals (cats, dogs)', 'Griseofulvin (licensed) 500 mg BD', '8 weeks; avoid in pregnancy; reduces OCP efficacy'],
        ['Either / adjunct', '—', 'Ketoconazole 2% shampoo (Nizoral) twice weekly × 2–4 weeks — reduces transmission', 'All household contacts should use for 2 weeks'],
      ],
      caption: 'Start treatment before culture results if clinical diagnosis is clear — adjust when results available. Check LFTs before terbinafine.',
    },

    {
      type: 'list',
      items: [
        'Investigations: skin scrapings and plucked hairs (root intact) — send for mycology; Wood\'s lamp: M. canis fluoresces green; T. tonsurans does not fluoresce',
        'Infection control: avoid sharing towels, combs, helmets, hats, pillows; disinfect or discard items that can transmit spores; advise school absence until treatment started',
        'Family members: check contacts; asymptomatic carriers can be treated with ketoconazole shampoo alone',
        'Children under 5: clotrimazole cream daily for 1 week as adjunct',
        'Selenium sulphide shampoo (OTC) — alternative to ketoconazole shampoo; use twice weekly × 2 weeks; contraindicated in pregnancy',
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: 'PCDS — Alopecia Overview', url: 'https://www.pcds.org.uk/clinical-guidance/alopecia-an-overview' },
        { label: 'Alopecia UK — Patient Support', url: 'https://www.alopecia.org.uk' },
        { label: 'NICE CKS — Alopecia Areata', url: 'https://cks.nice.org.uk/topics/alopecia-areata/' },
        { label: 'BAD — Female Pattern Hair Loss', url: 'https://www.bad.org.uk/pils/female-pattern-hair-loss/' },
        { label: 'NICE CKS — Tinea Capitis', url: 'https://cks.nice.org.uk/topics/fungal-skin-infection-scalp/' },
      ],
    },

  ],
}
