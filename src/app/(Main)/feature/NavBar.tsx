"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components";
import { createClient } from "@/app/util/supabase/client";

/**
 * NavBar component renders a navigation bar with links and a sign-out button.
 */
const NavBar = () => {
  // Get the current pathname from Next.js router
  const pathname = usePathname();

  // Initialize Supabase client
  const supabase = createClient();

  // Navigation items to be displayed in the navbar
  const navItems = [
    { name: "Routine", path: "/user/routines" },
    { name: "Programs", path: "/user/programs" },
    { name: "Find a Coach", path: "/user/find-a-coach" },
    { name: "Be a Coach", path: "/user/be-a-coach" },
  ];

  // CSS classes for active and passive links
  const activeLinkClasses = "text-black font-bold";
  const passiveLinkClasses = "text-white font-normal";

  /**
   * Sign out the current user from Supabase.
   *
   * @async
   * @function signout
   * @returns {Promise<void>}
   * @throws {Error} Throws an error if sign out fails.
   */
  const signout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      const e = error as Error;
      console.log(e);
      throw new Error(e.message);
    }
  };

  return (
    <nav className="bg-blue-100 p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path ? activeLinkClasses : passiveLinkClasses
              }`}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <Button onClick={signout}>Sign Out</Button>
      </ul>
    </nav>
  );
};

export default NavBar;
