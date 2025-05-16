import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { FaPlay } from "react-icons/fa";

interface Video {
    videoUrl: string;
    extraText?: string;
}

// Helper function to extract YouTube video IDs
function getVideoId(videoUrl: string): string | null {
    if (videoUrl.includes("shorts/")) {
    return videoUrl.split("shorts/")[1].split("?")[0];
    } else if (videoUrl.includes("watch?v=")) {
    return videoUrl.split("watch?v=")[1].split("&")[0];
    } else if (videoUrl.includes("youtu.be/")) {
    return videoUrl.split("youtu.be/")[1].split("?")[0];
  }
  return null;
}

interface VideoCardProps {
  video: Video;
  paused: boolean;
  isActive: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const VideoCard = ({ video, paused, isActive, onPrev, onNext }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else if (isActive) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  }, [paused, isActive]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div 
      className="relative w-[220px] lg:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={handleVideoClick}
    >
      <video 
        ref={videoRef}
        src={video.videoUrl}
        className="w-full h-full object-contain"
        loop
        playsInline
        muted
        preload="none"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FFC01D] flex items-center justify-center">
            <FaPlay className="text-black text-2xl ml-1" />
          </div>
        </div>
      )}
      {video.extraText && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
          {video.extraText}
        </div>
      )}
    </div>
  );
};

export default function VideoSlider( {videos}: {videos: Video[]}) {
  //const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
   
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   

  if (videos.length === 0) return <div>Loading...</div>;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(currentX);
    setLastX(currentX);
    setLastTime(Date.now());
    setVelocity(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = currentX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    setDragOffset(currentX - startX);
    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    const velocityThreshold = 0.5;
    
    if (Math.abs(dragOffset) > threshold || Math.abs(velocity) > velocityThreshold) {
      if (dragOffset > 0 || velocity > 0) {
        handlePrev();
            } else {
        handleNext();
      }
    }
    
    setDragOffset(0);
    setVelocity(0);
  };

  const getCardWidth = () => {
    if (windowWidth < 768) return "90vw";
    if (windowWidth < 1024) return "240px";
    return "280px";
  };

  const getVisibleIndices = () => {
    const indices = [];
    // Always show 5 cards (-2, -1, 0, 1, 2)
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + videos.length) % videos.length;
      indices.push(index);
    }
    return indices;
  };

  const getPosition = (index: number) => {
    const relativeIndex = (index - currentIndex + videos.length) % videos.length;
    const adjustedIndex = relativeIndex > 2 ? relativeIndex - videos.length : relativeIndex;
    const cardWidth = parseInt(getCardWidth());
    const spacing = windowWidth < 768 ? 20 : 15; // Spacing between cards
    const baseOffset = adjustedIndex * (cardWidth + spacing);
    const dragAdjustment = isDragging ? (dragOffset / 2) : 0; // Reduce drag effect
    return `${baseOffset + dragAdjustment}px`;
  };

  const getCardStyle = (index: number) => {
    const relativeIndex = (index - currentIndex + videos.length) % videos.length;
    const adjustedIndex = relativeIndex > 2 ? relativeIndex - videos.length : relativeIndex;
    const isCenter = adjustedIndex === 0;
    const distance = Math.abs(adjustedIndex);
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;

    if (distance === 1) {
      scale = 0.85;
      opacity = 0.8;
    } else if (distance === 2) {
      scale = 0.7;
      opacity = 0.6;
    }

    if (isCenter) {
      scale = 1;
      opacity = 1;
      zIndex = 10;
    }

    return {
      transform: `translateX(${getPosition(index)}) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

    return (
        <div
          className="relative w-full h-[80vh] md:h-[90vh] bg-transparent overflow-hidden flex items-center justify-center"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-5 pointer-events-none">
            <button
                onClick={handlePrev}
                className="z-50 bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] text-black border-none rounded-full w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity md:block hidden pointer-events-auto"
            >
                {"<"}
            </button>

            <button
                onClick={handleNext}
                className="z-50 bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] text-black border-none rounded-full w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity md:block hidden pointer-events-auto"
            >
                {">"}
            </button>
          </div>

          <div className="relative w-full h-full flex justify-center items-center">
            <div className="relative h-full flex justify-center items-center">
              {getVisibleIndices().map((index) => (
                <div
                  key={index}
                  style={{ 
                    width: getCardWidth(),
                    position: 'absolute',
                    ...getCardStyle(index),
                    transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'grab',
                  }}
                  className="h-full"
                >
                  <VideoCard
                    video={videos[index]}
                    paused={index !== currentIndex}
                    isActive={index === currentIndex}
                    onPrev={handlePrev}
                    onNext={handleNext}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    );
} 