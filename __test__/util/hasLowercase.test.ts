import { hasLowercase } from "@/app/util/validation";
import { ValidationResult } from "@/app/util/validation/types";
describe("hasLowercase", () => {
  /**
   * @type {ValidationResult}
   */
  it("isValid should return true, and error should be null in the ValidationResult object", () => {
    const testPassword = "Password123!";
    const res = hasLowercase(testPassword);
    expect(res.isValid).toEqual(true);
    expect(res.error).toEqual(null);
  });
  it("isValid should return false, and error should be `Password must contain atleast 1 lowercase character`", () => {
    const testPassword = "PASWORD123!";
    const res = hasLowercase(testPassword);
    expect(res.isValid).toEqual(false);
    expect(res.error).toEqual(
      "Password must contain atleast 1 lowercase character"
    );
  });
});
