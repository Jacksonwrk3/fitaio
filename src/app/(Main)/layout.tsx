import type { Metadata } from "next";
import "../globals.css";
import NavBar from "./feature/NavBar";
export const metadata: Metadata = {
  title: "Dashboard | FitAIO",
  description: "Main content for personal and coaching users",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="modal-root" className="border-2 border-purple-500 md:flex">
      <NavBar />
      <main className="md:h-screen md:w-full">{children}</main>
    </div>
  );
}
