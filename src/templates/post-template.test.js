import React from "react"
import { render } from "react-testing-library"

import PostTemplate from "./post-template"
import fixtureSiteInfo from "../../tests/__fixtures__/fixture-site-info"
import fixtureSingle from "../../tests/__fixtures__/fixture-single"
import { useStaticQuery, StaticQuery } from "gatsby"

const props = {
  ...fixtureSiteInfo,
  ...fixtureSingle,
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(props)),
    useStaticQuery.mockReturnValue(props)
})

describe("PostTemplate", () => {
  it("renders without errors", () => {
    const { asFragment } = render(<PostTemplate data={props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders a title", () => {
    const { container, getByText } = render(<PostTemplate data={props} />)

    expect(container.querySelector("h1")).toBeInTheDocument()
    expect(
      getByText(fixtureSingle.markdownRemark.frontmatter.title)
    ).toBeInTheDocument()
  })
})
