"use client";

import { useState, useEffect, ReactNode } from "react";

type FeatureItem = {
  id: string;
  title: string;
  description: string | ReactNode;
  phoneImage: string;
};

const features: FeatureItem[] = [
  {
    id: "explore",
    title: "Reels not Resumes",
    description: <><p>Disruptive hiring with short video reels</p></>,
    phoneImage: "videos/jobreels.mp4"
  },
  {
    id: "reels",
    title: "Watch Listen Apply",
    description:  <><p>Complex Job Descriptions become Simple Short Video Job Posts</p><p>AI/ML algorithms for an Instant Match</p></>,
    phoneImage: "videos/emp.mp4"
  },
  {
    id: "stories",
    title: "24/7 Ai Recruiter",
    description:  <><p>Instant interview with Employers Ai Avatar</p></>,
    phoneImage: "videos/ai-interviewer.mp4"
  },
];

export default function FeatureCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((current) => (current + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="bg-black py-6 md:py-10 overflow-hidden px-5 md:px-16 space-y-1">
        <div className="flex flex-col h-full justify-left">
              <h1 className="text-3xl md:text-7xl font-bold text-white"><span>Job</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Reels</span></h1>
              <p className="text-gray-600 italic text-sm md:text-mb py-1">The Instagram of Jobs</p>
        </div>
      <div className="container mx-auto px-5 md:px-10 lg:px-16 space-y-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
          {/* Left Side - Feature Text */}
          <div className="relative min-h-[400px] flex flex-col justify-center">
            <div className="h-full">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`transition-all duration-500 ease-in-out ${
                    selectedIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute pointer-events-none'
                  }`}
                >
                  <div className="p-4">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{feature.title}</h2>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex md:flex-col gap-2 mt-6 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-ml-8">
              {features.map((feature, index) => (
                <button
                  key={`dot-${feature.id}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? 'bg-pink-500 scale-150'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Video Display */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-[300px] aspect-[9/16] mx-auto overflow-hidden rounded-lg">
              {features.map((feature, index) => (
                <div
                  key={`video-${feature.id}`}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    selectedIndex === index
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {feature.phoneImage.endsWith('.mp4') ? (
                    <video
                      className="w-full h-full object-cover"
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
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
