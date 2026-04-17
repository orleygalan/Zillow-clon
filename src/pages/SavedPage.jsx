import { useSavedHomes } from "../context/SavedHomesContext";
import { useState } from "react";
import PropertyCard from "../components/property/PropertyCard";
import PropertyDetail from "../components/property/PropertyDetail";
import { ALL_PROPERTIES } from "../data/properties";
import { HiOutlineHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function SavedPage() {
  const { saved } = useSavedHomes();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  const savedProperties = ALL_PROPERTIES.filter((p) => saved.includes(p.id));

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center gap-2 mb-6">
          <HiOutlineHeart size={24} className="text-[#c23b22]" />
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Saved Homes</h1>
          <span className="text-sm text-[#888] ml-1">
            ({savedProperties.length})
          </span>
        </div>

        {savedProperties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <HiOutlineHeart size={64} className="text-[#e0e0e0] mb-4" />
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              No saved homes yet
            </h2>
            <p className="text-[#888] mb-6 max-w-sm">
              Tap the heart icon on any listing to save it here for easy access
              later.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/buy")}
                className="px-5 py-2.5 bg-[#006aff] text-white font-medium text-sm rounded-lg hover:bg-[#0051cc] transition-colors"
              >
                Browse homes for sale
              </button>
              <button
                onClick={() => navigate("/rent")}
                className="px-5 py-2.5 border border-[#006aff] text-[#006aff] font-medium text-sm rounded-lg hover:bg-[#e8f0ff] transition-colors"
              >
                Find rentals
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {savedProperties.map((p) => (
              <PropertyCard
                key={p.id}
                property={p}
                onClick={setSelectedProperty}
              />
            ))}
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
