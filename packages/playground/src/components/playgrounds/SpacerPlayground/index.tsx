import { Colors, Container, Spacer } from '@justsloth/core'
import { FC } from 'react'

const TogglePlayground: FC = () => {
  return (
    <Container>
      <Container>
        <Container style={{ background: Colors.PRIMARY.FOREGROUND }}>
          <Spacer />
        </Container>
        <Container style={{ background: Colors.PRIMARY.FOREGROUND }}>
          <Spacer y={2} />
        </Container>
        <Container style={{ background: Colors.PRIMARY.FOREGROUND }}>
          <Spacer y={3} />
        </Container>
      </Container>
      <Container row>
        <Container style={{ background: Colors.PRIMARY.FOREGROUND }} />
        <Spacer x={3} y={3} />
        <Container style={{ background: Colors.PRIMARY.FOREGROUND }} />
      </Container>
    </Container>
  )
}

export default TogglePlayground
