import { createClient } from "@/app/util/supabase/server";

export async function POST() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}
