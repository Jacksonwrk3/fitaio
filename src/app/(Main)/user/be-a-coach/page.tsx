"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/app/context/Session/SessionContext";

const BeACoach = () => {
  const session = useContext(SessionContext);
  const router = useRouter();

  useEffect(() => {
    //If there is an active session, do nothing
    if (session) {
    }
    //If session is null, redirect to home page ("/")
    else {
      router.replace("/");
    }
  }, [session, router]);
  return <>Become a Coach</>;
};

export default BeACoach;