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

  // return (
  //   <>
  //     <Header />
  //     <ul>
  //       {postList.map((post: any) => {
  //         return (
  //           <li key={post.fields.slug}>
  //             <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //     <Footer />
  //   </>
  // )

  return (
    <>
      <Header />
      <Layout>
        <SideBar />
        <ContentArea>
          <PostList />
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
  width: 1068;
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
          date
          category
        }
      }
    }
  }
`
