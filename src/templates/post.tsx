import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { graphql, PageProps } from 'gatsby'
import { MarkDown } from 'src/components/Markdown'
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
        {<Cover src={cover.publicURL} alt={`${title} 커버`} style={{ margin: '12px 0 4px' }} />}
        <Title style={{ margin: '12px 0 6px' }}>{title}</Title>
        <Info style={{ marginTop: '12px' }}>
          {dayjs(date).format('YYYY년 M월 D일')} · <em>{`< ${category} >`}</em>
        </Info>
        <Divider style={{ marginTop: '16px', marginLeft: '0px' }}></Divider>
        <article style={{ marginTop: '60px' }}>
          <MarkDown html={html} />
        </article>

        <ReactionBar style={{ margin: '36px 0 8px' }}>
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

const ReactionBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  button {
    background: ${Color.gray600};
    padding: 5px;
    cursor: pointer;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${Color.gray400};
`
