import type { Tab, TabId } from './types'

export const TABS: Tab[] = [
  { id: 'home',        label: 'Home',        icon: '🏠' },
  { id: 'notes',       label: 'Notes',       icon: '📝' },
  { id: 'symptoms',    label: 'Symptoms',    icon: '🩺' },
  { id: 'links',       label: 'Links',       icon: '🔗' },
  { id: 'calculators', label: 'Calculators', icon: '🧮' },
  { id: 'forms',       label: 'Forms',       icon: '📋' },
  { id: 'explainers',  label: 'Explainers',  icon: '🎬' },
  { id: 'ask',         label: 'Ask',         icon: '💬' },
]

export const TABS_BY_ID: Record<string, Tab> = Object.fromEntries(TABS.map(t => [t.id, t]))

/** Build the visible tab list for an edition, in the edition's order. */
export function tabsFor(ids: TabId[]): Tab[] {
  return ids.map(id => TABS_BY_ID[id]).filter(Boolean)
}
