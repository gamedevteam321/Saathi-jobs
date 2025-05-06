"use client";

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';

interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface VideoTickerProps {
  videos: VideoItem[];
  title: string;
}

export default function VideoTickerComponent({ videos, title }: VideoTickerProps) {
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{[key: string]: HTMLVideoElement}>({});

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Ticker animation effect
  useEffect(() => {
    if (isMobile) return; // Don't animate on mobile
    
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      if (!tickerRef.current || isHovering) return;
      
      position -= 1; // Adjust speed here
      
      // Reset position when one full item has scrolled out of view
      if (position <= -300) { // Assuming each card is roughly 300px wide
        position = 0;
        // Move first item to the end for continuous looping
        if (tickerRef.current.firstChild) {
          tickerRef.current.appendChild(tickerRef.current.firstChild);
        }
      }
      
      if (tickerRef.current) {
        tickerRef.current.style.transform = `translateX(${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering, isMobile]);

  const handleCardHover = (id: string, isHovering: boolean) => {
    if (isMobile) return; // Don't handle hover on mobile
    
    setIsHovering(isHovering ? id : null);
    
    // Play or pause video based on hover state
    const videoElement = videoRefs.current[id];
    if (videoElement) {
      if (isHovering) {
        videoElement.play().catch(e => console.log("Video play failed:", e));
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  };

  const handleCardClick = (id: string) => {
    if (!isMobile) return; // Only handle clicks on mobile
    
    // Toggle video playback on mobile
    const videoElement = videoRefs.current[id];
    if (videoElement) {
      if (isHovering === id) {
        videoElement.pause();
        videoElement.currentTime = 0;
        setIsHovering(null);
      } else {
        // Pause any other playing videos first
        if (isHovering) {
          const prevVideo = videoRefs.current[isHovering];
          if (prevVideo) {
            prevVideo.pause();
            prevVideo.currentTime = 0;
          }
        }
        
        videoElement.play().catch(e => console.log("Video play failed:", e));
        setIsHovering(id);
      }
    }
  };

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mb-6">{title}</h2>
      
      <div className="relative">
        <div 
          ref={tickerRef}
          className={`flex ${isMobile ? 'overflow-x-auto pb-4' : 'transition-transform'}`}
          style={isMobile ? {} : { willChange: 'transform' }}
        >
          {videos.map((video) => (
            <div 
              key={video.id}
              className={`relative flex-shrink-0 mx-2 transition-all duration-300 ${
                isHovering === video.id 
                  ? 'w-[450px] h-[250px] md:z-10 md:scale-105' 
                  : 'w-[280px] md:w-[360px] h-[160px] md:h-[200px]'
              }`}
              onMouseEnter={() => handleCardHover(video.id, true)}
              onMouseLeave={() => handleCardHover(video.id, false)}
              onClick={() => handleCardClick(video.id)}
            >
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                {/* Video element (hidden until hover/click) */}
                <video
                  ref={el => {
                    if (el) videoRefs.current[video.id] = el;
                  }}
                  src={video.videoUrl}
                  className={`absolute inset-0 w-full h-full object-cover ${
                    isHovering === video.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  muted
                  playsInline
                  loop
                />
                
                {/* Thumbnail image (shown when not hovering/active) */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  isHovering === video.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#333';
                      target.style.display = 'block';
                    }}
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white font-bold truncate">{video.title}</h3>
                </div>

                {/* Play indicator for mobile */}
                {isMobile && (
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    isHovering === video.id ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 