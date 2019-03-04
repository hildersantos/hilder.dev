import React from "react"
import { Link } from "gatsby"

const PostListing = ({ edges }) => {
  return (
    <section className="post-listing">
      {edges.map(({ node }) => (
        <article className="post-listing__article" key={node.id}>
          <h2 className="post-listing__title">
            <Link to={node.fields.slug} className="post-listing__link">
              {node.frontmatter.title}
            </Link>
          </h2>
        </article>
      ))}
    </section>
  )
}

export default PostListing
