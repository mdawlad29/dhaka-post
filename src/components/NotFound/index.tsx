import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 404 Code */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-4 animate-pulse">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mb-6 text-center max-w-md">
        The page you are looking for does not exist or has been moved. Please
        check the URL or return to the homepage.
      </p>

      {/* Return Home Button */}
      <Link
        href="/"
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300"
      >
        <HiOutlineArrowLeft className="w-5 h-5" />
        Go Back Home
      </Link>
    </div>
  );
};
