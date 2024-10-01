"use client";
import { Button } from "../components/index";
import Link from "next/link";
import { createClient } from "../util/supabase/client";
export default function Home() {
  const supabase = createClient();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex space-x-4">
        <Button onClick={() => console.log("hello")}>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
        <Button onClick={() => {}} variant="outlined">
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
