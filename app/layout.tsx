import type { Metadata, Viewport } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'VidFlow — Khám phá video',
  description: 'Nền tảng xem video ngắn hàng đầu Việt Nam',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-[var(--bg-primary)]">
        <main className="relative min-h-screen overflow-hidden">
          {/* Sidebar luôn hiện */}
          <Sidebar /> 

          {/* Main content - Nội dung sẽ thay đổi theo URL */}
          <div className="lg:ml-[240px] h-screen overflow-hidden">
            {children}
          </div>

          {/* BottomNav luôn hiện */}
          <BottomNav />
        </main>
      </body>
    </html>
  );
}