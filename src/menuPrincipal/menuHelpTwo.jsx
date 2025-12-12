import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuHelpTwo() {
  const linkTwo = [
    { name: "Abvertise", href: "/abvertise" },
    { name: "Help", href: "/help" },
  ];

  const [loroPopUp, setLoroPopUp] = useState(false);

  const handleMostrarPopLoro = () => setLoroPopUp(!loroPopUp);
  const handleOcultrarPopLoro = () => setLoroPopUp(false);

  return (
    <div className="lg:flex lg:items-center lg:gap-4 relative ml-4 hidden">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 items-center">
        {linkTwo.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="text-gray-700 hover:text-black font-medium transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* MOBILE LINKS */}
      <div className="lg:hidden w-full">
        {linkTwo.map((item, index) => (
          <div key={index} className="py-2 border-t border-gray-200">
            <Link to={item.href} className="text-gray-900 font-semibold">
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      {/* LORO ICON */}
      <div className=" w-10 h-10 rounded-full">
        <img
          onClick={handleMostrarPopLoro}
          src="https://1.bp.blogspot.com/-UjthXyvxAEo/ThUCg2Va64I/AAAAAAAABd4/y7oo5oIkFdU/s320/Wildlife003H.jpg"
          alt="loro"
          className="w-full h-full rounded-full object-cover cursor-pointer border border-gray-300 hover:brightness-110 transition"
        />

        {/* POPUP LORO */}
        {loroPopUp && (
          <div
            onMouseLeave={handleOcultrarPopLoro}
            className="
              absolute right-0 mt-3 w-48 bg-white shadow-xl border 
              rounded-xl p-3 flex flex-col gap-1 z-50 transition-all
            "
          >
            <ul className="flex flex-col gap-2">
              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Saved homes
              </button>

              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Saved search
              </button>

              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Recently viewed
              </button>

              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Your team
              </button>

              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Your home
              </button>

              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Renter hub
              </button>

              <button className="text-left hover:bg-gray-100 px-3 py-2 rounded-md transition">
                Account settings
              </button>

              <hr className="my-2" />

              <button className="text-left text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition">
                Sign out
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
