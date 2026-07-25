import type { Note } from '../data/notes'

export const prostatitis: Note = {
  id: 'prostatitis',
  title: 'Prostatitis',
  subtitle: 'Acute bacterial prostatitis, quinolone prescribing, complications and chronic prostatitis/CPPS',
  tags: ['urology'],

  body: `prostatitis acute bacterial chronic prostatitis chronic pelvic pain syndrome CPPS ciprofloxacin ofloxacin trimethoprim quinolone tendon rupture seizure threshold tender prostate DRE retention pyelonephritis epididymitis prostatic abscess sepsis tamsulosin LUTS fever`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Prostatitis (Acute)', url: 'https://cks.nice.org.uk/topics/prostatitis-acute/' },
        { label: 'NICE CKS — Prostatitis (Chronic)', url: 'https://cks.nice.org.uk/topics/prostatitis-chronic/' },
        { label: 'BAUS — Prostatitis', url: 'https://www.baus.org.uk/patients/conditions/' },
      ],
    },

    {
      type: 'para',
      text: 'Prostatitis spans two very different entities: acute bacterial prostatitis — a serious infection with a high complication rate needing a prostate-penetrating antibiotic (and a low threshold to admit) — and the far more common chronic prostatitis / chronic pelvic pain syndrome, which is usually non-bacterial and managed as a chronic-pain problem. A recurring pitfall is PSA: it is often raised in acute prostatitis and should not be used to diagnose it.',
    },
    { type: 'heading', level: 2, text: 'Acute Bacterial Prostatitis' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'A Serious Infection — High Complication Rate',
      items: [
        'Presentation: acute onset fever/rigors, perineal/lower abdominal/penile pain, LUTS (frequency, dysuria, retention), and a tender, boggy prostate on DRE',
        'High rate of serious complications: acute urinary retention, pyelonephritis, epididymo-orchitis, prostatic abscess, and sepsis',
        'Admit if systemically unwell/septic, in retention, immunocompromised, or unable to take oral antibiotics or if not improving',
        '~10% progress to chronic bacterial prostatitis',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Urine dipstick and MSU (mid-stream urine) for culture before antibiotics',
        'DRE to assess the prostate (gentle — avoid vigorous massage in acute infection); assess for retention (palpable bladder)',
        'Consider STI screen (NAAT for chlamydia/gonorrhoea) in younger men, as urethritis/epididymo-orchitis overlaps',
        'Bloods (FBC, CRP, U&E) and blood cultures if systemically unwell',
        'Do NOT use PSA to diagnose prostatitis (PSA is often raised in acute prostatitis and is unreliable here — defer PSA until well after recovery if needed)',
      ],
    },

    { type: 'heading', level: 2, text: 'Antibiotic Treatment' },

    {
      type: 'table',
      headers: ['Line', 'Regimen', 'Notes'],
      rows: [
        ['First-line', 'Ciprofloxacin 500 mg BD (or ofloxacin) for 14 days', 'Quinolones penetrate prostatic tissue well; review at 14 days as a longer total course (~4 weeks) is often needed'],
        ['Alternative', 'Trimethoprim 200 mg BD for 14 days', 'If quinolone unsuitable; levofloxacin or co-trimoxazole are other options'],
        ['Adjuncts', 'Analgesia (paracetamol ± NSAID), alpha-blocker (tamsulosin) for LUTS/voiding difficulty', 'See cautions below'],
      ],
      caption: 'Review at 48 hours — admit if not improving. Symptoms of acute prostatitis can persist for several weeks even with appropriate treatment.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Quinolone Prescribing Cautions (MHRA)',
      items: [
        'Fluoroquinolones carry an MHRA warning for tendon rupture/tendinitis and (rarely) aortic aneurysm and disabling neuropsychiatric/musculoskeletal effects — counsel the patient and stop if tendon pain develops',
        'NSAIDs combined with quinolones can lower the seizure threshold — consider this in patients at risk',
        'Avoid quinolones in pregnancy and with caution in the elderly',
      ],
    },

    { type: 'heading', level: 2, text: 'Chronic Prostatitis / Chronic Pelvic Pain Syndrome (CPPS)' },

    {
      type: 'list',
      items: [
        'Persistent (≥3 months) pelvic/perineal pain ± LUTS ± sexual dysfunction; most cases are non-bacterial (CPPS) rather than chronic bacterial prostatitis',
        'Chronic bacterial prostatitis: recurrent UTIs with the same organism; needs prolonged antibiotics (e.g. 4–6 weeks of a quinolone)',
        'CPPS management is multimodal: alpha-blocker (tamsulosin) for LUTS, analgesia, and addressing the chronic-pain/biopsychosocial component; refer to urology/pain clinic if refractory',
        'Exclude other causes of chronic pelvic pain and rule out red flags (haematuria, weight loss)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'bph-luts', label: 'BPH & LUTS', subtitle: 'Overlapping lower urinary tract symptoms and alpha-blocker use' },
        { id: 'uti-men', label: 'UTI in Men', subtitle: 'Always complicated; overlapping presentation and investigation' },
        { id: 'stis', label: 'STIs', subtitle: 'Epididymo-orchitis/urethritis differential in younger men' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'CPPS — biopsychosocial chronic pain management' },
      ],
    },

  ],
}
