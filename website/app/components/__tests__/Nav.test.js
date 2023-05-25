import { render, screen, cleanup, getByTestId, getByText, fireEvent } from "@testing-library/react";
import { Nav } from "../Nav";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Nav bar", () => {
  it("Renders properly", () => {
    render(<Nav/>)
    const nav = screen.getByTestId("nav")
    expect(nav).toBeInTheDocument()
  });

  it("Renders the page links properly", () => {
    render(<Nav/>)
    const links = screen.getAllByRole("link")
    expect(links.length).toEqual(5)

    expect(links[0]).toHaveAttribute("href", "/")
    expect(links[1]).toHaveAttribute("href", "/")
    expect(links[2]).toHaveAttribute("href", "/projects")
    expect(links[3]).toHaveAttribute("href", "/about")
    expect(links[4]).toHaveAttribute("href", "/contact")

    const home = screen.getByText("Home").closest("a")
    expect(home).toHaveAttribute("href", "/")

    const projects = screen.getByText("Recent Projects").closest("a")
    expect(projects).toHaveAttribute("href", "/projects")

    const about = screen.getByText("About").closest("a")
    expect(about).toHaveAttribute("href", "/about")

    const contact = screen.getByText("Contact").closest("a")
    expect(contact).toHaveAttribute("href", "/contact")

    const logo = screen.getByText("Chantelle Conlon Scoullar").closest("a")
    expect(logo).toHaveAttribute("href", "/")
  });

  it("Logo image shows", () => {
    render(<Nav/>)
    const img  = screen.getByRole("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "/images/logo.svg")
  });

  it("Small screen nav not on bigger screens", () => {
    render(<Nav/>)
    const img  = screen.getAllByRole("img")
    expect(img.length).toEqual(1)
  });

  it("Small screen nav shows", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    render(<Nav/>)
    const img  = screen.getAllByRole("img")
    expect(img.length).toEqual(2)
    expect(img[1]).toHaveAttribute("src", "/_next/image?url=%2Fimages%2Ficons%2FhamburgerIcon.png&w=48&q=75")
  });

  it("Small screen no links", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    render(<Nav/>)
    const home = screen.queryByText("Home")
    expect(home).not.toBeInTheDocument()
    const projects = screen.queryByText("Recent Projects")
    expect(projects).not.toBeInTheDocument()
    const about = screen.queryByText("About")
    expect(about).not.toBeInTheDocument()
    const contact = screen.queryByText("Contact")
    expect(contact).not.toBeInTheDocument()
  });

  it("Small screen drop down works", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    render(<Nav/>)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    const home = screen.queryByText("Home")
    expect(home).toBeInTheDocument()
  });

});