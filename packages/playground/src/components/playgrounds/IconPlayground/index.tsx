import { Container, Icon, Text } from '@justsloth/core'
import { FC } from 'react'

const IconPlayground: FC = () => {
  return (
    <Container>
      <Container row>
        <Icon.Bell />
        <Text>
          align top
          <Icon.Aperture align='top' />
        </Text>
        <Text>
          align middle
          <Icon.Aperture align='middle' />
        </Text>
        <Text>
          align bottom
          <Icon.Aperture align='bottom' />
        </Text>
      </Container>
    </Container>
  )
}

export default IconPlayground
