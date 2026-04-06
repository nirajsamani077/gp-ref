export type TabId = 'notes' | 'links' | 'calculators' | 'forms' | 'images'

export interface Tab {
  id: TabId
  label: string
  icon: string
}
