"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { MobileViewDrawer } from "./MobileViewDrawer";

export const menu = [
  "Home",
  "News",
  "Politics",
  "Business",
  "National",
  "Culture",
  "Opinion",
  "Lifestyle",
  "Sports",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="h-20 flex items-center justify-center">
        <h1 className="text-2xl font-extrabold tracking-widest">
          THE DOWNTOWN
        </h1>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-gray-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <HiMenu className="w-6 h-6" />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-xs font-semibold tracking-wide uppercase">
            {menu.map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:border-b-2 border-black pb-1"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <button>
            <HiOutlineSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ----- Mobile Drawer ----- */}
      <MobileViewDrawer open={open} setOpen={setOpen} />
    </header>
  );
}
