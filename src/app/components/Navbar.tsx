"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

const routes = [
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
  return (
    <>
      <header className="flex w-full px-5 py-2 justify-between bg-gray-100 sticky top-0 z-50">
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
              <Link key={route.name} href={route.route}>
                {route.name}
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
      </header>
      <nav
        className={`${
          toggleDropMenu ? "max-h-40" : "max-h-0"
        } transition-max-height duration-500 overflow-hidden flex flex-col items-center bg-gray-100 text-black md:hidden`}
      >
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.route}
            className="py-2"
            onClick={() => {
              settoggleDropMenu(false);
            }}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
