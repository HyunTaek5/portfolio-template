import { Footer as FooterWrapper, FooterGroup, FooterLink, Spacer, Text } from '@justsloth/core'
import { Link } from 'gatsby'
import { FC } from 'react'

import * as Styled from './Footer.style'
import { useConfig } from '../../hooks/useConfig'

export const Footer: FC = () => {
  const nowYear = new Date().getFullYear()
  const { profile } = useConfig()

  return (
    <div>
      <Styled._FooterBox>
        <FooterWrapper>
          <FooterGroup title='사이트 맵'>
            <FooterLink custom>
              <Link to='/'>홈</Link>
            </FooterLink>
            <FooterLink custom>
              <Link to='/posts'>포스트</Link>
            </FooterLink>
            <FooterLink custom>
              <Link to='/resume'>이력서</Link>
            </FooterLink>
          </FooterGroup>
          <FooterGroup title='관련 사이트'>
            <FooterLink href='https://eight20.tistory.com'>다른 블로그</FooterLink>
            <FooterLink href='https://team-joon.com/'>Techeer</FooterLink>
            <FooterLink href='https://medium.com/team-joon'>Techeer 기술블로그</FooterLink>
          </FooterGroup>
        </FooterWrapper>
      </Styled._FooterBox>
      <Styled._FooterAllRightReserve>
        <Text size={12}>
          Copyright ⓒ {nowYear} <Link to={`${profile.siteUrl}`}>@{profile.author}</Link> All rights reserved.
        </Text>
        <Spacer y={0.1} />
        <Text size={12}>
          Created by <Link to={`${profile.siteUrl}`}>@{profile.author}</Link>. Powered By{' '}
          <a href='https://github.com/Vallista/vallista-land'>@Vallista-land</a>
        </Text>
        <Spacer y={0.5} />
      </Styled._FooterAllRightReserve>
    </div>
  )
}
