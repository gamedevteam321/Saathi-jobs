"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// Placeholder icons (replace with your icon library or SVGs as needed)

const features = [
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center">
        <img src="/assets/home/face_detection.svg" alt="Live Photo Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Live Photo</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-[18px]'>Eliminating Fake Personas</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center">
        <img src="/assets/home/id_card.svg" alt="Aadhaar Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Adhaar</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-[18px]'>Preventing Identity Fraud</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center">
        <img src="/assets/home/legal_2.svg" alt="Legal Status Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Legal Status</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-[18px]'>Automated Court Case Checks</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center">
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
    title: (
      <>Live on Saathi <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">TrueID</span></>
    ),
    content: (
      <ul className="space-y-5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            {f.icon}
            <div>
              <span className="font-bold text-md md:text-lg text-[#FFC226]">
                {f.title}
              </span>
              <div className="text-gray-200 text-base md:text-sm font-regular">
                {f.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>
    ),
    image: '/assets/home/identity.png'
  },
  {
    key: "worker",
    title: (
      <>Benefits for <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Workers</span></>
    ),
    content: (
      <ul className="space-y-5">
        {workerBenefits.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center">
              <img src={item.icon} alt="icon" className="w-7 h-7" />
            </div>
            <div>
              <span className="font-bold text-md md:text-lg text-white">
                {item.title} <span className="text-[#FFC226]">{item.desc}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    ),
    image: '/assets/home/identity.png'
  },
  {
    key: "employer",
    title: (
      <>Benefits for <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Employers</span></>
    ),
    content: (
      <ul className="space-y-5">
        {employerBenefits.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center">
              <img src={item.icon} alt="icon" className="w-7 h-7" />
            </div>
            <div>
              <span className="font-bold text-md md:text-lg text-white">
                {item.title} <span className="text-[#FFC226]">{item.desc}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    ),
    image: '/assets/home/identity.png'
  },
];

const IdentityVerified = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 30;
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTime = useRef(0);
  const SCROLL_COOLDOWN = 200;
  const isFromBelow = useRef(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isTransitioning) {
          const intersectionRatio = entry.intersectionRatio;
          if (intersectionRatio >= 0.8) {
            setIsFullScreen(true);
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

    isFromBelow.current = direction === 'up';

    const targetSection = direction === 'down' 
      ? sectionRef.current?.nextElementSibling 
      : sectionRef.current?.previousElementSibling;

    if (!targetSection) return;

    setIsFullScreen(false);

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (direction === 'up') {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        transitionTimeout.current = setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 50);
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isFullScreen || isTransitioning) return;

      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
      lastScrollTime.current = now;
      
      scrollAccumulator.current += e.deltaY;
      
      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        const direction = scrollAccumulator.current > 0 ? 'down' : 'up';
        scrollDirection.current = direction;
        scrollAccumulator.current = 0;

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
        <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-16">
          <div className="w-full flex">
            <div className="max-w-2xl w-full">
              <h2 className="text-left text-4xl md:text-5xl font-bold text-white leading-tight mb-1">
                Saathi True<span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
              </h2>
              <div className="text-left text-base md:text-[18px] text-gray-400 italic font-medium mb-6">
                LinkedIn of the Workforce
              </div>
              <div className="text-left text-gray-300 text-2xl md:text-[40px] leading-tight font-regular mb-10 max-w-5xl">
                A single automated snapshot of authenticated details redefining
                <span className=" text-white"> Worker-Employer</span> trust metrics
              </div>
              <div className="mt-8">
                <div className="text-xl md:text-[28px] font-regular mb-4 text-left text-gray-400 px-9 ">
                  Live on <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
                </div>
                <div className="flex flex-row items-start">
                  {/* Pagination Dots */}
                  {isFullScreen && (
                    <div className="flex flex-col items-center mr-4 mt-2">
                      {sections.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-3 h-3 rounded-full mb-3 transition-all duration-300 ${selectedIndex === idx ? 'bg-[#FFC226]' : 'bg-gray-600'}`}
                        />
                      ))}
                    </div>
                  )}
                  {/* Dynamic Section Content */}
                  <div className="flex-1">
                    {sections[selectedIndex].content}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side - Image Display */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full max-w-[220px] md:max-w-[350px] aspect-[9/16] mx-auto overflow-hidden rounded-lg flex items-center">
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