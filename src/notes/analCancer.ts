import type { Note } from '../data/notes'

export const analCancer: Note = {
  id: 'anal-cancer',
  title: 'Anal Cancer',
  subtitle: 'HPV-driven squamous cell carcinoma — recognition, risk factors and 2WW referral',
  tags: ['oncology', 'colorectal'],

  body: 'anal cancer squamous cell carcinoma SCC HPV human papillomavirus 16 18 anal intraepithelial neoplasia AIN HIV MSM men who have sex with men smoking immunosuppression perianal bleeding pain itch ulcer mass fistula lymphadenopathy haemorrhoids pruritis ani 2 week wait 2WW urgent referral chemoradiotherapy mitomycin fluorouracil staging',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Key facts',
      items: [
        'Rare but rising incidence — ~1,300 cases/year in UK; majority are squamous cell carcinoma (SCC) of the anal canal',
        'Strong causal link with oncogenic HPV (types 16 and 18) — analogous to cervical and vulval cancer',
        'HPV causes anal intraepithelial neoplasia (AIN) → invasive SCC via the transformation zone at the dentate line',
        'Highly treatable when caught early — chemoradiotherapy (mitomycin + fluorouracil) is the primary treatment; surgery reserved for residual/recurrent disease',
        'Do not diagnose haemorrhoids or pruritus ani without examining the perianal area — anal cancer is frequently missed or delayed',
      ],
    },

    {
      type: 'image',
      src: '/images/hpv-anal-cancer.png',
      alt: 'Diagram showing HPV infecting the anal canal epithelium, HPV genome with oncoproteins E6 and E7 inactivating tumour suppressor proteins p53 and pRb, leading to progression from normal epithelium through squamous intraepithelial lesions (AIN) to invasive squamous cell carcinoma',
      caption: 'HPV (especially types 16 and 18) infects the anal canal transformation zone. Oncoproteins E6 and E7 inactivate p53 and pRb, driving uncontrolled proliferation. Progression: normal epithelium → AIN (precancer) → invasive SCC — mirroring cervical carcinogenesis.',
          sensitive: true,
},

    { type: 'heading', level: 2, text: 'Risk Factors' },

    {
      type: 'table',
      headers: ['Risk factor', 'Notes'],
      rows: [
        ['HPV infection (types 16/18)', 'Present in ~85% of anal cancers; receptive anal intercourse is the main transmission route'],
        ['HIV/immunosuppression', 'HIV-positive MSM have 80× higher risk; immunosuppressed transplant recipients also at elevated risk; impaired viral clearance'],
        ['Men who have sex with men (MSM)', 'Strong independent risk factor; HPV vaccination recommended up to age 45 for MSM in UK (GMSH/sexual health)'],
        ['Smoking', 'Independent risk factor; impairs local immune response to HPV'],
        ['History of cervical/vulval/vaginal HSIL or cancer', 'Field effect of HPV-related neoplasia — shared risk'],
        ['Chronic anal fistula / fissure / Crohn\'s', 'Rare but recognised risk — any non-healing perianal lesion warrants examination'],
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'list',
      items: [
        'Perianal/rectal bleeding — most common symptom; easily attributed to haemorrhoids',
        'Perianal pain, discomfort or pressure — especially on defaecation',
        'Perianal itch (pruritus ani) — persistent, not explained by other cause',
        'Palpable perianal or anal mass — ulcerated or indurated lesion',
        'Change in bowel habit or sensation of incomplete evacuation',
        'Advanced features: inguinal lymphadenopathy, perianal fistula, abscess, faecal incontinence, pelvic sepsis',
        'May be asymptomatic — found on examination or imaging for other reasons',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Do not diagnose haemorrhoids or pruritus ani without examining',
      items: [
        'Anal cancer is frequently delayed because symptoms are attributed to benign conditions without examination',
        'Any perianal ulcer, indurated mass, or non-healing lesion requires proctoscopy/examination under anaesthesia',
        'A sexual history is essential — HIV status, MSM, HPV vaccination history',
        'If in any doubt: 2-week wait referral to colorectal surgery',
      ],
    },

    {
      type: 'image',
      src: '/images/Stage-IIIa-Anal-Cancer-1284x786_Sing-920x570.png',
      alt: 'Cross-sectional anatomical diagram of stage IIIa anal cancer showing a tumour at the anus no bigger than 5cm with spread to nearby lymph nodes, with rectum, sphincter muscles and anus labelled',
      caption: 'Stage IIIa anal cancer: tumour ≤5 cm with regional lymph node involvement. Staging is by TNM: T1 (≤2 cm) to T4 (adjacent organ invasion); N0–N3 (inguinal/mesorectal nodes); M0/M1. Most anal cancers present at stage I–III and are curable with chemoradiotherapy.',
          sensitive: true,
},

    { type: 'heading', level: 2, text: 'Investigation & Referral' },

    {
      type: 'list',
      items: [
        '2-week wait (suspected cancer) referral to colorectal surgery: unexplained anal mass, anal ulceration not responding to treatment, or clinical suspicion',
        'NICE NG12: consider 2WW for unexplained anal bleeding with no obvious benign cause in any age; palpable anorectal mass',
        'HIV test if not known — offer to all with anal cancer risk factors; check CD4/viral load if HIV-positive',
        'Secondary care: examination under anaesthesia (EUA) + biopsy; MRI pelvis for locoregional staging; CT chest/abdomen/pelvis for distant staging; PET-CT in selected cases',
      ],
    },

    { type: 'heading', level: 2, text: 'Management Overview' },

    {
      type: 'table',
      headers: ['Stage', 'Treatment'],
      rows: [
        ['Stage I–III (localised)', 'Radical chemoradiotherapy: mitomycin C + fluorouracil (5-FU) concurrent with radiotherapy — achieves cure in ~70–80% of stage I–II'],
        ['Stage IV (metastatic)', 'Platinum-based chemotherapy (carboplatin/paclitaxel or cisplatin/5-FU); palliative radiotherapy for symptom control'],
        ['Residual/recurrent after CRT', 'Abdominoperineal resection (APR) — permanent colostomy; reserved as salvage surgery'],
        ['AIN (precancerous)', 'Surveillance and treatment in specialist clinic; topical imiquimod or ablation for high-grade AIN (HSIL)'],
      ],
      caption: 'Unlike most cancers, anal SCC is primarily managed with chemoradiotherapy — not surgery. Surgery is avoided to preserve anal sphincter function.',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG151 — Anal Cancer', url: 'https://www.nice.org.uk/guidance/ng151' },
        { label: 'NICE NG12 — 2WW Referral', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Cancer Research UK — Anal Cancer', url: 'https://www.cancerresearchuk.org/about-cancer/anal-cancer' },
      ],
    },

  ],
}
