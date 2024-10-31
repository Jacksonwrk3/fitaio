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
      //Redirects to /auth/callback for cookie exchange and then redirects to /user/workouts
      redirectTo: `${process.env.NEXT_PUBLIC_ORIGIN}/auth/callback?next=/user/workouts`,
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
