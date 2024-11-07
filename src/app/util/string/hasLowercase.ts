/**
 * Checks if the given string contains any lowercase letters.
 *
 * @param {string} str - The string to check.
 * @returns {ValidationResult}
 */
const hasLowercase = (str: string) => {
  return /[a-z]/.test(str);
};

export default hasLowercase;
