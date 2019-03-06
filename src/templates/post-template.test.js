import React from "react"
import { render } from "react-testing-library"

import PostTemplate from "./post-template"
import fixtureSiteInfo from "../../tests/__fixtures__/fixture-site-info"
import fixtureSingle from "../../tests/__fixtures__/fixture-single"
import fixturePageContext from "../../tests/__fixtures__/fixture-page-context"
import fixtureAllMarkdownRemark from "../../tests/__fixtures__/fixture-all-markdown-remark"
import { useStaticQuery, StaticQuery } from "gatsby"

const props = {
  data: {
    ...fixtureSiteInfo,
    ...fixtureSingle,
    ...fixtureAllMarkdownRemark,
  },
  pageContext: {
    ...fixturePageContext,
  },
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(props.data)),
    useStaticQuery.mockReturnValue(props.data)
})

describe("PostTemplate", () => {
  it("renders without errors", () => {
    const { asFragment } = render(<PostTemplate {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders a title", () => {
    const { container, getByText } = render(<PostTemplate {...props} />)

    expect(container.querySelector("h1")).toBeInTheDocument()
    expect(
      getByText(fixtureSingle.markdownRemark.frontmatter.title)
    ).toBeInTheDocument()
  })
})
