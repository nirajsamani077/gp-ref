import type { Note } from '../data/notes'

export const haemophiliaVwd: Note = {
  id: 'haemophilia-vwd',
  title: 'Haemophilia & von Willebrand Disease',
  subtitle: 'Inherited bleeding disorders — clotting-screen patterns, severity, treatment and shared-care safety',
  tags: ['haematology'],

  body: `haemophilia A factor VIII haemophilia B factor IX Christmas disease von Willebrand disease VWD type 1 2 3 bleeding disorder APTT PT haemarthrosis target joint desmopressin DDAVP tranexamic acid factor concentrate emicizumab gene therapy X-linked autosomal dominant carrier inhibitors haemophilia centre bleeding score`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'The inherited bleeding disorders that a GP will most commonly encounter are haemophilia A and B (factor VIII and IX deficiency) and von Willebrand disease (VWD). Care is led by a specialist Haemophilia Comprehensive Care Centre, but the GP has a crucial safety role: recognising a possible new diagnosis, avoiding harmful drugs/procedures, and coordinating shared care.',
    },

    { type: 'heading', level: 2, text: 'Clotting-Screen Pattern (Orientation)' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Interpreting the Clotting Screen',
      items: [
        'Isolated prolonged APTT → haemophilia A/B, VWD, or heparin/lupus anticoagulant.',
        'Isolated prolonged PT → warfarin, vitamin K deficiency, early liver disease, factor VII deficiency.',
        'BOTH PT and APTT prolonged (± low platelets) → liver disease, DIC, vitamin K deficiency, or a major/multiple factor deficiency.',
        'Normal screen does NOT exclude a bleeding disorder — mild VWD and platelet-function defects can have a normal APTT. Refer on clinical grounds (significant bleeding history/family history) for specific factor and vWF assays.',
      ],
    },

    { type: 'heading', level: 2, text: 'Haemophilia A & B' },
    {
      type: 'para',
      text: 'X-linked recessive disorders affecting males (females are usually carriers, but can have low levels and bleed). Haemophilia A (factor VIII deficiency) is ~5× commoner than haemophilia B (factor IX deficiency, "Christmas disease"). They are clinically indistinguishable — the pattern is DEEP bleeding (into joints and muscles).',
    },
    {
      type: 'table',
      headers: ['Severity', 'Factor level', 'Bleeding pattern'],
      rows: [
        ['Severe', '<1% (<0.01 IU/mL)', 'Spontaneous haemarthroses and muscle bleeds; recurrent bleeds into a "target joint" → arthropathy'],
        ['Moderate', '1–5%', 'Bleeding after minor trauma; occasional spontaneous bleeds'],
        ['Mild', '5–40%', 'Bleeding only after significant trauma, surgery or dental work — may present late in life'],
      ],
    },
    {
      type: 'list',
      items: [
        'Diagnosis: prolonged APTT with normal PT/platelets/vWF, confirmed by reduced factor VIII or IX assay.',
        'Treatment (centre-led): factor VIII/IX concentrate — regular PROPHYLAXIS in severe disease or on-demand for bleeds. Newer agents: emicizumab (a subcutaneous bispecific antibody prophylaxis for haemophilia A, including those with inhibitors); gene therapy is now available for selected patients.',
        'Desmopressin (DDAVP) raises factor VIII in MILD haemophilia A (not useful in B or severe A).',
        'Tranexamic acid is a useful adjunct for mucosal/dental bleeding (avoid in haematuria — risk of clot colic/obstruction).',
        'Inhibitors (alloantibodies against infused factor) are a major complication reducing treatment efficacy — managed by the centre with bypassing agents.',
      ],
    },

    { type: 'heading', level: 2, text: 'von Willebrand Disease (VWD)' },
    {
      type: 'para',
      text: 'The commonest inherited bleeding disorder (up to ~1% of the population, though most are mild). von Willebrand factor (vWF) mediates platelet adhesion and carries/stabilises factor VIII — so VWD produces a PLATELET-type (mucocutaneous) bleeding pattern.',
    },
    {
      type: 'table',
      headers: ['Type', 'Defect', 'Notes'],
      rows: [
        ['Type 1 (~80%)', 'Partial quantitative reduction of vWF', 'Autosomal dominant; usually mild; responds to desmopressin'],
        ['Type 2', 'Qualitative/functional vWF defect (subtypes 2A/2B/2M/2N)', 'Variable; desmopressin may be ineffective or contraindicated (2B)'],
        ['Type 3', 'Near-complete absence of vWF', 'Autosomal recessive; severe (very low factor VIII too); needs vWF concentrate'],
      ],
    },
    {
      type: 'list',
      items: [
        'Bleeding pattern: epistaxis, easy bruising, prolonged bleeding from cuts, heavy menstrual bleeding (often from menarche), and bleeding after dental extraction/surgery/childbirth.',
        'Investigations: vWF antigen and activity (ristocetin cofactor), factor VIII level, ± platelet-function analysis; APTT may be normal or mildly prolonged.',
        'Treatment: tranexamic acid for mild mucosal bleeding and menorrhagia; desmopressin (raises vWF/factor VIII, mainly type 1); vWF-containing concentrate for severe disease/major surgery. The combined pill/IUS help heavy menstrual bleeding.',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Safety — Avoid in Any Bleeding Disorder',
      items: [
        'AVOID aspirin, NSAIDs and other antiplatelets (unless specifically sanctioned by the haemophilia centre).',
        'AVOID intramuscular injections — give vaccines subcutaneously and apply prolonged pressure.',
        'Plan ahead for ANY surgery, dental work or invasive procedure — liaise with the haemophilia centre for cover.',
        'Patients carry a bleeding-disorder card / national registration — respect their treatment plan and home-treatment supplies.',
      ],
    },

    { type: 'heading', level: 2, text: 'Referral & Shared Care' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Suspected new inherited bleeding disorder (bleeding/FHx + abnormal screen)', 'Haematology / haemophilia centre', 'Routine–urgent'],
        ['Acute significant bleed (esp. head injury, joint, GI) in known haemophilia', 'Haemophilia centre / ED', 'Emergency'],
        ['Woman with HMB + bleeding history / positive family history', 'Haematology + gynaecology', 'Routine'],
        ['Pre-operative / pre-dental planning in a known bleeding disorder', 'Haemophilia centre', 'Ahead of procedure'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'The Haemophilia Society', url: 'https://haemophilia.org.uk/' },
        { label: 'UKHCDO — Haemophilia Centre Directory', url: 'https://www.ukhcdo.org/' },
        { label: 'NICE CKS — Bruising', url: 'https://cks.nice.org.uk/topics/bruising/' },
        { label: 'NHS — Haemophilia', url: 'https://www.nhs.uk/conditions/haemophilia/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'platelets-bruising', label: 'Thrombocytopenia & Bruising', subtitle: 'The bleeding/bruising work-up and clotting patterns' },
        { id: 'hmb-fibroids', label: 'Heavy Menstrual Bleeding & Fibroids', subtitle: 'VWD as a cause of HMB from menarche' },
        { id: 'epistaxis', label: 'Epistaxis', subtitle: 'Recurrent nosebleeds — consider a bleeding disorder' },
        { id: 'raised-inr-warfarin', label: 'High INR on Warfarin', subtitle: 'Acquired coagulopathy and its reversal' },
      ],
    },

  ],
}
