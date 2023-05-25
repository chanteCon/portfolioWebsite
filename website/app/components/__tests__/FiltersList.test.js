import { render, screen, cleanup } from "@testing-library/react";
import { FiltersList } from "../FiltersList";
import "@testing-library/jest-dom";
let assignMock = jest.fn();

delete window.location;
window.location = { assign: assignMock };

afterEach(() => {
  cleanup()
  assignMock.mockClear();
})

 
describe("Filter List", () => {
  it("renders filters list", () => {
    render(<FiltersList filters={[]}/>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument()
    const text = screen.getByText("Filters")
    expect(text).toBeInTheDocument()
    const close = screen.getByText("x")
    expect(close).toBeInTheDocument()
  });

  it("renders filters array", () => {
    render(<FiltersList filters={["filter1", "filter2", "filter3"]}/>);
    const filter1 = screen.getByText("filter1")
    expect(filter1).toBeInTheDocument()
    const filter2 = screen.getByText("filter2")
    expect(filter2).toBeInTheDocument()
    const filter3 = screen.getByText("filter3")
    expect(filter3).toBeInTheDocument()
  });

  it("test filters list closes on click", () => {
    let closed = false
    const onClose = jest.fn(() => {closed = true})
    expect(closed).not.toEqual(true)
    render(<FiltersList filters={ ["filter1"] } onClose = { onClose } />);
    const filter1 = screen.getByText("filter1")
    filter1.click()
    expect(closed).toEqual(true)
  });

});