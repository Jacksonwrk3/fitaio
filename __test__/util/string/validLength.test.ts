// validLength.test.ts
import { validLength } from "@/app/util/string";
describe("validLength", () => {
  it("should return true if the password length is equal to the specified length", () => {
    expect(validLength("password123", 11)).toBe(true);
    expect(validLength("hello", 5)).toBe(true);
  });

  it("should return true if the password length is greater than the specified length", () => {
    expect(validLength("longpassword", 5)).toBe(true);
    expect(validLength("12345678", 3)).toBe(true);
  });

  it("should return false if the password length is less than the specified length", () => {
    expect(validLength("short", 10)).toBe(false);
    expect(validLength("abc", 4)).toBe(false);
    expect(validLength("", 1)).toBe(false);
  });

  it("should handle edge cases, like an empty password and a minimum length of 0", () => {
    expect(validLength("", 0)).toBe(true);
    expect(validLength("anystring", 0)).toBe(true);
  });
});
