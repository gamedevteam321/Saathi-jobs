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
    description: <><p>Disruptive hiring with short video reels</p></>,
    phoneImage: "images/JobReel.png"
  },
  {
    id: "reels",
    title: "Watch Listen Apply",
    description:  <><p>Complex Job Descriptions become Simple Short Video Job Posts</p><p>AI/ML algorithms for an Instant Match</p></>,
    phoneImage: "images/JobPost.png"
  },
  {
    id: "stories",
    title: <>24/7 <span className='bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent'>AI Recruiter</span></>,
    description:  <><p>Instant interview with Employers AI Avatar</p></>,
    phoneImage: "images/AIinterview.png"
  },
];

export default function FeatureCarousel() {
  // State to track which feature is currently selected (0, 1, or 2)
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // State to control whether the component is in fullscreen mode
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // State to prevent multiple transitions from happening simultaneously
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Ref to the main section element for intersection observer
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Ref to store the intersection observer instance
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Ref to track scroll direction (up or down)
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  
  // Ref to accumulate scroll delta values before triggering a feature change
  const scrollAccumulator = useRef(0);
  
  // Threshold value that must be reached before triggering a feature change (higher than IdentityVerified for more deliberate scrolling)
  const SCROLL_THRESHOLD = 30;
  
  // Ref to store the transition timeout
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Ref to track the last scroll time for debouncing
  const lastScrollTime = useRef(0);
  
  // Cooldown period between scroll events (in milliseconds)
  const SCROLL_COOLDOWN = 200;
  
  // Ref to track if the user scrolled from below the section
  const isFromBelow = useRef(false);
  
  // Ref to prevent multiple scroll events from firing simultaneously
  const isScrolling = useRef(false);
  
  // Ref to track the last scroll position for direction detection
  const lastScrollPosition = useRef(0);

  // Function to handle smooth scrolling between sections
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

    // Exit fullscreen mode first
    setIsFullScreen(false);
    
    // Add a small delay before scrolling to ensure the fullscreen exit animation completes
    setTimeout(() => {
      // For upward transition, let user scroll naturally
      if (direction === 'up') {
        section.style.transition = 'none';
        section.style.transform = 'none';
        section.style.opacity = '1';
        setIsTransitioning(false);
        isScrolling.current = false;
        return;
      }

      // For downward transition, scroll to next section
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Reset section styles after scroll completes
      transitionTimeout.current = setTimeout(() => {
        section.style.transition = '';
        section.style.transform = '';
        section.style.opacity = '1';
        setIsTransitioning(false);
        isScrolling.current = false;
      }, 800); // Increased timeout to ensure smooth transition
    }, 100);
  };

  // Effect to track global scroll position and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > lastScrollPosition.current) {
        isFromBelow.current = false; // Scrolling down
      } else {
        isFromBelow.current = true; // Scrolling up
      }
      lastScrollPosition.current = currentPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle intersection observer for fullscreen mode
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Check if fullscreen mode should be disabled
        if (typeof window !== 'undefined' && window.__disableJobReelsFullScreen) {
          setIsFullScreen(false);
          window.__disableJobReelsFullScreen  = false;
          return;
        }
        // When section is 80% visible and not transitioning
        if (entry.isIntersecting && !isTransitioning) {
          const intersectionRatio = entry.intersectionRatio;
          if (intersectionRatio >= 0.3) {
            if (typeof window !== 'undefined') {
              window.__disableIdentityVerifiedFullScreen = true;
            }
            setIsFullScreen(true);
            // Set initial section based on scroll direction
            if (isFromBelow.current) {
              setSelectedIndex(features.length - 1);
            } else {
              setSelectedIndex(0);
            }
          } else {
            setIsFullScreen(false);
          }
        }
      },
      { threshold: [0.8] }
    );

    // Start observing the section
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    // Cleanup observer and timeout on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  // Effect to handle wheel events for feature navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isFullScreen || isTransitioning || isScrolling.current) return;

      e.preventDefault();
      
      // Debounce scroll events
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

        // Handle section transitions at edges
        if (direction === 'down' && selectedIndex === 2) {
          scrollToSection('down');
          return;
        }

        if (direction === 'up' && selectedIndex === 0) {
          scrollToSection('up');
          return;
        }

        // Update selected feature index
        setSelectedIndex((current) => {
          const next = direction === 'down' ? Math.min(current + 1, 2) : Math.max(current - 1, 0);
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

  // Effect to handle keyboard navigation
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
      id="jobreels"
      ref={sectionRef}
      className={`${
        isFullScreen ? 'fixed inset-0 z-50' : 'relative'
      } transition-all duration-300 ease-out bg-black`}
      style={{ 
        pointerEvents: isTransitioning ? 'none' : 'auto',
        opacity: 1,
        transform: isFullScreen ? 'translateY(0)' : 'none',
        transition: 'all 0.3s ease-out',
        backgroundColor: 'black',
        visibility: 'visible',
        position: isFullScreen ? 'fixed' : 'relative',
        top: isFullScreen ? 0 : 'auto',
        left: isFullScreen ? 0 : 'auto',
        right: isFullScreen ? 0 : 'auto',
        bottom: isFullScreen ? 0 : 'auto',
        width: '100%',
        height: isFullScreen ? '100vh' : 'auto',
        zIndex: isFullScreen ? 50 : 'auto'
      }}
    >
      <section 
        className={`${
          isFullScreen ? 'h-screen' : 'min-h-screen'
        } relative overflow-hidden transition-all duration-300 ease-out bg-black`}
        style={{
          opacity: 1,
          transform: isFullScreen ? 'translateY(0)' : 'none',
          transition: 'all 0.3s ease-out',
          backgroundColor: 'black',
          visibility: 'visible',
          height: isFullScreen ? '100vh' : 'auto'
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-start px-2 sm:px-4 md:px-16 pt-2">
          <div 
            className="mb-2 sm:mb-4 transition-all duration-500 linear mt-1 sm:mt-4 md:mt-20 px-0 sm:px-4"
            style={{
              opacity: 1,
              transform: isFullScreen ? 'translateY(0)' : 'none',
              transition: 'all 0.5s linear',
              transitionDelay: '0.1s',
              visibility: 'visible',
              position: 'relative',
              zIndex: 50
            }}
          >
            <h1 className="pt-4 text-4xl sm:text-4xl md:text-6xl font-bold text-white text-center md:text-left font-['Helvetica']">
              <span>Job</span>
              <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Reels</span>
            </h1>
            <p className="text-gray-400 italic text-md sm:text-md md:text-[18px] py-1 text-center md:text-left font-['Helvetica']">The Instagram of Jobs</p>
            <div className="mt-3 md:mt-8 text-center md:text-left">
              <h2 className="text-white text-2xl sm:text-3xl md:text-[40px] font-light leading-tight mb-4 md:mb-6 font-['Helvetica'] ">When Resume's meet Reel's<br/>hiring happens instantly.</h2>
              <div className="text-gray-400 text-lg sm:text-xl md:text-[28px] font-medium leading-tight font-['Helvetica']  md:space-y-1">
               <p> Post. Swyp. Match. Hire</p>
               <p> Fast. Fun. Effortless</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 gap-2 sm:gap-5 md:gap-0 items-center mt-0 sm:-mt-36 md:-mt-40">
            {/* Left Side - Feature Text */}
            <div className="relative min-h-[120px] sm:min-h-[300px] flex flex-col justify-center items-center md:items-end text-center md:text-left mt-6 md:mt-32 order-1 md:order-none w-full px-4">
              <div className="h-full flex items-center justify-center md:justify-end md:pr-4 w-full">
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
                    <div className="w-full h-full flex flex-row items-start space-x-2 md:space-x-4 bg-black">
                      {/* Pagination dots for desktop only (vertical) */}
                      <div className="hidden md:flex flex-col items-center justify-center space-y-4 mr-2 mt-3">
                        {features.map((_, dotIdx) => (
                          <div
                            key={`progress-${dotIdx}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              selectedIndex === dotIdx
                                ? 'bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01]'
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      {/* Feature text on the right */}
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-regular text-white font-['Helvetica'] pb-2 md:pb-3">
                          {feature.id === "stories" ? feature.title : feature.title}
                        </h2>
                        <p className="text-md sm:text-base text-gray-400 mb-2 sm:mb-6 max-w-[280px] sm:max-w-none mx-auto md:mx-0 font-['Helvetica'] md:text-[18px] font-light italic leading-tight">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots for mobile only (horizontal, centered) */}
            <div className="flex md:hidden flex-row items-center justify-center space-x-4 w-full order-2 mt-2 mb-2">
              {features.map((_, dotIdx) => (
                <div
                  key={`progress-mobile-${dotIdx}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedIndex === dotIdx
                      ? 'bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01]'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Right Side - Video Display */}
            <div className="relative h-full flex flex-col items-center justify-center md:justify-start md:pl-4 bg-black mt-6 md:-mt-64 order-2 md:order-none w-full px-4">
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[480px] aspect-[9/16] mx-auto overflow-hidden rounded-lg bg-black">
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
                        className="w-full h-full object-contain max-w-[240px] sm:max-w-[280px] md:max-w-[480px] mx-auto"
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
                        className="w-full h-full object-contain max-w-[240px] sm:max-w-[280px] md:max-w-[480px] mx-auto"
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