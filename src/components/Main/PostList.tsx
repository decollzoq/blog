import React from 'react'
import styled from '@emotion/styled'
import PostItem from '../PostItem'
import RecentPostSection from './RecentPost'
import { PostSummary } from 'src/type'

const RecentFull = styled(RecentPostSection)`
  grid-column: 1 / -1;
  margin-bottom: 48px;
`

export default function PostList({ posts }: { posts: PostSummary[] }) {
  const [recent, ...rest] = posts
  return (
    <Wrap>
      <RecentFull post={recent} />

      {rest.map((post) => (
        <PostItem
          key={post.id}
          title={post.frontmatter.title}
          category={post.frontmatter.category}
          date={post.frontmatter.date}
          cover={post.frontmatter.cover}
        />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
  grid-auto-rows: minmax(200px, auto);
`
