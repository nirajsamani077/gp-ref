import type { Note } from '../data/notes'

export const nsaids: Note = {
  id: 'nsaids',
  title: 'NSAIDs — Safe Prescribing',
  subtitle: 'Topical vs oral, GI/CV/renal risk by agent, PPI co-prescribing, the "triple whammy" and key cautions',
  tags: ['drugs', 'pain'],

  body: `NSAIDs non-steroidal anti-inflammatory topical ibuprofen naproxen diclofenac COX-2 celecoxib etoricoxib meloxicam GI bleeding cardiovascular renal PPI gastroprotection co-prescribing triple whammy AKI CKD heart failure hypertension pregnancy ductus arteriosus aspirin asthma clopidogrel lithium methotrexate`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'NSAIDs are highly effective analgesics/anti-inflammatories but carry dose-related gastrointestinal, cardiovascular and renal risks that are easy to underestimate in routine prescribing. The safe-prescribing rules are simple: use topical where possible; if oral, choose the lowest-risk agent at the lowest effective dose for the shortest time, with a PPI; and avoid specific high-risk combinations and patient groups.',
    },

    { type: 'heading', level: 2, text: 'Topical NSAIDs — Use First Where Possible' },
    {
      type: 'list',
      items: [
        'Topical NSAIDs (diclofenac, ibuprofen, ketoprofen gels) have minimal systemic absorption and no meaningful increase in GI or cardiovascular risk.',
        'First-line for localised musculoskeletal pain — NICE recommends them ahead of oral NSAIDs for knee and hand osteoarthritis.',
      ],
    },

    { type: 'heading', level: 2, text: 'Oral NSAIDs — Risk by Agent' },
    {
      type: 'table',
      headers: ['Agent', 'GI risk', 'CV risk', 'Notes'],
      rows: [
        ['Ibuprofen (≤1200 mg/day)', 'Lowest', 'Lowest', 'Preferred low-risk option; high-dose ibuprofen (2400 mg) loses this advantage'],
        ['Naproxen (1000 mg/day)', 'Moderate', 'Relatively CV-neutral', 'Often preferred where CV risk is a concern'],
        ['Diclofenac', 'High', 'Highest', 'Avoid in CV disease — CV risk similar to COX-2 inhibitors'],
        ['COX-2 inhibitors (celecoxib, etoricoxib, meloxicam)', 'Lower GI risk', 'High CV risk', 'Lower GI bleeding but raised CV risk — generally avoid unless a specific GI indication'],
      ],
      caption: 'General rule: naproxen or low-dose ibuprofen, lowest effective dose, shortest duration, with a PPI.',
    },

    { type: 'heading', level: 2, text: 'Gastroprotection & GI Safety' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Co-prescribe a PPI When…',
      items: [
        'Co-prescribe a PPI with oral NSAIDs in: anyone aged ≥45 (per local guidance), a history of GORD/peptic ulcer, or those on antithrombotics.',
        'Highest GI-bleed risk combinations: NSAID + aspirin/antiplatelet, NSAID + anticoagulant, NSAID + SSRI/SNRI, and the elderly.',
        'PPI choice with clopidogrel: AVOID omeprazole/esomeprazole (CYP2C19 interaction reduces clopidogrel efficacy) — use lansoprazole or pantoprazole.',
        'Warn patients about symptoms of GI bleeding (melaena, haematemesis, new dyspepsia) and to stop and seek help.',
      ],
    },

    { type: 'heading', level: 2, text: 'Renal, Cardiac & Other Cautions' },
    {
      type: 'callout',
      variant: 'danger',
      title: 'The "Triple Whammy" → Acute Kidney Injury',
      items: [
        'NSAID + ACE inhibitor/ARB + diuretic → significant AKI risk (especially in the elderly or during intercurrent illness/dehydration). Avoid the combination; issue "sick-day" advice to hold the NSAID (and often the ACEi/diuretic) during acute illness.',
      ],
    },
    {
      type: 'table',
      headers: ['Situation', 'Guidance'],
      rows: [
        ['CKD', 'Avoid where possible; if unavoidable, lowest dose and monitor eGFR/potassium; avoid if eGFR <30'],
        ['Heart failure / uncontrolled hypertension', 'Avoid — fluid retention worsens both'],
        ['Pregnancy', 'Avoid, especially 1st and 3rd trimesters (3rd: premature ductus arteriosus closure, oligohydramnios; also affects fertility/implantation)'],
        ['Asthma', 'Ask first — a minority have NSAID-sensitive asthma (can provoke severe bronchospasm)'],
        ['Interactions', 'Raise lithium and methotrexate levels (toxicity); reduce diuretic/antihypertensive efficacy; additive bleeding with anticoagulants'],
      ],
    },
    {
      type: 'list',
      items: [
        'Always review the indication and STOP when no longer needed; do not continue open-ended NSAID prescriptions without review.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — NSAIDs Prescribing Issues', url: 'https://cks.nice.org.uk/topics/nsaids-prescribing-issues/' },
        { label: 'MHRA — Drug Safety Update (NSAIDs)', url: 'https://www.gov.uk/drug-safety-update' },
        { label: 'BNF — NSAIDs', url: 'https://bnf.nice.org.uk/treatment-summaries/analgesics/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'osteoarthritis', label: 'Osteoarthritis', subtitle: 'Topical-first NSAID strategy and the analgesia ladder' },
        { id: 'gord-dyspepsia', label: 'GORD & Dyspepsia', subtitle: 'PPI use and NSAID-related dyspepsia/ulceration' },
        { id: 'ppi-deprescribing', label: 'PPIs — Side Effects & Deprescribing', subtitle: 'Reviewing co-prescribed gastroprotection' },
        { id: 'upper-gi-bleed', label: 'Upper GI Bleed', subtitle: 'A serious NSAID complication' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'NSAID nephrotoxicity and the triple whammy' },
        { id: 'aki', label: 'Acute Kidney Injury', subtitle: 'NSAID + ACEi/ARB + diuretic = AKI risk' },
      ],
    },

  ],
}
