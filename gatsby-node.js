const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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
      tags: [String!]!
      cover: File @fileByRelativePath
      series: String
      draft: Boolean
    }
  `

  createTypes(typeDefs)
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({
      node,
      getNode
    })

    createNodeField({
      node,
      name: 'slug',
      value: `${value}`
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
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
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
