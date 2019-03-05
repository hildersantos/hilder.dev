import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import "moment/locale/pt-br"

const PostListing = ({ edges }) => {
  return (
    <section className="post-listing">
      {edges.map(({ node }) => (
        <article className="post-listing__article" key={node.id}>
          <Link to={node.fields.slug} className="post-listing__link">
            <h2 className="post-listing__title">{node.frontmatter.title}</h2>
            <time
              className="post-listing__date"
              dateTime={moment(node.frontmatter.date).format()}
            >
              {moment(node.frontmatter.date).format("DD [de] MMMM [de] YYYY")}
            </time>
            <div className="post-listing__description">
              <p>{node.frontmatter.description}</p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  )
}

export default PostListing
