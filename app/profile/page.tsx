

export default function ProfilePage() {
  return (
<div className="flex flex-col items-center justify-center h-full text-center px-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6 p-1"
              style={{ background: 'linear-gradient(135deg, #FF2D55, #7C3AED)' }}
            >
              <img
                src="https://i.pravatar.cc/150?img=25"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Hồ sơ của tôi
            </h2>
            <p
              className="mb-4"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
            >
              @myprofile
            </p>
            <div
              className="flex gap-8 px-8 py-4 rounded-2xl"
              style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)' }}
            >
              {[
                { label: 'Đang theo dõi', value: '128' },
                { label: 'Người theo dõi', value: '4.2K' },
                { label: 'Thích', value: '32.5K' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
  );
}

