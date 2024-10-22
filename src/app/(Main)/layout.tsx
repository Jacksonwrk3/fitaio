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
    <div id="modal-root" className=" md:flex overflow-y-hidden bg-gray-100">
      <NavBar />
      <main className="md:w-3/4 md:max-w-5xl border border-red-300  md:mr-auto  md:ml-auto ">
        {children}
      </main>
    </div>
  );
}
