import type { Note } from '../data/notes'

export const sorethroatTonsillitis: Note = {
  id: 'sorethroat-tonsillitis',
  title: 'Sore Throat & Tonsillitis',
  subtitle: 'FEVER PAIN / Centor scoring, antibiotics, complications, tonsillectomy criteria',
  tags: ['ent', 'infection', 'antibiotics', 'paediatrics'],

  body: 'sore throat tonsillitis pharyngitis strep GAS group A streptococcal Centor FEVER PAIN score penicillin pen V amoxicillin clarithromycin erythromycin dexamethasone difflam quinsy peritonsillar abscess epiglottitis scarlet fever glandular fever EBV monospot pertussis diphtheria oropharyngeal cancer tonsillectomy OSA recurrent',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Fact',
      items: [
        'Nearly **90% of sore throats resolve within 1 week without treatment**',
        'To prevent **1 case of quinsy** you would need to prescribe antibiotics to **>4000 patients** — most benefit is marginal',
      ],
    },

    // ── SCORING ──────────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'FEVER PAIN & Centor Scoring',
    },
    {
      type: 'para',
      text: 'Both scores use the same clinical criteria (score 1 point each). **Score 3–4 → consider immediate or delayed antibiotic prescription** for possible Group A Streptococcal (GAS) infection. **Do not use in children <3 years old.**',
    },
    {
      type: 'table',
      headers: ['Criterion', 'Score'],
      rows: [
        ['**F**ever (temp >38°C)', '1'],
        ['T**E**nder anterior cervical lymph nodes', '1'],
        ['**V**oice hoarse / no cough', '1 (for Centor: no cough = 1)'],
        ['**E**xudates on tonsils', '1'],
        ['**R**apidly presenting (≤3d) — FEVER PAIN only', '1'],
        ['**P**atchiness / purulence — FEVER PAIN only', '1'],
        ['Score ≤2', 'No antibiotic (safety net)'],
        ['Score 3–4', 'Immediate or delayed antibiotic script'],
      ],
    },

    // ── ANTIBIOTICS ──────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Antibiotic Choice',
    },
    {
      type: 'list',
      items: [
        '**1st line: Phenoxymethylpenicillin (Pen V) 500 mg QDS × 5–10 days** (check BNFc for children)',
        '**Children with low risk of glandular fever: Amoxicillin** 500 mg TDS × 5–10 days (avoid if GF suspected — causes rash)',
        '**Penicillin allergy: Clarithromycin 500 mg BD × 5 days** or Erythromycin 500 mg BD–QDS × 5 days',
        '**Oral dexamethasone 8–10 mg** (or 0.6 mg/kg in children) — single dose, reduces swelling & pain; not routinely advised',
        'Supportive: Difflam spray/gargle, adequate analgesia, fluids, bed rest, safety-net for airway symptoms',
      ],
    },

    // ── COMPLICATIONS ────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Complications & Mimics',
    },
    {
      type: 'callout',
      variant: 'danger',
      title: '🚨 Airway Emergencies — 999',
      items: [
        '**Quinsy (peritonsillar abscess):** Trismus, hot potato voice, can\'t swallow saliva, uvula displaced, drooling, toxic — **A&E for I&D by ENT**',
        '**Epiglottitis:** Child sitting forward, toxic, stridor — **do NOT examine, 999 immediately**',
      ],
    },
    {
      type: 'table',
      headers: ['Diagnosis', 'Features', 'Management'],
      rows: [
        [
          'Scarlet fever',
          'GAS + sore throat + fever + macular blotchy rash (torso) + sandpaper texture (sunburn with goose pimples) + strawberry tongue, perioral pallor, flushed face, lymphadenopathy',
          '**Notifiable disease** — Pen V or Amoxicillin',
        ],
        [
          'Glandular fever (EBV)',
          '"Kissing disease" — prolonged pharyngitis, fever, ++ cervical LN, splenomegaly; FBC shows lymphocytosis; Monospot or EBV IgM +ve',
          'Bed rest, fluids, resolves ~1 month; **avoid contact/impact sport** (splenic rupture risk)',
        ],
        [
          'Diphtheria',
          'Now very rare (vaccination); unvaccinated patient with bull neck lymphadenopathy + grey-green tonsillar membrane',
          'Diphtheria swab + **notify PHE** + antibiotics + antitoxin',
        ],
        [
          'Oropharyngeal cancer',
          'Tonsillitis rare in >45s — consider if persistent pharyngitis, cervical LN, ear pain (otalgia), odynophagia in smoker/drinker',
          '2WW urgent referral',
        ],
      ],
      caption: 'Key mimics — Diphtheria is notifiable; GF: avoid amoxicillin (rash)',
    },

    // ── TONSILLECTOMY ────────────────────────────────────────────────────────
    {
      type: 'heading',
      level: 2,
      text: 'Tonsillectomy Indications (Paradise Criteria)',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Recurrence thresholds (note: risk of PTB & airway complications)',
      items: [
        '>7 documented episodes in the **last year**',
        '>5 episodes per year for **2 consecutive years**',
        '>3 episodes per year for **3 consecutive years**',
        'Other: **OSA in children**, renal disease from recurrent GAS, oropharyngeal tumour, quinsy',
      ],
    },

    // ── LINKS ────────────────────────────────────────────────────────────────
    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG84 – Sore throat (acute)', url: 'https://www.nice.org.uk/guidance/ng84' },
        { label: 'NICE – Tonsillitis (CKS)', url: 'https://cks.nice.org.uk/topics/tonsillitis/' },
        { label: 'PHE Scarlet fever guidance', url: 'https://www.gov.uk/guidance/scarlet-fever-guidance-data-and-analysis' },
      ],
    },
  ],
}
