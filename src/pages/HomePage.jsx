import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import PropertyCarousel from "../components/property/PropertyCarousel";
import PropertyDetail from "../components/property/PropertyDetail";
import { FOR_SALE, FOR_RENT } from "../data/properties";

const ACTION_CARDS = [
  {
    img: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp",
    title: "Buy a Home",
    desc: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.",
    cta: "Browse homes",
    to: "/buy",
  },
  {
    img: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp",
    title: "Rent a Home",
    desc: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
    cta: "Find rentals",
    to: "/rent",
  },
  {
    img: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp",
    title: "Sell a Home",
    desc: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
    cta: "See your options",
    to: "/sell",
  },
];

const STATS = [
  { label: "Median Sale Price", value: "$415,200", change: "+4.2%", up: true },
  { label: "Homes For Sale", value: "1.2M", change: "-8.1%", up: false },
  {
    label: "Median Days on Market",
    value: "24 days",
    change: "+3 days",
    up: false,
  },
  { label: "Mortgage Rate (30yr)", value: "6.82%", change: "-0.12%", up: true },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSearch = (val) => {
    const q = val.trim();
    if (!q) return;
    const lower = q.toLowerCase();
    if (lower.includes("rent") || lower.includes("apartment")) {
      navigate(`/rent?q=${encodeURIComponent(q)}`);
    } else {
      navigate(`/buy?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden">
        <img
          src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/07/image2-xl%401x.jpg"
          alt="Real estate"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 flex flex-col items-start justify-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-start drop-shadow-lg mb-6 max-w-lg">
            Rentals. Homes. Agents. Loans.
          </h1>
          <div className="w-full max-w-lg">
            <SearchBar
              large
              value={search}
              onChange={setSearch}
              onSearch={handleSearch}
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
            <p className="text-white/70 text-xs text-center mt-2">
              Press Enter to search
            </p>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {ACTION_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl overflow-hidden border border-[#e0e0e0] hover:shadow-lg transition-shadow sm:flex lg:block grid place-items-center"
            >
              <div className="aspect-[5/2] md:aspect-[4/3] max-w-[250px] overflow-hidden ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#888] mb-4 leading-relaxed">
                  {card.desc}
                </p>
                <button
                  onClick={() => navigate(card.to)}
                  className="w-full py-2.5 sm:px-10 sm:w-auto lg:w-full bg-[#006aff] text-white text-sm font-semibold rounded-lg hover:bg-[#0051cc] transition-colors"
                >
                  {card.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carousels */}
      <div className="bg-[#f7f7f7] py-4">
        <PropertyCarousel
          title="Homes For You in Paradise Valley, AZ"
          subtitle="Based on homes you recently viewed"
          properties={FOR_SALE}
          onPropertyClick={setSelectedProperty}
        />
        <div className="border-t border-[#e0e0e0] mx-8" />
        <PropertyCarousel
          title="Trending Rentals in Scottsdale, AZ"
          subtitle="Viewed and saved the most in the area over the past 24 hours"
          properties={FOR_RENT}
          onPropertyClick={setSelectedProperty}
        />
        <div className="border-t border-[#e0e0e0] mx-8" />
        <PropertyCarousel
          title="Recently Sold Near You"
          subtitle="See what homes are selling for in your area"
          properties={[...FOR_SALE].reverse()}
          onPropertyClick={setSelectedProperty}
        />
      </div>

      {/* Market Stats */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            US Housing Market Stats
          </h2>
          <p className="text-sm text-[#888] mb-8">Updated April 2026</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-[#f7f7f7] rounded-2xl p-5">
                <p className="text-2xl font-bold text-[#1a1a1a]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#888] mt-1">{stat.label}</p>
                <span
                  className={`text-xs font-semibold mt-1 inline-block ${stat.up ? "text-[#1a7c3e]" : "text-[#c23b22]"}`}
                >
                  {stat.change} YoY
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
