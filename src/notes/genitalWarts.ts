import type { Note } from '../data/notes'

export const genitalWarts: Note = {
  id: 'genital-warts',
  title: 'Genital Warts (Anogenital Warts)',
  subtitle: 'HPV 6 and 11, diagnosis, podophyllotoxin, imiquimod, cryotherapy and pregnancy management',
  tags: ['gum', 'sexual-health'],

  body: 'genital warts condylomata acuminata HPV 6 11 anogenital warts podophyllotoxin Warticon imiquimod Aldara cryotherapy catephen polyphenon GUM sexual health STI screen Gardasil vaccination contact tracing immunosuppression HIV pregnancy internal warts cervical colposcopy anal warts vulval warts penile warts recurrence',

  content: [

    { type: 'heading', level: 2, text: 'Background and Transmission' },

    {
      type: 'list',
      items: [
        'Caused by Human Papillomavirus (HPV) subtypes 6 and 11 — NON-ONCOGENIC strains (unlike HPV 16 and 18 which cause cervical and other cancers)',
        'Spread by direct skin-to-skin contact (sexual contact) — condoms reduce but do not eliminate transmission',
        'Most common viral STI in the UK — ~70,000 new diagnoses per year; 90% caused by HPV 6/11',
        'Incubation: weeks to months; patients may carry HPV without visible warts',
        'Protected by Gardasil-9 vaccine (HPV 6, 11, 16, 18, 31, 33, 45, 52, 58): school programme for ages 12–13; catch-up available to age 25; MSM offered up to age 45 in GUM',
        'Natural history: ~1/3 spontaneously resolve within 6 months without treatment; recurrence is common (virus persists latently in epithelium)',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features and Diagnosis' },

    {
      type: 'list',
      items: [
        'Appearance: fleshy, soft, slightly pigmented or skin-coloured papular or cauliflower-like protuberances; single or clustered; may be flat (small, sessile) or pedunculated (stalk)',
        'Location (women): introitus, labia majora/minora, clitoris, perineum, perianal, vaginal wall, cervix, urethra',
        'Location (men): glans, foreskin (subpreputial), penile shaft, scrotum, perianal',
        'Symptoms: usually asymptomatic; may cause itch, discomfort, or occasional bleeding; perianal warts may cause itch or discomfort with defecation',
        'Diagnosis: typically clinical — characteristic appearance; no routine biopsy unless atypical, uncertain, or immunosuppressed',
        'Acetowhitening test: application of 5% acetic acid turns warts white — not recommended routinely (poor specificity; many normal areas also whiten)',
      ],
    },

    { type: 'heading', level: 2, text: 'When to Refer to GUM / Sexual Health' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Always Offer STI Screen via GUM / Umbrella / Sexual Health Service',
      items: [
        'All patients with a new diagnosis of genital warts should be offered full STI screen (chlamydia, gonorrhoea, syphilis, HIV, hepatitis B) — GUM referral or point-of-care screening in practice',
        'Refer to GUM if: internal vaginal or anal warts (require colposcopy/anoscopy for treatment), uncertain diagnosis, HIV positive or immunosuppressed, child (mandatory safeguarding referral to paediatrics — consider sexual abuse), pregnant, treatment failure, or complex/extensive warts',
        'Cervical warts: if uncertain whether lesion is on the cervix → refer for colposcopy to exclude CIN',
        'Rectal/anal internal warts: GUM or colorectal for anoscopy; topical treatments less effective internally; cryotherapy preferred',
        'Immunosuppressed patients (HIV, transplant, chemotherapy): treatment more challenging; warts more extensive; refer to specialist sexual health',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment — External Warts' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Treatment is Cosmetic — Not a Cure for HPV',
      items: [
        'Treatment removes visible warts but does NOT eradicate HPV infection — virus persists latently',
        'No treatment is a valid option: ~1/3 resolve spontaneously within 6 months; discuss recurrence risk honestly',
        'Notify current sexual partner(s): they should consider STI screen and examination for warts — no formal contact tracing requirement as per routine STI guidelines',
        'Condoms: reduce transmission risk; cannot fully protect as HPV is spread by skin-to-skin contact in the genital area',
      ],
    },

    {
      type: 'table',
      headers: ['Treatment', 'Regime', 'Notes'],
      rows: [
        ['Cryotherapy (liquid nitrogen)', 'Weekly applications for 4 weeks in clinic', 'Best for: small number of discrete warts, keratinised warts (drier, older-looking); fast; good for internal warts; can be painful; may need repeat courses'],
        ['Podophyllotoxin 0.15% cream (Warticon)', 'Apply BD for 3 days, rest 4 days — repeat for up to 4 weeks, then review', 'Patient-applied; antimitotic — inhibits cell division; suitable for external warts only; contraindicated in pregnancy (teratogenic); local irritation, erythema'],
        ['Imiquimod 5% cream (Aldara)', 'Apply 3 nights per week (e.g. Mon/Wed/Fri), wash off after 6–10 hours; up to 16 weeks maximum', 'Immune response modifier — stimulates local interferon; best for non-keratinised, flat, moist warts; slower onset (~8–12 weeks); local inflammation is part of response; NOT for internal use; contraindicated in pregnancy (off-licence)'],
        ['Catephen 10% ointment (green tea polyphenols)', 'Apply TDS for 3 days, rest 4 days; cycle up to 16 weeks', 'Licensed for external genital warts; botanical extract; prescription only; can be used same-day as another topical; expensive'],
        ['Review at 4 weeks and 8–12 weeks', 'If >50% clearance: continue current treatment; if <50% clearance: switch from cryotherapy to topical or vice versa; if no clearance after full course → refer GUM', 'Combination approaches may be more effective (e.g. cryo + imiquimod)'],
      ],
      caption: 'Podophyllotoxin and imiquimod are contraindicated in pregnancy. Catephen (sinecatechins/polyphenon E) is safe to trial in pregnancy per some guidelines — but all anogenital warts in pregnancy should ideally be managed with GUM involvement.',
    },

    { type: 'heading', level: 2, text: 'Genital Warts in Pregnancy' },

    {
      type: 'list',
      items: [
        'Warts may enlarge significantly during pregnancy (immunological and hormonal changes)',
        'Most do NOT require treatment unless causing obstruction or distress',
        'CANNOT use: podophyllotoxin or imiquimod (teratogenic/insufficient safety data)',
        'Safe treatments in pregnancy: cryotherapy (most preferred), surgical excision under LA/GA',
        'Caesarean section is NOT routinely indicated for genital warts — only if warts would obstruct delivery; risk of vertical transmission of HPV to infant causing laryngeal papillomatosis is very low',
        'Refer all pregnant patients with genital warts to GUM or obstetric sexual health team',
      ],
    },

    { type: 'heading', level: 2, text: 'Counselling Points' },

    {
      type: 'list',
      items: [
        'Recurrence is common (10–30% within 3 months) — due to latent viral persistence; NOT a sign of re-infection or treatment failure',
        'Partner notification: current sexual partners should be examined and screened — not a formal public health notifiable disease; no statutory duty to trace',
        'Duration of infectivity: unknown; HPV can be transmitted even without visible warts; condoms provide partial protection',
        'Cervical cancer and genital warts: HPV 6 and 11 do NOT cause cervical cancer; however, patients may have concurrent HPV 16/18 infection — advise regular cervical screening; HPV vaccine ideally prevents both oncogenic and wart-causing strains',
        'Emotional impact: diagnosis can cause significant distress, shame, or anxiety about relationship fidelity — address sensitively; genital warts can be acquired from past partners months to years ago; does not necessarily indicate recent infidelity',
        'BASHH (British Association for Sexual Health and HIV): patient information leaflets available at bashh.org',
      ],
    },

  ],
}
