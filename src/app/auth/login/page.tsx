"use client";
import { on } from "events";
import { Button, TextInput, Toast } from "../../components/index";
import { googleSignUp } from "@/app/actions/auth/index";
import { useToast } from "@/app/hooks";
import { createClient } from "@/app/util/supabase/client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClient();
  const router = useRouter();
  const { openToast } = useToast();
  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const customSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("got error");
      openToast(
        <Toast
          status="error"
          title="Login Failed"
          description={error.message}
        />,
        3000
      );
    }

    if (data) {
      console.log("should redirect");
      router.replace("/user/workouts");
    }
  };

  const googleLogin = async () => {
    try {
      const res = await googleSignUp();
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
          <div className="space-y-2 flex flex-col">
            <Button
              width="full"
              onClick={(e) => {
                e.preventDefault();
                customSignIn();
              }}
            >
              Log in
            </Button>
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
