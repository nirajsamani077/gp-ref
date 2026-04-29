import type { Note } from '../data/notes'

export const neonatalHeadLumps: Note = {
  id: 'neonatal-head-lumps',
  title: 'Neonatal Head Lumps',
  subtitle: 'Caput succedaneum, chignon, cephalohaematoma and subgaleal haematoma — differentiating and managing birth-related scalp swellings',
  tags: ['paediatrics'],

  body: 'neonatal head lump caput succedaneum cephalhaematoma cephalohaematoma subgaleal haematoma chignon ventouse vacuum delivery instrumental delivery scalp swelling newborn birth injury jaundice anaemia suture line periosteum parietal bone neonatal jaundice boggy',

  content: [

    {
      type: 'callout',
      variant: 'info',
      title: 'Reassure parents — most are benign and self-limiting',
      items: [
        'Scalp swellings in newborns are common, especially after instrumental delivery (ventouse or forceps)',
        'The vast majority — caput, chignon, cephalhaematoma — resolve without treatment and cause no long-term harm',
        'The key clinical task is to distinguish these from subgaleal haematoma, which is rare but can be life-threatening',
        'Good parent communication is essential: these lumps often alarm parents; clear explanation and a safety-net are key',
      ],
    },

    // ── COMPARISON TABLE ─────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Differential Diagnosis — Side by Side' },

    {
      type: 'table',
      headers: ['Feature', 'Caput Succedaneum', 'Chignon', 'Cephalohaematoma', 'Subgaleal Haematoma'],
      rows: [
        ['What it is', 'Oedema/fluid in scalp soft tissue above periosteum', 'Ventouse suction cup swelling', 'Blood between skull bone and periosteum (subperiosteal)', 'Blood between periosteum and galea aponeurosis (above periosteum, under scalp)'],
        ['Onset', 'Present at birth', 'Present at birth / within hours', 'Appears 24–72 hours after birth', 'Appears hours to days after birth'],
        ['Crosses suture lines?', '✅ Yes — diffuse, poorly defined', '✅ Yes — circular, matches cup', '❌ No — stops at suture lines', '✅ Yes — can spread widely'],
        ['Feel', 'Soft, boggy, pitting', 'Soft, circular, well-demarcated', 'Firm, tense, well-defined; may feel fluctuant later', 'Boggy, fluctuant, may feel like a "fluid wave" across scalp'],
        ['Location', 'Usually vertex (presenting part)', 'Exact site of suction cup', 'Parietal bone most common', 'Can cover entire scalp — frontal to occipital'],
        ['Typical delivery', 'Any delivery (especially prolonged)', 'Ventouse', 'Ventouse or forceps', 'Ventouse (higher risk with repeated attempts)'],
        ['Complications', 'None — resolves in days', 'None — resolves within hours', 'Neonatal jaundice (haem breakdown), anaemia, hypotension if large; rarely calcifies', '🔴 Significant blood loss (up to 40% circulating volume can collect here) — haemorrhagic shock, anaemia, DIC'],
        ['Resolution', '2–3 days', 'Hours', 'Weeks to 3 months (may harden as it calcifies — reassure)', 'Requires monitoring; does not resolve quickly'],
        ['Action', 'Reassure and safety-net', 'Reassure — will disappear within hours', 'Reassure; monitor for jaundice/anaemia; review if concerned', '🔴 Urgent hospital review — potential for haemodynamic instability'],
      ],
      caption: 'The key distinguishing feature: cephalohaematoma does NOT cross suture lines (subperiosteal, bone-bound); caput and subgaleal DO cross suture lines. Subgaleal can expand rapidly — this is the dangerous one.',
    },

    // ── IMAGES ───────────────────────────────────────────────────────────────────
    {
      type: 'image',
      src: '/images/cephalhaematoma-newborn.webp',
      alt: 'Newborn baby with cephalohaematoma — well-defined unilateral swelling over parietal bone that does not cross suture lines',
      caption: 'Cephalohaematoma: blood collects between the skull (periosteum) and the parietal bone. The swelling is well-defined and does NOT cross suture lines — it is contained by the periosteal attachment at the suture margins.',
    },

    {
      type: 'image',
      src: '/images/infant-with-caput-succedaneum.jpg',
      alt: 'Infant with caput succedaneum — diffuse boggy scalp swelling crossing suture lines, present at birth',
      caption: 'Caput succedaneum: oedema in the scalp soft tissue above the periosteum, caused by pressure during delivery. The swelling is diffuse, soft, pitting and crosses suture lines. Resolves spontaneously within 2–3 days.',
    },

    // ── INDIVIDUAL CONDITIONS ─────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Condition Detail' },

    { type: 'heading', level: 3, text: 'Caput Succedaneum' },

    {
      type: 'list',
      items: [
        'Subcutaneous oedema above the periosteum at the presenting scalp vertex — caused by pressure of the scalp against the dilating cervix during labour',
        'Present at birth; diffuse, soft, pitting; crosses suture lines',
        'No treatment needed — resolves spontaneously within 2–3 days',
        'May cause superficial bruising or petechiae overlying the swelling — this is normal and resolves with it',
        'Rarely of any clinical significance — full reassurance to parents',
      ],
    },

    { type: 'heading', level: 3, text: 'Chignon' },

    {
      type: 'list',
      items: [
        'Localised oedema and congestion created by the ventouse suction cup — a circular, well-demarcated swelling exactly matching the cup',
        'Present immediately after ventouse delivery; typically very soft',
        'Disappears within a few hours — parents need early reassurance as it looks alarming',
        'No specific action required beyond reassurance',
      ],
    },

    { type: 'heading', level: 3, text: 'Cephalohaematoma' },

    {
      type: 'list',
      items: [
        'Subperiosteal haemorrhage — bleeding between the skull bone and the overlying periosteum',
        'Caused by rupture of blood vessels during delivery, particularly with ventouse or forceps',
        'Typically appears 24–72 hours after birth (as slow venous bleeding accumulates)',
        'Well-defined, tense, firm; confined to one bone — does NOT cross suture lines',
        'Most commonly over the parietal bone; may be bilateral (less common)',
        'Takes weeks to months to fully resolve — reassure parents it will go; it may feel harder as it calcifies before resolving',
        'Does not require aspiration or treatment in the vast majority of cases',
      ],
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'Cephalohaematoma — Watch for Complications',
      items: [
        'Neonatal jaundice: haemoglobin breakdown from a large haematoma releases bilirubin — monitor jaundice carefully (check SBR if jaundice visible before 24 hours or clinically significant)',
        'Anaemia: large haematoma can result in significant blood loss into the collection — check FBC if baby appears pale or unwell',
        'Hypotension: rare but can occur with a very large haematoma',
        'Rare: underlying skull fracture associated with the haematoma — if suspected (unusual shape, overlying laceration, abnormal neurology) → paediatric review',
        'Calcification: the haematoma may feel harder at 6–8 weeks as it begins to calcify before reabsorbing — reassure parents this is expected',
      ],
    },

    { type: 'heading', level: 3, text: 'Subgaleal Haematoma' },

    {
      type: 'callout',
      variant: 'danger',
      title: 'Subgaleal Haematoma — Potentially Life-Threatening',
      items: [
        'Bleeding into the potential space between the galea aponeurosis and the periosteum — this space is large enough to accommodate the entire neonatal blood volume',
        'Crosses all suture lines and extends from the orbital ridges to the nape of the neck',
        'Can result in haemorrhagic shock, severe anaemia and DIC — up to 40% of circulating blood volume can be lost',
        'Presents with: boggy, fluctuant scalp swelling that increases after birth; pallor; tachycardia; hypotension; dropping haematocrit',
        'Risk factors: ventouse delivery (especially multiple cup applications), prolonged labour, coagulopathy',
        '🔴 Any suspected subgaleal haematoma = urgent hospital admission — IV access, FBC, coagulation, blood cross-match, close monitoring',
        'Do not delay — this is a neonatal emergency',
      ],
    },

    // ── SAFETY NET ───────────────────────────────────────────────────────────────
    { type: 'heading', level: 2, text: 'Safety-Netting for Parents' },

    {
      type: 'callout',
      variant: 'tip',
      title: 'What to tell parents',
      items: [
        'Explain the type of swelling clearly — use simple terms ("a collection of fluid / blood under the scalp")',
        'Reassure it will resolve: caput in 2–3 days; chignon in hours; cephalhaematoma in weeks to months',
        'For cephalhaematoma: warn that it may feel firmer / harder at the 6-week check — this is normal calcification and will still resolve',
        'Seek urgent review if: the baby becomes pale, floppy, unusually sleepy, feeds poorly, the swelling grows rapidly, or jaundice develops before 24 hours or looks severe',
        'Check jaundice: use Bilitool or Bilicurve — if visible before 24 hours or in high-risk zone → check SBR urgently',
        'Midwife and health visitor will be seeing the baby regularly in the first days — flag the cephalhaematoma in any handover documentation',
      ],
    },

    {
      type: 'notelink',
      notes: [
        { id: 'six-eight-week-check', label: '6–8 Week Check', subtitle: 'Full newborn and maternal postnatal review' },
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE CKS — Neonatal Jaundice', url: 'https://cks.nice.org.uk/topics/jaundice-neonatal/' },
        { label: 'Bilicurve — SBR calculator', url: 'https://www.bilicurve.com/' },
        { label: 'RCPCH — Neonatal head swellings', url: 'https://www.rcpch.ac.uk/' },
        { label: 'Patient.info — Cephalohaematoma', url: 'https://patient.info/doctor/cephalohaematoma' },
      ],
    },

  ],
}
