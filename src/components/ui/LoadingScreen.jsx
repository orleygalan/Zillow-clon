// Loading screen while Firebase verifies session
export default function LoadingScreen() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        background: "#fff",
      }}
    >
      <img
        src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
        alt="Zillow"
        style={{ height: 36, opacity: 0.8 }}
      />
      <div
        style={{
          width: 32,
          height: 32,
          border: "3px solid #e0e0e0",
          borderTopColor: "#006aff",
          borderRadius: "50%",
          animation: "spin 0.7s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
