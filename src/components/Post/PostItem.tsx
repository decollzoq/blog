import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import { navigate } from 'gatsby'
import { Thumb, Info, PostInfo } from 'src/models/PostStyles'

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
  width: calc(50% - 10px);
  height: fit-content;
  margin-bottom: 40px;

  cursor: pointer;
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 24px;
  }
`
const Title = styled.h2`
  font-size: 20px;
  line-height: 1.2;
  color: ${Color.gray100};
  font-weight: bold;
`
