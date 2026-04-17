import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchBar({
  value,
  onChange,
  onSearch,
  large = false,
  placeholder = "Enter an address, neighborhood, city, or ZIP code",
}) {
  const [focused, setFocused] = useState(false);

  const handleKey = (e) => {
    if (e.key === "Enter" && onSearch) onSearch(value);
  };

  return (
    <div
      className={`flex items-center gap-2 bg-white border-2 rounded-xl transition-colors px-3
      ${focused ? "border-[#006aff]" : "border-[#e0e0e0]"}
      ${large ? "h-14 text-base" : "h-10 text-sm"}`}
    >
      <FaSearch className="text-[#888] shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKey}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="flex-1 w-full bg-transparent outline-none text-[#1a1a1a] placeholder:text-[#aaa]"
        aria-label="Search properties"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear"
          className="text-[#888] hover:text-[#1a1a1a] transition-colors"
        >
          <FaTimes size={12} />
        </button>
      )}
    </div>
  );
}
