import type { Note } from '../data/notes'

export const delayedPuberty: Note = {
  id: 'delayed-puberty',
  title: 'Delayed Puberty',
  subtitle: 'When to refer, Tanner staging, constitutional delay vs pathological causes, and functional hypogonadism',
  tags: ['paediatrics', 'endocrine'],

  body: 'delayed puberty constitutional delay growth thelarche breast development testicular development gonadarche adrenarche precocious puberty hypogonadotrophic hypogonadism hypergonadotrophic hypogonadism Turner syndrome Klinefelter Kallmann syndrome HPG axis FSH LH testosterone oestrogen GnRH refer paediatrics endocrine secondary sexual characteristics Tanner staging bone age functional hypogonadism relative energy deficiency RED-S athlete eating disorder anosmia mid-parental height',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Normal Puberty — Timing and Sequence',
      items: [
        'Girls: thelarche (breast development, Tanner B2) normally begins age 8–13 years (mean 10.5y); first pubertal sign; menarche occurs ~2–2.5 years later',
        'Boys: testicular enlargement (>4 mL by Prader orchidometer, Tanner G2) normally begins age 9–14 years (mean 11.5y); first pubertal sign',
        'Precocious puberty: girls <8 years, boys <9 years — refer urgently to paediatric endocrinology',
        'Adrenarche (pubic hair, body odour): driven by adrenal androgens, independent of HPG axis — can appear before or separately from gonadarche; adrenarche alone (pubarche) without other signs is usually normal',
        'Once puberty starts, progression should continue — puberty that stalls for >1 year after starting is pathological',
      ],
    },

    { type: 'heading', level: 2, text: 'Tanner Staging — What to Document' },

    {
      type: 'table',
      headers: ['Stage', 'Girls (Breast)', 'Girls (Pubic Hair)', 'Boys (Genitalia)', 'Boys (Pubic Hair)'],
      rows: [
        ['Tanner 1 (Prepubertal)', 'No breast tissue', 'No pubic hair', 'Testes <4 mL; no penile enlargement', 'No pubic hair'],
        ['Tanner 2', 'Breast bud (thelarche) — small mound; areola enlarges', 'Sparse straight hair at labia majora', 'Testes ≥4 mL (gonadarche); scrotum reddening; minimal penile growth', 'Sparse straight hair at base of penis'],
        ['Tanner 3', 'Breast/areola further enlarge; no separate contour', 'Hair darker, curlier, covers mons pubis', 'Testes enlarge further; penile length increases', 'Hair darker, curlier over pubis'],
        ['Tanner 4', 'Areola and nipple project above breast contour (secondary mound)', 'Adult hair but not covering inner thighs', 'Testes adult-ish size; glans develops; scrotal darkening', 'Adult hair not covering inner thighs'],
        ['Tanner 5 (Adult)', 'Adult breast contour — only nipple projects', 'Extends to inner thighs', 'Adult size and appearance', 'Extends to inner thighs'],
      ],
      caption: 'Document Tanner stage at each review. Normal puberty progression: Tanner 2→5 takes approximately 4 years in girls and 4–5 years in boys. Growth velocity peaks at Tanner 2–3 in girls and Tanner 3–4 in boys.',
    },

    { type: 'heading', level: 2, text: 'When to Refer — Criteria for GP' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer to Paediatric Endocrinology If',
      items: [
        'Girl: no thelarche (breast development, Tanner B2) by age 13 years — refer via e-RS (routine)',
        'Boy: no testicular enlargement (testes <4 mL) by age 14 years — refer via e-RS (routine)',
        'Any child: puberty has started (Tanner 2) but stalled/arrested for >1 year without progression',
        'Any child: significant short stature (height below 2nd centile or >2SD below mid-parental height centile) alongside delayed puberty',
        'Any child: features suggesting Turner syndrome (girls) or Klinefelter syndrome (boys) — see below',
        'Any child: anosmia alongside delayed puberty — strongly suggests Kallmann syndrome',
        'Urgent (same-day): signs of raised intracranial pressure (headache, visual field defect, papilloedema) — pituitary/hypothalamic lesion',
      ],
    },

    { type: 'heading', level: 2, text: 'Causes — Constitutional vs Pathological' },

    {
      type: 'table',
      headers: ['Category', 'Common Causes', 'Key Features / Clues'],
      rows: [
        ['Constitutional delay of growth and puberty (CDGP)', 'Most common cause (~60%); often familial ("late bloomers"); ask parental age of puberty', 'Normal growth velocity but bone age delayed (appears younger on X-ray); FSH/LH low-normal; puberty will eventually occur; reassurance ± sex steroid induction by specialist'],
        ['Functional hypogonadism (GnRH deficiency)', 'Chronic illness (IBD, coeliac, cystic fibrosis), malnutrition, anorexia nervosa, relative energy deficiency in sport (RED-S)', 'Often accompanied by weight loss, poor weight gain, or intense exercise; BMI <18.5; treat underlying cause first; FSH/LH inappropriately low; recovers with adequate nutrition'],
        ['Hypogonadotrophic hypogonadism (central)', 'Kallmann syndrome (anosmia + HH), GnRH deficiency, pituitary tumour (craniopharyngioma, prolactinoma), post-radiotherapy/surgery, hypothyroidism, hyperprolactinaemia', 'Low FSH, low LH, low sex steroids; anosmia = Kallmann; headache/visual field = pituitary mass; check TFTs and prolactin'],
        ['Hypergonadotrophic hypogonadism (primary gonadal failure)', 'Turner syndrome (45,X0) in girls, Klinefelter syndrome (47,XXY) in boys, autoimmune gonadal failure, chemotherapy/radiotherapy, bilateral orchidectomy', 'High FSH, high LH, low sex steroids — gonads failing and pituitary trying harder; karyotype confirms Turner/Klinefelter'],
      ],
    },

    { type: 'heading', level: 2, text: 'Syndrome Red Flags — Don\'t Miss' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Turner and Klinefelter — Features a GP May Spot',
      items: [
        'Turner syndrome (45,X0): SHORT stature, webbed neck, wide-carrying angle (cubitus valgus), low posterior hairline, shield chest, widely spaced nipples, short 4th metacarpal; primary amenorrhoea; often picked up at growth faltering or delayed puberty; check karyotype',
        'Klinefelter syndrome (47,XXY): tall stature, small firm testes, gynaecomastia, sparse body hair, infertility; often diagnosed late; soft learning difficulty; karyotype confirms',
        'Kallmann syndrome: delayed puberty + anosmia (inability to smell — specifically ask about sense of smell); may have cleft palate, colour blindness; need specialist endocrinology; treatment with GnRH or gonadotrophin injections',
      ],
    },

    { type: 'heading', level: 2, text: 'Functional Hypogonadism — Particularly Important in GP' },

    {
      type: 'list',
      items: [
        'Relative energy deficiency in sport (RED-S): previously "female athlete triad"; occurs in athletes with high energy expenditure and inadequate caloric intake; also affects male athletes',
        'Signs: delayed puberty or arrested puberty, amenorrhoea, stress fractures, poor bone density, fatigue',
        'Ask about: sport intensity, dietary restriction, attitudes to food and weight, training schedule',
        'Treat the cause: increase energy availability (caloric intake) and consider reducing training load; refer sports medicine, dietitian, and CAMHS if eating disorder suspected',
        'LGBTQ+ context: trans and non-binary young people on puberty blockers will have delayed puberty as a clinical consequence — ensure clear communication with specialist',
        'All patients with delayed puberty: assess for psychological impact (social isolation, bullying) — provide emotional support and consider CAMHS referral if mental health concerns',
      ],
    },

    { type: 'heading', level: 2, text: 'Primary Care Investigations Before Referral' },

    {
      type: 'list',
      items: [
        'Weight and height plotted on UK-WHO growth chart with mid-parental height centile (MPH) calculated',
        'Bone age X-ray (left hand/wrist): available via radiology; delayed bone age suggests CDGP; normal/advanced bone age for chronological age suggests underlying cause',
        'Baseline bloods: LH, FSH, testosterone (boys) or oestradiol (girls), TFTs, IGF-1, FBC, CRP, U&E, LFT, coeliac serology — to exclude systemic illness',
        'If hypergonadotrophic features suspected: karyotype (check before or alongside specialist referral)',
        'Smell test: ask patient to identify common smells (coffee, peppermint); if anosmia present → arrange Kallmann syndrome testing',
        'MRI pituitary/hypothalamus: only if CNS cause suspected — arranged by specialist, not primary care',
        'No blood tests required BEFORE referral if age criteria are clearly met — refer clinically; specialist will direct investigations',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety Netting',
      items: [
        'Unexplained significant weight loss alongside delayed puberty → urgent referral (cancer, severe eating disorder)',
        'Headache + visual field defect + delayed puberty → same-day secondary care (pituitary/hypothalamic mass)',
        'Signs of short stature + dysmorphic features in a girl → include karyotype in investigations; do not delay referral',
        'Psychological distress (significant social isolation, bullying, non-attendance at school) → CAMHS referral in parallel with endocrine referral',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Delayed Puberty', url: 'https://cks.nice.org.uk/topics/delayed-puberty/' },
        { label: 'BSPED — Delayed Puberty Guidelines', url: 'https://www.bsped.org.uk/clinical-resources/guidelines/' },
        { label: 'RCPCH — Growth Charts (UK-WHO)', url: 'https://www.rcpch.ac.uk/resources/uk-who-growth-charts' },
        { label: 'Klinefelter Syndrome Association UK', url: 'https://www.ksa-uk.net/' },
        { label: 'Turner Syndrome Support Society', url: 'https://www.tss.org.uk/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Paediatric endocrinology: UHDB Queen\'s Hospital Burton general paediatrics (may then refer onward to paediatric endocrinology at UHDB or Birmingham Children\'s Hospital)',
        'Complex cases (Turner, Klinefelter, Kallmann, pituitary pathology): Birmingham Children\'s Hospital (BCH) paediatric endocrinology — UHDB can help coordinate',
        'Include in referral: age, Tanner stage, height/weight with centiles, mid-parental height centile, family history of pubertal timing, investigations done, nutritional and exercise history, any syndromic features',
        'CAMHS (if psychological impact of delayed puberty): MPFT CAMHS via CaFSPA — Holly Lodge, St Michaels Court, Lichfield WS13 6EF; include impact on school and social functioning',
        'Eating disorder with RED-S: eating disorder services via CAMHS or adult mental health depending on age; dietician referral in parallel',
      ],
    },
  ],
}
