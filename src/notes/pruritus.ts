import type { Note } from '../data/notes'

export const pruritus: Note = {
  id: 'pruritus',
  title: 'Generalised Pruritus (Itch Without Rash)',
  subtitle: 'When the itch has no primary rash — the systemic screen, the malignancy red flags and symptomatic relief',
  tags: ['dermatology'],

  body: `pruritus itch generalised itching no rash systemic causes iron deficiency cholestasis liver renal uraemic thyroid polycythaemia lymphoma Hodgkin malignancy drug induced HIV pregnancy senile xerosis emollient menthol antihistamine colestyramine gabapentin phototherapy excoriation nocturnal aquagenic dermographism`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Pruritus is the sensation that provokes a desire to scratch. The single most useful clinical step is to decide whether there is a PRIMARY rash (a dermatosis) or whether the skin is essentially normal apart from secondary scratch marks (excoriations, lichenification). Itch without a primary rash points to a systemic cause and warrants a targeted screen for the "serious three" — infection, inflammation and malignancy.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'The Key Split — Is There a Primary Rash?',
      items: [
        'Itch WITH a primary rash → a dermatosis (eczema, urticaria, scabies, lichen planus, bullous disease, dermatitis herpetiformis) — diagnose and treat the skin condition.',
        'Itch WITHOUT a primary rash (only secondary excoriations) → screen for a systemic cause.',
        'SCABIES is the great mimic — always consider it (itchy household contacts, burrows in finger web spaces, worse at night). Treat empirically if suspected.',
        'Dermographism (a weal on stroking the skin) points to a physical urticaria.',
      ],
    },

    { type: 'heading', level: 2, text: 'Systemic Causes to Screen For' },
    {
      type: 'table',
      headers: ['Category', 'Examples & clues'],
      rows: [
        ['Haematological', 'Iron deficiency; polycythaemia vera (aquagenic itch after a hot bath/shower); lymphoma (Hodgkin\'s — itch with night sweats/weight loss)'],
        ['Hepatic / cholestatic', 'Primary biliary cholangitis, obstruction, drug cholestasis — itch, pale stools, dark urine, deranged LFTs (esp. ALP/GGT/bilirubin)'],
        ['Renal', 'Chronic kidney disease (uraemic pruritus), especially on dialysis'],
        ['Endocrine / metabolic', 'Thyroid disease (hyper- and hypo-), diabetes'],
        ['Infective', 'HIV, hepatitis; parasitic infestation'],
        ['Other', 'Drug-induced (opioids, statins, ACE-i, allopurinol); pregnancy (incl. obstetric cholestasis — check bile acids); polycythaemia; psychogenic; senile xerosis (dry skin — common in the elderly)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Examine the WHOLE skin (including web spaces, genitalia, scalp) for a primary rash, burrows and dermographism; note excoriations, prurigo nodules and lichenification.',
        'Systemic red flags: unexplained weight loss, night sweats, fatigue, jaundice, lymphadenopathy, and change in bowel/urinary habit.',
        'First-line bloods: FBC + ferritin, U&E/eGFR, LFTs (+GGT), TFTs, glucose/HbA1c; add ESR/LDH, HIV, and CXR if lymphoma/malignancy is suspected. In pregnancy check bile acids/LFTs (obstetric cholestasis).',
        'Consider age-appropriate malignancy screening if the itch is persistent and unexplained after a normal first-line panel — a raised incidence of malignancy is seen in the year after onset of unexplained generalised pruritus.',
      ],
    },

    { type: 'heading', level: 2, text: 'Symptomatic Management' },
    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['General skin care', 'Frequent emollients; soap substitutes; avoid hot baths, overheating and rough clothing (cotton); keep nails short; lukewarm showers'],
        ['Cooling agents', 'Menthol 1–2% in aqueous cream / emollient gives useful antipruritic cooling relief'],
        ['Sedating antihistamine', 'A sedating antihistamine (e.g. chlorphenamine, hydroxyzine) at NIGHT can aid sleep; non-sedating antihistamines have limited benefit in non-urticarial itch'],
        ['Cause-specific', 'Cholestatic itch: colestyramine (or specialist agents e.g. rifampicin, sertraline). Uraemic itch: emollients, gabapentin, UVB phototherapy — often specialist-directed'],
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Red flags for malignancy (weight loss, night sweats, lymphadenopathy)', 'Relevant 2WW / haematology', 'Urgent (2WW)'],
        ['Deranged LFTs / suspected cholestasis', 'Gastroenterology/hepatology', 'Routine–urgent'],
        ['Persistent unexplained pruritus despite normal screen', 'Dermatology', 'Routine'],
        ['Pregnancy with itch + raised bile acids (obstetric cholestasis)', 'Obstetrics', 'Urgent'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Itch (Widespread)', url: 'https://cks.nice.org.uk/topics/itch-widespread/' },
        { label: 'BAD — Itch (Pruritus) Patient Leaflet', url: 'https://www.bad.org.uk/pils/itch/' },
        { label: 'NICE NG12 — Suspected Cancer', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'British Skin Foundation', url: 'https://www.britishskinfoundation.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'scabies-lice', label: 'Scabies & Lice', subtitle: 'The classic mimic of unexplained itch' },
        { id: 'chronic-liver-disease', label: 'Chronic Liver Disease', subtitle: 'Cholestatic pruritus' },
        { id: 'ckd', label: 'Chronic Kidney Disease', subtitle: 'Uraemic pruritus' },
        { id: 'polycythaemia', label: 'Polycythaemia', subtitle: 'Aquagenic itch after a hot bath' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Lymphoma — itch with B symptoms' },
        { id: 'urticaria-angioedema', label: 'Urticaria & Angioedema', subtitle: 'Itch WITH weals / dermographism' },
      ],
    },

  ],
}
