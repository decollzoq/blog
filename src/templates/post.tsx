import { graphql } from 'gatsby'
import { MarkDown } from 'src/components/Markdown'

export default function PostPage(props: any) {
  const {
    data: {
      markdownRemark: {
        id,
        html,
        excerpt,
        frontmatter: { title, category, date, cover }
      }
    }
  } = props

  return (
    <>
      <h1>{title}</h1>
      <MarkDown html={html} />
    </>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
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
