import type { Note } from '../data/notes'

export const delayedPuberty: Note = {
  id: 'delayed-puberty',
  title: 'Delayed Puberty',
  subtitle: 'When to refer, constitutional delay, hypo vs hypergonadotrophic hypogonadism',
  tags: ['paediatrics', 'endocrine'],

  body: 'delayed puberty constitutional delay growth thelarche breast development testicular development gonadarche adrenarche precocious puberty hypogonadotrophic hypogonadism hypergonadotrophic hypogonadism Turner syndrome Klinefelter Kallmann syndrome HPG axis FSH LH testosterone oestrogen GnRH refer paediatrics endocrine secondary sexual characteristics',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Normal Puberty Timing',
      items: [
        'Girls: thelarche (breast development) normally begins age 8–13 years; mean 10.5 years; first sign of puberty',
        'Boys: testicular enlargement (>4 mL by Prader orchidometer) normally begins age 9–14 years; mean 11.5 years; first sign of puberty',
        'Precocious puberty: girls <8 years, boys <9 years — refer urgently to paediatric endocrinology',
        'Adrenarche (pubic/axillary hair, body odour) is independent of HPG axis — can be normal in isolation',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Suspect Delayed Puberty — Refer Criteria' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to Paediatric Endocrinology If',
      items: [
        'Girl: no thelarche (breast development) by age 13 years',
        'Boy: no testicular development (testes <4 mL) by age 14 years',
        'Any child: puberty started but then arrested/stalled for >1 year',
        'Any child: significant growth retardation alongside delayed puberty',
        'Any child: signs or symptoms suggesting underlying systemic illness or CNS pathology',
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Assessment (Before Referral)' },

    {
      type: 'list',
      items: [
        'Full history: growth trajectory (plot height on RCPCH chart), family history of delayed puberty, nutritional status, exercise level, chronic illness, medications',
        'Mid-parental height (MPH) calculation: indicates genetic height potential; constitutional delay often runs in families',
        'Examination: secondary sexual characteristics (Tanner stage), height and weight (plot on growth chart), general examination for signs of underlying systemic disease or syndromic features',
        'Check sense of smell: anosmia suggests Kallmann syndrome (hypogonadotrophic hypogonadism + anosmia)',
        'Ensure nutrition and exercise are adequate — functional hypogonadism (exercise-induced, restrictive eating) is common especially in girls',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes of Delayed Puberty' },

    {
      type: 'table',
      headers: ['Category', 'Examples'],
      rows: [
        ['Constitutional delay of growth and puberty (CDGP)', 'Most common cause — often familial ("late bloomer"); normal growth rate, bone age delayed; FSH/LH low-normal; spontaneous puberty eventually occurs; short-term sex steroid induction may be used by specialist'],
        ['Hypergonadotrophic hypogonadism (high FSH/LH, low sex steroids)', 'Primary gonadal failure: Turner syndrome (45,X0) in girls, Klinefelter syndrome (47,XXY) in boys; chemotherapy/radiotherapy; autoimmune gonadal failure; surgical castration'],
        ['Hypogonadotrophic hypogonadism (low FSH/LH, low sex steroids)', 'CNS: hypothalamic/pituitary tumour (craniopharyngioma, prolactinoma), post-infection, post-irradiation; Kallmann syndrome (anosmia); functional: chronic illness, malnutrition, exercise (relative energy deficiency in sport), hypothyroidism, hyperprolactinaemia'],
      ],
      caption: 'The key distinction is whether the problem is at the level of the gonads (hypergonadotrophic = high gonadotrophins trying to stimulate failing gonads) or the hypothalamus/pituitary (hypogonadotrophic = inadequate drive).',
    },

    { type: 'heading', level: 2, text: 'Primary Care Investigations (Before Referral)' },

    {
      type: 'list',
      items: [
        'No specific blood tests are required before referral — refer clinically if age criteria are met',
        'If delay in referral: can check bone age (X-ray left hand/wrist), LH, FSH, testosterone (boys), oestradiol (girls), TFTs, IGF-1 (growth hormone screen), FBC, inflammatory markers (exclude systemic illness)',
        'Karyotype: if Turner or Klinefelter suspected (short stature + clinical features)',
        'MRI pituitary/hypothalamus: if CNS cause suspected — arranged by specialist',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Paediatric endocrinology referral: UHDB Queen\'s Hospital Burton general paediatrics (may then refer to paediatric endocrinology at Birmingham Children\'s Hospital or UHDB)',
        'Alternative: Good Hope Hospital (UHB) paediatrics or Birmingham Children\'s Hospital (BCH) endocrinology for complex cases',
        'Include in referral: age, Tanner stage, height/weight with centiles, family history (parental timing of puberty), investigations done, any CNS or systemic symptoms',
        'Urgent referral (same day): if suspected raised intracranial pressure, visual field defect, or signs of CNS pathology alongside delayed puberty',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Delayed Puberty', url: 'https://cks.nice.org.uk/topics/delayed-puberty/' },
        { label: 'BSPED — Delayed Puberty Guidance', url: 'https://www.bsped.org.uk/clinical-resources/guidelines/' },
        { label: 'RCPCH — Growth Charts', url: 'https://www.rcpch.ac.uk/resources/uk-who-growth-charts' },
        { label: 'NHS — Delayed Puberty', url: 'https://www.nhs.uk/conditions/delayed-puberty/' },
      ],
    },
  ],
}
