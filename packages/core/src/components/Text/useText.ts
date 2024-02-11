import { PropsWithChildren } from 'react'

import { ReturningUseText, TextProps } from './type'

const initProps: Partial<TextProps> = {
  as: 'p',
  size: 14,
  wrap: true
}

export function useText<T extends Partial<TextProps>>(
  props: PropsWithChildren<T>
): PropsWithChildren<ReturningUseText<T>> {
  return {
    ...initProps,
    ...props
  }
}
