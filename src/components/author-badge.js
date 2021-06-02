import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AuthorBadge = () => {
  const image = useStaticQuery(
    graphql`
      query {
        authorImage: file(relativePath: { eq: "hilder-santos.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 72)
          }
        }
      }
    `
  )
  return (
    <div className="author-badge">
      <GatsbyImage
        image={image.authorImage.childImageSharp.gatsbyImageData}
        imgClassName="author-badge__avatar"
        className="author-badge__avatar"
        title="Hilder Santos"
        alt="Hilder Santos"
      />
      <div className="author-badge__info">
        <p>
          <OutboundLink
            href="https://twitter.com/hildersantos"
            target="_blank"
            rel="nofollow noopener noreferrer"
            title="Hilder Santos no Twitter"
          >
            Hilder Santos
          </OutboundLink>{" "}
          é desenvolvedor full-stack.
        </p>
        <p>Gosta de trabalhar com Elixir e café.</p>
      </div>
    </div>
  )
}

export default AuthorBadge
