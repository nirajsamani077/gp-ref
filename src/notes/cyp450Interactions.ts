import type { Note } from '../data/notes'

export const cyp450Interactions: Note = {
  id: 'cyp450-interactions',
  title: 'Drug Interactions & CYP450 (Primer)',
  subtitle: 'Inducers vs inhibitors, the high-risk "victim" drugs, and a practical approach to interaction checking',
  tags: ['prescribing'],

  body: `cytochrome P450 CYP450 CYP3A4 CYP2C19 CYP2D6 enzyme inducers inhibitors drug interactions rifampicin carbamazepine phenytoin St John's Wort macrolides clarithromycin fluconazole grapefruit warfarin DOAC statin combined pill QT prolongation serotonin`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Most clinically important pharmacokinetic drug interactions run through the cytochrome P450 (CYP) enzyme system in the liver. You do not need to memorise every enzyme — the practical skill is recognising the powerful INDUCERS and INHIBITORS, knowing the high-risk "victim" drugs, and always checking (BNF Appendix 1 / interactions checker) when starting or stopping a medicine in someone on one of them.',
    },

    {
      type: 'callout',
      variant: 'info',
      title: 'The Core Concept',
      items: [
        'ENZYME INHIBITORS reduce metabolism → HIGHER levels of the affected drug → toxicity (effect is rapid, over days).',
        'ENZYME INDUCERS increase metabolism → LOWER levels of the affected drug → treatment failure (effect builds over ~1–2 weeks, and reverses slowly when stopped — so both starting AND stopping an inducer matters).',
        'Also remember pharmacodynamic interactions (additive effects) — e.g. multiple QT-prolonging drugs, multiple serotonergic drugs, or additive bleeding/sedation/nephrotoxicity — which are not CYP-mediated.',
      ],
    },

    { type: 'heading', level: 2, text: 'Common Inducers & Inhibitors' },
    {
      type: 'table',
      headers: ['Enzyme INDUCERS (↓ drug levels)', 'Enzyme INHIBITORS (↑ drug levels)'],
      rows: [
        ['Rifampicin', 'Macrolides (clarithromycin, erythromycin)'],
        ['Carbamazepine, phenytoin, phenobarbital', 'Azole antifungals (fluconazole, ketoconazole, miconazole)'],
        ['St John\'s Wort', 'Protease inhibitors / ritonavir; some antivirals'],
        ['Chronic alcohol; smoking (CYP1A2)', 'Grapefruit juice (CYP3A4); cimetidine; amiodarone'],
        ['Rifabutin, some antiretrovirals', 'SSRIs (fluoxetine/paroxetine — CYP2D6); metronidazole; verapamil/diltiazem'],
      ],
      caption: 'A useful memory aid for common inducers: "PC BRAS" (Phenytoin, Carbamazepine, Barbiturates, Rifampicin, Alcohol[chronic], St John\'s Wort). Inhibitors are more numerous — check when in doubt.',
    },

    { type: 'heading', level: 2, text: 'High-Risk "Victim" Drugs (Narrow Therapeutic Index)' },
    {
      type: 'list',
      items: [
        'Warfarin — potentiated by many inhibitors (see High INR note); DOACs also interact (esp. with strong CYP3A4/P-gp inducers/inhibitors).',
        'Combined hormonal contraception — enzyme inducers (including some antiepileptics and St John\'s Wort) reduce efficacy → contraceptive failure; advise alternative/additional methods (see Contraception/FSRH).',
        'Statins — CYP3A4 inhibitors (clarithromycin, some antifungals) raise simvastatin/atorvastatin levels → myopathy/rhabdomyolysis; withhold simvastatin during a macrolide course.',
        'Immunosuppressants (tacrolimus, ciclosporin), theophylline, digoxin, antiepileptics, lithium, methotrexate, and many antipsychotics/antidepressants.',
      ],
    },

    { type: 'heading', level: 2, text: 'Practical Approach' },
    {
      type: 'list',
      items: [
        'Before prescribing (or stopping) any drug in a patient on a high-risk/interacting medicine, CHECK — BNF Appendix 1, the practice system interaction alert, or the Stockley\'s/MHRA resources.',
        'Don\'t forget OTC and herbal products (St John\'s Wort is a potent inducer) and grapefruit juice.',
        'When an interaction is unavoidable, choose the least-interacting alternative (e.g. a non-interacting antibiotic or PPI), adjust the dose, and increase monitoring (e.g. INR after an interacting antibiotic course).',
        'Be alert to interactions when a course of treatment STOPS as well as starts (levels rebound).',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'BNF — Appendix 1: Interactions', url: 'https://bnf.nice.org.uk/interactions/' },
        { label: 'MHRA — Drug Safety Update', url: 'https://www.gov.uk/drug-safety-update' },
        { label: 'FSRH — Drug Interactions with Contraception', url: 'https://www.fsrh.org/standards-and-guidance/documents/ceu-clinical-guidance-drug-interactions-with-hormonal/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'raised-inr-warfarin', label: 'High INR on Warfarin', subtitle: 'Interactions that potentiate warfarin' },
        { id: 'ppi-deprescribing', label: 'PPIs & Clopidogrel', subtitle: 'CYP2C19 interaction with clopidogrel' },
        { id: 'serotonin-nms', label: 'Serotonin Syndrome & NMS', subtitle: 'Pharmacodynamic (additive serotonergic) interactions' },
        { id: 'contraception', label: 'Contraception — Overview', subtitle: 'Enzyme inducers and contraceptive efficacy' },
        { id: 'polypharmacy', label: 'Polypharmacy & Deprescribing', subtitle: 'Interaction burden in multimorbidity' },
      ],
    },

  ],
}
