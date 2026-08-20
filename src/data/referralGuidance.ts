/**
 * Referral-processing guidance, distilled from the practice master document
 * "Referral Guidance Information" (Darwin, dated 13.08.26). Two uses:
 *  1) GUIDANCE_SECTIONS — the "How to send referrals" hub panel.
 *  2) guidanceForForm() — a contextual "how to send" tag on the form viewer.
 * The master PDF is always one click away for the authoritative detail.
 */
import type { ReferralForm } from './referralForms'

/** URL of the full master guidance PDF (opens in the hub / new tab). */
export const MASTER_GUIDANCE_URL =
  'pdfs/Referral%20forms%20SES/Referral%20Guidance%20Information%20%28up%20to%20date%2013.08.26%29.pdf'
export const MASTER_GUIDANCE_UPDATED = '13 Aug 2026'

export interface GuidanceSection {
  icon: string
  title: string
  points: string[]
}

export const GUIDANCE_SECTIONS: GuidanceSection[] = [
  {
    icon: '🎙️', title: 'Golden rule — Lexacom first',
    points: [
      'Send all referrals via Lexacom where possible. If no Lexacom in your room, type the referral and send a PATIENT task to the Secretarial Team (correct priority).',
      'If not retrieving details from the clinical system, type the patient’s EMIS number AND surname, and repeat at the start of the dictation as a safety check.',
      'Do NOT print forms and leave them in trays — secretaries work across Greenwood & Lichfield, so everything must be sent electronically.',
    ],
  },
  {
    icon: '📄', title: 'Completing a form',
    points: [
      'Complete the form, save it to the patient’s record, then send a Lexacom dictation to the typing pool to say it’s ready to send.',
      'For imaging, District Nurses, and any form with an email address → send it yourself via Accumail.',
    ],
  },
  {
    icon: '🚨', title: '2-week-wait (2WW) cancer',
    points: [
      'Accepted on the e-Referral Service (e-RS) ONLY. Access the form via Web in the 2WW folder — it auto-populates; you fill in the rest and save to the record.',
      'Send a Lexacom dictation marked IMMEDIATE. Tell the patient to contact us a week later if they’ve heard nothing.',
      'Default trust is Queen’s Hospital Burton. Burton does NOT accept under-25s except Dermatology & Breast, and has no Brain/CNS service (use New Cross or UHNM).',
      'Children’s 2WW Dermatology → email the form to bcw.appointments@nhs.net.',
      '2WW Dermatology to WHT/RWT is via the Health Harmonie image-capture form — state lesion site & size (per lesion), or it’s rejected.',
    ],
  },
  {
    icon: '🩻', title: 'Imaging / radiology',
    points: [
      'Use ICE if you’re registered. Burton accept ICE only for tests in their catalogue; there is no walk-in service.',
      'If not on ICE, use the signed forms integrated in EMIS Web and send via Accumail (radiology admin: uhdb.admin.radiology@nhs.net).',
    ],
  },
  {
    icon: '☎️', title: 'Secretaries & contacts',
    points: [
      'Secretaries: Jo & Nicky (Greenwood), Alison & Lindsey (Lichfield). Alison ext 2215, Jo ext 3366, Nicky ext 3365.',
      'Secretaries: darwin.secretaries@nhs.net · Practice: darwinmedical.practice@nhs.net',
      'Temporary residents CANNOT be referred via e-RS.',
    ],
  },
]

export interface FormGuidance { method: string; email?: string; note?: string }

/** Contextual "how to send" tip for a specific referral form. */
export function guidanceForForm(f: ReferralForm): FormGuidance {
  const hay = `${f.title} ${f.keywords}`.toLowerCase()

  if (f.category === '2WW Cancer') {
    if (hay.includes('derm') && f.age === 'Child')
      return { method: 'e-RS, or email the completed form (children’s 2WW dermatology)', email: 'bcw.appointments@nhs.net', note: 'Lexacom marked Immediate. Burton takes under-25s only for Derm & Breast.' }
    return { method: 'e-Referral Service (e-RS) only — access via Web in the 2WW folder, then Lexacom marked IMMEDIATE', note: 'Burton is default; no under-25s except Derm/Breast; no Brain/CNS at Burton (use New Cross/UHNM).' }
  }
  if (f.category === 'Imaging')
    return { method: 'ICE if registered, otherwise Accumail the signed EMIS form', email: 'uhdb.admin.radiology@nhs.net', note: 'Burton accept ICE only for catalogue tests; no walk-in.' }
  if (f.category === 'Community Services' || f.category === 'Palliative')
    return { method: 'Complete & save to record, then send yourself via Accumail', note: 'District Nurses and any form carrying an email address go via Accumail.' }
  if (f.category === 'Admin')
    return { method: 'Practice-internal / admin — see the referral guidance document for handling' }

  return { method: 'Save the form to the record + send a Lexacom dictation to the typing pool', note: 'If the form has an email address on it, send it yourself via Accumail instead.' }
}
