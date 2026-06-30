import type { Note } from '../data/notes'

export const renalStones: Note = {
  id: 'renal-stones',
  title: 'Renal & Ureteric Stones',
  subtitle: 'Loin-to-groin colic, the infected obstructed kidney emergency, CT KUB, MET and prevention',
  tags: ['urology'],

  body: `renal stones ureteric colic nephrolithiasis loin to groin pain haematuria CT KUB non-contrast tamsulosin medical expulsive therapy lithotripsy ureteroscopy PCNL nephrostomy infected obstructed stone sepsis calcium oxalate uric acid struvite prevention fluid intake NSAID diclofenac`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG118 — Renal & Ureteric Stones', url: 'https://www.nice.org.uk/guidance/ng118' },
        { label: 'NICE CKS — Renal/Ureteric Colic', url: 'https://cks.nice.org.uk/topics/renal-or-ureteric-colic-acute/' },
        { label: 'BAUS — Kidney Stones', url: 'https://www.baus.org.uk/patients/conditions/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Presentation' },

    {
      type: 'list',
      items: [
        'Classic: sudden severe colicky "loin-to-groin" pain; the patient is restless and cannot get comfortable (contrast with peritonitis, where they lie still)',
        'Associated: visible haematuria, urinary urgency/strangury, nausea and vomiting',
        'Pain location reflects stone position — flank/renal angle (kidney/upper ureter) radiating to groin/genitalia (lower ureter)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Do Not Miss',
      items: [
        'Infected, obstructed kidney = urological EMERGENCY: stone + fever/systemic upset/sepsis → needs urgent decompression (nephrostomy or stent) and IV antibiotics — admit immediately',
        'Leaking/ruptured AAA in an older "vasculopath" presenting as "renal colic" — always consider, examine for a pulsatile mass',
        'Testicular torsion in men, and ectopic pregnancy / ovarian torsion in women — do a pregnancy test in any woman of childbearing age',
        'Bilateral obstruction or obstruction of a single functioning kidney → AKI; check renal function',
      ],
    },

    { type: 'heading', level: 2, text: 'Investigations' },

    {
      type: 'list',
      items: [
        'Non-contrast CT KUB is the gold-standard imaging — arrange urgently (ideally within 24 hours); ultrasound is preferred first-line in children and pregnant women (avoid radiation)',
        'Urine dipstick (haematuria supports but its absence does not exclude a stone) and MSU for infection',
        'Bloods: FBC, U&E (renal function), CRP, and serum calcium and urate (and consider parathyroid hormone if hypercalcaemia)',
        'Most patients with acute stone disease are assessed in/via secondary care (ED/urology) for imaging and analgesia',
      ],
    },

    { type: 'heading', level: 2, text: 'Acute Management' },

    {
      type: 'table',
      headers: ['Element', 'Detail'],
      rows: [
        ['Analgesia (first-line)', 'An NSAID is first-line and most effective — e.g. PR diclofenac, IM ketorolac, or oral; more effective than opioids for colic'],
        ['Second-line analgesia', 'IV paracetamol or opioids if NSAIDs contraindicated/insufficient'],
        ['Antiemetic', 'For associated nausea/vomiting'],
        ['Medical expulsive therapy (MET)', 'Alpha-blocker (tamsulosin) to aid spontaneous passage of distal ureteric stones <10 mm'],
        ['Urgent intervention', 'Infected obstructed system, AKI, uncontrolled pain, or large/non-passing stone → urology for decompression/definitive treatment'],
      ],
    },

    { type: 'heading', level: 2, text: 'Definitive Treatment' },

    {
      type: 'list',
      items: [
        'Many small stones (<5 mm) pass spontaneously with conservative management and MET',
        'Extracorporeal shockwave lithotripsy (ESWL) — non-invasive, for suitable smaller stones',
        'Ureteroscopy (URS) with laser fragmentation — for ureteric and many renal stones',
        'Percutaneous nephrolithotomy (PCNL) — for large or staghorn (struvite) stones',
        'Emergency stent or nephrostomy if obstructed/infected',
      ],
    },

    { type: 'heading', level: 2, text: 'Prevention' },

    {
      type: 'list',
      items: [
        'High fluid intake (~2.5–3 L/day) to keep urine dilute — the single most effective measure; avoid fizzy/sugary drinks',
        'Reduce dietary salt (<6 g/day); maintain normal dietary calcium (do not restrict — low calcium increases oxalate absorption)',
        'Calcium oxalate stones are the most common — moderate oxalate-rich intake (reduce excess: spinach, rhubarb, nuts, chocolate, tea) and reduce excess animal protein',
        'Uric acid stones: reduce purine intake, urinary alkalinisation; struvite stones relate to chronic infection',
        'For recurrent stones: potassium citrate or a thiazide diuretic may be used (off-licence) — specialist-guided; consider metabolic stone screen',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haematuria', label: 'Haematuria', subtitle: 'Stones are a common cause; persistent haematuria needs a 2WW assessment' },
        { id: 'aki', label: 'Acute Kidney Injury', subtitle: 'Obstructive (post-renal) AKI from stones' },
        { id: 'hypercalcaemia', label: 'Hypercalcaemia', subtitle: 'Primary hyperparathyroidism — a treatable cause of recurrent stones' },
        { id: 'uti-women', label: 'UTI in Women', subtitle: 'Infected obstructed stone is the emergency to exclude' },
        { id: 'aaa', label: 'Abdominal Aortic Aneurysm', subtitle: 'Leaking AAA can mimic renal colic in older patients' },
      ],
    },

  ],
}
