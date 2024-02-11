import { PropsWithChildren } from 'react'

import { ReturningUseTag, TagProps } from './type'

export function useTag<T extends Partial<TagProps>>(props: T): T & PropsWithChildren<ReturningUseTag> {
  return {
    ...props,
    hasRemove: !!props.onRemove
  }
}
