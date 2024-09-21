"use client";

/**
 * @description Type for the Button component's props
 * @property {React.ReactNode} children - The content inside the button
 * @property {() =>{}} onClick - The function to be called when the button is clicked
 */
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outlined";
};

/**
 * @component
 * @param {React.ReactNode} children - The content inside the button
 * @param {() => {}} onClick - The function to be called when the button is clicked
 * @param {string} variant - The variant of the button
 * @returns {JSX.Element} The rendered button element
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const primaryClasses = "bg-blue-600 text-white";
  const secondaryClasses = "bg-white border-[#e2e8f0] border text-black";
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary" ? primaryClasses : secondaryClasses
      }  px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
