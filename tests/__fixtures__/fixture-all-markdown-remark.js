module.exports = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: "Test 0",
            template: "page",
            date: "2019-03-04T02:39:13.000Z",
            draft: false,
          },
          fields: {
            slug: "test_0",
          },
        },
      },
      {
        node: {
          frontmatter: {
            title: "Test 1",
            template: "post",
            date: "2019-03-05T02:39:13.000Z",
            draft: false,
          },
          fields: {
            slug: "test_1",
          },
        },
      },
      {
        node: {
          frontmatter: {
            title: "Test 2",
            template: "post",
            date: "2019-03-06T02:39:13.000Z",
            draft: true,
          },
          fields: {
            slug: "test_2",
          },
        },
      },
      {
        node: {
          frontmatter: {
            title: "Test 3",
            template: "post",
            date: "2019-03-07T02:39:13.000Z",
            draft: true,
          },
          fields: {
            slug: "test_3",
          },
        },
      },
    ],
  },
}
