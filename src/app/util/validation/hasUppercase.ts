import { ValidationResult } from "./types";

/**
 * @function hasUppercase - Checks to see if a string contains atleast 1 uppercase letter
 * @param {string} password - The password to check
 * @returns {ValidationResult}
 */
const hasUppercase = (password: string): ValidationResult => {
  const regex = /[A-Z]/;
  const res = regex.test(password);

  if (res) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: "Password must contain atleast 1 uppercase characer",
    };
  }
};

export default hasUppercase;
