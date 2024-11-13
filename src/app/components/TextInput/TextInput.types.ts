/**
 * @typedef {Object} BaseInputProps - The base props for the TextInput component.
 * @property {string} id - The id, name, and htmlFor attribute for the input and label.
 * @property {string} [placeholder] - The placeholder text for the input element.
 * @property {string} value - The current value of the input element.
 * @property {"text" | "password"} [type="text"] - The variant of the input, either text or password.
 */
type BaseInputProps = {
  id: string;
  placeholder?: string;
  value: string;
  type?: "text" | "password";
};

/**
 * @typedef {BaseInputProps & { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; }} TextInputPropsWithOnChange
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - The function to be called when the input value changes.
 * @property {function} [onBlur] - The optional function to be called when the input loses focus.
 */
type TextInputPropsWithOnChange = BaseInputProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

/**
 * @typedef {BaseInputProps & { onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; }} TextInputPropsWithOnBlur
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - The optional function to be called when the input value changes.
 * @property {function} onBlur - The function to be called when the input loses focus.
 */
type TextInputPropsWithOnBlur = BaseInputProps & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

/**
 * @typedef {TextInputPropsWithOnChange | TextInputPropsWithOnBlur} TextInputProps
 * @description The union type for props that requires either onChange or onBlur, or both.
 */
type TextInputProps = TextInputPropsWithOnChange | TextInputPropsWithOnBlur;

export default TextInputProps;
