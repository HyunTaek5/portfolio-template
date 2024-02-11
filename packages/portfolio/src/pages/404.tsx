import styled from '@emotion/styled'
import { Spacer, Text } from '@justsloth/core'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import { FC, useEffect } from 'react'

const NotFoundPage: FC = () => {
  const location = useLocation()

  useEffect(() => {
    const normalizeUrlArr = location.pathname
      .split('/')
      .filter((it) => !!it)
      .map((it) => {
        const result = Number(it)
        if (isNaN(result)) return it
        return result
      })

    const count = normalizeUrlArr.reduce<number>((acc, curr) => {
      if (typeof curr === 'number') acc += 1
      return acc
    }, 0)

    if (count > 2) {
      window.location.href = `${location.origin}/${normalizeUrlArr.slice(3).join('/')}/`
    }
  }, [])

  return (
    <Center>
      <Player
        autoplay
        loop
        src='https://assets9.lottiefiles.com/packages/lf20_zyu0ctqb.json'
        style={{ maxWidth: 450, borderRadius: 90 }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
      <Spacer y={0.5} />
      <Text size={16}>페이지를 찾지 못했어요 :(</Text>
      <Spacer y={0.5} />
      <Link to='/'>
        <Text size={16}>홈으로 가기</Text>
      </Link>
    </Center>
  )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default NotFoundPage
