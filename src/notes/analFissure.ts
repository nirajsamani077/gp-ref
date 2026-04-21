import type { Note } from '../data/notes'

export const analFissure: Note = {
  id: 'anal-fissure',
  title: 'Anal Fissure',
  subtitle: 'Acute and chronic management — GTN ointment, diltiazem, and when to refer',
  tags: ['gastroenterology', 'colorectal'],

  body: 'anal fissure tear split anus perianal pain bleeding PR fresh blood constipation IBD Crohn STI acute chronic GTN glyceryl trinitrate rectogesic 0.4% diltiazem 2% lidocaine gel stool softener Movicol docusate laxative botox botulinum toxin lateral internal sphincterotomy sentinel skin tag hypertrophied anal papilla headache proctalgia buscopan mebeverine',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Overview',
      items: [
        'Longitudinal tear in the squamous epithelium of the distal anal canal — affects ~1 in 10 people over a lifetime',
        'Usually posterior midline (6 o\'clock); anterior fissures more common in women post-partum',
        'Cause: hard stool → tear → internal sphincter spasm → ↓ blood supply → impaired healing → pain → fear of defaecation → worsening constipation — a vicious cycle',
        'Acute: <6 weeks — most resolve with conservative management',
        'Chronic: >6 weeks — features include raised/heaped edges, exposed internal sphincter fibres, sentinel skin tag (external), hypertrophied anal papilla (internal)',
        'Non-midline fissures or those not responding to treatment: consider Crohn\'s disease, STI (syphilis, herpes, chlamydia), anal cancer — refer',
      ],
    },

    {
      type: 'image',
      src: '/images/anal_fissure.jpg',
      alt: 'Cross-sectional diagrams of acute and chronic anal fissure: acute shows a simple tear at the dentate line; chronic shows hypertrophied anal papilla, exposed internal sphincter muscle fibres, raised edges and a sentinel pile (external skin tag), with clinical photographs of each',
      caption: 'Acute vs chronic anal fissure. Chronicity is marked by the triad: sentinel skin tag (external), hypertrophied anal papilla (internal), and exposed internal sphincter fibres with raised, indurated edges.',
    },

    {
      type: 'image',
      src: '/images/anal-fissure-schema.jpg',
      alt: 'Anatomical cross-section showing rectum, external anal sphincter, internal anal sphincter and location of anal fissure between them',
      caption: 'The fissure lies in the distal anal canal between the internal and external sphincters. Internal anal sphincter hypertonia reduces perfusion to the posterior commissure, the poorest-supplied area — explaining why most fissures occur at the 6 o\'clock position.',
    },

    { type: 'heading', level: 2, text: 'Management' },

    { type: 'heading', level: 3, text: 'Acute Fissure (<6 weeks) — Conservative' },

    {
      type: 'list',
      items: [
        'Stool softeners (first-line): Movicol (macrogol) 1–2 sachets daily; or docusate sodium 100–200 mg BD — aim for soft, formed stool; continue for at least 6–8 weeks',
        'High fibre diet (25–30 g/day) and adequate fluid intake (1.5–2 L/day)',
        'Topical anaesthetic: lidocaine 5% ointment applied 5–10 minutes before defaecation — unlicensed for this indication but widely used; reduces pain during bowel movement; apply sparingly to anal margin',
        'Warm sitz baths (10–15 min after defaecation) — relaxes sphincter, improves local circulation, aids hygiene',
        'Antispasmodics for post-defaecation proctalgia: mebeverine 135 mg TDS or buscopan 10–20 mg TDS — can reduce painful sphincter spasm',
        'Simple analgesia: paracetamol; avoid codeine and opioids (worsen constipation)',
        'Most acute fissures heal within 4–6 weeks with the above measures',
      ],
    },

    { type: 'heading', level: 3, text: 'Chronic Fissure (>6 weeks) — GTN Ointment' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'GTN 0.4% ointment (Rectogesic) — Ardens 1st line',
      image: {
        src: '/images/rectogesic.png',
        alt: 'Rectogesic GTN 0.4% ointment box and tube',
        maxWidth: '28%',
        float: 'right',
      },
      items: [
        'Prescription: glyceryl trinitrate 0.4% rectal ointment — 30 g tube',
        'Dose: apply a 2.5 cm strip to the anus 12-hourly (BD) — use a gloved finger or supplied applicator',
        'Duration: until symptoms resolve or maximum 8 weeks',
        'Side effects: headache in up to 50% — usually mild and settles; warn patients in advance',
        'If headache intolerable: try reducing to once daily for a week, then back to BD; if still intolerable → switch to diltiazem',
        'Cost: ~£30 per 30 g tube on NHS',
        'Cautions: avoid with PDE5 inhibitors (sildenafil, tadalafil) — severe hypotension risk; caution with antihypertensives',
        'Continue stool softeners throughout treatment',
      ],
    },

    { type: 'heading', level: 3, text: 'If GTN Fails — Diltiazem 2% Ointment (Ardens 2nd line)' },

    {
      type: 'table',
      headers: ['', 'GTN 0.4% (Rectogesic)', 'Diltiazem 2% ointment'],
      rows: [
        ['Mechanism', 'Nitric oxide donor → sphincter relaxation', 'Calcium channel blocker → sphincter relaxation'],
        ['Dose', '2.5 cm strip BD for 6–8 weeks', '2.5 cm strip BD for 6–8 weeks'],
        ['Headache', 'Common (~50%) — main reason for stopping', 'Much less frequent — preferred if GTN headache intolerable'],
        ['Cost (30 g)', '~£30 on NHS', '~£120 — unlicensed preparation; specialist-compounded'],
        ['Availability', 'Licensed (Rectogesic); prescribable on FP10', 'Unlicensed — check local formulary; may need special order'],
        ['Healing rate', '~50–70%', 'Similar to GTN (~65%)'],
      ],
      caption: 'Ardens 2nd line: switch to diltiazem 2% if GTN causes intolerable headache or fails after a full course. Unlicensed — check local formulary. Continue stool softeners with both.',
    },

    { type: 'heading', level: 2, text: 'When to Refer' },

    {
      type: 'list',
      items: [
        'Failed two courses of topical treatment (GTN + diltiazem) — refer colorectal surgery for botulinum toxin injection or lateral internal sphincterotomy',
        'Botulinum toxin (Botox): injection into internal sphincter under GA/LA; temporary chemical sphincterotomy; healing ~70–80%; risk of temporary incontinence',
        'Lateral internal sphincterotomy (LIS): small surgical division of internal sphincter; most effective treatment (~95% cure); small but permanent risk of incontinence (~5–10%)',
        'Non-midline fissures (lateral): suspect Crohn\'s disease, syphilis, herpes, chlamydia, anal cancer — refer and consider biopsy',
        'Fissure in child: consider safeguarding if no other explanation; constipation is the most common cause but sexual abuse must be excluded',
        'Immunocompromised patients (HIV, steroids): atypical fissures — refer and treat underlying cause',
        'Associated features: rectal mass, change in bowel habit, weight loss, rectal mucus — 2WW referral to exclude colorectal/anal malignancy',
      ],
    },

    {
      type: 'image',
      src: '/images/anal-fissure-pic.jpg',
      alt: 'Anatomical illustration showing anal fissure location in the distal anal canal with inset showing the perianal view',
      caption: 'Typical posterior midline fissure location. Most fissures are visible on gentle parting of the buttocks without proctoscopy — which should be avoided acutely due to pain.',
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Anal Fissure', url: 'https://cks.nice.org.uk/topics/anal-fissure/' },
        { label: 'ACPGBI — Anal Fissure Guideline', url: 'https://www.acpgbi.org.uk/content/uploads/2019/07/ACPGBI-Anal-Fissure-Position-Statement.pdf' },
        { label: 'BUPA — Anal Fissure PIL', url: 'https://www.bupa.co.uk/health-information/digestive-gut-health/anal-fissure' },
      ],
    },

  ],
}
