import { useState, useEffect } from "react";
import TextInputProps from "./TextInput.types";

/**
 * @description A TextInput component that renders a text input field, either of type "text" or "password".
 * It includes the ability to toggle the visibility of the password when the type is set to "password".
 * The component also requires either an `onChange` or `onBlur` handler (or both).
 * @param {TextInputProps} props - The props for the TextInput component
 * @returns {JSX.Element} The rendered TextInput component
 */
const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  onChange,
  onBlur,
  value,
  type = "text",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Toggles visibility of the password input (from password to text and vice versa).
   */
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // Effect hook to set the visibility based on the input type
  useEffect(() => {
    if (type === "text") {
      setIsVisible(true);
    }
  }, [type]); // Only re-run when type changes

  return (
    <div className="relative flex items-center border border-grayPrimary rounded">
      <input
        type={isVisible ? "text" : "password"} // Toggle between text and password visibility
        id={id}
        name={id}
        className="py-2 pl-4 w-full focus:outline-none focus:ring-0 box-border focus:border focus:border-primary-500 focus:bg-primary-100"
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)} // Only call onChange if it's provided
        onBlur={(e) => onBlur && onBlur(e)} // Only call onBlur if it's provided
        value={value} // Controlled input value
      />
      {type === "password" && (
        <div
          className="text-primary-500 absolute right-0 mr-4 cursor-pointer"
          onClick={toggleVisibility}
        >
          {isVisible ? "Hide" : "Show"} {/* Toggle visibility text */}
        </div>
      )}
    </div>
  );
};

export default TextInput;
