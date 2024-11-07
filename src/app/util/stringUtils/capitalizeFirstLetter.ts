/**
 * @function capitalizeFirstLetter
 * @property {string} val - Value to manipulate
 * @returns {string} - The string input with first letter capitalized
 */
function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default capitalizeFirstLetter;
