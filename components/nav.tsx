"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Guide",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
  {
    name: "Authors",
    link: "/",
  },
  {
    name: "Tag",
    link: "/",
  },
];

const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
    return (
      <MoonIcon
        className="w-5 text-gray-900"
        role="button"
        onClick={() => setTheme("dark")}
      />
    );
  };

  const currentTheme = () => {
    if (!mounted) return null;
    const current = theme === "system" ? systemTheme : theme;
    return current;
  };

  return (
    <header className="flex items-center px-5 py-5 mb-20 sm:px-8">
      <Link href="/" className="block w-auto max-h-[26px]">
        <Image
          src={
            currentTheme() === "dark"
              ? "/assets/logo-dark.svg"
              : "/assets/logo.svg"
          }
          alt="bbloog logo"
          width={120}
          height={81}
        />
      </Link>
      <div className="flex gap-1 ml-auto">
        <nav>
          <ul className="flex gap-5 mr-1 heading-color lg:flex">
            {links?.map(({ name, link }) => (
              <li
                className="block p-2 text-base font-medium capitalize cursor-pointer"
                key={name}
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Nav;
