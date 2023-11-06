import { render, screen } from "@testing-library/react"
import { Home } from "./index"

describe("<Home />", () => {
  it("should display carcha", () => {
    render(<Home />)
    const carcha = screen.getByText("name : carcha")
    expect(carcha).toBeInTheDocument()
  })
})
