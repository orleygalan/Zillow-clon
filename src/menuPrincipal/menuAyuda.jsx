import { Link } from "react-router-dom";
import { useState } from "react";
import MenuHelpTwo from "./menuHelpTwo";
import ListManage from "../GoogleMaps/listManage";

export default function MenuAyuda() {
  const linkAyuda = [
    {
      name: "Manage Rentals",
      href: "/manageRentals",
      content: <ListManage />,
    },
  ];

  const [hoverAyuda, setHoverAyuda] = useState(null); // Desktop popup
  const [mobileOpen, setMobileOpen] = useState(null); // Mobile dropdown

  const mouseDentro = (index) => setHoverAyuda(index);
  const mouseFuera = () => setHoverAyuda(null);

  const toggleMobile = (index) =>
    setMobileOpen(mobileOpen === index ? null : index);

  return (
    <div className="relative flex items-center gap-3">
      {linkAyuda.map((item, index) => (
        <div key={index} className="relative group whitespace-nowrap">
          {/* DESKTOP HOVER */}
          <div
            className="hidden lg:flex items-center cursor-pointer"
            onMouseEnter={() => mouseDentro(index)}
            onMouseLeave={mouseFuera}
          >
            <Link
              to={item.href}
              className="text-gray-700 hover:text-black font-medium transition"
            >
              {item.name}
            </Link>

            {hoverAyuda === index && (
              <div
                className="
                 absolute top-5 bg-[white]/20 rounded-xl pt-6 
                 border-gray-100 transition-all duration-200
              "
              >
                {item.content}
              </div>
            )}
          </div>

          {/* MOBILE DROPDOWN */}
          <div className="lg:hidden w-full whitespace-nowrap hidden">
            <button
              style={{ background: "transparent" }}
              className="flex items-center justify-between w-full py-2 px-1"
              onClick={() => toggleMobile(index)}
            >
              <span className="text-gray-900 font-semibold">{item.name}</span>

              <i
                className={`fa-solid ${
                  mobileOpen === index ? "fa-chevron-up" : "fa-chevron-down"
                } transition`}
              ></i>
            </button>

            {mobileOpen === index && (
              <div className="bg-gray-50 p-3 mt-1 rounded-xl shadow-inner border">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* SEGUNDO MENÚ (tu mini menú extra) */}
      <MenuHelpTwo />
    </div>
  );
}
