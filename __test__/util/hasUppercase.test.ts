import { hasUppercase } from "@/app/util/validation";
import { ValidationResult } from "@/app/util/validation/types";
describe("hasUppercase", () => {
  /**
   * @type {ValidationResult} is being referenced in both test cases
   */
  it("isValid should be true and error should be null if the string contains atleast 1 uppercase letter", () => {
    const res = hasUppercase("Password123!");
    expect(res.isValid).toEqual(true);
    expect(res.error).toEqual(null);
  });

  it("isValid should be false and error should be `Password must contain atleast 1 symbol` if password does NOT contain an uppercase letter ", () => {
    const res = hasUppercase("password123!");
    expect(res.isValid).toEqual(false);
    expect(res.error).toEqual(`Password must contain atleast 1 symbol`);
  });
});
