import React from "react";
import { render } from "@testing-library/react";
import { TextSkeleton } from "@/app/components";
describe("TextSkeleton", () => {
  test("renders correctly with the loading skeleton", () => {
    const { container } = render(<TextSkeleton />);

    // Check if the component is rendered
    expect(container.firstChild).toBeInTheDocument();

    // Check if the class names are applied correctly
    expect(container.firstChild).toHaveClass("w-full");
    expect(container.firstChild).toHaveClass("animate-pulse");
    expect(container.firstChild).toHaveClass("p-2");
    expect(container.firstChild).toHaveClass("bg-loadinGray");
  });
});
