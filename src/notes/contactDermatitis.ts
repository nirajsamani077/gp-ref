import type { Note } from '../data/notes'

export const contactDermatitis: Note = {
  id: 'contact-dermatitis',
  title: 'Contact Dermatitis',
  subtitle: 'Irritant vs allergic, occupational assessment, patch testing and management',
  tags: ['dermatology'],

  body: 'contact dermatitis irritant allergic eczema patch testing nickel latex rubber chromate dyes hairdressers cleaners healthcare workers occupational OH potent steroid emollient protopic tacrolimus calcineurin inhibitor avoidance trigger gloves prednisolone phototherapy immunosuppression pompholyx vesicular hand eczema Betnovate Dermovate Epaderm Diprobase Hydromol emollient soap substitute European standard series sensitisation delayed hypersensitivity type IV RIDDOR industrial benefit',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Contact Dermatitis — Two Types',
      items: [
        'Irritant contact dermatitis (ICD, 80%): direct skin barrier damage from repeated exposure to irritants — soap, water, detergents, chemicals; skin barrier damaged faster than it can repair; no prior sensitisation needed',
        'Allergic contact dermatitis (ACD, 20%): type IV delayed (cell-mediated) hypersensitivity; symptoms appear 2–3 days after exposure to an allergen the patient was previously sensitised to',
        'Clinically indistinguishable without patch testing — both cause eczematous changes',
        'Occupational distribution: hands, forearms, and other exposed areas — particularly hairdressers, healthcare workers, cleaners, chefs, construction workers, florists, paint/printing workers',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Features Comparison' },

    {
      type: 'table',
      headers: ['Feature', 'Irritant CD (ICD)', 'Allergic CD (ACD)'],
      rows: [
        ['Mechanism', 'Direct cytotoxic damage; no immune sensitisation required', 'Type IV delayed hypersensitivity; requires prior sensitisation (weeks to years)'],
        ['Onset', 'Hours–days after exposure; cumulative with repeated exposure', '24–72 hours after re-exposure to sensitised allergen'],
        ['Distribution', 'At contact site only — dorsum of hands, fingertips, web spaces; sharp margins', 'Can spread beyond contact site; less sharp borders; may involve face, eyelids'],
        ['Morphology', 'Erythema, scaling, fissuring, chapping; less vesiculation', 'Erythema, oedema, vesiculation, weeping — often more acute-looking'],
        ['Symptoms', 'Burning, stinging, soreness dominant', 'Itching dominant; burning less prominent'],
        ['Common triggers', 'Wet work, soap, detergents, acids, alkalis, friction, solvents', 'Nickel, rubber chemicals (thiurams, carbamates), fragrances, preservatives, chromate (cement), hair dye (PPD), latex'],
      ],
    },

    { type: 'heading', level: 2, text: 'High-Risk Occupations and Common Allergens' },

    {
      type: 'table',
      headers: ['Occupation', 'Common Allergens / Irritants'],
      rows: [
        ['Hairdressers', 'PPD (para-phenylenediamine) in hair dye, persulfates (bleach), nickel (scissors), formaldehyde (preservatives)'],
        ['Healthcare workers', 'Latex (gloves), rubber chemicals, glutaraldehyde, chlorhexidine, wet work'],
        ['Cleaners', 'Wet work, detergents, rubber gloves (rubber chemicals), biocides'],
        ['Construction / builders', 'Chromate (cement), rubber gloves, epoxy resins, acrylic'],
        ['Chefs / food handlers', 'Wet work, garlic, citrus, rubber gloves, detergents'],
        ['Florists', 'Plants (Primula, Compositae family), rubber chemicals, pesticides'],
        ['Metalworkers', 'Nickel, cobalt, chromate, cutting fluids, solvents'],
        ['Nail technicians', 'Acrylates (UV gel/acrylic nails) — increasingly common cause of ACD'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patch Testing — Gold Standard for ACD' },

    {
      type: 'list',
      items: [
        'Refer ALL suspected allergic contact dermatitis to dermatology for patch testing — cannot confirm ACD without it',
        'European standard series: 28 common allergens applied under occlusive patches to upper back for 48 hours; read at 48 and 96 hours (some reactions delayed to 7 days)',
        'Positive reaction: erythema, vesicles, or induration at patch site = type IV allergy to that specific allergen',
        'Additional panels available: cosmetic series, hair dye series, rubber series, metal series, acrylate series — tested alongside standard battery',
        'Patch testing requires active skin to be clear — stop topical steroids on the back 1 week before; systemic immunosuppression withheld as directed by dermatologist',
        'Cannot patch test during: extensive active eczema (false positive risk), pregnancy (limited safety data), significant systemic immunosuppression',
        'Photopatch testing: if photosensitivity is part of the picture (sunscreen reactions, plant + sunlight)',
      ],
    },

    { type: 'heading', level: 2, text: 'Emollients — Cornerstone of Skin Barrier Repair' },

    {
      type: 'table',
      headers: ['Product', 'Type', 'Best For'],
      rows: [
        ['Epaderm ointment', 'Emulsifying ointment (very greasy)', 'Severe/lichenified, hand eczema, overnight use; best barrier repair'],
        ['Hydromol ointment', 'Emulsifying ointment', 'Similar to Epaderm; also useful as soap substitute'],
        ['Diprobase cream', 'Light cream (less greasy)', 'Face, daytime use, hot weather; less occlusive'],
        ['Doublebase gel', 'Gel formulation', 'Good for hairy areas and application during the day'],
        ['Zeroderm / Emollin spray', 'Spray emollient', 'Practical for large areas, children, or limited dexterity'],
      ],
      caption: 'Use emollient as soap substitute: apply to wet skin, rub gently, rinse. Apply emollient ≥4× daily. Avoid soap, bubble bath, and fragranced products. Prescribe in quantities sufficient for liberal use — 500g/week is typical for widespread eczema.',
    },

    { type: 'heading', level: 2, text: 'Step-Up Treatment' },

    {
      type: 'table',
      headers: ['Step', 'Treatment', 'Detail'],
      rows: [
        ['Step 1 (all patients)', 'Identify and avoid trigger; emollients as soap substitute and skin barrier', 'Most important — without avoidance, no treatment will give lasting benefit'],
        ['Step 2', 'Topical corticosteroid — potency matched to site and severity', 'Hands: potent steroid (Betnovate 0.1% or Dermovate 0.05%) OD–BD; face/flexures: mild (hydrocortisone 1%); course ≤4–6 weeks then review'],
        ['Step 3 (face/sensitive sites)', 'Calcineurin inhibitors: tacrolimus 0.1% (Protopic) OD–BD', 'Steroid-sparing; good for face, eyelids, and genitalia; no atrophy risk; burning on application for first week'],
        ['Step 4 (acute flare)', 'Short course oral prednisolone (0.5 mg/kg/day) for 3–5 days', 'Reserve for severe acute flare unresponsive to topical treatment; not for long-term use'],
        ['Step 5 (chronic / refractory)', 'Phototherapy (PUVA or NB-UVB), azathioprine, ciclosporin, dupilumab (Dupixent)', 'Specialist initiation; dupilumab (biologic) licensed for moderate-severe atopic eczema; effective for chronic hand eczema'],
        ['Occupational health', 'Gloves (latex-free if latex allergy; cotton liner under rubber gloves if rubber allergy); barrier creams; modified work duties', 'Essential for occupational CD — without workplace modification, recurrence is inevitable'],
      ],
    },

    { type: 'heading', level: 2, text: 'Pompholyx (Vesicular Hand Eczema)' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Pompholyx — Specific Hand/Foot Eczema Variant',
      items: [
        'Intensely itchy deep-seated vesicles on palms, soles, and lateral fingers — recurrent crops; "tapioca pudding" appearance',
        'May be irritant, allergic, or idiopathic; also triggered by heat, stress, or fungal infection elsewhere (id reaction)',
        'Acute: soak in cool water ×20 minutes BD; potent topical steroid (Dermovate 0.05%) OD while blistered; oral antihistamine for itch',
        'Chronic: liberal emollient; moderate-potent steroid; patch test if ACD suspected; consider phototherapy if recurrent',
        'Exclude tinea pedis (athlete\'s foot) if foot pompholyx — treat if found; reduces id reaction',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Occupational Contact Dermatitis — Additional Steps',
      items: [
        'RIDDOR reporting: occupational contact dermatitis is reportable if clearly work-caused — employer must notify HSE; patient may be eligible for Industrial Injuries Disablement Benefit (IIDB)',
        'Occupational health referral: review workplace practices, PPE provision, exposure reduction, modified duties',
        'RIDDOR report made by employer, NOT the GP — advise the patient to inform their employer and OH service',
        'If skin disease is clearly work-related: document in records; consider fit note support if patient cannot work during flares',
        'GP can write a supporting letter for OH/DWP referral if required',
      ],
    },

    { type: 'heading', level: 2, text: 'Monitoring and Follow-Up' },

    {
      type: 'list',
      items: [
        'Review at 4–6 weeks: assess response to emollients and topical steroids; check avoidance is in place',
        'If not improving at 6 weeks despite allergen/irritant avoidance + potent topical treatment → refer dermatology for patch testing ± specialist management',
        'Ongoing: chronic hand eczema may need repeat courses of treatment; emollients are indefinite',
        'Skin infection: secondary bacterial infection (Staph aureus) common in excoriated eczema — treat with flucloxacillin 500 mg QDS for 7 days (or cefalexin if penicillin allergy)',
        'Referral criteria: diagnostic uncertainty, suspected ACD requiring patch testing, failed 6-week treatment, or severe disease requiring systemic treatment',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'DermNet NZ — Contact Dermatitis Images', url: 'https://dermnetnz.org/topics/contact-dermatitis' },
        { label: 'NICE CKS — Contact Dermatitis', url: 'https://cks.nice.org.uk/topics/contact-dermatitis/' },
        { label: 'BAD — Contact Dermatitis Guidelines', url: 'https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/contact-dermatitis' },
        { label: 'NHS — Contact Dermatitis', url: 'https://www.nhs.uk/conditions/contact-dermatitis/' },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Dermatology patch testing: UHDB Queen\'s Hospital Burton — primary dermatology referral for patch testing; include occupational history and allergen suspicion',
        'Alternative: Good Hope Hospital (UHB) dermatology — patch testing clinic',
        'Occupational health: refer to employer\'s OH service or independent OH for occupational CD; include description of workplace exposures',
        'Complex/severe cases (systemic immunosuppression, dupilumab initiation): dermatology at Good Hope (UHB) or QEHB Birmingham',
        'Dermatitis UK (dermatitisuk.org): patient information and occupational skin disease support',
      ],
    },
  ],
}
