import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'

type PostItemProps = {
  title: string
  category: string
  date: string
  thumb: boolean
}

export default function PostItem({ title, category, date, thumb }: PostItemProps) {
  return (
    <Item>
      <Thumb> {thumb} </Thumb>
      <Info>
        <PostInfo style={{ marginTop: '16px' }}>
          {date} {category}
        </PostInfo>
        <Title style={{ marginTop: '8px' }}>{title}</Title>
      </Info>
    </Item>
  )
}

const Item = styled.article`
  display: flex;
  flex-direction: column;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const Thumb = styled.div`
  aspect-ratio: 16/9;
  background: ${Color.gray500};
`

export const PostInfo = styled.span`
  font-size: 12px;
  color: ${Color.gray300};
`
const Title = styled.h2`
  font-size: 28px;
  line-height: 1.2;
  color: ${Color.gray100};
  font-weight: bold;
`
