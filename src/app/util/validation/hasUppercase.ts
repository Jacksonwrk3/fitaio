/**
 * @function hasUppercase - Checks to see if a string contains atleast 1 uppercase letter
 * @param {string} password - The password to check
 * @returns {boolean}
 */
const hasUppercase = (password: string) => {
  const regex = /[A-Z]/;
  return regex.test(password);
};

export default hasUppercase;
