import { useState, useMemo } from "react";
import { AGENTS, AGENT_LISTINGS, FOR_SALE, FOR_RENT } from "../data/properties";
import PropertyCard from "../components/property/PropertyCard";
import PropertyDetail from "../components/property/PropertyDetail";
import { HiStar, HiPhone, HiMail, HiX, HiBadgeCheck } from "react-icons/hi";

const AVATAR_COLORS = [
  { bg: "#e3f2fd", color: "#1565c0" },
  { bg: "#e8f5e9", color: "#1a7c3e" },
  { bg: "#fce4ec", color: "#c62828" },
  { bg: "#fff3e0", color: "#e65100" },
];

// Agent Portfolio Modal
function AgentPortfolio({ agent, idx, onClose }) {
  const [tab, setTab] = useState("forSale");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { bg, color } = AVATAR_COLORS[idx % AVATAR_COLORS.length];

  const listings = AGENT_LISTINGS[agent.id] || { forSale: [], forRent: [] };
  const saleProps = FOR_SALE.filter((p) => listings.forSale.includes(p.id));
  const rentProps = FOR_RENT.filter((p) => listings.forRent.includes(p.id));

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e0e0e0]">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0"
              style={{ background: bg, color }}
            >
              {agent.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-[#1a1a1a]">
                  {agent.name}
                </h2>
                <HiBadgeCheck size={20} className="text-[#006aff]" />
              </div>
              <p className="text-sm text-[#555]">{agent.title}</p>
              <p className="text-xs text-[#888]">
                {agent.city} · License: {agent.licenseNum}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#888] hover:text-[#1a1a1a] transition-colors mt-1"
          >
            <HiX size={22} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 divide-x divide-[#e0e0e0] text-center py-4 bg-[#f7f7f7]">
          {[
            { label: "Sales", value: agent.recentSales },
            { label: "Rating", value: agent.rating },
            { label: "Reviews", value: agent.reviews },
            { label: "Experience", value: `${agent.yearsExp} yrs` },
          ].map(({ label, value }) => (
            <div key={label} className="px-4">
              <p className="text-lg font-bold text-[#1a1a1a]">{value}</p>
              <p className="text-xs text-[#888]">{label}</p>
            </div>
          ))}
        </div>

        {/* Bio + details */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-sm mb-2">About {agent.name}</h3>
            <p className="text-sm text-[#555] leading-relaxed">{agent.bio}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {agent.languages?.map((l) => (
                <span
                  key={l}
                  className="px-2 py-0.5 bg-[#e8f0ff] text-[#006aff] text-xs rounded-full"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-[#f7f7f7] rounded-xl p-4">
              <p className="text-xs text-[#888] mb-2 font-medium uppercase tracking-wide">
                Transaction Volume
              </p>
              <p className="text-2xl font-bold text-[#006aff]">
                {agent.totalVolume}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${agent.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 border border-[#006aff] text-[#006aff] rounded-lg text-sm font-medium hover:bg-[#e8f0ff] transition-colors"
              >
                <HiPhone size={16} /> {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center gap-2 px-4 py-2.5 border border-[#e0e0e0] text-[#555] rounded-lg text-sm font-medium hover:bg-[#f7f7f7] transition-colors"
              >
                <HiMail size={16} /> {agent.email}
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="px-6 pb-6">
          <h3 className="font-bold text-[#1a1a1a] mb-3">Portfolio</h3>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTab("forSale")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors
                ${tab === "forSale" ? "bg-[#006aff] text-white" : "border border-[#e0e0e0] text-[#555] hover:bg-[#f7f7f7]"}`}
            >
              For Sale ({saleProps.length})
            </button>
            <button
              onClick={() => setTab("forRent")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors
                ${tab === "forRent" ? "bg-[#1565c0] text-white" : "border border-[#e0e0e0] text-[#555] hover:bg-[#f7f7f7]"}`}
            >
              For Rent ({rentProps.length})
            </button>
          </div>

          {tab === "forSale" &&
            (saleProps.length === 0 ? (
              <p className="text-sm text-[#888]">No sale listings.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {saleProps.map((p) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    onClick={setSelectedProperty}
                  />
                ))}
              </div>
            ))}
          {tab === "forRent" &&
            (rentProps.length === 0 ? (
              <p className="text-sm text-[#888]">No rental listings.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {rentProps.map((p) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                    onClick={setSelectedProperty}
                  />
                ))}
              </div>
            ))}
        </div>
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

// Agent Card
function AgentCard({ agent, idx, onViewPortfolio }) {
  const { bg, color } = AVATAR_COLORS[idx % AVATAR_COLORS.length];
  const [contacted, setContacted] = useState(false);

  return (
    <article className="bg-white rounded-2xl border border-[#e0e0e0] p-5 hover:shadow-lg transition-shadow flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
          style={{ background: bg, color }}
        >
          {agent.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <h3 className="font-bold text-[#1a1a1a] truncate">{agent.name}</h3>
            <HiBadgeCheck size={16} className="text-[#006aff] shrink-0" />
          </div>
          <p className="text-xs text-[#555]">{agent.title}</p>
          <p className="text-xs text-[#888]">{agent.city}</p>
        </div>
      </div>

      <div className="flex justify-around text-center bg-[#f7f7f7] rounded-xl py-3">
        <div>
          <p className="font-bold text-[#1a1a1a]">{agent.recentSales}</p>
          <p className="text-xs text-[#888]">Sales</p>
        </div>
        <div className="border-l border-[#e0e0e0]" />
        <div>
          <div className="flex items-center justify-center gap-0.5">
            <HiStar className="text-yellow-400" size={14} />
            <p className="font-bold text-[#1a1a1a]">{agent.rating}</p>
          </div>
          <p className="text-xs text-[#888]">Rating</p>
        </div>
        <div className="border-l border-[#e0e0e0]" />
        <div>
          <p className="font-bold text-[#1a1a1a]">{agent.reviews}</p>
          <p className="text-xs text-[#888]">Reviews</p>
        </div>
      </div>

      <span className="inline-block px-3 py-1 bg-[#e8f0ff] text-[#006aff] text-xs font-medium rounded-full w-fit">
        {agent.specialty}
      </span>

      <p className="text-sm text-[#555] leading-relaxed line-clamp-3">
        {agent.bio}
      </p>

      <div className="space-y-1">
        <a
          href={`tel:${agent.phone}`}
          className="flex items-center gap-2 text-sm text-[#555] hover:text-[#006aff] transition-colors"
        >
          <HiPhone size={14} /> {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-2 text-sm text-[#555] hover:text-[#006aff] transition-colors"
        >
          <HiMail size={14} /> {agent.email}
        </a>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => setContacted(true)}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors
            ${contacted ? "bg-[#e8f5e9] text-[#1a7c3e]" : "bg-[#006aff] text-white hover:bg-[#0051cc]"}`}
        >
          {contacted ? "✓ Contacted" : "Contact agent"}
        </button>
        <button
          onClick={() => onViewPortfolio(agent, idx)}
          className="flex-1 py-2 text-sm font-medium border border-[#006aff] text-[#006aff] rounded-lg hover:bg-[#e8f0ff] transition-colors"
        >
          View portfolio
        </button>
      </div>
    </article>
  );
}

// Page
export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedAgentIdx, setSelectedAgentIdx] = useState(0);

  const specialties = ["all", ...new Set(AGENTS.map((a) => a.specialty))];

  const filtered = useMemo(() => {
    let list = AGENTS;
    if (specialty !== "all")
      list = list.filter((a) => a.specialty === specialty);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.city.toLowerCase().includes(q) ||
          a.specialty.toLowerCase().includes(q),
      );
    }
    return list;
  }, [search, specialty]);

  const handleViewPortfolio = (agent, idx) => {
    setSelectedAgent(agent);
    setSelectedAgentIdx(idx);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://delivery.digitalassets.zillowgroup.com/api/public/content/ZG_Brand_CHI_0822_LvlUp_BackExt_Tour_0291_1280x4502x_CMS_Full.jpg?v=79a8239e"
          alt="Find an agent"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">
            A great agent makes all the difference
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl">
            89% of buyers used an agent last year — a local expert guides you
            from search to close.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#006aff] text-white font-semibold rounded-lg hover:bg-[#0051cc] transition-colors">
            Connect with a local agent
          </button>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 md:px-8 py-4 sticky top-16 z-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, city, or specialty"
              className="w-full border border-[#e0e0e0] rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[#006aff] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors
                  ${specialty === s ? "bg-[#006aff] text-white" : "border border-[#e0e0e0] text-[#555] hover:bg-[#f7f7f7]"}`}
              >
                {s === "all" ? "All specialties" : s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        <p className="text-sm text-[#888] mb-6">
          {filtered.length} agent{filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">👤</div>
            <p className="text-[#555] mb-3">No agents match your search.</p>
            <button
              onClick={() => {
                setSearch("");
                setSpecialty("all");
              }}
              className="px-4 py-2 bg-[#006aff] text-white text-sm font-medium rounded-lg hover:bg-[#0051cc] transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((agent, idx) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                idx={idx}
                onViewPortfolio={handleViewPortfolio}
              />
            ))}
          </div>
        )}

        {/* Info section */}
        <section className="mt-16 bg-[#f7f7f7] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">
            Find an Agent
          </h2>
          <p className="text-sm text-[#555] mb-6 max-w-2xl leading-relaxed">
            Whether you are looking to rent, buy or sell your home, Zillow's
            directory of local real estate agents and brokers connects you with
            professionals who can help meet your needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Real Estate Agents",
                links: [
                  "California",
                  "Texas",
                  "Florida",
                  "New York",
                  "Arizona",
                ],
              },
              {
                title: "Mortgage Lenders",
                links: [
                  "California",
                  "Texas",
                  "Florida",
                  "New York",
                  "Arizona",
                ],
              },
              {
                title: "Home Improvement",
                links: [
                  "California",
                  "Texas",
                  "Florida",
                  "New York",
                  "Ontario",
                ],
              },
              {
                title: "Property Managers",
                links: [
                  "California",
                  "Texas",
                  "Florida",
                  "New York",
                  "Arizona",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                  {col.title}
                </h4>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="block text-sm text-[#555] hover:text-[#006aff] py-0.5 transition-colors"
                  >
                    {l} {col.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Portfolio modal */}
      {selectedAgent && (
        <AgentPortfolio
          agent={selectedAgent}
          idx={selectedAgentIdx}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </div>
  );
}
