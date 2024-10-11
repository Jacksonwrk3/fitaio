import React from "react";
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
  //If is Open is false return null
  if (!isOpen) {
    return null;
  }
  //Retrieves the HTML element with the specified id (target) ans cast its type as HTMLElement.
  //If it doesn't exist, modal root will be null
  const modalRoot = document.getElementById(target) as HTMLElement;

  //If modal root is null then we return null and console.error
  if (!modalRoot) {
    console.error(`Modal root not found ${target}`);
    return null;
  }
  return createPortal(
    <div className="w-screen h-screen flex items-center justify-center">
      <></>
      <div className="border border-grayPrimary bg-blue-300">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
