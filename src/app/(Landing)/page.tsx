"use client";
import { Button } from "../components/index";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex space-x-4">
        <Button onClick={() => console.log("hello")}>
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button onClick={() => {}} variant="outlined">
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
