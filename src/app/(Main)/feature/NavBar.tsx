"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components";
import { createClient } from "@/app/util/supabase/client";
import { useState, useEffect } from "react";

/**
 * NavBar component renders a navigation bar with links and a sign-out button.
 */
const NavBar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {}, [openHamburger]);

  const toggleHamburger = () => {
    setOpenHamburger((prevState) => {
      return !prevState;
    });
  };
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
  const activeLinkClasses = "text-blue-500 font-bold";
  const passiveLinkClasses = "text-black font-normal";

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
    <nav
      className={`border-b  w-full py-3 flex  justify-between place-items-center border-grayPrimary relative`}
    >
      <div className="ml-5 flex items-center md:ml-0">FitAIO</div>
      <button
        className="flex flex-col justify-center space-y-1.5 h-8 mr-5 md:hidden "
        onClick={toggleHamburger}
      >
        <div
          className={`border w-6 border-black ${
            openHamburger ? "rotate-45 translate-y-1 duration-100" : "rotate-0"
          }`}
        ></div>
        <div
          className={`border w-6 border-black ${
            openHamburger ? "hidden" : "block"
          }`}
        ></div>
        <div
          className={`border w-6 border-black ${
            openHamburger
              ? "-rotate-45 -translate-y-1 duration-100"
              : "rotate-0"
          }`}
        ></div>
      </button>
      <ul
        className={`pl-2 items-center absolute space-y-6   pt-6 top-full -translate-x-full h-72  flex-col border-2 border-blue-500 w-full bg-white   ${
          openHamburger ? "flex translate-x-0 duration-200" : "opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.path} className="w-full flex justify-center">
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
        <div className="w-auto text-center">
          <button onClick={signout} className="text-red-500">
            Sign Out{" "}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
