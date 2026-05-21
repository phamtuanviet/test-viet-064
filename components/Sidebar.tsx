'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, User, Zap, Bell, Settings } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string; // Đổi từ id sang href
  badge?: number;
}

export default function Sidebar() {
  const pathname = usePathname(); // Hook để lấy đường dẫn hiện tại
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { icon: <Home size={22} />, label: 'Trang chủ', href: '/' },
    { icon: <Compass size={22} />, label: 'Khám phá', href: '/discover' },
    { icon: <Bell size={22} />, label: 'Thông báo', href: '/notifications', badge: 3 },
    { icon: <User size={22} />, label: 'Hồ sơ', href: '/profile' },
  ];

  return (
    <aside
      className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 border-r border-[var(--border-glass)]"
      style={{ width: '240px', background: 'var(--bg-primary)' }}
    >
      {/* Logo */}
      <div className="px-6 py-7 mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center pulse-glow"
            style={{ background: 'linear-gradient(135deg, #FF2D55, #7C3AED)' }}
          >
            <Zap size={18} fill="white" color="white" />
          </div>
          <span className="text-xl font-bold tracking-tight gradient-text" style={{ fontFamily: 'var(--font-syne)' }}>
            VidFlow
          </span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          // Kiểm tra xem trang hiện tại có khớp với href không
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl mb-1 transition-all duration-200 group"
              style={{
                background: isActive
                  ? 'rgba(255, 45, 85, 0.12)'
                  : isHovered
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'transparent',
              }}
            >
              {isActive && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full"
                  style={{ background: 'linear-gradient(180deg, #FF2D55, #7C3AED)' }}
                />
              )}

              <span
                className="transition-all duration-200"
                style={{
                  color: isActive ? '#FF2D55' : isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {item.icon}
              </span>

              <span
                className="text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.label}
              </span>

              {item.badge && (
                <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{ background: '#FF2D55', color: 'white', fontSize: '10px' }}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section (Settings & Profile) */}
      <div className="p-4 mt-auto">
        <div className="h-px mb-4 mx-2" style={{ background: 'var(--border-glass)' }} />
        
        <Link href="/settings" className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.05)]">
          <Settings size={20} />
          <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-dm-sans)' }}>Cài đặt</span>
        </Link>
      </div>
    </aside>
  );
}