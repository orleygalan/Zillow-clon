import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <p className="text-8xl font-bold text-[#006aff] mb-2">404</p>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Page not found</h1>
      <p className="text-[#888] mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <button onClick={() => navigate("/")} className="px-6 py-3 bg-[#006aff] text-white font-semibold rounded-lg hover:bg-[#0051cc] transition-colors">
        Back to Home
      </button>
    </div>
  );
}
