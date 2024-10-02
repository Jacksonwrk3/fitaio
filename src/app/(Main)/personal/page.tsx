"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/app/context/Session/SessionContext";
import { Button } from "@/app/components";
import { createClient } from "@/app/util/supabase/client";
const Personal = () => {
  const session = useContext(SessionContext);
  const router = useRouter();
  const supabase = createClient();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(`Sign out failed: ${error.message}. Please try again`);
    }
  };
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
      <Button
        onClick={() => {
          try {
            signOut();
          } catch (e) {
            const error = e as Error;
            alert(error.message);
          }
        }}
      >
        Sign out
      </Button>
    </>
  );
};

export default Personal;
