"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Popover } from "@headlessui/react";

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
          className="w-5 ml-5 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
    return (
      <MoonIcon
        className="w-5 ml-5 text-gray-900"
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
    <header className="py-10 mb-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center w-full lg:gap-x-12">
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
            <div className="hidden ml-auto lg:flex lg:gap-x-6">
              {links?.map(({ name, link }) => (
                <Link
                  href={link}
                  className="block p-2 text-base font-medium capitalize cursor-pointer"
                  key={name}
                >
                  {name}
                </Link>
              ))}
              <Link
                href="https://themeptation.gumroad.com/l/bbloog?option=a9kQcLJ6ts_CBJlbTJGKow%3D%3D&_gl=1*1pzzdjy*_ga*OTg5MTQzMjAyLjE2NzQzOTgxODg.*_ga_6LJN6D94N6*MTY3NDQwMjYxNC4xMjYuMS4xNjc0NDAyNzMwLjAuMC4w"
                className="btn btn-xs"
              >
                Get premium version
              </Link>
              {renderThemeChanger()}
            </div>
          </div>
          <div className="flex items-center gap-x-5 lg:gap-x-8 lg:hidden">
            {renderThemeChanger()}
            <div className="-mr-1">
              <Popover>
                <Popover.Button className="relative z-10 flex items-center justify-center w-8 h-8 focus:outline-none">
                  {({ open }) => (
                    <>
                      {open ? (
                        <XMarkIcon className="overflow-visible h-7 w-7 stroke-slate-700" />
                      ) : (
                        <Bars3Icon className="overflow-visible h-7 w-7 stroke-slate-700" />
                      )}
                    </>
                  )}
                </Popover.Button>
                <div>
                  <Popover.Overlay className="fixed inset-0 opacity-100 bg-slate-300/50" />
                  <Popover.Panel className="absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top scale-100 bg-white shadow-xl opacity-100 top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5">
                    {links?.map(({ name, link }) => (
                      <Link href={link} className="block w-full p-2" key={name}>
                        {name}
                      </Link>
                    ))}
                    <Link
                      href="https://themeptation.gumroad.com/l/bbloog?option=a9kQcLJ6ts_CBJlbTJGKow%3D%3D&_gl=1*1pzzdjy*_ga*OTg5MTQzMjAyLjE2NzQzOTgxODg.*_ga_6LJN6D94N6*MTY3NDQwMjYxNC4xMjYuMS4xNjc0NDAyNzMwLjAuMC4w"
                      className="btn"
                    >
                      Get premium version
                    </Link>
                  </Popover.Panel>
                </div>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
