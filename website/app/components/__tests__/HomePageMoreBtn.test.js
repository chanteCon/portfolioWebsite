import { render, screen, cleanup, getByTestId, getByText } from "@testing-library/react";
import { HomePageMoreBtn } from "../HomePageMoreBtn";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Home Page More Buttons", () => {
  it("renders buttons", () => {
    render(<HomePageMoreBtn link = ""/>)
    const btn = screen.getByTestId("homePageMore")
    expect(btn).toBeInTheDocument()
  });

  it("link and text work as expected", () => {
    render(<HomePageMoreBtn link = "/testlink" text = "btn text"/>)
    const link = screen.getByTestId("infoLink")
    expect(link).toHaveAttribute("href", "/testlink")
    const text = screen.getByText("btn text")
    expect(text).toBeInTheDocument()
  });
});