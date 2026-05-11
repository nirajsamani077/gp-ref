import type { Note } from '../data/notes'

export const chronicPain: Note = {
  id: 'chronic-pain',
  title: 'Chronic Pain',
  subtitle: 'Primary vs secondary, PAIN mnemonic, opioid deprescribing and specific syndromes',
  tags: ['rheumatology', 'prescribing', 'msk'],

  body: 'chronic pain primary secondary fibromyalgia CRPS complex regional pain syndrome neuropathic pain LBP low back pain sciatica START Back tool PAIN mnemonic exercise psychological CBT ACT acceptance commitment therapy acupuncture antidepressant amitriptyline duloxetine pain clinic opioid deprescribing tapering 5Rs morphine equivalent dose NSAID gabapentinoid',

  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'What Is Chronic Pain?',
      items: [
        'Pain lasting >3 months; often biopsychosocial in nature',
        'Chronic PRIMARY pain: no clear underlying cause, OR impact is out of proportion to any identifiable cause (e.g. fibromyalgia, CRPS, chronic widespread pain)',
        'Chronic SECONDARY pain: pain due to an identifiable underlying condition (e.g. OA, endometriosis, neuropathy)',
        'Both types benefit from the same approach — a biopsychosocial model; secondary pain additionally targets the underlying condition',
        'NICE NG193 (2021): substantially changed guidance — paracetamol, NSAIDs, opioids and gabapentinoids are NOT recommended for chronic primary pain',
      ],
    },

    { type: 'heading', level: 2, text: 'Management — PAIN Framework' },

    {
      type: 'callout',
      variant: 'info',
      title: 'PAIN Mnemonic — Treatments with Evidence',
      items: [
        'P — Physical activity: supervised group-based exercise programme (NOT just physio); core component',
        'A — Acupuncture: up to 5 hours total; may help; via community physiotherapy or First Contact Practitioner (FCP)',
        'I — Integrated/Psychological therapy: CBT (cognitive behavioural therapy) or ACT (acceptance and commitment therapy) — for psychological distress associated with chronic pain; mindfulness techniques',
        'N — No opioids, NSAIDs, paracetamol, gabapentinoids, or steroid injections for chronic primary pain — these lack evidence and may cause harm',
        'Consider antidepressants (off-label): amitriptyline, duloxetine, SSRI — shared decision, trial basis',
        'Refer to specialist integrated pain team if above measures insufficient',
      ],
    },

    { type: 'heading', level: 2, text: 'Specific Chronic Pain Syndromes' },

    {
      type: 'table',
      headers: ['Condition', 'Key Management Points'],
      rows: [
        ['Non-specific low back pain (LBP)', 'STarT Back tool for stratification. If mild: self-help, physio, CBT. NSAID + PPI short-term if medication needed. Refer pain clinic if persistent. No paracetamol alone, no opiates routinely. For nerve root/sciatica: NSAID + PPI, weak opiate max 12 weeks, consider spinal injection (specialist), surgery (microdiscectomy) if refractory.'],
        ['Neuropathic pain (non-sciatic)', 'First line: amitriptyline or gabapentinoid (pregabalin/gabapentin) or duloxetine. Second line: combination or switch. Tramadol only for rescue therapy (NOT other opioids). Trigeminal neuralgia: carbamazepine first line.'],
        ['Complex regional pain syndrome (CRPS)', 'Post-fracture/surgery; disproportionate pain + sensory change + autonomic changes (swelling, colour change). Acute CRPS often resolves <1 year. Physiotherapy and OT key. Oral prednisolone and bisphosphonate may have a role. Refer pain clinic.'],
        ['Fibromyalgia', 'See fibromyalgia note. Exercise central; avoid opioids; low-dose amitriptyline/duloxetine may help sleep and pain; CBT/ACT; refer rheumatology if uncertain about diagnosis.'],
        ['OA pain', 'Weight loss, exercise, ice, topical NSAIDs first; then oral NSAIDs + PPI; then steroid injection (short-lived benefit, max 3–4x/year). Avoid paracetamol/codeine/opioids routinely.'],
        ['IBS-associated pain', 'Initial: FODMAP diet, mebeverine/buscopan. If failed: low-dose amitriptyline 5–10 mg. SSRI 2nd line. CBT/hypnotherapy if >12 months. No opioids.'],
        ['Headache/migraine-related', 'Acute: NSAID/aspirin, paracetamol, triptan. Prophylaxis to prevent MOH. No opioids or gabapentinoids — risk of medication overuse headache.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Opioid Deprescribing — The 5 Rs' },

    {
      type: 'list',
      items: [
        'Refrain — from prescribing in the first place; justify every new opioid prescription',
        'Review — the medication and the patient regularly; set a review date at every prescription',
        'Reframe — the patient\'s understanding of pain; biopsychosocial model; CBT framework',
        'Reorganise — the medication: suitable, slow weaning plan; taper by 10% every 1–2 weeks; aim for immediate-release formulations before stopping; do NOT switch opioid type during taper (high risk of OD or withdrawal)',
        'Refer — to pain clinic if unable to taper or if TDD morphine equivalent >300 mg (high-dose dependency — requires formal detox via pain clinic or substance misuse service)',
      ],
    },

    { type: 'heading', level: 2, text: 'Opioid Conversion (Chronic Pain — See also Cancer Pain Note)' },

    {
      type: 'table',
      headers: ['Conversion', 'Ratio'],
      rows: [
        ['Oral codeine / tramadol → oral morphine', '÷ 10'],
        ['Oral morphine → oral oxycodone', '÷ 2 (oxycodone ~1.5–2× more potent)'],
        ['Fentanyl patch 12 mcg/h', '= 30 mg/24h oral morphine'],
        ['Buprenorphine patch 10 mcg/h', '= 24 mg/24h oral morphine'],
      ],
      caption: 'Taper dose by 10% every 1–2 weeks. If patient is on >300 mg TDD oral morphine equivalent: refer to pain clinic or drug treatment service for formal detox. Warn patients about driving risks — opioids significantly impair driving ability.',
    },

    {
      type: 'callout',
      variant: 'warning',
      title: 'What NOT to Do in Chronic Primary Pain',
      items: [
        'Do NOT offer paracetamol, NSAIDs, opioids, or gabapentinoids as first-line for chronic primary pain (NICE NG193)',
        'Do NOT offer TENS or biofeedback — no evidence for chronic primary pain',
        'Do NOT offer spinal injections or surgery without clear structural indication',
        'Do NOT dismiss or invalidate pain — all pain is real, even without identifiable pathology',
        'Do NOT prescribe opioids "on a trial basis" without clear assessment, goals and review date',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: '📍 Local Referral — Darwin Practice, Lichfield',
      items: [
        'Community physiotherapy / FCP (First Contact Practitioner): via practice or direct access at Darwin Practice',
        'Pain clinic: UHDB Queen\'s Hospital Burton Pain Management Service — via e-RS (include functional assessment, current medications, previous treatments tried)',
        'Alternative: Good Hope Hospital (UHB) Pain Management or Walsall Manor MSK/Pain service',
        'Talking Therapies (CBT for chronic pain): MPFT Staffordshire self-referral — staffordshire.everyonehealth.co.uk or 0333 005 0095',
        'Living Well With Pain: lwwp.nhs.uk — self-management resource; recommend at every chronic pain appointment',
        'Drug dependence (opioid tapering support): STARS drug and alcohol service — 01785 270080; humankind.starswest@nhs.net',
      ],
    },

    {
      type: 'linkrow',
      links: [
        { label: 'NICE NG193 — Chronic Primary Pain', url: 'https://www.nice.org.uk/guidance/ng193' },
        { label: 'NICE NG59 — Low Back Pain', url: 'https://www.nice.org.uk/guidance/ng59' },
        { label: 'Faculty of Pain Medicine — Opioid Aware', url: 'https://fpm.ac.uk/opioids-aware' },
        { label: 'Living Well With Pain', url: 'https://lwwp.nhs.uk/' },
        { label: 'STarT Back Tool', url: 'https://startback.hfac.keele.ac.uk/' },
      ],
    },
  ],
}
