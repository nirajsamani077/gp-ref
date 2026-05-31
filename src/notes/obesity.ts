import type { Note } from '../data/notes'

export const obesity: Note = {
  id: 'obesity',
  title: 'Obesity & Weight Management',
  subtitle: 'BMI, waist-to-height ratio, 6 As framework, tiers of care, orlistat, GLP-1 agonists and bariatric surgery',
  tags: ['lifestyle', 'metabolic'],

  body: 'obesity overweight BMI body mass index waist circumference waist-to-height ratio BAME South Asian orlistat semaglutide Wegovy GLP-1 tirzepatide liraglutide bariatric surgery sleeve gastrectomy Roux-en-Y bypass gastric band BOMSS tier 1 2 3 4 weight management calorie deficit Mediterranean diet low carbohydrate TRE time-restricted eating central adiposity insulin resistance metabolic syndrome FRAMES 6As motivational interviewing',

  content: [

    { type: 'heading', level: 2, text: 'Defining Obesity' },

    {
      type: 'table',
      headers: ['Category', 'BMI (White European)', 'BMI (South Asian / BAME — lower thresholds)'],
      rows: [
        ['Healthy weight', '18.5–24.9', '18.5–22.9'],
        ['Overweight', '25–29.9', '23–27.4'],
        ['Obese (Class I)', '30–34.9', '27.5–32.4'],
        ['Obese (Class II)', '35–39.9', '32.5–37.4'],
        ['Morbidly obese (Class III)', '≥40', '≥37.5'],
      ],
      caption: 'BMI is an imperfect measure — it does not account for muscle mass or fat distribution. Waist-to-height ratio is a better predictor of metabolic risk: >0.5 = increased risk; >0.6 = high risk. Advise patients to "keep their waist circumference less than half their height in centimetres".',
    },

    { type: 'heading', level: 2, text: 'The 6 As Framework for Consultation' },

    {
      type: 'table',
      headers: ['Step', 'Action'],
      rows: [
        ['Ask', '"Would it be OK to talk about your weight today? I think it may be contributing to some of the symptoms we\'ve been discussing."'],
        ['Assess', 'BP, HbA1c, lipids, LFT (NAFLD), FBC, TFT — calculate BMI and waist circumference/height ratio'],
        ['Analyse root cause', 'Diet history, physical activity, screen time, sleep quality, alcohol, stress, mental health, medications causing weight gain (below), endocrine causes (hypothyroid, Cushing\'s), FHx'],
        ['Advise', 'FRAMES model — see lifestyle note; set realistic goal (5–10% weight loss improves comorbidities significantly)'],
        ['Agree', 'Specific, measurable, achievable, relevant, time-bound (SMART) goals — write them down with patient; set a date to review'],
        ['Assist', 'Appropriate tier referral based on BMI and comorbidities (see tiers below)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Medications Contributing to Weight Gain' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Always Review the Medication List',
      items: [
        'Insulin and sulphonylureas (gliclazide, glibenclamide): significant weight gain — consider switching to GLP-1 or SGLT-2 inhibitor',
        'Mirtazapine: antidepressant with substantial weight gain and appetite stimulation',
        'Tricyclic antidepressants (amitriptyline): weight gain and metabolic effects',
        'Atypical antipsychotics: olanzapine >> quetiapine, risperidone > aripiprazole, amisulpride — clozapine also significant',
        'Corticosteroids: both exogenous and endogenous (Cushing\'s) — even short courses can cause weight gain',
        'Anticonvulsants: sodium valproate and pregabalin — significant weight gain; gabapentin lesser',
        'Beta-blockers: modest effect; reduce metabolic rate and exercise tolerance',
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle — Diet' },

    {
      type: 'list',
      items: [
        'The best diet is one the patient will adhere to long-term — no single diet is superior for all patients',
        'Calorie deficit is the universal mechanism of weight loss (approximately 500 kcal/day deficit = 0.5 kg/week loss)',
        'Limit ultra-processed foods (UPF): industrially processed snacks, ready meals, fast food — high in refined sugar, saturated fat, salt; engineered for overconsumption',
        'Mediterranean diet: olive oil, fish, nuts, seeds, grilled vegetables, legumes, moderate wholegrain — well evidenced for cardiovascular benefit and sustainable',
        'Low-carbohydrate diet: reduces insulin spikes, promotes fat oxidation — particularly effective in T2DM; replace refined carbs with healthy fats and protein (not excessive saturated fat)',
        'Time-restricted eating (TRE) / intermittent fasting (16:8 or 5:2): emerging evidence; reduces insulin resistance; 16:8 (eat in 8-hour window) practical for many',
        '"You cannot outrun a bad diet" — exercise alone rarely produces significant weight loss but synergises with diet',
      ],
    },

    { type: 'heading', level: 2, text: 'Lifestyle — Exercise' },

    {
      type: 'list',
      items: [
        'Target: ≥150 minutes moderate-intensity (brisk walking, cycling, swimming) OR 75 minutes vigorous (running, HIIT) per week — plus resistance training ≥2 days/week',
        'Resistance (strength) training and HIIT: superior calorie burn per unit time; builds muscle which increases resting metabolic rate — particularly effective at targeting visceral/abdominal fat',
        'Small achievable goals first: 10 minutes extra walking per day; take stairs; park further away',
        'Reduce sedentary behaviour: standing breaks every hour; aim for <8 hours sitting per day',
        'Exercise improves mood, sleep, insulin sensitivity, and motivation — even without weight loss it reduces cardiovascular risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Tiers of Weight Management Services' },

    {
      type: 'table',
      headers: ['Tier', 'Service', 'Eligibility'],
      rows: [
        ['Tier 1', 'Universal: NHS weight information, public health campaigns, GP brief advice, Healthy Start scheme', 'All patients'],
        ['Tier 2', 'Community weight management programme: structured diet, exercise and behavioural support (e.g. Slimming World, WW NHS-commissioned, local programmes)', 'BMI ≥25 (≥23 BAME)'],
        ['Tier 3', 'Specialist multidisciplinary weight management: dietitian, psychologist, exercise physiologist, physician; includes prescription weight loss drugs', 'BMI ≥35 (≥30 BAME) or BMI ≥30 with significant comorbidity; failed Tier 2'],
        ['Tier 4', 'Bariatric surgery (NHS or private): requires completion of Tier 3', 'BMI ≥40 (≥37.5 BAME) + comorbidities; or BMI ≥35 with specific comorbidity that would significantly improve with weight loss; failed Tier 3'],
      ],
    },

    { type: 'heading', level: 2, text: 'Orlistat (Primary Care Drug)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Orlistat — GI Lipase Inhibitor',
      items: [
        'Dose: 120 mg TDS with meals (60 mg OD available OTC as Alli)',
        'Mechanism: inhibits pancreatic and gastric lipase → reduces fat absorption by ~30%',
        'Indication: BMI ≥30 (≥28 with comorbidity); alongside low-fat diet and exercise',
        'Review at 3 months: continue only if ≥5% weight loss achieved — most patients do not achieve this',
        'Side effects: steatorrhoea, oily spotting on underwear, urgency — caused by unabsorbed fat passing through bowel; significantly worse if high-fat diet is continued',
        'ADEK fat-soluble vitamin deficiency: advise supplementation (multivitamin) taken at different time to orlistat (at bedtime)',
        'Drug interactions: reduces absorption of ciclosporin, levothyroxine, warfarin, oral contraceptives (advise additional contraception) — all to be taken at different times',
      ],
    },

    { type: 'heading', level: 2, text: 'GLP-1 Receptor Agonists for Weight Loss' },

    {
      type: 'list',
      items: [
        'Semaglutide 2.4 mg SC weekly (Wegovy): GLP-1 mimetic — reduces appetite, delays gastric emptying, increases satiety; 15–17% average body weight reduction in trials; NOT currently available on NHS due to supply shortage (as of 2024–25)',
        'Liraglutide 3 mg SC OD (Saxenda): licensed for weight loss; less effective than semaglutide; also affected by supply issues',
        'Tirzepatide (Mounjaro): GLP-1 + GIP dual receptor agonist — weekly SC injection; superior weight loss (~20–22%); licensed for T2DM (Ozempic is semaglutide 1 mg for T2DM, different to Wegovy)',
        'Private prescribing is possible if clinically indicated and patient can afford; significant inequity concerns',
        'Side effects: nausea, vomiting, diarrhoea (improve over time); pancreatitis (rare); thyroid C-cell tumours (rodent data, avoid in personal/family history MEN2 or medullary thyroid cancer)',
        'Stop if <5% weight loss at 6 months; maximum 2-year licensed duration for semaglutide (Wegovy)',
        'Criteria (when available): BMI ≥35 class II obese; OR BMI ≥30 with weight-related comorbidities in specialist weight management service (Tier 3)',
      ],
    },

    { type: 'heading', level: 2, text: 'Bariatric Surgery' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Types of Bariatric Surgery',
      items: [
        'Gastric band: adjustable band around stomach; restrictive only — limits portion size; no malabsorption; reversible; highest failure/revision rate',
        'Sleeve gastrectomy: removes ~80% of stomach leaving a tube/sleeve; restrictive; no malabsorption of micronutrients; irreversible; less revision needed than band',
        'Roux-en-Y gastric bypass: small gastric pouch + bypass of proximal small bowel; restrictive + malabsorptive; most effective but highest micronutrient deficiency risk; dumping syndrome',
        'One anastomosis gastric bypass (OAGB/mini bypass): increasingly performed; slightly simpler than RYGB; similar outcomes',
      ],
    },

    {
      type: 'list',
      items: [
        'If BMI >50: bariatric surgery is first-line treatment even without failing Tier 3 in some services',
        'Acute post-op complications: dysphagia, bleeding, anastomotic leak, infection — urgent review at bariatric unit',
        'Reflux or prolonged vomiting post-op: always urgent bariatric referral',
        'Oral contraception may not be absorbed post-bypass — use LARC (IUD, implant, injection)',
        'NSAIDs, bisphosphonates: avoid or use with extreme caution post-bypass — stomach irritation and absorption issues',
        'Dumping syndrome: osmotic (early: diarrhoea, flushing, tachycardia 30 minutes post meal) or reactive hypoglycaemia (late: 1–3 hours post meal) — avoid refined sugars/large meals',
        'Resource: BOMSS (British Obesity and Metabolic Surgery Society) — patient and GP guidance',
      ],
    },

    { type: 'heading', level: 2, text: 'Post-Bariatric Surgery — Annual GP Monitoring' },

    {
      type: 'table',
      headers: ['Test', 'Frequency', 'Notes'],
      rows: [
        ['FBC', 'Annual', 'Iron deficiency anaemia, folate, B12 — especially post-bypass'],
        ['U&E, LFT, bone profile', 'Annual', 'Calcium/phosphate abnormalities common post-bypass'],
        ['HbA1c, lipids', 'Annual', 'T2DM often resolves post-surgery — adjust medications'],
        ['Haematinics: ferritin, B12, folate', 'Annual (6-monthly post-bypass)', 'B12: hydroxocobalamin 1 mg IM every 3 months post-bypass (oral unreliable)'],
        ['Vitamin D + PTH', 'Annual', 'Supplement vitamin D 800–1000 IU/day; check PTH for secondary hyperparathyroidism'],
        ['Copper, zinc, selenium', 'Annual (post-malabsorptive procedures)', 'Micronutrient panel if symptoms of deficiency'],
      ],
      caption: 'Standard post-op supplements: Forceval multivitamin OD (or Sanatogen A–Z x2 if malabsorptive) + ferrous sulfate 200 mg OD + hydroxocobalamin IM 3-monthly + vitamin D 800 IU OD + folic acid (especially if planning pregnancy). Review ALL medications post-surgery — absorption of many drugs changes.',
    },

  ],
}
