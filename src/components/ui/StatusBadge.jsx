export default function StatusBadge({ status }) {
  const map = {
    "For Sale": "bg-[#e8f5e9] text-[#1a7c3e]",
    "For Rent": "bg-[#e3f2fd] text-[#1565c0]",
    Sold: "bg-[#f5f5f5] text-[#555]",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-semibold rounded ${map[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}
