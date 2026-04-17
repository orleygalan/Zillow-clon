import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

export default function HeartButton({ saved, onToggle }) {
  const Icon = saved ? HiHeart : HiOutlineHeart;

  const { requireAuth } = useAuth();

  const handleClick = (e) => {
    e.stopPropagation();
    // requireAuth ejecuta onToggle solo si hay sesión activa
    // de lo contrario abre el modal de login automaticamente.
    requireAuth(onToggle);
  };

  return (
    <button
      onClick={handleClick}
      title={saved ? "Quitar de guardados" : "Guardar casa"}
      aria-label={saved ? "Quitar de guardados" : "Guardar casa"}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow hover:scale-110 transition-transform"
    >
      <Icon
        className={`w-[18px] h-[18px] ${
          saved ? "text-[#c23b22]" : "text-[#555]"
        }`}
      />
    </button>
  );
}
