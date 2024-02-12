import { Image } from '@justsloth/core'

import { NavCategoryType, NavFooterType } from '../src/components/NavBar/type'
import { useConfig } from '../src/hooks/useConfig'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import profile from '../static/profile.png'

const { profile: profileData } = useConfig()

export const NavCategory: NavCategoryType = {
  me: {
    name: '제가 궁금하세요?',
    icon: <Image src={profile} width={55} height={55} />,
    link: '/resume'
  },
  home: {
    name: '홈으로 갑니다!',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
        <path d='M9 22V12h6v10' />
      </svg>
    ),
    link: '/'
  },
  posts: {
    name: '제가 쓴 글을 보세요!',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662' />
      </svg>
    ),
    link: '/posts'
  }
  // tags: {
  //   name: '태그 단위로 글을 보세요!',
  //   icon: (
  //     <svg
  //       viewBox='0 0 24 24'
  //       width='32'
  //       height='32'
  //       stroke='currentColor'
  //       strokeWidth='1.5'
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       fill='none'
  //       shapeRendering='geometricPrecision'
  //     >
  //       <path d='M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z' />
  //       <path d='M7 7h.01' />
  //     </svg>
  //   ),
  //   link: '/tags'
  // }
}

export const NavFooter: NavFooterType = {
  github: {
    name: 'Github',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' />
      </svg>
    ),
    link: `https://github.com/${profileData.github}`
  },
  secondary: {
    name: 'LinkedIn',
    icon: (
      <svg
        width='32'
        height='32'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        strokeWidth='1.55'
        shapeRendering='geometricPrecision'
      >
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
        <rect x='2' y='9' width='4' height='12'></rect>
        <circle cx='4' cy='4' r='2'></circle>
      </svg>
    ),
    link: `https://www.linkedin.com/in/${profileData.linkedin}`
  }
}
