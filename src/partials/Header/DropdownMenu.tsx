import Link from "next/link";

export const DropdownMenu = () => {
  return (
    <div className="absolute left-0 top-full mt-3 w-44 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <Link href="#" className="block px-4 py-2 text-xs hover:bg-gray-100">
        Latest News
      </Link>
      <Link href="#" className="block px-4 py-2 text-xs hover:bg-gray-100">
        Trending
      </Link>
      <Link href="#" className="block px-4 py-2 text-xs hover:bg-gray-100">
        Editor&apos;s Pick
      </Link>
    </div>
  );
};
