"use server";
import { createClient } from "@/app/util/supabase/server";
import { redirect } from "next/navigation";

/**
 * @description Google Sign up server action
 * @throws {Error} If there is an error, it will throw an error
 * @returns {void} Doesn't return anything. Redirects if successful
 * @see https://supabase.com/docs/reference/javascript/auth-sign-in-with-google
 */
const googleSignUp = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000",
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  if (data) {
    redirect(data.url);
  }
};

export default googleSignUp;
