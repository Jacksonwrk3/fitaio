"use client";

/**
 * @description Type for the Button component's props
 * @property {React.ReactNode} children - The content inside the button
 * @property {() =>{}} onClick - The function to be called when the button is clicked
 * @property {string} variant - The variant of the button
 * @property {string} width - The width of the button
 */
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outlined";
  width?: "full" | "auto";
};

/**
 * @component Button
 * @type {React.FC<ButtonProps>}
 * @dev - Width defaults to auto
 * - Width[full] - Sets the width to 100%
 * @dev - Variant defaults to primary
 * @returns {JSX.Element} The rendered button element
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  width = "auto",
}) => {
  const primaryClasses = "bg-blue-600 text-white";
  const secondaryClasses = "bg-white border-grayPrimary border text-black";
  const widthClasses = width === "full" ? "w-full" : "w-auto";
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary" ? primaryClasses : secondaryClasses
      }  ${widthClasses} px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
