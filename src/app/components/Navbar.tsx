"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Maps",
    route: "/maps",
  },
  {
    name: "Explore",
    route: "/explore",
  },
  {
    name: "Review",
    route: "/review",
  },
  {
    name: "About Us",
    route: "/about",
  },
];

const Navbar = () => {
  const [toggleDropMenu, settoggleDropMenu] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      settoggleDropMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="z-[1000] sticky top-0 shadow-2xl">
      <div className="flex w-full px-5 py-2 justify-between bg-gray-100">
        <Link
          href={"/"}
          className="flex items-center"
          onClick={() => {
            settoggleDropMenu(false);
          }}
        >
          <img
            src={"/binBuddyIcon.svg"}
            alt="Bin Buddy Icon"
            className="w-5 md:w-10"
          />
          <h1 className="text-green-700 font-bold italic text-xl md:text-4xl">
            Bin Buddy
          </h1>
        </Link>
        <div className="my-auto ">
          <nav className="text-gray-900 font-semibold text-md gap-10 hidden md:flex">
            {routes.map((route) => (
              <Link key={route.name} href={route.route} className="relative">
                {route.name}
                <div
                  className={`rounded-sm absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 ${
                    pathname == route.route
                      ? "transform scale-x-100 bg-black"
                      : "transform scale-x-0"
                  }`}
                ></div>
              </Link>
            ))}
          </nav>
          <div>
            <button
              className="block md:hidden hover:cursor-pointer"
              onClick={() => {
                settoggleDropMenu(!toggleDropMenu);
              }}
            >
              <IoMenuOutline className="text-black text-2xl " />
            </button>
          </div>
        </div>
      </div>
      <nav
        ref={menuRef}
        className={`${
          toggleDropMenu ? "max-h-60" : "max-h-0"
        } transition-max-height duration-500 overflow-hidden flex flex-col items-center bg-gray-100 text-black md:hidden`}
      >
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.route}
            className="py-2 hover:bg-gray-200 w-full text-center"
            onClick={() => {
              settoggleDropMenu(false);
            }}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
