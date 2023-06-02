import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'

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
    const inputs = screen.getAllByRole("textbox")
    expect(inputs[0].placeholder).toEqual("name")
    expect(inputs[1].placeholder).toEqual("email")
    expect(inputs[2].placeholder).toEqual("Your message")
  });

  it("name error message works", () => {
    render(<ContactForm />);
    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[0])
    fireEvent.blur(inputs[0])
    screen.getByText('Please enter your name')
    fireEvent.keyDown(inputs[0])
    const error = screen.queryByText('Please enter your name')
    expect(error).not.toBeInTheDocument()
  });

  
  it("email error message works", () => {
    render(<ContactForm />);
    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[1])
    fireEvent.blur(inputs[1])
    screen.getByText('Please enter your email')
    fireEvent.keyDown(inputs[1])
    const error = screen.queryByText('Please enter your email')
    expect(error).not.toBeInTheDocument()
  });

  it("text area error message works", () => {
    render(<ContactForm />);
    const inputs = screen.getAllByRole("textbox")
    fireEvent.focus(inputs[2])
    fireEvent.blur(inputs[2])
    screen.getByText('Please enter your message')
    fireEvent.keyDown(inputs[2])
    const error = screen.queryByText('Please enter your message')
    expect(error).not.toBeInTheDocument()
  });

    it("clicking button wont send email if fields invalid", () => {
    render(<ContactForm />);
    const button = screen.getByRole("button")
    let text = screen.getByText("Send Message")
    expect(text).toBeInTheDocument()
    fireEvent.click(button)
    text = screen.getByText("You have not filled in your information")
    expect(text).toBeInTheDocument()
  });


  it("clicking button changes text when fields valid", () => {
    render(<ContactForm />);
    const inputs = screen.getAllByRole("textbox")
    fireEvent.change(inputs[0], {target: {value: 'name'}})
    fireEvent.change(inputs[1], {target: {value: 'email'}})
    fireEvent.change(inputs[2], {target: {value: 'test message'}})
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