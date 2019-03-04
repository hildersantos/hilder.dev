/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo"
import Nav from "./nav"

const Layout = ({ children, title, description }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title={title || data.site.siteMetadata.title}
          description={description || undefined}
        />
        <main className="main">
          <div className="container">
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <Nav />
          </div>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
