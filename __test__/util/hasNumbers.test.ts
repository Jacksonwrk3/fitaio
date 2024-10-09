import { ValidationResult } from "@/app/util/validation/types";
import { hasNumber } from "@/app/util/validation";
describe("hasNumbers", () => {
  /**
   * @type {ValidationResult}
   */
  it("isValid from ValidationResult object should return true and error should be null, if password contains a number", () => {
    let testPassword = "Password123!";
    let res = hasNumber(testPassword);
    expect(res.isValid).toEqual(true);
    expect(res.error).toEqual(null);
  });

  it("isValid from ValidationResult object should return false and error return `Password must cantain atleast 1 number`, if password DOES NOT contain a number", () => {
    let testPassword = "Password!";
    let res = hasNumber(testPassword);
    expect(res.isValid).toEqual(false);
    expect(res.error).toEqual(`Password must cantain atleast 1 number`);
  });
});
