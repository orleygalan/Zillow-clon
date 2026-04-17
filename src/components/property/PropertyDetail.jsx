import { useState } from "react";
import { useSavedHomes } from "../../context/SavedHomesContext";
import HeartButton from "../ui/HeartButton";
import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";
import { calcMonthlyPayment, formatPrice } from "../../utils/helpers";
import { HiArrowRight, HiOutlineTruck, HiX } from "react-icons/hi";
import { HiMiniSparkles, HiOutlineCalendarDays, HiOutlineHomeModern } from "react-icons/hi2";

const TABS = ["overview", "details", "schools", "market"];

export default function PropertyDetail({ property, onClose }) {
  const { isSaved, toggle } = useSavedHomes();
  const [activeImg, setActiveImg] = useState(0);
  const [tourRequested, setTourRequested] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [tab, setTab] = useState("overview");

  if (!property) return null;

  const downPayment = property.price * 0.2;
  const loanAmount = property.price - downPayment;
  const monthly = calcMonthlyPayment(loanAmount, 6.75, 30);
  const isRental = property.status === "For Rent";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto p-2 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl my-4 animate-[fadeIn_0.2s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#e0e0e0]">
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm text-[#555] hover:text-[#1a1a1a] transition-colors"
          >
            <HiX size={18} /> Close
          </button>
          <img
            src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            alt="Zillow"
            className="h-6"
          />
          <HeartButton
            saved={isSaved(property.id)}
            onToggle={() => toggle(property.id)}
          />
        </div>

        {/* Gallery */}
        <div className="relative bg-black">
          <img
            src={property.images[activeImg]}
            alt={`View ${activeImg + 1}`}
            className="w-full max-h-80 object-cover"
          />
          {property.images.length > 1 && (
            <div className="flex gap-2 px-4 py-2 bg-black/80 overflow-x-auto">
              {property.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb ${i + 1}`}
                  onClick={() => setActiveImg(i)}
                  className={`h-14 w-20 object-cover rounded cursor-pointer shrink-0 transition-all
                    ${activeImg === i ? "ring-2 ring-white opacity-100" : "opacity-50 hover:opacity-80"}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
          {/* Left */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-[#1a1a1a]">
                {property.priceLabel}
              </h1>
              <StatusBadge status={property.status} />
            </div>
            <p className="text-[#555] mt-1">
              {property.beds} bds &nbsp;·&nbsp; {property.baths} ba
              &nbsp;·&nbsp; {property.sqftLabel} sqft
            </p>
            <p className="text-[#888] text-sm mt-0.5">{property.fullAddress}</p>

            {/* Rental extras */}
            {isRental && (
              <div className="flex flex-wrap gap-2 mt-3">
                {property.petFriendly && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#e8f5e9] text-[#1a7c3e] text-xs rounded-full font-medium">
                    <HiMiniSparkles className="w-3.5 h-3.5" />
                    Pet friendly
                  </span>
                )}

                {property.laundry && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#e3f2fd] text-[#1565c0] text-xs rounded-full font-medium">
                    <HiOutlineHomeModern className="w-3.5 h-3.5" />
                    {property.laundry}
                  </span>
                )}

                {property.parking && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#f3e5f5] text-[#6a1b9a] text-xs rounded-full font-medium">
                    <HiOutlineTruck className="w-3.5 h-3.5" />
                    {property.parking}
                  </span>
                )}

                {property.availableDate && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#fff3e0] text-[#e65100] text-xs rounded-full font-medium">
                    <HiOutlineCalendarDays className="w-3.5 h-3.5" />
                    Available {property.availableDate}
                  </span>
                )}
              </div>
            )}

            {/* Tabs */}
            <div className="flex gap-1 mt-5 border-b border-[#e0e0e0]">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-2 text-sm font-medium capitalize transition-colors
                    ${tab === t ? "border-b-2 border-[#006aff] text-[#006aff]" : "text-[#555] hover:text-[#1a1a1a]"}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === "overview" && (
              <div className="pt-4 space-y-4">
                <p className="text-sm text-[#555] leading-relaxed">
                  {property.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    property.type,
                    property.built && `Built ${property.built}`,
                    property.acresLot,
                    property.hoa,
                    property.parkingSpots &&
                      `${property.parkingSpots} parking spots`,
                  ]
                    .filter(Boolean)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#f7f7f7] border border-[#e0e0e0] text-xs rounded-full text-[#555]"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                {property.zestimate && (
                  <div className="bg-[#e8f0ff] rounded-xl p-4">
                    <p className="text-xs text-[#555] font-medium uppercase tracking-wide">
                      Zestimate®
                    </p>
                    <p className="text-xl font-bold text-[#006aff] mt-1">
                      {property.zestimate}
                    </p>
                    <p className="text-xs text-[#888] mt-1">
                      Zestimate is Zillow's estimate of a home's market value.
                      It is not an appraisal.
                    </p>
                  </div>
                )}
              </div>
            )}

            {tab === "details" && (
              <div className="pt-4">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Type", property.type],
                      ["Year Built", property.built],
                      ["Lot Size", property.acresLot],
                      ["HOA", property.hoa],
                      [
                        "Parking",
                        property.parkingSpots &&
                          `${property.parkingSpots} spaces`,
                      ],
                      ["Annual Tax", property.yearlyTax],
                    ]
                      .filter(([, v]) => v)
                      .map(([label, value]) => (
                        <tr key={label} className="border-b border-[#f0f0f0]">
                          <td className="py-2 text-[#888] w-1/3">{label}</td>
                          <td className="py-2 text-[#1a1a1a] font-medium">
                            {value}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "schools" && (
              <div className="pt-4 space-y-3">
                {[
                  {
                    name: "Paradise Valley Unified",
                    grade: "K-12",
                    rating: 9,
                    distance: "0.4 mi",
                  },
                  {
                    name: "Scottsdale Community College",
                    grade: "Higher Ed",
                    rating: 8,
                    distance: "2.1 mi",
                  },
                  {
                    name: "Camelback High School",
                    grade: "9-12",
                    rating: 7,
                    distance: "3.5 mi",
                  },
                ].map((school) => (
                  <div
                    key={school.name}
                    className="flex items-center gap-3 p-3 bg-[#f7f7f7] rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#006aff] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {school.rating}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{school.name}</p>
                      <p className="text-xs text-[#888]">
                        {school.grade} · {school.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "market" && (
              <div className="pt-4 space-y-2">
                <p className="font-semibold text-[#1a1a1a] mb-3">
                  Paradise Valley Market Trends
                </p>
                {[
                  ["Median Sale Price", "$4,200,000"],
                  ["Median Days on Market", "18 days"],
                  ["Homes Sold (30d)", "24"],
                  ["Sale/List Ratio", "97.3%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between py-2 border-b border-[#f0f0f0] text-sm"
                  >
                    <span className="text-[#888]">{label}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — CTA */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5 shadow-sm space-y-3 sticky top-4">
              <Button
                fullWidth
                size="lg"
                onClick={() => setTourRequested(true)}
                variant={tourRequested ? "ghost" : "primary"}
              >
                {tourRequested ? "✓ Tour Requested" : "Request a Tour"}
              </Button>
              <Button
                fullWidth
                size="lg"
                variant="secondary"
                onClick={() => setContactSent(true)}
              >
                {contactSent ? "✓ Agent Contacted" : "Contact Agent"}
              </Button>

              {!isRental && (
                <>
                  <div className="border-t border-[#f0f0f0] pt-3">
                    <p className="text-sm text-[#888]">Est. Monthly Payment</p>
                    <p className="text-2xl font-bold text-[#1a1a1a]">
                      {formatPrice(Math.round(monthly))}
                      <span className="text-sm font-normal text-[#888]">
                        /mo
                      </span>
                    </p>
                    <p className="text-xs text-[#888] mt-1">
                      Based on 20% down ({formatPrice(Math.round(downPayment))}
                      ), 6.75% rate, 30-yr fixed
                    </p>
                    <a
                      href="/homeLoans"
                      className="flex items-center gap-1 text-[#006aff] text-sm font-medium mt-2 hover:underline"
                    >
                      Get pre-qualified <HiArrowRight size={14} />
                    </a>
                  </div>
                </>
              )}

              {property.zestimate && (
                <div className="border-t border-[#f0f0f0] pt-3">
                  <p className="text-xs text-[#888]">Zestimate®</p>
                  <p className="font-bold text-[#006aff]">
                    {property.zestimate}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
