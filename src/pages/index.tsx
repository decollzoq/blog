import { graphql, PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import SideBar from 'src/components/SideBar'

import Header from '../components/Header'
import Footer from 'src/components/Footer'
import PostList from 'src/components/Main/PostList'
import { PostSummary } from 'src/type'
import { useEffect, useState, useRef } from 'react'

export default function IndexPage({ data }: PageProps<{ allMarkdownRemark: { nodes: PostSummary[] } }>) {
  const postList = data.allMarkdownRemark.nodes

  const categoryList: string[] = postList.map((post: any) => post.frontmatter.category)
  const categoryCount = categoryList.reduce<Record<string, number>>((counter, category) => {
    counter[category] = (counter[category] ?? 0) + 1
    return counter
  }, {})
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
  width: 100%;
  max-width: 1200px;
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
          cover {
            publicURL
          }
        }
        excerpt
      }
    }
  }
`
