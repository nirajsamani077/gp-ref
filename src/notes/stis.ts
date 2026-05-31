import type { Note } from '../data/notes'

export const stis: Note = {
  id: 'stis',
  title: 'Sexually Transmitted Infections (STIs)',
  subtitle: 'Syphilis, genital herpes, PID, chlamydia, gonorrhoea, epididymo-orchitis and contact tracing',
  tags: ['gum', 'sexual-health'],

  body: 'syphilis treponema chancre secondary rash tertiary tabes dorsalis syphilis serology genital herpes HSV aciclovir valaciclovir suppressive pelvic inflammatory disease PID chlamydia gonorrhoea trichomonas mycoplasma genitalium ceftriaxone doxycycline azithromycin metronidazole epididymo-orchitis contact tracing partner notification GUM sexual health STI screen HIV seroconversion NAAT NPSCC',

  content: [

    { type: 'heading', level: 2, text: 'STI Screen — When and What to Test' },

    {
      type: 'list',
      items: [
        'Offer STI screen to: any new sexual partner, multiple partners, unprotected intercourse (especially with unknown status), symptomatic patients (urethral/vaginal discharge, genital ulcers, pelvic pain, urethritis), positive HIV test, pregnant women (booking bloods — syphilis, Hep B, HIV, rubella)',
        'Standard screen: first-catch urine (men) or self-taken vulvovaginal swab (NAAT) for chlamydia and gonorrhoea; Hep B surface antigen; HIV Ag/Ab test (4th generation — detects p24 antigen from day 4 post-exposure); syphilis serology (EIA/TPHA); offer Hep C if risk factors',
        'Point of care testing (POCT): available in GUM clinics and many GP practices — HIV, syphilis, gonorrhoea/chlamydia rapid tests; results within 20–60 minutes',
        'Umbrella / sexual health online services (e.g. Umbrella Health Birmingham): patients self-request kits online; postal STI testing available nationally; reduces barrier to testing',
        'Refer all new STI diagnoses to GUM clinic: contact tracing, comprehensive screen, specialist treatment protocols, partner notification',
      ],
    },

    { type: 'heading', level: 2, text: 'Syphilis' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Syphilis — Rising Incidence; Great Mimicker',
      items: [
        'Caused by Treponema pallidum (spirochaete); transmitted by direct sexual contact or vertically; rising incidence in UK especially in MSM',
        'Primary syphilis (9–90 days post-contact): painless, indurated, clean-based genital ulcer (chancre) at site of inoculation; usually heals spontaneously in 3–6 weeks — often missed',
        'Secondary syphilis (6 weeks–6 months after primary): maculopapular rash on palms AND soles (pathognomonic), flu-like illness, generalised lymphadenopathy, hepatosplenomegaly, oral ulcers ("snail track"), condylomata lata (flat wart-like lesions), alopecia (patchy moth-eaten); highly infectious',
        'Latent syphilis: early latent (<2 years from infection) — may relapse; late latent (>2 years) — usually non-infectious',
        'Tertiary syphilis (years later): cardiovascular (aortic regurgitation, aortic aneurysm — especially ascending aorta); neurosyphilis (tabes dorsalis — posterior column degeneration; general paresis of the insane; Argyll Robertson pupils — accommodate but don\'t react to light); gumma (granulomatous nodules in skin, bone, liver)',
        'Diagnosis: syphilis serology — EIA screen (sensitive); confirm with TPHA/VDRL; if strong suspicion but negative serology within 90 days of exposure → repeat serology after 90 days; refer to GUM for testing and treatment',
        'Treatment: procaine penicillin IM (primary/secondary); benzathine penicillin IM; doxycycline if penicillin allergy — ALL via GUM; Jarisch-Herxheimer reaction within 24 hours of first treatment dose (fever, rash, rigidity — self-limiting)',
      ],
    },

    { type: 'heading', level: 2, text: 'Genital Herpes (HSV)' },

    {
      type: 'list',
      items: [
        'Caused by HSV-2 (predominantly genital) or HSV-1 (increasingly genital via oral sex); lies dormant in sacral sensory ganglia; reactivates; always painful (unlike syphilis chancre)',
        'Primary episode: painful vesicles/ulcers on genitals/perianal area, constitutional symptoms (fever, myalgia), dysuria (stings when urine contacts lesion — lidocaine gel 5% before voiding); urinary retention in severe cases; inguinal lymphadenopathy; can cause aseptic meningitis',
        'Recurrences: usually milder and shorter than primary; prodrome (tingling/itching) before lesions; common trigger: stress, illness, menstruation; frequency decreases over time',
        'Diagnosis: viral NAAT swab from base of ulcer (HSV DNA PCR) — most sensitive; blood tests for HSV-specific antibodies not routinely available in primary care; clinical diagnosis acceptable if typical presentation',
        'Treatment (primary): aciclovir 400 mg TDS for 5 days (or 200 mg 5×/day); start within 5 days of episode onset; valaciclovir 500 mg BD × 5 days (equivalent but better bioavailability); supportive: saline baths, topical lidocaine gel, analgesia',
        'Recurrent episodic treatment: aciclovir 800 mg TDS × 2 days started at prodrome (short-course high-dose); or valaciclovir 500 mg BD × 3 days',
        'Suppressive therapy: if ≥6 episodes/year, or HSV-discordant relationship — aciclovir 400 mg BD continuously; reduces viral shedding and transmission by ~50%; review annually; stop for 1 year then restart if >2 recurrences',
        'Pregnancy: primary HSV in third trimester (<6 weeks before delivery) = highest neonatal risk; elective Caesarean section; aciclovir suppression from 36 weeks if recurrent HSV; refer obstetrics; discuss with GUM',
        'Partner counselling: asymptomatic viral shedding is common; condoms reduce but do not eliminate transmission; partners should be examined; Herpes Virus Association (herpes.org.uk) — excellent patient information',
        'Cold sores (herpes labialis): usually HSV-1; self-limiting 1–2 weeks; topical aciclovir 5% or oral aciclovir if severe; avoid touching and then touching genitals or eyes; eczema herpeticum = emergency (widespread HSV in eczematous skin)',
      ],
    },

    { type: 'heading', level: 2, text: 'Pelvic Inflammatory Disease (PID)' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'PID — Do Not Delay Treatment; Treat Empirically',
      items: [
        'Ascending infection of uterus, fallopian tubes, and ovaries; caused by STIs (chlamydia, gonorrhoea, Mycoplasma genitalium — rising cause; also anaerobes, Gardnerella)',
        'Symptoms: bilateral pelvic/lower abdominal pain, abnormal vaginal discharge, dyspareunia (deep), abnormal bleeding (IMB/PCB), fever, systemic upset',
        'Examination: cervical excitation (motion tenderness on bimanual — highly specific for PID), bilateral adnexal tenderness, cervical/uterine tenderness; purulent cervical discharge',
        'Always exclude: pregnancy (urine or serum hCG — risk of ectopic); UTI (MSU); appendicitis (right-sided pain, Rovsing\'s sign)',
        'Investigations: ECS/HVS swabs (speculum); NAAT for chlamydia and gonorrhoea (first-catch urine or vulvovaginal swab); FBC, CRP; USS if complex (tubo-ovarian abscess, TO abscess)',
        'DO NOT wait for swab results before starting antibiotics — treat empirically; delay = increased risk of long-term complications (chronic pelvic pain, infertility, ectopic pregnancy)',
        'Admission: if systemically unwell (fever, vomiting, tachycardia), severe pain, TO abscess on USS, unable to tolerate oral antibiotics, pregnant, no improvement after 72 hours',
      ],
    },

    {
      type: 'table',
      headers: ['Treatment Regimen', 'Details'],
      rows: [
        ['IM ceftriaxone 1 g STAT + doxycycline 100 mg BD + metronidazole 400 mg BD for 14 days', 'First-line BASHH recommendation — broad spectrum covering gonorrhoea (cef), chlamydia (doxy), anaerobes (metro); IM cef given in clinic or ED; continue doxy + metro orally for 14 days'],
        ['Alternative: ofloxacin 400 mg BD + metronidazole 400 mg BD for 14 days', 'If IM cef not feasible; covers chlamydia and anaerobes; NOT for confirmed/suspected gonorrhoea (rising quinolone resistance)'],
        ['Moxifloxacin 400 mg BD for 14 days', 'Best coverage for Mycoplasma genitalium-associated PID; however tendon rupture and hepatotoxicity risk; quinolone-based'],
        ['IUD in situ', 'Generally leave in place unless no improvement after 72h; removal increases pregnancy risk if no effective contraception; balance this against individual clinical response'],
      ],
      caption: 'Review at 72 hours — swabs should be back; if no improvement → consider admission; refer all to GUM for contact tracing (partner notification for 6-month sexual contacts).',
    },

    { type: 'heading', level: 2, text: 'Chlamydia and Gonorrhoea' },

    {
      type: 'list',
      items: [
        'Chlamydia trachomatis: most common STI in UK; often asymptomatic (70% women, 50% men); diagnose by NAAT (first-catch urine men; vulvovaginal swab women); treat with doxycycline 100 mg BD × 7 days (preferred, more effective) or azithromycin 1 g STAT (less effective, used only if adherence concern); test of cure only if pregnant (4 weeks post-treatment) or symptoms persist; annual testing if sexually active <25 years',
        'Gonorrhoea (Neisseria gonorrhoeae): discharge (urethral — men; endocervical — women), dysuria, PID, epididymo-orchitis; NAAT first (diagnose), then culture essential (for antibiotic sensitivities — rising resistance); treatment via GUM with IM ceftriaxone 1 g STAT (or 500 mg if ≤150 kg); NEVER treat gonorrhoea empirically with oral antibiotics without culture sensitivities; refer ALL suspected gonorrhoea to GUM; test of cure at 2–3 weeks post-treatment',
        'Mycoplasma genitalium: emerging STI cause; diagnose by NAAT; treat with moxifloxacin (2nd line after doxycycline failure — doxy often ineffective); rising macrolide resistance makes azithromycin less reliable; causes PID, urethritis, cervicitis',
        'Trichomonas vaginalis (TV): protozoal STI; flaggy yellow/green frothy vaginal discharge, fishy odour, vulvitis; "strawberry cervix"; diagnose by NAAT or wet mount (motile trichomonads); treat with metronidazole 2 g STAT or 400 mg BD × 5–7 days; both partners treat simultaneously',
      ],
    },

    { type: 'heading', level: 2, text: 'Epididymo-Orchitis' },

    {
      type: 'list',
      items: [
        'Inflammation of epididymis ± testis; most common cause in <35 years: STIs (chlamydia, gonorrhoea); >35 years: enteric organisms (E. coli, coliforms — associated with urinary tract pathology, BPH, instrumentation)',
        'Symptoms: unilateral scrotal pain and swelling, heaviness, may have urethral discharge, dysuria; gradual onset (unlike torsion — sudden severe onset)',
        'Examination: tender, swollen epididymis/testis; Prehn\'s sign (elevation relieves pain in epididymo-orchitis, doesn\'t in torsion — unreliable); cremasteric reflex usually preserved (absent in torsion)',
        'Always exclude testicular torsion — if any doubt: URGENT USS or surgical exploration; do not delay',
        'Investigations: NAAT for chlamydia/gonorrhoea (first-catch urine); MSU (MC&S); FBC, CRP',
        'Treatment (STI-likely, <35y): ceftriaxone 500 mg IM STAT + doxycycline 100 mg BD × 14 days; refer to GUM for contact tracing',
        'Treatment (enteric organism likely, >35y): ofloxacin 200 mg BD × 14 days (penetrates well into genital tract); or ciprofloxacin 500 mg BD × 14 days',
        'Supportive: scrotal support, NSAIDs, analgesia; follow up at 72 hours; if abscess, admission',
      ],
    },

    { type: 'heading', level: 2, text: 'Contact Tracing and Partner Notification' },

    {
      type: 'list',
      items: [
        'All STI diagnoses: advise patient to inform sexual contacts; GUM will facilitate formal partner notification',
        'Time window for contact tracing: chlamydia/gonorrhoea — last 6 months (or last partner if no partner in 6 months); syphilis — 3 months (primary), 6 months (secondary), 1 year (early latent)',
        'Patient referral: patient informs contacts themselves; provider referral: GUM or BHIVA contact tracers contact partners directly (with patient consent)',
        'Abstain from sex until: treatment completed AND partner(s) treated AND test of cure (for gonorrhoea and mycoplasma)',
        'Condom advice: condoms significantly reduce STI transmission but do not fully protect against skin-to-skin transmission (syphilis, herpes, HPV) — advise proper use',
        'PrEP (pre-exposure prophylaxis) for HIV: tenofovir/emtricitabine daily or event-based for MSM and others at high risk — now available on NHS via sexual health services; highly effective (>99% if taken correctly)',
      ],
    },

  ],
}
