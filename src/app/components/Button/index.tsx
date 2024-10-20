"use client";

import React from "react";

/**
 * @description Type for the Button component's props
 * @property {React.ReactNode} children - The content inside the button
 * @property {(e?: React.MouseEvent) => void} onClick - The function to be called when the button is clicked
 * @property {string} variant - The variant of the button
 * @property {string} width - The width of the button
 * @property {string} icon - The icon to be displayed
 */
type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: "primary" | "outlined";
  width?: "full" | "auto";
  icon?: "string";
  disabled?: boolean;
};

/**
 * @component Button
 * @param {React.ReactNode} children
 * @param {(e?: React.MouseEvent) => void} onClick
 * @param {"primary" | "outlined"} variant
 * @param {"full" | "auto"} width - Width of button
 *  - "full": Takes width of parent
 *  - "auto": Standard button
 * @param {string} icon - Button icon
 *  - url of icon image
 * @param {booelan} disabled - Determines if button is enabled/disabled
 *  - Optional
 * @returns {JSX.Element} The rendered button element
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  width = "auto",
  icon,
  disabled = false,
}) => {
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryClasses =
    "bg-white hover:bg-gray-100 border-grayPrimary border text-black";
  const widthClasses = width === "full" ? "w-full" : "w-auto";
  const disabledClasses =
    disabled === true
      ? "opacity-50 cursor-not-allowed"
      : "opacity-100 cursor-auto";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        variant === "primary" ? primaryClasses : secondaryClasses
      }  ${widthClasses} ${disabledClasses} px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
