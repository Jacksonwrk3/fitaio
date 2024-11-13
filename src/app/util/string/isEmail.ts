/**
 * Checks if a given string is in a valid email format.
 *
 * This function uses a regular expression to validate common email patterns,
 * ensuring that the input has text before and after the "@" symbol, as well as
 * a period in the domain section. It does not allow spaces.
 *
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns `true` if the input is a valid email format, otherwise `false`.
 *
 * @example
 * isEmail("example@test.com"); // true
 * isEmail("invalid-email");    // false
 */
function isEmail(input: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}
