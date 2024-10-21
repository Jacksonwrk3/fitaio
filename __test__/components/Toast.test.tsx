import { Toast } from "@/app/components";
import { render, screen } from "@testing-library/react";

describe("Toast", () => {
  let container: HTMLElement; // Explicitly define the type for container

  describe("renders success toast", () => {
    beforeEach(() => {
      const renderResult = render(
        <Toast status="success" title="Success Toast" />
      );
      container = renderResult.container;
    });

    it("Should render on the screen", () => {
      expect(container.firstChild).toBeInTheDocument();
    });

    it("Should have correct bgColor", () => {
      const bgColor = "bg-green-500";
      expect(container.firstChild).toHaveClass(bgColor);
    });

    it("Should have the right icon", () => {
      const icon = screen.getByAltText("Success check mark");
      expect(icon).toBeInTheDocument(); // Check if the icon is in the document
    });
  });

  describe("renders warning toast", () => {
    beforeEach(() => {
      const renderResult = render(
        <Toast status="warning" title="Warning Toast" />
      );
      container = renderResult.container;
    });

    it("Should render on the screen", () => {
      expect(container.firstChild).toBeInTheDocument();
    });

    it("Should have correct bgColor", () => {
      const bgColor = "bg-amber-500";
      expect(container.firstChild).toHaveClass(bgColor);
    });

    it("Should have the right icon", () => {
      const icon = screen.getByAltText("Warning icon");
      expect(icon).toBeInTheDocument(); // Check if the icon is in the document
    });
  });

  describe("renders error toast", () => {
    beforeEach(() => {
      const renderResult = render(<Toast status="error" title="Error Toast" />);
      container = renderResult.container;
    });

    it("Should render on the screen", () => {
      expect(container.firstChild).toBeInTheDocument();
    });

    it("Should have correct bgColor", () => {
      const bgColor = "bg-red-500";
      expect(container.firstChild).toHaveClass(bgColor);
    });

    it("Should have the right icon", () => {
      const icon = screen.getByAltText("Error icon");
      expect(icon).toBeInTheDocument(); // Check if the icon is in the document
    });
  });

  describe("renders info toast", () => {
    beforeEach(() => {
      const renderResult = render(<Toast status="info" title="Info Toast" />);
      container = renderResult.container;
    });

    it("Should render on the screen", () => {
      expect(container.firstChild).toBeInTheDocument();
    });

    it("Should have correct bgColor", () => {
      const bgColor = "bg-sky-500";
      expect(container.firstChild).toHaveClass(bgColor);
    });

    it("Should have the right icon", () => {
      const icon = screen.getByAltText("Information icon");
      expect(icon).toBeInTheDocument(); // Check if the icon is in the document
    });
  });

  it("Should render title", () => {
    render(<Toast status="success" title="Toast Title" />);

    const toastTitle = screen.getByText("Toast Title");
    expect(toastTitle).toBeInTheDocument();
  });

  it("Should render description if provided", () => {
    render(
      <Toast
        status="success"
        title="Toast Title"
        description="Toast Description"
      />
    );

    const toastDescription = screen.getByText("Toast Description");
    expect(toastDescription).toBeInTheDocument();
  });

  it("Should not render description if not provided", () => {
    render(<Toast status="success" title="Toast Title" />);

    const toastDescription = screen.queryByText("Toast Description");
    expect(toastDescription).not.toBeInTheDocument();
  });
});
