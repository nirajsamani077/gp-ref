import type { Note } from '../data/notes'

export const pcos: Note = {
  id: 'pcos',
  title: 'Polycystic Ovary Syndrome (PCOS)',
  subtitle: 'Rotterdam criteria, FAI, endometrial protection, hirsutism, subfertility and metabolic risk',
  tags: ['womens-health', 'endocrine'],

  body: 'PCOS polycystic ovary syndrome Rotterdam criteria hyperandrogenism menstrual irregularity hirsutism acne alopecia free androgen index FAI SHBG testosterone LH FSH insulin resistance metformin COCP Dianette eflornithine Vaniqa endometrial hyperplasia endometrial protection progesterone clomiphene letrozole ovulation induction subfertility anovulation obesity weight loss HbA1c',

  content: [

    { type: 'heading', level: 2, text: 'Diagnosis — Rotterdam Criteria' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Rotterdam Criteria — 2 of 3 Required for Diagnosis',
      items: [
        '1. Menstrual irregularity / oligo-ovulation / anovulation — cycles >35 days, <8 periods/year, or amenorrhoea',
        '2. Clinical or biochemical hyperandrogenism — acne, hirsutism (modified Ferriman-Gallwey score >4–6), androgenic alopecia, OR raised free androgen index (FAI >5)',
        '3. Polycystic ovarian morphology (PCOM) on ultrasound — ≥20 follicles in one ovary OR ovarian volume >10 mL — NOTE: 20% of women have PCOM without other criteria; this alone does NOT diagnose PCOS',
        'Best biochemical test = Free Androgen Index (FAI): total testosterone × 100 ÷ SHBG; >5 indicates excess free androgen; always measure in the morning (testosterone diurnal)',
        'Refer urgently (endocrine) if: total testosterone >5 nmol/L, rapid virilisation, or suspected Cushing\'s syndrome / congenital adrenal hyperplasia (CAH)',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'LH, FSH (day 2–5 of cycle if regular periods): LH:FSH ratio >2 suggestive of PCOS, but not required for diagnosis and can be normal',
        'Total testosterone and SHBG → calculate FAI; also check 17-OHP if CAH suspected (disproportionate virilisation)',
        'Prolactin: exclude hyperprolactinaemia (causes amenorrhoea/menstrual irregularity)',
        'TSH: exclude hypothyroidism',
        'HbA1c: screen all PCOS patients for type 2 diabetes — higher prevalence due to insulin resistance; if prediabetes, offer metformin and lifestyle advice; monitor annually',
        'Fasting lipid profile: metabolic syndrome risk — raised triglycerides, low HDL common in PCOS',
        'Pelvic USS: confirms PCOM morphology; also assesses endometrial thickness (see endometrial protection below)',
        'No single test is diagnostic — diagnosis is clinical based on Rotterdam criteria after exclusion of other causes',
      ],
    },

    { type: 'heading', level: 2, text: 'Pathophysiology' },

    {
      type: 'list',
      items: [
        'LH excess (relative to FSH) drives excess androgen production from theca cells in the ovary',
        'Hyperinsulinaemia (from insulin resistance, especially in obesity) amplifies LH-driven androgen production and reduces SHBG → more free androgens',
        'Elevated androgens suppress follicular growth, preventing dominant follicle selection and ovulation → multiple small antral follicles remain → polycystic appearance on USS',
        'Anovulation → lack of luteal-phase progesterone → unopposed oestrogen → endometrial proliferation → risk of endometrial hyperplasia and carcinoma',
        'Genetic predisposition: strong family history; autosomal dominant with variable penetrance',
      ],
    },

    { type: 'heading', level: 2, text: 'Management — Menstrual Regulation and Endometrial Protection' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Endometrial Protection — Essential in Anovulatory PCOS',
      items: [
        'Anovulation → unopposed oestrogen → endometrial hyperplasia → increased endometrial cancer risk',
        'Pelvic USS for all PCOS patients to assess endometrial thickness; if >10 mm or abnormal: refer gynaecology for hysteroscopy/biopsy',
        'Aim for ≥1 withdrawal bleed every 3 months — options:',
        'A) COCP (cycling or tricycling up to 3 packets before pill-free break) — preferred if also needs contraception + androgenic control',
        'B) Mirena IUS — local progesterone; excellent endometrial protection; minimal systemic effects; good for those who can\'t use COCP',
        'C) Medroxyprogesterone acetate (MPA) 10 mg OD for 14 days every 3 months to induce a withdrawal bleed — does not provide contraception',
      ],
    },

    { type: 'heading', level: 2, text: 'COCP in PCOS — Which Pill?' },

    {
      type: 'list',
      items: [
        'COCP has multiple benefits in PCOS: suppresses LH surge (reduces androgen drive), increases SHBG (mops up free androgens), regulates periods, provides contraception',
        'First-line: Microgynon (levonorgestrel 150 mcg / ethinylestradiol 30 mcg) — oldest, safest VTE profile, cheapest',
        '3rd/4th generation (anti-androgenic): Marvelon (desogestrel), Femodene (gestodene), Yasmin (drospirenone) — slightly higher antiandrogenic activity; useful if acne or hirsutism prominent; slightly higher VTE risk than Microgynon',
        'Eloine (drospirenone 3 mg / ethinylestradiol 20 mcg — ultra-low oestrogen): useful for acne + PCOS; lower VTE risk than 30 mcg pills',
        'Dianette (co-cyprindiol): highly anti-androgenic; effective for hirsutism/acne; NOT first-line due to higher VTE risk and rare meningioma association; use only for significant androgenic symptoms; stop after 3–6 months of symptom control and switch to standard COCP',
        'Progestogen-only pill (POP) or implant: provides endometrial protection via progestogen; less anti-androgenic effect; options for those unable to use COCP',
      ],
    },

    { type: 'heading', level: 2, text: 'Hyperandrogenism — Hirsutism and Acne' },

    {
      type: 'table',
      headers: ['Feature', 'Management'],
      rows: [
        ['Hirsutism', 'COCP (especially Dianette for 3–6 months, then switch); cosmetic options: shaving, waxing, laser hair removal (most effective long-term); topical eflornithine cream (Vaniqa) — reduces facial hair growth; expensive; requires prescription; effective within 8 weeks; must be used continuously'],
        ['Acne', 'Standard acne treatment (topical retinoids, antibiotics, benzoyl peroxide); COCP with antiandrogenic progestogen (Eloine, Marvelon) — effective for both acne and PCOS control; co-cyprindiol (Dianette) for severe acne + PCOS'],
        ['Androgenic alopecia', 'COCP with anti-androgenic progestogen; minoxidil topical; specialist dermatology if severe'],
      ],
    },

    { type: 'heading', level: 2, text: 'Subfertility and Ovulation Induction' },

    {
      type: 'list',
      items: [
        'PCOS is the most common cause of anovulatory subfertility — responsible for 70–80% of anovulatory infertility',
        'Refer if not conceived after 6 months of trying (PCOS); or >36 years old — don\'t wait 12 months',
        'Weight loss: even 5–10% weight reduction can restore ovulation and menstruation in overweight PCOS — prioritise before pharmacological ovulation induction',
        'Metformin: off-licence but well-evidenced in PCOS; reduces insulin resistance; improves menstrual regularity and ovulation; may be offered even without diabetes/prediabetes to improve cycle regularity; monitor HbA1c annually',
        'Specialist ovulation induction options: letrozole (aromatase inhibitor — currently preferred first-line; off-licence but more effective and safer than clomiphene) or clomiphene citrate (oestrogen antagonist — anti-oestrogen effect at pituitary triggers FSH surge); gonadotrophins if letrozole/clomiphene fails; laparoscopic ovarian drilling (LOD) — surgical option',
        'Monitor for OHSS (ovarian hyperstimulation syndrome) with ovulation induction — multiple follicle development; risk of multiple pregnancy',
        'IVF if other measures fail',
      ],
    },

    { type: 'heading', level: 2, text: 'Long-Term Metabolic Risk' },

    {
      type: 'list',
      items: [
        'Type 2 diabetes: 30–50% lifetime risk — HbA1c annually; if prediabetes, lifestyle intervention + metformin; OGTT preferred in high-risk (BMI >30, strong family history)',
        'Metabolic syndrome: raised waist circumference, dyslipidaemia, hypertension, impaired glucose tolerance — check fasting lipids, BP; treat to targets',
        'Cardiovascular disease: debated whether PCOS independently increases CVD risk or whether it\'s mediated through obesity/metabolic risk factors; manage modifiable CV risk factors',
        'Endometrial cancer: 3–4× relative risk — manage with endometrial protection as above',
        'Mental health: anxiety, depression, and body image concerns are extremely common — screen and address; signpost PCOS support groups (Verity — www.verity-pcos.org.uk)',
        'Avoid labelling PCOS as a "fertility problem" only — it is a lifelong metabolic and endocrine condition; individualise management based on patient priorities (menstrual regulation, fertility, androgenic symptoms, metabolic health)',
      ],
    },

  ],
}
