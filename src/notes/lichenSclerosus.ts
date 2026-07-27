import type { Note } from '../data/notes'

export const lichenSclerosus: Note = {
  id: 'lichen-sclerosus',
  title: 'Lichen Sclerosus & Lichen Planus',
  subtitle: 'Anogenital white plaques, SCC risk, potent topical steroid regimens and when to biopsy',
  tags: ['dermatology', 'gynaecology'],

  body: `lichen sclerosus lichen planus anogenital vulval pruritus white plaques atrophy phimosis clobetasol dermovate potent topical steroid squamous cell carcinoma SCC vulval cancer thyroid autoimmune biopsy emollient Wickham striae oral mucosa hepatitis C dyspareunia`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Lichen Sclerosus', url: 'https://cks.nice.org.uk/topics/lichen-sclerosus/' },
        { label: 'BAD — Lichen Sclerosus Leaflet', url: 'https://www.bad.org.uk/pils/lichen-sclerosus/' },
        { label: 'BASHH/BAD — Lichen Planus', url: 'https://www.bad.org.uk/pils/lichen-planus/' },
      ],
    },

    {
      type: 'para',
      text: 'Lichen sclerosus and lichen planus are chronic inflammatory conditions that commonly affect anogenital (and, for lichen planus, oral) skin. The two clinically vital points for lichen sclerosus are that it is frequently misdiagnosed as thrush (reconsider when "thrush" won\'t resolve), and that it carries a squamous-cell-carcinoma risk — so it needs an ultra-potent topical steroid regimen, ongoing surveillance, and a low threshold to biopsy suspicious change.',
    },
    { type: 'heading', level: 2, text: 'Lichen Sclerosus' },

    {
      type: 'list',
      items: [
        'Chronic inflammatory condition of the anogenital skin, with an autoimmune association (especially thyroid disease)',
        'Most common in post-menopausal women (vulval itch), but also occurs in men (presenting as phimosis) and children (constipation, dysuria, vulval soreness)',
        'Appearance: pale, white, thin, atrophic, fragile skin (porcelain/parchment-like), often with excoriation, fissuring, purpura, and architectural scarring',
        'Commonly MISdiagnosed as thrush or atrophic vaginitis — if "thrush" is not responding to antifungals, reconsider',
        'Significance: scarring can cause architectural distortion (burying of the clitoris, introital narrowing, dyspareunia) and there is a ~5% risk of vulval squamous cell carcinoma (SCC)',
      ],
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Biopsy & SCC Vigilance',
      items: [
        'Refer/biopsy if there are atypical features or concern for malignancy: persistent ulceration, a lump or thickened plaque, hyperkeratosis, warty/papular change, new pigmentation, or failure to respond to adequate treatment',
        'Lichen sclerosus is a diagnosis often made clinically, but a low threshold for biopsy is needed to exclude SCC and vulval intraepithelial neoplasia (VIN)',
        'Ongoing surveillance: review for ulceration, lumps, or non-healing areas every 3–6 months — counsel patients to self-examine and report changes',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Treatment — Potent/Ultra-Potent Topical Steroid Regimen',
      items: [
        'First-line: an ultra-potent topical steroid (clobetasol propionate 0.05% — Dermovate) ointment to the affected anogenital skin',
        'A typical induction regimen: once daily for 4 weeks, then alternate days for 4 weeks, then twice weekly for 4 weeks',
        'Then use as required ("treat to symptom/sign control") with ongoing maintenance and surveillance',
        'Generous emollient/soap-substitute use; avoid irritants and tight clothing',
        'Check TSH (autoimmune thyroid association); if SCC has not yet been excluded and treatment is needed, a moderate steroid (e.g. clobetasone — Eumovate) plus emollient can be used in the interim',
        'Refer to dermatology/gynaecology/urology if diagnostic uncertainty, poor response, scarring complications, or suspected malignancy (and refer boys with phimosis to urology — circumcision may be needed)',
      ],
    },

    { type: 'heading', level: 2, text: 'Lichen Planus' },

    {
      type: 'list',
      items: [
        'Autoimmune-mediated condition affecting skin and/or oral and anogenital mucosa',
        'Skin: the "6 Ps" — Purple, Pruritic, Polygonal, Planar (flat-topped) Papules and Plaques, often on flexor wrists/ankles; fine white lacy lines on the surface (Wickham striae)',
        'Oral: symmetrical reticular white lacy lesions on the buccal mucosa; an erosive form can be painful and is potentially pre-malignant',
        'Association with hepatitis C — ask about risk factors and offer testing',
        'Treatment: potent topical steroids (e.g. Dermovate for skin); for oral erosive disease, soluble prednisolone (5 mg dissolved in ~15 mL water) used as a mouthwash; anogenital disease is sensitive skin and often managed with milder steroids (e.g. hydrocortisone)',
        'Low threshold to refer for oral pred, retinoids, phototherapy, or biopsy if erosive/refractory (premalignant potential of erosive oral/genital disease)',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'vaginal-discharge', label: 'Vaginal Discharge', subtitle: 'Thrush is the common misdiagnosis — reconsider if not resolving' },
        { id: 'menopause', label: 'Menopause', subtitle: 'Vulvovaginal atrophy is the other key differential for vulval symptoms' },
        { id: 'hypothyroidism', label: 'Hypothyroidism', subtitle: 'Autoimmune thyroid association — check TSH' },
        { id: 'phimosis-circumcision', label: 'Phimosis & Circumcision', subtitle: 'Lichen sclerosus (BXO) is a cause of phimosis in males' },
        { id: 'vulval-conditions', label: 'Vulval Dermatoses & Cancer', subtitle: 'The wider vulval-symptom differential and 2WW red flags' },
      ],
    },

  ],
}
