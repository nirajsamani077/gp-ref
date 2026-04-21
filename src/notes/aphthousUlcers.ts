import type { Note } from '../data/notes'

export const aphthousUlcers: Note = {
  id: 'aphthous-ulcers',
  title: 'Mouth Ulcers',
  subtitle: 'Aphthous ulcers — types, triggers, mouthwashes, investigations, and when to refer',
  tags: ['ent', 'symptoms'],

  body: 'mouth ulcer aphthous canker sore minor major herpetiform oral mucosa recurrent stomatitis painful white slough erythematous border chlorhexidine Corsodyl benzydamine Difflam hydrocortisone Corlan lozenge lidocaine Bonjela Orabase betamethasone doxycycline nicorandil NSAID haematinics B12 folate ferritin coeliac FBC ESR two week wait malignancy oral cancer lichen planus 2WW referral trauma dentures SLS sodium lauryl sulphate',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Aphthous ulcers (canker sores) are the most common cause of recurrent oral ulceration — at least 1 in 5 people affected at some point',
        'Rounded/ovoid painful ulcers with a grey-white sloughy floor and erythematous halo; appear on non-keratinised mucosa (inner cheeks, lips, floor of mouth, soft palate, tongue)',
        'NOT contagious — unlike cold sores (HSV), aphthous ulcers do not occur on the outer lips or skin',
        'Three types: minor (80% — <10 mm, heal in 7–10 days, no scar), major (10% — ≥10 mm, heal in weeks–months, may scar), herpetiform (10% — multiple pinhead clusters, coalesce, heal in 1–2 months)',
        'Most resolve without treatment; recurrence is common but tends to diminish with age',
      ],
    },

    {
      type: 'image',
      src: '/images/aphtous-ulcer.jpg',
      alt: 'Clinical photograph of a classic aphthous ulcer on the inner lower lip — round white-yellow ulcer with surrounding erythema, indicated by a black arrow',
      caption: 'Classic minor aphthous ulcer on the inner lower lip: white-yellow sloughy centre with a red halo. Most resolve within 7–10 days without treatment.',
    },

    {
      type: 'image',
      src: '/images/aphthous-ulcer-1_fee391183f15cb4d62773032fe0be92d.jpg',
      alt: 'Clinical photograph showing a large pale ulcer with surrounding erythema and white change on the inner lower lip mucosa, consistent with a major aphthous ulcer',
      caption: 'Major aphthous ulcer — larger, more indurated, may take weeks to heal and can leave scarring. If persistent >3 weeks or unusual features, refer urgently to exclude malignancy.',
    },

    { type: 'heading', level: 2, text: 'Triggers and Causes' },

    {
      type: 'list',
      items: [
        'Trauma: biting inside of cheek, sharp tooth, ill-fitting dentures or braces, harsh toothbrush, burns from food',
        'Toothpaste containing sodium lauryl sulphate (SLS) — advise SLS-free alternative (e.g. Sensodyne)',
        'Stress and hormonal changes (some women notice perimenstrual flares)',
        'Nutritional deficiencies: iron, vitamin B12, folate — consider investigating if recurrent',
        'Dietary triggers: citrus, spicy food, chocolate, cheese, nuts, coffee',
        'Stopping smoking — some patients develop ulcers after smoking cessation',
        'Family history — genetic predisposition in some cases',
        'Systemic conditions: coeliac disease, Crohn\'s disease, Behçet\'s disease, HIV, haematological malignancy',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Drug causes — check the medication list',
      items: [
        'Nicorandil — well-known cause of large, painful, persistent oral ulcers; stop or switch if suspected',
        'NSAIDs / aspirin (especially if kept in contact with mucosa rather than swallowed)',
        'Methotrexate — mucositis and oral ulcers are a dose-related toxicity; check FBC and folate supplementation',
        'Alendronate — causes ulcers if not taken correctly (must be swallowed upright with full glass of water)',
        'Oral nicotine replacement (gum/lozenges) — switch to patches or nasal spray',
        'Other: captopril, gold, sulphonamides, some chemotherapy agents',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Most single or occasional aphthous ulcers require NO investigations — reassure and manage symptomatically',
        'Investigate if: recurrent ulcers (>3–4 episodes/year), severe or atypical ulcers, associated systemic symptoms, or suspicion of nutritional deficiency',
        'First-line bloods: FBC (anaemia, macrocytosis, neutropenia), serum ferritin, B12, folate, ESR/CRP',
        'Also consider: coeliac screen (TTG IgA + total IgA), TFTs if other thyroid symptoms, HIV test if risk factors',
        'Swab: only if secondarily infected (increasing pain, pus, fever) — send bacterial MC&S',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    { type: 'heading', level: 3, text: 'Self-Care (First-Line for All)' },

    {
      type: 'list',
      items: [
        'Avoid irritants: spicy, acidic, salty foods; rough/crunchy textures; very hot drinks',
        'Use a soft-bristled toothbrush; switch to SLS-free toothpaste',
        'Drink cool drinks through a straw to avoid contact with ulcers',
        'Warm salt-water rinses (½ tsp in a glass of warm water, swish and spit) — soothing, reduces inflammation',
        'Correct any nutritional deficiencies identified on bloods',
        'Review and stop/switch causative medications if identified',
      ],
    },

    { type: 'heading', level: 3, text: 'Prescribable Treatments' },

    {
      type: 'table',
      headers: ['Treatment', 'Preparation', 'Dose / Instructions', 'Notes'],
      rows: [
        [
          'Hydrocortisone lozenges (Corlan)',
          '2.5 mg lozenges',
          '1 lozenge held against ulcer QDS until dissolved — up to 5 days',
          '1st-line pharmacological. Best if started early — can abort ulcer if used at prodrome. Steroid anti-inflammatory effect.',
        ],
        [
          'Chlorhexidine mouthwash (Corsodyl / Chlorohex)',
          '0.2% solution',
          'Rinse 10 mL BD for 1 minute, spit out — use for duration of ulcer',
          'Antimicrobial — reduces secondary infection and may speed healing. Stains teeth brown with prolonged use; avoid tannin-rich drinks (tea, coffee, wine). Rinse well before using as some toothpastes inactivate it.',
        ],
        [
          'Benzydamine (Difflam) mouthwash or spray',
          '0.15% mouthwash or spray',
          'Mouthwash: 15 mL every 1.5–3 hrs. Spray: 4–8 puffs every 1.5–3 hrs',
          'NSAID-like topical analgesic and anti-inflammatory. Useful for pain relief especially before eating. Can sting — dilute 1:1 with water if needed. Licensed from age 12.',
        ],
        [
          'Lidocaine gel / spray',
          '5% ointment or topical preparations (e.g. Instillagel)',
          'Apply sparingly to ulcer 5–10 min before eating',
          'Short-acting topical anaesthetic. Useful before meals. OTC — advise patient to purchase.',
        ],
        [
          'Protective paste (Orabase)',
          'Carmellose paste',
          'Apply thin layer to ulcer after meals and at bedtime',
          'Forms a protective barrier over the ulcer to reduce irritation. No pharmacological effect but helpful for symptomatic relief.',
        ],
        [
          'Choline salicylate gel (Bonjela adult)',
          '8.7% gel',
          'Apply small amount to ulcer with fingertip; massage gently; max 3–4 times daily',
          'Do NOT use in children <16 (risk of Reye\'s syndrome — same reason as aspirin). Children\'s Bonjela uses lidocaine instead.',
        ],
      ],
      caption: 'Prescribable and OTC treatments for aphthous ulcers. Hydrocortisone lozenges (Corlan) are 1st-line prescribable. Chlorhexidine (Corsodyl) and Difflam are useful adjuncts for antimicrobial cover and analgesia respectively.',
    },

    { type: 'heading', level: 3, text: 'Escalation for Severe or Refractory Ulcers' },

    {
      type: 'list',
      items: [
        'Betamethasone 500 mcg soluble tablets: dissolve in 20 mL water, use as mouthwash QDS, spit out — do not swallow; short courses only',
        'Beclomethasone inhaler: spray directly onto ulcer mucosa (unlicensed use); can be helpful for those who cannot tolerate mouthwash',
        'Doxycycline 100 mg dispersible tablet: dissolve in small amount of water, hold in mouth for 2–3 minutes then spit — short course (e.g. 3–5 days); has anti-inflammatory as well as antibiotic properties; useful for major or herpetiform ulcers',
        'Systemic prednisolone: short course (e.g. 30–40 mg for 5 days) for very severe episodes — use sparingly; warn about rebound',
        'Caution: steroid preparations (topical and systemic) may precipitate oral candidiasis — monitor and treat if needed',
        'Refer to oral medicine or maxillofacial if not responding to treatment, or if diagnosis uncertain',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red flags — refer urgently (2WW)',
      items: [
        'Any mouth ulcer persisting >3 weeks without healing — must be referred urgently (2WW) to exclude oral malignancy',
        'Ulcer that is unusual: solitary, indurated edges, bleeding, at back of throat, or rapidly enlarging',
        'Associated features: cervical lymphadenopathy, dysphagia, unexplained weight loss, hoarse voice',
        'Non-midline or atypical location that does not fit simple aphthous pattern',
        'Oral cancer risk especially elevated in: smokers, heavy alcohol users, males >40, those with HPV exposure',
        'When in doubt, refer — do not repeat courses of treatment for an ulcer that is not healing',
      ],
    },

    {
      type: 'image',
      src: '/images/oral-ulcer-pathway.jpg',
      alt: 'Flowchart: Oral ulcer >3 weeks — if features suggest malignancy (solitary, proliferative): refer via 2WW. If no malignant features: isolated ulcer (trauma) or recurrent aphthous → manage in primary care if confident. Widespread mucosal ulceration (e.g. lichen planus) → refer.',
      caption: 'NICE/NICE CKS referral pathway for oral ulcers lasting >3 weeks. Solitary or proliferative-looking ulcers → 2WW. Recurrent aphthous → manage in primary care if confident. Widespread mucosal disease (oral lichen planus, pemphigoid) → refer to oral medicine.',
    },

    {
      type: 'list',
      items: [
        'Recurrent aphthous ulcers (>3–4 episodes/year) despite treatment: refer to oral medicine for specialist review and possible immunomodulatory treatment',
        'Suspected Behçet\'s disease: oral + genital ulcers + ocular/skin involvement — refer to rheumatology',
        'Oral lichen planus, pemphigus, mucous membrane pemphigoid: widespread mucosal involvement — refer to oral medicine/dermatology',
        'Fissure in a child with recurrent ulcers: consider coeliac disease, Crohn\'s, PFAPA syndrome (periodic fever)',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Aphthous Ulcer', url: 'https://cks.nice.org.uk/topics/aphthous-ulcer/' },
        { label: 'Patient.info — Mouth Ulcers', url: 'https://patient.info/oral-dental-care/mouth-ulcers-leaflet' },
        { label: 'NHS — Mouth Ulcers', url: 'https://www.nhs.uk/conditions/mouth-ulcers/' },
      ],
    },

  ],
}
