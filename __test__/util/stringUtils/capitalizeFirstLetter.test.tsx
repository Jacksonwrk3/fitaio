import { capitalizeFirstLetter } from "@/app/util/stringUtils";

describe("capitalizeFirstLetter", () => {
  it("capitalizes the first letter of a lowercase word", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("capitalizes the first letter of an uppercase word", () => {
    expect(capitalizeFirstLetter("World")).toBe("World");
  });

  it("capitalizes the first letter and keeps the rest of the string unchanged", () => {
    expect(capitalizeFirstLetter("javascript")).toBe("Javascript");
  });

  it("handles strings that start with a symbol without changing them", () => {
    expect(capitalizeFirstLetter("%hello")).toBe("%hello");
  });

  it("returns an empty string when given an empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("does not change a single-character string if it is a symbol", () => {
    expect(capitalizeFirstLetter("$")).toBe("$");
  });

  it("handles a string that starts with numbers", () => {
    expect(capitalizeFirstLetter("123hello")).toBe("123hello");
  });
});
