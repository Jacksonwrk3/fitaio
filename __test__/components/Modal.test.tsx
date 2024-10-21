import { render, screen, waitFor } from "@testing-library/react";
import { Modal } from "@/app/components";
describe("Modal", () => {
  const mockFn = jest.fn();
  beforeAll(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "test-modal-root");
    document.body.appendChild(modalRoot);
  });

  afterAll(() => {
    const portalRoot = document.getElementById("portal-root");
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it("Should render properly", async () => {
    render(
      <Modal target="test-modal-root" isOpen={true} onClose={mockFn}>
        Test
      </Modal>
    );

    const modalRoot = document.getElementById("test-modal-root");
    expect(modalRoot).toBeInTheDocument();
    const modal = screen.getByText("Test");
    expect(modal).toBeInTheDocument();
  });
});
