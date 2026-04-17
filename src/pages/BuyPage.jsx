import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/search/FilterBar";
import PropertyCard from "../components/property/PropertyCard";
import PropertyDetail from "../components/property/PropertyDetail";
import PropertyMap from "../components/map/PropertyMap";
import { usePropertyFilters } from "../hooks/usePropertyFilters";
import { FOR_SALE } from "../data/properties";
import {
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineMenu,
  HiOutlineViewGrid,
} from "react-icons/hi";

export default function BuyPage() {
  const [searchParams] = useSearchParams();
  const { filters, updateFilter, filtered } = usePropertyFilters(FOR_SALE);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [view, setView] = useState("split");

  // Sync URL query param → search filter
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
      {/* Header */}
      <div className="bg-white border-b border-[#e0e0e0] shrink-0">
        <div className="flex items-center justify-between px-4 pt-3 flex-wrap gap-2">
          <h1 className="text-base md:text-lg font-bold text-[#1a1a1a]">
            Homes for Sale ·{" "}
            <span className="text-[#006aff]">{filtered.length} results</span>
          </h1>
          <div className="flex gap-1">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${view === v.id ? "bg-[#006aff] text-white" : "border border-[#e0e0e0] text-[#555] hover:bg-[#f7f7f7]"}`}
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
          <div className={`flex-1 overflow-y-auto bg-[#f7f7f7] p-3`}>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
                <HiOutlineHome size={40} className="text-[#ccc]" />
                <p className="font-semibold text-[#555]">
                  No homes match your filters
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
