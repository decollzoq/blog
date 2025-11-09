import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import { navigate } from 'gatsby'

interface PostItemProps {
  title: string
  category: string
  date: string
  cover: {
    publicURL: string
  }
  slug: string
}

export default function PostItem({ title, category, date, cover, slug }: PostItemProps) {
  const to = slug.startsWith('/') ? slug : `/${slug}`
  return (
    <Item onClick={() => navigate(to)}>
      <Thumb>
        <img src={cover.publicURL} />
      </Thumb>
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
  cursor: pointer;
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-4px);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const Thumb = styled.div`
  aspect-ratio: 16/9;
  background: ${Color.gray500};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
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
