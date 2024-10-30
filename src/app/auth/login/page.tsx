"use client";
import { on } from "events";
import { Button, TextInput, Toast } from "../../components/index";
import { googleSignUp } from "@/app/actions/auth/index";
import { useToast } from "@/app/hooks";
import Link from "next/link";
import React, { useState } from "react";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const googleLogin = async () => {
    try {
      const res = await googleSignUp();
      console.log(res);
    } catch (error) {
      let errorMsg = (error as Error).message;
      console.error(errorMsg);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className=" font-bold text-4xl text-center">Log In</h1>
        <form className="border-2 border-grayPrimary rounded px-6 py-8 m-2  space-y-6">
          <TextInput
            id="username"
            value={username}
            onChange={(e) => {
              usernameOnChange(e);
            }}
          />
          <TextInput
            type="password"
            id="username"
            value={password}
            onChange={(e) => {
              passwordOnChange(e);
            }}
          />
          <div className="space-y-2 flex flex-col">
            <Button width="full">Sign Up</Button>
            <p className="text-center">
              Dont have an account?{" "}
              <span className="underline">
                <Link href="/auth/signup">Sign up</Link>
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
                googleLogin();
              }}
            >
              Login with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
