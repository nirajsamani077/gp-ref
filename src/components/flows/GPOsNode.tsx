import { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import type { NodeProps } from '@xyflow/react'
import { NODE_VARIANT_META } from '../../data/flowcharts'
import type { GPOsNodeData } from '../../data/flowcharts'

export default function GPOsNode({ data, selected }: NodeProps) {
  const [expanded, setExpanded] = useState(false)
  const nodeData = data as GPOsNodeData
  const meta = NODE_VARIANT_META[nodeData.variant] ?? NODE_VARIANT_META.action
  const hasDetail = Boolean(nodeData.detail)

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ opacity: 0, pointerEvents: 'none', width: 1, height: 1 }}
      />
      <div
        onClick={() => { if (hasDetail) setExpanded(e => !e) }}
        style={{
          minWidth: 160,
          maxWidth: 240,
          padding: expanded ? '12px 14px' : '10px 14px',
          backgroundColor: meta.bg,
          border: `2px solid ${meta.border}`,
          borderRadius: 12,
          boxShadow: selected
            ? `0 0 0 3px ${meta.border}55, 0 4px 16px rgba(0,0,0,0.12)`
            : '0 2px 8px rgba(0,0,0,0.08)',
          cursor: hasDetail ? 'pointer' : 'default',
          transition: 'box-shadow 0.15s, padding 0.15s',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {/* Label row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: meta.text, lineHeight: 1.3 }}>
            {nodeData.label}
          </span>
          {hasDetail && (
            <span style={{
              fontSize: 13, color: meta.border, flexShrink: 0, lineHeight: 1,
              transform: expanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s',
              display: 'inline-block',
            }}>▾</span>
          )}
        </div>

        {/* Expanded detail */}
        {expanded && nodeData.detail && (
          <div style={{
            marginTop: 8,
            paddingTop: 8,
            borderTop: `1px solid ${meta.border}44`,
            fontSize: 11.5,
            color: meta.text,
            lineHeight: 1.5,
            opacity: 0.9,
          }}>
            {nodeData.detail}
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ opacity: 0, pointerEvents: 'none', width: 1, height: 1 }}
      />
    </>
  )
}
