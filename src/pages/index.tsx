import { graphql, Link } from 'gatsby'

export default function IndexPage(props: any) {
  const { data } = props
  const postList = data.allMarkdownRemark.nodes

  return (
    <>
      <ul>
        {postList.map((post: any) => {
          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

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
        }
      }
    }
  }
`
