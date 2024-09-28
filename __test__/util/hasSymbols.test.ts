import { hasSymbols } from "@/app/util/auth";

describe("hasSymbols", () => {
  /**
   * @type {Validation Result} - The type being referenced in both test cases.
   */
  it("isValid should be true and error should be null, if password contains at least 1 symbol", () => {
    const testPassword = "Password123!";
    const result = hasSymbols(testPassword);
    expect(result.isValid).toBe(true);
    expect(result.error).toBe(null);
  });

  it("isValid should be false and error should be 'Password must contain at least 1 symbol', if password does not contain at least 1 symbol", () => {
    const testPassword = "Password123";
    const result = hasSymbols(testPassword);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Password must contain at least 1 symbol");
  });
});
