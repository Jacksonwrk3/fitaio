"use client";
import { Button } from "../components/index";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex space-x-4 ">
        <Link href="/auth/signup">
          <Button onClick={() => {}} variant="primary">
            Sign up
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button onClick={() => {}} variant="outlined">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
}
