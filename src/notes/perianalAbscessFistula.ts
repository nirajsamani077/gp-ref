import type { Note } from '../data/notes'

export const perianalAbscessFistula: Note = {
  id: 'perianal-abscess-fistula',
  title: 'Perianal Abscess, Fistula & Pruritus Ani',
  subtitle: 'Same-day surgical referral for abscess, fistula associations and the causes of anal itch',
  tags: ['gastroenterology'],

  body: `perianal abscess fistula-in-ano incision drainage pruritus ani anal itch threadworm mebendazole streptococcal perianal Crohn's hygiene lichen sclerosus haemorrhoids sepsis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anorectal Abscess', url: 'https://cks.nice.org.uk/topics/anal-fissure/' },
        { label: 'NICE CKS — Pruritus Ani', url: 'https://cks.nice.org.uk/topics/itch-in-the-anogenital-area/' },
        { label: 'ACPGBI — Patient Information', url: 'https://www.acpgbi.org.uk/patients/' },
      ],
    },

    {
      type: 'para',
      text: 'This note covers three linked anorectal problems: the perianal abscess (which almost always needs surgical drainage, not antibiotics), fistula-in-ano (which often follows an abscess and needs colorectal management), and pruritus ani (anal itch, whose causes fall into four groups). The unifying GP messages are: drain the abscess, think of Crohn\'s with recurrent/complex disease, and never attribute adult anorectal symptoms to "just piles" without examining and excluding cancer.',
    },

    { type: 'heading', level: 2, text: 'Perianal Abscess' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Same-Day Surgical Referral for Drainage',
      items: [
        'A tender, red, fluctuant perianal swelling (may discharge); deeper abscesses can present as vague perianal pain and can cause sepsis',
        'Almost all need incision and drainage (under LA or GA) — even if spontaneously discharging → refer same-day to surgery/ED',
        'Antibiotics do NOT improve healing or prevent recurrence and are not a substitute for drainage; reserve them for surrounding cellulitis, systemic upset, or immunocompromise/diabetes',
        'A first, simple abscess that heals does not need routine follow-up; recurrence or a fistula warrants colorectal referral',
      ],
    },

    { type: 'heading', level: 2, text: 'Fistula-in-Ano' },

    {
      type: 'list',
      items: [
        'An abnormal track between the anal canal and perianal skin — most follow a previous abscess (~1/3 of abscesses lead to a fistula); presents with persistent discharge/irritation and a visible external opening',
        'Consider secondary causes if atypical/recurrent: Crohn\'s disease, previous radiotherapy/surgery, TB, or malignancy',
        'Management is surgical (colorectal) — MRI to map complex tracks; options include fistulotomy or a seton; investigate for underlying IBD',
      ],
    },

    { type: 'heading', level: 2, text: 'Pruritus Ani (Anal Itch)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Four Groups of Causes',
      items: [
        'Hygiene — both over- and under-cleansing; harsh wiping and soaps',
        'Inflammatory skin disease — eczema, contact/irritant dermatitis, psoriasis, lichen sclerosus',
        'Infection — THREADWORM (worse at night, thin white worms, usually children: mebendazole 100 mg as a single dose, repeat after 2 weeks, treat the whole household + strict hygiene); candida; and streptococcal perianal infection in children',
        'Lower-GI pathology — haemorrhoids, skin tags, fissures, IBD, and (importantly) anorectal cancer → examine the perianal area and do a DRE in adults, especially with red flags (bleeding, weight loss, change in bowel habit)',
      ],
    },

    {
      type: 'list',
      items: [
        'General management: gentle cleansing (water, avoid soaps/wet wipes), soft cotton underwear, avoid scratching; a barrier/emollient; a short course of a mild-to-moderate topical steroid (± antifungal, e.g. Daktacort) for inflamed skin — avoid prolonged potent steroids on this thin skin',
        'Streptococcal perianal disease (children ~3–8 years): perianal erythema, painful defecation, fissuring and itching from group A strep — take a perianal swab; if confirmed, treat with co-amoxiclav or (if penicillin-allergic) a macrolide for 7–10 days',
        'Always consider threadworm and streptococcal infection in a child, and red-flag GI pathology in an adult',
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Pruritus Ani', url: 'https://cks.nice.org.uk/topics/itch-in-the-anogenital-area/' },
        { label: 'ACPGBI — Patient Information (Anorectal Abscess/Fistula)', url: 'https://www.acpgbi.org.uk/patients/' },
        { label: 'NHS — Anal Abscess', url: 'https://www.nhs.uk/conditions/abscess/' },
        { label: 'Guts UK — Bowel Conditions', url: 'https://gutscharity.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'anal-fissure', label: 'Anal Fissure', subtitle: 'Painful defecation and a common cause of anal symptoms' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'Crohn\'s — perianal disease and fistulae' },
        { id: 'colorectal-cancer', label: 'Colorectal Cancer', subtitle: 'Exclude in adults with anorectal symptoms — DRE/2WW' },
        { id: 'lichen-sclerosus', label: 'Lichen Sclerosus', subtitle: 'Anogenital inflammatory cause of itch' },
      ],
    },

  ],
}
