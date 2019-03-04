import React from "react"
import { render } from "react-testing-library"

import Header from "./header"

describe("Header", () => {
  it("renders withour errors", () => {
    const { asFragment } = render(<Header siteTitle="Gatsby" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
