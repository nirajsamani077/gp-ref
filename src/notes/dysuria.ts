import type { Note } from '../data/notes'

export const dysuria: Note = {
  id: 'dysuria',
  title: 'Dysuria (Symptom Differential)',
  subtitle: 'Painful urination beyond UTI — STIs, non-infective and the red flags not to miss',
  tags: ['symptoms'],

  body: `dysuria painful urination burning UTI urethritis STI chlamydia gonorrhoea vaginitis candida atrophic vaginitis prostatitis bladder cancer haematuria sterile pyuria interstitial cystitis dermatological genital`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Dysuria — pain, burning or stinging on passing urine — is common and most often a urinary tract infection, but a significant minority have another cause: a sexually transmitted infection, a genital/dermatological problem, or, occasionally, something sinister. The trap is reflexively treating every episode as a UTI; a structured symptom approach (especially where cultures are negative) avoids missed STIs and cancers.',
    },

    { type: 'heading', level: 2, text: 'Causes by Category' },
    {
      type: 'table',
      headers: ['Category', 'Examples & clues'],
      rows: [
        ['Infective — urinary', 'UTI/cystitis (frequency, urgency, suprapubic pain); pyelonephritis (fever, loin pain); prostatitis in men'],
        ['Infective — sexual', 'Urethritis (chlamydia, gonorrhoea — discharge; Mycoplasma), genital herpes (painful vesicles/ulcers, external dysuria)'],
        ['Genital / dermatological', 'Vaginal candidiasis, atrophic vaginitis (postmenopausal), contact/irritant dermatitis, lichen sclerosus/planus, balanitis'],
        ['Non-infective / structural', 'Bladder pain syndrome/interstitial cystitis (sterile), stones, urethral stricture/caruncle, foreign body/catheter'],
        ['Neoplastic (red flag)', 'Bladder cancer — with haematuria (esp. older smokers)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Distinguish INTERNAL dysuria (pain felt inside — suggests UTI/urethritis) from EXTERNAL/vulval dysuria (stinging as urine passes over the skin — suggests vaginitis, herpes, dermatosis).',
        'Ask about frequency/urgency, discharge, sexual history, systemic/loin symptoms, haematuria, menopausal status, and skin symptoms; examine the genitalia where indicated.',
        'Urine dip and culture; if pyuria with a negative culture ("sterile pyuria") consider STIs (chlamydia/gonorrhoea NAAT), TB, stones, and bladder pathology.',
        'Take STI/vaginal swabs where relevant (refer/liaise with GUM); in men, always investigate further (see UTI in Men).',
      ],
    },

    { type: 'heading', level: 2, text: 'Red Flags & Referral' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Do Not Miss',
      items: [
        'VISIBLE HAEMATURIA (or unexplained non-visible haematuria in the relevant age group) → 2WW suspected bladder/renal cancer (see Haematuria).',
        'Recurrent dysuria with persistently negative cultures → consider STIs and bladder pain syndrome; refer if unexplained.',
        'Systemic illness/loin pain (pyelonephritis) or urinary retention → urgent assessment.',
        'Any dysuria in a man, or in pregnancy, warrants a lower threshold for culture and follow-up.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — UTI (Lower) in Women', url: 'https://cks.nice.org.uk/topics/urinary-tract-infection-lower-women/' },
        { label: 'NICE NG12 — Suspected Cancer (Bladder)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'BASHH — STI Management Guidelines', url: 'https://www.bashh.org/guidelines' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'The commonest cause and its management' },
        { id: 'uti-men', label: 'UTI in Men', subtitle: 'Always investigate; overlapping presentation' },
        { id: 'stis', label: 'STIs', subtitle: 'Urethritis/genital ulcers causing dysuria' },
        { id: 'haematuria', label: 'Haematuria', subtitle: 'The red-flag accompaniment — 2WW thresholds' },
        { id: 'interstitial-cystitis', label: 'Interstitial Cystitis / BPS', subtitle: 'Dysuria with sterile cultures' },
      ],
    },

  ],
}
