export type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'para'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'image'; src: string; alt: string; caption?: string; align?: 'left' | 'right' | 'full' }
  | { type: 'callout'; variant: 'info' | 'warning' | 'tip' | 'danger'; title: string; items: string[] }
  | { type: 'linkrow'; links: Array<{ label: string; url: string }> }

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
]
