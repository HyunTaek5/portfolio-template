import { FC, PropsWithChildren } from 'react'

import { RadioContext } from './context'
import { RadioGroupProps } from './type'
import { useRadioGroup } from './useRadioGroup'
import { useUniqueId } from '../../hooks/useUniqueId'

/**
 * # RadioGroup
 *
 * @description [vercel design radio](https://vercel.com/design/radio)
 *
 * 라디오 그룹 컴포넌트 입니다. {@link Radio}와 같이 사용해야합니다.
 *
 * @param {RadioGroupProps} {@link RadioGroupProps} 기본적인 Radio 요소
 *
 * @example ```tsx
 * <RadioGroup>
 *  <Radio value='value1' />
 *  <Radio value='value2' />
 * </RadioGroup>
 * ```
 */
export const RadioGroup: FC<PropsWithChildren<Partial<RadioGroupProps>>> = ({ children, ...props }) => {
  const state = useRadioGroup(props)
  const uniqueId = useUniqueId()

  return (
    <RadioContext
      state={{
        uniqueId,
        ...state
      }}
    >
      {children}
    </RadioContext>
  )
}
