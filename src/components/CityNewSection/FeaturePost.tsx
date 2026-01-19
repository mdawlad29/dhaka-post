import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";

const FeaturedPost = () => {
  const date = new Date().toDateString();

  return (
    <article className="bg-white shadow-md">
      {/* Image wrapper */}
      <div className="relative">
        <Image
          src="/assets/images/image-10.jpg"
          alt="featured"
          width={500}
          height={500}
          className="w-full h-64 object-cover"
        />

        {/* Content overlay */}
        <div className="absolute left-4 right-4 -bottom-42 bg-white px-4 py-3 z-10">
          <Link
            href={"#"}
            className="text-[10px] uppercase tracking-wide text-gray-500 hover:text-gray-900"
          >
            Politics
          </Link>

          <Link
            href={"#"}
            className="mt-2 inline-block md:text-3xl text-xl font-bold leading-7"
          >
            “Election was rigged” says opposition, police confirm three dead
          </Link>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-400 leading-5">by</span>
            <span className="text-xs font-semibold leading-5 uppercase">
              JOHN DOE
            </span>
            <span className="text-xs text-gray-400 leading-5 flex items-center gap-1">
              <CiClock2 />
              {date}
            </span>
          </div>

          <p className="mt-3 text-sm leading-5 text-gray-600">
            When we get out of the glass bottle of our ego and when we escape
            like the squirrels in the...
          </p>

          <Link
            href="#"
            className="mt-4 inline-block border border-gray-300 bg-transparent hover:bg-black transition-all duration-500 ease-in-out text-gray-600 hover:text-white py-1 px-4 shadow text-sm"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Spacer for overlap */}
      <div className="h-42"></div>
    </article>
  );
};

export default FeaturedPost;
