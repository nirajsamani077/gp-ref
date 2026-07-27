import type { Note } from '../data/notes'

export const hsp: Note = {
  id: 'hsp',
  title: 'Henoch-Schönlein Purpura (IgA Vasculitis)',
  subtitle: 'The classic tetrad, distinguishing it from meningococcal sepsis, and the renal-surveillance schedule',
  tags: ['paediatrics'],

  body: `Henoch-Schonlein purpura HSP IgA vasculitis palpable purpura buttocks legs arthralgia abdominal pain intussusception nephritis haematuria proteinuria post-streptococcal blood pressure urine dipstick renal monitoring self-limiting`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Henoch-Schönlein purpura (now termed IgA vasculitis) is the commonest vasculitis of childhood — a small-vessel, IgA-mediated vasculitis, often following an upper respiratory infection. It is usually self-limiting, but two things demand attention: it must be distinguished at presentation from meningococcal sepsis, and it can cause a nephritis that may declare itself weeks later — so every child needs a period of blood-pressure and urine surveillance.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'First — Is This Meningococcal Sepsis?',
      items: [
        'A non-blanching (purpuric) rash in an unwell or febrile child must be treated as meningococcal disease until proven otherwise → 999 + IM benzylpenicillin (see Meningitis).',
        'HSP is a diagnosis made in a WELL child with the characteristic distribution and no features of sepsis — if in any doubt, treat for sepsis first.',
      ],
    },

    { type: 'heading', level: 2, text: 'The Classic Tetrad' },
    {
      type: 'table',
      headers: ['Feature', 'Detail'],
      rows: [
        ['Palpable purpura', 'Symmetrical, over the buttocks and extensor surfaces of the legs (and arms); non-blanching, may be preceded by urticaria — the cardinal, required feature'],
        ['Arthralgia/arthritis', 'Painful, swollen large joints (knees, ankles) — transient, no lasting damage'],
        ['Abdominal pain', 'Colicky; can be complicated by GI bleeding and, rarely, intussusception (ileo-ileal) — watch for severe pain/vomiting/blood in stool'],
        ['Renal involvement (nephritis)', 'Haematuria ± proteinuria; usually mild but is the main determinant of long-term outcome'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Largely a clinical diagnosis. Check BLOOD PRESSURE and a URINE DIPSTICK (blood/protein) at diagnosis in every child.',
        'Bloods are not always needed but consider FBC (platelets are NORMAL — a low platelet count points to another cause), U&E, and a urine protein:creatinine ratio if dipstick-positive.',
        'Refer/admit if: diagnostic uncertainty, severe abdominal pain or suspected intussusception, significant GI bleeding, renal impairment/hypertension/nephrotic-range proteinuria, or the child is systemically unwell.',
      ],
    },

    { type: 'heading', level: 2, text: 'Management & Renal Surveillance' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Mostly Supportive — but Monitor the Kidneys',
      items: [
        'Most cases are self-limiting over ~4–6 weeks; treatment is supportive — rest, hydration and simple analgesia (paracetamol; NSAIDs can help joint pain but avoid if renal involvement or GI bleeding).',
        'Corticosteroids are NOT routinely given for the rash/joints but may be used (specialist) for severe abdominal pain or significant nephritis.',
        'Renal monitoring is essential because nephritis can appear or worsen after the acute illness: check BP and urine dipstick regularly (e.g. weekly initially, then at intervals) for up to 6–12 months.',
        'Refer to paediatric nephrology for persistent proteinuria, hypertension, impaired renal function, or nephrotic/nephritic features — a small minority develop chronic kidney disease.',
        'Relapses (usually milder) occur in up to a third, typically within a few months.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Henoch-Schönlein Purpura', url: 'https://cks.nice.org.uk/topics/henoch-schonlein-purpura/' },
        { label: 'RCPCH — HSP Guidance', url: 'https://www.rcpch.ac.uk/' },
        { label: 'GOSH — HSP Information', url: 'https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/henoch-schonlein-purpura/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'meningitis', label: 'Meningitis & Meningococcal Sepsis', subtitle: 'The must-exclude cause of a non-blanching rash' },
        { id: 'feverish-child', label: 'Feverish Child Under 5', subtitle: 'Assessing the unwell child with a rash' },
        { id: 'proteinuria-nephrotic', label: 'Proteinuria & Nephrotic Syndrome', subtitle: 'Assessing the nephritis component' },
        { id: 'platelets-bruising', label: 'Thrombocytopenia & Bruising', subtitle: 'Purpura with LOW platelets — a different pathway' },
      ],
    },

  ],
}
