import type { Metadata } from "next";
import "../../globals.css";
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
    <div>
      <nav className="bg-blue-100">
        <ul>
          <li>Routines</li>
          <li>Programs</li>
          <li>Find a Coach</li>
          <li>Become a Coach</li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
