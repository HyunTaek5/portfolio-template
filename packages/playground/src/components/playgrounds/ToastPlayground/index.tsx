import { Button, Container, useToasts } from '@justsloth/core'
import { FC } from 'react'

const TogglePlayground: FC = () => {
  const { message } = useToasts()

  return (
    <Container row>
      <Container center>
        <Button onClick={() => message({ text: 'Hello' })}>Toast 출력!</Button>
      </Container>
    </Container>
  )
}

export default TogglePlayground
