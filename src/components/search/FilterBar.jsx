import SearchBar from "./SearchBar";

const SELECT_CLASS =
  "h-9 px-3 text-sm border border-[#e0e0e0] rounded-lg bg-white text-[#1a1a1a] cursor-pointer focus:outline-none focus:border-[#006aff] hover:border-[#006aff] transition-colors";

export default function FilterBar({ filters, updateFilter, total }) {
  return (
    <div className="flex gap-2 py-3 px-4">
      <div className="w-full max-w-md hidden lg:block">
        <SearchBar
          value={filters.search}
          onChange={(v) => updateFilter("search", v)}
          placeholder="Search by address, city, or ZIP"
        />
      </div>
      <div className="flex gap-2 items-center overflow-x-auto">
        <select
          className={SELECT_CLASS}
          value={filters.minBeds}
          onChange={(e) => updateFilter("minBeds", Number(e.target.value))}
        >
          <option value={0}>Beds: Any</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}+ bd
            </option>
          ))}
        </select>
        <select
          className={SELECT_CLASS}
          value={filters.minBaths}
          onChange={(e) => updateFilter("minBaths", Number(e.target.value))}
        >
          <option value={0}>Baths: Any</option>
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n}+ ba
            </option>
          ))}
        </select>
        <select
          className={SELECT_CLASS}
          value={filters.homeType}
          onChange={(e) => updateFilter("homeType", e.target.value)}
        >
          <option value="all">Home Type: All</option>
          <option value="Single Family Residence">Single Family</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
        <select
          className={SELECT_CLASS}
          value={filters.sort}
          onChange={(e) => updateFilter("sort", e.target.value)}
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}
