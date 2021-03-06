import React from "react"
import { render } from "react-testing-library"
import { StaticQuery, useStaticQuery } from "gatsby"

import Layout from "./layout"

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

describe("Layout", () => {
  it("renders a header", () => {
    const { container } = render(
      <Layout>
        <h1>Ok</h1>
      </Layout>
    )

    expect(container.querySelector("header")).toBeInTheDocument()
  })

  it("renders children", () => {
    const text = "__Ok__"
    const { getByText } = render(
      <Layout>
        <h1>{text}</h1>
      </Layout>
    )

    const child = getByText(text)

    expect(child).toBeInTheDocument()
  })
})
