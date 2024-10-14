import React, { createContext } from "react";
import { Toast } from "./interface";

/**
 * @description ToastContext provides a context for managing toast notifications in the application.
 * @type {React.Context<{ openToast: (component: React.ReactElement, timeout: number) => void, closeToast: (id: number) => void }>}
 * @exports ToastContext
 */
const ToastContext = createContext<{
  openToast: (component: React.ReactElement, timeout: number) => void;
  closeToast: (id: number) => void;
}>({
  openToast: (component: React.ReactElement, timeout: number) => {},
  closeToast: (id: number) => {},
});

export default ToastContext;
