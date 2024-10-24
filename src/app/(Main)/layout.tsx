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
    <div id="modal-root" className=" md:flex overflow-y-hidden relative">
      <NavBar />
      <main
        id="content-container"
        className="md:w-3/4 md:max-w-5xl  md:mr-auto  md:ml-auto  z-50"
      >
        <div className=" px-5 pt-24  md:px-0 md:pt-12 h-screen overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
