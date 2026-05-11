import type { Note } from '../data/notes'

export const cmpa: Note = {
  id: 'cmpa',
  title: "Cow's Milk Protein Allergy (CMPA)",
  subtitle: 'IgE vs non-IgE mediated, hypoallergenic formulas and milk ladder reintroduction',
  tags: ['paediatrics', 'allergy'],

  body: "cow's milk protein allergy CMPA CMPI colic reflux eczema blood mucus stool IgE non-IgE EHF AAF hypoallergenic formula Aptamil Nutramigen Neocate milk ladder reintroduction breastfeeding exclusion diet allergy clinic SPT RAST skin prick test paediatric dietician",

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'CMPA at a Glance',
      items: [
        "Most common food allergy in infants — usually presents under 1 year of age",
        "More common than lactose intolerance in infants (different condition — lactose intolerance is enzyme deficiency, not allergy)",
        "Two distinct mechanisms: IgE-mediated (immediate) and non-IgE-mediated (delayed)",
        'Always take: symptom history (speed of onset, triggers), full feeding history from birth, maternal diet if breastfeeding, family history of allergy/atopy, and plot weight and length on RCPCH chart',
      ],
    },

    { type: 'heading', level: 2, text: 'IgE-Mediated vs Non-IgE-Mediated CMPA' },

    {
      type: 'table',
      headers: ['Feature', 'IgE-Mediated', 'Non-IgE-Mediated'],
      rows: [
        ['Onset after exposure', 'Rapid — minutes to 1–2 hours', 'Delayed — 2–72 hours'],
        ['Key symptoms', 'Urticaria, angioedema, vomiting, wheeze, anaphylaxis', 'Reflux, diarrhoea/constipation, blood/mucus in stool, colic, eczema, FTT, cough'],
        ['Diagnosis', 'Refer allergy clinic — SPT or RAST (specific IgE)', 'Usually diagnosed clinically in primary care — exclusion diet trial'],
        ['Management', 'Specialist-led; exclusion diet + allergy clinic', 'Primary care can manage; exclusion diet + dietician'],
        ['Prognosis', 'May persist longer; needs formal allergy review', 'Most resolve by age 1–3 years; trial reintroduction with milk ladder'],
      ],
      caption: 'IgE-mediated CMPA requires specialist allergy referral for formal testing. Non-IgE-mediated CMPA is more common and usually manageable in primary care with appropriate dietary exclusion and dietician support.',
    },

    { type: 'heading', level: 2, text: 'Management by Feeding Type' },

    {
      type: 'list',
      items: [
        'Formula-fed: switch to extensively hydrolysed formula (EHF) first line; if symptoms persist after 2–4 weeks, escalate to amino acid formula (AAF)',
        "Breastfed: exclude ALL cow's milk from the mother's diet for 2–4 weeks; supplement mother with 1g calcium + 10 mcg vitamin D daily to prevent deficiency",
        'Mixed-fed: apply both approaches simultaneously',
        'Involve a paediatric dietician in all cases to ensure nutritional adequacy',
        'IgE-mediated: refer to allergy clinic for formal diagnosis (SPT/RAST) alongside dietary exclusion',
      ],
    },

    { type: 'heading', level: 2, text: 'Hypoallergenic Formula Guide' },

    {
      type: 'table',
      headers: ['Type', 'Examples', 'Notes'],
      rows: [
        ['Extensively Hydrolysed Formula (EHF)', 'Aptamil Pepti 1 (birth), Aptamil Pepti 2 (>6 months); Nutramigen LGG 1/2; SMA Althera', 'First-line for non-IgE CMPA. Nutramigen contains lactose — avoid if significant GI symptoms. "2" formulas = follow-on, only after 6 months'],
        ['Amino Acid Formula (AAF)', 'Nutramigen Puramino; SMA Alfamino; Neocate LCP', 'Used if EHF fails after 2–4 weeks, or for severe/IgE-mediated CMPA. Lactose-free and fully elemental'],
      ],
      caption: 'Monthly prescribing quantity: <6 months = 10 × 400g tins/month; >6 months = 6–8 × 400g tins/month. Always prescribe by brand to avoid inadvertent switching.',
    },

    { type: 'heading', level: 2, text: 'Non-IgE CMPA — Primary Care Management Pathway' },

    {
      type: 'list',
      items: [
        'Start exclusion diet (2–4 weeks): switch formula to EHF or exclude dairy from maternal diet',
        'If improved after 2–4 weeks: consider home milk challenge (reintroduce dairy gradually) to confirm diagnosis',
        'If symptoms recur on reintroduction: confirms CMPA — continue exclusion until 9–12 months, then start milk ladder',
        "If no improvement: reconsider diagnosis; refer if persistent symptoms, FTT, severe eczema, or persistent bloody stool",
        "If never formally challenged: refer to dietician and consider onward referral if uncertainty",
        'Milk ladder: structured stepwise reintroduction starting with cooked/baked milk (less allergenic) — use GP Infant Feeding Network (GPIFN) milk ladder',
        'Most children tolerate milk by 12–18 months; ~15% still affected at age 3',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Eczema + CMPA',
      items: [
        "If eczema is the only symptom, management is broadly the same as for non-IgE CMPA — dietary exclusion trial + topical steroids + emollients",
        'Refer to dermatology if eczema is severe or not responding to standard treatment',
        "Do NOT perform SPT/RAST for non-IgE-mediated symptoms — IgE tests will be negative and may mislead",
        'Patch testing is not routinely recommended for CMPA',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'When to Refer or Admit Urgently',
      items: [
        'IgE-mediated CMPA: refer ALL to allergy clinic — risk of anaphylaxis',
        'Faltering growth (FTT) or failure to thrive despite management: refer to paediatrics',
        'Persistent bloody stools: refer to paediatrics to exclude proctocolitis or other bowel pathology',
        'Severe eczema not controlled: refer to dermatology',
        'Anaphylaxis: 999 immediately; prescribe adrenaline autoinjector and refer allergy clinic',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Allergy clinic (IgE-mediated CMPA): UHDB Queen\'s Hospital Burton — paediatric allergy; refer via e-RS',
        'Alternative: Good Hope Hospital (UHB) paediatric allergy or Birmingham Children\'s Hospital for complex cases',
        'Paediatric dietician: UHDB Burton community dietetics; include CMPA + current formula + feeding history in referral',
        'If severe eczema: UHDB Burton or Good Hope dermatology',
        'Patient resources: GP Infant Feeding Network (gpifn.org.uk) — includes milk ladder and formula guides',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — CMPA', url: 'https://cks.nice.org.uk/topics/cows-milk-allergy-in-children/' },
        { label: 'GP Infant Feeding Network — Milk Ladder', url: 'https://gpifn.org.uk/cma/' },
        { label: 'BSACI — CMPA Guidelines', url: 'https://www.bsaci.org/guidelines/bsaci-guidelines/cows-milk-allergy-in-children/' },
        { label: 'NHS — CMPA', url: 'https://www.nhs.uk/conditions/cows-milk-allergy/' },
      ],
    },
  ],
}
