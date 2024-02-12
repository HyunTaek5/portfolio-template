import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Container, Text } from '@justsloth/core'
import { graphql, navigate } from 'gatsby'
import { FC } from 'react'

import { ListTable } from '../components/ListTable'
import { Seo } from '../components/Seo'
import { useConfig } from '../hooks/useConfig'
import { IndexQuery, PageProps, Post } from '../types/type'
import { filteredByDraft, getTime } from '../utils'

const IndexPage: FC<PageProps<IndexQuery>> = (props) => {
  const { data } = props
  const { nodes } = data.allMarkdownRemark
  const { profile } = useConfig()

  return (
    <Container>
      <Seo name='홈' />
      <Header>
        <Wrapper>
          <Title>
            <Text as='span' size={48} weight={800}>
              어서오세요!
            </Text>
            <Text as='h1' size={48} weight={800} lineHeight={56}>
              저는 {profile.author}입니다.
            </Text>
          </Title>
          <SubTitle>
            <Text as='p' size={20} weight={400} lineHeight={40}>
              짤막한 개인 소개를 쓰는 란이에요!
            </Text>
          </SubTitle>
          <Button size='large' color='alert' onClick={() => moveToLocation('/posts')}>
            <Text size={16} weight={800}>
              블로그 글 보러갈까요?
            </Text>
          </Button>
        </Wrapper>
      </Header>
      <Contents>
        <ListTable title='최근 글' list={filteredNewestPosts(nodes)} />
      </Contents>
    </Container>
  )

  function getSimpleDate(target: string): string {
    const [, month, day] = getTime(target)

    return `${Number(month)}월 ${Number(day)}일`
  }

  function moveToLocation(target: string): void {
    navigate(target)
  }

  function filteredNewestPosts(posts: Post[]): { name: string; slug: string; date: string }[] {
    const cuttingCount = 5

    return filteredByDraft(posts)
      .filter((_, idx) => idx < cuttingCount + 1)
      .map((it) => ({
        name: it.frontmatter.title,
        slug: it.fields.slug,
        date: getSimpleDate(it.frontmatter.date)
      }))
  }
}

const HandAnimation = keyframes`
  0% {
    transform: rotateZ(0);
  }

  50% {
    transform: rotateZ(30deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 2rem;
`

const Header = styled.header`
  padding: 2rem 0;
`

const Title = styled.div`
  margin-bottom: 1.5rem;
  max-width: 550px;

  & > span:first-of-type {
    position: relative;

    &::after {
      position: absolute;
      right: -4rem;
      top: -0.5rem;
      content: '✋';
      display: block;
      animation: ${HandAnimation} 1s ease-in-out infinite;
    }
  }
`

const SubTitle = styled.div`
  max-width: 550px;
  margin-bottom: 2rem;
`

const Contents = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 2rem;
`

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          image {
            publicURL
          }
          draft
        }
      }
    }
  }
`
