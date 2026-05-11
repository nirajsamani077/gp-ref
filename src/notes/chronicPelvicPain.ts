import type { Note } from '../data/notes'

export const chronicPelvicPain: Note = {
  id: 'chronic-pelvic-pain',
  title: 'Chronic Pelvic Pain',
  subtitle: 'Gynaecological and non-gynaecological causes, investigation and management',
  tags: ['gynaecology', 'pain'],

  body: 'chronic pelvic pain CPP dyspareunia endometriosis IBS bowel bladder MSK neuropathic COCP continuous Mirena IUS ovarian suppression CA125 TV USS transvaginal ultrasound pelvic floor tension myofascial pain CBT acupuncture neuropathic analgesia SSRI dysmenorrhoea cyclical pelvic pain PMB PCB red flag',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Chronic Pelvic Pain — Overview',
      items: [
        'Defined as persistent pelvic pain lasting >6 months, unrelated to menstruation, pregnancy or intercourse — though cyclical pain may also be CPP',
        '80% of CPP is NON-gynaecological: bowel (IBS, diverticular), bladder (interstitial cystitis/painful bladder syndrome), MSK, neuropathic or psychological',
        'Requires thorough multidisciplinary biopsychosocial assessment — do not jump to a gynaecological diagnosis',
        'Common causes: endometriosis, adenomyosis, IBS, interstitial cystitis, pelvic floor dysfunction, pelvic inflammatory disease (sequelae), adhesions',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags — Investigate and Refer Urgently' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags in Pelvic Pain',
      items: [
        'Postmenopausal bleeding (PMB): always refer 2WW for endometrial CA',
        'Postcoital bleeding (PCB) or intermenstrual bleeding (IMB): refer 2WW gynaecology',
        'New abdominal or pelvic mass: urgent USS and consider 2WW',
        'Unexplained weight loss, night sweats, PR bleeding: lower GI 2WW',
        'New onset or sudden change in pelvic pain — especially with fever (PID): treat and refer acutely',
        'Bloating + CA125 elevation in women >50: urgent ovarian cancer pathway',
      ],
    },

    { type: 'heading', level: 2, text: 'Initial Assessment' },

    {
      type: 'list',
      items: [
        'Thorough history: onset, character (cyclical vs constant), dysmenorrhoea, dyspareunia (deep vs superficial), bowel and bladder symptoms, relationship to cycle, sexual history',
        'Abdominal examination, bimanual pelvic examination, speculum — check pelvic floor tone on bimanual (ask patient to squeeze during examination)',
        'Swabs: endocervical and high vaginal swabs for STI (Chlamydia, Gonorrhoea, BV)',
        'Investigations: transvaginal ultrasound (USS), CA125 (especially if >50 or bloating/urinary symptoms), urine MC&S',
        'Consider STI screen if risk factors (pelvic inflammatory disease sequelae as cause of CPP)',
        'Pain diary: helps identify cyclical vs constant pattern and identify triggers',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Approach', 'Detail'],
      rows: [
        ['Biopsychosocial model', 'Listen carefully; validate the pain; keep a pain diary; address lifestyle — caffeine, alcohol, stress, sleep, exercise'],
        ['Cyclical pain / dyspareunia', 'Trial 3–6 months of ovarian suppression: continuous COCP (skipping pill-free interval) or LARC (Mirena IUS, implant, injectable)'],
        ['Non-cyclical pain management', 'Treat underlying cause: IBS → FODMAP + antispasmodics; bladder → urology referral; MSK → physiotherapy for pelvic floor dysfunction'],
        ['Neuropathic component', 'Consider low-dose amitriptyline or SSRI (especially if associated anxiety/depression)'],
        ['Psychological', 'CBT — for associated psychological distress; pain catastrophising is common and treatable'],
        ['Acupuncture', 'May help — via FCP/physio or self-referral to community service'],
        ['Myofascial pain', 'Pelvic floor physiotherapy — refer to specialist women\'s health physio if pelvic floor tension identified'],
        ['Pain clinic', 'If refractory — refer to integrated pain management service'],
      ],
    },

    { type: 'heading', level: 2, text: 'Gynaecological Referral Indications' },

    {
      type: 'list',
      items: [
        'Suspected endometriosis (cyclical pain, deep dyspareunia, infertility): refer gynaecology for MRI pelvis and diagnostic laparoscopy',
        'Suspected adenomyosis (heavy, painful periods with enlarged uterus on USS): refer gynaecology',
        'Ovarian cyst or endometrioma on USS: refer gynaecology',
        'PID not responding to treatment: refer gynaecology',
        'Failed 3–6 months of primary care treatment: refer gynaecology for further assessment',
        'Infertility: refer fertility clinic if trying to conceive and CPP suspected as contributing factor',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Gynaecology referral (CPP, suspected endometriosis): UHDB Queen\'s Hospital Burton gynaecology — via e-RS; include full history, TV USS result, STI screen, and treatments tried',
        'Alternative: Good Hope Hospital (UHB) gynaecology',
        'Pelvic floor physiotherapy: UHDB Burton women\'s health physiotherapy; GP referral required',
        'Pain clinic: UHDB Burton Pain Management (include functional assessment and medication history)',
        'Talking Therapies (CBT): MPFT — staffordshire.everyonehealth.co.uk; self-referral available; 0333 005 0095',
        'STI screening: Darwin Practice sexual health clinic or Brook/MPFT Lichfield GUM clinic',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Pelvic Pain', url: 'https://cks.nice.org.uk/topics/pelvic-pain/' },
        { label: 'RCOG — Chronic Pelvic Pain Guidelines', url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-initial-management-of-chronic-pelvic-pain-green-top-guideline-no-41/' },
        { label: 'Pelvic Pain Support Network', url: 'https://www.pelvicpain.org.uk/' },
        { label: 'Endometriosis UK', url: 'https://www.endometriosis-uk.org/' },
      ],
    },
  ],
}
