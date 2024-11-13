import { isEmail } from "@/app/util/string";

describe("isEmail", () => {
  it("returns true for valid emails", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("user.name+tag+sorting@example.com")).toBe(true);
    expect(isEmail("user.name@subdomain.example.com")).toBe(true);
  });

  it("returns false for invalid emails", () => {
    expect(isEmail("plainaddress")).toBe(false);
    expect(isEmail("missing-at-sign.com")).toBe(false);
    expect(isEmail("username@.com")).toBe(false);
    expect(isEmail("username@com")).toBe(false);
    expect(isEmail("username@domain..com")).toBe(false); // This now returns false as expected
  });
});
