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

const Toast: React.FC<ToastProps> = ({ status, title, description }) => {
  let bgColor;
  let iconURL;
  switch (status) {
    case "success":
      bgColor = "bg-green-500";
      iconURL = "public/check.png";
      break;
    case "warning":
      bgColor = "bg-amber-500";
      iconURL = "pubic/alert-orange.png";
      break;
    case "info":
      bgColor = "bg-sky-500";
      iconURL = "public/info.png";
      break;
    case "error":
      bgColor = "bg-red-500";
      iconURL = "public/alert-red.png";
      break;
  }
  return <div className={`${bgColor}`}></div>;
};

export default Toast;
