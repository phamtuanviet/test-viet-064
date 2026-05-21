import { Video } from '@/types/video';

export const mockVideos: Video[] = [
  {
    id: '1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    authorName: 'Minh Tuấn',
    description: 'Cafe sáng cuối tuần cùng hội bạn ☕✨ #coffee #weekend #vlog',
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
    description: 'Một ngày chạy xe quanh thành phố 🌆 #city #travel #lifestyle',
    likesCount: 89300,
    commentsCount: 1540,
    sharesCount: 4200,
    avatar: 'https://i.pravatar.cc/150?img=5',
    musicName: 'Trending Sound',
    tags: ['cooking', 'challenge'],
  },
  {
    id: '3',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    authorName: 'Hoàng Long',
    description: 'Edit cinematic mới nhất của mình 🎬🔥 #cinematic #edit #film',
    likesCount: 256000,
    commentsCount: 7800,
    sharesCount: 15600,
    avatar: 'https://i.pravatar.cc/150?img=8',
    musicName: 'Tây Bắc - Nhạc dân tộc',
    tags: ['sapa', 'travel', 'vietnam'],
  },
  {
    id: '4',
    videoUrl: 'https://www.w3schools.com/howto/rain.mp4',
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
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    authorName: 'Ryo Gaming',
    description: 'Healing cùng biển xanh và hoàng hôn 🌊🌅 #ocean #relax #travel',
    likesCount: 312000,
    commentsCount: 12400,
    sharesCount: 23000,
    avatar: 'https://i.pravatar.cc/150?img=12',
    musicName: 'Epic Gaming Music',
    tags: ['pc', 'gaming', 'build'],
  },
  {
    id: '6',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    authorName: 'Mai Phương',
    description: 'Animation huyền thoại tuổi thơ 🐰✨ #animation #funny #classic',
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
