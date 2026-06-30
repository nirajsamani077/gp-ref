import type { Note } from '../data/notes'

export const fungalSkinInfections: Note = {
  id: 'fungal-skin-infections',
  title: 'Fungal Skin & Nail Infections',
  subtitle: 'Tinea (corporis/pedis/capitis/unguium), pityriasis versicolor, terbinafine and the steroid-modified-tinea trap',
  tags: ['dermatology'],

  body: `tinea dermatophyte ringworm tinea corporis cruris pedis capitis unguium onychomycosis athletes foot fungal nail terbinafine Lamisil clotrimazole miconazole ketoconazole shampoo griseofulvin itraconazole fluconazole nail clippings mycology pityriasis versicolor malassezia steroid modified tinea kerion`,

  content: [

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Fungal Skin Infection (Body/Groin)', url: 'https://cks.nice.org.uk/topics/fungal-skin-infection-body-groin/' },
        { label: 'NICE CKS — Fungal Nail Infection', url: 'https://cks.nice.org.uk/topics/fungal-nail-infection/' },
        { label: 'PCDS — Fungal Infections', url: 'https://www.pcds.org.uk/clinical-guidance/fungal-infections-an-overview' },
      ],
    },

    { type: 'heading', level: 2, text: 'Tinea (Dermatophyte) Infections' },

    {
      type: 'table',
      headers: ['Site', 'Features', 'Treatment'],
      rows: [
        ['Tinea corporis/cruris (body/groin — "ringworm")', 'Unilateral/asymmetric annular red scaly patch with an active raised leading edge and central clearing; itchy', 'Topical terbinafine (1% cream, ~1–2 weeks) or an imidazole (clotrimazole/miconazole, up to 4 weeks); oral terbinafine 250 mg OD ~2 weeks if extensive'],
        ['Tinea pedis (athlete\'s foot)', 'Itchy, peeling, macerated skin between the toes; recurrent moist environments', 'Topical terbinafine/imidazole until clear + ~1 week; foot hygiene, dry between toes, breathable footwear; oral terbinafine if refractory'],
        ['Tinea unguium (onychomycosis)', 'Thickened, discoloured (white/yellow), crumbling nail with subungual debris', 'See nail section below — CONFIRM with mycology before oral treatment'],
        ['Tinea capitis (scalp)', 'Scaly patches ± broken hairs and possible scarring alopecia; can form a boggy inflamed kerion; children mainly', 'Needs ORAL antifungal (terbinafine or griseofulvin) — topical alone is insufficient; add ketoconazole shampoo to reduce transmission; send hair/scrapings'],
        ['Tinea barbae', 'Pustular inflammation in the beard area', 'Oral terbinafine ~4 weeks'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Steroid-Modified Tinea ("Tinea Incognito") — Classic Trap',
      items: [
        'Tinea misdiagnosed as eczema/psoriasis and treated with topical steroids loses its typical scaly raised edge and spreads into bizarre, ill-defined shapes',
        'If a "rash" worsens or recurs on steroids, or looks atypical → stop the steroid, take skin scrapings for mycology, and start an antifungal (usually a longer course)',
        'Differentials for annular lesions: granuloma annulare (no scale, bumpy edge), discoid eczema, psoriasis',
      ],
    },

    { type: 'heading', level: 2, text: 'Fungal Nail Infection — Confirm Before Treating' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Always Send Nail Clippings/Scrapings First',
      items: [
        'Only treat if symptomatic or the patient is bothered by appearance AND mycology is positive — many dystrophic nails are not fungal (psoriasis, lichen planus, trauma, and — importantly — subungual melanoma)',
        'Sampling: clip the nail back and scrape subungual debris; ~30% false-negative rate, so repeat if negative but clinically suspicious',
        'Single nail / mild distal disease: topical amorolfine 5% nail lacquer (twice weekly) — but cure rates are low and treatment is prolonged (~6 months fingernails, up to 12 months toenails)',
        'Multiple nails / more severe: oral terbinafine 250 mg OD — ~6 weeks–3 months (fingernails) or 3–6 months (toenails); check LFTs at baseline and at ~6 weeks; counsel on taste disturbance and signs of liver toxicity; failure rate ~25%',
        'Itraconazole (or fluconazole) if Candida or terbinafine unsuitable',
      ],
    },

    { type: 'heading', level: 2, text: 'Pityriasis Versicolor' },

    {
      type: 'list',
      items: [
        'Caused by Malassezia (yeast); fine scaly macules on the trunk that are hypo- or hyperpigmented (often more obvious after a suntan, as affected skin doesn\'t tan)',
        'First-line: topical antifungal — ketoconazole shampoo (applied to the skin, left on, then washed off) or an imidazole cream if localised',
        'If widespread or treatment fails: oral itraconazole (specialist or per local guidance)',
        'Counsel that repigmentation takes weeks–months after the fungus is cleared, and recurrence is common',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'atopic-eczema', label: 'Atopic Eczema', subtitle: 'Differential for itchy/scaly rashes; steroid-modified tinea mimics eczema' },
        { id: 'psoriasis', label: 'Psoriasis', subtitle: 'Nail and plaque differential for tinea' },
        { id: 'melanoma', label: 'Melanoma', subtitle: 'Subungual melanoma can mimic a fungal nail — biopsy if atypical' },
        { id: 'alopecia', label: 'Alopecia & Hair Loss', subtitle: 'Tinea capitis causes scarring alopecia in children' },
      ],
    },

  ],
}
