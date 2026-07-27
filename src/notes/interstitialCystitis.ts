import type { Note } from '../data/notes'

export const interstitialCystitis: Note = {
  id: 'interstitial-cystitis',
  title: 'Interstitial Cystitis / Bladder Pain Syndrome',
  subtitle: 'Chronic bladder pain with a sterile urine — diagnosis of exclusion, conservative measures and referral',
  tags: ['urology'],

  body: `interstitial cystitis bladder pain syndrome BPS chronic pelvic pain suprapubic pain frequency urgency nocturia sterile pyuria negative culture Hunner lesion bladder diary amitriptyline bladder instillation cystoscopy hydrodistension`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Bladder pain syndrome (interstitial cystitis) is chronic pelvic/bladder pain perceived to relate to the bladder, with urinary frequency/urgency, in the ABSENCE of infection or other identifiable pathology. It predominantly affects women, is under-recognised, and is often mislabelled and repeatedly (ineffectively) treated as recurrent UTI. It is a clinical diagnosis of exclusion and is managed as a chronic pain condition.',
    },

    { type: 'heading', level: 2, text: 'Recognition & Assessment' },
    {
      type: 'list',
      items: [
        'Symptoms (≥6 weeks–months): suprapubic/pelvic pain that typically WORSENS as the bladder fills and is RELIEVED by voiding, with urinary frequency, urgency and nocturia; pain may be associated with the menstrual cycle or intercourse.',
        'Repeated urine cultures are NEGATIVE (sterile) — recurrent "UTI" symptoms with persistently negative cultures should prompt this diagnosis (though sterile pyuria also warrants excluding TB, stones and malignancy).',
        'Assess with a symptom/bladder diary and pain assessment; examine (including a pelvic exam) to exclude other causes; urine dip/MC&S and consider imaging.',
        'Exclude other causes of the picture: infection, bladder cancer (esp. haematuria/older smokers — 2WW), stones, overactive bladder, endometriosis, pelvic-floor dysfunction, and, in men, chronic prostatitis/CPPS.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },
    {
      type: 'table',
      headers: ['Level', 'Options'],
      rows: [
        ['Conservative (first-line)', 'Explanation and reassurance; bladder/pain diary; dietary triggers (caffeine, alcohol, acidic/spicy foods) trial of avoidance; stress management; pelvic-floor physiotherapy (avoid pelvic-floor exercises that increase tone); manage constipation'],
        ['Oral', 'Analgesia; amitriptyline (for pain and frequency); antihistamines; consider a chronic-pain/multidisciplinary approach; treat comorbid depression/anxiety'],
        ['Specialist (urology/urogynae)', 'Intravesical instillations (e.g. hyaluronic acid, DMSO), cystoscopy ± hydrodistension (may show glomerulations or Hunner lesions), fulguration of Hunner lesions, and, rarely, major surgery for refractory disease'],
      ],
      caption: 'Refer to urology/urogynaecology or a specialist bladder-pain service if conservative measures fail, the diagnosis is uncertain, or there are red flags (haematuria).',
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Bladder Pain Syndrome', url: 'https://cks.nice.org.uk/topics/luts-in-men/' },
        { label: 'EAU — Chronic Pelvic Pain Guideline', url: 'https://uroweb.org/guidelines' },
        { label: 'Bladder Health UK', url: 'https://bladderhealthuk.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'The common misdiagnosis — sterile cultures point elsewhere' },
        { id: 'chronic-pelvic-pain', label: 'Chronic Pelvic Pain', subtitle: 'Overlapping pelvic-pain differential' },
        { id: 'chronic-pain', label: 'Chronic Pain', subtitle: 'Biopsychosocial management approach' },
        { id: 'endometriosis', label: 'Endometriosis', subtitle: 'A key pelvic-pain differential in women' },
        { id: 'prostatitis', label: 'Prostatitis', subtitle: 'CPPS — the male equivalent of a chronic pelvic-pain picture' },
      ],
    },

  ],
}
