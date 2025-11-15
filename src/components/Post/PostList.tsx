import React from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

import { PostSummary } from 'src/type'

export default function PostList({ posts }: { posts: PostSummary[] }) {
  return (
    <>
      <Wrap>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.frontmatter.title}
            category={post.frontmatter.category}
            date={post.frontmatter.date}
            cover={post.frontmatter.cover}
            slug={post.fields.slug}
          />
        ))}
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
