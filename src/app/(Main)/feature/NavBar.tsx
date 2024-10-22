"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components";
import { createClient } from "@/app/util/supabase/client";
import { useState, useEffect } from "react";

/**
 * NavBar component renders a navigation bar with links and a sign-out button.
 * @TODO write test
 */
const NavBar = () => {
  // State to control the hamburger menu's open/close status
  const [openHamburger, setOpenHamburger] = useState(false);

  // Empty useEffect to demonstrate side effects could be placed here if needed
  useEffect(() => {}, [openHamburger]);

  // Toggle hamburger menu's open/close state
  const toggleHamburger = () => {
    setOpenHamburger((prevState) => {
      return !prevState; // Switch the state between true and false
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
  const activeLinkClasses = "text-blue-500 font-bold"; // When the current path matches the link
  const passiveLinkClasses = "text-black font-normal"; // When the current path doesn't match the link

  /**
   * Sign out the current user from Supabase.
   *
   * @async
   * @function signout
   * @returns {Promise<void>}
   * @throws {Error} Throws an error if sign out fails.
   */
  const signout = async () => {
    const { error } = await supabase.auth.signOut(); // Supabase sign-out request
    if (error) {
      const e = error as Error; // Typecast to Error type
      console.log(e); // Log error if sign-out fails
      throw new Error(e.message); // Throw the error to be handled elsewhere
    }
  };

  return (
    <nav
      className={`fixed bg-white md:static w-full py-3 flex  justify-between  md:justify-start md:flex-col  md:py-5 md:px-2  md:h-screen md:w-28 border-b border-grayPrimary md:border-0 md:space-y-8 `}
    >
      {/* Logo or branding */}
      <div className="ml-5 flex items-center md:ml-0 md:col-span-1 md:justify-center">
        FitAIO
      </div>
      {/* Hamburger menu button */}
      <button
        className="flex flex-col justify-center space-y-1.5 h-8 mr-5 md:hidden "
        onClick={toggleHamburger}
      >
        {/* Transform lines into X shape when the hamburger is open */}
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

      {/* Navigation links */}
      <ul
        className={` flex pl-2 items-center absolute space-y-6   pt-6 top-[101%]  -translate-x-full h-72  flex-col  w-full bg-white md:pl-0 md:static  md:h-auto md:w-auto  md:translate-x-0 md:space-y-4  md:pt-0 md:flex-col md:grow   ${
          openHamburger
            ? "flex translate-x-0 duration-200" // If hamburger is open, slide in the menu
            : "opacity-0 md:opacity-100" // Hide menu on smaller screens if hamburger is closed
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.path}
            className="w-auto  flex justify-center md:text-center"
          >
            {/* Generate links with dynamic styles based on active route */}
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

        {/* Sign Out button */}
        <div className="w-auto text-center md:grow md:flex md:items-end">
          <button onClick={signout} className="text-red-500 ">
            Sign Out
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
