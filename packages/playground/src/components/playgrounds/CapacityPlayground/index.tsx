import { Container, Capacity } from '@justsloth/core'
import { FC } from 'react'

const CapacityPlayground: FC = () => {
  return (
    <Container>
      <Capacity value={10} />
      <Capacity value={20} />
      <Capacity value={30} />
      <Capacity value={40} />
      <Capacity value={50} />
      <Capacity value={60} />
      <Capacity value={70} />
      <Capacity value={80} />
      <Capacity value={90} />
      <Capacity value={100} />
    </Container>
  )
}

export default CapacityPlayground
