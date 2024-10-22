/**
 * @description Checks if a given value is a valid positive size with units of px, em, or rem.
 * @param {string} value - The size value to validate (e.g., "20px", "1.5em", "30rem").
 * @returns {boolean} - Returns true if the value is a valid size, otherwise false.
 */
const isValidSize = (value: string): boolean => {
  const regex = /^\d+(\.\d+)?(px|em|rem)$/;
  return regex.test(value);
};

export default isValidSize;
