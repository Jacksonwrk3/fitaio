import { createContext } from "react";
import { Session } from "@supabase/gotrue-js/src/lib/types";

/**
 * @description - SessionContext used to pass the Supabase Session prop
 * @type {Session | null}
 * @exports SessionContext
 */
export const SessionContext = createContext<Session | null>(null);
