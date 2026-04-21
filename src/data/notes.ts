export type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'para'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'callout'; variant: 'info' | 'warning' | 'tip' | 'danger'; title: string; items: string[] }
  | { type: 'linkrow'; links: Array<{ label: string; url: string }> }
  | { type: 'calclink'; calculators: Array<{ id: string; label: string; subtitle?: string }> }

export interface Note {
  id: string
  title: string
  subtitle: string
  tags: string[]
  body: string        // plain-text for search indexing
  content: ContentBlock[]
}

// Notes are registered here — imported from src/notes/
import { microcyticAnaemia }       from '../notes/microcyticAnaemia'
import { coeliacDisease }          from '../notes/coeliacDisease'
import { achillesTendinopathy }    from '../notes/achillesTendinopathy'
import { acneRosacea }             from '../notes/acneRosacea'
import { adenomyosis }             from '../notes/adenomyosis'
import { acuteOtitisMedia }        from '../notes/acuteOtitisMedia'
import { otitisExterna }           from '../notes/otitisExterna'
import { twoWeekWait }             from '../notes/twoWeekWait'
import { perinealTears }           from '../notes/perinealTears'
import { sixEightWeekCheck }       from '../notes/sixEightWeekCheck'
import { aaa }                    from '../notes/aaa'
import { abdominalMigraine }      from '../notes/abdominalMigraine'
import { abnormalLft }           from '../notes/abnormalLft'
import { abortionForms }         from '../notes/abortionForms'
import { epilepsyAdults }        from '../notes/epilepsyAdults'
import { epilepsyChildhood }     from '../notes/epilepsyChildhood'
import { seizureEmergency }      from '../notes/seizureEmergency'
import { acneVulgaris }          from '../notes/acneVulgaris'
import { actinicKeratosis }      from '../notes/actinicKeratosis'
import { acupuncture }           from '../notes/acupuncture'
import { limpingChild }          from '../notes/limpingChild'
import { acuteCough }            from '../notes/acuteCough'
import { chronicCough }          from '../notes/chronicCough'
import { asthmaDiagnosis }       from '../notes/asthmaDiagnosis'
import { asthmaAdult }           from '../notes/asthmaAdult'
import { asthmaChild }           from '../notes/asthmaChild'
import { asthmaEmergency }       from '../notes/asthmaEmergency'
import { acuteTesticularPain }   from '../notes/acuteTesticularPain'
import { acutelyDisturbedPerson } from '../notes/acutelyDisturbedPerson'
import { adrenalInsufficiency }   from '../notes/adrenalInsufficiency'
import { diabetesDiagnosis }      from '../notes/diabetesDiagnosis'
import { diabetesT2DM }           from '../notes/diabetesT2DM'
import { diabetesT1DM }           from '../notes/diabetesT1DM'
import { diabeticComplications }  from '../notes/diabeticComplications'
import { adhdAdult }              from '../notes/adhdAdult'
import { adhdChild }              from '../notes/adhdChild'
import { scoliosis }              from '../notes/scoliosis'
import { adultConstipation }      from '../notes/adultConstipation'
import { palliativeEOL }          from '../notes/palliativeEOL'
import { atrialFibrillation }     from '../notes/atrialFibrillation'
import { amd }                    from '../notes/amd'
import { aki }                    from '../notes/aki'
import { rhinosinusitis }         from '../notes/rhinosinusitis'
import { nasalPolyps }            from '../notes/nasalPolyps'
import { alcoholEtoh }            from '../notes/alcoholEtoh'
import { substanceMisuse }        from '../notes/substanceMisuse'
import { haemMalignancies }       from '../notes/haemMalignancies'
import { allergicReactions }      from '../notes/allergicReactions'
import { alopecia }               from '../notes/alopecia'
import { dementia }               from '../notes/dementia'
import { amenorrhoea }            from '../notes/amenorrhoea'
import { analCancer }             from '../notes/analCancer'
import { analFissure }            from '../notes/analFissure'

// Enrich each note's body with text extracted from content blocks (captions, headings, list items, etc.)
function enrichBody(note: Note): Note {
  const extra: string[] = []
  for (const block of note.content) {
    if (block.type === 'image' && block.caption) extra.push(block.caption)
    if (block.type === 'image' && block.alt)     extra.push(block.alt)
    if (block.type === 'heading')                extra.push(block.text)
    if (block.type === 'para')                   extra.push(block.text)
    if (block.type === 'list')                   extra.push(...block.items)
    if (block.type === 'callout')                extra.push(block.title, ...block.items)
    if (block.type === 'table') {
      extra.push(...block.headers)
      block.rows.forEach(row => extra.push(...row))
      if (block.caption) extra.push(block.caption)
    }
    if (block.type === 'linkrow') extra.push(...block.links.map(l => l.label))
  }
  return { ...note, body: note.body + ' ' + extra.join(' ') }
}

export const NOTES: Note[] = [
  microcyticAnaemia,
  coeliacDisease,
  achillesTendinopathy,
  acneRosacea,
  adenomyosis,
  acuteOtitisMedia,
  otitisExterna,
  twoWeekWait,
  perinealTears,
  sixEightWeekCheck,
  aaa,
  abdominalMigraine,
  abnormalLft,
  abortionForms,
  epilepsyAdults,
  epilepsyChildhood,
  seizureEmergency,
  acneVulgaris,
  actinicKeratosis,
  acupuncture,
  limpingChild,
  acuteCough,
  chronicCough,
  asthmaDiagnosis,
  asthmaAdult,
  asthmaChild,
  asthmaEmergency,
  acuteTesticularPain,
  acutelyDisturbedPerson,
  adrenalInsufficiency,
  diabetesDiagnosis,
  diabetesT2DM,
  diabetesT1DM,
  diabeticComplications,
  adhdAdult,
  adhdChild,
  scoliosis,
  adultConstipation,
  palliativeEOL,
  atrialFibrillation,
  amd,
  aki,
  rhinosinusitis,
  nasalPolyps,
  alcoholEtoh,
  substanceMisuse,
  haemMalignancies,
  allergicReactions,
  alopecia,
  dementia,
  amenorrhoea,
  analCancer,
  analFissure,
].map(enrichBody)
