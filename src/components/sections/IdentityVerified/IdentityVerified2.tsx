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
  },
];

const IdentityVerified = () => {
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.map(ref => ref.current?.getBoundingClientRect().top ?? 0);
      const index = offsets.findIndex((offset, i) => offset > 100 && (i === 0 || offsets[i - 1] <= 100));
      setActiveSection(index === -1 ? 2 : index);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#09090B] py-8 px-4 md:px-16 flex flex-col items-center relative z-10">
        
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Identity</span> <span className="text-white">Verified</span>
        </motion.h2>
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-4 text-md md:text-lg font-medium"
        >
          A single automated snapshot of authenticated details<br className="hidden md:block" />
          redefining <b className="text-white">Worker-Employer</b> trust metrics
        </motion.p>
      </div>


      
      {/* Decorative Blur/Glow */}
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-black-400 opacity-30 rounded-full blur-3xl z-0" />

      {/* Scroll Reveal Section */}
      <div className="w-full bg-gradient-to-b from-[#09090B] to-[black]/95 py-10 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center relative z-10">
        {/* Sticky Left: Section Content */}
        <div className="flex-1 w-full max-w-xl text-white z-10 sticky top-24 self-start h-fit">
          <h3 className="text-2xl md:text-3xl font-bold pb-5">
            {sections[activeSection].title}
          </h3>
          {sections[activeSection].content}
        </div>
        {/* Right: Scrollable Triggers */}
        <div className="flex-1 flex flex-col gap-32">
          {sections.map((section, idx) => (
            <div
              key={section.key}
              ref={sectionRefs[idx]}
              style={{ height: "50vh" }}
              className="flex items-center justify-center"
            >
              {/* You can put an image or illustration here */}
              <img
                src={
                  idx === 0
                    ? '/assets/home/identity.png'
                    : idx === 1
                    ? '/assets/home/worker-image.png'
                    : '/assets/home/worker-image.png'
                }
                alt="Section Visual"
                className="max-w-[120px] md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
        {/* Decorative Blur/Glow */}
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-black-400 opacity-30 rounded-full blur-3xl z-0" />
      </div>
    </div>
  );
};

export default IdentityVerified; 