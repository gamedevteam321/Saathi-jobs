"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// Placeholder icons (replace with your icon library or SVGs as needed)

const features = [
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/face_detection.svg" alt="Live Photo Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Live Photo</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-[18px]'>Eliminating Fake Personas</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/id_card.svg" alt="Aadhaar Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Adhaar</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-[18px]'>Preventing Identity Fraud</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/legal_2.svg" alt="Legal Status Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Legal Status</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-[18px]'>Automated Court Case Checks</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/experience 1.svg" alt="Experience Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Experience</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <span className='text-gray-400 italic text-[18px]'>Past Employment Check with Rating</span>,
  },
];

const workerBenefits = [
  
  { icon: '/assets/home/Share.svg', title: 'Sharable', desc: 'Digital Biodata' },
  { icon: '/assets/home/Work-outline.svg', title: 'Potential for', desc: 'Better Jobs' },
  { icon: '/assets/home/Thumb-up.svg', title: 'Increased', desc: 'Self Esteem' },
  { icon: '/assets/home/Check-circle-outline.svg', title: 'Continued', desc: 'Growth' },
];

const employerBenefits = [
  { icon: '/assets/home/Verified-user.svg', title: 'Instant Access to', desc: 'Authentic Profiles' },
  { icon: '/assets/home/Timer.svg', title: 'Reduced', desc: 'Time-to-Hire' },
  { icon: '/assets/home/Stars.svg', title: 'Past employment History & ', desc: 'Ratings' },
  { icon: '/assets/home/Mindfulness.svg', title: 'Lower Attrition', desc: 'Higher Productivity' },
  
];

