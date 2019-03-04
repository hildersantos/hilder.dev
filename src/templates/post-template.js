import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import moment from "moment"
import "moment/locale/pt-br"

const PostTemplate = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout title={title}>
      <article className="single">
        <header className="single__header">
          <h1 className="single__title">{title}</h1>
          <time className="single__date" dateTime={moment(date).format()}>
            {moment(date).format("DD [de] MMMM [de] YYYY")}
          </time>
        </header>
        <div
          className="single__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* <div class="single__comments">
            {{ template "_internal/disqus.html" . }}
        </div> */}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          contacts {
            twitter
          }
        }
      }
    }
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

export default PostTemplate
