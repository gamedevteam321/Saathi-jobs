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
    title: "Watch.Listen.Apply",
    description: (
      <span>
        Complex Job Descriptions become Simple Short Video Job Posts
        <br />
        AI/ML algorithms for an Instant Match
      </span>
    ),
    phoneImage: "images/JobPost.png"
  },
  {
    id: "stories",
    title: <>24/7 <span className='bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent'>AI Recruiter</span></>,
    description:  <>Instant interview with Employers AI Avatar</>,
    phoneImage: "images/AIinterview.png"
  },
];

type FeatureCarouselProps = {
  selectedIndex?: number;
  onIndexChange?: (index: number) => void;
};

export default function JobReelContainerMobile({ selectedIndex = 0, onIndexChange }: FeatureCarouselProps) {
  // Reference to the main section element
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Handle index change if controlled externally
  useEffect(() => {
    if (onIndexChange && typeof selectedIndex !== 'undefined') {
      onIndexChange(selectedIndex);
    }
  }, [selectedIndex, onIndexChange]);

  return (
    <div 
      id="jobreels"
      ref={sectionRef}
      className="relative bg-black backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 mx-auto my-8 w-[280px] md:hidden h-fit"
    >
      <section 
        className=" relative overflow-hidden"
      >
        <div className="inset-0 flex flex-col justify-start px-2 sm:px-4 pt-2">
          <div className="slider-container mx-auto flex flex-col gap-2 sm:gap-5 items-center mt-0 sm:-mt-36">
           
            {/* Video Display */}
            <div className="relative h-full flex flex-col items-center justify-center bg-black mt-6 w-full px-4">
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] aspect-[9/16] mx-auto overflow-hidden rounded-lg bg-black">
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
                     
                    }}
                  >
                    {feature.phoneImage.endsWith('.mp4') ? (
                      <video
                        className="w-full h-full object-contain max-w-[240px] sm:max-w-[280px] mx-auto"
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
                        className="w-full h-full object-contain max-w-[240px] sm:max-w-[280px] mx-auto"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Feature Text */}
            <div className="relative min-h-[180px] sm:min-h-[320px] flex flex-col justify-center items-center text-center mt-1 w-full px-4 overflow-visible ">
              <div className="h-full flex items-center justify-center w-full">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`absolute w-full transition-all duration-500 linear   ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                    style={{ 
                      willChange: 'transform, opacity',
                      transition: 'all 0.5s linear',
                      transitionDelay: '0.2s'
                    }}
                  >
                    <div className="w-full h-full flex flex-col items-center space-y-4">
                      <h2 className="text-xl sm:text-3xl font-regular text-white font-['Helvetica'] pb-2">
                        {feature.title}
                      </h2>
                      <p className="text-md sm:text-base text-gray-400 pb-4 sm:pb-7 max-w-[280px] mx-auto font-['Helvetica'] text-[18px] font-light italic leading-tight">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots for mobile (horizontal, centered) */}
            <div className="hidden flex flex-row items-center justify-center space-x-4 w-full mt-2 mb-2">
              {features.map((_, dotIdx) => (
                <div
                  key={`progress-mobile-${dotIdx}`}
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
          </div>
        </div>
      </section>
    </div>
  );
}