import React from "react"
import { render } from "react-testing-library"

import AuthorBadge from "./author-badge"

describe("AuthorBadge", () => {
  it("renders with an image", () => {
    const { container } = render(<AuthorBadge />)
    expect(container.querySelector("img")).toBeInTheDocument()
  })
  // it("renders withour errors", () => {
  //   const { asFragment } = render(<Header siteTitle="Gatsby" />)
  //   expect(asFragment()).toMatchSnapshot()
  // })
})
