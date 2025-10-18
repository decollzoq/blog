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
