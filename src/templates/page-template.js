import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const PageTemplate = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout title={title}>
      <article className="single">
        <header className="single__header">
          <h1 className="single__title">{title}</h1>
        </header>
        <div
          className="single__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date
        description
        title
        image
      }
    }
  }
`

export default PageTemplate
