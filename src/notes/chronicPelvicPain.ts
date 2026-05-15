import type { Note } from '../data/notes'

export const chronicPelvicPain: Note = {
  id: 'chronic-pelvic-pain',
  title: 'Chronic Pelvic Pain',
  subtitle: 'Differential diagnosis, structured assessment, biopsychosocial management and referral',
  tags: ['gynaecology', 'pain'],

  body: 'chronic pelvic pain CPP dyspareunia endometriosis adenomyosis IBS bowel bladder interstitial cystitis painful bladder syndrome pelvic floor myofascial MSK neuropathic COCP continuous Mirena IUS ovarian suppression CA125 TV USS transvaginal ultrasound pelvic floor physiotherapy CBT acupuncture neuropathic analgesia SSRI amitriptyline dysmenorrhoea cyclical pelvic pain PMB PCB red flag bladder diary IPSS fibromyalgia vulvodynia vestibulodynia',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Chronic Pelvic Pain — Overview',
      items: [
        'Defined as intermittent or constant pelvic pain lasting >6 months, occurring below the umbilicus, sufficiently severe to cause functional disability or require medical care',
        'Critically: 80% of CPP is NOT primarily gynaecological — bowel (IBS, diverticular), bladder (interstitial cystitis/PBS), MSK (pelvic floor tension, myofascial), neuropathic, or psychological',
        'Even when an organic cause exists (endometriosis, adenomyosis), pain is often perpetuated by central sensitisation — the same mechanism as fibromyalgia; this is why surgery alone often fails',
        'The biopsychosocial model is essential: explore what the pain means to the patient, its impact on relationships, work, and identity — not just where it hurts',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Investigate Urgently Before Assuming CPP' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — These Are Not "Chronic Pelvic Pain" Until These Are Excluded',
      items: [
        'Postmenopausal bleeding (PMB): 2WW endometrial cancer referral',
        'Postcoital bleeding (PCB) not explained by ectropion or STI: 2WW cervical cancer referral',
        'Intermenstrual bleeding (IMB) in women >45 not responding to treatment: 2WW gynaecology',
        'New abdominal/pelvic mass: urgent USS and gynaecology review',
        'Bloating + raised CA125 in woman >50: urgent ovarian cancer pathway',
        'Acute onset severe pelvic pain (out of pattern): exclude ectopic pregnancy, ovarian torsion, acute PID, appendicitis — same-day assessment',
        'Constitutional symptoms: unexplained weight loss, night sweats, fever — exclude malignancy',
      ],
    },

    { type: 'heading', level: 2, text: 'Differential Diagnosis — The Full Breadth' },

    {
      type: 'table',
      headers: ['System', 'Conditions to Consider', 'Distinguishing Features'],
      rows: [
        ['Gynaecological', 'Endometriosis, adenomyosis, ovarian cysts/endometrioma, uterine fibroids, PID sequelae, pelvic adhesions, ovarian remnant syndrome', 'Cyclical pain worsening premenstrually; deep dyspareunia; infertility; dysmenorrhoea; uterine tenderness/enlargement; abnormal pelvic USS'],
        ['Gastrointestinal', 'IBS (most common non-gyn cause), diverticular disease, IBD, constipation, adhesions post-surgery', 'Pain linked to defecation, bloating, stool consistency changes; IBS-D or IBS-C pattern; Rome IV criteria'],
        ['Urological', 'Interstitial cystitis / painful bladder syndrome (IC/PBS), recurrent UTI, ureteric calculi', 'Bladder-filling pain; urgency; frequency; suprapubic pain relieved by voiding; dyspareunia (anterior); bladder diary helps; negative MSU'],
        ['Musculoskeletal', 'Pelvic floor dysfunction / tension myalgia, hip disease, SI joint pain, coccydynia, anterior cutaneous nerve entrapment', 'Pain related to posture, sitting, sex; pelvic floor hypertonia on bimanual (involuntary contraction); pain reproduced by palpating levator ani'],
        ['Neuropathic', 'Pudendal neuralgia, vulvodynia, vestibulodynia, post-herpetic neuralgia, nerve entrapment (ilioinguinal, iliohypogastric)', 'Burning, shooting, allodynia (pain from light touch); vulvodynia diagnosed by Q-tip test (cotton bud on vestibule provokes pain); no visible pathology'],
        ['Psychological', 'Somatisation, depression, anxiety, PTSD (history of trauma), abuse sequelae', 'Pain mediated by psychosocial distress; does not respond to physical treatment alone; history of childhood or sexual trauma; PHQ-9 + ACE enquiry'],
      ],
    },

    { type: 'heading', level: 2, text: 'Structured Assessment — What GP Should Do' },

    {
      type: 'list',
      items: [
        'History: onset, character (cyclical vs constant), dysmenorrhoea (severity 0–10), deep vs superficial dyspareunia, relationship to bladder/bowel, impact on life, sexual history, obstetric/gynaecological history, surgical history (adhesions risk)',
        'Screen for IBS: bloating, stool changes, pain relieved or worsened by defecation (Rome IV criteria) — IBS is very common in CPP',
        'Screen for bladder: frequency, urgency, dysuria, bladder-filling pain, nocturia — consider bladder diary and IPSS questionnaire',
        'Screen for psychological factors: PHQ-9 for depression, GAD-7 for anxiety; gently enquire about trauma history (childhood sexual abuse, assault) — these significantly affect CPP outcomes',
        'Examination: abdominal palpation (mass, tenderness, hernias); bimanual pelvic (uterine size, mobility, cervical excitation for PID, adnexal mass, pelvic floor tone); speculum (cervicitis, ectropion, discharge, PCB)',
        'Endocervical swabs: chlamydia/gonorrhoea NAAT + HVS (PID sequelae can cause chronic pelvic pain)',
        'Urine: MSU for culture; dipstick for blood (renal stone) and leukocytes (UTI vs IC)',
        'Pain diary (1–2 months): documents relationship between pain and cycle, bladder/bowel, activity, stress — clarifies pattern and guides management',
      ],
    },

    { type: 'heading', level: 2, text: 'Management in Primary Care — Biopsychosocial Approach' },

    {
      type: 'table',
      headers: ['Approach', 'Detail'],
      rows: [
        ['Validate and explain', '"Your pain is real. Even without a visible cause, central sensitisation is a real process. We can treat it." — destigmatising explanation reduces anxiety and increases treatment engagement'],
        ['Cyclical pain / suspected endometriosis', 'Trial of ovarian suppression: continuous COCP (skip pill-free interval) for 3–6 months OR Mirena IUS; if not suitable or failing → refer gynaecology'],
        ['IBS component', 'FODMAP diet (refer to dietician); antispasmodics (mebeverine 135 mg TDS or hyoscine 10 mg TDS); peppermint oil capsules; treat constipation (lactulose, ispaghula); treat diarrhoea (loperamide PRN)'],
        ['Bladder / IC/PBS', 'Bladder training, pelvic floor relaxation, avoid caffeine and alcohol; amitriptyline 25–75 mg nocte (has evidence in IC); refer urology/urogynaecology if persistent'],
        ['Pelvic floor tension', 'Refer to women\'s health physiotherapist for pelvic floor relaxation; transcutaneous electrical nerve stimulation (TENS); botulinum toxin by specialist if refractory'],
        ['Neuropathic pain', 'Amitriptyline 10–75 mg nocte (start 10 mg, titrate slowly); or duloxetine 30–60 mg OD; pregabalin/gabapentin (NICE NG193 advises caution — limited evidence, dependence risk)'],
        ['Psychological', 'CBT (evidence-based for CPP); ACT (Acceptance and Commitment Therapy); pain catastrophising assessment; trauma-informed care; Talking Therapies referral (self-refer or GP)'],
        ['Acupuncture', 'May help — available via community physiotherapy, FCP, or self-referral; NICE recommends discussing all treatment options'],
      ],
    },

    { type: 'heading', level: 2, text: 'Vulvodynia and Vestibulodynia' },

    {
      type: 'list',
      items: [
        'Vulvodynia: chronic vulvar discomfort without identifiable cause — burning, stinging, rawness; often severe impact on sexual function and relationships',
        'Vestibulodynia: a subset — pain specifically at the vestibule (vaginal opening); provoked by touch (sex, tampon, examination); Q-tip test positive',
        'Assess for: recurrent thrush (rule out — treat if present, but thrush alone rarely explains vulvodynia), lichen sclerosus (pale patches, fissuring — refer dermatology), lichen planus, contact dermatitis',
        'Management: amitriptyline 10–25 mg OD; topical lidocaine 5% gel or ointment before intercourse for provoked vestibulodynia; pelvic floor physiotherapy (hypertonicity); psychological therapy; refer to specialist vulval clinic if uncertain',
        'Avoid: topical steroids alone (unless lichen sclerosus), antifungal creams unless proven infection, soap products on vulva',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Monitoring and When to Refer',
      items: [
        'If primary care treatment fails after 3–6 months: refer gynaecology for diagnostic laparoscopy (to confirm/exclude endometriosis) + specialist MDT assessment',
        'Suspected endometriosis: cyclical pain + deep dyspareunia + infertility + abnormal USS (endometrioma) → refer gynaecology (do NOT wait for failed treatment if strongly suspected)',
        'Suspected adenomyosis (heavy painful periods, enlarged boggy uterus on USS): refer gynaecology for MRI pelvis + management options (Mirena, endometrial ablation, hysterectomy)',
        'Refractory CPP with significant psychological comorbidity: refer integrated pain management service AND psychological services simultaneously',
        'If bloating + CA125 >35 + pelvic mass: urgent ovarian cancer referral; do not attribute symptoms to CPP without investigating',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'RCOG GTG 41 — Chronic Pelvic Pain', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-initial-management-of-chronic-pelvic-pain-green-top-guideline-no-41/' },
        { label: 'NICE NG193 — Chronic Primary Pain', url: 'https://www.nice.org.uk/guidance/ng193' },
        { label: 'Pelvic Pain Support Network UK', url: 'https://www.pelvicpain.org.uk/' },
        { label: 'Endometriosis UK', url: 'https://www.endometriosis-uk.org/' },
        { label: 'Bladder Health UK — IC/PBS', url: 'https://www.bladderhealthuk.org/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Gynaecology referral (CPP, suspected endometriosis, adenomyosis): UHDB Queen\'s Hospital Burton gynaecology — via e-RS; include full history, TV USS result, STI screen, treatments tried and duration',
        'Alternative: Good Hope Hospital (UHB) gynaecology',
        'Pelvic floor physiotherapy (women\'s health): UHDB Burton women\'s health physiotherapy — GP referral required; include pelvic floor hypertonia / dyspareunia on referral',
        'Pain clinic: UHDB Burton Pain Management Service — via e-RS; include functional assessment and medication history',
        'Talking Therapies (CBT/ACT): MPFT Staffordshire — staffordshire.everyonehealth.co.uk; self-referral or GP referral; 0333 005 0095',
        'Urology (IC/PBS): UHDB Burton urology — if bladder symptoms predominate after primary care management',
        'Vulval clinic: Good Hope Hospital (UHB) or QEHB Birmingham if vulvodynia/lichen sclerosus referral needed',
      ],
    },
  ],
}
