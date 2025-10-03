import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import SideBar from 'src/components/SideBar'

import Header from '../components/Header'
import Footer from 'src/components/Footer'
import PostList from 'src/components/Main/PostList'

export default function IndexPage(props: any) {
  const { data } = props
  const postList = data.allMarkdownRemark.nodes

  const categoryList: string[] = postList.map((post: any) => post.frontmatter.category)
  const categoryCount = categoryList.reduce<Record<string, number>>((counter, category) => {
    counter[category] = (counter[category] ?? 0) + 1
    return counter
  }, {})

  return (
    <>
      <Header />
      <Layout>
        <SideBar categories={categoryCount} />
        <ContentArea>
          <PostList posts={postList} />
        </ContentArea>
      </Layout>
      <Footer />
    </>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 272px 1fr;
  gap: 124px;
  max-width: 1464px;
  background: ${Color.background};
`
const ContentArea = styled.main`
  width: 1068px;
  min-height: 80vh;
`

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          category
        }
        excerpt
      }
    }
  }
`
