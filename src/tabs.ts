import { createElement } from 'react'
import { GitBranch } from 'lucide-react'
import type { Tab } from './types'

export const TABS: Tab[] = [
  { id: 'notes',       label: 'Notes',       icon: '📝' },
  { id: 'symptoms',    label: 'Symptoms',    icon: '🩺' },
  { id: 'links',       label: 'Links',       icon: '🔗' },
  { id: 'calculators', label: 'Calculators', icon: '🧮' },
  {
    id: 'flows',
    label: 'Flows',
    icon: '',
    iconNode: createElement(GitBranch, { size: 20, strokeWidth: 2 }),
  },
  { id: 'forms',       label: 'Forms',       icon: '📋' },
]
