import { createContext, useContext, useState } from "react";

const SavedHomesContext = createContext(null);

export function SavedHomesProvider({ children }) {
  const [saved, setSaved] = useState([]);

  const isSaved = (id) => saved.includes(id);

  const toggle = (id) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <SavedHomesContext.Provider value={{ saved, isSaved, toggle, count: saved.length }}>
      {children}
    </SavedHomesContext.Provider>
  );
}

export const useSavedHomes = () => {
  const ctx = useContext(SavedHomesContext);
  if (!ctx) throw new Error("useSavedHomes must be used inside SavedHomesProvider");
  return ctx;
};
