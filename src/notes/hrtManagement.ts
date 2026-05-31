import type { Note } from '../data/notes'

export const hrtManagement: Note = {
  id: 'hrt-management',
  title: 'HRT — Management, Risks and Alternatives',
  subtitle: 'Contraindications, breast cancer risk, VTE, routes of administration, non-hormonal options and tibolone',
  tags: ['womens-health', 'endocrine'],

  body: 'HRT hormone replacement therapy menopause oestrogen progesterone progestogen transdermal patch gel sequential combined continuous oestrogen-sensitive cancer VTE venous thromboembolism breast cancer endometrial cancer stroke tibolone clonidine SSRIs non-hormonal alternatives vaginal oestrogen local atrophy urogenital testosterone libido perimenopause premature ovarian insufficiency POI contraindications risks',

  content: [

    { type: 'heading', level: 2, text: 'Contraindications to HRT' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Absolute Contraindications — Do NOT Start HRT',
      items: [
        'Current or recent (<5 years) breast cancer — oestrogen-sensitive; combined HRT increases recurrence risk',
        'Other hormone-sensitive cancers: endometrial cancer (unless specialist review), ovarian cancer (specialist review)',
        'Unexplained vaginal/uterine bleeding — exclude endometrial pathology first (USS, biopsy)',
        'Untreated endometrial hyperplasia — treat first before starting HRT; requires progestogen to protect uterus',
        'Active VTE (DVT, PE) — oral HRT increases VTE risk; transdermal does not (risk-neutral); use contraception until VTE resolved; discuss with haematologist if thrombophilia',
        'Active liver disease with deranged LFT — HRT metabolised hepatically; relative contraindication',
        'Uncontrolled hypertension — optimise BP first; HRT is not absolutely contraindicated at well-controlled levels',
      ],
    },

    { type: 'heading', level: 2, text: 'HRT Regimens — Routes and Types' },

    {
      type: 'table',
      headers: ['Regimen', 'Used When', 'Details'],
      rows: [
        ['Sequential (cyclical) combined HRT', 'Perimenopausal — still having periods or within 12 months of LMP', 'Oestrogen daily + progestogen for 12–14 days per cycle; produces a monthly withdrawal bleed; reduces risk of endometrial hyperplasia'],
        ['Continuous combined HRT', 'Post-menopausal — at least 12 months after LMP (54 years if LMP uncertain)', 'Oestrogen + progestogen daily without break; aim is amenorrhoea (may have irregular spotting in first 3–6 months); if bleed persists >6 months investigate'],
        ['Oestrogen-only HRT', 'Women with NO uterus (post-hysterectomy)', 'No progestogen needed — progestogen is only required to protect the endometrium; lowest side effect profile; lowest breast cancer risk of all HRT regimens'],
        ['Local vaginal oestrogen', 'Urogenital atrophy — dyspareunia, vaginal dryness, recurrent UTI, bladder urgency', 'Estriol cream, vagisil pessaries, Vagifem, Blissel gel, Imvaggis pessary, or estradiol ring — safe for almost all women including most breast cancer survivors (specialist review for hormone-sensitive cancer); systemic absorption very low; use long-term; does NOT require progestogen'],
        ['Tibolone (Livial)', 'Post-menopausal alternative to combined HRT (>12 months after LMP)', 'Synthetic steroid with oestrogenic, progestogenic AND androgenic activity; 2.5 mg OD; may help libido; NOT suitable perimenopausally; higher stroke risk in >60s; not equivalent to modern continuous combined HRT for bone protection comparison'],
      ],
    },

    { type: 'heading', level: 2, text: 'Routes of Oestrogen Delivery' },

    {
      type: 'table',
      headers: ['Route', 'Products', 'Key Differences'],
      rows: [
        ['Transdermal patch', 'Evorel, Estradot, FemSeven (various doses)', 'Changed 1–2 weekly; avoids first-pass hepatic metabolism → NO increased VTE risk; good compliance; skin irritation in some'],
        ['Transdermal gel', 'Oestrogel (pump), Sandrena (sachet), Lenzetto (spray)', 'Applied to arms/thighs/abdomen daily; avoids first-pass → no VTE risk; flexible dosing (pump allows dose titration); allow to dry before contact'],
        ['Oral tablet', 'Elleste Solo, Premarin (conjugated equine), Progynova', 'Convenient; INCREASED VTE risk (2–3× baseline, still low absolute risk) due to first-pass effect; increased triglycerides (caution in hypertriglyceridaemia); more drug interactions'],
        ['Subcutaneous implant', 'Oestradiol pellet 25/50/100 mg', 'Inserted 6-monthly by specialist; very stable levels; risk of tachyphylaxis (requiring ever-higher doses); less commonly used now'],
      ],
      caption: 'Transdermal oestrogen is PREFERRED over oral in women with VTE risk factors (including obesity, immobility, thrombophilia, or personal/family history of DVT/PE) — no increased VTE risk. Also preferred in hypertension, migraine with aura, and hypertriglyceridaemia.',
    },

    { type: 'heading', level: 2, text: 'Progestogens — Options and Considerations' },

    {
      type: 'list',
      items: [
        'Micronised progesterone (Utrogestan): body-identical; lowest breast cancer risk of progestogens; best side effect profile; 100 mg nocte for continuous or 200 mg nocte for 12 days/cycle sequential; also licensed as vaginal pessary',
        'Levonorgestrel IUS (Mirena): highly effective endometrial protection; local progestogen with minimal systemic effects; good for women wanting contraception and HRT; lasts 5 years (licensed 5 years for contraception, 4 years for HRT protection — specialist may extend)',
        'Dydrogesterone: combined with oestradiol in Femoston tablets; lower androgenic activity than older progestogens',
        'Norethisterone (NETA): older progestogen; more androgenic; lower breast cancer risk vs medroxyprogesterone acetate (MPA) but higher than micronised progesterone; used in Evorel Conti, Elleste Duet',
        'Medroxyprogesterone acetate (MPA): higher breast cancer risk data (WHI trial); avoid as first choice; still used in some combined oral HRT',
      ],
    },

    { type: 'heading', level: 2, text: 'HRT — Understanding the Risks' },

    {
      type: 'table',
      headers: ['Risk', 'Magnitude', 'Modifying Factors'],
      rows: [
        ['Breast cancer', 'Combined HRT: ~1 extra case per 1000 women over 5 years (similar to drinking 1 unit/day or being overweight); oestrogen-only (post-hysterectomy): NO increased risk or marginal reduction; local vaginal oestrogen: no increased risk', 'Risk increases with longer duration; returns to background risk within ~5 years of stopping; micronised progesterone/dydrogesterone lower risk than MPA/norethisterone'],
        ['VTE (DVT/PE)', 'Oral oestrogen: ~2–3× increased VTE risk (absolute risk still low — ~1 extra event per 1000 women/year); transdermal oestrogen: NO increased VTE risk', 'Transdermal preferred if VTE risk factors present; obese women should use transdermal'],
        ['Stroke', 'Oral oestrogen: small increased risk; transdermal: little or no increased risk', 'Migraine with aura: use transdermal; not a contraindication but oral carries higher stroke risk'],
        ['Cardiovascular / CHD', 'Women who start HRT <60 or within 10 years of menopause (the "timing hypothesis"): possible reduction in CHD; women who start >10 years post-menopause: no benefit or slight increase', 'Starting HRT early in menopause (perimenopause or early post-menopause) is cardioprotective; delaying is not'],
        ['Endometrial cancer', 'Oestrogen alone (without progestogen) in women with uterus: markedly increased risk; combined HRT: no increased or slightly reduced risk', 'Always use progestogen in women with intact uterus'],
        ['Ovarian cancer', 'Small increased risk with combined or oestrogen-only HRT; 1 extra case per 8000 women per year of use', 'Risk returns to baseline after stopping; magnitude very small'],
      ],
      caption: 'OVERALL: the risks of HRT are small in absolute terms and are outweighed by benefits (symptom relief, bone protection, possible cardiovascular benefit) in most women aged <60 or within 10 years of menopause. Individualise based on personal risk factors. Do NOT deny HRT based on age alone if under 60.',
    },

    { type: 'heading', level: 2, text: 'Non-Hormonal Alternatives for Menopausal Symptoms' },

    {
      type: 'table',
      headers: ['Symptom', 'Treatment', 'Notes'],
      rows: [
        ['Hot flushes / night sweats', 'SSRIs/SNRIs: venlafaxine 37.5–75 mg OD, paroxetine 10–20 mg OD — effective within 2 weeks', 'Avoid paroxetine in women on tamoxifen (CYP2D6 inhibition reduces tamoxifen efficacy)'],
        ['Hot flushes / night sweats', 'Clonidine 50 mcg BD (sympatholytic) — allow 4–8 weeks for effect; max benefit at 24 weeks', 'Can cause dry mouth, drowsiness, postural hypotension; not recommended if depression or low mood'],
        ['Hot flushes / night sweats', 'Gabapentin 300 mg nocte–TDS — effective but sedating; not licensed for this indication', 'Useful if flushes are nocturnal and disrupting sleep; caution with driving'],
        ['Hot flushes / night sweats', 'Fezolinetant (Veoza) — NK3 receptor antagonist; newly licensed (2024); non-hormonal; effective for vasomotor symptoms', 'Licensed specifically for menopausal vasomotor symptoms; specialist initiation initially; no hormone activity'],
        ['Low libido', 'Testosterone: off-licence use; transdermal gel/cream (Tostran, compounded preparations) at female doses — improves libido and energy; check levels 3–6 monthly; hirsutism at excess doses', 'Only after oestrogen adequately replaced; refer to specialist if needed; not licensed for women in UK but recommended by BMS guidelines'],
        ['Urogenital atrophy', 'Local vaginal oestrogen (Estriol cream, Vagifem, Blissel); vaginal moisturisers (Replens, YES WB) for dryness; pelvic floor exercises', 'Continue long-term; safe in most women; vaginal oestrogen is not systemic HRT'],
        ['Mood and sleep', 'CBT for menopause (specifically developed); mindfulness; SSRIs for mood (if mood disorder prominent)', 'Address sleep hygiene; exclude depression as separate diagnosis'],
      ],
    },

    { type: 'heading', level: 2, text: 'HRT Duration and Review' },

    {
      type: 'list',
      items: [
        'No fixed maximum duration — review annually; consider balance of benefits vs risks for each patient',
        'Menopause typically lasts 2–5 years; some women continue HRT for 10+ years especially for bone protection, quality of life, or ongoing symptoms',
        'Review at 3 months after starting (symptom control, side effects), then annually',
        'Annual BP check, breast awareness (mammography through NHS Breast Screening Programme)',
        'Stopping HRT: if stopping, taper gradually over 2–3 months to minimise rebound symptoms; abrupt stop can cause acute return of menopausal symptoms',
        'Premature ovarian insufficiency (POI, <40 years): strongly recommend HRT until at least age 51 (natural menopause age) — reduces risk of cardiovascular disease, osteoporosis, dementia; refer to specialist',
      ],
    },

  ],
}
