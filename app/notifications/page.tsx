export default function NotificationsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: "linear-gradient(135deg, #7C3AED, #00F5FF)" }}
      >
        <span className="text-4xl">🔔</span>
      </div>

      <h2
        className="text-3xl font-bold text-white mb-3"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Thông báo
      </h2>

      <p
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        Chưa có thông báo mới
      </p>
    </div>
  );
}
