import { hasSymbols } from "@/app/util/validation";
describe("hasSymbols", () => {
  it("should return true if the string contains symbols", () => {
    expect(hasSymbols("hello!")).toBe(true);
    expect(hasSymbols("@password")).toBe(true);
    expect(hasSymbols("123#abc")).toBe(true);
    expect(hasSymbols("user$name")).toBe(true);
  });

  it("should return false if the string does not contain any symbols", () => {
    expect(hasSymbols("hello")).toBe(false);
    expect(hasSymbols("password123")).toBe(false);
    expect(hasSymbols("")).toBe(false);
    expect(hasSymbols("ABCxyz")).toBe(false);
  });
});
