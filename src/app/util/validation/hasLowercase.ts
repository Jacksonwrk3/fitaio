import { ValidationResult } from "./types";

/**
 * Checks if the given string contains any lowercase letters.
 *
 * @param {string} str - The string to check.
 * @returns {ValidationResult}
 */
const hasLowercase = (str: string): ValidationResult => {
  const res = /[a-z]/.test(str);
  if (res) {
    return { isValid: true, error: null };
  } else {
    return {
      isValid: false,
      error: "Password must contain atleast 1 lowercase character",
    };
  }
};

export default hasLowercase;
