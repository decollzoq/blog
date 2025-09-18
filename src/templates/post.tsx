import { graphql } from 'gatsby'

export default function PostPage(props: any) {
  const {
    data: {
      markdownRemark: {
        html,
        frontmatter: { title }
      }
    }
  } = props

  return (
    <>
      <h1>{title}</h1>
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
