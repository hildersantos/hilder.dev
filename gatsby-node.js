/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages =
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    if (typeof node.frontmatter.slug !== "undefined") {
      createNodeField({
        name: "slug",
        node,
        value: node.frontmatter.slug,
      })
    } else {
      const templateType = node.frontmatter.template || ""
      const value = createFilePath({
        node,
        getNode,
        basePath: `${templateType}s`,
      })
      createNodeField({
        name: "slug",
        node,
        value,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              date
              template
              draft
              description
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark

  createPage({
    path: "/",
    component: path.resolve("./src/templates/index-template.js"),
  })

  createPage({
    path: "/404/",
    component: path.resolve("./src/templates/not-found-template.js"),
  })

  // Filtering posts and pages...
  const posts = edges.filter(
    edge => _.get(edge, "node.frontmatter.template") === "post"
  )
  const pages = edges.filter(
    edge => _.get(edge, "node.frontmatter.template") === "page"
  )

  // Posts creation
  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1].node
    const previous = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })

    // Pages creation
    pages.forEach(page => {
      createPage({
        path: page.node.fields.slug,
        component: path.resolve("./src/templates/page-template.js"),
        context: { slug: page.node.fields.slug },
      })
    })
  })
}
