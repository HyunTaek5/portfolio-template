import React, { FC } from 'react'

import Svg from '../../Svg'
import { IconProps } from '../../type'
import { useIcon } from '../../useIcon'

export const ArrowLeftCircle: FC<Partial<IconProps>> = (props) => {
  const { size, color, fill, ...otherProps } = useIcon(props)

  return (
    <Svg viewBox='0 0 24 24' width={size} height={size} stroke={color} fill='none' {...otherProps}>
      <circle cx='12' cy='12' r='10' fill={fill} />
      <path d='M12 8l-4 4 4 4' />
      <path d='M16 12H8' />
    </Svg>
  )
}
