/**
 * @function isFirstLetterCapitalized
 * @property {string} val - Value to check
 * @returns {boolean}
 */
function isFirstLetterCapitalized(val: string) {
  return /^[A-Z]/.test(val); // Checks if the first character is uppercase
}

export default isFirstLetterCapitalized;
