"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { MobileViewDrawer } from "./MobileViewDrawer";
import { DropdownMenu } from "./DropdownMenu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const menu = [
  { id: 1, name: "Home", hasDropdown: true },
  { id: 2, name: "News" },
  { id: 3, name: "Politics" },
  { id: 4, name: "Business" },
  { id: 5, name: "National" },
  { id: 6, name: "Culture" },
  { id: 7, name: "Opinion" },
  { id: 8, name: "Lifestyle" },
  { id: 9, name: "Sports" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-50 bg-white sticky top-0">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center">
        <h1 className="text-2xl font-extrabold tracking-widest">
          THE DOWNTOWN
        </h1>
      </div>

      {/* Nav Bar */}
      <div className="border-t border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto h-14 px-4 flex items-center justify-between">
          <button
            className="cursor-pointer lg:hidden"
            onClick={() => setOpen(true)}
          >
            <HiMenu className="w-6 h-6" />
          </button>
          <div className="lg:block hidden" />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-[15px] font-bold tracking-wide uppercase">
            {menu.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href="#"
                  className="relative pb-1 inline-flex items-center gap-1"
                >
                  {item.name}

                  {item.hasDropdown && (
                    <>
                      <IoIosArrowDown className="transition-opacity duration-200 group-hover:opacity-0" />

                      <IoIosArrowUp className="absolute right-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </>
                  )}

                  {/* underline animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && <DropdownMenu />}
              </div>
            ))}
          </nav>

          {/* Search */}
          <button>
            <HiOutlineSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileViewDrawer open={open} setOpen={setOpen} />
    </header>
  );
}
