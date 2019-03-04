import React from "react"
import Layout from "../components/layout"
import PostListing from "../components/post-listing"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/nav"

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
        ) {
          edges {
            node {
              id
              frontmatter {
                title
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
      <Nav />
    </Layout>
  )
}

export default IndexTemplate
