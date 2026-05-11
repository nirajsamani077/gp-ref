import type { Note } from '../data/notes'

export const falteringGrowth: Note = {
  id: 'faltering-growth',
  title: 'Faltering Growth (FTT)',
  subtitle: 'Centile thresholds, neonatal weight loss, investigation and referral criteria',
  tags: ['paediatrics'],

  body: 'faltering growth failure to thrive FTT weight loss centile UK-WHO growth chart RCPCH 9th 91st centile drop neglect feeding difficulty organic cause coeliac cystic fibrosis hypothyroid renal malabsorption breastfeeding top up expressed breast milk HV health visitor dietician paediatric referral birth weight 10 percent weight loss neonatal MUST',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Faltering Growth — Key Principles',
      items: [
        'Faltering growth (previously "failure to thrive"): inadequate weight gain or weight loss in a child outside expected centile range',
        'Cause is usually multifactorial — feeding difficulties, parent-infant relationship, socioeconomic factors; organic cause in ~10%, neglect in ~5%',
        'ALWAYS take seriously — involves multidisciplinary approach; avoid blame',
        'Plot on UK-WHO growth chart at every visit; measure height/length and head circumference alongside weight',
      ],
    },

    { type: 'heading', level: 2, text: 'Neonatal Weight Loss (First 3 Weeks)' },

    {
      type: 'list',
      items: [
        'Weight loss up to 10% of birth weight in first 3 days is normal — usually stops by day 3 and regains by 3 weeks',
        'Weight loss >10% of birth weight: examine for illness/dehydration; observe feeding with breastfeeding support',
        'If breastfeeding: consider expressed breast milk (EBM) top-ups after each feed; involve midwife or infant feeding specialist',
        'Refer if >10% weight loss persists beyond 1 week, or infant appears unwell',
      ],
    },

    { type: 'heading', level: 2, text: 'Centile Thresholds for Concern (After 3 Weeks)' },

    {
      type: 'table',
      headers: ['Starting Centile', 'Action Threshold', 'Refer Centile'],
      rows: [
        ['Below 9th centile', 'Any further drop of 1 centile space OR crossing below 2nd centile', 'Refer paediatrics — any weight below 2nd centile'],
        ['9th–91st centile (average range)', 'Drop of >2 centile spaces from peak', 'Refer after 2 centile space drop without recovery'],
        ['Above 91st centile', 'Drop of >3 centile spaces from peak', 'Refer after 3 centile space drop'],
        ['Any centile', 'Below 2nd centile — or 2 centile spaces below mid-parental height centile', 'Refer paediatrics'],
        ['Over 2 years', 'BMI <2nd centile = small; BMI <0.4th centile = refer', 'Refer paediatrics'],
        ['Any age', 'Actual weight loss (not just poor gain)', 'Refer paediatrics urgently'],
      ],
      caption: 'Weight monitoring frequency: <6 months — weekly; >6 months — every 2–4 weeks. Calculate and plot mid-parental height centile to set realistic growth expectations.',
    },

    { type: 'heading', level: 2, text: 'Assessment' },

    {
      type: 'list',
      items: [
        'Full history: birth history (gestation, birth weight), feeding history (breastfed/formula, volumes, frequency, consistency), complementary feeding introduction, developmental history, social history',
        'Food diary: record what and how much child eats/drinks — include portion sizes',
        'Observe a feed if possible: breastfeeding technique, bottle feeding technique, interaction between parent and child',
        'Family and social history: parental heights (for MPH), household situation, safeguarding concerns',
        'Urine dipstick: exclude UTI (common hidden cause)',
        'Coeliac screen: tTG IgA + total IgA (check for IgA deficiency which gives false-negative tTG)',
        'If organic cause suspected: refer to paediatrics for further investigation',
      ],
    },

    { type: 'heading', level: 2, text: 'Management in Primary Care' },

    {
      type: 'list',
      items: [
        'Feeding advice: regular structured mealtimes (Caroline Walker Trust guidance); eating can be messy — normalise; avoid force-feeding; positive mealtime environment',
        'Health Visitor: coordinate with HV for regular weight monitoring, feeding support, and family support',
        'Watch and wait (if no organic concern): 4–8 weeks with written feeding advice, HV support; if not improving — involve dietician or refer',
        'Dietician referral: if continued poor weight gain despite feeding support, or if dietary restriction/selectivity is a concern',
        'Avoid blaming parent or child for poor eating — empathetic approach',
        'Safeguarding: consider neglect if significant faltering growth with multiple missed appointments, poor home environment, parenting concerns; follow safeguarding pathway',
      ],
    },

    { type: 'heading', level: 2, text: 'Secondary Care Investigations (if Referred)' },

    {
      type: 'list',
      items: [
        'FBC, ferritin (iron deficiency anaemia — very common in faltering growth; cow\'s milk displaces iron-rich foods)',
        'U&E, creatinine (renal disease)',
        'TFTs (hypothyroidism)',
        'Coeliac serology (tTG IgA + total IgA)',
        'Vitamin D',
        'Sweat test: if cystic fibrosis suspected (recurrent respiratory infections, steatorrhoea, FHx)',
        'Genetics/chromosomal testing if syndromic features present',
        'Urine MSU (exclude chronic UTI)',
        'CXR if respiratory symptoms',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Health Visitor: MPFT community health visiting team — coordinate with HV at every stage of management',
        'Paediatric dietician: UHDB Burton community dietetics — GP referral; include weight and centile chart, dietary history, specific concerns',
        'Paediatric referral (faltering growth): UHDB Queen\'s Hospital Burton general paediatrics — via e-RS; include weight trajectory with centile charts, feeding history, investigations done',
        'Alternative: Good Hope Hospital (UHB) paediatrics',
        'Safeguarding concerns: Staffordshire MASH 0800 1313 126; discuss with named GP for safeguarding',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG75 — Faltering Growth', url: 'https://www.nice.org.uk/guidance/ng75' },
        { label: 'RCPCH — Growth Charts', url: 'https://www.rcpch.ac.uk/resources/uk-who-growth-charts' },
        { label: 'NHS — Breastfeeding Support', url: 'https://www.nhs.uk/conditions/baby/breastfeeding-and-bottle-feeding/breastfeeding/' },
        { label: 'Caroline Walker Trust', url: 'https://www.cwt.org.uk/' },
      ],
    },
  ],
}
