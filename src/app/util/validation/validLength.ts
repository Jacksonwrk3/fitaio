/**
 * @function validLength - Checks if the password is ATLEAST equal to the provided length
 * @param {string} - The password being checked
 * @param {len} = The minimum length the password should be
 * @returns {boolean}
 */
const validLength = (password: string, len: number) => {
  if (password.length >= len) {
    return true;
  } else {
    return false;
  }
};

export default validLength;
