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
    phoneImage: "videos/empnew.mp4"
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
  const SCROLL_COOLDOWN = 100;
  const isFromBelow = useRef(false);
  const isScrolling = useRef(false);

  const scrollToSection = (direction: 'up' | 'down') => {
    if (isTransitioning || isScrolling.current) return;
    setIsTransitioning(true);
    isScrolling.current = true;
    
    const section = sectionRef.current;
    if (!section) return;

    // Set the direction flag before transition
    isFromBelow.current = direction === 'up';

    // Get the target section
    const targetSection = direction === 'down' 
      ? sectionRef.current?.nextElementSibling 
      : sectionRef.current?.previousElementSibling;

    if (!targetSection) {
      setIsTransitioning(false);
      isScrolling.current = false;
      return;
    }

    // For upward transition, just exit fullscreen and let user scroll
    if (direction === 'up') {
      // Reset to original view
      section.style.transition = 'none';
      section.style.transform = 'none';
      section.style.opacity = '1';
      setIsFullScreen(false);
      setIsTransitioning(false);
      isScrolling.current = false;
      return;
    }

    // Create a black overlay for transition (only for downward transitions)
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s linear';
    document.body.appendChild(overlay);

    // Add a transition class to the section
    section.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    section.style.transform = 'translateY(-100%)';
    section.style.opacity = '1';

    // Update state before scrolling
    setIsFullScreen(false);

    // Fade in the overlay immediately
    overlay.style.opacity = '1';
    
    // Scroll to target section with smooth behavior
    targetSection.scrollIntoView({ behavior: 'smooth' });
    
    // Reset the section and remove overlay after scroll completes
    transitionTimeout.current = setTimeout(() => {
      section.style.transition = '';
      section.style.transform = '';
      section.style.opacity = '1';
      setIsTransitioning(false);
      isScrolling.current = false;
      
      // Fade out and remove the overlay
      overlay.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isTransitioning) {
          // Only go fullscreen when scrolling down
          if (!isFromBelow.current) {
            setTimeout(() => {
              setIsFullScreen(true);
              
              // When coming from below (job train), show first item
              // When coming from above (hero), show last item
              if (isFromBelow.current) {
                setSelectedIndex(0);
              } else {
                setSelectedIndex(features.length - 1);
              }
            }, 100);
          }
        } else if (!entry.isIntersecting) {
          // Smooth transition out of fullscreen
          setTimeout(() => {
            setIsFullScreen(false);
          }, 100);
        }
      },
      { 
        threshold: 0.9,
        rootMargin: '0px'
      }
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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isFullScreen || isTransitioning || isScrolling.current) return;

      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
      lastScrollTime.current = now;

      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;
      
      // Only trigger if we've accumulated enough scroll
      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        const direction = scrollAccumulator.current > 0 ? 'down' : 'up';
        scrollDirection.current = direction;
        scrollAccumulator.current = 0; // Reset accumulator

        // Handle section transitions
        if (direction === 'down' && selectedIndex === 2) {
          scrollToSection('down');
          return;
        }

        if (direction === 'up' && selectedIndex === 0) {
          scrollToSection('up');
          return;
        }

        // Handle feature transitions immediately
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

  // Add keyboard navigation with faster response
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullScreen || isTransitioning || isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (selectedIndex === 2) {
          scrollToSection('down');
        } else {
          setSelectedIndex((current) => current + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (selectedIndex === 0) {
          scrollToSection('up');
        } else {
          setSelectedIndex((current) => current - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen, selectedIndex, isTransitioning]);

  // Add a cleanup effect for transitions
  useEffect(() => {
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`${
        isFullScreen ? 'fixed inset-0 z-50 bg-black' : 'relative bg-black'
      } transition-all duration-500 ease-out`}
      style={{ 
        pointerEvents: isTransitioning ? 'none' : 'auto',
        opacity: 1,
        transform: isFullScreen ? 'translateY(0)' : 'none',
        transition: 'all 0.5s ease-out',
        backgroundColor: 'black'
      }}
    >
      <section 
        className={`${
          isFullScreen ? 'h-screen' : 'min-h-screen'
        } bg-black relative overflow-hidden transition-all duration-500 ease-out`}
        style={{
          opacity: 1,
          transform: isFullScreen ? 'translateY(0)' : 'none',
          transition: 'all 0.5s ease-out',
          backgroundColor: 'black'
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-5 md:px-16 bg-black">
          <div 
            className="mb-4 sm:mb-8 transition-all duration-500 linear mt-16 sm:mt-0 bg-black" 
            style={{
              opacity: 1,
              transform: isFullScreen ? 'translateY(0)' : 'none',
              transition: 'all 0.5s linear',
              transitionDelay: '0.1s',
              backgroundColor: 'black'
            }}
          >
            <h1 className="text-4xl sm:text-3xl md:text-7xl font-bold text-white text-center md:text-left">
              <span>Job</span>
              <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Reels</span>
            </h1>
            <p className="text-gray-600 italic text-sm sm:text-md md:text-lg py-1 text-center md:text-left">The Instagram of Jobs</p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-0 items-center bg-black">
            {/* Left Side - Feature Text */}
            <div className="relative min-h-[200px] sm:min-h-[400px] flex flex-col justify-center items-center md:items-end text-center md:text-left mt-8 md:mt-0 bg-black">
              <div className="h-full flex items-center justify-center md:justify-end md:pr-4 bg-black">
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
                    <div className="w-full h-full justify-center items-center space-y-2 sm:space-y-4 bg-black">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{feature.title}</h2>
                      <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-[280px] sm:max-w-none mx-auto md:mx-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vertical pagination dots */}
              {isFullScreen && (
                <div 
                  className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-4 bg-black"
                  style={{
                    opacity: 1,
                    transition: 'all 0.5s linear',
                    transitionDelay: '0.3s',
                    backgroundColor: 'black'
                  }}
                >
                  {features.map((feature, index) => (
                    <div
                      key={`progress-${feature.id}`}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? 'bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Video Display */}
            <div className="relative h-full flex items-center justify-center md:justify-start md:pl-4 bg-black">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[300px] aspect-[9/16] mx-auto overflow-hidden rounded-lg bg-black">
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