import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Modal } from "@/app/components";
describe("Modal", () => {
  const onClose = jest.fn();
  //Before every test run this
  beforeAll(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "test-modal-root");
    document.body.appendChild(modalRoot);
  });

  //After every test run this
  afterAll(() => {
    const portalRoot = document.getElementById("portal-root");
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it("Should render properly", () => {
    render(
      <Modal target="test-modal-root" isOpen={true} onClose={onClose}>
        Test
      </Modal>
    );

    const modalRoot = document.getElementById("test-modal-root");
    expect(modalRoot).toBeInTheDocument();
    const modal = screen.getByText("Test");
    expect(modal).toBeInTheDocument();
  });

  it("Should not render if isOpen is false", () => {
    render(
      <Modal target="test-modal-root" isOpen={false} onClose={onClose}>
        Test
      </Modal>
    );

    const modalRoot = document.getElementById("test-modal-root");
    expect(modalRoot).toBeInTheDocument();
    const modal = screen.queryByText("Test");
    expect(modal).not.toBeInTheDocument();
  });

  it("onClose should be called when x image is clicked", () => {
    render(
      <Modal target="test-modal-root" isOpen={true} onClose={onClose}>
        Test
      </Modal>
    );

    const modalRoot = document.getElementById("test-modal-root");
    expect(modalRoot).toBeInTheDocument();
    const closeButton = screen.getByAltText("Close modal button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("x button to close modal should be rendered", () => {
    render(
      <Modal target="test-modal-root" isOpen={true} onClose={onClose}>
        Test
      </Modal>
    );

    const modalRoot = document.getElementById("test-modal-root");
    expect(modalRoot).toBeInTheDocument();
    const closeButton = screen.getByAltText("Close modal button");
    expect(closeButton).toBeInTheDocument();
  });

  it("onClose should be called when background container of modal is clicked", () => {
    render(
      <Modal target="test-modal-root" isOpen={true} onClose={onClose}>
        Test
      </Modal>
    );

    fireEvent.click(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("Shouldn't allowed to be scrolled when modal is opened", () => {
    render(
      <Modal target="test-modal-root" isOpen={true} onClose={onClose}>
        Test
      </Modal>
    );

    expect(document.body.style.overflowY).toBe("hidden");
  });
});
