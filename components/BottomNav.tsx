'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, PlusSquare, Bell, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Trang chủ', href: '/' },
    { icon: Compass, label: 'Khám phá', href: '/discover' },
    { icon: PlusSquare, label: '', href: '/create', isCreate: true },
    { icon: Bell, label: 'Thông báo', href: '/notifications' },
    { icon: User, label: 'Hồ sơ', href: '/profile' },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-primary)] border-t border-[var(--border-glass)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isCreate) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center justify-center"
              >
                <div
                  className="w-11 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FF2D55 0%, #7C3AED 100%)',
                  }}
                >
                  <span className="text-white font-bold text-xl leading-none">+</span>
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all duration-200 min-w-[52px]"
            >
              <Icon
                size={23}
                strokeWidth={isActive ? 2.5 : 1.8}
                style={{
                  color: isActive ? '#FF2D55' : 'rgba(250,250,250,0.5)',
                  transition: 'all 0.2s',
                }}
                fill={isActive && item.href === '/home' ? '#FF2D55' : 'transparent'}
              />
              {item.label && (
                <span
                  className="text-center"
                  style={{
                    fontSize: '10px',
                    color: isActive ? '#FF2D55' : 'rgba(250,250,250,0.5)',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: isActive ? 600 : 400,
                    lineHeight: 1,
                  }}
                >
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}