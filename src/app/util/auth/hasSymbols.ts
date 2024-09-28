import { ValidationResult } from "./types";

/**
 * @function hasSymbols - Checks if the password contains at least 1 symbol
 * @param {string} password - The password to check
 * @returns {ValidationResult}
 *
 */
const hasSymbols = (password: string): ValidationResult => {
  // Define a regular expression that checks for special symbols
  const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const res = symbolRegex.test(password);
  if (res) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: "Password must contain at least 1 symbol",
    };
  }
};

export default hasSymbols;
