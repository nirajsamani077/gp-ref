import type { Note } from '../data/notes'

export const menopause: Note = {
  id: 'menopause',
  title: 'Menopause & Perimenopause',
  subtitle: 'Diagnosis, symptoms, HRT regimens, contraception around menopause, POI and counselling',
  tags: ['womens-health', 'endocrine'],

  body: 'menopause perimenopause HRT hormone replacement therapy vasomotor symptoms hot flushes night sweats FSH oestrogen progesterone testosterone libido vaginal atrophy urogenital atrophy genitourinary syndrome GSM contraception around menopause premature ovarian insufficiency POI early menopause MHT menopausal hormone therapy fezolinetant venlafaxine clonidine gabapentin SSRI SNRI NICE menopause guideline 2015 urinary symptoms mood anxiety brain fog cognitive',

  content: [

    { type: 'heading', level: 2, text: 'Definition and Diagnosis' },

    {
      type: 'list',
      items: [
        'Menopause: defined as 12 consecutive months of amenorrhoea in the absence of other causes; average age in UK is 51 years',
        'Perimenopause: the transitional period leading up to menopause — irregular periods, menopause symptoms may begin; can last months to years; ovarian function gradually declining with erratic hormone fluctuations (FSH rises, oestrogen varies)',
        'Diagnosis is CLINICAL in women ≥45 years — do NOT routinely check FSH; symptoms ± menstrual change are sufficient to diagnose perimenopause/menopause',
        'FSH testing: consider in: <45 years with symptoms (check FSH twice, 4–6 weeks apart); those who have had hysterectomy (no periods to guide); 40–44 years if diagnosis uncertain',
        'POI (Premature Ovarian Insufficiency): menopause before age 40; FSH >25 IU/L on 2 occasions 4–6 weeks apart; requires specialist referral; HRT strongly recommended until at least age 51 (reduces cardiovascular, bone, and cognitive risk); affects 1% of women under 40',
        'Do NOT diagnose menopause in someone on the combined oral contraceptive pill or implant — these suppress FSH and mask symptoms',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptoms' },

    {
      type: 'table',
      headers: ['Domain', 'Symptoms'],
      rows: [
        ['Vasomotor', 'Hot flushes (sudden intense heat, flushing, sweating), night sweats, palpitations during flushes — most distressing symptoms; affect 75% of menopausal women; peak severity perimenopausal; average duration 7 years (some women continue for decades)'],
        ['Sleep', 'Insomnia — difficulty falling and staying asleep; night sweats disrupt sleep; fatigue; daytime napping'],
        ['Psychological / cognitive', '"Brain fog" — poor concentration and memory; anxiety (including new-onset anxiety), low mood, irritability, emotional lability; increased vulnerability to depression (NOT always depressive disorder — treat menopause first)'],
        ['Urogenital / genitourinary syndrome of menopause (GSM)', 'Vaginal dryness, itching, soreness, dyspareunia (superficial — due to vaginal atrophy); urinary urgency, frequency, dysuria, recurrent UTIs; vulvovaginal atrophy (labia shrink, introitus narrows, loss of rugae); symptoms worsen with time if untreated'],
        ['Sexual function', 'Reduced libido (low testosterone relative to oestrogen; vaginal discomfort; mood); reduced arousal and lubrication; orgasmic dysfunction'],
        ['Musculoskeletal', 'Joint aches, muscle pain (oestrogen has anti-inflammatory and musculoskeletal effects); increased fracture risk as bone density declines'],
        ['Cardiovascular', 'Oestrogen deficiency increases CV risk post-menopause — lipid changes (raised LDL, lower HDL), endothelial dysfunction; hot flushes associated with higher CV risk'],
      ],
    },

    { type: 'heading', level: 2, text: 'HRT — Which Regimen?' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Choosing the Right HRT Regimen',
      items: [
        'Women WITH a uterus need oestrogen + progestogen (to protect endometrium from oestrogen-driven hyperplasia/cancer)',
        'Women WITHOUT a uterus (hysterectomy) need oestrogen ONLY — no progestogen needed; lowest risk profile',
        'Perimenopausal (irregular periods or within 12 months of LMP): sequential (cyclical) HRT — oestrogen daily + progestogen 12–14 days/cycle → monthly withdrawal bleed',
        'Post-menopausal (>12 months since LMP, or age >54 if LMP uncertain): continuous combined HRT — oestrogen + progestogen DAILY → no bleed (aim amenorrhoea; some irregular spotting in first 3–6 months is normal; bleeding >6 months post-starting → investigate)',
        'ALWAYS prefer TRANSDERMAL oestrogen (patch or gel) over oral if: VTE risk factors (obesity, personal/family history DVT/PE, immobility, thrombophilia); hypertension; migraine with aura; hypertriglyceridaemia — transdermal does NOT increase VTE risk',
      ],
    },

    { type: 'heading', level: 2, text: 'Contraception Around Menopause' },

    {
      type: 'list',
      items: [
        'Perimenopausal women can still become pregnant — contraception required until: age ≥50 and amenorrhoea >2 years (FSH may not be reliably raised if on HRT); age <50 and amenorrhoea >2 years; or age ≥55 (essentially no spontaneous pregnancies documented beyond 55 — FSRH guidance)',
        'HRT is NOT contraceptive — sequential HRT causes withdrawal bleeds but does NOT inhibit ovulation; continuous combined HRT does not reliably inhibit ovulation either',
        'COCP: provides contraception AND symptom control but masks perimenopause; can continue to 50 in non-smoking women without cardiovascular risk factors; FSH unreliable while on COCP',
        'Mirena IUS: provides endometrial protection for HRT (licensed 4–5 years for HRT use; can extend with specialist advice); provides contraception; use with transdermal oestrogen for combined HRT; lasts 8 years for contraception (FSRH 2023 — any Mirena inserted ≥45 can be used for contraception until menopause/age 55)',
        'POP, implant: continue as effective contraception; does not affect FSH testing; can be used alongside oestrogen-only HRT (no endometrial protection from POP in menopausal patients — Mirena preferred if wanting progestogenic endometrial protection)',
        'Barrier methods: always an option; no health risks; less effective than hormonal methods; menopausal vaginal changes may impair comfort with barrier methods',
        'Stopping contraception: if FSH >30 IU/L and amenorrhoea >12 months (off HRT for ≥2 months) → can stop contraception; if on sequential HRT, pause progestogen for 6 weeks and check FSH',
      ],
    },

    { type: 'heading', level: 2, text: 'Genitourinary Syndrome of Menopause (GSM) and Local Vaginal Oestrogen' },

    {
      type: 'list',
      items: [
        'GSM (vaginal atrophy) symptoms do NOT improve spontaneously — they worsen progressively without oestrogen replacement; systemic HRT helps but many women also need local treatment',
        'Local vaginal oestrogen: estriol cream (Ovestin), estradiol vaginal tablets (Vagifem), vaginal gel (Blissel), vaginal ring (Estring), pessaries (Imvaggis) — all very effective; minimal systemic absorption; safe for almost all women including most breast cancer survivors (after specialist review)',
        'Does NOT require progestogen — systemic absorption too low to stimulate endometrium',
        'Continue indefinitely — symptoms return within months of stopping',
        'Safe in: almost all women; most women after breast cancer treatment (discuss with oncologist if on aromatase inhibitor); do NOT use in: women with current oestrogen receptor-positive tumour and specialist advice against it',
        'Vaginal moisturisers (Replens, YES WB): non-hormonal; applied 3×/week; useful adjunct to oestrogen or as sole treatment if oestrogen contraindicated; maintain vaginal moisture and pH',
        'Pelvic floor exercises: essential for urinary urgency/leakage — refer to pelvic floor physiotherapist; combine with local oestrogen',
      ],
    },

    { type: 'heading', level: 2, text: 'Non-Hormonal Options for Vasomotor Symptoms' },

    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Notes'],
      rows: [
        ['Venlafaxine (SNRI)', '37.5–75 mg OD', 'Most evidence; effective within 2 weeks; avoid in women on tamoxifen (CYP2D6 issues less with venlafaxine than SSRIs); side effects: nausea initially, BP monitoring'],
        ['Paroxetine (SSRI)', '10–20 mg OD', 'AVOID in women on tamoxifen — significant CYP2D6 inhibition reduces tamoxifen efficacy; can use fluoxetine or citalopram as alternative SSRIs'],
        ['Clonidine', '50 mcg BD', 'Sympatholytic; allow 4–8 weeks for effect; max benefit at 24 weeks; side effects: dry mouth, drowsiness, postural hypotension; avoid if depression'],
        ['Gabapentin', '300 mg nocte → TDS', 'Effective especially for nocturnal flushes; off-licence; sedating; useful if sleep disruption predominant; caution driving'],
        ['Fezolinetant (Veoza)', '45 mg OD', 'NK3 receptor antagonist; newly licensed 2024 (UK); specifically for menopausal vasomotor symptoms; non-hormonal; no oestrogen activity; initial specialist prescribing; taken at the same time each day'],
      ],
      caption: 'All non-hormonal options are less effective than HRT for vasomotor symptoms. They are appropriate for women where HRT is contraindicated or declined.',
    },

    { type: 'heading', level: 2, text: 'Testosterone in Menopause' },

    {
      type: 'list',
      items: [
        'Low libido is extremely common in menopause (reduced free testosterone due to ovarian and adrenal decline); also affected by low oestrogen (vaginal dryness affecting sex), mood, sleep, relationship factors',
        'Testosterone therapy: off-licence for women in UK but recommended by NICE and British Menopause Society (BMS); transdermal gel/cream (Tostran 2% gel at 0.5–1 pump/day; or compounded preparations); also Testim gel off-licence',
        'Benefits: improves libido and sexual satisfaction; may improve energy, mood, cognitive function',
        'Monitoring: check testosterone levels (total testosterone, SHBG) at baseline and 3–6 months; aim for physiological female range; signs of excess (hirsutism, acne, voice change) — reduce dose',
        'Must ensure adequate oestrogen first — testosterone alone insufficient if oestrogen deficient',
        'Not usually prescribed until oestrogen adequately replaced; refer to specialist if needed (not universally prescribable in primary care; improving access)',
      ],
    },

    { type: 'heading', level: 2, text: 'Premature Ovarian Insufficiency (POI)' },

    {
      type: 'list',
      items: [
        'POI: menopause before age 40; affects 1% of women; FSH >25 IU/L on two occasions 4–6 weeks apart with oligomenorrhoea/amenorrhoea for ≥4 months',
        'Causes: idiopathic (50%); genetic (Turner syndrome, Fragile X premutation); autoimmune (associated with Addison\'s, Hashimoto\'s, T1DM); iatrogenic (chemotherapy, radiotherapy, bilateral oophorectomy)',
        'Impact: premature oestrogen deficiency → significantly increased risk of cardiovascular disease, osteoporosis, dementia, early mortality — all reduced by HRT',
        'Management: HRT strongly recommended until at least age 51 (natural menopause age) — does NOT add to breast cancer risk at this age; preferred preparation: sequential HRT until >50 then consider switching to continuous combined; COCP can be used as alternative (provides contraception too)',
        'Fertility: spontaneous ovulation occurs in ~5–10% despite POI; LARC recommended if pregnancy not desired; IVF with donor eggs is the main fertility option; refer to reproductive medicine',
        'Investigations: karyotype (Turner\'s), FMR1 premutation (Fragile X), autoimmune screen (TPO, adrenal antibodies, TFTs, cortisol/short Synacthen), bone density (DEXA)',
        'Psychological impact: diagnosis devastating for young women; specialist POI clinic (Daisy Network — support charity: daisynetwork.org); psychological support; peer support groups',
      ],
    },

    { type: 'heading', level: 2, text: 'Counselling and Annual Review' },

    {
      type: 'list',
      items: [
        'No fixed maximum duration of HRT — NICE guidance: discuss benefits and risks annually; individualise based on patient\'s risk profile, symptoms, and preferences',
        'Review: 3 months after starting (symptom control, side effects, BP), then annually (BP check, breast awareness, discuss updated evidence)',
        'NHS Breast Screening Programme: regular mammography continues through HRT use — do not stop screening',
        'Stopping HRT: taper gradually over 2–3 months to minimise rebound symptoms; abrupt cessation → acute return of symptoms; some women choose to stay on HRT long-term for quality of life, bone protection, or ongoing symptoms — this is acceptable with annual review',
        'Addressing misconceptions: many women (and some clinicians) have excessive fear of HRT based on the original 2002 WHI trial (flawed methodology — older women, oral HRT, included MPA); modern evidence (transdermal, micronised progesterone, starting early) is much more reassuring',
        'Resources: NICE guideline NG23 (Menopause 2015, updated 2019); British Menopause Society (thebms.org.uk); Menopause Matters (menopausematters.co.uk); Newson Health menopause support (patient leaflets)',
      ],
    },

  ],
}
