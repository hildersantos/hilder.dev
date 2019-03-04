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
        node,
        name: "slug",
        value: node.frontmatter.slug,
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: "slug",
        value,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // TODO: Create 404 page

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
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

  console.log(result)

  const { edges } = result.data.allMarkdownRemark

  edges.forEach(edge => {
    if (_.get(edge, "node.frontmatter.template") === "page") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/template/page-templates.js"),
        context: { slug: edge.node.fields.slug },
      })
    } else if (_.get(edge, "node.frontmatter.template") === "post") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/template/post-templates.js"),
        context: { slug: edge.node.fields.slug },
      })
    }
  })
}
