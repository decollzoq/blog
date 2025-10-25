import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import { MarkDown } from './Markdown'
import { PostPageProps } from 'src/type'
import { Color } from 'src/models/color'

interface Props extends PageProps<PostPageProps> {}

export default function PostPage({ data }: Props) {
  const {
    html,
    excerpt,
    fields: { slug },
    frontmatter: { title, date, category, cover }
  } = data.markdownRemark

  return (
    <PageWrap>
      <Post>
        <Title>{title}</Title>
        {cover?.publicURL && <Cover src={cover.publicURL} alt={`${title} 커버`} />}
        <Info>
          {dayjs(date).format('YYYY년 M월 D일')} · <em>{`< ${category} >`}</em>
        </Info>

        <Content>
          <MarkDown html={html} />
        </Content>

        <ReactionBar>
          <button>좋아요</button>
          <button>공유</button>
        </ReactionBar>
      </Post>
    </PageWrap>
  )
}

export const pageQuery = graphql`
  query PostPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(truncate: true)
      fields {
        slug
      }
      frontmatter {
        title
        date
        category
        cover {
          publicURL
        }
      }
    }
  }
`

const PageWrap = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px; /* 본문 + 얇은 TOC */
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 80px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const Post = styled.article`
  border-radius: 16px;
  padding: 20px 24px 40px;
`

const Cover = styled.img`
  width: 100%;
  height: 17rem;
  margin: 12px 0 4px;
  border-radius: 12px;
  object-fit: cover;
`

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;
  margin: 12px 0 6px;
`

const Info = styled.div`
  color: ${Color.gray300};
  font-size: 14px;
  margin-bottom: 6px;
`

const Content = styled.section`
  margin-top: 18px;

  h2,
  h3 {
    scroll-margin-top: 90px;
  }

  h2 {
    font-size: 40px;
    margin: 40px 0 16px;
  }
  h3 {
    font-size: 30px;
    margin: 28px 0 12px;
  }

  p,
  li {
    line-height: 1.85;
    font-size: 20px;
  }
`

const ReactionBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 36px 0 8px;

  button {
    background: ${Color.gray600};
    padding: 5px;
    cursor: pointer;
  }
`
