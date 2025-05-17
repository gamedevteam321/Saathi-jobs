import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoActionCardProps {
  title: string;
  gradientText: string;
  videoId: string;
  videoSrc: string;
  thumbnailSrc: string;
  isPlaying: boolean;
  onVideoClick: (videoId: string) => void;
  onShowMore: (section: string) => void;
  section: string;
  gradientBg: string;
}

const VideoActionCard: React.FC<VideoActionCardProps> = ({
  title,
  gradientText,
  videoId,
  videoSrc,
  thumbnailSrc,
  isPlaying,
  onVideoClick,
  onShowMore,
  section,
  gradientBg,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <span className="text-lg lg:text-2xl font-bold text-white text-center mb-2">
        {title.split(' ').map((word, index) => (
          index === 0 ? word : <span key={index} className={gradientText}> {word}</span>
        ))}
      </span>
      <div 
        className="relative w-[220px] lg:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => onVideoClick(videoId)}
      >
        <video 
          id={videoId}
          src={videoSrc}
          className="w-full h-full object-contain"
          loop
          playsInline
          muted
          preload="none"
          poster={thumbnailSrc}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FFC01D] flex items-center justify-center">
              <FaPlay className="text-black text-2xl ml-1" />
            </div>
          </div>
        )}
      </div>
      <button 
        onClick={() => onShowMore(section)}
        className={`mt-4 px-2 py-1 rounded ${gradientBg} text-black font-semibold hover:scale-105 transition-transform`}
      >
        Show More
      </button>
    </div>
  );
};

export default VideoActionCard; 