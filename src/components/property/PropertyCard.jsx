import StatusBadge from "../ui/StatusBadge";
import HeartButton from "../ui/HeartButton";
import { useSavedHomes } from "../../context/SavedHomesContext";
import { daysLabel } from "../../utils/helpers";

export default function PropertyCard({ property, onClick }) {
  const { isSaved, toggle } = useSavedHomes();
  const saved = isSaved(property.id);

  return (
    <article
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e0e0e0] cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
      onClick={() => onClick(property)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(property)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.fullAddress}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <StatusBadge status={property.status} />
          {property.daysOnZillow !== undefined &&
            property.status !== "Sold" && (
              <span className="bg-white/90 text-[#555] text-xs px-2 py-0.5 rounded font-medium">
                {daysLabel(property.daysOnZillow)}
              </span>
            )}
        </div>
        <div className="absolute top-2 right-2">
          <HeartButton saved={saved} onToggle={() => toggle(property.id)} />
        </div>
      </div>

      <div className="p-3">
        <p className="text-lg font-bold text-[#1a1a1a]">
          {property.priceLabel}
        </p>
        <p className="text-sm text-[#555] mt-0.5">
          {property.beds} bds &nbsp;·&nbsp; {property.baths} ba &nbsp;·&nbsp;{" "}
          {property.sqftLabel} sqft
        </p>
        <p className="text-sm text-[#888] mt-1 truncate">
          {property.fullAddress}
        </p>
        {property.zestimate && (
          <p className="text-xs text-[#888] mt-1">
            Zestimate®: {property.zestimate}
          </p>
        )}
        {property.availableDate && (
          <p className="text-xs text-[#1a7c3e] mt-1 font-medium">
            Available: {property.availableDate}
          </p>
        )}
      </div>
    </article>
  );
}
