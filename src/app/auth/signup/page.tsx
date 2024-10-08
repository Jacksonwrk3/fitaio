"use client";
import { Button, TextInput } from "../../components/index";
import Link from "next/link";
import { googleSignUp } from "@/app/actions/auth/index";
import React, { useState } from "react";
/**
 * @TODO Error handle for google sign up
 * @TODO implement debounce for password validation check
 */
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validLength, setValidLength] = useState(false);
  const [hasUppercase, setUppercase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasLowercase, sethasLowercase] = useState(false);
  const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const googleRegister = async () => {
    try {
      const res = await googleSignUp();
    } catch (error) {
      let errorMsg = (error as Error).message;
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className=" font-bold text-4xl text-center">Create An Account</h1>
        <form className="border-2 border-grayPrimary rounded px-6 py-8 m-2  space-y-6">
          <TextInput
            id="username"
            value={username}
            onChange={(e) => {
              usernameOnChange(e);
            }}
          >
            Username
          </TextInput>
          <TextInput
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              passwordOnChange(e);
            }}
          >
            Password
          </TextInput>
          <div className="text-sm space-y-1">
            <p className={validLength ? "text-green-500" : "text-red-500"}>
              Password must be over 8 characters
            </p>
            <p className={hasUppercase ? "text-green-500" : "text-red-500"}>
              Password must contain 1 uppcercase character (A-Z)
            </p>
            <p className={hasLowercase ? "text-green-500" : "text-red-500"}>
              Password must contain 1 lowercase character (a-z)
            </p>
            <p className={hasSymbol ? "text-green-500" : "text-red-500"}>
              Password must contain 1 symbol (!@#$%^&*)
            </p>
            <p className={hasNumber ? "text-green-500" : "text-red-500"}>
              Password must contain 1 number (0-9)
            </p>
          </div>
          <div className="space-y-2 flex flex-col">
            <Button width="full">Sign Up</Button>

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
                console.log("clicked");
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
