import type { Note } from '../data/notes'

export const nsaids: Note = {
  id: 'nsaids',
  title: 'NSAIDs — Safe Prescribing',
  subtitle: 'Topical vs oral, GI/CV/renal risk by agent, PPI co-prescribing and key cautions',
  tags: ['drugs', 'pain'],

  body: `NSAIDs non-steroidal anti-inflammatory topical ibuprofen naproxen diclofenac COX-2 celecoxib etoricoxib meloxicam GI risk cardiovascular risk renal PPI co-prescribing triple whammy CKD pregnancy aspirin gastroprotection`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — NSAIDs Prescribing Issues', url: 'https://cks.nice.org.uk/topics/nsaids-prescribing-issues/' },
        { label: 'MHRA — NSAID Safety', url: 'https://www.gov.uk/drug-safety-update' },
      ],
    },

    { type: 'heading', level: 2, text: 'Topical NSAIDs — Use First Where Possible' },

    {
      type: 'list',
      items: [
        'Topical NSAIDs (diclofenac, ibuprofen, ketoprofen gels) are much safer than oral — minimal systemic absorption and no meaningful increase in GI or cardiovascular risk',
        'First-line for localised musculoskeletal pain, especially knee and hand osteoarthritis',
      ],
    },

    { type: 'heading', level: 2, text: 'Oral NSAIDs — Risk by Agent' },

    {
      type: 'table',
      headers: ['Agent', 'GI risk', 'CV risk', 'Notes'],
      rows: [
        ['Ibuprofen (low dose, ≤1200 mg/day)', 'Lowest', 'Lowest', 'Preferred low-risk option; high-dose ibuprofen (2400 mg) loses this advantage'],
        ['Naproxen', 'Moderate', 'Moderate (relatively CV-neutral)', 'Often preferred when CV risk is a concern'],
        ['Diclofenac', 'High', 'Highest', 'Avoid in cardiovascular disease; similar CV risk to COX-2 inhibitors'],
        ['COX-2 inhibitors (celecoxib, etoricoxib, meloxicam)', 'Lower GI risk', 'High CV risk', 'Lower GI bleeding but raised CV risk — generally avoid unless specific GI indication'],
      ],
      caption: 'General rule: use naproxen or low-dose ibuprofen, at the lowest effective dose, for the shortest time — with a PPI.',
    },

    { type: 'heading', level: 2, text: 'Gastroprotection & GI Safety' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Co-prescribe a PPI When...',
      items: [
        'Co-prescribe a PPI with oral NSAIDs in: anyone aged ≥45 (lower threshold per local guidance), a history of GORD/peptic ulcer, or those on antithrombotics where bleeding risk is highest',
        'Highest GI risk: NSAID + aspirin/antiplatelet, NSAID + anticoagulant, NSAID + SSRI, and the elderly',
        'PPI choice with clopidogrel: avoid omeprazole/esomeprazole (CYP2C19 interaction reduces clopidogrel efficacy) — use lansoprazole or pantoprazole',
      ],
    },

    { type: 'heading', level: 2, text: 'Renal, Cardiac & Other Cautions' },

    {
      type: 'list',
      items: [
        '"Triple whammy" — NSAID + ACE inhibitor/ARB + diuretic → significant acute kidney injury risk; avoid the combination, especially in the elderly or intercurrent illness',
        'CKD: avoid NSAIDs where possible; if unavoidable, use the lowest dose and monitor eGFR/potassium',
        'Heart failure and uncontrolled hypertension: NSAIDs cause fluid retention and worsen both — avoid',
        'Pregnancy: avoid NSAIDs, especially in the first and third trimesters (third trimester — premature ductus arteriosus closure, oligohydramnios)',
        'Asthma: a minority have NSAID-sensitive asthma — ask before prescribing',
        'Always review the indication and stop when no longer needed; warn patients about GI bleeding symptoms',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Topical-first NSAID strategy and the analgesia ladder' },
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'PPI use and NSAID-related dyspepsia/ulceration' },
        { id: 'upper-gi-bleed', label: 'Upper GI Bleed', subtitle: 'A serious NSAID complication' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'NSAID nephrotoxicity and the triple whammy' },
        { id: 'aki', label: 'Acute Kidney Injury', subtitle: 'NSAID + ACEi/ARB + diuretic = AKI risk' },
      ],
    },

  ],
}
