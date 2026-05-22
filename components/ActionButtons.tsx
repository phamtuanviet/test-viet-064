'use client';

import { useRef, useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Music } from 'lucide-react';
import { Video } from '@/types/video';
import { formatCount } from '@/data/mockVideos';

interface ActionButtonsProps {
  video: Video;
}

export default function ActionButtons({ video }: ActionButtonsProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(video.likesCount);
  const [likeAnimating, setLikeAnimating] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLike = () => {
  // chặn click liên tục khi đang animate
  if (likeAnimating) return;

  setLikeAnimating(true);

  setLiked((prev) => {
    setLikeCount((count) => (prev ? count - 1 : count + 1));
    return !prev;
  });

  // clear timeout cũ
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    setLikeAnimating(false);
  }, 700);
};

  const ActionBtn = ({
    icon,
    label,
    onClick,
    active = false,
    activeColor = '#FF2D55',
    animating = false,
  }: {
    icon: React.ReactNode;
    label: string | number;
    onClick?: () => void;
    active?: boolean;
    activeColor?: string;
    animating?: boolean;
  }) => (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 group"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 relative overflow-hidden"
        style={{
          background: active
            ? `${activeColor}22`
            : 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${active ? `${activeColor}44` : 'rgba(255,255,255,0.12)'}`,
          transform: animating ? 'scale(0.9)' : 'scale(1)',
        }}
      >
        <span
          className={animating ? 'heart-liked' : ''}
          style={{
            color: active ? activeColor : 'rgba(255,255,255,0.9)',
            display: 'flex',
            transition: 'color 0.2s',
          }}
        >
          {icon}
        </span>
      </div>
      <span
        className="text-xs font-semibold tabular-nums"
        style={{
          color: active ? activeColor : 'rgba(255,255,255,0.8)',
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '12px',
          textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        }}
      >
        {typeof label === 'number' ? formatCount(label) : label}
      </span>
    </button>
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="relative mb-2">
        <div
          className="w-11 h-11 rounded-full p-0.5"
          style={{
            background: 'linear-gradient(135deg, #FF2D55, #7C3AED)',
          }}
        >
          <img
            src={video.avatar}
            alt={video.authorName}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Follow button */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
          style={{
            background: '#FF2D55',
            fontSize: '14px',
            lineHeight: 1,
            boxShadow: '0 2px 8px rgba(255,45,85,0.5)',
          }}
        >
          +
        </div>
      </div>

      {/* Like */}
      <ActionBtn
        icon={
          <Heart
            size={22}
            fill={liked ? '#FF2D55' : 'transparent'}
            strokeWidth={1.8}
          />
        }
        label={likeCount}
        onClick={handleLike}
        active={liked}
        activeColor="#FF2D55"
        animating={likeAnimating}
      />

      {/* Comment */}
      <ActionBtn
        icon={<MessageCircle size={22} strokeWidth={1.8} />}
        label={video.commentsCount}
      />

      {/* Share */}
      <ActionBtn
        icon={<Share2 size={22} strokeWidth={1.8} />}
        label={video.sharesCount}
      />

      {/* Save */}
      <ActionBtn
        icon={
          <Bookmark
            size={22}
            fill={saved ? '#00F5FF' : 'transparent'}
            strokeWidth={1.8}
          />
        }
        label="Lưu"
        onClick={() => setSaved(!saved)}
        active={saved}
        activeColor="#00F5FF"
      />

      {/* Music disc */}
      <div className="mt-1">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center animate-spin-slow"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a, #333)',
            border: '2px solid rgba(255,255,255,0.15)',
            boxShadow: '0 0 12px rgba(0,245,255,0.2)',
          }}
        >
          <Music size={14} style={{ color: 'var(--accent-cyan)' }} />
        </div>
      </div>
    </div>
  );
}
