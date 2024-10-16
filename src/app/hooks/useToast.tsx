import { useContext } from "react";
import ToastContext from "../context/Toast/ToastContext";

/**
 * @description Uses the ToastContext and retrieves its values
 * @returns {{ openToast: (component: React.ReactElement, timeout: number) => void, closeToast: (id: number) => void; }}
 */
export const useToast = () => {
  return useContext(ToastContext);
};
