"use client";
import { Button } from "./components/index";
export default function Home() {
  return (
    <div>
      <Button onClick={() => console.log("hello")}>Sign Up</Button>
      <Button onClick={() => {}} variant="outlined">
        Sign In
      </Button>
    </div>
  );
}
