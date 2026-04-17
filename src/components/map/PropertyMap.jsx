import { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";
import StatusBadge from "../ui/StatusBadge";
import { HiLocationMarker } from "react-icons/hi";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const LIBRARIES = ["places"];

const MAP_OPTIONS = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: true,
  fullscreenControl: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

const CENTER_DEFAULT = { lat: 33.55, lng: -111.93 };

// Color by status
function markerColor(status) {
  if (status === "For Rent") return "#1565c0";
  if (status === "Sold") return "#555555";
  return "#006aff"; // For Sale
}

function PriceMarker({ property, isSelected, onClick }) {
  const color = markerColor(property.status);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer select-none"
      style={{ transform: "translate(-50%, -100%)" }}
    >
      <div
        className="relative flex items-center justify-center px-2 py-1 rounded-md text-white text-xs font-bold shadow-lg transition-transform hover:scale-110"
        style={{
          background: color,
          outline: isSelected ? "2px solid white" : "none",
          boxShadow: isSelected
            ? `0 0 0 3px ${color}`
            : "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: `6px solid ${color}`,
          }}
        />
      </div>
    </div>
  );
}

export default function PropertyMap({ properties, onPropertyClick }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [map, setMap] = useState(null);

  const onLoad = useCallback((m) => setMap(m), []);
  const onUnmount = useCallback(() => setMap(null), []);

  if (loadError)
    return (
      <div className="flex items-center justify-center h-full bg-[#f7f7f7] flex-col gap-2 text-[#888]">
        <HiLocationMarker size={48} />
        <p className="text-sm text-center px-4">
          Mapa no disponible — configura tu API Key de Google Maps en{" "}
          <code>.env</code>
        </p>
      </div>
    );

  if (!isLoaded)
    return (
      <div className="flex items-center justify-center h-full bg-[#f7f7f7]">
        <div className="w-10 h-10 border-4 border-[#006aff] border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="w-full h-full min-h-0 relative">
      {/* Legend */}
      <div className="absolute bottom-8 left-2 z-10 bg-white rounded-lg shadow-md p-2 flex flex-col gap-1 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#006aff] inline-block" /> For
          Sale
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#1565c0] inline-block" /> For
          Rent
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#555] inline-block" /> Sold
        </div>
      </div>

      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={CENTER_DEFAULT}
        zoom={12}
        options={MAP_OPTIONS}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {properties.map((p) => (
          <OverlayView
            key={p.id}
            position={{ lat: p.lat, lng: p.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <PriceMarker
              property={p}
              isSelected={selectedMarker?.id === p.id}
              onClick={() => setSelectedMarker(p)}
            />
          </OverlayView>
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
            options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
          >
            <div
              className="w-56 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => {
                onPropertyClick(selectedMarker);
                setSelectedMarker(null);
              }}
            >
              <img
                src={selectedMarker.images[0]}
                alt={selectedMarker.fullAddress}
                className="w-full h-32 object-cover rounded-t-md"
              />
              <div className="p-2 bg-white rounded-b-md">
                <StatusBadge status={selectedMarker.status} />
                <p className="font-bold text-sm mt-1">
                  {selectedMarker.priceLabel}
                </p>
                <p className="text-xs text-[#555]">
                  {selectedMarker.beds} bds · {selectedMarker.baths} ba ·{" "}
                  {selectedMarker.sqftLabel} sqft
                </p>
                <p className="text-xs text-[#888] truncate mt-0.5">
                  {selectedMarker.fullAddress}
                </p>
                <p className="text-xs text-[#006aff] font-medium mt-1">
                  Click to see details →
                </p>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