const sections = [
  {
    key: "trueid",
    heading: "Live on TrueID",
    title: (
      <>Live on Saathi <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">TrueID</span></>
    ),
    content: (
      <>
        <div className="text-left text-xl sm:text-lg md:text-[28px] font-regular mt-2 mb-2 pl-5 text-gray-400">
          Live on <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 px-1">
          {features.map((f, i) => (
            <li key={i} className="flex flex-row items-center gap-2 md:gap-3 px-2">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold shrink-0">
                <img src={['/assets/home/face_detection.svg','/assets/home/id_card.svg','/assets/home/legal_2.svg','/assets/home/experience 1.svg'][i]} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-md sm:text-sm md:text-lg text-[#FFC226] text-left block break-words">
                  {f.title}
                </span>
                <div className="text-gray-200 text-md sm:text-sm md:text-base font-regular text-left break-words whitespace-normal">
                  {f.desc}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    image: '/assets/home/identity1.png'
  },
  {
    key: "worker",
    heading: "TrueID for the Workforce",
    title: null,
    content: (
      <>
        <div className="text-left text-xl sm:text-lg md:text-[28px] font-regular mt-2 mb-2 pl-5 text-gray-400">
          <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span> <span className="text-gray-400">for the Workforce</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 px-1">
          {workerBenefits.map((item, idx) => (
            <li key={idx} className="flex flex-row items-center gap-2 md:gap-3 px-2">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold shrink-0">
                <img src={item.icon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-regular text-md sm:text-sm md:text-[18px] text-white text-left block break-words">
                  {item.title} <span className="text-[#FFC226]">{item.desc}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    image: '/assets/home/identity1.png'
  },
  {
    key: "employer",
    heading: "TrueID for Recruiters",
    title: null,
    content: (
      <>
        <div className="text-left text-xl sm:text-lg md:text-[28px] font-regular mt-2 mb-2 pl-5 text-gray-400">
          <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span> <span className="text-gray-400">for Recruiters</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 px-1">
          {employerBenefits.map((item, idx) => (
            <li key={idx} className="flex flex-row items-center gap-2 md:gap-3 px-2">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold shrink-0">
                <img src={item.icon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-regular text-md sm:text-sm md:text-[18px] text-white text-left block break-words">
                  {item.title} <span className="text-[#FFC226]">{item.desc}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    image: '/assets/home/identity1.png'
  },
];

const IdentityVerified = () => {
  // State to track which section is currently selected (0, 1, or 2)
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // State to control whether the component is in fullscreen mode
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // State to prevent multiple scroll transitions from happening simultaneously
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Ref to the main section element for intersection observer
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Ref to store the intersection observer instance
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Ref to track scroll direction (up or down)
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  
  // Ref to accumulate scroll delta values before triggering a section change
  const scrollAccumulator = useRef(0);
  
  // Threshold value that must be reached before triggering a section change
  const SCROLL_THRESHOLD = 30;
  
  // Ref to store the transition timeout
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Ref to track the last scroll time for debouncing
  const lastScrollTime = useRef(0);
  
  // Cooldown period between scroll events (in milliseconds)
  const SCROLL_COOLDOWN = 200;
  
  // Ref to track if the user scrolled from below the section
  const isFromBelow = useRef(false);

  // Refs for touch handling
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  // Effect to set up intersection observer for fullscreen mode
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Check if fullscreen mode should be disabled
        if (typeof window !== 'undefined' && window.__disableIdentityVerifiedFullScreen) {
          setIsFullScreen(false);
          //window.__disableIdentityVerifiedFullScreen = false;
          return;
        }
        
        // When section is 80% visible and not transitioning
        if (entry.isIntersecting && !isTransitioning) {
          const intersectionRatio = entry.intersectionRatio;
          if (intersectionRatio >= 0.7) {
            // if (typeof window !== 'undefined') {
            //   window.__disableIdentityVerifiedFullScreen = true;
            //   window.__disableIdentityVerifiedFullScreen = false;
            // }
            setIsFullScreen(true);
            // Set initial section based on scroll direction
            if (isFromBelow.current) {
              setSelectedIndex(0);
            } else {
              setSelectedIndex(sections.length - 1);
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

  // Function to handle smooth scrolling between sections
  const scrollToSection = (direction: 'up' | 'down') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const section = sectionRef.current;
    if (!section) return;

    // Track if user scrolled from below
    isFromBelow.current = direction === 'up';

    // Get the next/previous section element
    const targetSection = direction === 'down' 
      ? sectionRef.current?.nextElementSibling 
      : sectionRef.current?.previousElementSibling;

    if (!targetSection) return;

    // Exit fullscreen mode
    setIsFullScreen(false);

    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      setTimeout(() => {
        // Scroll to the target section
        if (direction === 'up') {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Reset transition state after animation
        transitionTimeout.current = setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 50);
    });
  };

  // Effect to handle wheel events for section navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle scroll in fullscreen mode and when not transitioning
      if (!isFullScreen || isTransitioning) return;

      e.preventDefault();
      
      // Debounce scroll events
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
      lastScrollTime.current = now;
      
      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;
      
      // Check if accumulated scroll exceeds threshold
      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        const direction = scrollAccumulator.current > 0 ? 'down' : 'up';
        scrollDirection.current = direction;
        scrollAccumulator.current = 0;

        // Handle edge cases for first and last sections
        if (direction === 'down' && selectedIndex === sections.length - 1) {
          setIsTransitioning(true);
          scrollToSection('down');
          return;
        }

        if (direction === 'up' && selectedIndex === 0) {
          setIsTransitioning(true);
          scrollToSection('up');
          return;
        }

        // Update selected section index
        setSelectedIndex((current) => {
          const next = direction === 'down' ? current + 1 : current - 1;
          return next;
        });
      }
    };

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (!isFullScreen || isTransitioning) return;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isFullScreen || isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaY = touchEndY - touchStartY.current;
      const deltaTime = touchEndTime - touchStartTime.current;

      // Only process if the touch was quick enough (less than 300ms) and moved enough (more than 50px)
      if (deltaTime < 300 && Math.abs(deltaY) > 50) {
        const direction = deltaY > 0 ? 'up' : 'down';

        // Handle edge cases for first and last sections
        if (direction === 'down' && selectedIndex === sections.length - 1) {
          setIsTransitioning(true);
          scrollToSection('down');
          return;
        }

        if (direction === 'up' && selectedIndex === 0) {
          setIsTransitioning(true);
          scrollToSection('up');
          return;
        }

        // Update selected section index
        setSelectedIndex((current) => {
          const next = direction === 'down' ? current + 1 : current - 1;
          return next;
        });
      }
    };

    // Add and remove event listeners
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
      section.addEventListener('touchstart', handleTouchStart, { passive: true });
      section.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
        section.removeEventListener('touchstart', handleTouchStart);
        section.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isFullScreen, selectedIndex, isTransitioning]);

  return (
    <div 
      id="trueid"
      ref={sectionRef}
      className={`${
        isFullScreen ? 'fixed inset-0 z-50 bg-[#09090B]' : 'relative bg-[#09090B]'
      } transition-all duration-300 ease-in-out pt-4 pb-4`}
      style={{
        transform: isFullScreen ? 'translateY(0)' : 'none',
        position: isFullScreen ? 'fixed' : 'relative',
        top: isFullScreen ? '0' : 'auto',
        left: isFullScreen ? '0' : 'auto',
        right: isFullScreen ? '0' : 'auto',
        bottom: isFullScreen ? '0' : 'auto',
        width: isFullScreen ? '100%' : 'auto',
        height: isFullScreen ? '100%' : 'auto',
        zIndex: isFullScreen ? 50 : 'auto'
      }}
    >
      <section 
        className={`${
          isFullScreen ? 'h-screen' : 'min-h-screen'
        } bg-[#09090B] relative overflow-hidden`}
        style={{
          transform: isFullScreen ? 'translateY(0)' : 'none',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="absolute inset-0 flex flex-col px-2 sm:px-4 md:px-16 pt-6">
          <div className="w-full flex flex-col md:flex-row items-center md:items-left">
            <div className="max-w-2xl w-full h-full flex flex-col items-center md:items-start">
              <h2 className="text-center md:text-left text-4xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-1">
                Saathi True<span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
              </h2>
              <div className="text-center md:text-left text-md sm:text-base md:text-[18px] text-gray-400 italic font-medium mb-4 md:mb-6">
                LinkedIn of the Workforce
              </div>
              <div className="text-center md:text-left text-gray-400 text-2xl sm:text-lg md:text-[40px] font-regular pb-6 md:pb-10 max-w-5xl md:leading-none">
                A single automated snapshot of authenticated details redefining
                <span className=" text-white"> Worker-Employer</span> trust metrics
              </div>
              <div className="mt-4 md:mt-8 w-full flex flex-col items-center md:items-center">
                <div className="flex flex-row items-start justify-center w-full">
                  {/* Vertical Pagination Dots for Desktop */}
                  {isFullScreen && (
                    <div className="hidden sm:flex flex-col items-center mr-2 sm:mr-4 pt-8 sm:pt-24">
                      {sections.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mb-2 sm:mb-3 transition-all duration-300 ${selectedIndex === idx ? 'bg-[#FFC226]' : 'bg-gray-600'}`}
                        />
                      ))}
                    </div>
                  )}
                  {/* Dynamic Section Content */}
                  <div className="flex-1">
                    {sections[selectedIndex] && sections[selectedIndex].content}
                  </div>
                </div>
                {/* Horizontal Pagination Dots for Mobile (now below the feature text) */}
                {isFullScreen && (
                  <div className="flex flex-row items-center justify-center mt-4 sm:hidden">
                    {sections.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 transition-all duration-300 ${selectedIndex === idx ? 'bg-[#FFC226]' : 'bg-gray-600'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Right Side - Image Display (now below text on mobile) */}
            <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 w-full">
              <div className="relative w-full max-w-[180px] sm:max-w-[200px] md:max-w-[350px] aspect-[9/16] mx-auto overflow-hidden rounded-lg flex items-center">
                {sections.map((section, index) => (
                  <div
                    key={`image-${section.key}`}
                    className={`absolute inset-0 ${
                      selectedIndex === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    style={{
                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                      transform: selectedIndex === index ? 'scale(1)' : 'scale(0.95)'
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.key}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdentityVerified;

// Add global flag type for disabling IdentityVerified fullpage mode
declare global {
  interface Window {
    __disableIdentityVerifiedFullScreen?: boolean;
  }
} 