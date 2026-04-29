import type { Note } from '../data/notes'

export const barrettsOesophagus: Note = {
  id: 'barretts-oesophagus',
  title: "Barrett's Oesophagus",
  subtitle: "GORD-related oesophageal metaplasia — surveillance intervals, PPI management, GP role and upper GI 2WW criteria",
  tags: ['gastroenterology'],

  body: "Barrett's oesophagus barretts metaplasia columnar intestinal squamous adenocarcinoma dysplasia OGD endoscopy surveillance PPI omeprazole lansoprazole GORD gastro-oesophageal reflux hiatus hernia radiofrequency ablation RFA fundoplication H pylori helicobacter 2WW upper GI dysphagia weight loss dyspepsia",

  content: [

    // ── DEFINITION ────────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'info',
      title: "What is Barrett's Oesophagus?",
      items: [
        "Metaplasia of the distal oesophageal mucosa — the normal squamous epithelium is replaced by columnar (intestinal-type) epithelium in response to chronic acid exposure from GORD",
        "Diagnosed endoscopically — salmon-pink mucosa above the gastro-oesophageal junction; confirmed on biopsy (specialist goblet cells on histology)",
        "Risk of progression to oesophageal adenocarcinoma: ~3–5% lifetime risk — but the annual risk is low (~0.3%/year); most patients with Barrett's never develop cancer",
        "Risk factors: chronic GORD, obesity (especially central adiposity), male sex, white ethnicity, smoking, age >50",
        "Diagnosed incidentally on OGD in many cases — patients may be asymptomatic from the Barrett's itself (GORD symptoms may have resolved)",
      ],
    },

    {
      type: 'image',
      src: '/images/barretts-oesophagus.jpg',
      alt: "Barrett's oesophagus diagrams and endoscopy: A normal oesophagus and stomach, B hiatus hernia, C short segment Barrett's, D long segment Barrett's — with corresponding endoscopic images showing squamocolumnar junction and Barrett's mucosa",
      caption: "Top row: anatomical diagrams — A normal, B hiatus hernia, C short-segment Barrett's (<3 cm), D long-segment Barrett's (≥3 cm). Bottom row: corresponding endoscopic appearances — A normal squamocolumnar junction, B–D progressive Barrett's change showing salmon-pink columnar mucosa proximal to the gastro-oesophageal junction.",
    },

    // ── SURVEILLANCE ──────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: "Surveillance — What Secondary Care Does" },

    {
      type: 'callout',
      variant: 'tip',
      title: 'GP role in surveillance — understand the schedule, not manage it',
      items: [
        "Surveillance OGDs are arranged and performed by gastroenterology — GPs do not book or initiate these",
        "If a patient with known Barrett's has not had an OGD within the expected interval, or has been lost to follow-up, refer back to gastroenterology",
        "Ensure the patient is on appropriate PPI therapy — this is the main GP prescribing role",
        "Safety-net: any new red-flag symptoms (dysphagia, weight loss, persistent vomiting, haematemesis) → 2WW OGD referral regardless of last surveillance date",
      ],
    },

    {
      type: 'table',
      headers: ['Finding at OGD', 'Surveillance Interval', 'Management'],
      rows: [
        ['Non-dysplastic Barrett\'s — short segment (<3 cm)', 'OGD every 3–5 years', 'PPI if symptomatic. Lifestyle advice. Discharge to GP with surveillance recall from gastro.'],
        ['Non-dysplastic Barrett\'s — long segment (≥3 cm)', 'OGD every 2–3 years', 'PPI if symptomatic. Lifestyle. Ongoing gastro follow-up.'],
        ['Indefinite for dysplasia', 'OGD every 6 months', 'PPI for all (inflammation confounds assessment) — treat and re-biopsy at 6 months to clarify grade. Managed in gastro.'],
        ['Low-grade dysplasia (LGD)', 'Endoscopic ablation (RFA — radiofrequency ablation)', 'Refer for ablation — do not simply surveil. RFA removes dysplastic mucosa. High success rate. Managed by tertiary/specialist centre.'],
        ['High-grade dysplasia (HGD) / early adenocarcinoma', '🔴 2WW upper GI referral / urgent specialist centre', 'Endoscopic mucosal resection (EMR) or RFA; surgery (oesophagectomy) if indicated. Multidisciplinary team management.'],
      ],
      caption: "BSG (British Society of Gastroenterology) 2023 guidelines. Surveillance intervals are approximate and may be adjusted by the gastroenterologist based on biopsy results, patient fitness and endoscopic appearance. Prague classification (C and M criteria) is used to document segment length.",
    },

    // ── PPI MANAGEMENT ────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'PPI Management' },

    {
      type: 'table',
      headers: ['Situation', 'PPI Recommendation'],
      rows: [
        ["Barrett's + symptomatic GORD", 'PPI indicated — prescribe standard or full dose; review annually; titrate to lowest effective dose'],
        ["Barrett's + asymptomatic (no GORD symptoms)", 'PPI not routinely indicated for cancer prevention alone — evidence insufficient; prescribe only if symptomatic or indefinite dysplasia'],
        ['Indefinite for dysplasia', 'PPI for ALL — inflammation mimics dysplasia; PPI reduces inflammation and allows accurate re-biopsy'],
        ['Low-grade or high-grade dysplasia', 'PPI continued — managed by specialist; continue prescribing as directed by gastro team'],
        ["Barrett's + long-term NSAID/aspirin use", 'Continue PPI — high GI bleeding risk; do not deprescribe'],
      ],
      caption: 'Take PPI 30 minutes before food on an empty stomach for best efficacy. If on 40 mg omeprazole, consider splitting to 20 mg BD (morning and evening) for better acid suppression over 24 hours.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'PPI Deprescribing — When NOT to Stop',
      items: [
        "Do NOT deprescribe PPI in Barrett's oesophagus — even if asymptomatic; discuss with gastroenterology first",
        'Do not deprescribe if: endoscopy-proven severe oesophagitis (grade C/D), peptic ulcer disease, Barrett\'s, Zollinger-Ellison syndrome, or ongoing NSAID/aspirin use',
        'Long-term PPI risks (osteoporosis, hypomagnesaemia, B12 deficiency, increased enteric infection risk) are real but generally outweighed by benefit in Barrett\'s',
        "If patient wants to reduce dose: trial of step-down to low-dose PPI (omeprazole 10 mg OD) or PRN — not complete cessation; PRN gives fewer withdrawal symptoms than abrupt stop",
        'Check Mg²⁺ annually in long-term PPI users; B12 if clinically indicated',
      ],
    },

    // ── GORD IN CONTEXT ───────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'GORD Management — Underlying Condition' },

    {
      type: 'list',
      items: [
        'Weight loss — most effective lifestyle intervention; central obesity increases intra-abdominal pressure and promotes reflux',
        'Elevate head of bed (10–15 cm) or use a wedge pillow — gravity reduces nocturnal reflux; avoid sleeping flat',
        'Small, frequent meals; avoid eating within 3 hours of bed; avoid fatty/spicy food, chocolate, alcohol, caffeine, peppermint',
        'Reduce smoking — relaxes lower oesophageal sphincter and worsens reflux',
        'Review NSAIDs, calcium channel blockers, nitrates, bisphosphonates — all worsen reflux; switch if possible',
        'Antacids / alginates (Gaviscon/Peptac) — for PRN symptom relief; 10–20 ml after meals and at bedtime',
        'H. pylori testing: if not already tested — stool antigen test or ¹³C urea breath test (stop PPI ≥2 weeks and antibiotics ≥4 weeks before testing); treat if positive',
        'Routine OGD (non-urgent) if: >55 years with dyspepsia or GORD symptoms, without weight loss — to exclude Barrett\'s and malignancy',
      ],
    },

    // ── 2WW UPPER GI ─────────────────────────────────────────────────────────────
    {
      type: 'callout',
      variant: 'danger',
      title: '2WW Upper GI Referral — Red Flags (NICE NG12)',
      items: [
        'Dysphagia — any age: refer 2WW immediately (oesophageal cancer until proven otherwise)',
        'Age ≥55 with weight loss PLUS any of: upper abdominal pain, reflux, or dyspepsia',
        'Upper abdominal mass consistent with stomach cancer',
        'Age ≥40 with weight loss + upper abdominal pain if: South Asian or East Asian ethnicity, or family history of gastric cancer',
        'Haematemesis — any age',
        'Known Barrett\'s oesophagus: new dysphagia, weight loss or deteriorating symptoms → 2WW regardless of last surveillance date',
        'Routine (non-urgent) OGD: age >55 with new or unexplained dyspepsia/GORD; raised platelets with upper GI symptoms',
      ],
    },

    // ── GP MONITORING CHECKLIST ───────────────────────────────────────────────────
    { type: 'heading', level: 2, text: "GP Checklist — Patient with Known Barrett's" },

    {
      type: 'list',
      items: [
        '✅ PPI prescribed at appropriate dose — review annually; do not deprescribe without gastro input',
        '✅ Lifestyle advice documented — weight management, diet, alcohol, smoking',
        '✅ H. pylori tested and treated if positive',
        '✅ Surveillance OGD on schedule — check most recent endoscopy date and expected next interval; re-refer if overdue',
        '✅ Haematinics — check FBC; iron deficiency anaemia may indicate occult bleeding → 2WW',
        '✅ Magnesium and B12 checked if on long-term PPI',
        '✅ Safety-netting documented — patient knows to re-attend for dysphagia, weight loss, haematemesis',
        '✅ Medication review — avoid NSAIDs where possible; PPI cover if essential',
        "✅ Coding — ensure Barrett's oesophagus is coded on the problem list for recall and risk stratification",
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BSG — Barrett\'s Guidelines 2023', url: 'https://www.bsg.org.uk/clinical-resource/british-society-of-gastroenterology-guidelines-on-the-diagnosis-and-management-of-barretts-oesophagus/' },
        { label: 'NICE CKS — Barrett\'s', url: 'https://cks.nice.org.uk/topics/barretts-oesophagus/' },
        { label: 'NICE NG12 — Suspected Cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — GORD', url: 'https://cks.nice.org.uk/topics/gord/' },
        { label: 'Patient PIL — Barrett\'s', url: 'https://www.barretts-oesophagus.org.uk/' },
      ],
    },

  ],
}
