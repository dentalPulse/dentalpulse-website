"use client";

import React, { useRef, useState } from 'react';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/fysybyy3/video/upload';
const VIDEO_VERSION_PATH = 'v1794821946/dental-pulse-video';

// Optimized Cloudinary URLs for fast loading on mobile & desktop
const PRODUCT_TOUR_VIDEO_MOBILE = `${CLOUDINARY_BASE}/w_720,q_auto:good,f_mp4,vc_auto/${VIDEO_VERSION_PATH}.mp4`;
const PRODUCT_TOUR_VIDEO_DESKTOP = `${CLOUDINARY_BASE}/q_auto:good,f_mp4,vc_auto/${VIDEO_VERSION_PATH}.mp4`;
const PRODUCT_TOUR_VIDEO_FALLBACK = `${CLOUDINARY_BASE}/${VIDEO_VERSION_PATH}.mp4`;
const PRODUCT_TOUR_POSTER_URL = `${CLOUDINARY_BASE}/so_0,f_auto,q_auto,w_1200/${VIDEO_VERSION_PATH}.jpg`;

export function ProductPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsBuffering(true);
    setIsPlaying(true);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsBuffering(false);
        })
        .catch(() => {
          setIsBuffering(false);
          setIsPlaying(false);
        });
    }
  };

  return (
    <section className="relative z-20 px-4 sm:px-6 -mt-24 sm:-mt-36 md:-mt-44 pb-12 sm:pb-20">
      <div className="max-w-[1180px] mx-auto relative">
        {/* macOS Browser Chrome Window */}
        <div className="bg-[#0A0A0A] rounded-[18px] sm:rounded-[22px] p-1.5 sm:p-2.5 shadow-[0_0_0_1px_#2A2A2A,0_60px_100px_-40px_rgba(0,0,0,0.6)] text-left relative overflow-hidden">
          {/* Window Chrome Titlebar */}
          <div className="flex items-center gap-1.5 px-2 sm:px-3 pt-1 pb-2 sm:pb-3">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3A3A3A] inline-block" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3A3A3A] inline-block" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3A3A3A] inline-block" />
            <span className="ml-2 sm:ml-4 font-mono text-[10px] sm:text-[12px] text-[#9A9A9A] truncate">
              app.dentalpulseai.com/overview
            </span>
          </div>

          {/* Video Player with Optimized Thumbnail & Mobile Stream */}
          <div className="relative rounded-[12px] sm:rounded-[14px] overflow-hidden bg-black">
            <video
              ref={videoRef}
              poster={PRODUCT_TOUR_POSTER_URL}
              controls={isPlaying}
              playsInline
              preload="auto"
              onPlaying={() => {
                setIsBuffering(false);
                setIsPlaying(true);
              }}
              onWaiting={() => setIsBuffering(true)}
              onCanPlay={() => setIsBuffering(false)}
              onPause={() => {
                setIsBuffering(false);
                setIsPlaying(false);
              }}
              onEnded={() => {
                setIsBuffering(false);
                setIsPlaying(false);
              }}
              className="w-full h-auto aspect-video block bg-black rounded-[12px] sm:rounded-[14px] object-cover"
            >
              <source src={PRODUCT_TOUR_VIDEO_MOBILE} type="video/mp4" media="(max-width: 767px)" />
              <source src={PRODUCT_TOUR_VIDEO_DESKTOP} type="video/mp4" />
              <source src={PRODUCT_TOUR_VIDEO_FALLBACK} type="video/mp4" />
            </video>

            {/* Buffering Spinner (if slow mobile network) */}
            {isPlaying && isBuffering && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none">
                <div className="w-12 h-12 rounded-full border-4 border-[#12F095]/30 border-t-[#12F095] animate-spin" />
              </div>
            )}

            {/* Product Tour Play Button Overlay (shown when video is not actively playing) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center gap-3 sm:gap-5 p-4 transition-all duration-300 pointer-events-none">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  aria-label="Play product tour video"
                  className="pointer-events-auto w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-none bg-[#12F095] text-[#0A0A0A] flex items-center justify-center cursor-pointer shadow-[0_0_0_8px_rgba(18,240,149,0.22),0_0_0_18px_rgba(18,240,149,0.08),0_20px_50px_-10px_rgba(0,0,0,0.5)] sm:shadow-[0_0_0_12px_rgba(18,240,149,0.22),0_0_0_26px_rgba(18,240,149,0.08),0_24px_60px_-10px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-0.5 sm:ml-1 sm:w-[34px] sm:h-[34px]"
                  >
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="pointer-events-auto bg-white text-[#0A0A0A] font-bold text-[12px] sm:text-[15px] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Watch the product tour • 0:47</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
