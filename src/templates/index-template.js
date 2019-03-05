import React from "react"
import Layout from "../components/layout"
import PostListing from "../components/post-listing"
import { useStaticQuery, graphql } from "gatsby"

const IndexTemplate = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query PostsListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { draft: { ne: true }, template: { eq: "post" } }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                description
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <PostListing edges={edges} />
    </Layout>
  )
}

export default IndexTemplate
