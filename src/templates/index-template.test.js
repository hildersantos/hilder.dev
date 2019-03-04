import React from "react"
import { render } from "react-testing-library"

import IndexTemplate from "./index-template"
import fixtureSiteInfo from "../../tests/__fixtures__/fixture-site-info"
import fixtureAllMarkdownRemark from "../../tests/__fixtures__/fixture-all-markdown-remark"
import { useStaticQuery, StaticQuery } from "gatsby"

const props = {
  ...fixtureSiteInfo,
  ...fixtureAllMarkdownRemark,
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(props)),
    useStaticQuery.mockReturnValue(props)
})

describe("IndexTemplate", () => {
  it("renders without errors", () => {
    const { asFragment } = render(<IndexTemplate data={props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("has a header", () => {
    const { container } = render(<IndexTemplate data={props} />)
    expect(container.querySelector("header")).toBeInTheDocument()
  })
})
