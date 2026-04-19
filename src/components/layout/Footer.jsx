import { Link } from "react-router-dom";
import { FOOTER_COLS } from "../../data/footerCols.js";

const MID_LINKS = [
  "About",
  "Zestimates",
  "Research",
  "Careers",
  "Help",
  "Advertise",
  "Fair Housing Guide",
  "Terms of Use",
  "Privacy Notice",
  "Cookie Preference",
  "Mobile Apps",
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-gray-200 mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-10 pb-6">
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className="text-[13px] font-bold text-gray-900 mb-2">
                {col.heading}
              </p>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-[13px] text-gray-500 py-1 hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap">
          {[
            "About",
            "Zestimates",
            "Research",
            "Careers",
            "Help",
            "Advertise",
            "Fair Housing Guide",
            "Terms of Use",
            "Privacy Notice",
            "Cookie Preference",
            "Mobile Apps",
          ].map((item, i, arr) => (
            <a
              key={item}
              href="#"
              className={`text-[12px] text-gray-400 px-3 py-1 
              ${i !== arr.length - 1 ? "border-r border-gray-200" : ""} 
              hover:text-blue-600`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4 ">
          <Link to="/">
            <img
              src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
              alt="Zillow"
              className="h-[22px]"
            />
          </Link>

          <div className="flex gap-2">
            <img
              src="https://s.zillowstatic.com/pfs/static/app-store-badge.svg"
              alt="App Store"
              className="h-7 cursor-pointer"
            />
            <img
              src="https://s.zillowstatic.com/pfs/static/google-play-badge.svg"
              alt="Google Play"
              className="h-7 cursor-pointer"
            />
          </div>
        </div>

        <p className="text-[12px] text-gray-400 leading-relaxed">
          © Zillow, Inc., 2006-2025. Use is subject to Terms of Use.
          <br />
          <span>Trulia · StreetEasy · HotPads · Out East · ShowingTime+</span>
        </p>
      </div>

      {/* legal */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <p className="text-[11px] text-gray-400 leading-relaxed">
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          Used under license.
        </p>
      </div>

      <img
        src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
        alt=""
        className="w-full block"
      />
    </footer>
  );
}
