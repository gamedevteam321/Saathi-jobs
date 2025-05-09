"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ContactModal from '@/components/layout/ContactModal';
import TermsModal from '@/components/layout/TermsModal';
import PrivacyPolicyModal from '@/components/layout/PrivacyPolicyModal';

const gradientText = "bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent";
const gradientBg = "bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01]";

const BusinessSubPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row overflow-hidden">
      {/* Left: Offer & Info */}
      <div className="md:w-[30%] w-full flex flex-col justify-between items-start px-6 md:px-12 py-8 md:py-10 bg-black relative">
        <div className="w-full flex flex-col items-start gap-4 md:gap-6">
          {/* Heading */}
          <div className="mt-2">
            <span className="block text-2xl md:text-4xl font-bold leading-tight">SAATHI</span>
            <span className="block text-2xl md:text-4xl font-bold leading-tight">JOB<span className={gradientText}>REELS</span></span>
          </div>
          {/* Tagline */}
          <div className="text-base md:text-lg font-normal mb-2">
            New Age <span className="text-[#FFC01D]">Hiring</span> - Powered by <span className="text-[#FFC01D]">AI</span>
          </div>
          {/* Limited Launch Offer */}
          <div className="border border-[#FFC01D] rounded w-full py-2 px-4 flex items-center justify-center mb-2 animate-breath">
            <span className="text-white font-bold">LIMITED</span>&nbsp;
            <span className="text-[#FFC01D] font-bold">LAUNCH OFFER</span>
          </div>
          <style jsx>{`
            @keyframes breath {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
            .animate-breath {
              animation: breath 2s ease-in-out infinite;
            }
          `}</style>
          {/* Annual Package */}
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-normal">Annual Package</span>
            <span className="flex items-end">
              <span className="text-4xl md:text-5xl font-bold text-[#FFC01D] leading-none">₹5,000</span>
              <span className="ml-2 text-xl md:text-2xl font-bold text-white leading-none">ONLY</span>
            </span>
          </div>
          {/* Unlimited Job Posts */}
          <div className="flex items-end mb-2">
            <span className="text-xl md:text-2xl font-bold text-[#FFC01D]">UNLIMITED</span>
            <span className="ml-2 text-xl md:text-2xl font-bold text-white">JOB POSTS !!</span>
          </div>
          {/* Pay Now Button */}
          <button className={`mt-2 mb-2 w-full relative overflow-hidden text-black font-bold py-3 rounded text-lg md:text-xl shadow-lg transition hover:scale-105`}>
            <span className="relative z-10">PAY NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] animate-gradient-rotate"></div>
          </button>
          <style jsx>{`
            @keyframes gradient-rotate {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient-rotate {
              background-size: 200% 200%;
              animation: gradient-rotate 3s ease infinite;
            }
          `}</style>
          {/* Risk Free Guarantee */}
          <div className="mt-2">
            <span className="text-white text-base md:text-lg">Risk Free</span>
            <br />
            <span className="text-[#FFC01D] text-base md:text-lg">100% Money back guarantee</span>
          </div>
        </div>
        {/* Bottom Logo and T&C */}
        <div className="w-full flex flex-col items-start mt-8">
          <span className="text-2xl font-bold mb-1 flex items-center">Saathi<span className="text-[#FFC01D] text-3xl ml-1">»</span></span>
          <span className="text-gray-400 text-xs">Standard T&C to Apply</span>
        </div>
      </div>

      {/* Right: Features & Visuals */}
      <div className="md:w-[70%] w-full flex flex-col justify-between bg-[#111] px-4 md:px-12 py-8 md:py-12 relative">
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
            HIRE FASTER BETTER & <span className={gradientText}>EASIER</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 text-gray-300 text-sm md:text-lg mb-8 text-center items-center justify-center">
            <span>Reduce <span className={gradientText}>Cost to Hire</span> by 80%</span>
            <span className="hidden md:inline">|</span>
            <span>Reduce <span className={gradientText}>Time to Hire</span> by 80%</span>
            <span className="hidden md:inline">|</span>
            <span>Your own <span className={gradientText}>AI Recruiter</span></span>
          </div>
        </div>
        {/* Phone Mockups */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-4 md:py-0 md:flex-1 mt-4 md:mt-0">
          {/* JobReels */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg md:text-2xl font-bold text-white text-center mb-2">
              JOB<span className={gradientText}>REELS</span>
            </span>
            <div className="relative w-[220px] md:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img src="/images/JobReel.png" alt="Job Reel Preview" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* JobPosts */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg md:text-2xl font-bold text-white text-center mb-2">
              JOB<span className={gradientText}>POSTS</span>
            </span>
            <div className="relative w-[220px] md:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img src="/images/JobPost.png" alt="Job Post Preview" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* AI Recruiter */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg md:text-2xl font-bold text-white text-center mb-2">
              AI<span className={gradientText}> RECRUITER</span>
            </span>
            <div className="relative w-[220px] md:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <img src="/images/AIinterview.png" alt="AI Interview Preview" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <div className="flex space-x-4 text-gray-400 text-xs md:text-sm w-full justify-center md:w-auto md:absolute md:bottom-6 md:right-6 md:justify-end static">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <button onClick={() => setContactOpen(true)} className="hover:text-yellow-400 bg-transparent border-none cursor-pointer p-0 m-0">Contact Us</button>
          <button onClick={() => setTermsOpen(true)} className="hover:text-yellow-400 bg-transparent border-none cursor-pointer p-0 m-0">Terms</button>
          <button onClick={() => setPrivacyOpen(true)} className="hover:text-yellow-400 bg-transparent border-none cursor-pointer p-0 m-0">Privacy Policy</button>
        </div>
      </div>
      {/* Modals */}
      {isContactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {isTermsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full p-8 text-left overflow-y-auto max-h-[80vh] text-black">
            <button
              onClick={() => setTermsOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <TermsModal onClose={() => setTermsOpen(false)} />
          </div>
        </div>
      )}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full p-8 text-left overflow-y-auto max-h-[80vh] text-black">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <PrivacyPolicyModal onClose={() => setPrivacyOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSubPage; 