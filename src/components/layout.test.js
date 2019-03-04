import React from "react"
import { render } from "react-testing-library"
import { StaticQuery } from "gatsby"

import Layout from "./layout"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Title`,
        },
      },
    })
  )
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
