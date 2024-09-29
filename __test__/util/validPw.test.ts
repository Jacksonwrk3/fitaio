import { validPw } from "@/app/util/validation";
describe("validPw", () => {
  it("`isValid` property should return true and error should return null if the password is valid", () => {
    const testPassword = "Password123!";
    const res = validPw(testPassword);
    expect(res.isValid).toEqual(true);
    expect(res.error).toEqual(null);
  });

  it("`error` property should return 'Password must contain at least 1 symbol' and `isValid` equal to false", () => {
    const testPassword = "Password123";
    const res = validPw(testPassword);
    expect(res.isValid).toEqual(false);
    expect(res.error).toEqual("Password must contain at least 1 symbol");
  });

  it("'error' property should return 'Password must contain atleast 1 uppercase characer' and 'isValid' equal to false", () => {
    const testPassword = "password123!";
    const res = validPw(testPassword);
    expect(res.isValid).toEqual(false);
    expect(res.error).toEqual(
      "Password must contain atleast 1 uppercase characer"
    );
  });

  it("'error' property should return `Password should be atleast ${len} characters long` and 'isValid' equal to false", () => {
    const testPassword = "Pass12!";
    const res = validPw(testPassword);
    expect(res.isValid).toEqual(false);
    //expectedLength of 9 is hard coded in validPw. validPw is dependent on util function validLength which takes a length argument
    expect(res.error).toEqual(`Password should be atleast 9 characters long`);
  });
});
