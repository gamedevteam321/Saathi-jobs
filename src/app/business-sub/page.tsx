"use client";
import React from 'react';

const checklist = [
  'Reduce Cost to Hire by 80%',
  'Reduce Time to Hire by 80%',
  'Your own AI Recruiter',
  'Increase Profits upto 500%',
  'Discovery, Interviews, Scoring & Recommendations - Powered by AI',
];

const checklistIcons = [
  // Rupee sign
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><path d="M6 4h12M6 8h12M6 12h7a4 4 0 1 1 0 8H6m0-8v8"/></svg>
  ),
  // Clock
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ),
  // Robot
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><rect x="7" y="11" width="10" height="6" rx="2"/><path d="M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2"/><circle cx="8" cy="13" r="1"/><circle cx="16" cy="13" r="1"/><path d="M12 7v4"/><path d="M8 7h8"/></svg>
  ),
  // Chart
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><rect x="3" y="12" width="6" height="8"/><rect x="9" y="8" width="6" height="12"/><rect x="15" y="4" width="6" height="16"/></svg>
  ),
  // AI/Brain
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><path d="M9 9a4 4 0 1 1 6 0m-6 6a4 4 0 1 0 6 0"/><circle cx="12" cy="12" r="10"/></svg>
  ),
];

const BusinessSubPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <style jsx>{`
        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col justify-between p-6 md:p-10 bg-black gap-5 md:gap-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight pb-1 md:pb-5">
          <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">HIRE</span> FASTER<br />
          BETTER &<br />
          EASIER
        </h1>
        <p className="text-[18px] md:text-[25px] font-semibold pb-2">
          <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Reel</span> Banao <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Naukri</span> Lagao
        </p>
        <ul className="pb-4 md:pb-8 pt-3 md:pt-6 space-y-4">
          {checklist.map((item, idx) => (
            <li key={idx} className="flex items-start justify-center md:justify-start">
              <span className="w-6 h-6 mr-4 mt-1 inline-flex items-center justify-center">{checklistIcons[idx]}</span>
              <span className="text-base md:text-lg text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-[10px] hidden md:block">
          <img src="/logo.svg" alt="logo" className="w-30 h-30" />
          <p className="text-gray-400 text-xs pt-2">Standard T&C to Apply</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-3/4 flex flex-col bg-[#111] px-4 py-6 md:px-20 md:py-11 relative">
        <div className="flex flex-col h-full w-full gap-8 md:gap-[150px]">
          <div className="w-full text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-bold">
              SAATHI JOB<span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">REELS</span>
            </h2>
            <p className="text-md md:text-xl text-gray-300 mt-2">
              New Age <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">Hiring</span> - Powered by <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">AI</span>
            </p>
          </div>
          <div className="flex flex-col gap-[20px] w-full items-center md:items-start">
            {/* Limited Launch Offer Banner */}
            <div className="w-fit bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 via-yellow-500 p-[2px] rounded animate-gradient-rotate animate-breathe">
              <p className="bg-[#111] px-6 md:px-8 py-2 md:py-3 rounded text-yellow-400 font-bold text-sm md:text-base">
                <span className="text-white">LIMITED</span> LAUNCH OFFER
              </p>
            </div>
            <div className="flex flex-col gap-[5px] text-center md:text-left">
              <p className="text-md md:text-2xl font-medium">Annual Package</p>
              <p className="text-3xl md:text-6xl font-semibold bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent pb-2">₹5,000 <span className="text-white text-lg md:text-5xl font-medium">ONLY</span></p>
              <p className="text-white text-lg md:text-5xl font-regular">UNLIMITED <span className="text-xl md:text-5xl font-bold bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">JOB POSTS !!</span></p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-auto">
              <button className="w-full md:w-auto bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] via-yellow-500 text-black font-bold px-8 md:px-10 py-3 md:py-4 rounded text-lg md:text-xl shadow-lg animate-gradient-rotate">
                PAY NOW
              </button>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-white text-base md:text-xl">Risk Free</p>
                <p className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent text-base md:text-xl border-b border-white">100% Money Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end space-x-4 md:space-x-8 text-gray-400 text-xs md:text-sm mt-8">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Contact Us</a>
          <a href="#" className="hover:text-yellow-400">Terms</a>
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
        </div>
        <div className="flex flex-col items-center md:hidden mt-4">
          <img src="/logo.svg" alt="logo" className="w-24 h-24 mb-2" />
          <p className="text-gray-400 text-xs">Standard T&C to Apply</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSubPage; 