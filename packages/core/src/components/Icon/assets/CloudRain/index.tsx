import React, { FC } from 'react'

import Svg from '../../Svg'
import { IconProps } from '../../type'
import { useIcon } from '../../useIcon'

export const CloudRain: FC<Partial<IconProps>> = (props) => {
  const { size, color, fill, ...otherProps } = useIcon(props)

  return (
    <Svg viewBox='0 0 24 24' width={size} height={size} stroke={color} fill='none' {...otherProps}>
      <path d='M16 13v8' />
      <path d='M8 13v8' />
      <path d='M12 15v8' />
      <path d='M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25' />
    </Svg>
  )
}
