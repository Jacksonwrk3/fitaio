import { ValidationResult } from "./types";

/**
 * @function validLength - Checks if the password is ATLEAST equal to the provided length
 * @param {string} - The password being checked
 * @param {len} = The minimum length the password should be
 * @returns {ValidationResult}
 */
const validLength = (password: string, len: number): ValidationResult => {
  if (password.length >= len) {
    return {
      isValid: true,
      error: null,
    };
  } else {
    return {
      isValid: false,
      error: `Password should be atleast ${len} characters long`,
    };
  }
};

export default validLength;
