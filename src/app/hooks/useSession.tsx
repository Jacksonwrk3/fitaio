import { SessionContext } from "../context/SessionContext";
import React, { useEffect, useState } from "react";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import { createClient } from "../util/supabase/client";
/**
 * @description - Types for SessionProvider props
 * @property {React.ReactNode} children
 */
type SessionProviderTypes = {
  children: React.ReactNode;
};

/**
 * @description Custom hook that holds Supabase session data and passes it down to its child components
 * @param {React.ReactNode} children
 * @type {SessionProviderTypes}
 * @returns {SessionContext.Provider}
 */
export const SessionProvider: React.FC<SessionProviderTypes> = ({
  children,
}) => {
  const [session, setSession] = useState<null | Session>(null);

  const supabase = createClient();
  useEffect(() => {
    // Extracting the subscription object from the supabase auth listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      // Check if the auth event is 'SIGNED_OUT'
      if (event === "SIGNED_OUT") {
        // If signed out, set session to null
        setSession(null);
      }
      // Check if there is a valid session object (user is signed in)
      else if (session) {
        // Set the session state to the current session
        setSession(session);
      }
    });

    // Cleanup function: Unsubscribe from the auth state change listener when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};
