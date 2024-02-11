import * as React from 'react'

export type CollapseSizeType = 'small' | 'medium'

export interface CollapseProps {
  title: string
  subtitle: string
  defaultExpanded: boolean
  size: CollapseSizeType
  card: boolean
}

export interface CollapseGroupProps {
  children: React.ReactNode
}

export interface ReturningUseCollapse {
  expanded: boolean
  fold: () => void
}
