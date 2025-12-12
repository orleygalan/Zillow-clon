import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import * as Data from "../GoogleMaps/bienes_Raices.json";
import { useState } from "react";
import CardHomePrincipal from "../componentes/cardHomePrin";
import PopUpInforHome from "../componentes/pop-upInforHome";
import MenuPrincipal from "../menuPrincipal/menu";

const googleMapsApiKey = "AIzaSyAKM8zrLucC9kAtMVv8Gv1vkyAgDfa-MoY";
const libraries = ["places"];

export default function Abvertise() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [heart, setHeart] = useState(
    Array(Data.bienes_por_vender.length).fill(false)
  );
  const [activePopUp, setActivePopUp] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries,
  });

  const totalItems = Data.bienes_por_vender.slice(0, 7).length;
  const visibleItems = 1; // Cambia si muestras más de 1 por pantalla

  const maxScroll = totalItems - visibleItems;

  const handleNext = () => {
    setScrollPosition((prev) => {
      if (prev >= maxScroll) return prev; 
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setScrollPosition((prev) => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
  };

  const handleToggleHeart = (index) => {
    setHeart((prevLikedItems) => {
      const updatedLikedItems = [...prevLikedItems];
      updatedLikedItems[index] = !updatedLikedItems[index];
      return updatedLikedItems;
    });
  };

  const handlePopUpInforHome = (index) => {
    setSelectedHouse(Data.bienes_por_vender[index]);
    setActivePopUp(index);
  };

  const [cambiarBurger, setCambiarBurger] = useState(false);
  const [surgirPopBurger, setSurgirPopBurger] = useState(false);

  const [loroPopUp, setLoroPopUp] = useState(false);

  const handleEntradaBurgurMenu = () => {
    setCambiarBurger(true);
    setSurgirPopBurger(true);
  };

  const handleSalidaBurgerMenu = () => {
    setCambiarBurger(false);
    setSurgirPopBurger(false);
  };

  const handleCambiadaBurger = () => {
    setCambiarBurger(!cambiarBurger);
  };

  const handleMostrarPopLoro = () => {
    setLoroPopUp(!loroPopUp);
  };

  const handleOcultrarPopLoro = () => {
    setLoroPopUp(false);
  };

  return isLoaded ? (
    <div className="">
      <div onClick={() => handleCambiadaBurger}>
        {cambiarBurger ? (
          <i
            onClick={handleSalidaBurgerMenu}
            className="fa-solid fa-xmark cerrarBurgerPrincipal"
          ></i>
        ) : (
          <i
            onClick={handleEntradaBurgurMenu}
            className="fa-solid fa-bars menuBurgerPrincipal"
          ></i>
        )}
        {surgirPopBurger && (
          <div className="surgimientoPopBurger">
            <MenuPrincipal />
          </div>
        )}
      </div>
      {/* <div className="contentlogoZillowpantlaPrincipal">
                <img className="logoZillow" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
            </div> */}
      <div className="loroPantallaPrincipal">
        <img
          onClick={() => handleMostrarPopLoro()}
          src="https://1.bp.blogspot.com/-UjthXyvxAEo/ThUCg2Va64I/AAAAAAAABd4/y7oo5oIkFdU/s320/Wildlife003H.jpg"
          alt=""
        />
        {loroPopUp && (
          <div
            onMouseLeave={() => handleOcultrarPopLoro()}
            className="contenedorPopUpLoroPantalaPrincipal"
          >
            <ul>
              <button>Saved homes</button>
              <button>Saved search</button>
              <button>Recently viewed</button>
              <button>Your team</button>
              <button>Your home</button>
              <button>Renter hub</button>
              <button>Account settings</button>
              <hr style={{ marginTop: "13%" }} />
              <button>Sing out</button>
            </ul>
          </div>
        )}
      </div>
      <Autocomplete>
        <div className="w-full h-[60vh] relative flex justify-center items-center ">
          <img
            src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2023/07/1920w_nationalbrand.webp"
            alt=""
            className="w-full h-full object-cover "
          />
          <div className="absolute flex flex-col items-center">
            <h2 className="text-5xl font-bold ">
              Agents. Tours. Loans. Homes.
            </h2>
            <input
              placeholder="Enter an address, neighborhood, city, or Zip code"
              className="border border-white rounded-lg px-6 py-3 bg-white text-gray-800 "
              type="text"
            />
          </div>
        </div>
      </Autocomplete>
      <div className="bg-white p-6">
        <h4 className="text-2xl font-bold text-black">
          Homes For You in Paradise Valley, AZ
        </h4>

        <p className="text-black/80 text-sm mt-1">
          Based on homes you recently viewed
        </p>

        <div className="relative mt-6">
          {/* Botón anterior */}
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full
      backdrop-blur-md transition z-1
      ${
        scrollPosition === 0
          ? "bg-white/10 text-white/40 cursor-not-allowed"
          : "bg-white/20 hover:bg-white/30 text-white"
      }`}
            onClick={handlePrev}
            disabled={scrollPosition === 0}
          >
            ⯇
          </button>

          {/* Botón siguiente */}
          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full
      backdrop-blur-md transition z-1
      ${
        scrollPosition === maxScroll
          ? "bg-white/10 text-white/40 cursor-not-allowed"
          : "bg-white/20 hover:bg-white/30 text-white"
      }`}
            onClick={handleNext}
            disabled={scrollPosition === maxScroll}
          >
            ⯈
          </button>

          {/* Contenedor del carrusel */}
          <div style={{scrollbarWidth: 'none'}} className="overflow-auto px-10 py-7">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${scrollPosition * 103}%)`,
              }}
            >
              {Data.bienes_por_vender.slice(0, 7).map((sacar, index) => (
                <div
                  key={index}
                  className="min-w-[240px] bg-white rounded-lg shadow-md p-3 mr-4 relative"
                >
                  {/* Heart */}
                  <i
                    className={`fa-solid fa-heart absolute top-2 right-2 cursor-pointer 
                ${heart[index] ? "text-red-500" : "text-gray-300"}`}
                    onClick={() => handleToggleHeart(index)}
                  ></i>

                  <div
                    onClick={() => handlePopUpInforHome(index)}
                    className="cursor-pointer"
                  >
                    <img
                      src={sacar.properties.image1}
                      alt=""
                      className="w-full h-40 object-cover rounded-lg"
                    />

                    <b className="block text-lg text-gray-900 mt-2">
                      {sacar.properties.Cost}
                    </b>

                    <p className="text-gray-600 text-sm">
                      {sacar.properties.beds} | {sacar.properties.baths} |{" "}
                      {sacar.properties.Acreslot} - {sacar.properties.sale}
                    </p>

                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                      {sacar.properties.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CardHomePrincipal />
    </div>
  ) : (
    <></>
  );
}
