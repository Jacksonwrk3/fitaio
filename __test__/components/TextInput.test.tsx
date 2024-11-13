import { render, screen, fireEvent } from "@testing-library/react";
import { TextInput } from "@/app/components";
import "@testing-library/jest-dom"; // for the extended matchers

describe("TextInput Component", () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with the provided value and placeholder", () => {
    render(
      <TextInput
        id="test-input"
        value="Test Value"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        placeholder="Enter text"
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Test Value");
  });

  it("Should call onChange when input value changes", () => {
    render(
      <TextInput
        id="test-input"
        placeholder="Enter text"
        onChange={mockOnChange}
        value=""
      />
    );

    const input = screen.getByPlaceholderText("Enter text");

    // Simulate typing into the input field
    fireEvent.change(input, { target: { value: "New Value" } });

    // Assert that onChange was called
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should call onBlur when input loses focus", () => {
    render(
      <TextInput
        id="test-input"
        value="Test Value"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        placeholder="Enter text"
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.blur(inputElement);

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it('should toggle visibility when the "Show/Hide" button is clicked for password input', () => {
    render(
      <TextInput
        id="test-input"
        value="Password"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        placeholder="Enter password"
        type="password"
      />
    );

    const showHideButton = screen.getByText("Show");
    expect(showHideButton).toBeInTheDocument();

    // Initially it should be password type
    const inputElement = screen.getByPlaceholderText("Enter password");
    expect(inputElement).toHaveAttribute("type", "password");

    // Click to toggle visibility
    fireEvent.click(showHideButton);

    // After click, the input type should be text
    expect(inputElement).toHaveAttribute("type", "text");
    expect(screen.getByText("Hide")).toBeInTheDocument();
  });

  it("should match snapshot for text input", () => {
    const { asFragment } = render(
      <TextInput
        id="test-input"
        value="Text"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        placeholder="Enter text"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a password field and show/hide the password visibility toggle", () => {
    render(
      <TextInput
        id="password-input"
        value="Password123"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        placeholder="Enter password"
        type="password"
      />
    );

    // The input should initially be of type password
    const inputElement = screen.getByPlaceholderText("Enter password");
    expect(inputElement).toHaveAttribute("type", "password");

    // "Show" text should be visible initially
    expect(screen.getByText("Show")).toBeInTheDocument();
  });
});
