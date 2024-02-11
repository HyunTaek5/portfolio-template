import { PropsWithChildren } from 'react'

import { ReturningTabsProps } from './type'

export function useTabs<T>(props: PropsWithChildren<T>): T & PropsWithChildren<ReturningTabsProps> {
  return {
    ...props
  }
}
