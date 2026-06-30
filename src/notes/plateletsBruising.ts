import type { Note } from '../data/notes'

export const plateletsBruising: Note = {
  id: 'platelets-bruising',
  title: 'Thrombocytosis, Thrombocytopenia & Bruising/Purpura',
  subtitle: 'Raised platelets as a cancer marker, the petechiae/purpura algorithm, ITP, HSP and bleeding work-up',
  tags: ['haematology', 'dermatology'],

  body: `thrombocytosis raised platelets cancer thrombocytopenia ITP immune thrombocytopenic purpura petechiae purpura bruising non-blanching meningococcal HSP Henoch-Schonlein clotting screen PT APTT von Willebrand NAI JAK2 essential thrombocythaemia FIT`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG12 — Suspected Cancer (Thrombocytosis)', url: 'https://www.nice.org.uk/guidance/ng12' },
        { label: 'NICE CKS — Bruising', url: 'https://cks.nice.org.uk/topics/bruising/' },
        { label: 'BSH — ITP Guidelines', url: 'https://b-s-h.org.uk/guidelines/' },
      ],
    },

    { type: 'heading', level: 2, text: 'Thrombocytosis (Raised Platelets) — a Cancer Marker' },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Platelets >400 in Someone ≥40 — Investigate for Cancer',
      items: [
        'Thrombocytosis significantly predicts a cancer diagnosis in the following 12 months — do not dismiss it',
        'Cancers to consider ("LEGO-C"): Lung, Endometrial, Gastro-oesophageal/colorectal (GI), Ovarian, and others',
        'If no obvious reactive cause and no immediate 2WW trigger: examine (lymph nodes, hepatosplenomegaly, chest/abdomen, weight), repeat FBC with film, check haematinics and CRP; arrange a chest X-ray and FIT test; consider OGD and TVUSS/CA125/endometrial assessment by symptom/age',
        'Reactive (secondary) causes: iron deficiency, infection/inflammation, blood loss, recent surgery/splenectomy, malignancy',
        'If a malignancy is excluded/unlikely, recheck in ~1 month; if still raised, refer haematology (JAK2 and marrow assessment) for a myeloproliferative disorder (e.g. essential thrombocythaemia)',
      ],
    },

    { type: 'heading', level: 2, text: 'Petechiae / Purpura — the Non-Blanching Rash Algorithm' },

    {
      type: 'list',
      items: [
        'Petechiae = <1 cm non-blanching spots; purpura = >1 cm or raised. Ask about speed of onset, triggers (new drugs, trauma), and a family/personal bleeding history; examine for fever/sepsis, lymphadenopathy, hepatosplenomegaly and signs of NAI',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Acutely Unwell with a Non-Blanching Rash',
      items: [
        'Meningococcal sepsis or acute leukaemia → 999; give IM benzylpenicillin while awaiting transfer (≥10 yrs 1.2 g; 1–9 yrs 600 mg; <1 yr 300 mg)',
        'In a child, always actively consider non-accidental injury — if suspected, urgent safeguarding referral/admission',
      ],
    },

    {
      type: 'table',
      headers: ['FBC/clotting', 'Likely causes'],
      rows: [
        ['Abnormal — low platelets', 'ITP (commonest — see below), leukaemia/marrow failure (other cytopenias), drug-induced thrombocytopenia (heparin, antiepileptics, antiplatelets, DOACs, steroids)'],
        ['Abnormal — clotting deranged', 'Inherited (von Willebrand disease, haemophilia) or acquired (warfarin, vitamin K deficiency, liver disease, DIC)'],
        ['Normal FBC & clotting', 'Vasculitis (HSP in children, SLE in adults), senile/steroid purpura, vitamin C/K deficiency, NAI, or benign easy bruising (purpura simplex)'],
      ],
      caption: 'If not acutely unwell, arrange urgent FBC + clotting (same-day with admission for children; within ~48h for adults).',
    },

    { type: 'heading', level: 2, text: 'ITP & HSP' },

    {
      type: 'list',
      items: [
        'Immune thrombocytopenic purpura (ITP): the commonest cause of isolated thrombocytopenia — typically a well patient with petechiae ± mucosal bleeding, often post-infection/vaccination; refer haematology (may need steroids/IVIG); often self-limiting in children',
        'Henoch-Schönlein purpura (HSP): an IgA small-vessel vasculitis, usually post-infection in children — palpable purpura over the buttocks/extensor limbs, with arthralgia, abdominal pain and renal involvement (haematuria/proteinuria); largely supportive with an excellent prognosis; monitor BP and urine; ~1/3 relapse',
      ],
    },

    { type: 'heading', level: 2, text: 'Bruising — Bleeding Work-up' },

    {
      type: 'list',
      items: [
        'Easy/excessive bruising (rather than petechiae) suggests a clotting problem — check a clotting screen (PT, APTT, fibrinogen), plus U&E/LFTs; INR only if on warfarin',
        'Interpretation: isolated long PT → warfarin/vitamin K deficiency; isolated long APTT → von Willebrand/haemophilia/heparin; both prolonged → warfarin, vitamin K or factor deficiency; both prolonged with low platelets → liver disease or DIC',
        'Management: stop/switch any drug trigger, consider a trial of vitamin K/C, reassure if all tests normal; refer haematology (coagulation clinic) if there is a family history or significant/prolonged bleeding',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Leukaemia/myeloproliferative disease — when counts are abnormal' },
        { id: 'meningitis', label: 'Meningitis & Meningococcal Sepsis', subtitle: 'The non-blanching rash emergency' },
        { id: 'two-week-wait', label: '2WW Referral Guide', subtitle: 'Thrombocytosis-driven cancer pathways' },
        { id: 'microcytic-anaemia', label: 'Microcytic Anaemia', subtitle: 'Iron deficiency is a common reactive cause of thrombocytosis' },
      ],
    },

  ],
}
