import type { Note } from '../data/notes'

export const cervicalCancer: Note = {
  id: 'cervical-cancer',
  title: 'Cervical Cancer & Smear Screening',
  subtitle: 'HPV-based screening, colposcopy referral criteria, symptoms and HPV vaccination',
  tags: ['gynaecology', 'oncology', 'screening'],

  body: 'cervical cancer cervical smear screening HPV human papillomavirus colposcopy CIN cervical intraepithelial neoplasia LLETZ LEEP smear 25 49 50 64 borderline dyskaryosis high grade low grade inadequate PCB postcoital bleeding IMB intermenstrual bleeding discharge HPV positive cytology abnormal normal oncogenic subtype 16 18 trans men cervix vaccination Gardasil',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Cervical Cancer — Primary Care Key Points',
      items: [
        'HPV causes almost all cervical cancers; subtypes 16 and 18 are oncogenic (responsible for ~99% of cases)',
        'Symptomatic disease (PCB, IMB, abnormal discharge, pelvic pain): refer via 2WW regardless of smear history — a recent negative HPV smear makes cervical cancer very unlikely but does NOT exclude it',
        'For symptomatic patients: perform speculum to visualise the cervix AND take STI swabs — do NOT take a smear for diagnosis in symptomatic patients',
        'Screening smears are for ASYMPTOMATIC women only',
      ],
    },

    { type: 'heading', level: 2, text: 'NHS Cervical Screening Programme' },

    {
      type: 'table',
      headers: ['Age Group', 'Screening Interval'],
      rows: [
        ['25–49 years', 'Every 3 years (HPV primary testing)'],
        ['50–64 years', 'Every 5 years'],
        ['65+ years', 'Only if recent abnormal smear — not recalled routinely'],
      ],
      caption: 'England uses HPV primary testing: the sample is tested for high-risk HPV first; cytology is only performed if HPV positive. A negative HPV test is very reassuring — return to routine recall.',
    },

    { type: 'heading', level: 2, text: 'Interpreting Smear Results' },

    {
      type: 'table',
      headers: ['HPV Result', 'Cytology', 'Action'],
      rows: [
        ['HPV negative', 'Any', 'Return to routine recall (3 or 5 yearly). Exceptions: post-treatment test-of-cure, untreated CIN follow-up, post-cancer surveillance — continue as per protocol'],
        ['HPV positive', 'Abnormal (borderline, low/high-grade dyskaryosis, invasive SCC, glandular neoplasia)', 'REFER to colposcopy'],
        ['HPV positive', 'Normal cytology', 'Repeat smear in 12 months. If STILL HPV positive at 12 months: repeat at 24 months. If positive at 24 months: refer colposcopy. If negative at any repeat: return to routine recall'],
        ['Inadequate sample', 'N/A', 'Repeat smear within 3 months. If inadequate again: refer for colposcopy'],
      ],
    },

    { type: 'heading', level: 2, text: 'Cervical Cancer — Symptoms Requiring 2WW Referral' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Refer 2WW (Urgent Suspected Cancer)',
      items: [
        'Postcoital bleeding (PCB) — especially if persistent or recurrent',
        'Intermenstrual bleeding (IMB) — unexplained; especially in older women',
        'Postmenopausal bleeding (PMB) — always investigate',
        'Persistent unexplained vaginal discharge — especially blood-stained',
        'Pelvic pain — unexplained, persistent',
        'Visible cervical lesion or mass on speculum — regardless of smear history',
        'Note: a recent normal HPV smear makes cervical cancer very unlikely but does NOT negate referral if symptomatic',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment Overview' },

    {
      type: 'list',
      items: [
        'CIN (pre-cancer): treated at colposcopy — LLETZ (large loop excision of the transformation zone) or laser; followed by test-of-cure smear 6 months post-treatment',
        'Early-stage cervical cancer (IA–IB): radical hysterectomy (Wertheim\'s) + pelvic lymph node clearance; younger women may be offered radical trachelectomy (fertility-preserving)',
        'Locally advanced cervical cancer: chemoradiotherapy (cisplatin-based)',
        'Palliative: chemotherapy ± targeted therapy (bevacizumab); MDT decision',
        'High psychological and psychosocial impact — significant effects on sexuality and fertility; involve CNS and oncology MDT',
      ],
    },

    { type: 'heading', level: 2, text: 'HPV — Screening Considerations' },

    {
      type: 'list',
      items: [
        'HPV is spread by any close genital or skin-to-skin sexual contact — condoms provide limited protection',
        'Most people will be exposed to HPV; the immune system usually clears it within 2 years',
        'No prescribed treatment for HPV infection — reassure patients',
        'Trans men with a cervix should be offered cervical screening — may be registered as male and not auto-recalled; liaise with national screening team',
        'Women who have never been sexually active: very low risk; offer to discuss whether they wish to participate in screening',
        'HPV vaccination (Gardasil 9): given to girls AND boys aged 12–13 in school Year 8; protects against HPV subtypes 6, 11, 16, 18, 31, 33, 45, 52, 58',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        '2WW gynaecological cancer referral: UHDB Queen\'s Hospital Burton gynaecology oncology — via e-RS 2WW pathway',
        'Colposcopy: UHDB Queen\'s Hospital Burton colposcopy clinic — referral triggered by cervical screening programme or GP',
        'Alternative: Good Hope Hospital (UHB) gynaecology oncology for 2WW',
        'Cervical screening administration queries: Staffordshire NHSCSP call and recall service — contact via practice smear administrator',
        'HPV vaccination (catch-up): refer to Staffordshire County Council school immunisation team or local pharmacy vaccination service',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NHS Cervical Screening Programme', url: 'https://www.gov.uk/guidance/cervical-screening-programme-overview' },
        { label: 'NICE NG12 — Suspected Cancer 2WW', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Cervical Cancer & HPV', url: 'https://cks.nice.org.uk/topics/cervical-cancer-and-hpv/' },
        { label: 'Jo\'s Cervical Cancer Trust', url: 'https://www.jostrust.org.uk/' },
        { label: 'NHS — Cervical Cancer', url: 'https://www.nhs.uk/conditions/cervical-cancer/' },
      ],
    },
  ],
}
