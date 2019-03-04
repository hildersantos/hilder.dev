import React from "react"
import { render } from "react-testing-library"
import { StaticQuery, useStaticQuery } from "gatsby"

import Nav from "./nav"

import fixtureSiteInfo from "../../tests/__fixtures__/fixture-site-info"
import fixtureAllMarkdownRemark from "../../tests/__fixtures__/fixture-all-markdown-remark"

const props = {
  ...fixtureSiteInfo,
  ...fixtureAllMarkdownRemark,
}
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(props)),
    useStaticQuery.mockReturnValue(props)
})

describe("Nav", () => {
  it("renders without errors", () => {
    const { asFragment } = render(<Nav />)
    expect(asFragment()).toMatchSnapshot()
  })
})
