import React, { FC } from 'react'

import Svg from '../../Svg'
import { IconProps } from '../../type'
import { useIcon } from '../../useIcon'

export const ChevronsLeft: FC<Partial<IconProps>> = (props) => {
  const { size, color, fill, ...otherProps } = useIcon(props)

  return (
    <Svg viewBox='0 0 24 24' width={size} height={size} stroke={color} fill='none' {...otherProps}>
      <path d='M11 17l-5-5 5-5' />
      <path d='M18 17l-5-5 5-5' />
    </Svg>
  )
}
