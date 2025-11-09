// src/sections/HeroPostSection.tsx
import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import { Thumb } from '../PostItem'
import { PostInfo } from '../PostItem'
import { Info } from '../PostItem'
import { PostSummary } from 'src/type'
import { navigate } from 'gatsby'

type Props = React.HTMLAttributes<HTMLElement> & {
  post: PostSummary
}

export default function RecentPostSection({ className, post, ...rest }: Props) {
  const { frontmatter, excerpt, fields } = post
  const to = fields.slug.startsWith('/') ? fields.slug : `/${fields.slug}`
  return (
    <RecentPost className={className} {...rest} onClick={() => navigate(to)}>
      <Heading>Recent Post</Heading>
      <Thumb>
        <img src={frontmatter.cover.publicURL} />
      </Thumb>
      <Info>
        <PostInfo>
          {frontmatter.date} {frontmatter.category}
        </PostInfo>
        <Title style={{ marginTop: '8px' }}>{frontmatter.title}</Title>
        <Excerpt style={{ marginTop: '12px' }}>{excerpt}</Excerpt>
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
  cursor: pointer;
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-4px);
  }
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
