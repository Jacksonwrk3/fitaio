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
    <div
      id="modal-root"
      className="md:flex overflow-y-hidden relative  min-h-screen border-2"
    >
      <NavBar />
      <main
        id="content-container"
        className=" md:w-3/4 md:max-w-5xl md:mr-auto  md:ml-auto px-5 md:px-0 "
      >
        <div className="overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
