// hasUppercase.test.ts
import { hasUppercase } from "@/app/util/string";
describe("hasUppercase", () => {
  it("should return true if the string contains at least one uppercase letter", () => {
    expect(hasUppercase("Hello")).toBe(true);
    expect(hasUppercase("PASSWORD")).toBe(true);
    expect(hasUppercase("123ABC")).toBe(true);
    expect(hasUppercase("User123")).toBe(true);
  });

  it("should return false if the string does not contain any uppercase letters", () => {
    expect(hasUppercase("hello")).toBe(false);
    expect(hasUppercase("password123")).toBe(false);
    expect(hasUppercase("")).toBe(false);
    expect(hasUppercase("123456")).toBe(false);
  });
});
