import React from "react";
import Image from "next/image";
import { useToast } from "@/app/hooks";
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

/**
 * @description Toast Card
 * @param {string} status - Toast variant
 *  -"success"
 *  -"warning"
 *  -"error"
 *  -"info"
 * @param {string} title - Title or heading of the toast
 * @param {string} description - Description of the toast
 *  - Optional
 * @type {ToastProps} - Component props uses ToastProps interface
 */
const Toast: React.FC<ToastProps> = ({ status, title, description }) => {
  const { closeToast } = useToast();
  //Background color of the toast
  let bgColor;

  //Icon route
  let iconURL;

  //Alt attribute for image
  let alt;
  switch (status) {
    case "success":
      bgColor = "bg-green-500";
      iconURL = "/check.png";
      alt = "Success check mark";
      break;
    case "warning":
      bgColor = "bg-amber-500";
      iconURL = "/alert-orange.png";
      alt = "Warning icon";
      break;
    case "info":
      bgColor = "bg-sky-500";
      iconURL = "/info.png";
      alt = "Information icon";
      break;
    case "error":
      bgColor = "bg-red-500";
      iconURL = "/alert-red.png";
      alt = "Error icon";
      break;
  }
  return (
    <div
      className={`${bgColor} relative rounded flex flex-row items-center text-white space-x-3 p-3 w-[350px] text-wrap break-word `}
    >
      <div className="p-1 rounded-full bg-white">
        <Image src={iconURL} width={16} height={16} alt={alt} />
      </div>
      <div>
        <div className="font-bold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Toast;
