import type { Node, Edge } from '@xyflow/react'

export type NodeVariant = 'start' | 'decision' | 'action' | 'urgent' | 'monitor'
export type FlowCategory = 'haematology' | 'endocrine' | 'cardiology' | 'respiratory' | 'renal' | 'neurology' | 'paediatrics' | 'mental' | 'msk' | 'other'

export interface GPOsNodeData extends Record<string, unknown> {
  label: string
  detail?: string
  variant: NodeVariant
}

export interface GPOsEdgeData extends Record<string, unknown> {
  label?: string
}

export interface Flowchart {
  id: string
  title: string
  description: string
  category: FlowCategory
  lastReviewed?: string
  nodes: Node<GPOsNodeData>[]
  edges: Edge<GPOsEdgeData>[]
}

export const FLOW_CATEGORY_META: Record<FlowCategory, { label: string; border: string; bg: string; text: string; pill: string }> = {
  haematology:  { label: 'Haematology',   border: '#fc8181', bg: '#fff5f5', text: '#9b2335', pill: '#fed7d7' },
  endocrine:    { label: 'Endocrine',      border: '#f6c05c', bg: '#fffff0', text: '#744210', pill: '#fefcbf' },
  cardiology:   { label: 'Cardiology',     border: '#f56565', bg: '#fff5f5', text: '#822727', pill: '#fed7d7' },
  respiratory:  { label: 'Respiratory',    border: '#63b3ed', bg: '#ebf8ff', text: '#2a4365', pill: '#bee3f8' },
  renal:        { label: 'Renal',          border: '#ed8936', bg: '#fffaf0', text: '#7b341e', pill: '#feebc8' },
  neurology:    { label: 'Neurology',      border: '#7f9cf5', bg: '#ebf4ff', text: '#3c366b', pill: '#c3dafe' },
  paediatrics:  { label: 'Paediatrics',    border: '#68d391', bg: '#f0fff4', text: '#1c4532', pill: '#c6f6d5' },
  mental:       { label: 'Mental Health',  border: '#9f7aea', bg: '#faf5ff', text: '#44337a', pill: '#e9d8fd' },
  msk:          { label: 'MSK',            border: '#f6ad55', bg: '#fffaf0', text: '#7b341e', pill: '#feebc8' },
  other:        { label: 'Other',          border: '#a0aec0', bg: '#f7fafc', text: '#2d3748', pill: '#e2e8f0' },
}

export const NODE_VARIANT_META: Record<NodeVariant, { bg: string; border: string; text: string; label: string }> = {
  start:    { bg: '#1d4ed8', border: '#1e40af', text: '#ffffff', label: 'Presentation' },
  decision: { bg: '#d97706', border: '#b45309', text: '#ffffff', label: 'Decision' },
  action:   { bg: '#15803d', border: '#166534', text: '#ffffff', label: 'Action / Treat' },
  urgent:   { bg: '#dc2626', border: '#b91c1c', text: '#ffffff', label: 'Urgent / Refer' },
  monitor:  { bg: '#7c3aed', border: '#6d28d9', text: '#ffffff', label: 'Monitor / Review' },
}

import { abnormalLFTs } from './flows/abnormalLFTs'

export const FLOWCHARTS: Flowchart[] = [
  abnormalLFTs,
]
