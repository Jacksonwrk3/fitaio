import { hasNumber } from "@/app/util/validation";
describe("hasNumber", () => {
  it("should return true if the string contains numbers", () => {
    expect(hasNumber("hello123")).toBe(true);
    expect(hasNumber("123")).toBe(true);
    expect(hasNumber("abc1xyz")).toBe(true);
  });

  it("should return false if the string does not contain any numbers", () => {
    expect(hasNumber("hello")).toBe(false);
    expect(hasNumber("")).toBe(false);
    expect(hasNumber("abcXYZ")).toBe(false);
    expect(hasNumber("!@#$%^&*")).toBe(false);
  });
});
