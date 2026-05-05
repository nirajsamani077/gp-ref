import type { Note } from '../data/notes'

export const antispasmodics: Note = {
  id: 'antispasmodics-ibs',
  title: 'Antispasmodics & IBS Medications',
  subtitle: 'Antispasmodic drugs for irritable bowel syndrome and functional bowel disorders',
  tags: ['prescribing', 'gastroenterology'],

  body: 'antispasmodic irritable bowel syndrome IBS peppermint oil mebeverine alverine hyoscine buscopan bowel spasm functional bowel disorder abdominal cramp colonic smooth muscle relaxant',

  content: [

    {
      type: 'image',
      src: '/images/antispasmodics.jpg',
      alt: 'IBS medicines infographic showing antispasmodic options and how they work',
      caption: 'Antispasmodic medicines for IBS — all relax colonic smooth muscle but act via different mechanisms. Peppermint oil is a calcium channel blocker; mebeverine is a musculotropic antispasmodic; alverine acts directly on smooth muscle.',
    },

    // ── PRESCRIBING ──────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Antispasmodic Options' },

    {
      type: 'table',
      headers: ['Drug', 'Formulation', 'Dose', 'Notes'],
      rows: [
        ['Peppermint oil 0.2 ml', 'Gastro-resistant capsules — 84 capsule', 'ONE to TWO capsules THREE times a day', 'Take 30–60 minutes before meals; gastro-resistant to reduce oesophageal reflux of peppermint. Can cause heartburn if capsule opened or chewed. Avoid in GORD. Licensed for IBS.'],
        ['Mebeverine 135 mg', 'Tablets — 84 tablet', 'ONE tablet THREE times daily', 'Take 20 minutes before meals. MR (modified release) preparation also available as 200 mg BD. Musculotropic — no anticholinergic effects. First choice for many.'],
        ['Alverine citrate 60 mg', 'Capsules', 'ONE to THREE capsules (60–180 mg) THREE times daily', 'Can be combined with simeticone (Spasmonal Forte with simeticone) for IBS with bloating. Take 30 minutes before food.'],
        ['Hyoscine butylbromide (Buscopan)', '10 mg tablets', 'ONE to TWO tablets THREE to FOUR times daily', 'Anticholinergic — can cause dry mouth, constipation, blurred vision, urinary retention. Useful for acute spasm. Also available OTC. Avoid in elderly or glaucoma.'],
      ],
      caption: 'Peppermint oil and mebeverine are first-line antispasmodics for IBS with abdominal pain and cramps. Choose based on patient tolerability and cost. BNF: antispasmodics are recommended as adjunct to lifestyle and dietary measures.',
    },

    // ── IBS APPROACH ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'IBS — General Approach' },

    {
      type: 'callout',
      variant: 'info',
      title: 'IBS Diagnosis — Rome IV Criteria',
      items: [
        'Recurrent abdominal pain ≥1 day/week in the last 3 months, associated with ≥2 of: related to defaecation; change in stool frequency; change in stool form',
        'Symptom onset ≥6 months before diagnosis',
        'IBS subtypes: IBS-C (constipation), IBS-D (diarrhoea), IBS-M (mixed), IBS-U (unclassified)',
        'Diagnosis of exclusion — check FBC, CRP/ESR, coeliac serology (tTG IgA), stool calprotectin if age <45 or red flags',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Red Flags — Do NOT Diagnose IBS if Present',
      items: [
        'Unintentional weight loss',
        'PR bleeding (without benign anorectal cause)',
        'Family history of colorectal cancer / ovarian cancer / IBD',
        'Onset age >50 years without prior colonoscopy',
        'Nocturnal symptoms waking from sleep',
        'Short symptom duration (<6 months) with significant symptoms',
        'These warrant investigation (2WW/urgent referral as appropriate)',
      ],
    },

    {
      type: 'table',
      headers: ['IBS Subtype', 'Key Drug Choice', 'Notes'],
      rows: [
        ['IBS-D (diarrhoea-predominant)', 'Antispasmodics (mebeverine, peppermint oil), loperamide PRN', 'Low-FODMAP diet via dietitian; exclude coeliac. Consider amitriptyline 10 mg nocte (off-label) if not responding'],
        ['IBS-C (constipation-predominant)', 'Ispaghula husk (Fybogel) — soluble fibre; lactulose avoided; linaclotide or prucalopride if refractory', 'Avoid insoluble fibre (bran) — worsens symptoms. Increase fluid intake. Linaclotide 290 mcg OD requires specialist initiation in most ICBs'],
        ['IBS-M (mixed)', 'Antispasmodics as needed; manage each component', 'Diary to identify triggers; low-FODMAP with dietitian'],
        ['Any type with pain', 'Peppermint oil or mebeverine first-line; amitriptyline 10–30 mg nocte (low-dose, off-label) for refractory pain', 'Explain central sensitisation model; CBT/hypnotherapy for refractory IBS'],
      ],
      caption: 'Low-FODMAP diet reduces symptoms in ~50% — requires specialist dietitian guidance for correct implementation. Self-directed FODMAP is often inadequate and nutritionally risky.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'First-Line Non-Drug Measures',
      items: [
        'Dietary advice: regular meals, small portions, avoid trigger foods (caffeine, alcohol, fatty/spicy food, carbonated drinks)',
        'Reduce insoluble fibre (wheat bran, high-bran cereals) — replace with soluble fibre (oats, ispaghula)',
        'Low-FODMAP diet via dietitian referral (fermentable oligo-, di-, monosaccharides and polyols)',
        'Exercise — shown to improve global IBS symptoms',
        'Stress management — CBT, gut-directed hypnotherapy; mindfulness; refer Talking Therapies if anxiety/depression component',
        'Patient information: IBS Network (theibsnetwork.org), NICE patient decision aid',
      ],
    },

    // ── SECOND-LINE & SPECIALIST MEDICINES ───────────────────────────────────
    { type: 'heading', level: 2, text: 'Second-Line & Specialist Medicines' },

    {
      type: 'table',
      headers: ['Drug', 'Indication', 'Dose', 'Notes'],
      rows: [
        [
          'Linaclotide 290 mcg',
          'IBS-C — moderate to severe, after laxatives failed',
          'ONE capsule OD, taken ≥30 minutes before the first meal of the day',
          'NICE-approved (TA354) for IBS-C after 12 months of diet + laxatives. Available on NHS — check local ICB formulary for initiation criteria. Common SE: diarrhoea. Stop if severe diarrhoea. Contraindicated in children <18.',
        ],
        [
          'Prucalopride 1–2 mg',
          'Chronic constipation / IBS-C after laxatives failed',
          '2 mg OD (1 mg OD if ≥65 years or eGFR <30)',
          'Serotonin 5-HT4 agonist — prokinetic, increases colonic motility. NICE TA211 for women; now available for all adults. Not specifically licensed for IBS-C but widely used. GI side effects in first few days — usually settles.',
        ],
        [
          'Loperamide 2 mg',
          'IBS-D — acute diarrhoea episodes',
          '2 mg after each loose stool; max 16 mg/day',
          'Available OTC. Not for regular long-term use. Effective for acute/travel IBS episodes. Caution: do not use if acute inflammatory bowel disease or pseudomembranous colitis.',
        ],
        [
          'Amitriptyline 10–30 mg nocte',
          'IBS with refractory pain, or IBS-D',
          'Start 10 mg ON; increase by 10 mg every 4 weeks up to 30–75 mg as tolerated',
          'Off-label for IBS — low dose for central sensitisation, not for depression. Evidence from primary care RCT (ATLANTIS trial). Anticholinergic SE: dry mouth, constipation (can be helpful in IBS-D). Avoid abrupt withdrawal.',
        ],
        [
          'Rifaximin 400 mg TDS',
          'IBS-D — not widely available on NHS',
          '400 mg three times daily for 14 days',
          'Non-absorbable antibiotic targeting gut microbiome. Evidence for IBS-D (NICE does not currently recommend routinely). May be considered by gastroenterology for refractory IBS-D. Private prescription only in most settings.',
        ],
      ],
      caption: 'Second-line medicines require evidence of first-line failure (diet, antispasmodics). Linaclotide requires NICE TA354 criteria. Amitriptyline is the most practical option in primary care for refractory IBS pain — explain the rationale carefully as patients may be confused by an antidepressant being used for bowel symptoms.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'When to Refer to Gastroenterology',
      items: [
        'Diagnostic uncertainty — red flags present or unusual symptom pattern',
        'Age >45 at first presentation — consider colonoscopy to exclude colorectal cancer',
        'Raised faecal calprotectin (>200 µg/g) — suggests inflammatory bowel disease, not IBS',
        'IBS-C refractory to laxatives and lifestyle — for consideration of linaclotide or prucalopride initiation',
        'Refractory IBS not responding to ≥2 drug classes — gut-directed hypnotherapy or psychological therapies via gastro',
        'Any patient with significant weight loss, nocturnal symptoms, or family history of GI cancer',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'BNF — Antispasmodics', url: 'https://bnf.nice.org.uk/treatment-summaries/antispasmodics/' },
        { label: 'NICE CKS — IBS', url: 'https://cks.nice.org.uk/topics/irritable-bowel-syndrome/' },
        { label: 'NICE NG212 — IBS in Adults', url: 'https://www.nice.org.uk/guidance/ng212' },
        { label: 'NICE TA354 — Linaclotide', url: 'https://www.nice.org.uk/guidance/ta354' },
        { label: 'The IBS Network', url: 'https://www.theibsnetwork.org/' },
        { label: 'PIL — Antispasmodic Medicines', url: 'https://patient.info/digestive-health/irritable-bowel-syndrome-leaflet/antispasmodic-medicines' },
      ],
    },

  ],
}
