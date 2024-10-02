"use client";
import { Button } from "../components/index";
import { useContext, useEffect } from "react";
import { SessionContext } from "../context/Session/SessionContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const session = useContext(SessionContext);

  useEffect(() => {
    if (session) {
      // Redirect to /personal if session exists
      console.log("Going to personal");
      router.replace("/personal/workouts");
    } else {
      // No session, stay on the current page
      console.log("session is null");
    }
  }, [session, router]); // Run effect when session or router changes

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex space-x-4 ">
        <Link href="/auth/signup">
          <Button onClick={() => {}} variant="primary">
            Sign up
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button onClick={() => {}} variant="outlined">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
}
