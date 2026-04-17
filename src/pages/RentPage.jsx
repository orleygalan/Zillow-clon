import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/search/FilterBar";
import PropertyCard from "../components/property/PropertyCard";
import PropertyDetail from "../components/property/PropertyDetail";
import PropertyMap from "../components/map/PropertyMap";
import { usePropertyFilters } from "../hooks/usePropertyFilters";
import { FOR_RENT } from "../data/properties";
import { HiOutlineHome, HiOutlineMap, HiOutlineMenu, HiOutlineViewGrid } from "react-icons/hi";

const FEATURES = [
  "Apply online",
  "Pay rent online",
  "Build your credit",
  "Renters insurance",
];

export default function RentPage() {
  const [searchParams] = useSearchParams();
  const { filters, updateFilter, filtered } = usePropertyFilters(FOR_RENT);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [view, setView] = useState("split");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) updateFilter("search", q);
  }, [searchParams]);

  const VIEWS = [
    { id: "list", icon: <HiOutlineMenu size={16} />, label: "List" },
    { id: "split", icon: <HiOutlineViewGrid size={16} />, label: "Map & List" },
    { id: "map", icon: <HiOutlineMap size={16} />, label: "Map" },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Rent Banner */}
      <div className="bg-[#006aff] text-white px-6 py-4 shrink-0">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1">
            Find Your Next Rental Home
          </h1>
          <p className="text-sm text-blue-100 mb-3">
            Apartments, houses, condos and more in Scottsdale & Phoenix, AZ
          </p>
          <div className="flex flex-wrap gap-3">
            {FEATURES.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1 text-xs bg-white/20 rounded-full px-3 py-1"
              >
                <span className="text-green-300 font-bold">✓</span> {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-[#e0e0e0] shrink-0">
        <div className="flex items-center justify-between px-4 pt-3 flex-wrap gap-2">
          <h2 className="text-base md:text-lg font-bold text-[#1a1a1a]">
            Rental Homes ·{" "}
            <span className="text-[#1565c0]">{filtered.length} results</span>
          </h2>
          <div className="flex gap-1">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${view === v.id ? "bg-[#1565c0] text-white" : "border border-[#e0e0e0] text-[#555] hover:bg-[#f7f7f7]"}`}
              >
                {v.icon}
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <FilterBar
          filters={filters}
          updateFilter={updateFilter}
          total={filtered.length}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {(view === "map" || view === "split") && (
          <div
            className={`${view === "map" ? "flex-1" : "w-1/2 lg:w-3/5"} h-full shrink-0`}
          >
            <PropertyMap
              properties={filtered}
              onPropertyClick={setSelectedProperty}
            />
          </div>
        )}
        {(view === "list" || view === "split") && (
          <div className="flex-1 overflow-y-auto bg-[#f7f7f7] p-3">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
                <HiOutlineHome className="w-12 h-12 text-gray-400" />
                <p className="font-semibold text-[#555]">
                  No rentals match your filters
                </p>
                <p className="text-sm text-[#888]">
                  Try adjusting or clearing your filters.
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-3 ${view === "list" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 xl:grid-cols-2"}`}
              >
                {filtered.map((p) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    onClick={setSelectedProperty}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
