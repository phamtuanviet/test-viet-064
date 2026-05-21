import { Video } from '@/types/video';

export const mockVideos: Video[] = [
  {
    id: '1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    authorName: 'Minh Tuấn',
    description: 'Buổi sáng đẹp trai check in Hà Nội 🌅 #hanoi #morning #vlog',
    likesCount: 142500,
    commentsCount: 3200,
    sharesCount: 8900,
    avatar: 'https://i.pravatar.cc/150?img=1',
    musicName: 'Nhạc nền - Sơn Tùng MTP',
    tags: ['hanoi', 'morning', 'vlog'],
  },
  {
    id: '2',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    authorName: 'Linh Chi',
    description: 'Thử thách nấu ăn 1 phút 😂 kết quả bất ngờ lắm nha mọi người ơi!! #cooking #challenge',
    likesCount: 89300,
    commentsCount: 1540,
    sharesCount: 4200,
    avatar: 'https://i.pravatar.cc/150?img=5',
    musicName: 'Trending Sound',
    tags: ['cooking', 'challenge'],
  },
  {
    id: '3',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    authorName: 'Hoàng Long',
    description: 'Khám phá Sapa từ sáng đến tối 🏔️ view đỉnh quá trời #sapa #travel #vietnam',
    likesCount: 256000,
    commentsCount: 7800,
    sharesCount: 15600,
    avatar: 'https://i.pravatar.cc/150?img=8',
    musicName: 'Tây Bắc - Nhạc dân tộc',
    tags: ['sapa', 'travel', 'vietnam'],
  },
  {
    id: '4',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    authorName: 'Hana Flower',
    description: 'POV: Một ngày làm barista ở Đà Lạt ☕ #dalat #coffee #barista #aesthetic',
    likesCount: 178000,
    commentsCount: 4300,
    sharesCount: 9100,
    avatar: 'https://i.pravatar.cc/150?img=10',
    musicName: 'Lo-fi Chill Beats',
    tags: ['dalat', 'coffee', 'barista'],
  },
  {
    id: '5',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    authorName: 'Ryo Gaming',
    description: 'Build PC gaming 50 triệu đồng liệu có đáng không? 💻🔥 #pc #gaming #build',
    likesCount: 312000,
    commentsCount: 12400,
    sharesCount: 23000,
    avatar: 'https://i.pravatar.cc/150?img=12',
    musicName: 'Epic Gaming Music',
    tags: ['pc', 'gaming', 'build'],
  },
  {
    id: '6',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    authorName: 'Mai Phương',
    description: 'Outfit mùa hè không sợ nắng 🌞 link áo dưới bio nha mọi người #fashion #ootd #summer',
    likesCount: 95600,
    commentsCount: 2100,
    sharesCount: 6700,
    avatar: 'https://i.pravatar.cc/150?img=16',
    musicName: 'Summer Vibes 2024',
    tags: ['fashion', 'ootd', 'summer'],
  },
];

export function formatCount(count: number): string {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}
