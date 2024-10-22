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
    { name: "Coaches", path: "/user/find-a-coach" },
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
      className={`relative w-full py-3 flex  justify-between  md:justify-start md:flex-col  md:py-5 md:px-2 md:w-auto md:h-screen border-2 border-orange-300 md:space-y-8`}
    >
      <div className="ml-5 flex items-center md:ml-0 md:col-span-1 md:justify-center">
        FitAIO
      </div>
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
        className={`flex pl-2 items-center absolute space-y-6   pt-6 top-full -translate-x-full h-72  flex-col  w-full bg-white md:pl-0 md:static  md:h-auto md:w-auto  md:translate-x-0 md:space-y-4  md:pt-0 md:flex-col md:grow md:border-2 border-green-500   ${
          openHamburger
            ? "flex translate-x-0 duration-200"
            : "opacity-0 md:opacity-100"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.path}
            className="w-auto  flex justify-center md:text-center"
          >
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
        <div className="w-auto text-center pt-auto">
          <button onClick={signout} className="text-red-500 ">
            Sign Out
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
