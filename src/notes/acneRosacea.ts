import type { Note } from '../data/notes'

export const acneRosacea: Note = {
  id: 'acne-rosacea',
  title: 'Acne Rosacea',
  subtitle: 'Subtypes, treatment by phenotype & referral criteria',
  tags: ['dermatology', 'pcds'],

  body: 'rosacea acne vulgaris erythema telangiectasia flushing papules pustules rhinophyma phymatous ocular blepharitis ivermectin Soolantra metronidazole Rozex azelaic acid Finacea doxycycline lymecycline oxytetracycline erythromycin brimonidine Mirvaso propranolol clonidine isotretinoin Roaccutane laser SPF sunscreen trigger alcohol topical steroid DO NOT comedones fair skin 30 50 PCDS MHRA rebound cardiovascular keratitis ophthalmology dermatology rhinophyma plastic surgery Bucks Buckinghamshire formulary',

  content: [

    // ── Overview ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'Rosacea is a chronic, relapsing inflammatory condition of the facial skin. It predominantly affects fair-skinned individuals aged 30–50, though it can occur at any age. The aim of treatment is complete skin clearance where possible, but patients should be counselled that relapse is common and long-term maintenance is often required.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Key distinction from acne vulgaris',
      items: [
        'NO comedones in rosacea — this is the single most useful clinical differentiator from acne vulgaris.',
        'DO NOT use topical corticosteroids on the face — they cause steroid-induced rosacea and dramatically worsen the condition.',
        'Alcohol and topical steroids are both known to exacerbate rosacea significantly.',
        'Patients often have more than one subtype concurrently — treat based on the predominant features.',
      ],
    },

    // ── Subtypes ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Subtypes' },
    {
      type: 'image',
      src: '/images/Z-KZGndAxsiBv3i8_ARTICLE-4ROSACEASUBTYPESDIAGRAM-HarleyAcademyMedicalAestheticsTrainingCourses.png.avif',
      alt: 'Four subtypes of rosacea — erythematotelangiectatic, papulopustular, phymatous, ocular',
      caption: 'The four rosacea subtypes. Patients commonly present with features of more than one. Tap to enlarge.',
    },
    {
      type: 'image',
      src: '/images/MI22.2022Sept26_Clinical-1.jpg',
      alt: 'Clinical photos of rosacea subtypes — telangiectasia, papules/pustules, rhinophyma, ocular rosacea',
      caption: 'Clinical appearances: (1) Telangiectasia, (2) Papules/pustules, (3) Rhinophyma, (4) Ocular rosacea. Tap to enlarge.',
    },
    {
      type: 'table',
      headers: ['Subtype', 'Key features'],
      rows: [
        [
          'Erythematotelangiectatic',
          'Persistent central facial flushing and erythema, visible telangiectasia, easily irritated skin, burning and stinging. Oedema or scaling may be present.',
        ],
        [
          'Papulopustular',
          'Persistent erythema with transient papules and/or pustules on the central face. Burning and stinging. NO comedones — key distinction from acne vulgaris.',
        ],
        [
          'Phymatous (incl. Rhinophyma)',
          'Skin thickening, surface nodularities and enlargement. Rhinophyma (bulbous nose) is most common but cheeks, chin, forehead and ears can be affected. Patulous follicles.',
        ],
        [
          'Ocular',
          'Watery or bloodshot eyes, foreign body sensation, burning, dryness, light sensitivity, blurred vision. Blepharitis, styes (chalazion/hordeolum), telangiectases of lid margins. Rare: keratitis — refer urgently if suspected.',
        ],
      ],
    },

    // ── Triggers ─────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Triggers & Self-Care' },
    {
      type: 'list',
      items: [
        'Sunlight — recommend high-factor SPF 30+ sunscreen daily; avoid sunbeds.',
        'Heat and cold winds, extremes of weather.',
        'Strenuous exercise, stress.',
        'Alcohol, spicy food, hot drinks.',
        'Topical corticosteroids — absolutely contraindicated on the face in rosacea.',
        'Some drugs can aggravate flushing: calcium-channel blockers, niacin.',
        'Encourage a trigger diary to identify individual stimuli.',
        'Hypoallergenic non-comedogenic emollients if skin is dry. Avoid abrasive products.',
        'Yellow- or green-tinted camouflage cosmetics can help conceal erythema (patient self-purchase — not NHS funded).',
      ],
    },

    // ── Treatment: Inflammatory ───────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Treatment — Inflammatory (Papulopustular)' },
    {
      type: 'para',
      text: 'All treatments require at least 8–12 weeks to assess response. Topical treatments can be continued intermittently or continuously for maintenance. Oral antibiotics should be discontinued once the inflammatory component is controlled.',
    },

    { type: 'heading', level: 3, text: 'Mild to Moderate' },
    {
      type: 'table',
      headers: ['Drug', 'Dose & regime', 'Notes'],
      rows: [
        ['Ivermectin 1% cream (Soolantra) ✦ 1st line', 'Once daily for 8–12 weeks; continue as maintenance if responding', 'Best evidence base. Review at 6 weeks — if no improvement, escalate. Avoid in severe hepatic impairment. Safe in renal impairment.'],
        ['Azelaic acid 15% gel (Finacea) ✦ 2nd line', 'BD for up to 4 months; review at 2 months', 'Alternative if ivermectin unavailable or inappropriate (e.g. pregnancy). May cause transient stinging. Less suitable for sensitive skin.'],
        ['Metronidazole 0.75% cream (Rozex) ✦ 2nd line', 'BD for 6–9 weeks; cream preferred over gel', 'Cream is more cost-effective and better tolerated. Reserve gel for those intolerant of cream. Wash area before application.'],
      ],
    },

    { type: 'heading', level: 3, text: 'Moderate to Severe — Combination Therapy' },
    {
      type: 'table',
      headers: ['Drug', 'Dose', 'Notes'],
      rows: [
        ['Ivermectin 1% cream (Soolantra) + Doxycycline MR 40 mg ✦ 1st line combination', 'Ivermectin OD + doxycycline MR OD for 8–12 weeks; review at 6 weeks', 'Strong evidence (moderate-high certainty). Licensed for max 16 weeks but review before. Doxycycline MR 40 mg is anti-inflammatory not antibiotic dosing — lower resistance risk.'],
        ['Lymecycline 408 mg OD', 'OD for 6–12 weeks; may repeat intermittently', 'Unlicensed indication but effective, well tolerated and single daily dose. Preferred over oxytetracycline by many clinicians.'],
        ['Doxycycline 100 mg OD', 'OD — off licence', 'Use in renal impairment (unlike tetracyclines). Off licence at this dose for rosacea.'],
        ['Oxytetracycline 500 mg BD', 'BD on empty stomach — licensed', 'Only tetracycline licensed for rosacea but less convenient (twice daily, empty stomach).'],
        ['Erythromycin 500 mg BD', 'BD for 6–12 weeks', 'Use in pregnancy, breastfeeding, or when tetracyclines are contraindicated.'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Antibiotic stewardship',
      items: [
        'Topical and systemic antibiotics should NOT be prescribed together — increases resistance risk.',
        'Oral antibiotics should not be used as sole monotherapy — always combine with a topical agent.',
        'Reassess need for ongoing oral antibiotics at 12–16 weeks; aim to step down to topical maintenance.',
        'If little or no improvement after full course of combined treatment → refer to dermatology.',
        'In event of pregnancy: discontinue topical retinoids and oral tetracyclines immediately.',
      ],
    },
    {
      type: 'linkrow',
      links: [
        { label: 'Bucks Formulary — Rosacea Treatment Pathway (PDF)', url: '/pdfs/rosacea-bucks-formulary.pdf' },
      ],
    },

    // ── Treatment: Vascular / Flushing ────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Treatment — Vascular / Flushing / Erythema' },
    {
      type: 'para',
      text: 'Flushing and erythema are chronic and may improve slowly over years. Treatment is primarily symptomatic relief. Telangiectasia does not respond to topical or systemic treatments — laser therapy is the only effective option (not NHS funded).',
    },
    {
      type: 'table',
      headers: ['Intervention', 'Detail'],
      rows: [
        ['Lifestyle + trigger avoidance', 'First and ongoing — SPF 30+, trigger diary, avoid alcohol and extreme temperatures. Always continue alongside any pharmacological treatment.'],
        ['Propranolol 10–40 mg BD (unlicensed) ✦ 1st line for flushing', 'Effective for flushing/erythema. Titrate to response. Unlicensed indication but recommended in Bucks formulary as first-line.'],
        ['Clonidine 50 mcg BD (unlicensed) ✦ 2nd line', 'Alternative if propranolol ineffective or contraindicated.'],
        ['Laser therapy', 'For telangiectasia and persistent erythema not responding to treatment. Not NHS funded — private sector only.'],
      ],
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'Brimonidine (Mirvaso) — use with extreme caution / avoid in most cases',
      items: [
        'Brimonidine 0.5% gel (Mirvaso) is an α2-agonist that temporarily reduces facial erythema — effect lasts 3–6 hours only; erythema returns to baseline after.',
        'BLACKLISTED in most UK formularies due to safety concerns and lack of long-term evidence.',
        'MHRA June 2017: Risk of systemic cardiovascular effects (bradycardia, hypotension, dizziness) — especially if applied to irritated or damaged skin, or after laser therapy.',
        'MHRA November 2016: Risk of exacerbation/rebound rosacea on stopping — must titrate dose up slowly over at least 1 week.',
        'Significant side effect profile: flushing, burning, rebound erythema worse than baseline.',
        'Practical advice: in most UK practices, refer patients with problematic erythema for laser therapy rather than prescribing brimonidine.',
      ],
    },

    // ── Treatment: Ocular ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Treatment — Ocular Rosacea' },
    {
      type: 'list',
      items: [
        'Eyelid hygiene: warm compress (clean flannel, hot water, applied to lid for ~1 minute) followed by lid-cleansing solution or wipes. Can recommend over-the-counter lid wipes.',
        'Artificial tears: hypromellose 0.5% or carbomer 0.2% — apply liberally throughout the day. Chloramphenicol 1% ointment may be applied after lid hygiene at night.',
        'Oral tetracyclines are the most effective systemic treatment for ocular rosacea — use as per papulopustular treatment if skin symptoms are also present.',
        'Review after 2–4 weeks of self-care.',
        'Refer routinely to ophthalmology if severe or resistant to maximal primary care treatment.',
        'Refer urgently to ophthalmology if keratitis or anterior uveitis is suspected (eye pain, blurred vision, photosensitivity, red eye) — sight-threatening complication.',
      ],
    },

    // ── Treatment: Phymatous / Rhinophyma ────────────────────────────────────
    { type: 'heading', level: 2, text: 'Treatment — Phymatous Rosacea / Rhinophyma' },
    {
      type: 'list',
      items: [
        'Clinically inflamed phymatous disease: doxycycline MR 40 mg OD for 6 weeks (off licence) may reduce inflammation.',
        'Established non-inflamed rhinophyma: refer to plastic surgery for laser ablation or surgical debulking.',
        'Important: rhinophyma surgery is NOT routinely NHS funded — requires Individual Funding Request (IFR) approval. Laser ablation available privately.',
        'Refer to dermatology first if diagnosis is uncertain or skin symptoms are prominent.',
      ],
    },

    // ── Referral Summary ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Papulopustular rosacea — failed 12 weeks oral + topical combination', 'Dermatology', 'Routine'],
        ['Flushing / erythema / telangiectasia — failed treatments causing distress', 'Dermatology', 'Routine'],
        ['Diagnostic uncertainty', 'Dermatology', 'Routine'],
        ['Severe or resistant ocular symptoms', 'Ophthalmology', 'Routine'],
        ['Suspected keratitis or anterior uveitis (eye pain, photophobia, blurred vision, red eye)', 'Ophthalmology', 'Urgent'],
        ['Rhinophyma — prominent non-inflamed phymatous disease', 'Plastic surgery (IFR required for NHS)', 'Routine'],
        ['Severe psychological distress from rosacea', 'Dermatology', 'Routine (expedite if needed)'],
      ],
    },

    // ── Patient Resources ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NHS — Rosacea', url: 'https://www.nhs.uk/conditions/rosacea/' },
        { label: 'BAD Patient Information — Rosacea', url: 'http://www.bad.org.uk/shared/get-file.ashx?id=229&itemtype=document' },
        { label: 'British Skin Foundation', url: 'https://www.britishskinfoundation.org.uk/' },
        { label: 'Bucks Formulary — Rosacea Treatment Pathway (PDF)', url: '/pdfs/rosacea-bucks-formulary.pdf' },
      ],
    },
  ],
}
