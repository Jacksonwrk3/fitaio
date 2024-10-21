import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "@/app/components/TextInput"; // Adjust the import path as needed
import React from "react";

describe("TextInput", () => {
  const mockOnChange = jest.fn();
  const setup = (props = {}) => {
    const defaultProps = {
      id: "test-input",
      placeholder: "Enter text",
      onChange: mockOnChange,
      value: "",
      ...props,
    };

    return render(<TextInput {...defaultProps} />);
  };

  it("Should render the input correctly", () => {
    setup();
    const inputElement = screen.getByPlaceholderText("Enter text");

    expect(inputElement).toBeInTheDocument();
  });

  it("Should render as a password input by default for type=password", () => {
    setup({ type: "password" });
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("Should toggle visibility of password input when clicking 'Show'/'Hide'", () => {
    setup({ type: "password" });

    const toggleElement = screen.getByText("Show");
    const inputElement = screen.getByPlaceholderText("Enter text");

    // Verify initially hidden (password)
    expect(inputElement).toHaveAttribute("type", "password");

    // Click to show password
    fireEvent.click(toggleElement);
    expect(screen.getByText("Hide")).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");

    // Click to hide password
    fireEvent.click(screen.getByText("Hide"));
    expect(screen.getByText("Show")).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("Should render as a text input by default", () => {
    setup();
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("Should call the onChange handler when input value changes", () => {
    setup();

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("Should display the correct value in the input", () => {
    setup({ value: "Initial value" });
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveValue("Initial value");
  });
});
