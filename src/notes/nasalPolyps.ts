import type { Note } from '../data/notes'

export const nasalPolyps: Note = {
  id: 'nasal-polyps',
  title: 'Nasal Polyps',
  subtitle: 'Diagnosis · Treatment ladder · Fluticasone drops · ENT referral · Samter\'s triad',
  tags: ['ent'],
  body: 'nasal polyps rhinosinusitis CRS anosmia obstruction mometasone fluticasone propionate nasal drops betamethasone prednisolone oral steroids head hanging position samters triad asthma aspirin sensitivity NSAID surgery endoscopic sinus surgery polypectomy montelukast unilateral bleeding red flag inverted papilloma malignancy',
  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Nasal polyps are chronic inflammatory, oedematous tissue growths arising from the paranasal sinus mucosa. They represent a subgroup of chronic rhinosinusitis with nasal polyps (CRSwNP). They are NOT associated with allergic rhinitis — although both conditions can coexist. At least one-third of patients with nasal polyps also have asthma.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Key Facts',
      items: [
        'Cardinal symptoms: hyposmia/anosmia + constant nasal obstruction + rhinorrhoea',
        'Polyps are usually bilateral — unilateral polyp is a red flag',
        'NOT caused by allergic rhinitis (polyps are no more common in atopic patients)',
        'Nasal polyps are rare in children — consider cystic fibrosis if found in young patients',
        'Surgery is NOT curative — opens sinus space for topical steroids to penetrate; long-term INCS required post-operatively',
        'Aetiology unknown — chronic eosinophilic inflammation; likely multifactorial',
      ],
    },

    { type: 'heading', level: 2, text: 'Associated Conditions' },
    {
      type: 'table',
      headers: ['Condition', 'Detail'],
      rows: [
        ['Chronic rhinosinusitis', 'Nasal polyps are a subtype of CRS — manage CRS concurrently with nasal saline irrigation and INCS'],
        ['Asthma', '≥1/3 of polyp patients have asthma; treating rhinosinusitis can improve asthma control'],
        ["Samter's Triad", 'Nasal polyps + asthma + aspirin/NSAID sensitivity — see callout below'],
        ['Cystic fibrosis', 'Polyps in children or young adults — screen with sweat test'],
        ['Churg-Strauss / EGPA', 'Eosinophilic granulomatosis with polyangiitis — consider if asthma + sinusitis + eosinophilia + multi-organ symptoms'],
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: "Samter's Triad (Aspirin-Exacerbated Respiratory Disease)",
      items: [
        'Triad: nasal polyps + asthma + aspirin/NSAID sensitivity',
        'NSAIDs trigger severe bronchospasm and acute rhinitis flare',
        'Advise strict avoidance of all NSAIDs and aspirin',
        'Paracetamol generally safe at standard doses (higher doses may have minor cross-reactivity)',
        'Consider montelukast (LTRA) — anti-inflammatory benefit in this group',
        'Refer to ENT and allergy for formal assessment',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis & Examination' },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Distinguishing Polyps from Turbinates on Examination',
      items: [
        'Polyps: pale grey/translucent; insensate — do not feel touch when probed; mobile',
        'Turbinates: pink/reddish; sensitive to probing (will feel light touch) — this is the key discriminatory sign',
        'Use Thudichum\'s nasal speculum + headlight for best visualisation; otoscope acceptable if speculum unavailable',
        'Polyps typically bilateral and arise from the middle meatus',
        'Young people with allergic rhinitis may be misdiagnosed — polyps are rare in the young; be confident before treating with systemic steroids',
        'Radiological imaging (CT sinus) is NOT required before a trial of treatment — only needed pre-operatively',
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags — Refer Urgently (2WW if suspected malignancy)',
      items: [
        'Unilateral polyp with ipsilateral epistaxis and NO prior history of polyps → could be inverted papilloma or malignancy (adenocarcinoma, SCC, lymphoma)',
        'Facial swelling or bony destruction',
        'Cervical lymphadenopathy',
        'Visual disturbance or proptosis',
        'If the patient HAS a known prior history of idiopathic polyps → a 1-month treatment trial is reasonable before referring if no response',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment Ladder' },
    {
      type: 'para',
      text: 'Management is long-term and generally not curative. Aim is symptom control and quality of life improvement. Steroids are the cornerstone — use the lowest effective dose. Patients should not remain long-term on anything higher than Step 1.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Step 1 — Regular Intranasal Corticosteroid Spray (Long-Term)',
      items: [
        'Mometasone furoate 50 mcg/spray: 2 sprays each nostril BD initially (6 weeks), then reduce to 2 sprays each nostril OD maintenance',
        'Fluticasone furoate 27.5 mcg/spray (Avamys): 2 sprays each nostril OD; can increase to BD; reduce to 1 OD when controlled',
        'Both have 0.5% systemic bioavailability — safe for long-term use',
        'Correct technique essential — look down, outside wall, do not sniff hard (see rhinosinusitis note)',
        'Nasal saline irrigation concurrently — improves drug penetration',
        'Assess response after 4 weeks — if inadequate, step up',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Step 2 — ADD Betamethasone 0.1% Nasal Drops',
      items: [
        'Betamethasone sodium phosphate 0.1% drops — 2–3 drops each nostril BD (2–4 weeks)',
        'Must be administered in HEAD-HANGING POSITION (see technique below) — improves mucosal penetration',
        'Not for long-term use — step down to INCS spray once symptoms improve',
        'If symptoms recur: restart betamethasone drops; consider progressing to Step 3',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Step 3 — Fluticasone Propionate Nasal Drops (Specialist Initiation)',
      items: [
        'Stop current INCS spray and betamethasone drops',
        'Fluticasone propionate 400 mcg/unit nasal drops — 200 mcg (approx. 6 drops) each nostril OD or BD',
        'Head-hanging position — essential (see technique below)',
        'Course: typically 6 weeks (up to 2 months in moderate deterioration on specialist advice)',
        'If effective: step down to INCS spray (Step 1) for maintenance',
        'Initiate on specialist recommendation / ENT advice',
        'Not for long-term use due to systemic absorption',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Step 4 — Oral Prednisolone (Steroid Rescue Course)',
      items: [
        'Only if obvious polyps with severe symptoms AND confirmed diagnosis by ENT/otolaryngologist',
        'Tayside/Derbyshire protocol: 20–25 mg prednisolone OD for 14 days (combined with 6 weeks fluticasone drops)',
        'Derbyshire step-down protocol: 60 mg day 1–3 → 40 mg → 20 mg → 10 mg (3 days each step), followed by fluticasone drops then INCS spray',
        'Can be repeated up to twice per year — if fails, refer ENT',
        'Standard prednisolone precautions: diabetes, bone protection if repeated courses, adrenal insufficiency risk if concurrent ICS/topical steroids',
        'If diagnosis NOT confirmed by ENT — do NOT prescribe systemic steroids',
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Step 5 — Refer ENT',
      items: [
        'Complete obstruction despite treatment',
        'Poor response to adequate INCS trial (3 months) — check compliance and technique first',
        'Poor response to fluticasone drops or oral steroids + fluticasone drops',
        '>3 acute exacerbations per year requiring antibiotics',
        'Any red flag features (unilateral, bleeding, bony involvement)',
        'Post-operative patients: budesonide respules (0.5 mg/2 mL in 240 mL saline irrigation BD) may be used as post-operative irrigation under ENT supervision',
        'Explain to patients: surgery is not curative — opens space for INCS to reach target tissue; long-term topical steroids must continue post-operatively',
      ],
    },

    { type: 'heading', level: 2, text: 'Nasal Drops — Head-Hanging Technique' },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Head-Hanging Position for Nasal Drops',
      items: [
        'Option 1 (standing): blow nose, stand up and bend right over so top of head faces floor',
        'Option 2 (kneeling): kneel down and bend right over (prayer/Mecca position)',
        'Option 3 (lying): lie on bed with head tilted over the edge',
        'Once in position: insert nozzle into one nostril; squeeze container until sides touch (~half dose, ~6 drops)',
        'Repeat in other nostril using remaining solution',
        'Remain with head down for AT LEAST 1 minute after instillation',
        'If lying: tilt head sideways on bed for at least 1 minute',
        'Avoid getting drops in eyes — if this occurs, rinse immediately with water',
        'Do nasal saline irrigation BEFORE drops for best penetration',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Sinusitis (incl. polyps)', url: 'https://cks.nice.org.uk/topics/sinusitis/' },
        { label: 'EPOS 2020 — European Guidelines', url: 'https://www.rhinologyjournal.com/Abstract.php?id=1015' },
        { label: 'BSACI Nasal Polyposis Guidelines', url: 'https://www.bsaci.org/guidelines/bsaci-guidelines/rhinosinusitis-and-nasal-polyposis/' },
        { label: 'BMJ Best Practice — Nasal Polyps', url: 'https://bestpractice.bmj.com/topics/en-gb/367' },
        { label: 'Macular Society', url: 'https://www.nos.org.uk/' },
      ],
    },
  ],
}
