import type { Note } from '../data/notes'

export const testicularPenileCancer: Note = {
  id: 'testicular-penile-cancer',
  title: 'Testicular & Penile Cancer',
  subtitle: 'Testicular lump 2WW/USS, seminoma vs NSGCT, tumour markers, fertility and penile cancer',
  tags: ['cancer', 'urology'],

  body: `testicular cancer seminoma non-seminomatous germ cell tumour NSGCT teratoma beta-hCG AFP LDH ultrasound inguinal orchidectomy sperm storage surveillance BEP chemotherapy penile cancer squamous cell carcinoma HPV lichen sclerosus BXO PIN 2WW undescended testes cryptorchidism self-examination retroperitoneal lymph node`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Testicular cancer is the commonest solid malignancy in men aged 15–45 and is one of the most curable of all cancers (>95% overall survival, near 100% if localised). Penile cancer is rare but is frequently diagnosed late because of embarrassment. In both, prompt recognition and referral by the GP materially affects outcome and the extent of treatment needed.',
    },

    { type: 'heading', level: 2, text: 'Testicular Cancer' },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer & Image Any Suspicious Testis (Direct-Access USS / 2WW)',
      items: [
        'Any non-acute unexplained or persistent testicular lump/swelling, or a change in shape/texture → direct-access urgent ultrasound (NICE NG12).',
        'A hard, craggy, non-tender intratesticular mass is cancer until proven otherwise; a testis you cannot get above, or a lump that does not transilluminate, is concerning.',
        'Image and safety-net a non-resolving "epididymo-orchitis" or a NEW hydrocele in a young man — a tumour can hide behind a reactive hydrocele.',
        'Acute severe pain suggests torsion (emergency) rather than cancer — see Acute Testicular Pain.',
      ],
    },
    {
      type: 'table',
      headers: ['Type', 'Notes', 'Markers'],
      rows: [
        ['Seminoma', 'Peak age 30s–40s; more radiosensitive; slower growing', 'β-hCG may be mildly raised; AFP NOT raised (a raised AFP means it is not a pure seminoma)'],
        ['Non-seminomatous GCT (NSGCT)', 'Teratoma, yolk sac, choriocarcinoma, embryonal; younger (20s–30s); more aggressive', 'AFP and/or β-hCG often raised'],
        ['Leydig / Sertoli (stromal)', 'Rare; may secrete hormones (gynaecomastia, precocious puberty)', 'Usually marker-negative'],
      ],
    },
    {
      type: 'list',
      items: [
        'Risk factors: undescended testis (even after orchidopexy), previous testicular cancer, family history, infertility/subfertility, and intratubular germ-cell neoplasia.',
        'Tumour markers (β-hCG, AFP, LDH) are taken before orchidectomy and used to stage, assess prognosis and monitor for relapse.',
        'Pathway: ultrasound → tumour markers → staging CT (chest/abdomen/pelvis) → INGUINAL (not scrotal) orchidectomy with histology → stage-directed treatment: active surveillance, chemotherapy (e.g. BEP), radiotherapy (seminoma), ± retroperitoneal lymph-node dissection.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Fertility & Long-Term Care',
      items: [
        'Offer SPERM STORAGE (cryopreservation) BEFORE orchidectomy/chemotherapy — treatment and the disease itself impair fertility.',
        'Discuss a testicular prosthesis at the time of orchidectomy.',
        'Long-term survivorship issues: hypogonadism (check morning testosterone; may need replacement), cardiovascular and metabolic effects of chemotherapy, and a small increased risk of a contralateral or second malignancy.',
        'Teach and encourage regular testicular self-examination.',
      ],
    },

    { type: 'heading', level: 2, text: 'Penile Cancer' },
    {
      type: 'para',
      text: 'Penile cancer is usually a squamous cell carcinoma of the glans or prepuce. Risk factors include HPV infection, lichen sclerosus (balanitis xerotica obliterans), smoking, phimosis and poor hygiene, and being uncircumcised. Penile intraepithelial neoplasia (PIN) is the in-situ precursor.',
    },
    {
      type: 'list',
      items: [
        'Presents as a persistent ulcerated, warty, indurated or non-healing lesion — often painless — on the glans/prepuce; may bleed or discharge. Always examine the inguinal lymph nodes (spread route).',
        'Refer 2WW for any suspicious or unexplained penile lesion, including one that fails to resolve after a short trial of appropriate topical treatment (needs biopsy).',
        'Management: biopsy; circumcision to expose and monitor the lesion; and — depending on stage — topical therapy (5-fluorouracil or imiquimod) for PIN, laser, glans resurfacing, or partial/total penectomy ± inguinal lymph-node clearance.',
        'HPV vaccination reduces the risk of HPV-related penile (and other) cancers.',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Suspicious intratesticular mass / persistent testicular lump', 'Urology (direct-access USS then 2WW)', 'Urgent (2WW)'],
        ['Non-resolving "epididymo-orchitis" or new hydrocele (young man)', 'Urology / USS', 'Urgent — safety-net'],
        ['Suspicious or non-healing penile lesion', 'Urology (2WW)', 'Urgent (2WW)'],
        ['Acute severe testicular pain (?torsion)', 'Urology / ED', 'Same day (emergency)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Testicular/Penile)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'Orchid — Male Cancer Charity', url: 'https://orchid-cancer.org.uk/' },
        { label: 'Cancer Research UK — Testicular Cancer', url: 'https://www.cancerresearchuk.org/about-cancer/testicular-cancer' },
        { label: 'NHS — Testicular Self-Examination', url: 'https://www.nhs.uk/conditions/testicular-lumps-and-swellings/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Benign scrotal swellings and the emergencies' },
        { id: 'acute-testicular-pain', label: 'Acute Testicular Pain', subtitle: 'Torsion — the emergency to exclude first' },
        { id: 'lichen-sclerosus', label: 'Lichen Sclerosus', subtitle: 'Penile lichen sclerosus (BXO) — SCC risk' },
        { id: 'subfertility', label: 'Subfertility & Infertility', subtitle: 'Associated with testicular cancer; sperm storage' },
        { id: 'male-hypogonadism', label: 'Male Hypogonadism', subtitle: 'Post-orchidectomy testosterone deficiency' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Suspected cancer referral criteria' },
      ],
    },

  ],
}
