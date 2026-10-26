export type TabId = 'notes' | 'symptoms' | 'links' | 'calculators' | 'forms' | 'explainers' | 'images' | 'ask'

export interface Tab {
  id: TabId
  label: string
  icon: string
  iconNode?: React.ReactNode
}
