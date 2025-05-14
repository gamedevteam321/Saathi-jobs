"use client";

import { useState, useEffect, ReactNode, useRef } from "react";

type FeatureItem = {
  id: string;
  title: string | ReactNode;
  description: string | ReactNode;
  phoneImage: string;
};

const features: FeatureItem[] = [
  {
    id: "explore",
    title: "Reels not Resumes",
    description: <>Disruptive hiring with short video reels</>,
    phoneImage: "images/JobReel.png"
  },
  {
    id: "reels",
    title: "Watch Listen Apply",
    description:  <>Complex Job Descriptions become Simple Short Video Job Posts <br/> AI/ML algorithms for an Instant Match</>,
    phoneImage: "images/JobPost.png"
  },
  {
    id: "stories",
    title: <>24/7 <span className='bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent'>AI Recruiter</span></>,
    description:  <>Instant interview with Employers AI Avatar</>,
    phoneImage: "images/AIinterview.png"
  },
];

type JobReelContainerProps = {
  selectedIndex?: number;
  onIndexChange?: (index: number) => void;
};

export default function JobReelContainer({ selectedIndex = 0, onIndexChange }: JobReelContainerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (onIndexChange && typeof selectedIndex !== 'undefined') {
      onIndexChange(selectedIndex);
    }
  }, [selectedIndex, onIndexChange]);

  return (
    <div 
      id="jobreels"
      ref={sectionRef}
      className="relative bg-black min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Video Display */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[216px] sm:max-w-[252px] md:max-w-[432px] aspect-[9/16] mx-auto overflow-hidden rounded-lg bg-black">
              {features.map((feature, index) => (
                <div
                  key={`video-${feature.id}`}
                  className={`absolute inset-0 transition-all duration-500 linear bg-black ${
                    selectedIndex === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{ 
                    willChange: 'transform, opacity, scale',
                    transition: 'all 0.5s linear',
                    transitionDelay: '0.2s',
                    backgroundColor: 'black'
                  }}
                >
                  {feature.phoneImage.endsWith('.mp4') ? (
                    <video
                      className="w-full h-full object-contain max-w-[216px] sm:max-w-[252px] md:max-w-[432px] mx-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={feature.phoneImage} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={feature.phoneImage}
                      alt={typeof feature.title === 'string' ? feature.title : ''}
                      className="w-full h-full object-contain max-w-[216px] sm:max-w-[252px] md:max-w-[432px] mx-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Feature Text */}
          <div className="relative flex flex-col justify-center">
            <div className="h-full flex items-center justify-center md:justify-end">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute w-full transition-all duration-500 linear bg-black ${
                    selectedIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4 pointer-events-none'
                  }`}
                  style={{ 
                    willChange: 'transform, opacity',
                    transition: 'all 0.5s linear',
                    transitionDelay: '0.2s',
                    backgroundColor: 'black'
                  }}
                >
                  <div className="w-full h-full flex flex-row items-start space-x-4">
                    {/* Pagination dots for desktop only (vertical) */}
                    <div className="md:flex flex-col items-center justify-center space-y-4 mr-2 mt-3">
                      {features.map((_, dotIdx) => (
                        <div
                          key={`progress-${dotIdx}`}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            selectedIndex === dotIdx
                              ? 'bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01]'
                              : 'bg-gray-600'
                          }`}
                          onClick={() => onIndexChange && onIndexChange(dotIdx)}
                          style={{ cursor: 'pointer' }}
                        />
                      ))}
                    </div>
                    {/* Feature text on the right */}
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-regular text-white font-['Helvetica'] pb-2 md:pb-3">
                        {feature.title}
                      </h2>
                      <p className="text-md sm:text-base text-gray-400 mb-2 sm:mb-6 max-w-[280px] sm:max-w-none mx-auto md:mx-0 font-['Helvetica'] md:text-[18px] font-light italic leading-tight">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}