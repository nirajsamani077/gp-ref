import type { Note } from '../data/notes'

export const hernias: Note = {
  id: 'hernias',
  title: 'Abdominal Wall & Groin Hernias',
  subtitle: 'Inguinal vs femoral, umbilical/epigastric/incisional, watchful waiting vs repair and strangulation red flags',
  tags: ['surgery'],

  body: `hernia inguinal direct indirect femoral umbilical paraumbilical epigastric incisional spigelian obturator sportsman groin pubic tubercle incarceration strangulation obstruction mesh repair laparoscopic TEP TAPP open Lichtenstein processus vaginalis childhood hernia truss reducible cough impulse watchful waiting`,

  content: [

    { type: 'heading', level: 2, text: 'Overview' },
    {
      type: 'para',
      text: 'A hernia is protrusion of a viscus (or its covering) through a defect in the wall that normally contains it. Abdominal wall and groin hernias are extremely common and are a frequent reason for surgical referral. The two clinical priorities are: (1) recognising the acutely complicated hernia (incarceration/strangulation), which is a surgical emergency, and (2) deciding who needs elective repair versus who can be safely watched.',
    },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Incarceration / Strangulation — Surgical Emergency',
      items: [
        'A tense, tender, irreducible hernia with pain, overlying skin changes, vomiting or signs of bowel obstruction → same-day surgical assessment / ED (strangulation compromises blood supply → bowel ischaemia and perforation).',
        'Femoral hernias strangulate far more readily (narrow, rigid femoral canal) → refer ALL femoral hernias for repair regardless of symptoms.',
        'Infant inguinal hernias have a high incarceration risk → urgent (not routine) surgical referral.',
        'A previously reducible hernia that becomes painful and irreducible is incarcerated until proven otherwise.',
      ],
    },

    { type: 'heading', level: 2, text: 'Types, Landmarks & Management' },
    {
      type: 'table',
      headers: ['Hernia', 'Location / features', 'Management'],
      rows: [
        ['Inguinal (indirect)', 'Through the deep ring along the canal (patent processus vaginalis); can descend into the scrotum; commonest hernia overall', 'Elective mesh repair (see below); ~95% occur in males'],
        ['Inguinal (direct)', 'Bulges directly through a weak posterior canal wall (Hesselbach\'s triangle), medial to the inferior epigastric vessels', 'Elective mesh repair; less likely to strangulate than indirect'],
        ['Femoral', 'Below and lateral to the pubic tubercle (inguinal hernias are above and medial); commoner in women', 'Refer ALL — high strangulation risk'],
        ['Umbilical', 'Symmetrical bulge through the umbilical ring; common in infants', 'Infants: usually resolves by ~4–5 years → refer only if persisting/complicated. Adults: often repaired'],
        ['Paraumbilical', 'Asymmetrical bulge just above/below the umbilicus (adults)', 'Refer — do not resolve; moderate strangulation risk'],
        ['Epigastric', 'Midline, between umbilicus and xiphisternum', 'Routine referral; low strangulation risk'],
        ['Incisional', 'Through a previous surgical scar/weak fascia', 'Refer for assessment; repair can be complex (mesh)'],
        ['Spigelian / obturator', 'Rare; Spigelian through the linea semilunaris; obturator in thin elderly women (Howship–Romberg medial thigh pain)', 'Refer — high complication risk, often present acutely'],
      ],
    },

    { type: 'heading', level: 2, text: 'Assessment' },
    {
      type: 'list',
      items: [
        'Examine standing AND lying: look and feel for a cough impulse, whether it is reducible, and its relation to the pubic tubercle (inguinal = superomedial; femoral = inferolateral).',
        'Assess for tenderness, skin changes and signs of obstruction (distension, vomiting, absolute constipation).',
        'Differentiate other groin lumps: lymph nodes, saphena varix (soft, compressible, bluish, disappears on lying flat, cough thrill), femoral artery aneurysm (pulsatile/expansile), lipoma, and — in men — an undescended testis or hydrocele.',
        '"Sportsman\'s groin" (inguinal disruption) causes activity-related groin pain WITHOUT a true hernia — consider in athletes; manage with physiotherapy first.',
        'Imaging is not usually needed; ultrasound (± Valsalva) or CT/MRI helps with occult or complex hernias.',
      ],
    },

    { type: 'heading', level: 2, text: 'Elective Repair vs Watchful Waiting' },
    {
      type: 'para',
      text: 'For an asymptomatic or minimally symptomatic inguinal hernia in an adult, watchful waiting is a reasonable option — the annual risk of strangulation is low, and many eventually opt for surgery as symptoms develop. Femoral hernias are the key exception and should always be repaired.',
    },
    {
      type: 'table',
      headers: ['Approach', 'Detail'],
      rows: [
        ['Open mesh (Lichtenstein)', 'Standard for most primary unilateral inguinal hernias; can be done under local/regional anaesthetic — useful for frail/high-risk patients'],
        ['Laparoscopic (TEP/TAPP)', 'Preferred for bilateral or recurrent inguinal hernias, and for active patients (less chronic pain, faster return to activity); needs general anaesthetic'],
        ['Truss', 'Non-operative containment only if unfit for/declining surgery; does not treat the defect and can complicate later repair'],
        ['Post-op advice', 'Return to light activity/driving in ~1–2 weeks; heavy manual work often ~4–6 weeks (individualised). Warn about chronic post-herniorrhaphy groin pain (up to ~10%) and recurrence'],
      ],
    },

    { type: 'heading', level: 2, text: 'Referral Criteria' },
    {
      type: 'table',
      headers: ['Situation', 'Refer to', 'Urgency'],
      rows: [
        ['Irreducible/tender hernia, obstruction or strangulation', 'Surgery / ED', 'Same day (emergency)'],
        ['Any femoral hernia', 'General surgery', 'Urgent'],
        ['Infant/child inguinal hernia', 'Paediatric surgery', 'Urgent'],
        ['Symptomatic inguinal / paraumbilical / epigastric / incisional hernia', 'General surgery', 'Routine'],
        ['Asymptomatic inguinal hernia (patient wishes repair or symptoms progress)', 'General surgery', 'Routine'],
        ['Persistent umbilical hernia beyond ~4–5 years (child)', 'Paediatric surgery', 'Routine'],
      ],
    },

    { type: 'heading', level: 2, text: 'Patient Information Resources' },
    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Hernia (Inguinal/Femoral)', url: 'https://cks.nice.org.uk/topics/hernia/' },
        { label: 'NHS — Inguinal Hernia Repair', url: 'https://www.nhs.uk/conditions/inguinal-hernia-repair/' },
        { label: 'Royal College of Surgeons — Hernia', url: 'https://www.rcseng.ac.uk/patient-care/recovering-from-surgery/' },
        { label: 'BHS — British Hernia Society', url: 'https://britishherniasociety.org/' },
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'scrotal-groin-lumps', label: 'Scrotal & Groin Lumps', subtitle: 'Differential for the groin/scrotal lump' },
        { id: 'hiatus-hernia', label: 'Hiatus Hernia', subtitle: 'Diaphragmatic hernia — reflux and rolling-hernia risk' },
        { id: 'testicular-penile-cancer', label: 'Testicular & Penile Cancer', subtitle: 'Scrotal swelling in the groin-lump differential' },
      ],
    },

  ],
}
