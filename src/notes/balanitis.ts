import type { Note } from '../data/notes'

export const balanitis: Note = {
  id: 'balanitis',
  title: 'Balanitis',
  subtitle: 'Inflammation of the glans penis — differential diagnosis, treatment by cause, and when to refer',
  tags: ['urology', 'dermatology', 'infection'],

  body: 'balanitis balanoposthitis glans penis foreskin inflammation candida candidiasis contact dermatitis eczema psoriasis lichen sclerosus BXO balanitis xerotica obliterans Zoons Zoon circinate Reiter reactive arthritis seborrhoeic dermatitis bacterial anaerobic phimosis clotrimazole fluconazole hydrocortisone clobetasol metronidazole flucloxacillin circumcision STI screen diabetes HbA1c recurrent penile cancer 2WW',

  content: [

    {
      type: 'image',
      src: '/images/balanitis.jpeg',
      alt: 'Balanitis diagram showing healthy glans vs inflamed glans with redness, blotchy rash and white discharge',
      caption: 'Balanitis: inflammation of the glans penis (and foreskin when involved = balanoposthitis). Features include redness, blotchy rash and white discharge. Most cases are benign and treatable in primary care — the key task is identifying the cause.',
    },

    // ── FIRST STEPS ───────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'First steps — always consider these',
      items: [
        'Check blood glucose / HbA1c — recurrent or treatment-resistant balanitis is a classic presentation of undiagnosed type 2 diabetes; candidal balanitis is especially associated',
        'Consider STI — gonorrhoea, chlamydia and herpes simplex can all cause balanoposthitis; take a sexual history and swab if appropriate; refer GUM if STI suspected',
        'Swab if infective cause suspected — HVS (glans swab) for candida MC&S, bacterial culture; do not swab if clear contact/irritant history',
        'Hygiene history — soap, shower gel, spermicide, latex condoms and washing powder on underwear are all common irritants; avoid all potential irritants regardless of cause',
        'Circumcision status — Zoon\'s balanitis and lichen sclerosus most commonly affect uncircumcised men; circumcision can be curative',
      ],
    },

    // ── DDx TABLE ─────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Differential Diagnosis & Treatment' },

    {
      type: 'table',
      headers: ['Type', 'Clinical Features', 'Treatment'],
      rows: [
        [
          'Candidal balanitis\n(most common)',
          'Itch, soreness; white curd-like discharge under foreskin; satellite lesions (small red spots beyond main rash); often worse after sex or antibiotics; partner may have vaginal thrush',
          'Clotrimazole 1% cream apply 2–3× daily for 7–14 days. If recurrent (≥4/year) or severe: fluconazole 150 mg stat PO. Check HbA1c. Treat partner if symptomatic. Avoid soap.',
        ],
        [
          'Contact / irritant dermatitis',
          'Clear discharge; redness without satellite lesions; no itch (or mild); history of new soap, gel, condom, spermicide or washing powder; improves on removal of irritant',
          'Remove irritant — this is the key treatment. Saline or plain water to clean. Hydrocortisone 1% cream if significant inflammation. Advise non-biological washing powder, fragrance-free products.',
        ],
        [
          'Bacterial / anaerobic',
          'Malodour; purulent discharge; pain; erythema; may be associated with phimosis trapping debris; usually polymicrobial (anaerobes, streptococci)',
          'Saline washes. Oral metronidazole 400 mg TDS 5–7 days (anaerobes). If streptococcal/staphylococcal features: flucloxacillin 500 mg QDS 5–7 days. Swab for MC&S.',
        ],
        [
          'Eczema / atopic dermatitis',
          'Itch; well-demarcated erythema; may have dry or weeping skin; history of atopy (eczema, asthma, hayfever); can affect circumcised and uncircumcised',
          'Hydrocortisone 1% cream BD for 7–14 days. Emollient as soap substitute. Avoid irritants. If refractory: betamethasone 0.1% or refer dermatology.',
        ],
        [
          'Psoriasis',
          'Small red, shiny, well-demarcated patches on glans or shaft; usually NOT scaly (moisture prevents scaling); can be circumcised; may have psoriasis elsewhere',
          'Hydrocortisone 1% cream initially. If confirmed psoriasis: low-to-mid potency topical steroid (betamethasone valerate 0.025%). Refer dermatology if uncertain or not responding.',
        ],
        [
          'Seborrhoeic dermatitis',
          'Itchy, well-demarcated rash; may have seborrhoeic dermatitis elsewhere (scalp, nasolabial folds, chest); yellowish scale; responds to antifungal',
          'Clotrimazole 1% cream or ketoconazole 2% cream BD for 2–4 weeks. Hydrocortisone 1% if significant inflammation. Combined clotrimazole/hydrocortisone (Canesten HC) is a convenient option.',
        ],
        [
          'Lichen sclerosus\n(BXO — Balanitis Xerotica Obliterans)',
          'Tight white ring or pale plaques at the foreskin / glans; phimosis; skin fissuring; may cause difficulty retracting foreskin; voiding difficulties if urethral involvement; almost always uncircumcised',
          '🔴 Refer urology. Clobetasol propionate 0.05% (Dermovate) applied once daily x 3 months — superpotent steroid is first-line. Circumcision often curative. Ongoing urology follow-up due to risk of urethral stenosis and small increase in penile cancer risk.',
        ],
        [
          'Zoon\'s balanitis\n(plasma cell balanitis)',
          'Orange-red, glistening, moist patches on glans with characteristic "cayenne pepper" pinpoint red spots; chronic, non-itchy; almost exclusively in uncircumcised middle-aged and older men; biopsy may be needed',
          'Hydrocortisone 1% initially; may need stronger topical steroid. Circumcision is curative. Refer urology/dermatology to confirm diagnosis and manage.',
        ],
        [
          'Circinate balanitis\n(reactive arthritis / Reiter\'s)',
          'Well-demarcated red plaques with ragged white border; associated with urethritis, conjunctivitis and arthritis (Reiter\'s triad); follows STI (chlamydia) or GI infection; HLA-B27 association',
          'Treat underlying STI if causative. Mild topical steroid (hydrocortisone 1%). Manage reactive arthritis. Refer rheumatology if systemic features.',
        ],
        [
          'Herpes simplex (HSV)',
          'Painful vesicles that rupture to form shallow ulcers; may be recurrent; tender inguinal lymphadenopathy; constitutional symptoms in primary episode',
          'Refer GUM / swab for HSV PCR. Aciclovir 200 mg 5× daily for 5 days (primary episode). If recurrent: aciclovir 800 mg TDS for 2 days (episodic). Partner notification. Consider suppression if frequent recurrences.',
        ],
      ],
      caption: 'Most balanitis is caused by candida, contact irritants or a dermatological condition. Always advise saline/water cleansing and avoidance of irritants regardless of cause. Recurrent or atypical presentations warrant swabs, STI screen, HbA1c and dermatology/urology review.',
    },

    // ── GENERAL TREATMENT ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'General Advice — For All Causes' },

    {
      type: 'list',
      items: [
        'Gentle saline washes (1 tsp salt in 1 pint of warm water) twice daily — do not use soap, shower gel or antiseptics directly on the glans',
        'Retract foreskin gently to clean (if possible) — never force it',
        'Avoid potential irritants: fragranced soap, shower gel, spermicide, latex condoms, biological washing powder',
        'Dry gently after washing — moisture promotes candida and bacterial overgrowth',
        'Loose-fitting cotton underwear — reduces friction and moisture',
        'Avoid intercourse until settled — can worsen inflammation and risk partner transmission (candida in particular)',
      ],
    },

    // ── RED FLAGS / REFERRAL ──────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — 2WW Urology Referral',
      items: [
        'Any persistent penile lesion that has not responded to 6 weeks of appropriate treatment',
        'Verrucous, ulcerated, pigmented or indurated lesion on the glans, foreskin or shaft — ?penile cancer',
        'Painless ulcer — consider syphilis (primary chancre); refer GUM urgently',
        'Erythroplasia of Queyrat (red velvety plaque on glans) — penile squamous cell carcinoma in situ; 2WW urology',
        'Paget\'s disease of the penis (eczematous rash not responding to steroids) — very rare; 2WW urology',
        'Lichen sclerosus with urethral involvement (poor stream, dysuria, straining) — urology for urethral stenosis assessment',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Routine Urology / Dermatology Referral',
      items: [
        'Lichen sclerosus (BXO) — urology for circumcision assessment and long-term follow-up',
        'Recurrent candidal balanitis (≥4 episodes/year) despite adequate treatment and good glycaemic control',
        'Phimosis causing symptoms (voiding difficulty, recurrent infections) — urology for consideration of preputioplasty or circumcision',
        'Diagnostic uncertainty — atypical appearance not responding to treatment; consider biopsy (urology or dermatology)',
        'Zoon\'s balanitis — confirm diagnosis and manage (circumcision often curative)',
      ],
    },

    // ── PHIMOSIS NOTE ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Phimosis — Brief Note' },

    {
      type: 'table',
      headers: ['Type', 'Features', 'Management'],
      rows: [
        ['Physiological (children)', 'Normal in young boys — foreskin is non-retractile until ~10 years (range 2–17 years); do NOT attempt forcible retraction', 'Reassure parents; spontaneous resolution expected; refer only if recurrent UTIs, ballooning or urinary obstruction'],
        ['Pathological (adults)', 'Scarring, lichen sclerosus, recurrent balanitis causing progressive inability to retract foreskin', 'Clobetasol 0.05% BD for 4–8 weeks (50–70% success); if fails → urology for preputioplasty or circumcision'],
        ['Paraphimosis', '🔴 Emergency — foreskin retracted and trapped behind glans, causing constriction and ischaemia; painful, swollen glans', '999 / A&E — emergency manual reduction or surgical dorsal slit; do not attempt in primary care without training'],
      ],
      caption: 'Never forcibly retract a child\'s foreskin — causes scarring and can create the very pathological phimosis you are trying to avoid.',
    },

    {
      type: 'notelink',
      notes: [
        { id: 'phimosis-circumcision', label: 'Phimosis & Circumcision', subtitle: 'Steroid treatment, paraphimosis emergency, NHS circumcision indications' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Balanitis', url: 'https://cks.nice.org.uk/topics/balanitis/' },
        { label: 'BASHH — Genital Dermatoses', url: 'https://www.bashh.org/guidelines' },
        { label: 'NICE CKS — Lichen Sclerosus', url: 'https://cks.nice.org.uk/topics/lichen-sclerosus/' },
        { label: 'NICE CKS — Phimosis', url: 'https://cks.nice.org.uk/topics/phimosis/' },
        { label: 'Patient PIL — West of Scotland Balanitis', url: 'https://www.nhsggc.scot/media/270155/west-of-scotland-balanitis-leaflet-final-3-1-august-21.pdf' },
      ],
    },

  ],
}
