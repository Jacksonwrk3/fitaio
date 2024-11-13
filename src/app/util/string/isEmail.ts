/**
 * Checks if a given string is in a valid email format.
 *
 * This function uses a regular expression to validate common email patterns,
 * ensuring that the input has text before and after the "@" symbol, as well as
 * a period in the domain section. It does not allow spaces or consecutive periods.
 *
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns `true` if the input is a valid email format, otherwise `false`.
 *
 * @example
 * isEmail("example@test.com"); // true
 * isEmail("invalid-email");    // false
 */
function isEmail(input: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // This regex ensures:
  // - The local part (before @) allows letters, numbers, dots, underscores, percent signs, plus signs, and hyphens.
  // - The domain part (after @) allows letters, numbers, dots, and hyphens, but no consecutive dots.
  // - The domain extension (after the final dot) must be at least two letters long.

  // Now let's ensure that there are no consecutive dots in the domain and local parts.
  const domainHasConsecutiveDots = input.includes("..");

  return emailRegex.test(input) && !domainHasConsecutiveDots;
}

export default isEmail;
