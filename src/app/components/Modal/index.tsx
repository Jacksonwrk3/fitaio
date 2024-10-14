import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * @interface ModalProps
 * @property {React.ReactNode} children - Modal content
 * @property {boolean} isOpen - Determines if the modal is displayed or not
 * @property {() => void} onClose - Callback function that closes the modal
 * @property {string} target - The element id we are attaching our modal to
 */
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  target: string;
}

/**
 * @component Modal
 * @description A reusuable modal component created using React.createPortal
 * @interface {ModalProps}
 * @returns {JSX.Element} The rendered Modal element
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, target }) => {
  useEffect(() => {
    //Disable scrolling when modal is open
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    // Cleanup function to enable scrolling when the modal is closed
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);
  //If is Open is false return null
  if (!isOpen) {
    return null;
  }
  //Retrieves the HTML element with the specified id (target) ans cast its type as HTMLElement.
  //If it doesn't exist, modal root will be null
  const modalRoot = document.getElementById(target) as HTMLElement;

  //If modal root is null then we return null and console.error
  if (!modalRoot) {
    console.error(`Modal root not found: ${target}`);
    return null;
  }
  return createPortal(
    <div
      className="w-screen h-screen absolute top-0 right-0 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div className="max-w-3xl  w-[90%] border-1 bg-white border-grayPrimary rounded relative ">
        <button className="absolute right-8 top-4" onClick={onClose}>
          x
        </button>
        <div className="overflow-y-auto h-[90vh] max-h-[567px]">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
