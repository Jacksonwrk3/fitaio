import React from "react";
import Image from "next/image";
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
  //Background color of the toast
  let bgColor;

  //Icon route
  let iconURL;

  //Alt attribute for image
  let alt;
  switch (status) {
    case "success":
      bgColor = "bg-green-500";
      iconURL = "public/check.png";
      alt = "Success check mark";
      break;
    case "warning":
      bgColor = "bg-amber-500";
      iconURL = "pubic/alert-orange.png";
      alt = "Warning icon";
      break;
    case "info":
      bgColor = "bg-sky-500";
      iconURL = "public/info.png";
      alt = "Information icon";
      break;
    case "error":
      bgColor = "bg-red-500";
      iconURL = "public/alert-red.png";
      alt = "Error icon";
      break;
  }
  return (
    <div className={`${bgColor} p-2 rounded`}>
      <Image src={iconURL} width={16} height={16} alt={alt} />
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Toast;
