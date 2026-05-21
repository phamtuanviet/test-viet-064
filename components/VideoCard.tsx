'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';
import { Video } from '@/types/video';
import ActionButtons from './ActionButtons';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
}

export default function VideoCard({ video, isActive }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const playIconTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect screen size on client only (avoids SSR mismatch)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto play/pause — ONE ref, ONE video element
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isActive) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (playIconTimer.current) clearTimeout(playIconTimer.current);
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
    setShowPlayIcon(true);
    playIconTimer.current = setTimeout(() => setShowPlayIcon(false), 1200);
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    setProgress((vid.currentTime / vid.duration) * 100);
  }, []);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    const rect = e.currentTarget.getBoundingClientRect();
    vid.currentTime = ((e.clientX - rect.left) / rect.width) * vid.duration;
  }, []);

  // ─── Shared UI pieces ──────────────────────────────────────────
  const PlayPauseOverlay = () =>
    showPlayIcon ? (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fade-in">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
        >
          {isPlaying
            ? <Pause size={28} fill="white" color="white" />
            : <Play  size={28} fill="white" color="white" />}
        </div>
      </div>
    ) : null;

  const MuteBtn = ({ onClick }: { onClick: (e: React.MouseEvent) => void }) => (
    <button
      onClick={onClick}
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {isMuted ? <VolumeX size={16} color="white" /> : <Volume2 size={16} color="white" />}
    </button>
  );

  const ProgressBar = () => (
    <div
      className="w-full h-0.5 rounded-full cursor-pointer overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.2)' }}
      onClick={handleProgressClick}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #FF2D55, #7C3AED)',
          transition: 'width 0.2s linear',
        }}
      />
    </div>
  );

  const MusicTicker = ({ small }: { small?: boolean }) =>
    video.musicName ? (
      <div
        className="flex items-center gap-2 rounded-full overflow-hidden"
        style={{
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.1)',
          width: 'fit-content',
          maxWidth: small ? '220px' : '100%',
          padding: small ? '4px 12px' : '6px 14px',
        }}
      >
        <span style={{ fontSize: small ? '11px' : '12px' }}>🎵</span>
        <div className="overflow-hidden" style={{ maxWidth: '160px' }}>
          <span
            className="ticker-content text-white"
            style={{ fontSize: small ? '11px' : '12px', fontFamily: 'var(--font-dm-sans)' }}
          >
            {video.musicName}&nbsp;&nbsp;&nbsp;{video.musicName}&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    ) : null;

  // ─── Single <video> element ────────────────────────────────────
  const videoEl = (
    <video
      ref={videoRef}
      src={video.videoUrl}
      className="w-full h-full object-cover"
      loop
      muted={isMuted}
      playsInline
      preload="auto"
      onTimeUpdate={handleTimeUpdate}
    />
  );

  // ─── DESKTOP layout ────────────────────────────────────────────
  if (isDesktop) {
    return (
      <div
        className="video-snap-item flex items-center justify-center relative"
        style={{ height: '100dvh', background: 'var(--bg-primary)' }}
      >
        {/* 9:16 frame */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            aspectRatio: '9/16',
            height: 'min(90vh, calc(90vw * 9/16))',
            maxHeight: '90vh',
            background: '#000',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.7)',
          }}
          onClick={togglePlay}
        >
          {videoEl}
          <div className="absolute inset-0 video-overlay pointer-events-none" />
          <PlayPauseOverlay />

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={video.avatar}
                alt={video.authorName}
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: '2px solid rgba(255,255,255,0.3)' }}
              />
              <p className="font-bold text-white text-sm" style={{ fontFamily: 'var(--font-syne)' }}>
                @{video.authorName}
              </p>
            </div>
            <p
              className="text-white text-sm mb-4 leading-relaxed"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {video.description}
            </p>
            <div className="mb-4"><MusicTicker /></div>
            <ProgressBar />
          </div>

          {/* Mute — top right */}
          <div className="absolute top-4 right-4">
            <MuteBtn onClick={toggleMute} />
          </div>
        </div>

        {/* Action buttons — right of frame */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            right: 'calc(50% - min(45vh, calc(45vw * 9/16)) - 80px)',
            bottom: '80px',
          }}
        >
          <ActionButtons video={video} />
        </div>
      </div>
    );
  }

  // ─── MOBILE layout ─────────────────────────────────────────────
  return (
    <div
      className="video-snap-item relative w-full"
      style={{ height: '100dvh' }}
      onClick={togglePlay}
    >
      {videoEl}
      <div className="absolute inset-0 video-overlay pointer-events-none" />
      <PlayPauseOverlay />

      {/* Mute — top right */}
      <div className="absolute top-12 right-4" onClick={(e) => e.stopPropagation()}>
        <MuteBtn onClick={toggleMute} />
      </div>

      {/* Info — bottom left */}
      <div
        className="absolute bottom-0 left-0 right-16 p-4"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 72px)' }}
      >
        <p className="font-bold text-white mb-1.5" style={{ fontFamily: 'var(--font-syne)', fontSize: '15px' }}>
          @{video.authorName}
        </p>
        <p
          className="text-white text-sm mb-3 leading-snug"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            textShadow: '0 1px 4px rgba(0,0,0,0.9)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {video.description}
        </p>
        <div className="mb-3"><MusicTicker small /></div>
        <ProgressBar />
      </div>

      {/* Action buttons — right */}
      <div
        className="absolute right-3 flex flex-col items-center gap-1"
        style={{ bottom: 'calc(env(safe-area-inset-bottom) + 76px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <ActionButtons video={video} />
      </div>
    </div>
  );
}
