import { render, screen } from "@testing-library/react";

import { Button } from "../../src/app/components/index";
describe("Button", () => {
  it("should render the button", () => {
    render(<Button>Test</Button>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test</Button>);
    const button = screen.getByText("Test");
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should render the button with the primary variant", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass("bg-blue-600 text-white");
  });

  it("should render the button with the outlined variant", () => {
    render(<Button variant="outlined">Outlined Button</Button>);
    const button = screen.getByText("Outlined Button");
    expect(button).toHaveClass("bg-white border-grayPrimary border text-black");
  });

  it("should render the button with the primary variant if variant is not provided", () => {
    render(<Button>Test</Button>);
    const button = screen.getByText("Test");
    expect(button).toHaveClass("bg-blue-600 text-white");
  });
});
