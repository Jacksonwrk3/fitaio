"use client"; // Indicates that this file contains client-side React code, required for Next.js components

import { Button, TextInput, Toast } from "../../components/index"; // Importing custom components like Button, TextInput, and Toast
import Link from "next/link"; // Importing Link component from Next.js for navigation
import { googleSignUp } from "@/app/actions/auth/index"; // Importing the function to handle Google sign-up
import React, { useEffect, useState } from "react"; // Importing React and React hooks like useState and useEffect
import { useRouter } from "next/navigation"; // Importing Next.js hook to handle routing
import { capitalizeFirstLetter } from "@/app/util/string"; // Utility function to capitalize the first letter
import { createClient } from "@/app/util/supabase/client"; // Supabase client for interacting with the database
import {
  hasLowercase,
  hasUppercase,
  hasSymbols,
  validLength,
  hasNumber,
  isEmail,
} from "@/app/util/string"; // Importing utility functions for password validation and email check
import { useToast } from "@/app/hooks"; // Custom hook for showing toast notifications

const SignUp = () => {
  // State variables for managing form inputs and validation
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [firstName, setFirstName] = useState(""); // First name state
  const [lastName, setLastName] = useState(""); // Last name state
  const [containsValidLength, setContainsValidLength] = useState(true); // Password length validation state
  const [containsUppercase, setContainsUppercase] = useState(true); // Password uppercase validation state
  const [containsSymbol, setContainsSymbol] = useState(true); // Password symbol validation state
  const [containsNumber, setContainsNumber] = useState(true); // Password number validation state
  const [containsLowercase, setContainsLowercase] = useState(true); // Password lowercase validation state
  const [validEmail, setValidEmail] = useState(true); // Email validation state
  const [validFirstName, setValidFirstName] = useState(true); // First name validation state
  const [validLastName, setValidLastName] = useState(true); // Last name validation state
  const [disableSignup, setDisableSignup] = useState(true); // State to disable the sign-up button if conditions aren't met

  // useEffect hook to track changes in the form fields (no-op in this case)
  useEffect(() => {}, [
    email,
    password,
    firstName,
    lastName,
    containsValidLength,
    containsUppercase,
    containsSymbol,
    containsNumber,
    containsLowercase,
  ]);

  const supabase = createClient(); // Creating a Supabase client instance
  const router = useRouter(); // Next.js hook to navigate between pages
  const { openToast } = useToast(); // Toast hook to display notifications

  // Handles email input blur event (when the input loses focus)
  const emailUnfocus = (e: React.FocusEvent<HTMLInputElement>) => {
    let res = isEmail(email); // Check if the entered email is valid
    if (!res) {
      setValidEmail(false); // Set email validity to false if invalid
    } else {
      setValidEmail(true);
    }
  };

  // Updates the email state when the email input changes
  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Updates the email value
  };

  // Updates the password state when the password input changes
  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword); // Updates the password value
  };

  // Handles the password input blur event (validation after the input loses focus)
  const passwordOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validLowercase = hasLowercase(password); // Check for lowercase letters
    const validUppercase = hasUppercase(password); // Check for uppercase letters
    const validSymbol = hasSymbols(password); // Check for special symbols
    const isValidLength = validLength(password, 9); // Check if password length is >= 9
    const validNumber = hasNumber(password); // Check for numbers in the password

    // Update the state based on validation results
    setContainsLowercase(validLowercase);
    setContainsUppercase(validUppercase);
    setContainsSymbol(validSymbol);
    setContainsValidLength(isValidLength);
    setContainsNumber(validNumber);
  };

  // Updates the first name state when the input value changes
  const firstNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fName = e.target.value;
    setFirstName(fName); // Update first name
  };

  // Updates the last name state when the input value changes
  const lastNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lName = e.target.value;
    setLastName(lName); // Update last name
  };

  // Validates the first and last names (checks for symbols, numbers, and empty input)
  const validName = (name: string) => {
    let isValid = !hasSymbols(name) && !hasNumber(name) && name.length !== 0;
    return isValid; // Returns true if name is valid
  };

  // Custom registration handler (called when the user clicks the "Sign Up" button)
  const customRegister = async () => {
    const fName = capitalizeFirstLetter(firstName); // Capitalize the first name
    const lName = capitalizeFirstLetter(lastName); // Capitalize the last name
    const fullName = `${fName} ${lName}`; // Combine first and last name into a full name

    // Call Supabase's sign-up method to register the user
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    // Show an error toast if sign-up fails
    if (error) {
      openToast(
        <Toast
          status="error"
          title="Sign-up error"
          description={error!.message} // Show the error message in the toast
        />,
        2000
      );
    } else {
      // Redirect to the user workouts page on successful sign-up
      router.replace("/user/workouts");
    }
  };

  // Google sign-up handler (called when the user clicks the "Sign up with Google" button)
  const googleRegister = async () => {
    try {
      const res = await googleSignUp(); // Call the Google sign-up function
    } catch (error) {
      // Show an error toast if Google sign-up fails
      let errorMsg = (error as Error).message;
      openToast(
        <Toast
          status="error"
          title="Sign-up error"
          description={`${errorMsg}`} // Show the error message in the toast
        />,
        5000
      );
    }
  };

  // Render the sign-up form
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className=" font-bold text-4xl text-center">Create An Account</h1>
        <form className="border-2 border-grayPrimary rounded px-6 py-8 m-2 space-y-6">
          {/* Email input field */}
          <div className="space-y-1">
            <div>
              <label htmlFor="email">Email</label>
              <TextInput
                id="email"
                value={email}
                onChange={emailOnChange}
                onBlur={emailUnfocus}
              />
            </div>
            {!validEmail && (
              <p className="text-red-500 text-sm">Please enter a valid email</p>
            )}
          </div>

          {/* Password input field with validation messages */}
          <div className="space-y-1">
            <div>
              <label htmlFor="password">Password</label>
              <TextInput
                type="password"
                id="password"
                value={password}
                onBlur={passwordOnBlur}
                onChange={passwordOnChange}
              />
            </div>
            <div className="text-sm space-y-1 ">
              <p
                className={
                  containsValidLength ? "hidden" : "block text-red-500"
                }
              >
                Password must be over 8 characters
              </p>
              <p
                className={containsUppercase ? "hidden" : "block text-red-500"}
              >
                Password must contain 1 uppercase character (A-Z)
              </p>
              <p
                className={containsLowercase ? "hidden" : "block text-red-500"}
              >
                Password must contain 1 lowercase character (a-z)
              </p>
              <p className={containsSymbol ? "hidden" : "block text-red-500"}>
                Password must contain 1 symbol (!@#$%^&*)
              </p>
              <p className={containsNumber ? "hidden" : "block text-red-500"}>
                Password must contain 1 number (0-9)
              </p>
            </div>
          </div>

          {/* First and Last Name input fields */}
          <div className="flex flex-col space-y-6 xs:flex-row xs:space-y-0 xs:justify-between">
            <div>
              <div className="space-y-1">
                <label htmlFor="first-name">First Name</label>
                <TextInput
                  id="first-name"
                  value={firstName}
                  onChange={firstNameOnChange}
                  onBlur={(e) => {
                    const isValid = validName(firstName);
                    setValidFirstName(isValid);
                  }}
                />
              </div>
              {!validFirstName && (
                <p className="text-red-500 text-sm">Enter a valid first name</p>
              )}
            </div>

            <div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <TextInput
                  id="last-name"
                  value={lastName}
                  onChange={lastNameOnChange}
                  onBlur={(e) => {
                    const isValid = validName(firstName);
                    setValidLastName(isValid);
                  }}
                />
              </div>
              {!validLastName && (
                <p className="text-red-500 text-sm">Enter a valid last name</p>
              )}
            </div>
          </div>

          {/* Buttons for sign-up */}
          <div className="space-y-2 flex flex-col">
            <Button
              width="full"
              disabled={disableSignup} // Disable the button if sign-up is not valid
              onClick={(e) => {
                e!.preventDefault();
                customRegister(); // Call custom sign-up function
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

            {/* Divider for Google sign-up */}
            <div className="flex flex-row items-center py-4">
              <div className="h-px bg-grayPrimary w-full"></div>
              <span className="px-6 text-xs">OR</span>
              <div className="h-px bg-grayPrimary w-full"></div>
            </div>

            {/* Google sign-up button */}
            <Button
              width="full"
              variant="outlined"
              onClick={(e) => {
                e!.preventDefault();
                googleRegister(); // Call Google sign-up function
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
