import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { graphql, PageProps } from 'gatsby'
import { MarkDown } from 'src/components/Markdown'
import { PostPageProps } from 'src/type'
import { Color } from 'src/models/color'
import Header from 'src/components/Header'
import TOC from 'src/components/TOC'
import Comments from 'src/components/Comments'
import { useEffect, useState } from 'react'
interface Props extends PageProps<PostPageProps> {}

export default function PostPage({ data }: Props) {
  const {
    tableOfContents,
    html,
    excerpt,
    fields: { slug },
    frontmatter: { title, date, category, cover }
  } = data.markdownRemark

  const [isTopArea, setIsTopArea] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 50) {
        setIsTopArea(true)
      } else {
        setIsTopArea(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Header isTopArea={isTopArea} />
      <PageWrap>
        <Post>
          {<Cover src={cover.publicURL} alt={`${title} 커버`} style={{ margin: '12px 0 4px' }} />}
          <Title style={{ margin: '12px 0 6px' }}>{title}</Title>
          <Info style={{ marginTop: '12px' }}>
            {dayjs(date).format('YYYY년 M월 D일')} · <em>{`< ${category} >`}</em>
          </Info>
          <article style={{ marginTop: '60px' }}>
            <MarkDown html={html} />
          </article>
        </Post>
        <TOC tableOfContents={tableOfContents} />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </PageWrap>
    </>
  )
}

export const pageQuery = graphql`
  query PostPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      tableOfContents
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
  grid-template-columns: minmax(0, 1fr);
  gap: 72px;
  max-width: 1000px;
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
  border-radius: 12px;
  object-fit: cover;
`

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;
  font-weight: bolder;
`

const Info = styled.div`
  color: ${Color.gray300};
  font-size: 14px;
`

const CommentsWrapper = styled.section`
  margin-top: 160px;
  padding-top: 40px;
  border-top: 1px solid ${Color.gray400};
`
