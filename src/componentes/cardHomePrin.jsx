import { useState } from "react";
import * as Data from "../GoogleMaps/bienes_Raices.json";
import PopUpInforHome, {
  PopUpInforHomeThree,
  PopUpInforHomeTwo,
} from "./pop-upInforHome";

export default function CardHomePrincipal() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [heart, setHeart] = useState(
    Array(Data.bienes_por_vender.length).fill(false)
  );
  const [selectedHouse, setSelectedHouse] = useState(null);

  //segundo Carrusel

  const [selectedHouse2, setSelectedHouse2] = useState(null);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [heart2, setHeart2] = useState(
    Array(Data.bienes_Renta.length).fill(false)
  );

  const handleNext = () => {
    setScrollPosition((prevPosition) => prevPosition + 1);
  };

  const handlePrev = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleToggleHeart = (index) => {
    setHeart((prevLikedItems) => {
      const updatedLikedItems = [...prevLikedItems];
      updatedLikedItems[index] = !updatedLikedItems[index];
      return updatedLikedItems;
    });
  };

  const handlePopUpInforHome = (index) => {
    setSelectedHouse(Data.bienes_por_vender.slice(7, 14)[index]);
    setSelectedHouse2(Data.bienes_Renta.slice(0, 7)[index]);
  };

  //segundo Carrusel

  const handleNext2 = () => {
    setScrollPosition2((prevPosition) => prevPosition + 1);
  };

  const handlePrev2 = () => {
    setScrollPosition2((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleToggleHeart2 = (index) => {
    setHeart2((prevLikedItems) => {
      const updatedLikedItems = [...prevLikedItems];
      updatedLikedItems[index] = !updatedLikedItems[index];
      return updatedLikedItems;
    });
  };

  const handlePopUpInforHome2 = (index) => {
    setSelectedHouse2(Data.bienes_Renta.slice(0, 7)[index]);
  };

  return (
    <>
      {/* primer Carrusel En CardHome */}
      <div className="bg-white pt-10 pb-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
        {/* CARD */}
        <div className="bg-white text-black px-6 py-9 rounded-xl flex flex-col items-center shadow-2xl">
          <div className="w-full h-40 overflow-hidden rounded-lg">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <b className="mt-4 text-lg">Buy A Home</b>
          <p className="line-clamp-3 text-center mt-2">
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Browse homes
          </button>
        </div>

        {/* CARD */}
        <div className="bg-white text-black px-6 py-9 rounded-xl flex flex-col items-center shadow-2xl">
          <div className="w-full h-40 overflow-hidden rounded-lg">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <b className="mt-4 text-lg">Rent A Home</b>
          <p className="line-clamp-3 text-center mt-2">
            We’re creating a seamless online experience – from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Find rentals
          </button>
        </div>

        {/* CARD */}
        <div className="bg-white text-black px-6 py-9 rounded-xl flex flex-col items-center shadow-2xl">
          <div className="w-full h-40 overflow-hidden rounded-lg">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <b className="mt-4 text-lg">Sell A Home</b>
          <p className="line-clamp-3 text-center mt-2">
            No matter what path you take to sell your home, we can help you
            navigate a successful sale.
          </p>
          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            See your options
          </button>
        </div>
      </div>

      <div className="bg-white px-7 pt-15 py-7">
        <h4 className="text-2xl font-bold text-black">
          Homes For You in Scottsdale, AZ
        </h4>
        <p className="text-black/80 text-sm mt-1">
          Based on homes you recently viewed
        </p>
        <div className="relative flex items-center px-10">
          <button className="absolute z-2 left-0" onClick={handlePrev}>
            <i>⯇</i>
          </button>
          <button className="absolute z-2 right-0" onClick={handleNext}>
            <i>⯈</i>
          </button>
          <div
            style={{ scrollbarWidth: "none" }}
            className="overflow-auto w-full bg-white "
          >
            <div
              className="flex transition-transform duration-500 ease-out py-9 gap-6 "
              style={{
                transform: `translateX(-${scrollPosition * 50}%)`,
              }}
            >
              {Data.bienes_por_vender.slice(7, 14).map((sacar, index) => (
                <div
                  key={index}
                  className="min-w-[240px] relative p-5 shadow-md rounded-2xl bg-white text-black "
                >
                  <i
                    className={`fa-solid fa-heart ${
                      heart[index] ? "heartRed" : "heart"
                    }`}
                    onClick={() => handleToggleHeart(index)}
                  ></i>
                  <div onClick={() => handlePopUpInforHome(index)}>
                    <img src={sacar.properties.image1} alt="" />
                    <b>{sacar.properties.Cost}</b>
                    <p>
                      {sacar.properties.beds} | {sacar.properties.baths} |{" "}
                      {sacar.properties.Acreslot}-{sacar.properties.sale}
                    </p>
                    <p>{sacar.properties.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Segundo Carrusel En CardHome */}

      <div className="w-full px-10 bg-white pt-10">
        <h4 className="text-2xl font-semibold text-gray-900">
          Trending Homes in Paradise Valley, AZ
        </h4>

        <p className="text-gray-600 text-sm">
          Viewed and saved the most in the area over the past 24 hours
        </p>

        <div className="relative w-full overflow-hidden mt-5">
          {/* Botón anterior */}
          <button
            onClick={handlePrev2}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-2 
                 bg-white shadow-md rounded-full p-2 hover:scale-110 
                 transition border"
          >
            ⯇
          </button>

          {/* Botón siguiente */}
          <button
            onClick={handleNext2}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-2 
                 bg-white shadow-md rounded-full p-2 hover:scale-110 
                 transition border"
          >
            ⯈
          </button>

          {/* Contenedor scroll */}
          <div
            className="flex transition-transform duration-500 py-5"
            style={{ transform: `translateX(-${scrollPosition2 * 103}%)` }}
          >
            {Data.bienes_Renta.slice(0, 7).map((sacar, index) => (
              <div
                key={index}
                className="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-md 
                     p-3 mx-2 cursor-pointer hover:shadow-lg transition "
              >
                {/* Icono del corazón */}
                <i
                  onClick={() => handleToggleHeart2(index)}
                  className={`fa-solid fa-heart text-xl cursor-pointer 
              ${heart2[index] ? "text-red-500" : "text-gray-400"}`}
                ></i>

                {/* Contenido */}
                <div onClick={() => handlePopUpInforHome2(index)}>
                  <img
                    src={sacar.properties.image1}
                    alt=""
                    className="w-full h-40 object-cover rounded-lg mt-2"
                  />

                  <b className="text-lg block mt-2">{sacar.properties.Cost}</b>

                  <p className="text-sm text-gray-600">
                    {sacar.properties.beds} | {sacar.properties.baths} |{" "}
                    {sacar.properties.Acreslot}-{sacar.properties.sale}
                  </p>

                  <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                    {sacar.properties.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center pt-10 ">
        <hr className="border-gray-300 mt-10 " />

        <div className="w-full gap-6 text-gray-600 text-sm mt-6 px-4 md:px-0 mb-10 ">
          <p className="leading-6">
            About • Zestimates • Research • Careers • U.S. Privacy Notice •
            Mexico Privacy Notice • Help • Advertise • Fair Housing Guide •
            Advocacy • Terms of Use
          </p>

          <p className="leading-6">
            Privacy Portal • Cookie Preference • Learn • AI • Mobile Apps
          </p>

          <p className="leading-6">
            Trulia • StreetEasy • HotPads • Out East • ShowingTime+
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="textFinal max-w-4xl mx-auto text-gray-500 text-xs leading-6 mt-6 px-4 md:px-0">
          <p>
            For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
            REALTOR® logo are controlled by The Canadian Real Estate Association
            (CREA) and identify real estate professionals who are members of
            CREA. The trademarks MLS®, Multiple Listing Service® and the
            associated logos are owned by CREA and identify the quality of
            services provided by real estate professionals who are members of
            CREA. Used under license.
          </p>
        </div>

        {/* Iconos de tiendas */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <img
            src="https://s.zillowstatic.com/pfs/static/app-store-badge.svg"
            alt="App Store"
            className="w-32 cursor-pointer hover:scale-105 transition"
          />
          <img
            src="https://s.zillowstatic.com/pfs/static/google-play-badge.svg"
            alt="Google Play"
            className="w-32 cursor-pointer hover:scale-105 transition"
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-6">
          <img
            src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            alt="Zillow Logo"
            className="w-16 opacity-80"
          />
        </div>

        {/* Imagen final */}
        <div className="w-full mt-6">
          <img
            src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
            alt="Footer Art"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
