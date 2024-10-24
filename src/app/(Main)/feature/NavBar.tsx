"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/app/util/supabase/client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Text } from "@/app/components";
import { NavigationItems, NavigationItem } from "./navItems.types";
/**
 * NavBar component renders a navigation bar with links and a sign-out button.
 * @TODO write test
 */
const NavBar = () => {
  // State to control the hamburger menu's open/close status
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    const body = document.body; // Reference to the <body> element

    if (openHamburger) {
      // If the hamburger menu is open
      body.classList.add("overflow-x-hidden"); // Disable horizontal scrolling when the menu is open
    }

    // Cleanup function to run when the component unmounts or `openHamburger` changes
    return () => {
      // Remove the added classes from body when the hamburger menu is closed

      body.classList.remove("overflow-hidden");
    };
  }, [openHamburger]); // Effect depends on the openHamburger state

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
  const navItems: NavigationItems = [
    {
      name: "Workouts",
      path: "/user/workouts",
      iconPassive: "/dumbbell-black.png",
      iconActive: "/dumbbell-primary.png",
      alt: "dumbbell icon",
    },
    {
      name: "Programs",
      path: "/user/programs",
      iconPassive: "/calendar.png",
      iconActive: "/calendar-primary.png",
      alt: "calendar icon",
    },
    {
      name: "Coaches",
      path: "/user/find-a-coach",
      iconPassive: "/coach.png",
      iconActive: "/coach-primary.png",
      alt: "coach icon",
    },
    {
      name: "Be a Coach",
      path: "/user/be-a-coach",
      iconPassive: "/form.png",
      iconActive: "/form-primary.png",
      alt: "form icon",
    },
  ];

  // CSS classes for active and passive links
  const activeLinkClasses = "text-violet-500 "; // When the current path matches the link
  const passiveLinkClasses = "text-black "; // When the current path doesn't match the link

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
    <>
      <nav //md-28
        className={`  fixed  bg-white  z-50  md:static w-full py-3 flex   md:justify-start md:flex-col  md:py-5 md:px-2  md:h-screen md:w-40    md:space-y-8 `}
      >
        <div className="flex  justify-center items-center ml-5 md:ml-0">
          {/* Hamburger menu button */}
          <button
            className="flex flex-col justify-center space-y-1.5 h-8 mr-5 md:hidden "
            onClick={toggleHamburger}
          >
            {/* Transform lines into X shape when the hamburger is open */}
            <div
              className={`border w-6 border-black ${
                openHamburger
                  ? "rotate-45 translate-y-1 duration-100"
                  : "rotate-0"
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
          {/* Logo or branding */}
          <div className="text-3xl font-bold text-violet-500 flex items-center  md:col-span-1 md:justify-center">
            FitAIO
          </div>
        </div>
        {/* Navigation links */}
        <ul
          className={` flex bg-white   duration-200 items-center  absolute space-y-6   pt-6 top-full  -translate-x-full h-72  flex-col  w-full   md:static  md:h-auto md:w-auto  md:translate-x-0 md:space-y-4  md:pt-0 md:flex-col md:grow   ${
            openHamburger
              ? "flex translate-x-0 border-t  border-grayPrimary md:border-0 " // If hamburger is open, slide in the menu
              : "opacity-0 md:opacity-100  " // Hide menu on smaller screens if hamburger is closed
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path); // Check once and store the result

            return (
              <Link
                href={item.path}
                className={`${
                  isActive ? activeLinkClasses : passiveLinkClasses
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <li
                  key={item.path}
                  className="w-full flex justify-center items-center space-x-2 md:text-center "
                  onClick={toggleHamburger}
                >
                  {/* Generate links with dynamic styles based on active route */}

                  {item.name}

                  <Image
                    src={isActive ? item.iconActive : item.iconPassive}
                    alt={item.alt}
                    width={16}
                    height={16}
                  />
                </li>
              </Link>
            );
          })}

          {/* Sign Out button */}
          <div className="w-full text-center md:grow md:flex md:items-end ">
            <button
              onClick={signout}
              className=" flex space-x-2  items-center justify-center w-full "
            >
              <span>Sign Out</span>{" "}
              <Image src="/logout.png" alt="Exit Icon" width={16} height={16} />
            </button>
          </div>
        </ul>
      </nav>
      {/* Puts overlay over entire screen so we can change background color/opacity when hamburger menu is opened */}
      <div
        className={`absolute top-0 left-0 w-screen h-screen md:hidden ${
          openHamburger ? "opacity-50 bg-black" : ""
        }`}
      ></div>
    </>
  );
};

export default NavBar;
