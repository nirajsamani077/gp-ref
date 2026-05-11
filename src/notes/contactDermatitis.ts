import type { Note } from '../data/notes'

export const contactDermatitis: Note = {
  id: 'contact-dermatitis',
  title: 'Contact Dermatitis',
  subtitle: 'Irritant vs allergic, occupational assessment, patch testing and management',
  tags: ['dermatology'],

  body: 'contact dermatitis irritant allergic eczema patch testing nickel latex rubber chromate dyes hairdressers cleaners healthcare workers occupational OH potent steroid emollient protopic tacrolimus calcineurin inhibitor avoidance trigger gloves prednisolone phototherapy immunosuppression',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Contact Dermatitis — Two Types',
      items: [
        'Irritant contact dermatitis (80%): direct skin damage from repeated exposure to irritants — soap, water, detergents, chemicals; skin barrier is damaged faster than it can repair',
        'Allergic contact dermatitis (20%): type IV delayed hypersensitivity reaction — occurs 2–3 days after exposure to allergen previously sensitised to (nickel, latex, rubber additives, fragrances, preservatives, poison ivy)',
        'Clinically indistinguishable without patch testing — both cause eczematous changes',
        'Occupational distribution: involves hands, forearms, and other exposed areas — particularly in hairdressers, healthcare workers, cleaners, chefs, construction workers, florists',
        'High-risk allergens: nickel (jewellery), cobalt, chromate (leather, cement), rubber chemicals, formaldehyde (preservatives), fragrance mix, lanolin',
      ],
    },

    { type: 'heading', level: 2, text: 'Patch Testing — Gold Standard' },

    {
      type: 'list',
      items: [
        'Refer ALL suspected allergic contact dermatitis to dermatology for patch testing',
        'Patch testing: standard battery of common allergens applied under occlusive patches to the upper back for 48 hours; read at 48 and 96 hours',
        'Positive result (allergic): erythema, vesicles, or induration at patch site — identifies the specific allergen',
        'Negative result (irritant): no reaction — supports irritant rather than allergic aetiology',
        'Patch testing requires active skin to be clear — stop topical steroids 1 week before; stop systemic immunosuppression as directed by dermatologist',
        'Cannot patch test if: extensive active eczema, systemic immunosuppression, pregnancy (limited safety data)',
      ],
    },

    { type: 'heading', level: 2, text: 'Management' },

    {
      type: 'table',
      headers: ['Measure', 'Detail'],
      rows: [
        ['Allergen/irritant avoidance', 'MOST IMPORTANT — identify and eliminate trigger; if occupational, discuss with OH; may require job redeployment'],
        ['Protective measures', 'Gloves (latex-free if latex allergy; cotton liner under rubber gloves if rubber allergy); barrier creams; reducing exposure duration'],
        ['Emollients', 'Essential — repair skin barrier; apply frequently; use as soap substitute'],
        ['Topical potent steroid', 'Betamethasone valerate 0.1% (Betnovate) OD–BD; maximum 4–6 weeks per course on hands; may need repeat courses for flares'],
        ['Calcineurin inhibitor (2nd line)', 'Tacrolimus 0.1% (Protopic) OD–BD — steroid-sparing; good for facial/flexural disease; no atrophy risk'],
        ['Systemic treatments (specialist)', 'Short course prednisolone for acute severe flare; phototherapy (PUVA or UVB); azathioprine, ciclosporin, dupilumab for severe chronic disease'],
        ['Occupational health referral', 'For work-related contact dermatitis — discuss job modifications, PPE, consider RIDDOR notification (occupational skin disease)'],
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Occupational Contact Dermatitis — Additional Steps',
      items: [
        'RIDDOR reporting: occupational contact dermatitis is a reportable condition if work-caused — notify the employer; patient may be eligible for industrial injury disablement benefit',
        'Occupational health referral: review workplace practices, PPE, exposure reduction',
        'Consider Dermatitis UK (dermatitisuk.org) — patient resources on occupational skin disease',
        'Persistent occupational contact dermatitis despite avoidance: refer dermatology for further patch testing and specialist management',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Dermatology patch testing: UHDB Queen\'s Hospital Burton — primary dermatology referral for patch testing',
        'Alternative: Good Hope Hospital (UHB) dermatology patch testing clinic',
        'Occupational health: refer to employer\'s OH service or independent OH via GP referral',
        'Complex/severe cases (systemic immunosuppression, biologics): dermatology at Good Hope (UHB) or QEHB Birmingham',
        'Patient may prefer alternative local site — discuss at consultation',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Contact Dermatitis', url: 'https://cks.nice.org.uk/topics/contact-dermatitis/' },
        { label: 'BAD — Contact Dermatitis Guidelines', url: 'https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines/contact-dermatitis' },
        { label: 'Dermatitis UK', url: 'https://www.dermatitisuk.org/' },
        { label: 'NHS — Contact Dermatitis', url: 'https://www.nhs.uk/conditions/contact-dermatitis/' },
      ],
    },
  ],
}
