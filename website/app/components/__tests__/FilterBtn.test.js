import { render, screen, cleanup } from "@testing-library/react";
import { FilterBtn } from "../FilterBtn";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Filter Button", () => {
  it("renders filter button", () => {
    render(<FilterBtn />);
    const btn = screen.getByRole("button", {name: /filter-button/i});
    expect(btn).toBeInTheDocument()
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/_next/image?url=%2Fimages%2Ficons%2Ffilter.png&w=32&q=75")
    const text = screen.getByText("Filter")
    expect(text).toBeInTheDocument()
  });

  it("on click function works", () => {
    let clicked = false
    const onClick = jest.fn(() => {clicked = true})
    render(<FilterBtn setFilterOn = { onClick }/>);
    expect(clicked).not.toEqual(true)
    const btn = screen.getByRole("button", {name: /filter-button/i});
    btn.click()
    expect(clicked).toEqual(true)
  });
});