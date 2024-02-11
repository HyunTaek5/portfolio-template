import { Container, Image } from '@justsloth/core'
import { FC } from 'react'

const ImagePlayground: FC = () => {
  return (
    <Container>
      <Image
        src={`https://assets.vercel.com/image/upload/q_auto/front/zeit/og.png`}
        width={540}
        height={300}
        margin={0}
      />

      <Image
        src={`https://assets.vercel.com/image/upload/q_auto/front/assets/design/components/triangle.gif`}
        width={540}
        height={309}
        margin={0}
        caption='Source: giphy.com'
        captionSpacing={20}
      />
    </Container>
  )
}

export default ImagePlayground
