import { PropsWithChildren } from 'react'

import { ReturningUseTooltip, TooltipProps } from './type'

export function useTooltip<T extends TooltipProps>(props: T): T & PropsWithChildren<ReturningUseTooltip> {
  const { position = 'top', type = 'primary' } = props

  return {
    ...props,
    position,
    type
  }
}
