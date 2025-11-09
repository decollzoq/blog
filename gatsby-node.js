const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const CATEGORY_SLUG_MAP = {
  'JavaScript 튜토리얼': 'javascript-tutorial'
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic'
    }
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    
    type Frontmatter {
      title: String!
      date: Date! @dateformat
      category: String!
      cover: File @fileByRelativePath
    }
  `

  createTypes(typeDefs)
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode
    })

    createNodeField({
      node,
      name: 'slug',
      value: `${slug}`
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {
    data: { allMarkdownRemark }
  } = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        distinct(field: frontmatter___category)
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  allMarkdownRemark.distinct.forEach((category) => {
    const categorySlug = CATEGORY_SLUG_MAP[category]
    createPage({
      path: `/category/${categorySlug}/`,
      component: path.resolve(`./src/templates/category.tsx`),
      context: { category: category, categorySlug: categorySlug }
    })
  })

  allMarkdownRemark.nodes.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: post.fields.slug
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [__dirname, 'node_modules']
    }
  })
}
