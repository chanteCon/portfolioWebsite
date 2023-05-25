import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup()
})
 
describe("Contact Form", () => {
  it("renders contact form component", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contactForm")
    expect(form).toBeInTheDocument()
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    let text = screen.getByText("Say hello!")
    expect(text).toBeInTheDocument()
    const inputs = screen.getAllByRole("textbox")
    expect(inputs.length).toEqual(3)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  });

  it("renders correct placeholders", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contactForm")
    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0].placeholder).toEqual("name")
    expect(inputs[1].placeholder).toEqual("email")
    expect(inputs[2].placeholder).toEqual("Your message")
  });

  it("clicking button changes text", () => {
    render(<ContactForm />);
    const form = screen.getByTestId("contactForm")
    const button = screen.getByRole("button")
    let text = screen.getByText("Send Message")
    expect(text).toBeInTheDocument()
    fireEvent.click(button)
    text = screen.getByText("Sending...")
    expect(text).toBeInTheDocument()
  });

  it("providing a title changes the header", () => {
    render(<ContactForm title = "Contact me!"/>);
    const text = screen.queryByText("Say hello!")
    expect(text).toBe(null)
    const title = screen.getByText("Contact me!")
    expect(title).toBeInTheDocument()
  });
});