import { Text, Tooltip, useWindowSize } from '@justsloth/core'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import { FC, useEffect, useMemo, useState } from 'react'

import * as Styled from './NavBar.style'
import { NavCategory, NavFooter } from '../../../config/navbar'

export const NavBar: FC = () => {
  const location = useLocation()
  const categories = useMemo(() => Object.values(NavCategory), [])
  const footer = useMemo(() => Object.values(NavFooter), [])
  const [visibleTooltip, setVisibleTooltip] = useState(true)
  const windowSize = useWindowSize()

  useEffect(() => {
    setVisibleTooltip(!((windowSize.width ?? 0) <= 1024))
  }, [windowSize])

  return (
    <Styled._Container>
      <Styled._Section>
        <Styled._Wrapper>
          {categories.map((it) => (
            <Styled._Category checked={isCategoryActive(it.link)} key={it.name} onClick={() => moveToLocation(it.link)}>
              {visibleTooltip ? (
                <Tooltip text={<Text>{it.name}</Text>} position='right'>
                  <div>{it.icon}</div>
                </Tooltip>
              ) : (
                it.icon
              )}
            </Styled._Category>
          ))}
        </Styled._Wrapper>
        <Styled._Wrapper>
          {footer.map((it) =>
            it.link === '' ? undefined : (
              <Styled._Category key={it.name} onClick={() => moveToLocation(it.link, true)}>
                {visibleTooltip ? (
                  <Tooltip text={<Text>{it.name}</Text>} position='right'>
                    <div>{it.icon}</div>
                  </Tooltip>
                ) : (
                  it.icon
                )}
              </Styled._Category>
            )
          )}
        </Styled._Wrapper>
      </Styled._Section>
    </Styled._Container>
  )

  function moveToLocation(target: string, isNewTab = false): void {
    if (isNewTab) {
      window.open(target, '_blank')
      return
    }

    navigate(target)
  }

  function isCategoryActive(target: string): boolean {
    return location.pathname === target
  }
}
