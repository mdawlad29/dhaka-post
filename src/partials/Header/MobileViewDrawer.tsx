import Link from "next/link";
import { menu } from ".";
import { HiX } from "react-icons/hi";

export const MobileViewDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-14 px-4 flex items-center justify-between border-b">
          <span className="font-bold tracking-widest text-sm">MENU</span>
          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* ✅ Scrollable Menu Area */}
        <nav className="px-4 py-4 text-sm font-semibold uppercase overflow-y-auto h-[calc(100vh-3.5rem)] space-y-4">
          {menu.map((item) => (
            <Link
              key={item.id}
              href="#"
              onClick={() => setOpen(false)}
              className="block pb-2 border-b border-gray-200 last-of-type:border-0"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
