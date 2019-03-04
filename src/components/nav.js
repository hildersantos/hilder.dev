import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

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
  console.log(edges)
  return (
    <div className="navigation">
      <ul className="navigation__list">
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
