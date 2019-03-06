import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const AuthorBadge = () => {
  const image = useStaticQuery(
    graphql`
      query {
        authorImage: file(relativePath: { eq: "hilder-santos.jpg" }) {
          childImageSharp {
            fixed(width: 72) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <div className="author-badge">
      <Img
        fixed={image.authorImage.childImageSharp.fixed}
        className="author-badge__avatar"
      />
      <div className="author-badge__info">
        <p>
          <OutboundLink
            href="https://twitter.com/hildersantos"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Hilder Santos
          </OutboundLink>{" "}
          é desenvolvedor full-stack.
        </p>
        <p>Gosta de trabalhar com Elixir, React e café.</p>
      </div>
    </div>
  )
}

export default AuthorBadge
