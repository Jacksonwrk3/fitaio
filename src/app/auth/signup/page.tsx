"use client";
import { Button, TextInput, Toast } from "../../components/index";
import Link from "next/link";
import { googleSignUp } from "@/app/actions/auth/index";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/app/util/stringUtils";
import { createClient } from "@/app/util/supabase/client";
import {
  hasLowercase,
  hasUppercase,
  hasSymbols,
  validLength,
  hasNumber,
} from "@/app/util/validation";
import { useToast } from "@/app/hooks";
import { create } from "domain";
/**
 * @TODO Error handle for google sign up
 */
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [containsValidLength, setContainsValidLength] = useState(false);
  const [containsUppercase, setContainsUppercase] = useState(false);
  const [containsSymbol, setContainsSymbol] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [containsLowercase, setContainsLowercase] = useState(false);
  const [disableSignup, setDisableSignup] = useState(true);

  const supabase = createClient();
  const router = useRouter();
  const { openToast } = useToast();
  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;

    // Update the password state
    setPassword(newPassword);

    // Evaluate the password's validity directly
    const validLowercase = hasLowercase(newPassword).isValid;
    const validUppercase = hasUppercase(newPassword).isValid;
    const validSymbol = hasSymbols(newPassword).isValid;
    const isValidLength = validLength(newPassword, 9).isValid;
    const validNumber = hasNumber(newPassword).isValid;

    // Update state based on the latest password validity checks
    setContainsLowercase(validLowercase);
    setContainsUppercase(validUppercase);
    setContainsSymbol(validSymbol);
    setContainsValidLength(isValidLength);
    setContainsNumber(validNumber);

    // Determine if the signup should be disabled
    setDisableSignup!(
      !(
        validLowercase &&
        validNumber &&
        validSymbol &&
        validUppercase &&
        validLength
      )
    );
  };

  const firstNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fName = e.target.value;
    setFirstName(fName);
  };

  const lastNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lName = e.target.value;
    setLastName(lName);
  };

  const customRegister = async () => {
    //Capitalizes first letter of firstName
    const fName = capitalizeFirstLetter(firstName);
    //Capitalizes first letter of lastName
    const lName = capitalizeFirstLetter(lastName);
    //Combines firstName and lastName to make full name
    const fullName = `${fName} ${lName}`;
    //Signs up via supabase client
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    //Opens toast if there's error
    if (error) {
      openToast(
        <Toast
          status="error"
          title="Sign-up error"
          description={error!.message}
        />,
        2000
      );
    } else {
      router.replace("/user/workouts");
    }
  };

  const googleRegister = async () => {
    try {
      const res = await googleSignUp();
    } catch (error) {
      // Displays error toast with description if google sign up fails
      let errorMsg = (error as Error).message;
      openToast(
        <Toast
          status="error"
          title="Sign-up error"
          description={`${errorMsg}`}
        />,
        5000
      );
    }
  };
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className=" font-bold text-4xl text-center">Create An Account</h1>
        <form className="border-2 border-grayPrimary rounded px-6 py-8 m-2  space-y-6">
          <div>
            <label htmlFor="email">Email</label>
            <TextInput
              id="email"
              value={email}
              onChange={(e) => {
                emailOnChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <TextInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                passwordOnChange(e);
              }}
            />
          </div>
          <div className="flex flex-col space-y-6 xs:flex-row xs:space-y-0 xs:justify-between">
            <div>
              <label htmlFor="first-name">First Name</label>
              <TextInput
                id="first-name"
                value={firstName}
                onChange={(e) => {
                  firstNameOnChange(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <TextInput
                id="last-name"
                value={lastName}
                onChange={(e) => {
                  lastNameOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="text-sm space-y-1">
            <p
              className={
                containsValidLength ? "text-green-500" : "text-red-500"
              }
            >
              Password must be over 8 characters
            </p>
            <p
              className={containsUppercase ? "text-green-500" : "text-red-500"}
            >
              Password must contain 1 uppcercase character (A-Z)
            </p>
            <p
              className={containsLowercase ? "text-green-500" : "text-red-500"}
            >
              Password must contain 1 lowercase character (a-z)
            </p>
            <p className={containsSymbol ? "text-green-500" : "text-red-500"}>
              Password must contain 1 symbol (!@#$%^&*)
            </p>
            <p className={containsNumber ? "text-green-500" : "text-red-500"}>
              Password must contain 1 number (0-9)
            </p>
          </div>
          <div className="space-y-2 flex flex-col">
            <Button
              width="full"
              disabled={disableSignup}
              onClick={(e) => {
                e!.preventDefault();
                customRegister();
              }}
            >
              Sign Up
            </Button>

            <p className="text-center">
              Already have an account?{" "}
              <span className="underline">
                <Link href="/auth/login">Login</Link>
              </span>
            </p>
            <div className="flex flex-row items-center py-4">
              <div className="h-px bg-grayPrimary w-full"></div>

              <span className="px-6 text-xs">OR</span>
              <div className="h-px bg-grayPrimary w-full"></div>
            </div>

            <Button
              width="full"
              variant="outlined"
              onClick={(e) => {
                e!.preventDefault();
                googleRegister();
              }}
            >
              Sign up with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
