import type { Note } from '../data/notes'

export const urticariaAngioedema: Note = {
  id: 'urticaria-angioedema',
  title: 'Urticaria & Angioedema',
  subtitle: 'Acute vs chronic spontaneous urticaria, antihistamine ladder, ACEi/C1-inhibitor angioedema and red flags',
  tags: ['dermatology', 'allergy'],

  body: `urticaria hives wheal angioedema chronic spontaneous urticaria physical urticaria dermographism cholinergic cold solar antihistamine cetirizine loratadine fexofenadine omalizumab ACE inhibitor bradykinin C1 esterase inhibitor deficiency hereditary angioedema C4 complement urticarial vasculitis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Urticaria', url: 'https://cks.nice.org.uk/topics/urticaria/' },
        { label: 'NICE CKS — Angioedema & Anaphylaxis', url: 'https://cks.nice.org.uk/topics/angio-oedema-anaphylaxis/' },
        { label: 'PCDS — Urticaria', url: 'https://www.pcds.org.uk/clinical-guidance/urticaria' },
      ],
    },

    { type: 'heading', level: 2, text: 'Definitions' },

    {
      type: 'list',
      items: [
        'Urticaria = transient itchy wheals (raised pale centre with an erythematous flare); individual wheals typically resolve within 24 hours (each lasts <24h — if longer, think urticarial vasculitis)',
        'Acute urticaria: <6 weeks (often viral or an identifiable trigger — food, drug, infection)',
        'Chronic urticaria: ≥6 weeks — chronic spontaneous urticaria (no consistent trigger) or inducible/physical urticaria',
        'Angioedema = deeper swelling (lips, eyelids, tongue, genitals); can occur with urticaria (mast-cell/histaminergic) or WITHOUT urticaria (think bradykinin-mediated — see below)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags',
      items: [
        'Airway compromise — tongue/throat swelling, stridor, difficulty breathing/swallowing, or any features of anaphylaxis → IM adrenaline + 999 (see Anaphylaxis note)',
        'Angioedema without urticaria, especially of the tongue/airway → consider ACE-inhibitor or hereditary/acquired C1-inhibitor deficiency (do not respond to antihistamines/adrenaline well) — stop the ACE inhibitor and investigate',
        'Urticarial lesions that are painful, last >24 hours, leave bruising/pigmentation, or are associated with systemic upset → urticarial vasculitis (check complement, refer)',
      ],
    },

    { type: 'heading', level: 2, text: 'Inducible (Physical) Urticarias' },

    {
      type: 'table',
      headers: ['Trigger', 'Type'],
      rows: [
        ['Scratching/firm stroking', 'Dermographism'],
        ['Sustained pressure', 'Delayed pressure urticaria'],
        ['Heat/sweating/exercise', 'Cholinergic urticaria'],
        ['Cold exposure', 'Cold urticaria (can be life-threatening — e.g. swimming in cold water; refer)'],
        ['Sunlight', 'Solar urticaria'],
        ['Water', 'Aquagenic urticaria'],
      ],
    },

    { type: 'heading', level: 2, text: 'Angioedema Without Urticaria — Think Bradykinin' },

    {
      type: 'list',
      items: [
        'ACE inhibitor-induced angioedema: can occur even after years of use; stop the ACE inhibitor permanently (avoid the whole class; ARBs are usually tolerated but use cautiously)',
        'C1-esterase inhibitor deficiency: hereditary angioedema (autosomal dominant) or acquired (e.g. lymphoma) — recurrent angioedema without urticaria, often with abdominal pain attacks',
        'Investigate: check C4 first (low in C1-inhibitor deficiency); if low, check C1-esterase inhibitor level/function — refer immunology',
        'Bradykinin-mediated angioedema does NOT respond well to antihistamines/steroids/adrenaline — needs specific treatment (C1-inhibitor concentrate, icatibant)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management of (Spontaneous) Urticaria' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Non-Sedating Antihistamine Ladder',
      items: [
        'First-line: a standard-dose non-sedating H1-antihistamine (cetirizine or loratadine) — trial for ~4 weeks',
        'If inadequate: up-titrate to up to 4× the standard daily dose (off-licence but recommended) before adding other agents',
        'Choice notes: cetirizine and fexofenadine are renally excreted; loratadine/desloratadine are hepatically metabolised — consider in renal/hepatic impairment; avoid 1st-generation sedating antihistamines (chlorphenamine, promethazine) — short antipruritic effect but long sedation',
        'Children: chlorphenamine from 1 month, desloratadine from 1 year, loratadine from 2 years, fexofenadine from 12 years',
        'A short course of oral prednisolone can be used for a severe acute flare (not for long-term control)',
      ],
    },

    {
      type: 'list',
      items: [
        'Identify and avoid triggers; in chronic spontaneous urticaria check TFTs and an autoimmune screen (thyroid autoimmunity is associated)',
        'Refer to dermatology/immunology if: not controlled on high-dose antihistamines, suspected urticarial vasculitis, cold urticaria, or angioedema without urticaria',
        'Specialist options for refractory chronic spontaneous urticaria: leukotriene receptor antagonist, omalizumab (anti-IgE), ciclosporin',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'anaphylaxis', label: 'Anaphylaxis', subtitle: 'Airway/systemic involvement — IM adrenaline pathway' },
        { id: 'allergic-reactions', label: 'Allergic Reactions', subtitle: 'Allergy assessment and trigger identification' },
        { id: 'hypertension', label: 'Hypertension', subtitle: 'ACE inhibitor-induced angioedema — stop the drug' },
        { id: 'contact-dermatitis', label: 'Contact Dermatitis', subtitle: 'Contact urticaria and eczematous differentials' },
      ],
    },

  ],
}
