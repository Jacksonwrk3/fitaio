import { useEffect, useState } from "react";
/**
 * @description - Hook that waits a certain amount of time before invoking a function
 * @param {T} value - The function to debounce
 * @param {number} delay - The debounce delay in milliseconds
 * @returns {any} - The return value of the debounced function
 */
export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue;
};
