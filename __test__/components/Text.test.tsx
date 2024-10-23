import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "@/app/components"; // Adjust the import path as needed

describe("Text Component", () => {
  test("renders with default props", () => {
    render(<Text>Default Text</Text>);

    const textElement = screen.getByText(/default text/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("P"); // Default tag is 'p'
    expect(textElement).toHaveClass(
      "text-primary text-base normal-case text-left"
    );
  });

  test("renders with custom element type", () => {
    render(<Text as="h1">Heading 1</Text>);

    const textElement = screen.getByText(/heading 1/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("H1");
    expect(textElement).toHaveClass(
      "text-dark text-base normal-case text-left"
    );
  });

  test("renders with custom fontSize", () => {
    render(<Text fontSize="text-lg">Large Text</Text>);

    const textElement = screen.getByText(/large text/i);
    expect(textElement).toHaveClass(
      "text-primary text-lg normal-case text-left"
    );
  });

  test("renders with custom casing", () => {
    render(<Text casing="uppercase">Uppercase Text</Text>);

    const textElement = screen.getByText(/uppercase text/i);
    expect(textElement).toHaveClass(
      "text-primary text-base uppercase text-left"
    );
  });

  test("renders with custom alignment", () => {
    render(<Text align="text-center">Centered Text</Text>);

    const textElement = screen.getByText(/centered text/i);
    expect(textElement).toHaveClass(
      "text-primary text-base normal-case text-center"
    );
  });

  test("renders with all custom props", () => {
    render(
      <Text as="h2" fontSize="text-xl" casing="capitalize" align="text-right">
        Custom Text
      </Text>
    );

    const textElement = screen.getByText(/custom text/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("H2");
    expect(textElement).toHaveClass("text-dark text-xl capitalize text-right");
  });
});
