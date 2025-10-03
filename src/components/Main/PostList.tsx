import React from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import RecentPostSection from './RecentPost'

const RecentFull = styled(RecentPostSection)`
  grid-column: 1 / -1;
  margin-bottom: 48px;
`

export default function PostList({ posts }: any) {
  const [recent, ...rest] = posts
  return (
    <Wrap>
      <RecentFull post={recent} />

      {rest.map((p: any) => (
        <PostItem
          key={p.frontmatter.title}
          title={p.frontmatter.title}
          category={p.frontmatter.category}
          date={p.frontmatter.date}
          thumb={true}
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
