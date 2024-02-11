import { Text, Badge, Container, Spacer, Tooltip, copy, useToasts } from '@justsloth/core'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import { FC, PropsWithChildren } from 'react'

import * as Styled from './PostHeader.style'
import { getTime } from '../../utils'

interface PostHeaderProps {
  title: string
  tags?: string[]
  image?: string
  date: string
  author: string
  timeToRead: number
}

export const PostHeader: FC<PropsWithChildren<PostHeaderProps>> = (props) => {
  const { title, tags, date, author, timeToRead, children } = props
  const [year, month, day] = getTime(date)
  const location = useLocation()
  const toast = useToasts()
  const dateToString = `${year}년 ${Number(month)}월 ${Number(day)}일`

  return (
    <Styled._Header>
      <Styled._Wrapper>
        <Styled._HeaderTitle>
          <Text as='h1' size={40} weight={800}>
            {title}
          </Text>
          <Spacer y={1} />
          {tags && (
            <Container row wrap='wrap' gap={0.5}>
              {tags.map((it) => (
                <Badge key={it} size='large'>
                  #{it}
                </Badge>
              ))}
            </Container>
          )}
          <Spacer y={1} />
          <Styled._BottomBox>
            <Styled._TextContainer>
              <Text size={16} as='span'>
                Written by <Link to='/'>{author}</Link>
              </Text>
              <Spacer y={0.25} />
              <Text size={14} as='span'>
                {dateToString} · {timeToRead} min read
              </Text>
            </Styled._TextContainer>
            <Styled._IconContainer>
              <Tooltip text='링크드인 공유' position='top'>
                <Styled._Icon onClick={shareToLinkedIn}>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    shapeRendering='geometricPrecision'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect x='2' y='9' width='4' height='12'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                </Styled._Icon>
              </Tooltip>
              <Tooltip text='링크 복사' position='top'>
                <Styled._Icon onClick={linkCopy}>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    stroke='currentColor'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    shapeRendering='geometricPrecision'
                  >
                    <path d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71' />
                    <path d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71' />
                  </svg>
                </Styled._Icon>
              </Tooltip>
            </Styled._IconContainer>
          </Styled._BottomBox>
        </Styled._HeaderTitle>
        <Spacer y={1} />
        <Styled._ChildrenWrapper>{children}</Styled._ChildrenWrapper>
      </Styled._Wrapper>
    </Styled._Header>
  )

  function shareToLinkedIn(): void {
    toast.success('링크드인 공유 페이지로 이동합니다.')
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${decodeURIComponent(location.href)}`, '_blank')
  }

  function linkCopy(): void {
    copy(decodeURIComponent(location.href))
    toast.success('링크를 복사했습니다.')
  }
}
