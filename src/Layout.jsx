import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AuthModal from "./components/auth/AuthModal";

// Pages
import HomePage from "./pages/HomePage";
import BuyPage from "./pages/BuyPage";
import RentPage from "./pages/RentPage";
import SellPage from "./pages/SellPage";
import HomeLoansPage from "./pages/HomeLoansPage";
import AgentsPage from "./pages/AgentsPage";
import SavedPage from "./pages/SavedPage";
import ManageRentalsPage from "./pages/ManageRentalsPage";
import AdvertisePage from "./pages/AdvertisePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoadingScreen from "./components/ui/LoadingScreen";
import { useAuth } from "./context/AuthContext";

// Pages where the footer and standard layout is suppressed
const NO_FOOTER_PATHS = ["/buy", "/rent"];

// Mantiene el scroll arriba cada vez que hay un cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { loading } = useAuth();
  const { pathname } = useLocation();
  const showFooter = !NO_FOOTER_PATHS.includes(pathname);

  // Wait for Firebase to confirm if there is a session before rendering.
  if (loading) return <LoadingScreen />;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AuthModal />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/homeLoans" element={<HomeLoansPage />} />
          <Route path="/agentFinder" element={<AgentsPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/manageRentals" element={<ManageRentalsPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </>
  );
}
