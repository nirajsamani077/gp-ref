import type { Note } from '../data/notes'

export const hyperthyroidism: Note = {
  id: 'hyperthyroidism',
  title: 'Hyperthyroidism & Thyrotoxicosis',
  subtitle: 'Graves\' disease, carbimazole, radioactive iodine, subclinical hyperthyroidism and thyroid eye disease',
  tags: ['endocrine'],

  body: 'hyperthyroidism thyrotoxicosis Graves disease toxic multinodular goitre TMNG solitary toxic nodule carbimazole propylthiouracil PTU radioactive iodine thyroidectomy thyroid storm Lugols iodine subclinical hyperthyroidism TSH T3 T4 TRAB thyroid receptor antibodies ophthalmopathy thyroid eye disease exophthalmos lid lag pretibial myxoedema atrial fibrillation amiodarone thyroid postpartum thyroiditis De Quervains transient thyroiditis',

  content: [

    { type: 'heading', level: 2, text: 'Classification — Hyperthyroidism vs Thyrotoxicosis' },

    {
      type: 'table',
      headers: ['Type', 'Causes', 'Key Feature'],
      rows: [
        ['Hyperthyroidism (gland overproducing)', 'Graves\' disease (80%), toxic multinodular goitre (TMNG), solitary toxic nodule', 'Sustained high T3/T4 from thyroid itself; TSH suppressed'],
        ['Thyrotoxicosis (circulating hormone excess)', 'Post-partum thyroiditis, viral (De Quervain\'s), drug-induced (amiodarone, lithium, iodine excess)', 'Transient — hormone released from damaged gland; NOT overproduction; anti-thyroid drugs unhelpful'],
        ['Subclinical hyperthyroidism', 'Any of the above at earlier stage; exogenous thyroxine excess', 'Suppressed TSH (<0.1) but normal T3/T4; often asymptomatic'],
        ['TSH-secreting pituitary tumour', 'Rare — pituitary adenoma', 'Raised TSH with raised T4 — not suppressed; refer endocrine urgently'],
      ],
      caption: 'Graves\' disease = most common autoimmune thyroid disease; TSH receptor antibodies (TRAB) stimulate continuous T3/T4 production. De Quervain\'s thyroiditis is painful (fever, neck pain, raised ESR); post-partum is painless.',
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'list',
      items: [
        'Symptoms: weight loss despite good appetite, palpitations, tremor, heat intolerance, sweating, diarrhoea, anxiety, irritability, insomnia, oligomenorrhoea',
        'Signs: tachycardia (resting HR >100), AF (in older patients), fine tremor, warm moist palms, proximal myopathy (difficulty rising from chair), lid lag, lid retraction',
        'Graves\'-specific signs: diffuse smooth goitre, thyroid bruit (turbulent blood flow), Graves\' ophthalmopathy (gritty/watery eyes, proptosis/exophthalmos, periorbital oedema, diplopia, chemosis), pretibial myxoedema (rare — orange-peel skin on shins)',
        'Thyroid eye disease (TED) grading: from mild (lid lag only) to severe (corneal exposure, optic nerve compression → urgent ophthalmology)',
        'Always check for AF in new presentation — atrial fibrillation affects 10–15% of hyperthyroid patients; rate-control first, anticoagulate if appropriate, cardiovert once euthyroid',
        'Precipitants for checking TFTs: new AF in any age, unexplained weight loss, new-onset anxiety or palpitations, osteoporosis (increased bone turnover), deranged LFTs',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'TFTs: TSH first — if suppressed, lab will add free T4 ± free T3; if TSH <0.1 with raised T4/T3 → thyrotoxicosis; if TSH <0.1 with normal T4/T3 → subclinical hyperthyroidism',
        'TRAB (TSH receptor antibodies): positive in Graves\' disease (~95% sensitivity); also check TPO antibodies (usually positive in Graves\' and Hashimoto\'s)',
        'FBC and LFT: baseline before starting carbimazole — agranulocytosis risk requires baseline WCC; hepatotoxicity risk requires baseline LFTs',
        'ECG: exclude AF; check rate',
        'Thyroid USS: assess nodules, goitre size, vascularity (increased in Graves\'); not needed if classic Graves\' with positive TRAB',
        'Isotope thyroid scan (nuclear medicine, secondary care): distinguishes Graves\' (diffuse uptake) from toxic nodule (hot spot) from thyroiditis (low uptake) — helpful if TRAB negative',
        'Refer to endocrine all cases of confirmed hyperthyroidism or suspected Graves\'; 2WW if rapid fixed neck mass, hoarseness, or concern for thyroid malignancy',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment — Antithyroid Drugs' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Carbimazole: Agranulocytosis — Urgent FBC if Sore Throat/Fever',
      items: [
        'Carbimazole is first-line antithyroid drug — blocks thyroid peroxidase, reducing T3/T4 synthesis',
        'Starting dose: 15–40 mg/day (higher dose for more severe disease); aim for euthyroid state in 4–8 weeks; then maintenance 5–15 mg/day for 12–18 months',
        'Agranulocytosis: rare but serious (~0.5/1000) — patient MUST have written warning to stop carbimazole immediately and attend urgently for FBC if they develop sore throat, fever, or mouth ulcers',
        'Other side effects: rash, arthralgia (~5%); hepatotoxicity (~0.4/1000); cholestatic jaundice — check LFTs if jaundice or abdominal pain',
        'Propylthiouracil (PTU): second-line alternative; preferred in pregnancy (first trimester — lower teratogenicity risk than carbimazole); switch to carbimazole in second trimester; also used if carbimazole intolerance or history of pancreatitis',
        'Titration regimen: TFTs every 6 weeks until euthyroid, then every 3 months; aim TSH within normal range',
        'After stopping: check TFTs 6–8 weeks after stopping, then 3-monthly for 1 year, then annually if in remission (30% achieve long-term remission)',
        'Block-and-replace: some specialists use high-dose carbimazole with added thyroxine — avoids hypothyroidism from over-treatment; specialist-led',
      ],
    },

    { type: 'heading', level: 2, text: 'Propranolol — Symptomatic Relief Whilst Awaiting Specialist' },

    {
      type: 'list',
      items: [
        'Propranolol 10–40 mg TDS: reduces adrenergic symptoms (palpitations, tremor, anxiety, sweating) — does NOT treat underlying cause',
        'Also inhibits peripheral conversion of T4 to T3 — additional mild antithyroid benefit',
        'Suitable for short-term use whilst awaiting endocrinology review or whilst starting antithyroid drugs',
        'Avoid in asthma and use with caution in heart failure',
      ],
    },

    { type: 'heading', level: 2, text: 'Definitive Treatment Options' },

    {
      type: 'table',
      headers: ['Treatment', 'Indication', 'Key Points'],
      rows: [
        ['Radioactive iodine (RAI, I-131)', 'Graves\', TMNG — most common definitive treatment in UK; preferred if no TED or mild/stable TED', 'Taken orally; absorbed by thyroid tissue; destroys overactive cells; effective in 70–90%; most become hypothyroid within 1 year — lifelong levothyroxine; strict radiation precautions (avoid pregnancy 6 months, avoid contact with children or pregnant women for specified period); can worsen active thyroid eye disease — cover with prednisolone if TED active'],
        ['Total thyroidectomy', 'Large goitre with compressive symptoms (dysphagia, dyspnoea), failed RAI/antithyroids, TED (RAI contraindicated), suspected malignancy, patient preference', 'Causes permanent hypothyroidism — lifelong levothyroxine; risks: recurrent laryngeal nerve palsy (1%), hypoparathyroidism (1–2%), haemorrhage; ensure euthyroid pre-operatively'],
        ['Antithyroid drugs (long-term)', 'Graves\' disease — 18 months course; aim for remission; 30% achieve long-term remission after stopping', 'Monitor closely; TRAB level at 12 months — if negative, attempt withdrawal; if positive, likely relapse — consider definitive treatment'],
      ],
    },

    { type: 'heading', level: 2, text: 'Subclinical Hyperthyroidism' },

    {
      type: 'list',
      items: [
        'Definition: TSH suppressed (<0.1–0.4 mU/L) with normal T3 and T4; usually asymptomatic',
        'Causes: early Graves\'/TMNG, exogenous thyroxine excess (over-replaced hypothyroid patients), non-thyroidal illness (sick euthyroid — TSH may be low acutely)',
        'Repeat TFTs and TRAB in 3 months — if persistent, refer endocrine',
        'Treat (consider) if: AF, osteoporosis risk, age >65 (increased cardiovascular risk), or symptomatic; otherwise monitor 6-monthly',
        'If TSH is mildly low (0.1–0.4) in a patient on levothyroxine: reduce levothyroxine dose and recheck in 6–8 weeks',
      ],
    },

    { type: 'heading', level: 2, text: 'Thyroiditis (Transient Thyrotoxicosis)' },

    {
      type: 'list',
      items: [
        'Post-partum thyroiditis: affects 5–10% of women within 12 months of delivery; painless; typically triphasic — thyrotoxic → hypothyroid → euthyroid (or permanent hypothyroidism ~25%); TPO antibodies usually positive; manage symptomatically (beta-blocker for thyrotoxic phase); recheck TFTs at 6–12 months; 50% recur in subsequent pregnancies',
        'De Quervain\'s (subacute granulomatous) thyroiditis: painful tender goitre, fever, raised ESR; thyrotoxic phase 4–6 weeks then hypothyroid phase then recovery (may become permanent); viral trigger; treat with NSAIDs for mild pain, prednisolone for moderate-severe; antithyroid drugs NOT effective (not overproduction)',
        'Drug-induced thyroiditis: amiodarone (iodine-rich) causes both hypothyroidism (most common) and hyperthyroidism (type 1 = increased production; type 2 = destructive thyroiditis — treated differently); lithium causes hypothyroidism; always check TFTs before and during amiodarone therapy',
        'Silent (painless) thyroiditis: similar to post-partum but not post-partum; autoimmune; self-limiting',
      ],
    },

  ],
}
