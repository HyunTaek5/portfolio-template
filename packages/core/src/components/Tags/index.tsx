import styled from '@emotion/styled'
import { FC, PropsWithChildren } from 'react'

import { TagsProps } from './type'

export const Tags: FC<PropsWithChildren<Partial<TagsProps>>> = (props) => {
  const { children } = props

  return <Container>{children}</Container>
}

const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`
