export interface Video {
  id: string;
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  avatar: string;
  musicName?: string;
  tags?: string[];
}
