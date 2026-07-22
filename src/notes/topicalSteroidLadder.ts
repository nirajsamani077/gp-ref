import type { Note } from '../data/notes'

export const topicalSteroidLadder: Note = {
  id: 'topical-steroid-ladder',
  title: 'Topical Steroid Ladder',
  subtitle: 'Potency classes, fingertip units, duration limits, body-site rules and topical calcineurin inhibitors',
  tags: ['dermatology'],

  body: `topical steroid ladder potency mild moderate potent very potent hydrocortisone clobetasone Eumovate betamethasone Betnovate mometasone Elocon clobetasol Dermovate fingertip unit FTU quantity emollient tachyphylaxis topical steroid withdrawal TSW tacrolimus pimecrolimus Protopic eczema psoriasis steroid-modified tinea`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Topical corticosteroids are the mainstay of inflammatory skin disease. Safe, effective use comes down to matching potency to the severity and the body site, prescribing an adequate quantity for a defined duration, and stepping up for flares and down as things settle — all alongside generous emollients. This note summarises the ladder and the practical rules.',
    },

    { type: 'heading', level: 2, text: 'Potency Classes' },
    {
      type: 'table',
      headers: ['Potency', 'Examples'],
      rows: [
        ['Mild', 'Hydrocortisone 0.5–2.5%'],
        ['Moderate', 'Clobetasone butyrate 0.05% (Eumovate); betamethasone valerate 0.025% (Betnovate-RD); Trimovate (+ antibacterial/antifungal)'],
        ['Potent', 'Betamethasone valerate 0.1% (Betnovate); mometasone (Elocon); hydrocortisone butyrate (Locoid); fluticasone (Cutivate)'],
        ['Very potent', 'Clobetasol propionate 0.05% (Dermovate)'],
      ],
      caption: 'Use the least potent effective preparation; step up for flares and down as it settles. Roughly, each step up is ~4× more potent than the one below.',
    },

    { type: 'heading', level: 2, text: 'How Much — Fingertip Units & Quantities' },
    {
      type: 'table',
      headers: ['Body area (adult)', 'Approx. FTUs per dose'],
      rows: [
        ['Face & neck', '2.5 FTU'],
        ['One hand (both sides) & fingers', '1 FTU'],
        ['One entire arm', '3 FTU'],
        ['One entire leg', '6 FTU'],
        ['Trunk (front)', '7 FTU'],
        ['Trunk (back) incl. buttocks', '7 FTU'],
      ],
      caption: 'One fingertip unit (tip to first crease of an adult index finger) ≈ 0.5 g and covers about two adult palms. Apply once or twice daily; apply emollient and steroid at different times.',
    },

    { type: 'heading', level: 2, text: 'How Long & Body-Site Rules' },
    {
      type: 'callout',
      variant: 'info',
      title: 'Duration & Site',
      items: [
        'Duration: potent/very potent generally up to ~7–14 days per course; milder preparations can be used longer but still review. Reactive/"weekend" therapy (2 days/week) helps maintain control in eczema.',
        'Face, flexures and genitals — thin skin: use only MILD steroids in short courses; reserve potent/very potent for thick skin (palms, soles, scalp) and specific conditions.',
        'Do NOT use very potent steroids in children without dermatology advice.',
        'Higher absorption/side-effect risk at thin-skinned sites and in infants — step down potency accordingly.',
      ],
    },

    { type: 'heading', level: 2, text: 'Safety & Side Effects' },
    {
      type: 'list',
      items: [
        'Local: skin atrophy, telangiectasia, striae, perioral dermatitis (face), and masking/worsening of untreated infection (STEROID-MODIFIED TINEA is a classic prescribing trap — a "treated" but spreading annular rash).',
        'Topical steroid withdrawal (TSW): red, burning skin after prolonged potent use (especially on the face/genitals) — warn patients, avoid prolonged unsupervised potent use, and be aware of the MHRA alert.',
        'Systemic absorption is possible with large areas/very potent use under occlusion — caution in children and pregnancy.',
      ],
    },

    { type: 'heading', level: 2, text: 'Topical Calcineurin Inhibitors (Steroid-Sparing)' },
    {
      type: 'list',
      items: [
        'Tacrolimus ointment (0.03% for children ≥2 years, 0.1% for adults) and pimecrolimus cream — useful for the face/flexures and to reduce steroid use; NO skin-atrophy risk.',
        'Initial stinging/burning is common and settles; usually specialist- or GPwSI-initiated for eczema not controlled by, or unsuitable for, topical steroids.',
      ],
    },

    { type: 'heading', level: 2, text: 'Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Eczema (Topical Corticosteroids)', url: 'https://cks.nice.org.uk/topics/eczema-atopic/' },
        { label: 'PCDS — Topical Steroids', url: 'https://www.pcds.org.uk/clinical-guidance/topical-steroids' },
        { label: 'MHRA — Topical Steroid Withdrawal', url: 'https://www.gov.uk/drug-safety-update/topical-steroid-withdrawal-reactions' },
        { label: 'NES / BAD — How to Apply Topical Steroids', url: 'https://www.bad.org.uk/pils/topical-steroids/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'The main indication — emollients, flare management' },
        { id: 'psoriasis', label: 'Psoriasis', subtitle: 'Topical steroids ± vitamin D analogues' },
        { id: 'seborrhoeic-dermatitis', label: 'Seborrhoeic Dermatitis', subtitle: 'Short steroid courses + antifungal' },
        { id: 'fungal-skin-infections', label: 'Fungal Skin Infections', subtitle: 'Steroid-modified tinea — a key prescribing trap' },
        { id: 'acne-rosacea', label: 'Acne Rosacea', subtitle: 'Facial steroids worsen rosacea — avoid' },
      ],
    },

  ],
}
