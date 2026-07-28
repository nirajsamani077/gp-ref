import type { Note } from '../data/notes'

export const eosinophilia: Note = {
  id: 'eosinophilia',
  title: 'Eosinophilia',
  subtitle: 'A structured approach to a raised eosinophil count — allergy, drugs, parasites and the sinister causes',
  tags: ['haematology'],

  body: `eosinophilia raised eosinophils allergy asthma atopy drug reaction DRESS parasites strongyloides helminths eosinophilic granulomatosis polyangiitis Churg-Strauss hypereosinophilic syndrome malignancy lymphoma blood film travel`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Eosinophilia (a raised absolute eosinophil count) is a common, usually benign, incidental blood finding — most often from allergy or a drug — but it can also flag parasitic infection, vasculitis, or haematological malignancy. The approach is to confirm and grade it, work through the common causes first (allergy, drugs, parasites), and escalate investigation for marked or persistent unexplained eosinophilia because sustained high counts can cause organ damage.',
    },

    { type: 'heading', level: 2, text: 'Grading' },
    {
      type: 'table',
      headers: ['Level (absolute eosinophils)', 'Category'],
      rows: [
        ['0.5–1.5 ×10⁹/L', 'Mild'],
        ['1.5–5 ×10⁹/L', 'Moderate'],
        ['>5 ×10⁹/L', 'Severe (higher risk of end-organ damage — needs prompt work-up)'],
      ],
      caption: 'Confirm on a repeat FBC with a blood film. Marked or sustained eosinophilia (esp. >1.5) warrants active investigation and haematology involvement.',
    },

    { type: 'heading', level: 2, text: 'Causes — "Common Then Serious"' },
    {
      type: 'list',
      items: [
        'Allergic/atopic (commonest): asthma, atopic eczema, allergic rhinitis, urticaria, and drug/food allergy.',
        'Drugs: a very common cause — antibiotics, NSAIDs, allopurinol, antiepileptics and many others; beware DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms — rash, fever, organ involvement, high eosinophils → stop the drug, admit).',
        'Parasitic infection (especially with travel/relevant exposure): helminths (Strongyloides is important — screen before immunosuppression/steroids, which can precipitate fatal hyperinfection), schistosomiasis, filariasis.',
        'Other: skin disease (bullous pemphigoid), connective tissue/vasculitis (eosinophilic granulomatosis with polyangiitis / Churg-Strauss — asthma + eosinophilia + vasculitis), adrenal insufficiency, and — importantly — haematological malignancy (lymphoma, chronic eosinophilic leukaemia) and the hypereosinophilic syndrome.',
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment & Investigation' },
    {
      type: 'list',
      items: [
        'History: atopy/asthma, full drug history (including recent courses), travel and exposure, and systemic/organ symptoms (rash, weight loss, night sweats, breathlessness, GI).',
        'First-line: repeat FBC + blood film, U&E, LFTs, and (guided by history) stool ova/cysts/parasites and Strongyloides serology, IgE, ANCA, and a chest X-ray.',
        'Stop any likely culprit drug and recheck; treat obvious allergy/parasites.',
        'Refer to haematology for unexplained, marked (>1.5 persistent) or severe eosinophilia, evidence of end-organ damage, or features suggesting malignancy; refer per organ involvement (e.g. respiratory/rheumatology for suspected vasculitis).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BSH — Investigation of Eosinophilia (Guideline)', url: 'https://b-s-h.org.uk/guidelines/' },
        { label: 'NICE CKS — Eosinophilia', url: 'https://cks.nice.org.uk/' },
        { label: 'Lab Tests Online UK — Eosinophil Count', url: 'https://www.labtestsonline.org.uk/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'fever-returning-traveller', label: 'Fever in the Returning Traveller', subtitle: 'Parasitic causes and exposure history' },
        { id: 'haem-malignancies', label: 'Haematological Malignancies', subtitle: 'Lymphoma/leukaemia as a cause' },
        { id: 'asthmaAdult', label: 'Asthma (Adult)', subtitle: 'Atopy and eosinophilic asthma phenotype' },
        { id: 'inflammatory-markers', label: 'Inflammatory Markers', subtitle: 'Interpreting incidental blood abnormalities' },
      ],
    },

  ],
}
