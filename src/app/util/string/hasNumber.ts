/**
 * @description - Checks to see if a string contains numbers
 * @param {string} - str
 * @returns {boolean}
 */
const hasNumber = (str: string) => {
  return /\d/.test(str);
};

export default hasNumber;
