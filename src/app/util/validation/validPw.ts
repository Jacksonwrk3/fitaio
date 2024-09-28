import { hasSymbols, hasUppercase, validLength } from "./index";
import { ValidationResult } from "./types";

/**
 * @function validPw - Checks to see if password is valid.
 * @param {string} password = The password to check
 * @returns {ValidationResult}
 */
const validPw = (password: string): ValidationResult => {
  const expectedLength = 9;
  const containsSymbols = hasSymbols(password);
  const containsUpper = hasUppercase(password);
  const isValidLength = validLength(password, expectedLength);

  if (!containsSymbols.isValid) {
    return containsSymbols;
  } else if (!containsUpper.isValid) {
    return containsUpper;
  } else if (!isValidLength.isValid) {
    return isValidLength;
  } else {
    return {
      isValid: true,
      error: null,
    };
  }
};

export default validPw;
