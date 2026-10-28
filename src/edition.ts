import type { TabId } from './types'
import type { ResultKind } from './lib/searchIndex'

/**
 * Build-time edition flag — one codebase, two shipped apps.
 *  - 'full'   : the complete GP Os (all tabs) deployed at /gp-ref/.
 *  - 'darwin' : "Darwin Os" — a lean, practice-specific edition that keeps only
 *               Forms (referral forms + pathways/protocols + guidance hub) and
 *               Links, with a proof-of-concept disclaimer. Deployed at
 *               /gp-ref/darwin/. Drops Notes/Symptoms/Ask/Calculators/Explainers
 *               per clinical-safety advice (DCB 0129/0160): no in-app medical
 *               device (calculators) and no LLM "ask" feature.
 */
export type EditionId = 'full' | 'darwin'

export interface EditionConfig {
  id: EditionId
  /** Header wordmark: first part is solid, "Os" is gradient. */
  brand: string
  /** Browser tab / manifest name. */
  title: string
  /** Tabs visible in this edition, in order. */
  tabIds: TabId[]
  /** Tab shown on load and when the home button is pressed. */
  defaultTab: TabId
  /** Show the proof-of-concept disclaimer on first load. */
  disclaimer: boolean
  /** Whether the AI "Ask" feature is available (command palette row + tab). */
  ask: boolean
  /** Result kinds the global search is allowed to surface. */
  searchKinds: Set<ResultKind>
}

const EDITION_ID = (import.meta.env.VITE_EDITION as EditionId | undefined) ?? 'full'

const EDITIONS: Record<EditionId, EditionConfig> = {
  full: {
    id: 'full',
    brand: 'GP',
    title: 'GP Os',
    tabIds: ['notes', 'symptoms', 'links', 'calculators', 'forms', 'explainers', 'ask'],
    defaultTab: 'notes',
    disclaimer: false,
    ask: true,
    searchKinds: new Set<ResultKind>(['note', 'symptom', 'referral', 'form', 'link', 'calculator']),
  },
  darwin: {
    id: 'darwin',
    brand: 'Darwin',
    title: 'Darwin Os',
    tabIds: ['home', 'forms', 'links'],
    defaultTab: 'home',
    disclaimer: true,
    ask: false,
    searchKinds: new Set<ResultKind>(['referral', 'form', 'link']),
  },
}

export const EDITION: EditionConfig = EDITIONS[EDITION_ID]
export const IS_DARWIN = EDITION.id === 'darwin'
