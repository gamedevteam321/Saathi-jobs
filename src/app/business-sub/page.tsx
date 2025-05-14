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
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      if (playingVideo === videoId) {
        video.pause();
        video.muted = true;
        setPlayingVideo(null);
      } else {
        // Pause any currently playing video
        if (playingVideo) {
          const currentVideo = document.getElementById(playingVideo) as HTMLVideoElement;
          if (currentVideo) {
            currentVideo.pause();
            currentVideo.muted = true;
          }
        }
        video.play();
        video.muted = false;
        setPlayingVideo(videoId);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col lg:flex-row overflow-hidden">
      {/* Left: Offer & Info */}
      <div className="lg:w-[30%] w-full flex flex-col justify-between items-start px-6 lg:px-12 py-8 lg:py-10 bg-black relative">
        <div className="w-full flex flex-col items-start gap-4 lg:gap-6">
          {/* Heading */}
          <div className="mt-2">
            <span className="block text-2xl lg:text-4xl font-bold leading-tight">SAATHI</span>
            <span className="block text-2xl lg:text-4xl font-bold leading-tight">JOB<span className={gradientText}>REELS</span></span>
          </div>
          {/* Tagline */}
          <div className="text-base lg:text-lg font-normal mb-2">
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
            <span className="text-base lg:text-lg font-normal">Annual Package</span>
            <span className="flex items-end">
              <span className="text-4xl lg:text-5xl font-bold text-[#FFC01D] leading-none">₹5,000</span>
              <span className="ml-2 text-xl lg:text-2xl font-bold text-white leading-none">ONLY</span>
            </span>
          </div>
          {/* Unlimited Job Posts */}
          <div className="flex items-end mb-2">
            <span className="text-xl lg:text-2xl font-bold text-[#FFC01D]">UNLIMITED</span>
            <span className="ml-2 text-xl lg:text-2xl font-bold text-white">JOB POSTS !!</span>
          </div>
          {/* Pay Now Button */}
          <button onClick={() => window.location.href = "https://hire.saathi.in"} className={`mt-2 mb-2 w-full relative overflow-hidden text-black font-bold py-3 rounded text-lg lg:text-xl shadow-lg transition hover:scale-105`}>
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
            <span className="text-white text-base lg:text-lg">Risk Free</span>
            <br />
            <span className="text-[#FFC01D] text-base lg:text-lg">100% Money Back Guarantee</span>
          </div>
        </div>
        {/* Bottom Logo and T&C */}
        <div className="w-full flex flex-col items-start mt-8">
          <img className="mb-1" src="/assets/home/Logo.svg" alt="saathi-logo" width={100} height={24} />
          <span className="text-gray-400 text-xs">Standard T&C to Apply</span>
        </div>
      </div>

      {/* Right: Features & Visuals */}
      <div className="lg:w-[70%] w-full flex flex-col justify-between bg-[#1B1B1B] px-4 lg:px-12 py-8 lg:py-12 relative">
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-center">
            HIRE FASTER BETTER & <span className={gradientText}>EASIER</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 text-gray-300 text-sm lg:text-lg mb-8 text-center items-center justify-center">
            <span>Reduce <span className={gradientText}>Cost to Hire</span> by 80%</span>
            <span className="hidden lg:inline">|</span>
            <span>Reduce <span className={gradientText}>Time to Hire</span> by 80%</span>
            <span className="hidden lg:inline">|</span>
            <span>Your own <span className={gradientText}>AI Recruiter</span></span>
          </div>
        </div>
        {/* Phone Mockups */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 py-4 lg:py-0 lg:flex-1 mt-4 lg:mt-0">
          {/* JobReels */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg lg:text-2xl font-bold text-white text-center mb-2">
              JOB<span className={gradientText}>REELS</span>
            </span>
            <div className="relative w-[220px] lg:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                 onClick={() => handleVideoClick('jobreel-video')}>
              <video 
                id="jobreel-video"
                src="/videos/jobreel.mp4" 
                className="w-full h-full object-contain"
                loop
                playsInline
                muted
              />
            </div>
          </div>
          {/* JobPosts */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg lg:text-2xl font-bold text-white text-center mb-2">
              JOB<span className={gradientText}>POSTS</span>
            </span>
            <div className="relative w-[220px] lg:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                 onClick={() => handleVideoClick('jobpost-video')}>
              <video 
                id="jobpost-video"
                src="/videos/jobpost.mp4" 
                className="w-full h-full object-contain"
                loop
                playsInline
                muted
              />
            </div>
          </div>
          {/* AI Recruiter */}
          <div className="flex flex-col items-center w-full">
            <span className="text-lg lg:text-2xl font-bold text-white text-center mb-2">
              AI<span className={gradientText}> RECRUITER</span>
            </span>
            <div className="relative w-[220px] lg:w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                 onClick={() => handleVideoClick('ai-video')}>
              <video 
                id="ai-video"
                src="/videos/ai.mp4" 
                className="w-full h-full object-contain"
                loop
                playsInline
                muted
              />
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <div className="flex space-x-4 text-gray-400 text-xs lg:text-sm w-full justify-center lg:w-auto lg:absolute lg:bottom-6 lg:right-6 lg:justify-end static">
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