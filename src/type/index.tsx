export interface PostSummary {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    category: string
    cover: CoverImage
  }
  id: string
  excerpt: string
}

export interface Post {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    category: string
    cover: CoverImage
  }
  html: string
}

export interface CoverImage {
  publicURL: string
}

export interface PostDetail extends PostSummary {
  html: string
}

export interface IndexPageQuery {
  allMarkdownRemark: { nodes: PostSummary[] }
}

export interface PostPageProps {
  markdownRemark: PostDetail
}
