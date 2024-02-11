import { Container } from '@justsloth/core'
import { graphql, useStaticQuery } from 'gatsby'
import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'

import * as Styled from './Layout.style'
import { Header } from '../../components/Header'
import { IndexQuery } from '../../types/type'
import { filteredByDraft, localStorage } from '../../utils'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import { Sidebar } from '../Sidebar'

export const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const data: IndexQuery = useStaticQuery(allPostsQuery)
  const { nodes } = data.allMarkdownRemark
  // Sidebar Folding
  const [fold, setFold] = useState(false)

  const posts = useMemo(
    () =>
      filteredByDraft(nodes).map((it) => ({
        name: it.frontmatter.title,
        slug: it.fields.slug,
        series: it.frontmatter.series || null,
        image: it.frontmatter.image?.publicURL || '/profile.png',
        tags: it.frontmatter.tags || []
      })),
    [nodes]
  )

  useEffect(() => {
    setFold(localStorage.get('sidebar-fold') === 'true')
  }, [])

  useEffect(() => {
    localStorage.set('sidebar-fold', String(fold))
  }, [fold])

  return (
    <Styled._Wrapper>
      <Container>
        <NavBar />
        <Sidebar posts={posts} fold={fold} />
        <Header fold={fold} folding={handleFold} />
        <Styled._Main fold={fold}>
          <Styled._Article>{children}</Styled._Article>
          <Footer />
        </Styled._Main>
      </Container>
    </Styled._Wrapper>
  )

  function handleFold(): void {
    const flag = !fold
    setFold(flag)
  }
}

const allPostsQuery = graphql`
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
          tags
        }
      }
    }
  }
`
