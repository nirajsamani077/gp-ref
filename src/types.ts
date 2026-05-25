export type TabId = 'notes' | 'symptoms' | 'links' | 'calculators' | 'forms' | 'images' | 'ask'

export interface Tab {
  id: TabId
  label: string
  icon: string
  iconNode?: React.ReactNode
}
