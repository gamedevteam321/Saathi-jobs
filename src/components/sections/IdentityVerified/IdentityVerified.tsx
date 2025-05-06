"use client";

import React from "react";
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

const IdentityVerified = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white py-6 px-4 md:px-16 flex flex-col items-center relative z-10">
        
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          <span className="text-purple-600">Identity</span> <span className="text-black">Verified</span>
        </motion.h2>
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-4 text-lg md:text-xl font-medium"
        >
          A single automated snapshot of authenticated details<br className="hidden md:block" />
          redefining <b className="text-black">Worker-Employer</b> trust metrics
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gradient-to-b from-[#0a4cff] to-[#0a4cff]/80 py-10 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 relative overflow-hidden">
        {/* Left: Features List */}
        <div className="flex-1 w-full max-w-xl text-white z-10">
          <h3 className="text-2xl md:text-3xl font-bold pb-5">
            Live on Saathi <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">TrueID</span>
          </h3>
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
        </div>
        {/* Right: Mobile Mockup */}
        <div className="flex-1 flex justify-center items-center z-10">
          <img
            src="/assets/home/identity.png"
            alt="Saathi App Mockup"
            className="max-w-[100px] md:max-w-[200px]"
          />
        </div>
        {/* Decorative Blur/Glow */}
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-blue-400 opacity-30 rounded-full blur-3xl z-0" />
      </div>

      {/* New Feature Section: Worker & Employer Benefits */}
      <div className="w-full bg-white py-16 px-4 md:px-20 flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-10 md:gap-0">
          {/* For Worker */}
          <div className="flex flex-col gap-6 flex-1 items-center md:items-start">
            <h3 className="text-blue-700 text-center md:text-left font-poppins text-base md:text-lg font-bold leading-8 tracking-tight mb-4.5">
              For Worker
            </h3>
            {[
              { icon: '/assets/home/Thumb-up.svg', title: 'Increased', highlight: 'Self Esteem' },
              { icon: '/assets/home/Share.svg', title: 'Sharable', highlight: 'Digital Biodata' },
              { icon: '/assets/home/Work-outline.svg', title: 'Potential for', highlight: 'Better Jobs' },
              { icon: '/assets/home/Check-circle-outline.svg', title: 'Continued', highlight: 'Growth' },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-row items-center md:items-end w-72 p-3 pl-10 border border-purple-500 rounded-lg backdrop-blur-lg bg-white/80 shadow-md">
                <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00E842] to-[#4DE7FF] flex w-[40px] h-[40px] justify-center items-center">
                  <img src={item.icon} alt="icon" className="w-7 h-7" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-poppins text-sm md:text-base font-bold leading-5 tracking-tight text-[#2d2d2d]">{item.title}</span>
                  <span className="font-poppins text-sm md:text-base font-bold leading-5 tracking-tight text-[#0a4cff]">{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Mobile Mockup */}
          <div className="flex-1 flex justify-center items-center relative">
            <img src="/assets/home/worker-image.png" alt="Identity Mobile Mockup" className="max-w-[120px] md:max-w-[180px]" />
          </div>

          {/* For Employer */}
          <div className="flex flex-col gap-6 flex-1 items-center md:items-start">
            <h3 className="text-blue-700 text-center md:text-left font-poppins text-base md:text-lg font-bold leading-8 tracking-tight mb-4.5">
              For Employer
            </h3>
            {[
              { icon: '/assets/home/Verified-user.svg', title: 'Instant Access to', highlight: 'Authentic Profiles' },
              { icon: '/assets/home/Timer.svg', title: 'Significant Reduction in', highlight: 'Time to Hire' },
              { icon: '/assets/home/Mindfulness.svg', title: 'Lower Attrition', highlight: 'Higher Productivity' },
              { icon: '/assets/home/Stars.svg', title: 'Verified past employment', highlight: 'history & ratings' },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-row items-center md:items-start w-72 p-3 pl-10 border border-purple-500 rounded-lg backdrop-blur-lg bg-white/80 shadow-md">
                <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00E842] to-[#4DE7FF] flex w-[40px] h-[40px] justify-center items-center">
                  <img src={item.icon} alt="icon" className="w-7 h-7" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-poppins text-sm md:text-base font-bold leading-5 tracking-tight text-[#2d2d2d]">{item.title}</span>
                  <span className="font-poppins text-sm md:text-base font-bold leading-5 tracking-tight text-[#0a4cff]">{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative background image */}
        <img src="/assets/home/mask-group.png" alt="background" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] opacity-30 pointer-events-none select-none z-0" />
      </div>
    </div>
  );
};

export default IdentityVerified; 