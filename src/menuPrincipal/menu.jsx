import { Link } from "react-router-dom";
import MenuAyuda from "./menuAyuda";
import { useState } from "react";

import ListBuy from "../GoogleMaps/listBuy";
import ListRent from "../GoogleMaps/listRen";
import ListSell from "../GoogleMaps/listSell";
import ListLoans from "../GoogleMaps/listLoans";
import ListFinder from "../GoogleMaps/listFinder";
import { FiMenu } from "react-icons/fi";

export default function MenuPrincipal() {
  const linkApertura = [
    { name: "Buy", href: "/buy", content: <ListBuy /> },
    { name: "Rent", href: "/rent", content: <ListRent /> },
    { name: "Sell", href: "/sell", content: <ListSell /> },
    { name: "Home Loans", href: "/homeLoans", content: <ListLoans /> },
    { name: "Agent Finder", href: "/agentFinder", content: <ListFinder /> },
  ];

  const [popupVisible, setPopupVisible] = useState(null); // desktop popup
  const [contenidoVisible, setContenidoVisible] = useState(null); // mobile dropdown

  const mouseDentro = (index) => setPopupVisible(index);
  const mouseFuera = () => setPopupVisible(null);

  const toggleContenido = (index) => {
    setContenidoVisible(contenidoVisible === index ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 w-full md:bg-white bg-white/70 shadow-md z-5">
      <div className="lg:flex lg:items-center lg:justify-between lg:px-6 md:py-3 relative flex items-center">
        {/* LEFT MENU */}
        <nav className="lg:flex md:gap-6 lg:items-center whitespace-nowrap hidden ">
          {linkApertura.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => mouseDentro(index)}
              onMouseLeave={mouseFuera}
            >
              {/* DESKTOP LABEL */}
              <Link
                to={item.href}
                className="hidden lg:block text-gray-700 hover:text-black font-medium transition"
              >
                {item.name}
              </Link>

              {/* DESKTOP POPUP */}
              {popupVisible === index && (
                <div
                  className="
                  absolute top-5 bg-[white]/20 rounded-xl pt-6 
                 border-gray-100 transition-all duration-200
                "
                >
                  {item.content}
                </div>
              )}

              {/* MOBILE DROPDOWN BUTTON */}
              <button
                style={{ background: "transparent" }}
                className="flex md:hidden items-center justify-between w-full py-2 text-left"
                onClick={() => toggleContenido(index)}
              >
                <span className="text-gray-900 font-semibold">{item.name}</span>

                <i
                  className={`fa-solid ${
                    contenidoVisible === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  } transition`}
                ></i>
              </button>

              {/* MOBILE DROPDOWN CONTENT */}
              {contenidoVisible === index && (
                <div className="lg:hidden bg-gray-50 p-3 mb-2 rounded-xl shadow-inner border">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* LOGO */}
        <div className="md:flex md:items-center w-full flex justify-center py-5 md:py-0">
          <img
            src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            alt="logo"
            className="w-24 md:w-28"
          />
        </div>

        {/* MENÚ DE AYUDA / PERFIL */}
        <div className="lg:flex lg:items-center">
          <MenuAyuda />
        </div>
        <div className="absolute left-4 lg:hidden ">
          <FiMenu className="text-black text-2xl" />
        </div>
      </div>

      {/* MOBILE DIVIDER */}
      <div className="md:hidden border-t border-gray-200"></div>
    </header>
  );
}
