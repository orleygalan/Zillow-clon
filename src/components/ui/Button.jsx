export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    primary: "bg-[#006aff] text-white hover:bg-[#0051cc] focus:ring-[#006aff]",
    secondary:
      "bg-white text-[#006aff] border border-[#006aff] hover:bg-[#e8f0ff] focus:ring-[#006aff]",
    ghost:
      "bg-transparent text-[#555] border border-[#e0e0e0] hover:bg-[#f7f7f7] focus:ring-[#aaa]",
    danger: "bg-[#c23b22] text-white hover:bg-[#a02d18] focus:ring-[#c23b22]",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}
