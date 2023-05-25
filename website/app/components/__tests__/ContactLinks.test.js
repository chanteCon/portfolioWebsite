import { render, screen, cleanup } from "@testing-library/react";
import { ContactLinks } from "@/app/components/ContactLinks";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Contact Links", () => {
  it("renders contact link component", () => {
    render(<ContactLinks />);
    const links = screen.getByTestId("contactLinks")
    expect(links).toBeInTheDocument()
    const homeLinks = screen.getAllByTestId("homePageLinks")
    expect(homeLinks.length).toEqual(2)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  });

  it("on click function works", () => {
    let clicked = false
    const onClick = jest.fn(() => {clicked = true})
    render(<ContactLinks onClick = { onClick }/>)
    const button = screen.getByRole("button")
    button.click()
    expect(clicked)
  });

  it("discord icon renders", () => {
    render(<ContactLinks />)
    const img = screen.getAllByRole("img")[2]
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "images/icons/DiscordIcon.png")
    expect(img).toHaveAttribute("height", "20px")
  });

  it("github link works", () => {
    render(<ContactLinks />)
    const link = screen.getAllByRole("link")[0]
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "https://github.com/chanteCon")
  });

  it("linked in link works", () => {
    render(<ContactLinks />)
    const link = screen.getAllByRole("link")[1]
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/chantelle-conlon-scoullar-2456ab259/")
  });
});