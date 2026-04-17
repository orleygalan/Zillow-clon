import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,   
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "../service/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null=cargando, false=sin sesión, obj=autenticado
  const [loading, setLoading] = useState(true); // true mientras Firebase inicializa
  const [authModal, setAuthModal] = useState(null); // 'login' | 'signup' | null

  // persistencia automatica
  // firebase mantiene la sesion en localStorage
  // onAuthStateChanged restaura la sesión al recargar la pagina.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email.split("@")[0],
          email: firebaseUser.email,
          avatar: firebaseUser.photoURL || null,
        });
      } else {
        setUser(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Google
  const loginWithGoogle = useCallback(async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setAuthModal(null);
      return result.user;
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") return null;
      throw new Error(getFirebaseErrorMessage(err.code));
    }
  }, []);

  // Email + contraseña - Login
  const loginWithEmail = useCallback(async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAuthModal(null);
      return result.user;
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err.code));
    }
  }, []);

  // Email + contraseña -Registro
  const registerWithEmail = useCallback(async (name, email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(result.user, { displayName: name });
      setAuthModal(null);
      return result.user;
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err.code));
    }
  }, []);

  // Recuperar contraseña
  const resetPassword = useCallback(async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      throw new Error(getFirebaseErrorMessage(err.code));
    }
  }, []);

  // cerrar sesion
  const logout = useCallback(async () => {
    await signOut(auth);
  }, []);

  // Auth gate
  // requireAuth(fn) ejecuta fn si hay sesión, abre modal de login si no.
  const requireAuth = useCallback(
    (callback) => {
      if (user) {
        callback();
      } else {
        setAuthModal("login");
      }
    },
    [user],
  );

  // Modal
  const openLogin = useCallback(() => setAuthModal("login"), []);
  const openSignup = useCallback(() => setAuthModal("signup"), []);
  const closeAuth = useCallback(() => setAuthModal(null), []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authModal,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        resetPassword,
        logout,
        requireAuth,
        openLogin,
        openSignup,
        closeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
};

// mensajes de error
function getFirebaseErrorMessage(code) {
  const map = {
    "auth/user-not-found": "No existe una cuenta con ese email.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/invalid-credential": "Email o contraseña incorrectos.",
    "auth/email-already-in-use": "Ya existe una cuenta con ese email.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/invalid-email": "El email no es válido.",
    "auth/too-many-requests": "Demasiados intentos. Espera un momento.",
    "auth/network-request-failed": "Error de conexión. Verifica tu internet.",
    "auth/popup-blocked":
      "El popup fue bloqueado. Permite popups para este sitio.",
    "auth/account-exists-with-different-credential":
      "Ya existe una cuenta con ese email usando otro método.",
  };
  return map[code] || "Algo salió mal. Inténtalo de nuevo.";
}
