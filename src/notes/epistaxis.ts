import type { Note } from '../data/notes'

export const epistaxis: Note = {
  id: 'epistaxis',
  title: 'Epistaxis (Nosebleeds)',
  subtitle: 'First aid, anterior vs posterior, red flags, Naseptin, septal haematoma and nasal injury',
  tags: ['ent'],

  body: 'epistaxis nosebleed anterior posterior Little\'s area silver nitrate cautery Naseptin Merocel packing Rapid Rhino septal haematoma nasal injury fracture rhinoplasty oxymetazoline vasoconstrictor clotting anticoagulant blood thinner NPSCC nasopharyngeal carcinoma HHT hereditary haemorrhagic telangiectasia recurrent juvenile nasopharyngeal angiofibroma',

  content: [

    { type: 'heading', level: 2, text: 'First Aid — Acute Nosebleed' },

    {
      type: 'callout',
      variant: 'info',
      title: 'Immediate Management',
      items: [
        'Lean FORWARDS (not back — swallowing blood causes nausea/vomiting and conceals blood loss)',
        'Pinch the SOFT part of the nose (not the bony part) firmly for an uninterrupted 10–15 minutes — set a timer',
        'Breathe through the mouth; spit out any blood that enters the mouth',
        'Apply ice pack or cold flannel to the bridge of the nose',
        'If not controlled after 15 minutes, reapply pressure for further 15 minutes',
        'Vasoconstrictor spray: oxymetazoline (Afrin/Otrivine) or xylometazoline into the affected nostril — causes vasoconstriction to reduce bleeding',
        'If still not controlled after 30 minutes, patient shocked, or on anticoagulation and bleeding significantly → attend A&E',
        'Post-bleed nasal precautions for 24 hours: no nose blowing or picking, no hot drinks or alcohol, no heavy lifting or straining, stay upright',
      ],
    },

    { type: 'heading', level: 2, text: 'Anterior vs Posterior Epistaxis' },

    {
      type: 'table',
      headers: ['Feature', 'Anterior', 'Posterior'],
      rows: [
        ['Site', 'Little\'s area (Kiesselbach\'s plexus) on anterior nasal septum — 90% of epistaxis', 'Sphenopalatine artery territory — deeper in nose'],
        ['Blood flow direction', 'Forwards out of one nostril', 'Posteriorly down throat; blood from BOTH nostrils or back of throat'],
        ['Severity', 'Usually mild–moderate; controllable with first aid', 'Typically more severe, harder to control; higher blood loss risk'],
        ['Management', 'First aid, silver nitrate cautery, Naseptin', 'ENT referral — nasendoscopy required; may need posterior packing or surgical cautery'],
        ['Who gets it', 'Any age; more common', 'Usually older adults; HTN; significant comorbidity'],
      ],
      caption: 'ALWAYS refer to ENT if: blood flowing from BOTH nostrils or predominantly into the throat (posterior), elderly patient with significant comorbidity, or heavy bleeding not controlled by 30 minutes of first aid.',
    },

    { type: 'heading', level: 2, text: 'Red Flags — When to Refer Urgently' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Red Flags Requiring ENT Referral',
      items: [
        'NPSCC (Nasopharyngeal carcinoma): unilateral epistaxis + ipsilateral otalgia (referred pain) + ipsilateral conductive hearing loss + cervical lymphadenopathy + smoker + North African / South-East Asian patient — 2WW ENT',
        'HHT (Hereditary Haemorrhagic Telangiectasia / Osler-Weber-Rendu): recurrent epistaxis + telangiectasiae on lips, tongue, fingertips + family history; screen for pulmonary/hepatic AVM; refer genetics + ENT',
        'Child <2 years: recurrent epistaxis in an infant — consider non-accidental injury (NAI); juvenile nasopharyngeal angiofibroma in adolescent males',
        'Uncontrolled posterior bleed — ENT same day',
        'Concern for coagulopathy: check FBC + clotting if multiple bruising, petechiae, systemic symptoms',
        'Recurrent epistaxis not responding to first-line treatment',
      ],
    },

    { type: 'heading', level: 2, text: 'Clinical Assessment' },

    {
      type: 'list',
      items: [
        'History: frequency, duration, amount of blood, which nostril, direction of flow (forwards = anterior, backwards into throat = posterior)',
        'Triggers: nose picking (most common), nose blowing, cocaine use (erodes septum and nasal mucosa — crusting, perforation), anticoagulants, NSAIDs, decongestant overuse (rhinitis medicamentosa)',
        'Medications: anticoagulants (warfarin, DOACs — check INR if warfarin), antiplatelet agents, NSAIDs — these do not CAUSE epistaxis but increase severity',
        'Family history: HHT (autosomal dominant — if patient or relative has multiple telangiectasiae and recurrent epistaxis, screen), haemophilia, other bleeding diathesis',
        'Examination: anterior rhinoscopy with Thudichum speculum (size 4 is ideal) — look for bleeding point, nasal septal deviation, crusting, telangiectasiae, foreign body; examine oropharynx for posterior bleeding; check skin for bruising/petechiae',
        'BP: hypertension is commonly associated with epistaxis — treat if significantly elevated but usually not the sole cause',
      ],
    },

    { type: 'heading', level: 2, text: 'Treatment of Recurrent Anterior Epistaxis' },

    {
      type: 'table',
      headers: ['Treatment', 'Details'],
      rows: [
        ['Naseptin cream (first line)', 'Chlorhexidine + neomycin antiseptic cream; reduces Staphylococcal colonisation and vestibulitis which cause crusting and recurrence; apply to the inner nose with a cotton bud 2 weeks; contraindicated in peanut allergy (arachis oil base) — use Mupirocin or Vaseline as alternatives'],
        ['Silver nitrate cautery', 'Applied to bleeding point in clinic under direct vision; only ONE side at a time (bilateral = septal perforation risk); local anaesthetic spray first; co-prescribe Naseptin aftercare'],
        ['Electrocautery', 'ENT procedure for persistent bleeding points; more controlled than silver nitrate'],
        ['Topical treatments', 'Chloramphenicol eye drops 0.5% applied intranasally — alternative antiseptic; simple petroleum jelly (Vaseline) to soften crusts'],
        ['Saline irrigation', 'Daily nasal douching (NeilMed or Neti pot) — keeps mucosa moist, reduces crusting, reduces recurrence'],
      ],
    },

    { type: 'heading', level: 2, text: 'Nasal Injury and Septal Haematoma' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Septal Haematoma — Immediate ENT Drainage',
      items: [
        'Collection of blood between perichondrium and septal cartilage after trauma',
        'Examination: bilateral boggy swelling of the nasal septum (unlike unilateral septal deviation) — soft, fluctuant, obliterates the nasal airway bilaterally',
        'If missed: cartilage necrosis → saddle nose deformity (permanent cosmetic and functional defect)',
        'Also risk: abscess formation (septal abscess) and intracranial spread — rare but catastrophic',
        'Management: IMMEDIATE ENT referral for incision and drainage under LA/GA + through-and-through sutures or dental roll to prevent reaccumulation; post-op antibiotics',
      ],
    },

    {
      type: 'list',
      items: [
        'Simple nasal fracture without deformity: nasal precautions (no contact sport/blowing nose 3 weeks), analgesia — no ENT referral if no deformity and no concern for compound fracture',
        'Nasal fracture WITH deformity: refer to ENT emergency clinic within 7 days for assessment — rhinoplasty (surgical realignment) must be done before oedema sets in but not too early (usually 5–10 days post-injury after swelling subsides); after 14 days fracture becomes fixed',
        'Compound/complex nasal fracture or concern for open fracture: ED referral',
        'Signs of base of skull fracture: raccoon eyes, Battle\'s sign, CSF rhinorrhoea — admit immediately',
      ],
    },

    { type: 'heading', level: 2, text: 'Epistaxis and Anticoagulation' },

    {
      type: 'list',
      items: [
        'Anticoagulation does NOT cause nosebleeds — it WORSENS existing bleeds',
        'Do NOT advise stopping anticoagulation for a straightforward epistaxis — the risk of stopping (stroke, PE) outweighs the risk of a nosebleed',
        'For warfarin: check INR — if supratherapeutic, adjust dose; standard guidance',
        'For uncontrolled epistaxis on anticoagulation: attend A&E for ENT review, haematology advice; reversal agents if severe (phytomenadione for warfarin, idarucizumab for dabigatran, andexanet alfa for apixaban/rivaroxaban)',
        'Post-bleed: review anticoagulation indication and risk-benefit with patient; consider if epistaxis is recurrent and anticoagulation truly necessary',
      ],
    },

  ],
}
