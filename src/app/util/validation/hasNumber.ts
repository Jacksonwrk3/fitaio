import { ValidationResult } from "./types";

/**
 * @description - Checks to see if a string contains numbers
 * @param {string} - str
 * @returns {ValidationResult}
 */
const hasNumber = (str: string): ValidationResult => {
  let res = /\d/.test(str);
  if (res) {
    return { isValid: true, error: null };
  } else {
    return { isValid: false, error: "Password must cantain atleast 1 number" };
  }
};

export default hasNumber;
