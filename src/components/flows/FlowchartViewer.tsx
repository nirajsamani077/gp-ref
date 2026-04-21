import { useEffect } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  useReactFlow,
  ReactFlowProvider,
  type NodeTypes,
} from '@xyflow/react'
import GPOsNode from './GPOsNode'
import { NODE_VARIANT_META } from '../../data/flowcharts'
import type { Flowchart } from '../../data/flowcharts'

const nodeTypes: NodeTypes = { gpos: GPOsNode }

interface Props {
  flowchart: Flowchart
  onBack: () => void
}

// Inner component — must be inside ReactFlowProvider to use useReactFlow
function FlowchartViewerInner({ flowchart, onBack }: Props) {
  const { fitView } = useReactFlow()

  useEffect(() => {
    const t = setTimeout(() => fitView({ padding: 0.2, duration: 300 }), 50)
    return () => clearTimeout(t)
  }, [flowchart.id, fitView])

  // Inject type for nodeTypes; keep data flexible so it works without full generic
  const nodes = flowchart.nodes.map(n => ({ ...n, type: 'gpos' }))

  const edges = flowchart.edges.map(e => ({
    ...e,
    type: 'smoothstep' as const,
    animated: e.animated !== undefined ? e.animated : true,
    style: { stroke: '#94a3b8', strokeWidth: 2, ...(e.style ?? {}) },
    labelStyle: { fontSize: 11, fontWeight: 600, fill: '#475569' },
    labelBgStyle: { fill: '#fff', fillOpacity: 0.9 },
    labelBgPadding: [4, 6] as [number, number],
    labelBgBorderRadius: 4,
  }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>
      {/* Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '10px 16px',
        background: '#fff',
        borderBottom: '1px solid #dde6f0',
        flexShrink: 0,
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: 'none', border: '1px solid #dde6f0', cursor: 'pointer',
            fontSize: 13, fontWeight: 600, color: '#2563a8',
            padding: '5px 10px', borderRadius: 8,
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#eef4fb' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
        >
          ← Back
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 14, fontWeight: 700, color: '#0f2a4a',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {flowchart.title}
          </div>
          {flowchart.lastReviewed && (
            <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 1 }}>
              Last reviewed: {flowchart.lastReviewed} · Source: NICE / BSG guidelines
            </div>
          )}
        </div>
      </div>

      {/* React Flow canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          zoomOnScroll={true}
          panOnScroll={false}
          panOnDrag={true}
          minZoom={0.2}
          maxZoom={2.5}
          style={{ background: '#f8fafc' }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#dde6f0" />
          <Controls showInteractive={false} style={{ bottom: 90, right: 12 }} />
        </ReactFlow>
      </div>

      {/* Legend strip */}
      <div style={{
        display: 'flex', gap: 10, padding: '8px 16px',
        background: '#fff', borderTop: '1px solid #dde6f0',
        flexShrink: 0, overflowX: 'auto', scrollbarWidth: 'none',
        alignItems: 'center',
      }}>
        {(Object.entries(NODE_VARIANT_META) as [keyof typeof NODE_VARIANT_META, typeof NODE_VARIANT_META[keyof typeof NODE_VARIANT_META]][]).map(([key, m]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
            <div style={{
              width: 11, height: 11, borderRadius: 3,
              background: m.bg, border: `2px solid ${m.border}`,
              flexShrink: 0,
            }} />
            <span style={{ fontSize: 10, color: '#64748b', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Exported wrapper — provides the ReactFlow context
export default function FlowchartViewer(props: Props) {
  return (
    <ReactFlowProvider>
      <FlowchartViewerInner {...props} />
    </ReactFlowProvider>
  )
}
