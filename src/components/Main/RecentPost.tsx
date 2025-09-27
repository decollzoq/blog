// src/sections/HeroPostSection.tsx
import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import { Thumb } from './PostItem'
import { Cat } from './PostItem'
import { Info } from './PostItem'

type Props = React.HTMLAttributes<HTMLElement>

export default function RecentPostSection({ className, ...rest }: Props) {
  const dummy_date = '2025년 9월 1일'
  const dummy_category = '<카테고리 1>'
  const dummy_title = 'Title'
  const dummy_excerpt =
    '이 부분의 내용은 velog 처럼 포스트 내용을 공백 포함 100자 정도만 미리보기로 보이거나 포스트를 등록할 때 짧은 글 받는 걸로 할 예정입니다. 만약 3줄이 넘는다면 말 줄임표를 사용할 것입니다. 안녕하세요.'

  return (
    <RecentPost className={className} {...rest}>
      <Heading>Recent Post</Heading>
      <Thumb />
      <Info>
        <Cat>
          {dummy_date} {dummy_category}
        </Cat>
        <Title style={{ marginTop: '8px' }}>{dummy_title}</Title>
        <Excerpt style={{ marginTop: '12px' }}>{dummy_excerpt}</Excerpt>
      </Info>
    </RecentPost>
  )
}

const Heading = styled.h1`
  grid-column: 1/ 3;
  font-size: 28px;
  line-height: 1.2;
  color: ${Color.gray100};
  font-weight: bold;
`

const RecentPost = styled.section`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 20px;
`

const Excerpt = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 16px;
  color: ${Color.gray200};
`

const Title = styled.h2`
  font-size: 32px;
  line-height: 1.2;
  color: ${Color.gray100};
  font-weight: bold;
`
