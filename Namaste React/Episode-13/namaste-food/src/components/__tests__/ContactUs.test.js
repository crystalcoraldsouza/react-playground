import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs Component", () => {
  it("Should load heading", () => {
    render(<ContactUs />);
    const headingElement = screen.getByRole("heading", { name: /Contact Us/i });
    expect(headingElement).toBeInTheDocument();
  });

  describe("Should load form elements", () => {
    test("Should load name input", () => {
      render(<ContactUs />);
      const nameInput = screen.getByPlaceholderText(/Your Name/i);
      expect(nameInput).toBeInTheDocument();
    });

    test("Should load email input", () => {
      render(<ContactUs />);
      const emailInput = screen.getByPlaceholderText(/Your Email/i);
      expect(emailInput).toBeInTheDocument();
    });

    test("Should load message textarea", () => {
      render(<ContactUs />);
      const messageTextarea = screen.getByPlaceholderText(/Your Message/i);
      expect(messageTextarea).toBeInTheDocument();
    });

    test("Should load submit button", () => {
      render(<ContactUs />);
      const buttonElement = screen.getByRole("button", {
        name: /Send Message/i,
      });
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
