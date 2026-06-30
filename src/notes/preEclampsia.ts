import type { Note } from '../data/notes'

export const preEclampsia: Note = {
  id: 'pre-eclampsia',
  title: 'Pre-eclampsia & Gestational Hypertension',
  subtitle: 'Three groups of hypertension in pregnancy, aspirin prophylaxis, labetalol and postnatal review',
  tags: ['obstetrics', 'cardiology'],

  body: `pre-eclampsia PET gestational hypertension chronic hypertension pregnancy proteinuria PCR protein creatinine ratio PlGF aspirin labetalol nifedipine methyldopa magnesium sulfate eclampsia HELLP syndrome ACE inhibitor ARB teratogenic blood pressure 140/90 160/110 growth scans induction postnatal enalapril breastfeeding`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG133 — Hypertension in Pregnancy', url: 'https://www.nice.org.uk/guidance/ng133' },
        { label: 'NICE CKS — Hypertension in Pregnancy', url: 'https://cks.nice.org.uk/topics/hypertension-in-pregnancy/' },
        { label: 'Action on Pre-eclampsia (APEC)', url: 'https://action-on-pre-eclampsia.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Same-Day Obstetric Assessment',
      items: [
        'BP ≥160/110 mmHg → urgent same-day assessment (severe hypertension)',
        'Symptoms of pre-eclampsia: severe headache, visual disturbance (flashing lights/blurring), epigastric or RUQ pain, vomiting, sudden facial/hand/foot swelling, reduced fetal movements',
        'Signs of HELLP syndrome (Haemolysis, Elevated Liver enzymes, Low Platelets) — RUQ pain, malaise',
        'Eclampsia (seizures) → 999; treated with magnesium sulfate',
        'Any new BP ≥140/90 in pregnancy is significant and warrants assessment for pre-eclampsia',
      ],
    },

    { type: 'heading', level: 2, text: 'Three Groups of Hypertension in Pregnancy' },

    {
      type: 'table',
      headers: ['Type', 'Definition', 'Key Points'],
      rows: [
        ['Chronic (pre-existing) hypertension', 'Hypertension present before pregnancy or before 20 weeks', 'Stop ACE inhibitors, ARBs and thiazides (teratogenic) — switch to labetalol, nifedipine or methyldopa; high pre-eclampsia risk → aspirin from 12 weeks'],
        ['Gestational hypertension', 'New hypertension after 20 weeks WITHOUT proteinuria', 'Must exclude pre-eclampsia; consultant-led care with growth scans; risk of progression to pre-eclampsia and future chronic hypertension'],
        ['Pre-eclampsia', 'New hypertension after 20 weeks WITH proteinuria (or other maternal organ/uteroplacental dysfunction)', 'Multisystem disorder; needs immediate obstetric referral and close monitoring; definitive treatment is delivery'],
      ],
      caption: 'BP physiologically falls in the second trimester (reduced systemic vascular resistance), so a "normal" reading mid-pregnancy in a chronic hypertensive may still represent relative hypertension.',
    },

    { type: 'heading', level: 2, text: 'Aspirin Prophylaxis — Who and When' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Aspirin 75–150 mg from 12 Weeks to Delivery',
      items: [
        'Offer aspirin 75–150 mg daily from 12 weeks until birth to women at risk of pre-eclampsia',
        'ONE high-risk factor: chronic hypertension, previous pre-eclampsia/hypertensive disease in pregnancy, CKD, diabetes (T1/T2), autoimmune disease (SLE, antiphospholipid syndrome)',
        'TWO or more moderate-risk factors: first pregnancy, age ≥40, pregnancy interval >10 years, BMI ≥35, family history of pre-eclampsia, multiple pregnancy',
        'Aspirin significantly reduces the incidence of pre-eclampsia, preterm birth, and fetal growth restriction',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis of Pre-eclampsia' },

    {
      type: 'list',
      items: [
        'New hypertension (≥140/90) after 20 weeks PLUS one of: significant proteinuria, maternal organ dysfunction (renal, hepatic, neurological, haematological), or uteroplacental dysfunction (fetal growth restriction)',
        'Quantify proteinuria: urine protein:creatinine ratio (PCR) ≥30 mg/mmol, or albumin:creatinine ratio (ACR) ≥8 mg/mmol, is significant (≥1+ on dipstick prompts quantification)',
        'PlGF-based testing (placental growth factor) can help rule out pre-eclampsia needing delivery within 14 days in suspected cases (20–35 weeks) — specialist use',
        'Bloods: FBC (platelets — low in HELLP), U&E, LFTs (raised in HELLP), urate; monitor regularly',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Aspect', 'Approach'],
      rows: [
        ['Antihypertensives (safe in pregnancy)', 'Labetalol (first-line; avoid in asthma), nifedipine MR, or methyldopa (avoid if history of depression; stop within 2 days postpartum)'],
        ['Target BP', 'Aim ≤135/85 mmHg in treated hypertension during pregnancy'],
        ['Severe hypertension (≥160/110)', 'Urgent admission; IV/oral labetalol or oral nifedipine; consider magnesium sulfate if pre-eclampsia severe (seizure prophylaxis)'],
        ['Monitoring', 'Regular BP, urine protein, bloods, and serial fetal growth/Doppler scans under consultant-led care'],
        ['Timing of birth', 'Definitive treatment is delivery; planned birth from 37 weeks in pre-eclampsia, earlier if severe/uncontrolled or fetal compromise; antenatal corticosteroids if preterm delivery likely'],
      ],
    },

    { type: 'heading', level: 2, text: 'Postnatal Care' },

    {
      type: 'list',
      items: [
        'Pre-eclampsia can develop or worsen postnatally — continue BP monitoring after birth',
        'Antihypertensives safe in breastfeeding: enalapril (ACE inhibitor) is preferred; nifedipine or amlodipine are suitable (nifedipine often preferred in Black African/Caribbean women); avoid diuretics while breastfeeding',
        'Stop methyldopa within 2 days of birth (depression risk)',
        'Step down treatment as BP allows, guided by home BP diaries, aiming for <140/90',
        'Postnatal review at 6–8 weeks: check BP and urine dipstick; if proteinuria or hypertension persists, check U&E and refer (consider underlying renal disease)',
        'Counsel on increased lifetime risk of cardiovascular disease and hypertension, and recurrence risk in future pregnancies (warrants aspirin next time)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'hypertension', label: 'Hypertension', subtitle: 'Chronic hypertension management and long-term CV risk' },
        { id: 'gestational-diabetes', label: 'Gestational Diabetes', subtitle: 'Overlapping antenatal high-risk surveillance' },
        { id: 'antiphospholipid-syndrome', label: 'Antiphospholipid Syndrome', subtitle: 'Major risk factor for pre-eclampsia and recurrent miscarriage' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Pre-existing renal disease — pre-eclampsia risk and postnatal proteinuria' },
      ],
    },

  ],
}
