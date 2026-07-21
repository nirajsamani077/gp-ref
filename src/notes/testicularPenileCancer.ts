import type { Note } from '../data/notes'

export const testicularPenileCancer: Note = {
  id: 'testicular-penile-cancer',
  title: 'Testicular & Penile Cancer',
  subtitle: 'Testicular lump 2WW/USS, seminoma vs NSGCT, tumour markers and penile cancer',
  tags: ['cancer', 'urology'],

  body: `testicular cancer seminoma non-seminomatous germ cell tumour NSGCT beta-hCG AFP LDH ultrasound orchidectomy penile cancer HPV lichen sclerosus 2WW undescended testes self-examination`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Testicular/Penile)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Scrotal Pain & Swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
        { label: 'Orchid — Male Cancer', url: 'https://orchid-cancer.org.uk/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Testicular Cancer' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Refer & Image Any Suspicious Testis',
      items: [
        'The commonest cancer in men aged 15–45; highly curable',
        'Any unexplained or persistent testicular lump, swelling, or pain → direct-access urgent ultrasound as part of a 2WW assessment',
        'Also image and safety-net a non-resolving "epididymo-orchitis" or a new hydrocele (which may hide an underlying tumour)',
        'A hard, craggy, non-tender intratesticular mass is cancer until proven otherwise; a testis you cannot get above/that does not transilluminate is concerning',
      ],
    },

    {
      type: 'list',
      items: [
        'Types: seminoma and non-seminomatous germ cell tumours (NSGCT — teratoma, yolk sac, choriocarcinoma); risk factors include undescended testes (even after orchidopexy), previous testicular cancer, and family history',
        'Tumour markers (β-hCG, AFP, LDH) are used by specialists to guide/monitor treatment — AFP is raised in NSGCT (not pure seminoma)',
        'Pathway: ultrasound → staging CT → inguinal orchidectomy (with histology) → stage-directed treatment (active surveillance, chemotherapy ± retroperitoneal node dissection, or radiotherapy)',
        'Most survive; be alert to long-term effects — hypogonadism, subfertility (offer sperm storage before treatment), chemotherapy toxicity, and a small risk of a second cancer',
        'Encourage testicular self-examination',
      ],
    },

    { type: 'heading', level: 2, text: 'Penile Cancer' },

    {
      type: 'list',
      items: [
        'Rare; usually squamous cell carcinoma; associated with HPV, lichen sclerosus (as with vulval cancer), smoking, and phimosis/poor hygiene',
        'Presents as a persistent ulcerated, warty, or non-healing lesion (often on the glans/prepuce) — check the inguinal lymph nodes',
        'Refer 2WW for any suspicious penile lesion — including a borderline lesion that fails to resolve after a trial of topical treatment (needs biopsy)',
        'Penile intraepithelial neoplasia (PIN) is the in-situ precursor',
        'Management: biopsy; circumcision to allow monitoring; and topical (5-FU/imiquimod), laser, or surgical excision ± lymph node clearance depending on stage',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Benign scrotal swellings and the emergencies' },
        { id: 'acute-testicular-pain', label: 'Acute Testicular Pain', subtitle: 'Torsion — the emergency to exclude first' },
        { id: 'lichen-sclerosus', label: 'Lichen Sclerosus', subtitle: 'Penile lichen sclerosus (BXO) — SCC risk' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Suspected cancer referral criteria' },
      ],
    },

  ],
}
