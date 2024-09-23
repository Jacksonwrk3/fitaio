"use client";
import { useState, useEffect } from "react";

/**
 * @typedef {Object} TextInputProps - The props for the TextInput component
 * @property {string} id - The value for
 * - the id attribute of the input element
 * - the htmlFor attribute of the label element
 * - the name attribute of the input element
 * @property {React.ReactNode} children - The content inside the label element
 * @property {string} placeholder - The placeholder for the input element
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - The function to be called when the input value changes
 * @property {string} value - The value of the input element
 */
type TextInputProps = {
  id: string;
  children: React.ReactNode;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: "text" | "password";
};

/**
 * @description The TextInput component
 * @dev [Props]type - Is defaulted to "text"
 * @type {React.FC<TextInputProps>}
 * @returns {JSX.Element} The rendered TextInput element
 */
const TextInput: React.FC<TextInputProps> = ({
  id,
  children,
  placeholder,
  onChange,
  value,
  type = "text",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(() => {
      return !isVisible;
    });
  };

  useEffect(() => {
    if (type === "text") {
      setIsVisible(true);
    }
  }, []);
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-bold" htmlFor={id}>
        {children}
      </label>
      <div className=" relative flex items-center border border-grayPrimary">
        <input
          type={isVisible ? "text" : "password"}
          id={id}
          name={id}
          className=" rounded py-2 pl-4 w-full"
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
        />
        {type === "password" && (
          <div
            className="text-blue-500 absolute right-0 mr-4 cursor-pointer"
            onClick={toggleVisibility}
          >
            {isVisible ? "Hide" : "Show"}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
