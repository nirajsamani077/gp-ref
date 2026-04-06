import type { Note } from '../data/notes'

export const actinicKeratosis: Note = {
  id: 'actinic-keratosis',
  title: 'Actinic Keratosis (AK)',
  subtitle: 'Grading, topical treatments, patient counselling and Efudix alternatives',
  tags: ['dermatology', 'skin cancer', 'sun damage', 'solar keratosis', 'Efudix', '5-FU', 'imiquimod', 'diclofenac'],

  body: 'actinic keratosis solar keratosis AK sun damage premalignant SCC squamous cell carcinoma Efudix 5-fluorouracil 5-FU Aldara imiquimod Solaraze diclofenac Actikerall salicylic acid cryotherapy grading field change efudix shortage alternatives patient counselling erythema crusting',

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Pathophysiology & Epidemiology',
    },
    {
      type: 'image',
      src: '/images/ak-pathophysiology.png',
      alt: 'Pathophysiology of actinic keratosis development and progression to SCC',
      caption: 'UV radiation generates reactive oxygen species (ROS) → p53 mutation in basal keratinocytes → dysplastic proliferation, Langerhans cell depletion, local immunosuppression → AK → SCC',
    },
    {
      type: 'list',
      items: [
        'Cumulative UV exposure damages basal keratinocyte DNA → p53 tumour suppressor mutation → loss of apoptosis control → clonal expansion of atypical keratinocytes',
        'UV also generates reactive oxygen species (ROS) and depletes Langerhans cells → local immunosuppression, reducing immune surveillance',
        'Very common: affects ~15% of the UK adult population; prevalence rises sharply over 60; higher in outdoor workers, fair skin (Fitzpatrick I–II), immunosuppressed',
        'Conversion to SCC: individual AK risk ~0.1% per year; patients with multiple lesions carry a cumulative risk of ~10% over 10 years — field change substantially increases this',
        'Higher SCC risk: lesion >1cm, rapid growth, erythematous base, immunocompromised (organ transplant patients have up to 250× increased SCC risk)',
        '25% of AKs resolve spontaneously without treatment — watchful waiting is reasonable for isolated grade 1 lesions in low-risk patients',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Overview & Red Flags',
    },
    {
      type: 'list',
      items: [
        'Rough, scaly macules on sun-exposed skin (face, scalp, dorsum of hands, forearms)',
        'If papule, nodule or ulcer >3 weeks that is growing, bleeding, keratotic, or ulcerating — 2-week wait referral (likely SCC, not AK)',
        'Advise SPF 50+ sunscreen and sun avoidance for all; supplement vitamin D if using high-factor SPF regularly',
      ],
    },
    {
      type: 'image',
      src: '/images/ak-single-lesion.jpg',
      alt: 'Actinic keratosis single lesion on nose',
      caption: 'Grade I AK: subtle scaly macule on the nose — better felt than seen',
    },
    {
      type: 'image',
      src: '/images/ak-pigmented-clinical.jpg',
      alt: 'Pigmented actinic keratosis close-up',
      caption: 'Grade II AK with moderate scale — easily felt and visible; erythematous base',
    },
    {
      type: 'image',
      src: '/images/ak-field-change-scalp.jpg',
      alt: 'Actinic field change on scalp with multiple lesions',
      caption: 'Field change: multiple AKs on sun-damaged scalp — treat the whole field, not just individual lesions',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Grading',
    },
    {
      type: 'table',
      headers: ['Grade', 'Clinical features', 'Treatment approach'],
      rows: [
        ['Grade I', 'Scale palpable but barely visible — better felt than seen; thin and flat', 'Solaraze gel (diclofenac 3%) or Efudix; watchful waiting reasonable for isolated lesions'],
        ['Grade II', 'Scale moderately thick — easily felt and seen; some surrounding erythema', 'Efudix (5-FU) first-line; Actikerall for thicker grade 2; cryotherapy for isolated lesions'],
        ['Grade III', 'Very thick hyperkeratotic scale; may be tender', 'Consider 2WW to exclude SCC; cryotherapy, curettage, or cautery; refer if uncertain'],
        ['Field change', 'Multiple AKs across a sun-damaged area (e.g. entire forehead/scalp); background photodamage', 'Field treatment essential: Efudix, Aldara (imiquimod), or Solaraze for thin field; PDT via dermatology for large fields'],
      ],
    },
    {
      type: 'image',
      src: '/images/ak-grading-treatment.png',
      alt: 'AK grading and treatment recommendation table by grade and field change',
      caption: 'Treatment recommendations by AK grade — tick = suitable, double tick = strongly recommended, cross = not recommended in primary care',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Topical Treatments — Prescribing Guide',
    },
    {
      type: 'table',
      caption: 'Topical treatments with regimens, indications, and key counselling points',
      headers: ['Drug', 'Preparation', 'Regimen', 'Best for', 'Key points'],
      rows: [
        [
          'Efudix (5-fluorouracil 5%)',
          '5-FU 5% cream',
          'Apply ON to affected area; wash off after 8 hours; use for 4 weeks',
          'Grade 1–2 single/multiple lesions; thin field change',
          'Most effective topical — expect significant reaction (see counselling below); can apply eumovate cream in mornings if very sore; avoid around eyes/mouth; do not use in pregnancy',
        ],
        [
          'Actikerall (5-FU 0.5% + salicylic acid 10%)',
          '5-FU 0.5% + SA 10% solution',
          'Apply once daily; leave on; treat for 12 weeks',
          'Thicker grade 2 lesions; single or few lesions needing prolonged penetration',
          'Lower-strength 5-FU but left on skin longer; salicylic acid aids penetration through thick scale; less inflammatory reaction than Efudix; useful if Efudix not tolerated',
        ],
        [
          'Solaraze (diclofenac 3%)',
          'Diclofenac 3% gel with hyaluronic acid',
          'Apply BD to affected area for 8–12 weeks; review after further month — can extend by 1 month',
          'Grade 1 isolated lesions; thin field change where less reaction preferred',
          'Mildest topical option — fewer side effects than Efudix but less effective; blocks COX and inhibits UV-induced cytokines; caution with oral NSAIDs or GI bleeding history',
        ],
        [
          'Aldara (imiquimod 5%)',
          'Imiquimod 5% cream sachets',
          'Apply 3 nights per week for 4 weeks; can repeat cycle if needed; or continue up to 16 weeks',
          'Confluent field lesions; when Efudix not tolerated or shortage',
          'Toll-like receptor 7 agonist — immune-mediated destruction; inflammatory reaction variable but can be severe; do not apply to mucous membranes; store sachets in fridge',
        ],
        [
          'Imiquimod 3.75% (Zyclara)',
          'Imiquimod 3.75% cream',
          'Apply ON daily for two 2-week cycles (with 2-week break between)',
          'Facial/scalp field change',
          'Lower strength than Aldara 5%; applied daily (not 3× week); similar mechanism but better tolerated; less evidence base than 5%',
        ],
        [
          'Diclofenac 3% + HA (generic)',
          'Diclofenac 3% gel',
          'Apply BD for 8–12 weeks',
          'Grade 1; mild field; alternative to Solaraze if cost-saving needed',
          'Equivalent to Solaraze; generic versions available; same precautions',
        ],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Efudix Shortage — Alternatives',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'When Efudix (5-FU 5% cream) is unavailable — 5-FU alternatives',
      items: [
        'Tolak (5-FU 4% cream) — same drug, slightly lower concentration; apply ON once daily for 4 weeks; counsel identically to Efudix',
        'Actikerall (5-FU 0.5% + salicylic acid 10% solution) — lower-strength 5-FU left on longer (12-week course); less inflammatory reaction; good for thicker or individual lesions',
        'Fluorouracil cream (specials/imports) — 5% cream available via some specialist or NHS specials manufacturers if branded products on shortage; check with pharmacy',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Patient Counselling — What to Expect',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Efudix / 5-FU — counselling points',
      items: [
        'It will get worse before it gets better — this is expected and means it is working',
        'Days 1–2: mild redness and tingling at treated sites',
        'Days 3–7: increasing redness, swelling, and discomfort — this is the inflammatory phase; the area will look sore',
        'Week 2–3: crusting and erosion at the most affected sites — this is the destructive phase working on abnormal cells',
        'Week 4: begins to settle; after stopping, skin heals over 2–4 weeks leaving smoother, clearer skin',
        'Apply at night, wash off after 8 hours; avoid sun during treatment (photosensitising)',
        'Use a bland moisturiser during the day (e.g. Diprobase); can apply eumovate cream in the mornings if reaction is very uncomfortable',
        'Avoid contact with eyes, nostrils, mouth — use Vaseline around these areas if applying nearby',
        'Do not stop early — the full 4-week course is needed for effectiveness',
        'Keep treated area out of direct sunlight; wear SPF 50+ if outdoors',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Aldara (imiquimod 5%) — counselling points',
      items: [
        'Applied 3 nights per week (e.g. Mon/Wed/Fri); wash off after 6–10 hours in the morning',
        'Inflammatory reaction is expected but varies greatly — some patients have mild redness, others get significant crusting and erosion',
        'Local skin reactions: erythema, flaking, scabbing, erosion — normal; systemic flu-like symptoms can occur (fatigue, myalgia)',
        'Apply a thin layer to the whole affected field, not just visible spots',
        'Do not use on open wounds or broken skin; avoid mucous membranes',
        'If reaction becomes severe (open ulceration, intolerable pain), take a 1–2 week break then resume',
        'A treatment cycle can be repeated after a 4-week break if incomplete response',
        'SPF 50+ essential — area is highly photosensitive during treatment',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Solaraze (diclofenac 3%) — counselling points',
      items: [
        'Much milder reaction than Efudix or Aldara — most patients tolerate well',
        'Apply to the whole affected area BD (not just individual spots) and massage in gently',
        'Some redness and dryness is normal; full effect not seen until several weeks after completing treatment',
        'Review at 8–12 weeks; response may continue to improve for a further month after stopping — can extend by up to 1 additional month if good response',
        'Avoid oral NSAIDs (additive systemic effect); caution with GI ulcer history',
        'Less effective than Efudix for thicker or more numerous lesions',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Lesion-Directed Treatments',
    },
    {
      type: 'table',
      headers: ['Treatment', 'Regimen', 'Best for', 'Key points'],
      rows: [
        ['Cryotherapy', '3–5 second freeze; single or double freeze-thaw cycle', 'Isolated grade 1–2 lesions; quick office treatment', 'Fast and readily available; duration of freeze correlates with clearance; caution on lower legs (poor healing); does not differentiate AK from normal skin'],
        ['Curettage ± cautery / electrodessication', 'Shave biopsy then scrape with curette, cauterise base', 'Isolated thicker grade 2–3 lesions; where biopsy needed to exclude SCC', 'Requires local anaesthetic; will leave a scar; lesion addressed in single visit; send for histology'],
        ['Photodynamic therapy (PDT)', 'Photosensitiser applied, occluded 3 hours, then light exposure', 'Large field change; grade 1–2 field; face/scalp preferred sites', 'Red-light PDT restricted to specialist centres; daylight PDT increasingly used; painful during treatment; excellent cosmetic outcome'],
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Red Flags — When to Refer / 2WW',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer urgently / 2-week wait if any of:',
      items: [
        'Lesion growing rapidly, bleeding, ulcerating, or >1cm with raised/indurated edge — likely SCC not AK',
        'Papule or nodule persisting >3 weeks in sun-exposed area',
        'Grade 3 AK where SCC cannot be excluded clinically',
        'Immunocompromised patient with multiple AKs — higher malignant transformation risk; lower threshold for referral',
        'Failed two courses of topical treatment in a large field (refer for PDT or specialist review)',
        'Any lesion where you are clinically uncertain',
      ],
    },

    {
      type: 'image',
      src: '/images/ak-grading-table.jpg',
      alt: 'Actinic keratosis grading reference table',
      caption: 'AK grading reference — grade I to III and field change classification',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NCL AK Pathway', url: '/pdfs/ak-ncl-pathway.pdf' },
        { label: 'PCDS AK Guidelines', url: 'https://www.pcds.org.uk/clinical-guidance/actinic-keratosis' },
        { label: 'CKS Actinic Keratosis', url: 'https://cks.nice.org.uk/topics/actinic-keratosis/' },
        { label: 'BAD AK Patient Info', url: 'https://www.bad.org.uk/pils/actinic-keratoses/' },
      ],
    },
  ],
}
