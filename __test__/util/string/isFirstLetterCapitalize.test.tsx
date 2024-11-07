// isFirstLetterCapitalized.test.ts
import { isFirstLetterCapitalized } from "@/app/util/stringUtils";
describe("isFirstLetterCapitalized", () => {
  it("should return true for a string starting with an uppercase letter", () => {
    expect(isFirstLetterCapitalized("Hello")).toBe(true);
  });

  it("should return false for a string starting with a lowercase letter", () => {
    expect(isFirstLetterCapitalized("hello")).toBe(false);
  });

  it("should return false for a string starting with a symbol", () => {
    expect(isFirstLetterCapitalized("%hello")).toBe(false);
  });

  it("should return false for a string starting with a number", () => {
    expect(isFirstLetterCapitalized("123Hello")).toBe(false);
  });

  it("should return false for an empty string", () => {
    expect(isFirstLetterCapitalized("")).toBe(false);
  });

  it("should return true for a single uppercase letter", () => {
    expect(isFirstLetterCapitalized("A")).toBe(true);
  });

  it("should return false for a single lowercase letter", () => {
    expect(isFirstLetterCapitalized("a")).toBe(false);
  });

  it("should return false for a single symbol", () => {
    expect(isFirstLetterCapitalized("#")).toBe(false);
  });
});
