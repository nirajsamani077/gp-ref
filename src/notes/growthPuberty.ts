import type { Note } from '../data/notes'

export const growthPuberty: Note = {
  id: 'growth-puberty',
  title: 'Short Stature & Puberty Problems',
  subtitle: 'Growth monitoring and referral thresholds, delayed and precocious puberty, and the normal sequence',
  tags: ['paediatrics'],

  body: `short stature growth chart centile crossing mid-parental height constitutional delay growth hormone hypothyroidism Turner syndrome coeliac delayed puberty precocious puberty Tanner staging testicular volume breast bud gonadotrophin bone age`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Growth and puberty are sensitive markers of a child\'s general health, so faltering growth or abnormal timing of puberty can be the first sign of an underlying problem. Most short stature and most variations in pubertal timing are normal variants (familial short stature, constitutional delay), but the GP\'s task is to measure and plot accurately, compare against the mid-parental (target) height, and know the thresholds that warrant paediatric or endocrine referral.',
    },

    { type: 'heading', level: 2, text: 'Assessing Growth' },
    {
      type: 'list',
      items: [
        'Plot serial heights (and weight/head circumference in young children) on a growth chart — a single measurement is far less useful than the TREND.',
        'Calculate the mid-parental/target height and its centile range; interpret the child\'s height against this and their growth velocity.',
        'Red flags for referral: height below the 0.4th centile, crossing DOWN through centile lines (falling growth velocity), height markedly discordant from the mid-parental centile, or short stature with dysmorphic features, chronic symptoms or delayed puberty.',
        'First-line work-up (per concern): FBC, U&E, LFTs, TFTs, coeliac serology, bone profile, and (in girls with short stature) a karyotype for Turner syndrome; a bone-age X-ray helps in specialist assessment.',
      ],
    },
    {
      type: 'table',
      headers: ['Pattern', 'Think'],
      rows: [
        ['Short but growing along a low centile, normal velocity', 'Familial short stature (check parental heights)'],
        ['Short, delayed bone age, delayed puberty, family history', 'Constitutional delay of growth & puberty (a normal variant)'],
        ['Falling centiles / poor velocity', 'Chronic disease (coeliac, IBD, renal), hypothyroidism, growth hormone deficiency, Cushing\'s, psychosocial deprivation'],
        ['Short girl ± webbed neck/wide-spaced nipples', 'Turner syndrome (45,XO) — karyotype'],
      ],
    },

    { type: 'heading', level: 2, text: 'Delayed Puberty' },
    {
      type: 'list',
      items: [
        'Defined as no breast development by age 13 in girls, or testicular volume <4 mL by age 14 in boys (and absent/arrested progression).',
        'Commonest cause is constitutional delay (especially boys, often familial) — usually reassurance and monitoring, but refer to exclude other causes and because it causes distress.',
        'Other causes: chronic disease/undernutrition (incl. eating disorders, excessive exercise), hypogonadism (Klinefelter\'s, Turner\'s, gonadal failure), and pituitary/hypothalamic disease (including Kallmann syndrome with anosmia).',
        'Refer to paediatric endocrinology for assessment; short specialist-led courses of sex steroids can induce puberty where appropriate.',
      ],
    },

    { type: 'heading', level: 2, text: 'Precocious Puberty' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer Early Pubertal Signs',
      items: [
        'Puberty before age 8 in girls or 9 in boys → refer to paediatric endocrinology.',
        'Central (gonadotrophin-dependent) precocious puberty is commoner in girls and often idiopathic, but in boys it more often has a pathological cause (CNS lesion) — image the brain.',
        'Also consider peripheral causes: adrenal/gonadal tumours, congenital adrenal hyperplasia, and exogenous sex-steroid exposure.',
        'Isolated premature thelarche (breast development) or adrenarche (pubic hair) without other pubertal signs is often benign but still warrants assessment.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Growth Faltering / Short Stature', url: 'https://cks.nice.org.uk/' },
        { label: 'RCPCH — Growth Charts', url: 'https://www.rcpch.ac.uk/resources/growth-charts' },
        { label: 'Child Growth Foundation', url: 'https://childgrowthfoundation.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'faltering-growth', label: 'Faltering Growth', subtitle: 'Weight/growth failure in infancy and childhood' },
        { id: 'coeliac-disease', label: 'Coeliac Disease', subtitle: 'A key treatable cause of poor growth' },
        { id: 'delayed-puberty', label: 'Delayed Puberty', subtitle: 'Detailed pubertal-delay assessment' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Growth failure from thyroid disease' },
        { id: 'child-development', label: 'Child Development & Delay', subtitle: 'Wider developmental surveillance' },
      ],
    },

  ],
}
