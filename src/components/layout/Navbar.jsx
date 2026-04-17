import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSavedHomes } from "../../context/SavedHomesContext";
import { HiChevronDown, HiMenu, HiOutlineHeart, HiX } from "react-icons/hi";
import { NAV_ITEMS } from "../../data/navItems";
import SearchBar from "../search/SearchBar";

export default function Navbar() {
  const { user, openLogin, openSignup, logout } = useAuth();
  const { count: savedCount } = useSavedHomes();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const showSearch =
    location.pathname === "/buy" || location.pathname === "/rent";

  const handleSearch = (val) => {
    const q = val.trim();
    if (!q) return;
    const lower = q.toLowerCase();
    if (lower.includes("rent") || lower.includes("apartment")) {
      navigate(`/rent?q=${encodeURIComponent(q)}`);
    } else {
      navigate(`/buy?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#e0e0e0] h-16 shadow-sm">
        <div className="flex items-center h-full px-4 md:px-6 gap-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0"
            onClick={() => setOpenDropdown(null)}
          >
            <img
              src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
              alt="Zillow"
              className="h-8 w-20 md:w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 whitespace-nowrap">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-0.5 px-3 py-2 text-sm font-medium rounded-md transition-colors
                     ${isActive ? "text-[#006aff]" : "text-[#1a1a1a] hover:text-[#006aff] hover:bg-[#f7f7f7]"}`
                  }
                >
                  {item.label}
                  {item.dropdown && <HiChevronDown size={14} />}
                </NavLink>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50 min-w-[480px]">
                    <div className="bg-white shadow-xl rounded-xl border border-[#e0e0e0] p-5 flex gap-8">
                      {item.dropdown.sections.map((section) => (
                        <div key={section.heading} className="min-w-[160px]">
                          <p className="text-xs font-bold text-[#888] uppercase tracking-wider mb-3">
                            {section.heading}
                          </p>
                          {section.links.map((link) => (
                            <Link
                              key={link.label}
                              to={link.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block py-1.5 text-sm text-[#1a1a1a] hover:text-[#006aff] transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2 ml-auto">
            {showSearch && (
              <div className="block lg:hidden w-full max-w-sm mx-auto px-2 ">
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  onSearch={handleSearch}
                  placeholder="City, address, ZIP…"
                />
              </div>
            )}

            {/* <Link to="/saved" className="hidden md:flex items-center gap-1 text-sm text-[#555] hover:text-[#006aff] px-2 py-1 rounded transition-colors">
              <HiOutlineHeart size={18} />
              {savedCount > 0 && <span className="text-xs bg-[#006aff] text-white rounded-full px-1.5 py-0.5 font-bold">{savedCount}</span>}
            </Link> */}

            {user ? (
              <div
                className="relative"
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="w-9 h-9 rounded-full bg-[#006aff] text-white font-bold text-sm flex items-center justify-center hover:bg-[#0051cc] transition-colors whitespace-nowrap"
                >
                  {user.name?.charAt(0).toUpperCase()}
                </button>
                {userMenuOpen && (
                  <div className="absolute right-3 top-3 mt-1 bg-white shadow-xl rounded-xl border border-[#e0e0e0] w-48 py-2 z-50">
                    <p className="px-4 py-2 text-sm font-semibold text-[#1a1a1a] truncate">
                      {user.name}
                    </p>
                    <p className="px-4 pb-2 text-xs text-[#888] truncate">
                      {user.email}
                    </p>
                    <div className="border-t border-[#f0f0f0]" />
                    <Link
                      to="/saved"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f7f7f7] transition-colors"
                    >
                      Saved Homes
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-[#c23b22] hover:bg-[#f7f7f7] transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={openLogin}
                  className="px-4 py-2 text-sm font-medium text-[#006aff] hover:text-[#006aff] transition-colors whitespace-nowrap border border-[#006aff] rounded-xl "
                >
                  Sign in
                </button>
                <button
                  onClick={openSignup}
                  className="px-4 py-2 text-sm font-medium bg-[#006aff] text-white rounded-lg hover:bg-[#0051cc] transition-colors"
                >
                  Join
                </button>
              </div>
            )}

            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-[#f7f7f7] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#e0e0e0] shadow-lg py-2 px-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                   ${isActive ? "text-[#006aff] bg-[#e8f0ff]" : "text-[#1a1a1a] hover:bg-[#f7f7f7]"}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="border-t border-[#e0e0e0] my-2" />
            {user ? (
              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#c23b22] hover:bg-[#f7f7f7] rounded-lg transition-colors"
              >
                Sign Out ({user.name})
              </button>
            ) : (
              <div className="flex gap-2 px-2">
                <button
                  onClick={() => {
                    openLogin();
                    setMobileOpen(false);
                  }}
                  className="flex-1 py-2.5 text-sm font-medium border border-[#e0e0e0] rounded-lg hover:bg-[#f7f7f7] transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    openSignup();
                    setMobileOpen(false);
                  }}
                  className="flex-1 py-2.5 text-sm font-medium bg-[#006aff] text-white rounded-lg hover:bg-[#0051cc] transition-colors"
                >
                  Join
                </button>
              </div>
            )}
          </div>
        )}
      </header>
      <div style={{ height: "var(--z-navbar-height)" }} />
    </>
  );
}
