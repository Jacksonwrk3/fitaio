import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "@/app/components";
describe("Text Component", () => {
  it("renders children correctly", () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("renders as a paragraph by default", () => {
    render(<Text>Paragraph Text</Text>);
    const paragraph = screen.getByText("Paragraph Text");
    expect(paragraph.tagName).toBe("P");
    expect(paragraph).toHaveClass(
      "text-base normal-case text-left font-normal text-black"
    );
  });

  it("renders with a custom HTML element", () => {
    render(<Text as="h1">Heading Text</Text>);
    const heading = screen.getByText("Heading Text");
    expect(heading.tagName).toBe("H1");
    expect(heading).toHaveClass(
      "text-base normal-case text-left font-normal text-black"
    );
  });

  it("applies the correct font size", () => {
    render(<Text fontSize="text-xl">Large Text</Text>);
    const text = screen.getByText("Large Text");
    expect(text).toHaveClass("text-xl");
  });

  it("applies the correct casing", () => {
    render(<Text casing="uppercase">Uppercase Text</Text>);
    const text = screen.getByText("Uppercase Text");
    expect(text).toHaveClass("uppercase");
  });

  it("applies the correct alignment", () => {
    render(<Text align="text-center">Centered Text</Text>);
    const text = screen.getByText("Centered Text");
    expect(text).toHaveClass("text-center");
  });

  it("applies the correct color", () => {
    render(<Text color="red">Red Text</Text>);
    const text = screen.getByText("Red Text");
    expect(text).toHaveClass("text-red-500");
  });

  it("applies the correct font weight", () => {
    render(<Text fontWeight="font-bold">Bold Text</Text>);
    const text = screen.getByText("Bold Text");
    expect(text).toHaveClass("font-bold");
  });

  it("defaults to black text color if no color is provided", () => {
    render(<Text>Default Color Text</Text>);
    const text = screen.getByText("Default Color Text");
    expect(text).toHaveClass("text-black");
  });
});
