'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { mockVideos } from '@/data/mockVideos';
import VideoCard from './VideoCard';

export default function VideoFeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set up IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const setCardRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      cardRefs.current[index] = el;
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className="video-scroll-container"
      style={{ height: '100dvh' }}
    >
      {mockVideos.map((video, index) => (
        <div
          key={video.id}
          ref={(el) => setCardRef(el, index)}
          style={{ height: '100dvh' }}
        >
          <VideoCard video={video} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
}
