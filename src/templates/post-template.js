import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import moment from "moment"
import "moment/locale/pt-br"
import Img from "gatsby-image"

const PostTemplate = ({ data }) => {
  const {
    title,
    date,
    image,
    imageCaption,
    description,
  } = data.markdownRemark.frontmatter
  const { html, id } = data.markdownRemark
  return (
    <Layout title={title} description={description}>
      <article className="single">
        <header className="single__header">
          <h1 className="single__title">{title}</h1>
          <time className="single__date" dateTime={moment(date).format()}>
            {moment(date).format("DD [de] MMMM [de] YYYY")}
          </time>
        </header>
        <div className="single__content">
          {image ? (
            <figure>
              <Img fluid={image.childImageSharp.fluid} />
              {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
            </figure>
          ) : null}
          <div
            className="single__content--inner"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="single__comments" />
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
        disqusShortname
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
        image {
          childImageSharp {
            resize(width: 1540, height: 1000) {
              src
            }
            fluid(maxWidth: 770, maxHeight: 400, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageCaption
      }
    }
  }
`

export default PostTemplate
