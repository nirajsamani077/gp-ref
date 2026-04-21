import { Handle, Position } from '@xyflow/react'
import type { NodeProps } from '@xyflow/react'
import { NODE_VARIANT_META } from '../../data/flowcharts'
import type { GPOsNodeData } from '../../data/flowcharts'

// Nodes fire a custom DOM event that the FlowchartViewer listens to,
// so the detail sheet renders outside the clipped React Flow canvas.
export function fireNodeDetail(data: GPOsNodeData) {
  window.dispatchEvent(new CustomEvent('gpos-node-detail', { detail: data }))
}

export default function GPOsNode({ data, selected }: NodeProps) {
  const nodeData = data as GPOsNodeData
  const meta = NODE_VARIANT_META[nodeData.variant] ?? NODE_VARIANT_META.action
  const hasDetail = Boolean(nodeData.detail)

  function handleClick() {
    if (hasDetail) fireNodeDetail(nodeData)
  }

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ opacity: 0, pointerEvents: 'none', width: 1, height: 1 }}
      />
      <div
        onClick={handleClick}
        style={{
          minWidth: 200,
          maxWidth: 260,
          padding: '10px 14px',
          backgroundColor: meta.bg,
          border: `2px solid ${meta.border}`,
          borderRadius: 12,
          boxShadow: selected
            ? `0 0 0 3px ${meta.border}88, 0 6px 20px rgba(0,0,0,0.2)`
            : '0 3px 10px rgba(0,0,0,0.18)',
          cursor: hasDetail ? 'pointer' : 'default',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          transition: 'box-shadow 0.15s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{
            fontSize: 12.5, fontWeight: 700, color: meta.text,
            lineHeight: 1.35, letterSpacing: '-0.1px',
          }}>
            {nodeData.label}
          </span>
          {hasDetail && (
            <span style={{
              fontSize: 14, color: meta.text, flexShrink: 0,
              opacity: 0.75, lineHeight: 1,
            }}>›</span>
          )}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ opacity: 0, pointerEvents: 'none', width: 1, height: 1 }}
      />
    </>
  )
}
