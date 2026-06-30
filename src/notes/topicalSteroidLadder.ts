import type { Note } from '../data/notes'

export const topicalSteroidLadder: Note = {
  id: 'topical-steroid-ladder',
  title: 'Topical Steroid Ladder',
  subtitle: 'Potency classes, fingertip units, duration limits, body-site rules and topical calcineurin inhibitors',
  tags: ['dermatology'],

  body: `topical steroid ladder potency hydrocortisone clobetasone Eumovate betamethasone Betnovate mometasone Elocon clobetasol Dermovate fingertip unit FTU tachyphylaxis topical steroid withdrawal tacrolimus pimecrolimus protopic eczema psoriasis`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Topical Corticosteroids (Eczema)', url: 'https://cks.nice.org.uk/topics/eczema-atopic/' },
        { label: 'PCDS — Topical Steroids', url: 'https://www.pcds.org.uk/clinical-guidance/topical-steroids' },
        { label: 'MHRA — Topical Steroid Withdrawal', url: 'https://www.gov.uk/drug-safety-update' },
      ],
    },

    { type: 'heading', level: 2, text: 'Potency Classes' },

    {
      type: 'table',
      headers: ['Potency', 'Examples'],
      rows: [
        ['Mild', 'Hydrocortisone 1% (and 0.5/2.5%)'],
        ['Moderate', 'Clobetasone butyrate 0.05% (Eumovate), betamethasone valerate 0.025% (Betnovate-RD); Trimovate = clobetasone + antibacterial + antifungal'],
        ['Potent', 'Betamethasone valerate 0.1% (Betnovate), mometasone (Elocon), hydrocortisone butyrate (Locoid), fluticasone (Cutivate)'],
        ['Very potent', 'Clobetasol propionate 0.05% (Dermovate)'],
      ],
      caption: 'Match potency to severity and body site: use the least potent effective preparation, step up for flares and down as it settles.',
    },

    { type: 'heading', level: 2, text: 'How Much & How Long' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Fingertip Units (FTU) & Duration',
      items: [
        'One fingertip unit (from the tip to the first crease of an adult index finger) ≈ 0.5 g and treats an area about two adult palms',
        'Apply once or twice daily; use generous emollients alongside (apply emollient and steroid at different times)',
        'Duration guides: potent/very potent generally for up to ~7–14 days per course; milder preparations can be used for longer (but still review)',
        'Do NOT use very potent steroids on children without dermatology advice',
        'Face, flexures and genitals: thin skin → use only mild steroids (short courses); reserve potent/very potent for thick skin (palms, soles, scalp) and specific conditions',
      ],
    },

    { type: 'heading', level: 2, text: 'Body-Site & Safety Rules' },

    {
      type: 'list',
      items: [
        'Higher absorption (and higher side-effect risk) at thin-skinned sites (face, eyelids, genitals, flexures) and in infants — step down potency accordingly',
        'Local side effects: skin atrophy, telangiectasia, striae, perioral dermatitis (face), and masking/worsening of untreated infection (steroid-modified tinea)',
        'Topical steroid withdrawal (red, burning skin after prolonged potent use, especially on the face): warn patients, avoid prolonged unsupervised potent use, and refer if suspected (MHRA alert)',
        'Systemic absorption is possible with large areas/very potent use under occlusion — caution in children',
      ],
    },

    { type: 'heading', level: 2, text: 'Topical Calcineurin Inhibitors (Steroid-Sparing)' },

    {
      type: 'list',
      items: [
        'Tacrolimus ointment (0.03% for children ≥2 years, 0.1% for adults) and pimecrolimus cream — useful for the face/flexures and to reduce steroid use; no skin-atrophy risk',
        'Initial stinging is common; usually specialist- or GPwSI-initiated for eczema not controlled by, or unsuitable for, topical steroids',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'The main indication — emollients, flare management' },
        { id: 'psoriasis', label: 'Psoriasis', subtitle: 'Topical steroids ± vitamin D analogues' },
        { id: 'seborrhoeic-dermatitis', label: 'Seborrhoeic Dermatitis', subtitle: 'Short steroid courses + antifungal' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Steroid-modified tinea — a key prescribing trap' },
      ],
    },

  ],
}
