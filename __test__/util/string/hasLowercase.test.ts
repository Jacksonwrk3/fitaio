import { hasLowercase } from "@/app/util/validation";
describe("hasLowercase", () => {
  it("should return true if the string contains lowercase letters", () => {
    expect(hasLowercase("hello")).toBe(true);
    expect(hasLowercase("Hello")).toBe(true);
    expect(hasLowercase("123abc")).toBe(true);
  });

  it("should return false if the string does not contain lowercase letters", () => {
    expect(hasLowercase("HELLO")).toBe(false);
    expect(hasLowercase("12345")).toBe(false);
    expect(hasLowercase("!@#$%^&*")).toBe(false);
  });

  it("should return false for an empty string", () => {
    expect(hasLowercase("")).toBe(false);
  });
});
