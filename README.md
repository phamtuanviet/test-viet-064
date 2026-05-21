# 🎬 VidFlow — Ứng dụng xem video ngắn

Ứng dụng xem video ngắn kiểu TikTok/Reels xây dựng với **Next.js 14 + TypeScript + Tailwind CSS**.

---

## 🚀 Cài đặt & Chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy development server
npm run dev

# 3. Mở trình duyệt
# http://localhost:3000
```

---

## 📁 Cấu trúc dự án

```
video-app/
├── app/
│   ├── globals.css        # CSS toàn cục, fonts, animations
│   ├── layout.tsx         # Root layout với metadata
│   └── page.tsx           # Trang chủ — điều phối layout
│
├── components/
│   ├── VideoFeed.tsx      # Feed video với IntersectionObserver
│   ├── VideoCard.tsx      # Card video đơn (desktop + mobile)
│   ├── ActionButtons.tsx  # Nút Tim / Bình luận / Chia sẻ / Lưu
│   ├── Sidebar.tsx        # Thanh điều hướng bên trái (desktop)
│   └── BottomNav.tsx      # Thanh điều hướng dưới cùng (mobile)
│
├── types/
│   └── video.ts           # TypeScript interface cho Video
│
├── data/
│   └── mockVideos.ts      # Dữ liệu video mẫu + formatCount()
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✨ Tính năng

### 🖥️ Desktop (PC)
- Sidebar bên trái: **Trang chủ, Khám phá, Thông báo, Hồ sơ**
- Video 9:16 cố định giữa màn hình với shadow đẹp
- Nút tương tác (Tim, Bình luận, Chia sẻ, Lưu) nằm bên phải video
- Progress bar ở dưới video, click để tua

### 📱 Mobile
- Video full màn hình (100dvh)
- Nút tương tác bên phải
- Thông tin tác giả + mô tả góc trái dưới
- Bottom navigation bar

### 🎯 Chung
- **Auto play** khi video vào viewport (IntersectionObserver, threshold 60%)
- **Auto pause** khi cuộn qua
- Click vào video để play/pause
- Nút tắt/bật âm thanh
- Ticker nhạc nền
- Like animation
- Scroll snap (cuộn từng video)

---

## 🎨 Design System

| Token | Giá trị |
|-------|---------|
| Background | `#0A0A0A` |
| Accent Pink | `#FF2D55` |
| Accent Cyan | `#00F5FF` |
| Accent Purple | `#7C3AED` |
| Font Display | Syne (Google Fonts) |
| Font Body | DM Sans (Google Fonts) |

---

## 🔧 Thêm video thật

Trong `data/mockVideos.ts`, thay `videoUrl` bằng URL video thật (mp4, m3u8...):

```ts
{
  id: '7',
  videoUrl: 'https://your-cdn.com/video.mp4',
  authorName: 'Tên tác giả',
  description: 'Mô tả video #tag1 #tag2',
  likesCount: 10000,
  commentsCount: 500,
  sharesCount: 200,
  avatar: 'https://avatar-url.com/img.jpg',
  musicName: 'Tên bài nhạc',
}
```

---

## 🔌 Kết nối API thật

Trong `components/VideoFeed.tsx`, thay `mockVideos` bằng fetch từ API:

```ts
const [videos, setVideos] = useState<Video[]>([]);

useEffect(() => {
  fetch('/api/videos')
    .then(r => r.json())
    .then(setVideos);
}, []);
```

---

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Google Fonts** (Syne + DM Sans)
- **IntersectionObserver API** (auto play/pause)
