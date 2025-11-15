import { graphql, PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
// import SideBar from 'src/components/SideBar'

import Header from '../components/Header'
import Footer from 'src/components/Footer'
import PostList from 'src/components/Post/PostList'
import { HeadingArea, CategoryName, CountOfPosts } from 'src/models/PostStyles'
import { PostSummary } from 'src/type'
import { useEffect, useState } from 'react'

export default function IndexPage({ data }: PageProps<{ allMarkdownRemark: { nodes: PostSummary[] } }>) {
  const postList = data.allMarkdownRemark.nodes

  const categoryList: string[] = postList.map((post: any) => post.frontmatter.category)
  const categoryCount = categoryList.reduce<Record<string, number>>((counter, category) => {
    counter[category] = (counter[category] ?? 0) + 1
    return counter
  }, {})
  const [isTopArea, setIsTopArea] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
      <Header isTopArea={isTopArea} sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <AreaWrapper>
        {/* <SideBar categories={categoryCount} /> */}
        <SideBarArea isOpen={sidebarOpen} />
        <PostListArea>
          <HeadingArea>
            <CategoryName>All Posts</CategoryName>
            <CountOfPosts>{postList.length} posts</CountOfPosts>
          </HeadingArea>
          <PostList posts={postList} />
        </PostListArea>
      </AreaWrapper>
      <Footer />
    </>
  )
}

const AreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${Color.background};
`
const PostListArea = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  min-height: 80vh;
  padding: 0 64px;
`

export const SideBarArea = styled.div<{ isOpen: boolean }>`
  width: 200px;
  flex: 0 0 200px;
  height: 1200px;
  background-color: ${Color.gray600};
  position: fixed;
  top: 70px;
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;

  @media (min-width: 480px) and (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
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
