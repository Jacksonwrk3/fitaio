/**
 * @function hasSymbols - Checks if the password contains at least 1 symbol
 * @param {string} password - The password to check
 * @returns {boolean}
 *
 */
const hasSymbols = (password: string) => {
  // Define a regular expression that checks for special symbols
  const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const res = symbolRegex.test(password);
  return res;
};

export default hasSymbols;
