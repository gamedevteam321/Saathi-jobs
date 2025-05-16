"use client";

import React, { useState, useEffect } from "react";
import FeatureCarousel2 from "../Jobreels/FeatureCarousel";
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
type IdentityVerifiedProps = {
  selectedIndex?: number;
  onIndexChange?: (index: number) => void;
};  
const IdentityVerified = ({ selectedIndex = 0, onIndexChange }: IdentityVerifiedProps) => {
  // State to track which section is currently selected (0, 1, or 2)
  //const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Handle section change
  // Handle index change if controlled externally
  useEffect(() => {
    if (onIndexChange && typeof selectedIndex !== 'undefined') {
      onIndexChange(selectedIndex);
    }
  }, [selectedIndex, onIndexChange]);

  return (
    <div 
      id="trueid"
      className="relative bg-[#09090B] pt-4 pb-4"
    >
      <section className="min-h-screen bg-[#09090B] relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col px-2 sm:px-4 md:px-16 pt-6">
          <div className="w-full flex flex-col md:flex-row items-center md:items-left">
            <div className="max-w-2xl w-full h-full flex flex-col items-center md:items-start">
              <h2 className="text-center md:text-left text-4xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-1">
                Saathi True<span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
              </h2>
              <div className="text-center md:text-left text-md sm:text-base md:text-[18px] text-gray-400 italic font-medium mb-4 md:mb-6">
                LinkedIn of the Workforce
              </div>
              <div className="text-center text-gray-400 text-xl sm:text-lg md:text-[40px] font-regular pb-6 md:pb-10 max-w-5xl md:leading-none">
                A single automated snapshot of authenticated details redefining
                <span className=" text-white"> Worker-Employer</span> trust metrics
              </div>
              <div className="mt-4 md:mt-8 w-full flex flex-col items-center md:items-center">
                <div className="flex flex-row items-start justify-center w-full">
                  {/* Vertical Pagination Dots */}
                  <div className="sm:flex flex-col items-center mr-2 sm:mr-4 pt-8 sm:pt-24">
                    {sections.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mb-2 sm:mb-3 transition-all duration-300 ${selectedIndex === idx ? 'bg-[#FFC226]' : 'bg-gray-600'}`}
                        onClick={() => onIndexChange && onIndexChange(idx)}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                  {/* Dynamic Section Content */}
                  <div className="flex-1">
                    {sections[selectedIndex] && sections[selectedIndex].content}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side - Image Display */}
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