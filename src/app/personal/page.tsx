"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "../context/Session/SessionContext";
import { Button } from "../components";
import { createClient } from "../util/supabase/client";
const Personal = () => {
  const session = useContext(SessionContext);
  const router = useRouter();
  const supabase = createClient();
  const signOut = async () => {};
  useEffect(() => {
    //If there is an active session, do nothing
    if (session) {
    }
    //If session is null, redirect to home page ("/")
    else {
      router.replace("/");
    }
  }, [session, router]);
  return (
    <>
      This is the personal page
      <Button onClick={}>Sign out</Button>
    </>
  );
};

export default Personal;
