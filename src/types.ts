export type TabId = 'notes' | 'symptoms' | 'links' | 'calculators' | 'flows' | 'forms' | 'images'

export interface Tab {
  id: TabId
  label: string
  icon: string
  iconNode?: React.ReactNode
}
