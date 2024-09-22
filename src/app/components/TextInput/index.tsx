import React from "react";

/**
 * @typedef {Object} TextInputProps - The props for the TextInput component
 * @property {string} id - The value for
 * - the id attribute of the input element
 * - the htmlFor attribute of the label element
 * - the name attribute of the input element
 * @property {React.ReactNode} children - The content inside the label element
 * @property {string} placeholder - The placeholder for the input element
 * @property {() => {}} onChange - The function to be called when the input value changes
 * @property {string} value - The value of the input element
 */
type TextInputProps = {
  id: string;
  children: React.ReactNode;
  placeholder?: string;
  onChange: (username: string) => void;
  value: string;
};

/**
 * @description The TextInput component
 * @type {React.FC<TextInputProps>}
 * @returns {JSX.Element} The rendered TextInput element
 */
const TextInput: React.FC<TextInputProps> = ({
  id,
  children,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-bold" htmlFor={id}>
        {children}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        className="border border-grayPrimary rounded py-2 pl-4"
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export default TextInput;
