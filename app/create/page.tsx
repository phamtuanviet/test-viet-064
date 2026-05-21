"use client";

export default function CreatePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: "linear-gradient(135deg, #FF2D55, #FF8C00)" }}
      >
        <span className="text-4xl">📹</span>
      </div>
      <h2
        className="text-3xl font-bold text-white mb-3"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Đăng video
      </h2>
      <p
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        Tính năng đang được phát triển
      </p>
    </div>
  );
}
