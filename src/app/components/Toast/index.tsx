import React from "react";

/**
 * @description ToastProps
 * @property {"success" | "warning" | "error" | "info"} status
 * @property {string} title
 * @property {string} description
 */
interface ToastProps {
  status: "success" | "warning" | "error" | "info";
  title: string;
  description?: string;
}

const Toast: React.FC<ToastProps> = () => {};

export default Toast;
