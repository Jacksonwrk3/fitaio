"use client";
import { Button, TextInput } from "../components/index";
import { signup } from "../actions/auth/index";
import React, { useState } from "react";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameOnChange = (username: string) => {
    setUsername(username);
  };

  const passwordOnChange = (password: string) => {
    setPassword(password);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className=" font-bold text-2xl text-center">Create An Account</h1>
        <form className="border-2 border-grayPrimary rounded px-6 py-8 m-2  space-y-6">
          <TextInput id="username" value={username} onChange={usernameOnChange}>
            Username
          </TextInput>
          <TextInput id="username" value={username} onChange={passwordOnChange}>
            Password
          </TextInput>
          <Button width="full">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
