import type { Note } from '../data/notes'

export const stomasNutrition: Note = {
  id: 'stomas-nutrition',
  title: 'Stomas, PEG Feeding & Malnutrition',
  subtitle: 'Colostomy vs ileostomy, common stoma problems, gastrostomy care and oral nutritional support',
  tags: ['gastroenterology'],

  body: `stoma colostomy ileostomy urostomy output dehydration high output parastomal hernia prolapse retraction skin excoriation PEG RIG gastrostomy blocked tube buried bumper malnutrition MUST oral nutritional supplements ONS refeeding dietitian stoma nurse`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'GPs increasingly care for patients living with stomas and feeding tubes in the community, and for those at nutritional risk. This note is a practical reference for the common problems: recognising the difference between stoma types and their complications, basic gastrostomy troubleshooting, and the identify-and-treat approach to malnutrition. The stoma nurse and dietitian are key partners — involve them early.',
    },

    { type: 'heading', level: 2, text: 'Stoma Types & Problems' },
    {
      type: 'table',
      headers: ['Type', 'Notes'],
      rows: [
        ['Colostomy', 'Usually left iliac fossa, flush to skin, formed/solid stool; often permanent (e.g. after abdominoperineal resection) or reversible'],
        ['Ileostomy', 'Usually right iliac fossa, spouted, LIQUID output — higher risk of dehydration/electrolyte loss; high-output states need fluid/electrolyte management'],
        ['Urostomy', 'Urinary diversion — spouted, urine output; watch for UTI and stones'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Stoma Complications',
      items: [
        'Peristomal skin excoriation (poorly fitting appliance/leakage) — the commonest problem; refer to the stoma nurse for appliance review and barrier products.',
        'High-output stoma (esp. ileostomy): dehydration, hypokalaemia and AKI — restrict hypotonic fluids, use oral rehydration solution, loperamide ± codeine to slow transit; check U&E; admit if unwell.',
        'Parastomal hernia, prolapse, retraction, stenosis, and bleeding — refer for surgical/stoma-nurse assessment; ischaemia (dusky/black stoma) is urgent.',
        'Psychological impact, odour and body-image concerns — signpost support.',
      ],
    },

    { type: 'heading', level: 2, text: 'Gastrostomy (PEG/RIG) Care' },
    {
      type: 'list',
      items: [
        'Used for long-term enteral feeding (e.g. stroke, MND, head & neck cancer). Routine care: keep the site clean/dry, rotate the tube per protocol, and flush before/after feeds and medicines.',
        'Blocked tube: flush with warm water (avoid fizzy drinks/acidic solutions); use liquid formulations of medicines where possible; if unresolved, contact the nutrition/enteral team.',
        '"Buried bumper syndrome" (internal fixation eroding into the stomach wall — resistance/pain on movement, leakage), significant peristomal infection, or a dislodged tube → contact the specialist team urgently (a recently dislodged tube tract can close within hours — do not delay).',
        'Overgranulation tissue at the site is common — treat per local guidance (topical steroid/silver nitrate).',
      ],
    },

    { type: 'heading', level: 2, text: 'Malnutrition & Oral Nutritional Support' },
    {
      type: 'list',
      items: [
        'Screen at-risk patients (frail/elderly, cancer, chronic disease, post-surgical) with a validated tool such as MUST (BMI, weight loss, acute-illness effect).',
        'Food-first is the priority: fortify meals, small frequent energy-dense snacks, and address the cause (poor dentition, dysphagia, low mood, social factors).',
        'Oral nutritional supplements (ONS) are added when food-first is insufficient, with a goal and review date (avoid open-ended prescribing); involve a dietitian.',
        'Beware REFEEDING SYNDROME in significantly malnourished patients when restarting nutrition — check/correct phosphate, potassium and magnesium and give thiamine; reintroduce feeding cautiously (usually a hospital/dietitian-led decision).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CG32 — Nutrition Support in Adults', url: 'https://www.nice.org.uk/guidance/cg32' },
        { label: 'BAPEN — MUST Tool & Nutrition', url: 'https://www.bapen.org.uk/' },
        { label: 'Colostomy UK', url: 'https://www.colostomyuk.org/' },
        { label: 'PINNT — Patients on Home Artificial Nutrition', url: 'https://pinnt.com/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'colorectal-cancer', label: 'Colorectal Cancer', subtitle: 'A common reason for stoma formation' },
        { id: 'ibd', label: 'Inflammatory Bowel Disease', subtitle: 'Ileostomy/colostomy in Crohn\'s and UC' },
        { id: 'motor-neuron-disease', label: 'Motor Neuron Disease', subtitle: 'Gastrostomy feeding in bulbar disease' },
        { id: 'frailty', label: 'Frailty', subtitle: 'Malnutrition screening and food-first support' },
        { id: 'dysphagia', label: 'Dysphagia', subtitle: 'Swallowing failure and enteral feeding decisions' },
      ],
    },

  ],
}
