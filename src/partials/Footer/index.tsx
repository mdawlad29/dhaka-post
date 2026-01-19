export default function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div className="space-y-3">
          <h3 className="font-extrabold tracking-widest text-lg">
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
          <h4 className="font-bold mb-4">Recent News</h4>
          <ul className="space-y-3 text-gray-700">
            <li>
              Grab tackles Jakarta’s odd-even license plate policy
              <span className="block text-xs text-gray-500">July 6, 2018</span>
            </li>
            <li>
              Jokowi supporters try to prevent activist
              <span className="block text-xs text-gray-500">July 5, 2018</span>
            </li>
            <li>
              China To Build Indonesia’s Longest Bridge
              <span className="block text-xs text-gray-500">July 4, 2018</span>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold mb-4">Categories</h4>
          <div className="grid grid-cols-2 gap-y-2 text-gray-700">
            <span>Business</span>
            <span>Opinion</span>
            <span>Culture</span>
            <span>Politics</span>
            <span>Lifestyle</span>
            <span>Sports</span>
            <span>National</span>
            <span>Travel</span>
            <span>News</span>
            <span>World</span>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4">Sign Up For Our Newsletter</h4>
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
