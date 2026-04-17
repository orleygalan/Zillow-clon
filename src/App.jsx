import { BrowserRouter } from "react-router-dom";

// Providers
import { AuthProvider } from "./context/AuthContext";
import { SavedHomesProvider } from "./context/SavedHomesContext";

// Styles
import "./App.css";

import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SavedHomesProvider>
          <Layout />
        </SavedHomesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
