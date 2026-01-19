import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div className="space-y-3">
          <h3 className="font-extrabold tracking-widest md:text-lg">
            THE DOWNTOWN
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We bring you the best Premium WordPress Themes that perfect for
            news, magazine, personal blog, etc.
          </p>
          <a href="#" className="text-xs font-semibold">
            LEARN MORE »
          </a>
        </div>

        {/* Recent News */}
        <div>
          <h4 className="font-bold mb-4 md:text-lg">Recent News</h4>
          <ul className="font-semibold">
            <Link href={""} className="inline-block mb-3">
              Grab tackles Jakarta’s odd-even license plate policy
              <span className="text-xs text-gray-500">July 6, 2018</span>
            </Link>
            <Link href={""} className="inlineblock mb-3">
              Jokowi supporters try to prevent activist
              <span className="text-xs text-gray-500">July 5, 2018</span>
            </Link>
            <Link href={""} className="inline-block mb-3">
              China To Build Indonesia’s Longest Bridge
              <span className="text-xs text-gray-500">July 4, 2018</span>
            </Link>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold mb-4 md:text-lg">Categories</h4>
          <div className="grid grid-cols-2 gap-y-2 font-semibold">
            <Link href={"#"}>Business</Link>
            <Link href={"#"}>Opinion</Link>
            <Link href={"#"}>Culture</Link>
            <Link href={"#"}>Politics</Link>
            <Link href={"#"}>Lifestyle</Link>
            <Link href={"#"}>Sports</Link>
            <Link href={"#"}>National</Link>
            <Link href={"#"}>Travel</Link>
            <Link href={"#"}>News</Link>
            <Link href={"#"}>World</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 md:text-lg">
            Sign Up For Our Newsletter
          </h4>
          <p className="text-gray-600 mb-3">
            Subscribe to our mailing list to receive daily updates.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border px-3 py-2 mb-3 text-sm"
          />
          <button className="w-full bg-black text-white py-2 text-xs font-semibold tracking-widest">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between gap-2">
          <p>© 2018 JNews - City News Magazine WordPress Theme.</p>
          <p>
            JNews is a top selling 2018 WordPress News, Blog & Magazine Theme.
          </p>
        </div>
      </div>
    </footer>
  );
}
