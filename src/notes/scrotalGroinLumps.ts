import type { Note } from '../data/notes'

export const scrotalGroinLumps: Note = {
  id: 'scrotal-groin-lumps',
  title: 'Scrotal & Groin Lumps',
  subtitle: 'Epididymal cyst, hydrocele, varicocele, inguinal/femoral hernia, groin nodes and undescended testes',
  tags: ['urology', 'surgery'],

  body: `scrotal swelling epididymal cyst hydrocele varicocele bag of worms testicular tumour transillumination ultrasound inguinal hernia femoral hernia groin lump lymph node saphena varix undescended testes cryptorchidism orchidopexy pubic tubercle`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Scrotal Pain & Swelling', url: 'https://cks.nice.org.uk/topics/scrotal-pain-swelling/' },
        { label: 'NICE CKS — Hernia (Inguinal/Femoral)', url: 'https://cks.nice.org.uk/topics/hernia/' },
        { label: 'BAUS — Scrotal Conditions', url: 'https://www.baus.org.uk/patients/conditions/' },
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Always Exclude the Emergencies First',
      items: [
        'Sudden severe testicular pain/swelling → testicular torsion — surgical emergency (see Acute Testicular Pain)',
        'A hard, craggy, or non-transilluminating intratesticular lump, or a lump you cannot get above → urgent 2WW / urology to exclude testicular cancer (do an urgent USS)',
        'A tender, irreducible, painful groin/scrotal lump with vomiting → strangulated/incarcerated hernia → same-day surgical assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Scrotal Swellings' },

    {
      type: 'table',
      headers: ['Lump', 'Features', 'Management'],
      rows: [
        ['Epididymal cyst', 'Commonest; smooth, fluctuant, transilluminates, lies POSTERIOR and separate/above the testis; associated with PCKD/VHL/CF', 'Reassure; USS to confirm; excision/sclerotherapy only if large/symptomatic'],
        ['Hydrocele', 'Fluid in the tunica vaginalis; soft, anterior, transilluminates, can\'t feel the testis separately; you CAN get above it (unlike a hernia)', 'USS to exclude an underlying tumour (especially new hydrocele in a young man); congenital (communicating) hydroceles usually resolve by ~1–2 years — repair if persistent; adult hydroceles usually conservative'],
        ['Varicocele', 'Dilated pampiniform plexus — "bag of worms", more prominent on standing/Valsalva, decompresses lying down; 80% left-sided; associated with subfertility', 'USS with Doppler; a NEW right-sided or non-decompressing varicocele → image the abdomen (renal cell carcinoma obstructing the renal vein); refer/consider embolisation or surgery if pain or abnormal semen analysis'],
      ],
    },

    { type: 'heading', level: 2, text: 'Groin Lumps' },

    {
      type: 'list',
      items: [
        'The two commonest causes are inguinal hernia and lymphadenopathy (infective or malignant)',
        'Hernia location relative to the pubic tubercle: inguinal = superomedial; femoral = inferolateral (femoral hernias are more common in women and strangulate more readily → refer any woman with a groin hernia; refer men unless minimal symptoms and repair not wanted)',
        'Examine standing and lying, for a cough impulse and reducibility; a tender/irreducible hernia → ED',
        'Vascular: saphena varix (soft, compressible, disappears on lying flat — a saphenous vein varicosity), femoral aneurysm (pulsatile — urgent)',
        'Groin lymph nodes: consider STI causes (HSV — tender with genital ulcers; syphilis — painless with a chancre; HIV; LGV — painful with proctitis), leg cellulitis, and malignancy (lymphoma, metastatic — check other nodes, FBC/blood film, 2WW if suspicious)',
      ],
    },

    { type: 'heading', level: 2, text: 'Undescended Testes (Cryptorchidism)' },

    {
      type: 'list',
      items: [
        'Usually detected at the newborn/6–8-week check; types — true undescended (along the inguinal canal path), retractile (can be brought down), ascending (previously down), ectopic (outside the canal)',
        'Examination tip: sweep from the deep inguinal ring towards the scrotum with the flat of the hand to milk a canalicular testis down',
        'Management: unilateral and impalpable at birth → review at ~3 months (many descend); if still undescended → routine urology referral; bilateral impalpable or with genital ambiguity → urgent referral (endocrine/genetic assessment)',
        'Orchidopexy is ideally performed between 6 and 18 months',
        'Long-term risks if untreated: reduced fertility and increased testicular cancer risk (which persists even after orchidopexy — teach testicular self-examination)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'acute-testicular-pain', label: 'Acute Testicular Pain', subtitle: 'Torsion vs epididymo-orchitis — the emergency' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Testicular and other cancer referral criteria' },
        { id: 'subfertility', label: 'Subfertility & Infertility', subtitle: 'Varicocele and undescended testes as male factors' },
        { id: 'stis', label: 'STIs', subtitle: 'Inguinal lymphadenopathy from genital infection' },
        { id: 'testicular-penile-cancer', label: 'Testicular & Penile Cancer', subtitle: 'Suspicious intratesticular lump — 2WW/USS' },
        { id: 'hernias', label: 'Abdominal Wall & Groin Hernias', subtitle: 'Inguinal/femoral hernia in the groin-lump differential' },
      ],
    },

  ],
}
