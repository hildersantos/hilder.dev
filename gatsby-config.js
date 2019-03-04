module.exports = {
  siteMetadata: {
    title: `Hilder Santos`,
    description: `Blog pessoal do Hilder Santos`,
    author: {
      name: `Hilder Santos`,
      contacts: {
        twitter: `@hildersantos`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "pages",
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/static/media`,
    //     name: "media",
    //   },
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "assets",
    //     path: `${__dirname}/static`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        postCssPlugins: [
          require("lost"),
          require("postcss-font-magician")({
            foundries: "google",
          }),
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
