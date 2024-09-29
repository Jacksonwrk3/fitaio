import { validLength } from "@/app/util/validation";
describe("validLength", () => {
  /**
   * @type {ValidationResult} is being referenced in both test cases
   */
  it("isValid should be true and error should be null, if string is of valid length", () => {
    const testPassword = "Password123!";
    const expectedLength = 9;
    const res = validLength(testPassword, expectedLength);
    expect(res.isValid).toEqual(true);
    expect(res.error).toEqual(null);
  });

  it("isValid should be false and error should be `Password should be atleast ${len} characters long`", () => {
    const testPassword = "Pw123!";
    const expectedLength = 9;
    const res = validLength(testPassword, expectedLength);
    expect(res.isValid).toEqual(false);
    expect(res.error).toEqual(
      `Password should be atleast ${expectedLength} characters long`
    );
  });
});
