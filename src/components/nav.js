import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

const Nav = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query PageListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { draft: { ne: true }, template: { eq: "page" } }
          }
        ) {
          edges {
            node {
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
    <div className="navigation">
      <ul className="navigation__list">
        <Location>
          {({ location }) => {
            return location.pathname !== "/" ? (
              <li className="navigation__item">
                <Link
                  to="/"
                  className="navigation__link"
                  getProps={({ location }) =>
                    location.pathname === "/"
                      ? { style: { display: "none" } }
                      : null
                  }
                >
                  Home
                </Link>
              </li>
            ) : null
          }}
        </Location>
        {edges.map(({ node }, i) => (
          <li className="navigation__item" key={i}>
            <Link to={node.fields.slug} className="navigation__link">
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
