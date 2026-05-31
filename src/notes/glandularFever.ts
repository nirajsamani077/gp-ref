import type { Note } from '../data/notes'

export const glandularFever: Note = {
  id: 'glandular-fever',
  title: 'Glandular Fever (Infectious Mononucleosis)',
  subtitle: 'EBV, Monospot, atypical lymphocytes, splenomegaly, complications and management',
  tags: ['infectious', 'ent'],

  body: 'glandular fever infectious mononucleosis EBV Epstein-Barr virus Monospot Paul-Bunnell heterophile antibody lymphocytosis atypical lymphocytes pharyngitis tonsillitis cervical lymphadenopathy splenomegaly splenic rupture hepatitis LFT mononucleosis HIV CMV toxoplasma ampicillin amoxicillin maculopapular rash CFS chronic fatigue GBS Guillain-Barre haemolytic anaemia thrombocytopenia',

  content: [

    { type: 'heading', level: 2, text: 'Clinical Features' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Classic Triad of Glandular Fever',
      items: [
        'Fever — persistent, often 38–39°C, lasting 1–2 weeks',
        'Severe pharyngitis / tonsillitis — often the most prominent symptom; exudates common; may have palatal petechiae (pathognomonic when present); extremely sore throat',
        'Cervical lymphadenopathy — typically posterior triangle as well as anterior; can be marked and tender',
        'Additional features: fatigue and malaise (often profound), splenomegaly (50–70% — palpable 1–2 weeks into illness), hepatomegaly with mildly deranged LFTs (80%), periorbital oedema, general flu-like illness',
        'Peak age: 15–25 years ("kissing disease" — spread via saliva); young children may present with milder illness',
      ],
    },

    { type: 'heading', level: 2, text: 'Diagnosis' },

    {
      type: 'list',
      items: [
        'Clinical diagnosis sufficient if classic presentation: teenager/young adult + fever + severe pharyngitis + posterior cervical lymphadenopathy; do NOT routinely investigate mild typical cases',
        'Monospot test (heterophile antibody test / Paul-Bunnell): rapid bedside test, result in minutes; sensitivity 70–85% — can be false negative in first week of illness and in children <4 years; if negative but high suspicion, check FBC + EBV serology',
        'FBC: lymphocytosis (>50% lymphocytes) with characteristic atypical lymphocytes (large, irregular, basophilic); thrombocytopenia and mild haemolytic anaemia may occur',
        'LFT: elevated ALT and AST in ~80% — usually mild and self-resolving; significant hepatitis uncommon',
        'EBV serology (if Monospot negative and clinical suspicion remains): EBV IgM VCA (viral capsid antigen) — positive in acute infection; EBNA negative (becomes positive months after infection)',
        'If Monospot NEGATIVE and no lymphocytosis → NOT glandular fever; consider alternative diagnosis',
        'Differentials: HIV primary infection (very similar; check HIV POC test or Ag/Ab test if risk factors), CMV mononucleosis, toxoplasmosis, streptococcal tonsillitis (may coexist), adenovirus',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'list',
      items: [
        'Supportive — rest, adequate fluids, paracetamol/ibuprofen for fever and sore throat; most patients recover within 2–4 weeks (fatigue can persist months)',
        'Throat lozenges, cold foods/fluids, soluble analgesics (Difflam/benzydamine gargle) for pharyngeal discomfort',
        'AVOID amoxicillin and ampicillin: causes a florid maculopapular rash in ~95% of patients with EBV mononucleosis (immune-mediated reaction — NOT a true penicillin allergy; does not recur after EBV clears)',
        'If bacterial tonsillitis coexists: use phenoxymethylpenicillin (penicillin V) or clarithromycin if penicillin allergic',
        'Corticosteroids: NOT routinely recommended; consider prednisolone 40 mg OD for 5 days only if: severe airway compromise (tonsillar enlargement threatening airway), severe thrombocytopenia, or haemolytic anaemia — discuss with ENT/specialist',
        'Antiviral therapy (aciclovir, ganciclovir): NOT effective for EBV mononucleosis — do not prescribe',
        'Return to work/school: advise rest until fever and significant symptoms resolve (typically 1–2 weeks); no fixed duration',
      ],
    },

    { type: 'heading', level: 2, text: 'Splenomegaly and Splenic Rupture' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Splenic Rupture — Rare but Life-Threatening',
      items: [
        'Splenomegaly present in 50–70% — palpable spleen typically 1–3 weeks into illness; usually soft and non-tender',
        'Splenic rupture: rare (~0.1–0.2%) but potentially fatal — typically 1st–3rd week of illness; can be spontaneous or post-trauma',
        'Symptoms: sudden severe left upper quadrant or left shoulder tip pain (Kehr\'s sign — referred from diaphragmatic irritation); haemodynamic compromise',
        'If suspected: 999; emergency surgery or embolisation',
        'ADVICE for all patients: avoid contact sports and strenuous physical activities for AT LEAST 3–4 weeks (or until spleen no longer palpable/ultrasound confirms normal size); return to sport should be gradual',
        'Athletes: ultrasound to confirm splenic size before returning to contact sport',
      ],
    },

    { type: 'heading', level: 2, text: 'Complications' },

    {
      type: 'table',
      headers: ['Complication', 'Frequency', 'Features and Management'],
      rows: [
        ['Prolonged fatigue / Post-EBV CFS', 'Common (~10–15%)', 'Fatigue lasting >4 weeks after acute illness; can lead to chronic fatigue syndrome/ME; managed with graded activity, CBT; avoid enforced rest'],
        ['Haematological', 'Common (mild)', 'Thrombocytopenia (usually mild, self-resolving), haemolytic anaemia (Coombs-positive, cold agglutinin type); monitor FBC; steroid if severe'],
        ['Hepatitis', 'Common (raised LFTs 80%)', 'Usually mild and self-limiting; rarely fulminant; monitor LFTs until normalised; advise alcohol avoidance during illness'],
        ['Airway compromise', 'Uncommon', 'Massive tonsillar enlargement; "hot potato" voice; drooling; refer ENT urgently; IV steroids + possible airway support'],
        ['Neurological', 'Rare (~1%)', 'Guillain-Barré syndrome, encephalitis, aseptic meningitis, facial nerve palsy, Bell\'s palsy — supportive; specialist neurology'],
        ['Splenic rupture', 'Very rare (<0.2%)', 'See above — emergency surgical management'],
        ['Malignant transformation', 'Very rare', 'EBV associated with Burkitt\'s lymphoma, Hodgkin\'s lymphoma, nasopharyngeal carcinoma — not a routine concern after acute infection'],
      ],
    },

    { type: 'heading', level: 2, text: 'Follow-Up' },

    {
      type: 'list',
      items: [
        'Most patients: no routine follow-up needed after acute illness — self-limiting within 4–6 weeks',
        'Check LFTs 4–6 weeks after illness if initially elevated — ensure normalisation; advise alcohol avoidance until LFTs normalise',
        'Follow-up if: persistent fever >2–3 weeks, worsening symptoms, significant haematological complications, significant hepatitis, or prolonged fatigue',
        'Prolonged symptoms (>4 weeks fatigue): review — exclude secondary bacterial infection (tonsillitis); support with graded activity; if meets CFS/ME criteria, refer for specialist management',
        'Recurrence: EBV typically establishes lifelong latency; clinical reactivation is rare in immunocompetent patients; immunosuppressed patients can develop serious EBV-related lymphoproliferative disease',
      ],
    },

  ],
}
