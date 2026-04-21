import type { Note } from '../data/notes'

export const amenorrhoea: Note = {
  id: 'amenorrhoea',
  title: 'Amenorrhoea & Oligomenorrhoea',
  subtitle: 'Primary and secondary amenorrhoea — causes, investigation pathway, progestogen challenge and management',
  tags: ['gynaecology', 'symptoms'],

  body: 'amenorrhoea amenorrhea oligomenorrhoea periods no period absent menstruation primary secondary functional hypothalamic FHA female athlete triad PCOS polycystic ovarian POI premature ovarian insufficiency failure POF Turner syndrome Kallmann testicular feminisation AIS androgen insensitivity imperforate hymen Asherman intrauterine adhesions prolactinoma hyperprolactinaemia Sheehan syndrome FSH LH oestradiol estradiol prolactin testosterone SHBG FAI free androgen index TFT thyroid progestogen challenge MPA medroxyprogesterone withdrawal bleed oestrogen patch Rotterdam criteria Tanner staging secondary sexual characteristics SSC',

  content: [

    // ── DEFINITIONS ───────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: 'Definitions',
      items: [
        'Primary amenorrhoea: no period by age 15 with secondary sexual characteristics (SSC), or by age 13 without SSC — use Tanner staging',
        'Secondary amenorrhoea: cessation for ≥6 months in women with previously regular periods, or ≥12 months if previously oligomenorrhoeic',
        'Oligomenorrhoea: menstrual cycles >35 days apart for 4 months or more (fewer than 9 periods per year)',
        'Two most common causes together account for ~60%: functional hypothalamic amenorrhoea (FHA) and PCOS',
      ],
    },

    // ── HPO AXIS ──────────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/hormone basic.png',
      alt: 'Hypothalamic-pituitary-ovarian axis diagram: GnRH from hypothalamus stimulates anterior pituitary to release FSH and LH; FSH acts on granulosa cells to produce oestrogen and inhibin; LH acts on theca cells to produce androgens which are converted to oestrogen; oestrogen and inhibin provide negative feedback',
      caption: 'The hypothalamic-pituitary-ovarian (HPO) axis. Disruption at any level produces amenorrhoea: hypothalamic (FHA, Kallmann), pituitary (prolactinoma, Sheehan\'s), ovarian (POI, PCOS) or outflow tract (Asherman\'s, structural). FSH/LH pattern identifies the level of disruption.',
    },

    // ── CAUSES ────────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Causes' },

    {
      type: 'table',
      headers: ['Type', 'Cause', 'Key clues'],
      rows: [
        ['Primary', 'Functional hypothalamic (most common primary)', 'Low BMI, excessive exercise, stress, eating disorder; low FSH/LH'],
        ['Primary', 'Constitutional delay', 'Family history; otherwise healthy; reassurance + review'],
        ['Primary', 'Turner syndrome (45,XO)', 'Short stature, webbed neck, wide-carrying angle; absent SSC; high FSH/LH; karyotype'],
        ['Primary', 'Kallmann syndrome', 'Hypogonadotrophic hypogonadism + anosmia; low FSH/LH'],
        ['Primary', 'Androgen insensitivity syndrome (AIS)', '46,XY genotype; female phenotype; absent uterus; blind vaginal pouch; karyotype'],
        ['Primary', 'Congenital adrenal hyperplasia (CAH)', 'Ambiguous genitalia; raised androgens; 17-OHP elevated'],
        ['Primary', 'Structural: imperforate hymen / absent vagina', 'Cyclical pelvic pain (cryptomenorrhoea); bulging hymen; USS pelvis'],
        ['Secondary / oligo', 'PCOS (most common secondary)', 'Oligomenorrhoea, androgen excess, polycystic ovaries on USS (Rotterdam criteria — separate note)'],
        ['Secondary / oligo', 'Functional hypothalamic amenorrhoea (FHA)', 'Low BMI, female athlete triad, stress, disordered eating; low FSH/LH/oestradiol'],
        ['Secondary / oligo', 'Premature ovarian insufficiency (POI)', 'FSH >25 IU/L on two occasions ≥4–6 weeks apart in women <40; hot flushes, vaginal dryness'],
        ['Secondary / oligo', 'Hyperprolactinaemia / prolactinoma', 'Galactorrhoea, headache, visual field defect; prolactin >1000 mIU/L (or 500–1000 × 2)'],
        ['Secondary / oligo', 'Hypothyroidism', 'Fatigue, weight gain, cold intolerance, bradycardia; raised TSH; ↓ T4'],
        ['Secondary / oligo', 'Sheehan\'s syndrome', 'Postpartum haemorrhage → pituitary infarction; failure to lactate; pan-hypopituitarism'],
        ['Secondary / oligo', 'Asherman\'s syndrome', 'Intrauterine adhesions post-ERPC, D&C, uterine surgery or endometritis; normal hormones; structural on USS/hysteroscopy'],
        ['Secondary / oligo', 'Drugs', 'Antipsychotics (↑ prolactin), high-dose progestogens, GnRH analogues, chemotherapy, steroids'],
      ],
    },

    // ── FHA PATHWAY ──────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/amoenorrhoea pathway.png',
      alt: 'Functional hypothalamic amenorrhoea diagnosis of exclusion pathway showing: Beta hCG to exclude pregnancy, FSH/LH to identify primary ovarian failure, prolactin to identify prolactinoma, testosterone/SHBG/FAI to identify PCOS or CAH, TSH to identify thyroid cause, leading to functional hypothalamic amenorrhoea as diagnosis of exclusion',
      caption: 'Functional hypothalamic amenorrhoea is a diagnosis of exclusion. Work through: pregnancy → POI (high FSH) → PCOS/CAH (raised testosterone/FAI) → prolactinoma (high prolactin) → thyroid disease (abnormal TSH) — if all normal, FHA is confirmed.',
    },

    // ── HISTORY & EXAMINATION ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'History & Examination' },

    {
      type: 'list',
      items: [
        'Menstrual history: age of menarche, cycle length, last period, previous regularity; any cyclical pelvic pain (suggests outflow obstruction)',
        'Primary: ask about secondary sexual characteristics (breast, pubic/axillary hair, growth spurt) — timing and Tanner stage; family history of constitutional delay or chromosomal conditions',
        'Secondary/oligo: ask about symptoms of androgen excess (acne, hirsutism, male pattern hair loss), galactorrhoea, headaches, visual disturbance (prolactinoma)',
        'Thyroid symptoms: weight change, fatigue, heat/cold intolerance, palpitations',
        'Lifestyle: diet, weight change, BMI, exercise intensity and frequency — female athlete triad (low energy availability + menstrual dysfunction + low bone density)',
        'Stress: major life events, anxiety, depression, eating disorder screening (SCOFF)',
        'Contraception and pregnancy history; previous uterine surgery (ERPC, D&C) or pelvic infection → Asherman\'s',
        'Drug history: antipsychotics, progestogens, GnRH analogues, chemotherapy, steroids',
        'Examination: BMI, signs of androgen excess or virilisation, thyroid enlargement, galactorrhoea, visual fields (prolactinoma); pelvic exam if appropriate',
      ],
    },

    // ── INVESTIGATIONS ────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Rule out pregnancy first — always do a urine hCG',
      items: [
        'Urine or serum beta-hCG before any further investigation',
        'If positive: manage as early pregnancy',
      ],
    },

    {
      type: 'table',
      headers: ['Test', 'What it tells you'],
      rows: [
        ['FSH + LH', 'Both low: hypothalamic suppression (FHA). Both high (FSH >25 IU/L × 2, <40y): POI. LH:FSH ratio >2 with raised LH: suggestive of PCOS'],
        ['Oestradiol (E2)', 'Low in hypothalamic causes and POI (may fluctuate); normal in PCOS/Asherman\'s'],
        ['Prolactin', '>1000 mIU/L: significant — refer for MRI pituitary. 500–1000 mIU/L: repeat; if confirmed refer. Stress can mildly raise prolactin (macroprolactinaemia)'],
        ['Testosterone + SHBG → FAI', 'FAI >5: biochemical androgen excess (PCOS most likely). Total testosterone >5 nmol/L: refer urgently — exclude tumour or CAH'],
        ['TFTs (TSH ± T4)', 'Hypothyroidism or hyperthyroidism both cause menstrual disturbance. Abnormal TSH → manage thyroid first'],
        ['17-hydroxyprogesterone (17-OHP)', 'Raised: suspect late-onset CAH — refer endocrinology'],
        ['Pelvic USS (TV or TA)', 'Polycystic ovaries (Rotterdam criteria), ovarian volume, endometrial thickness, structural abnormalities, absent uterus (AIS)'],
        ['Karyotype', 'Primary amenorrhoea: rule out Turner\'s (45,XO) and AIS (46,XY)'],
        ['DEXA scan', 'FHA with amenorrhoea >6–12 months: assess bone density (osteoporosis risk)'],
      ],
      caption: 'Minimum bloods in secondary amenorrhoea: pregnancy test, FSH, LH, oestradiol, prolactin, testosterone, SHBG, TFTs. Add 17-OHP if androgen excess without PCOS features.',
    },

    // ── INTERPRETING RESULTS ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Interpreting Results & Next Steps' },

    {
      type: 'table',
      headers: ['Pattern', 'Most likely diagnosis', 'Action'],
      rows: [
        ['FSH ↑↑, LH ↑ (FSH >25 × 2, age <40)', 'Premature ovarian insufficiency (POI)', 'Refer gynaecology/endocrinology; HRT for bone and cardiovascular protection until age 51'],
        ['FSH ↓, LH ↓, E2 ↓', 'Functional hypothalamic amenorrhoea OR Kallmann/Sheehan\'s', 'Lifestyle change, weight gain; refer endocrinology or gynaecology; MRI brain if pituitary cause suspected'],
        ['FSH normal/↑, LH ↑, testosterone ↑, polycystic USS', 'PCOS', 'See PCOS pathway; endometrial protection if ≤3 periods/year'],
        ['Prolactin >1000 mIU/L', 'Prolactinoma', 'MRI pituitary fossa; refer endocrinology'],
        ['TSH ↑, T4 ↓', 'Hypothyroidism', 'Start levothyroxine; recheck TFTs and cycle after treatment'],
        ['Normal FSH/LH/E2, history of uterine surgery', 'Asherman\'s syndrome', 'Refer gynaecology for hysteroscopy'],
        ['Testosterone >5 nmol/L or signs of virilisation', 'Androgen-secreting tumour / late-onset CAH', 'Urgent referral — endocrinology or gynaecology'],
      ],
    },

    // ── PROGESTOGEN CHALLENGE ─────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Progestogen Challenge Test' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Progestogen challenge — useful when cause is unclear',
      items: [
        'Give medroxyprogesterone acetate (MPA) 10 mg OD for 5–10 days then stop',
        'Progestogen mimics the post-ovulatory progesterone rise — if the endometrium has been primed by adequate oestrogen, a withdrawal bleed follows when progestogen stops',
        'Bleed occurs (positive): oestrogen levels adequate but no ovulation → PCOS most likely',
        'No bleed (negative): low oestrogen (FHA or POI) OR outflow obstruction — distinguish with step 2',
        'Step 2 (if no bleed): add oestrogen patch (50 mcg) for 21 days followed by MPA for the last 5–10 days — if still no withdrawal bleed, the cause is outflow obstruction (Asherman\'s / structural) not hormonal',
      ],
    },

    // ── ENDOMETRIAL PROTECTION (NON-PCOS) ────────────────────────────────────
    { type: 'heading', level: 2, text: 'Endometrial Protection' },

    {
      type: 'list',
      items: [
        'Any woman with ≤3 periods/year (oligomenorrhoea or amenorrhoea) needs endometrial protection — oestrogen-driven proliferation without regular shedding → endometrial hyperplasia risk',
        'Induce a withdrawal bleed every 3 months: MPA 10 mg OD for 14 days, or combined oral contraceptive pill, or Mirena IUS',
        'Before inducing bleed: check endometrial thickness on USS if amenorrhoeic for >6 months',
        'Endometrial thickness >10 mm or atypical appearance → 2-week wait referral (do not induce bleed first)',
        'If normal thickness: induce withdrawal bleed as above, then USS rescan to confirm shed',
      ],
    },

    // ── FEMALE ATHLETE TRIAD ──────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Female Athlete Triad & Functional Hypothalamic Amenorrhoea' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Female athlete triad — do not just prescribe COCP to "regulate" cycles',
      items: [
        'Triad: low energy availability (under-fuelling relative to exercise) + menstrual dysfunction + low bone mineral density',
        'GnRH pulse suppression from energy deficit → low FSH/LH → low oestrogen → amenorrhoea',
        'Primary management: increase caloric intake and/or reduce exercise intensity — address any underlying eating disorder (SCOFF screening)',
        'Prescribing COCP to restart periods is not appropriate — it masks the problem, does not restore bone density, and does not restore fertility',
        'Oestrogen patch + cyclical progestogen (e.g. norethisterone 5 mg days 15–26) may be used for bone protection if BMI <18.5 or prolonged amenorrhoea after lifestyle advice',
        'DEXA scan if amenorrhoea >6–12 months — refer if T-score ≤ −1.5 for age',
        'Refer to specialist (endocrinology or specialist eating disorder service) if no improvement with lifestyle change',
      ],
    },

    // ── REFERRAL SUMMARY ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Referral Summary' },

    {
      type: 'table',
      headers: ['Diagnosis', 'Refer to', 'Urgency'],
      rows: [
        ['Primary amenorrhoea (all cases)', 'Gynaecology after initial investigations', 'Routine (within 6–8 weeks)'],
        ['POI', 'Gynaecology or endocrinology', 'Soon — HRT needed; fertility implications'],
        ['PCOS', 'Gynaecology (or fertility if conceiving)', 'Routine — manage in primary care first'],
        ['FHA — not responding to lifestyle', 'Endocrinology or gynaecology', 'Routine'],
        ['Prolactinoma (prolactin >1000)', 'Endocrinology + MRI pituitary', 'Soon'],
        ['Hypothyroidism', 'Manage in primary care with levothyroxine', 'No referral unless resistant'],
        ['Asherman\'s / outflow obstruction', 'Gynaecology (hysteroscopy)', 'Routine'],
        ['Testosterone >5 nmol/L or virilisation', 'Urgent gynaecology/endocrinology', 'Urgent — exclude tumour'],
        ['Suspected Turner\'s or AIS (primary)', 'Paediatric endocrinology / clinical genetics', 'Soon after karyotype'],
      ],
    },

    // ── LINKS ─────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Amenorrhoea', url: 'https://cks.nice.org.uk/topics/amenorrhoea/' },
        { label: 'NICE CKS — Oligomenorrhoea', url: 'https://cks.nice.org.uk/topics/oligomenorrhoea/' },
        { label: 'ESHRE — POI Guidelines', url: 'https://www.eshre.eu/Guidelines-and-Legal/Guidelines/Management-of-premature-ovarian-insufficiency' },
        { label: 'RCOG — POI Guideline', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/premature-ovarian-insufficiency-management-green-top-guideline-no-23/' },
      ],
    },

  ],
}
