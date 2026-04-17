import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useCarousel } from "../../hooks/useCarousel";
import PropertyCard from "./PropertyCard";
import { useState, useEffect } from "react";

function useResponsiveVisible() {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
}

export default function PropertyCarousel({
  title,
  subtitle,
  properties,
  onPropertyClick,
}) {
  const visibleCount = useResponsiveVisible();
  const cardW = 260; // px
  const { idx, prev, next, canPrev, canNext } = useCarousel(
    properties.length,
    visibleCount,
  );

  return (
    <section className="px-4 md:px-8 py-6">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
          {title}
        </h2>
        {subtitle && <p className="text-sm text-[#888] mt-1">{subtitle}</p>}
      </div>

      <div className="relative">
        {/* Arrows */}
        {canPrev && (
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-[#e0e0e0] hover:shadow-lg transition-shadow"
          >
            <HiChevronLeft size={20} />
          </button>
        )}
        {canNext && (
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-[#e0e0e0] hover:shadow-lg transition-shadow"
          >
            <HiChevronRight size={20} />
          </button>
        )}

        <div className="overflow-hidden rounded-xl">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${idx * (cardW + 16)}px)` }}
          >
            {properties.map((p) => (
              <div key={p.id} className="shrink-0" style={{ width: cardW }}>
                <PropertyCard property={p} onClick={onPropertyClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
