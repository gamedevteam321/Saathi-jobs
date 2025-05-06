"use client";

import { useState, useEffect, ReactNode, useRef } from "react";

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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 50;
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTime = useRef(0);
  const SCROLL_COOLDOWN = 300;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isTransitioning) {
          setIsFullScreen(true);
          setSelectedIndex(0);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  const scrollToSection = (direction: 'up' | 'down') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const section = sectionRef.current;
    if (!section) return;

    // Get the target section
    const targetSection = direction === 'down' 
      ? sectionRef.current?.nextElementSibling 
      : sectionRef.current?.previousElementSibling;

    if (!targetSection) return;

    // Update state before scrolling
    setIsFullScreen(false);

    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      // Scroll to target section
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Reset the section after scroll completes
      transitionTimeout.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isFullScreen || isTransitioning) return;

      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
      lastScrollTime.current = now;
      
      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;
      
      // Check if we've accumulated enough scroll to trigger a change
      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        const direction = scrollAccumulator.current > 0 ? 'down' : 'up';
        scrollDirection.current = direction;
        scrollAccumulator.current = 0; // Reset accumulator

        // Handle section transitions
        if (direction === 'down' && selectedIndex === features.length - 1) {
          scrollToSection('down');
          return;
        }

        if (direction === 'up' && selectedIndex === 0) {
          scrollToSection('up');
          return;
        }

        // Handle feature transitions
        setSelectedIndex((current) => {
          const next = direction === 'down' ? current + 1 : current - 1;
          return next;
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isFullScreen, selectedIndex, isTransitioning]);

  return (
    <div 
      ref={sectionRef}
      className={`${
        isFullScreen ? 'fixed inset-0 z-50 bg-black' : 'relative bg-black'
      }`}
    >
      <section className={`${isFullScreen ? 'h-screen' : 'min-h-screen'} bg-black relative overflow-hidden`}>
        <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-16">
          <div className="mb-8">
            <h1 className="text-3xl md:text-7xl font-bold text-white">
              <span>Job</span>
              <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Reels</span>
            </h1>
            <p className="text-gray-600 italic text-sm md:text-mb py-1">The Instagram of Jobs</p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
            {/* Left Side - Feature Text */}
            <div className="relative min-h-[400px] flex flex-col justify-center">
              <div className="h-full">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`absolute w-full ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ willChange: 'transform, opacity' }}
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

              {/* Vertical pagination dots */}
              {isFullScreen && (
                <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={`progress-${feature.id}`}
                      className={`w-3 h-3 rounded-full ${
                        selectedIndex === index
                          ? 'bg-pink-500 scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Video Display */}
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-[300px] aspect-[9/16] mx-auto overflow-hidden rounded-lg">
                {features.map((feature, index) => (
                  <div
                    key={`video-${feature.id}`}
                    className={`absolute inset-0 ${
                      selectedIndex === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ willChange: 'transform, opacity, scale' }}
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
    </div>
  );
}
