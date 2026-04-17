import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { HiArrowLeft, HiX } from "react-icons/hi";

export default function AuthModal() {
  const {
    authModal,
    closeAuth,
    openLogin,
    openSignup,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    resetPassword,
  } = useAuth();

  const [mode, setMode] = useState(authModal); // 'login' | 'signup' | 'forgot'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  if (!authModal) return null;

  const currentMode = mode || authModal;

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
    setInfo("");
    setShowPass(false);
  };

  const switchTo = (newMode) => {
    reset();
    setMode(newMode);
  };

  // Google
  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Email submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (!email.trim()) {
      setError("Ingresa tu email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email no válido.");
      return;
    }

    setLoading(true);
    try {
      if (currentMode === "forgot") {
        await resetPassword(email.trim());
        setInfo(
          "Te enviamos un correo para restablecer tu contraseña. Revisa tu bandeja.",
        );
      } else if (currentMode === "login") {
        if (!password) {
          setError("Ingresa tu contraseña.");
          setLoading(false);
          return;
        }
        await loginWithEmail(email.trim(), password);
      } else {
        if (!name.trim()) {
          setError("Ingresa tu nombre.");
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError("La contraseña debe tener al menos 6 caracteres.");
          setLoading(false);
          return;
        }
        await registerWithEmail(name.trim(), email.trim(), password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Titles
  const titles = {
    login: "Welcome back",
    signup: "Create your account",
    forgot: "Forgot your password?",
  };
  const subtitles = {
    login: "Log in to save homes, receive alerts, and more.",
    signup: "Join millions of people who use Zillow to find their ideal home.",
    forgot:
      "Enter your email and we'll send you a link to reset your password.",
  };

  return (
    /* overlay */
    <div
      className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeAuth}
      role="dialog"
      aria-modal="true"
    >
      {/* modal */}
      <div
        className="bg-white rounded-2xl w-full max-w-[440px] h-[95vh] px-9 py-8 shadow-xl relative animate-[fadeIn_0.2s_ease] max-sm:px-5 max-sm:py-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button*/}
        <button
          className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-gray-400 flex items-center transition-colors duration-150 hover:text-gray-800"
          onClick={closeAuth}
          aria-label="Cerrar"
        >
          <HiX className="w-[18px] h-[18px] text-current" />
        </button>

        {/* Logo de Zillow */}
        <div className="text-center mb-5">
          <img
            src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
            alt="Zillow"
            className="h-7 mx-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[22px] font-extrabold text-center mb-2">
          {titles[currentMode]}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6 leading-relaxed">
          {subtitles[currentMode]}
        </p>

        {/* Google button*/}
        {currentMode !== "forgot" && (
          <>
            <button
              className="flex items-center justify-center gap-2.5 w-full px-4 py-[11px] border-[1.5px] border-gray-200 rounded-lg bg-white text-sm font-semibold cursor-pointer text-gray-800 transition-all duration-150 mb-1 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={handleGoogle}
              disabled={loading}
              type="button"
            >
              {/* Logo de Google  */}
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Continuar con Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-gray-400 text-[13px] mb-5 mt-4 before:content-[''] before:flex-1 before:h-px before:bg-gray-200 after:content-[''] after:flex-1 after:h-px after:bg-gray-200">
              <span>or</span>
            </div>
          </>
        )}

        {/* Form */}
        <form
          className="flex flex-col gap-3.5"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Nombre solo en signup */}
          {currentMode === "signup" && (
            <div className="flex flex-col gap-1">
              <label
                className="text-[13px] font-semibold text-gray-800"
                htmlFor="auth-name"
              >
                Full name
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: María García"
                className="border border-gray-200 rounded-lg px-3.5 py-[11px] text-sm text-gray-800 outline-none w-full transition-all duration-150 placeholder:text-gray-300 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(0,106,255,0.12)] disabled:opacity-60"
                autoComplete="name"
                disabled={loading}
              />
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[13px] font-semibold text-gray-800"
              htmlFor="auth-email"
            >
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="border border-gray-200 rounded-lg px-3.5 py-[11px] text-sm text-gray-800 outline-none w-full transition-all duration-150 placeholder:text-gray-300 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(0,106,255,0.12)] disabled:opacity-60"
              autoComplete="email"
              disabled={loading}
            />
          </div>

          {/* Contraseña */}
          {currentMode !== "forgot" && (
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center mb-1">
                <label
                  className="text-[13px] font-semibold text-gray-800"
                  htmlFor="auth-password"
                >
                  Password
                </label>
                {currentMode === "login" && (
                  <button
                    type="button"
                    className="text-[13px] text-blue-600 bg-transparent border-none cursor-pointer hover:underline"
                    onClick={() => switchTo("forgot")}
                  >
                    Forgot your password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  id="auth-password"
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={
                    currentMode === "signup"
                      ? "Minimum 6 characters"
                      : "••••••••"
                  }
                  className="border border-gray-200 rounded-lg px-3.5 py-[11px] pr-14 text-sm text-gray-800 outline-none w-full transition-all duration-150 placeholder:text-gray-300 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(0,106,255,0.12)] disabled:opacity-60"
                  autoComplete={
                    currentMode === "login"
                      ? "current-password"
                      : "new-password"
                  }
                  disabled={loading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-xs font-semibold text-blue-600 cursor-pointer px-1 py-0.5"
                  onClick={() => setShowPass(!showPass)}
                  tabIndex={-1}
                >
                  {showPass ? "Disguise" : "see"}
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <p
              className="text-[13px] text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2"
              role="alert"
            >
              {error}
            </p>
          )}

          {/* Info de exito */}
          {info && (
            <p
              className="bg-green-50 text-green-800 rounded px-3.5 py-2.5 text-[13px] leading-relaxed border-l-[3px] border-green-700"
              role="status"
            >
              {info}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 mt-1 bg-blue-600 text-white border-none rounded-lg text-[15px] font-bold cursor-pointer transition-colors duration-150 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="inline-block w-[18px] h-[18px] border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : currentMode === "login" ? (
              "Login"
            ) : currentMode === "signup" ? (
              "Create account"
            ) : (
              "Send link"
            )}
          </button>
        </form>

        <p className="text-sm text-center mt-[18px] text-gray-600">
          {currentMode === "login" && (
            <>
              Don't you have an account?
              <button
                className="bg-transparent border-none text-blue-600 text-sm font-semibold cursor-pointer hover:underline"
                onClick={() => switchTo("signup")}
              >
                Sign up
              </button>
            </>
          )}
          {currentMode === "signup" && (
            <>
              Do you already have an account?
              <button
                className="bg-transparent border-none text-blue-600 text-sm font-semibold cursor-pointer hover:underline"
                onClick={() => switchTo("login")}
              >
                Sign in
              </button>
            </>
          )}
          {currentMode === "forgot" && (
            <button
              className="bg-transparent border-none text-blue-600 text-sm font-semibold cursor-pointer hover:underline"
              onClick={() => switchTo("login")}
            >
              <HiArrowLeft className="w-5 h-5" /> Return to login
            </button>
          )}
        </p>

        {/* Legal*/}
        {currentMode !== "forgot" && (
          <p className="text-xs text-gray-400 text-center mt-3.5 leading-relaxed">
            By continuing you accept the
            <a href="#" className="text-blue-600 underline">
              Terms of Use
            </a>{" "}
            y la{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            de Zillow.
          </p>
        )}
      </div>
    </div>
  );
}
