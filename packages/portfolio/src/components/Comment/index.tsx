import { Spinner, useMount } from '@justsloth/core'
import { useRef, useState, FC } from 'react'

import * as Styled from './Comment.style'

export const Comment: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<{ status: 'pending' | 'success' | 'failure' }>({ status: 'pending' })

  useMount(() => {
    const hasScript = ref.current?.children ?? []

    if (hasScript.length > 0) return

    const scriptEl = document.createElement('script')
    scriptEl.onload = () => {
      setState({ status: 'success' })
    }
    scriptEl.onerror = () => {
      setState({ status: 'failure' })
    }
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'HyunTaek5/justsloth')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    ref.current?.appendChild(scriptEl)
  })

  return (
    <Styled._Wrapper>
      {state.status !== 'success' && <Spinner size={50} />}
      <div ref={ref}></div>
    </Styled._Wrapper>
  )
}
