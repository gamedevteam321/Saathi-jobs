"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// Placeholder icons (replace with your icon library or SVGs as needed)
const PhotoIcon = () => (
  <span className="inline-block w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center text-white">📷</span>
);
const AadhaarIcon = () => (
  <span className="inline-block w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center text-white">🪪</span>
);
const LegalIcon = () => (
  <span className="inline-block w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center text-white">⚖️</span>
);
const ExperienceIcon = () => (
  <span className="inline-block w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center text-white">💼</span>
);

const features = [
  {
    icon: <PhotoIcon />,
    title: (<><span className="text-white">Live Photo</span> <span className="text-yellow-400">Verified</span></>),
    highlight: "Verified",
    desc: "Eliminating Fake Personas",
  },
  {
    icon: <AadhaarIcon />,
    title: (<><span className="text-white">Adhaar</span> <span className="text-yellow-400">Verified</span></>),
    highlight: "Verified",
    desc: "Preventing Identity Fraud",
  },
  {
    icon: <LegalIcon />,
    title: (<><span className="text-white">Legal Status</span> <span className="text-yellow-400">Verified</span></>),
    highlight: "Verified",
    desc: "Automated Court Case Checks",
  },
  {
    icon: <ExperienceIcon />,
    title: (<><span className="text-white">Experience</span> <span className="text-yellow-400">Verified</span></>),
    highlight: "Verified",
    desc: "Past Employment Check with Rating",
  },
];

const workerBenefits = [
  { icon: '/assets/home/Thumb-up.svg', title: 'Increased', desc: 'Self Esteem' },
  { icon: '/assets/home/Share.svg', title: 'Sharable', desc: 'Digital Biodata' },
  { icon: '/assets/home/Work-outline.svg', title: 'Potential for', desc: 'Better Jobs' },
  { icon: '/assets/home/Check-circle-outline.svg', title: 'Continued', desc: 'Growth' },
];

const employerBenefits = [
  { icon: '/assets/home/Verified-user.svg', title: 'Instant Access to', desc: 'Authentic Profiles' },
  { icon: '/assets/home/Timer.svg', title: 'Significant Reduction in', desc: 'Time to Hire' },
  { icon: '/assets/home/Mindfulness.svg', title: 'Lower Attrition', desc: 'Higher Productivity' },
  { icon: '/assets/home/Stars.svg', title: 'Verified past employment', desc: 'history & ratings' },
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
              <span className="font-bold text-md md:text-lg text-yellow-400">
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
          <li key={idx} className="flex items-start gap-3">
            <div className="inline-block w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center">
              <img src={item.icon} alt="icon" className="w-7 h-7" />
            </div>
            <div>
              <span className="font-bold text-md md:text-lg text-yellow-400">
                {item.title} <span className="text-white">{item.desc}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    ),
    image: '/assets/home/worker-image.png'
  },
  {
    key: "employer",
    title: (
      <>Benefits for <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Employers</span></>
    ),
    content: (
      <ul className="space-y-5">
        {employerBenefits.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="inline-block w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center">
              <img src={item.icon} alt="icon" className="w-7 h-7" />
            </div>
            <div>
              <span className="font-bold text-md md:text-lg text-yellow-400">
                {item.title} <span className="text-white">{item.desc}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    ),
    image: '/assets/home/worker-image.png'
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
          <div className="mb-8 max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-3xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Identity</span> <span className="text-white">Verified</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-400 mt-4 text-sm md:text-base font-medium"
            >
              A single automated snapshot of authenticated details<br className="hidden md:block" />
              redefining <b className="text-white">Worker-Employer</b> trust metrics
            </motion.p>
          </div>

          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start px-4">
            {/* Left Side - Content */}
            <div className="relative min-h-[350px] flex flex-col pt-16 md:pt-24">
              <div className="h-full">
                {sections.map((section, index) => (
                  <div
                    key={section.key}
                    className={`absolute w-full ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
                    style={{
                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                        {section.title}
                      </h3>
                      <div className="space-y-4">
                        {section.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vertical pagination dots */}
              {isFullScreen && (
                <div 
                  className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3"
                  style={{
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                >
                  {sections.map((section, index) => (
                    <div
                      key={`progress-${section.key}`}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? 'bg-yellow-400 scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Image Display */}
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-[180px] md:max-w-[300px] aspect-[9/16] mx-auto overflow-hidden rounded-lg">
                {sections.map((section, index) => (
                  <div
                    key={`image-${section.key}`}
                    className={`absolute inset-0 ${
                      selectedIndex === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    style={{
                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.key}
                      className="w-full h-full object-contain"
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