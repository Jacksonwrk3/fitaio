/**
 * Checks if the given string contains any lowercase letters.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string contains a lowercase letter, otherwise false.
 */
const hasLowercase = (str: string): boolean => {
  return /[a-z]/.test(str);
};

export default hasLowercase;
