"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Routine", path: "/client/routines" },
    { name: "Programs", path: "/client/programs" },
    { name: "Find a Coach", path: "/client/find-a-coach" },
    { name: "Be a Coach", path: "/client/be-a-coach" },
  ];

  const activeLinkClasses = "text-black font-bold";
  const passiveLinkClasses = "text-white font-normal";

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
      </ul>
    </nav>
  );
};

export default NavBar;
