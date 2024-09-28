/**
 * @description Type for the validation result. If isValid is true, error is expected to be null
 * If isValid is false, error is expected to be a string that describes the error.
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid
 * @property {string | null} error
 */
export type ValidationResult = {
  isValid: boolean;
  error: string | null;
};
