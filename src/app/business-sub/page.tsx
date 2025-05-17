"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ContactModal from '@/components/layout/ContactModal';
import TermsModal from '@/components/layout/TermsModal';
import PrivacyPolicyModal from '@/components/layout/PrivacyPolicyModal';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import VideoSlider from './VideoSlider';
import VideoActionCard from '@/app/business-sub/VideoActionCard';


const gradientText = "bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent";
const gradientBg = "bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01]";

// Mock data for videos - replace with your actual video data
const videoData = {
  jobreels: [
    { id: 1, src: "/videos/jobreels/jobreel-1.mp4", thumbnail: "/videos/thumbnails/jobreels/jobreel-1.png", title: "" },
    { id: 2, src: "/videos/jobreels/jobreel-2.mp4", thumbnail: "/videos/thumbnails/jobreels/jobreel-2.png", title: "" },
    { id: 3, src: "/videos/jobreels/jobreel-3.mp4", thumbnail: "/videos/thumbnails/jobreels/jobreel-3.png", title: "" },
    { id: 4, src: "/videos/jobreels/jobreel-4.mp4", thumbnail: "/videos/thumbnails/jobreels/jobreel-4.png", title: "" },
    { id: 5, src: "/videos/jobreels/jobreel-5.mp4", thumbnail: "/videos/thumbnails/jobreels/jobreel-5.png", title: "" },
  ],
  jobposts: [
    { id: 1, src: "/videos/jobposts/jobpost-1.mp4", thumbnail: "/videos/thumbnails/jobposts/jobpost-1.png", title: "" },
    { id: 2, src: "/videos/jobposts/jobpost-2.mp4", thumbnail: "/videos/thumbnails/jobposts/jobpost-2.png", title: "" },
    { id: 3, src: "/videos/jobposts/jobpost-3.mp4", thumbnail: "/videos/thumbnails/jobposts/jobpost-3.png", title: "" },
    { id: 4, src: "/videos/jobposts/jobpost-4.mp4", thumbnail: "/videos/thumbnails/jobposts/jobpost-4.png", title: "" },
    { id: 5, src: "/videos/jobposts/jobpost-5.mp4", thumbnail: "/videos/thumbnails/jobposts/jobpost-5.png", title: "" },
  ],
  ai: [
    { id: 1, src: "/videos/ai/ai-1.mp4", thumbnail: "/videos/thumbnails/ai/ai-1.png", title: "" },
    { id: 2, src: "/videos/ai/ai-2.mp4", thumbnail: "/videos/thumbnails/ai/ai-2.png", title: "" },
    { id: 3, src: "/videos/ai/ai-3.mp4", thumbnail: "/videos/thumbnails/ai/ai-3.png", title: "" },
    { id: 4, src: "/videos/ai/ai-4.mp4", thumbnail: "/videos/thumbnails/ai/ai-4.png", title: "" },
    { id: 5, src: "/videos/ai/ai-5.mp4", thumbnail: "/videos/thumbnails/ai/ai-5.png", title: "" },
  ],
};

const BusinessSubPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [showCarousel, setShowCarousel] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoClick = (videoId: string) => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      if (playingVideo === videoId) {
        video.pause();
        video.muted = true;
        setPlayingVideo(null);
      } else {
        if (playingVideo) {
          const currentVideo = document.getElementById(playingVideo) as HTMLVideoElement;
          if (currentVideo) {
            currentVideo.pause();
            currentVideo.muted = true;
          }
        }
        video.preload = "auto";
        video.play();
        video.muted = false;
        setPlayingVideo(videoId);
      }
    }
  };

  const handleShowMore = (section: string) => {
    setShowCarousel(section);
    setCurrentVideoIndex(0);
  };

  const handleCarouselVideoClick = (videoId: string) => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    if (video) {
      if (playingVideo === videoId) {
        video.pause();
        video.muted = true;
        setPlayingVideo(null);
      } else {
        if (playingVideo) {
          const currentVideo = document.getElementById(playingVideo) as HTMLVideoElement;
          if (currentVideo) {
            currentVideo.pause();
            currentVideo.muted = true;
          }
        }
        video.preload = "auto";
        video.play();
        video.muted = false;
        setPlayingVideo(videoId);
      }
    }
  };

  const nextVideo = () => {
    if (showCarousel) {
      const videos = videoData[showCarousel as keyof typeof videoData];
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }
  };

  const prevVideo = () => {
    if (showCarousel) {
      const videos = videoData[showCarousel as keyof typeof videoData];
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
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

        {/* Video Slider - Only show when jobreels is selected */}
        {showCarousel === 'jobreels' && (
          <div className="w-full mb-8">
            <VideoSlider videos={videoData.jobreels.map(video => ({
              videoUrl: video.src,
              extraText: video.title,
              thumbnail: video.thumbnail
            }))} />
          </div>
        )}
        {showCarousel === 'jobposts' && (
          <div className="w-full mb-8">
            <VideoSlider videos={videoData.jobposts.map(video => ({
              videoUrl: video.src,
              extraText: video.title,
              thumbnail: video.thumbnail
            }))} />
          </div>
        )}
        {showCarousel === 'ai' && (
          <div className="w-full mb-8">
            <VideoSlider videos={videoData.ai.map(video => ({
              videoUrl: video.src,
              extraText: video.title,
              thumbnail: video.thumbnail
            }))} />
          </div>
        )}

        {/* Phone Mockups */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 py-4 lg:py-0 lg:flex-1 mt-4 lg:mt-0">
          {/* Mobile View - Video Sliders */}
          <div className="lg:hidden w-full flex flex-col gap-8">
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">
                JOB <span className={gradientText}>REELS</span>
              </h2>
              <VideoSlider videos={videoData.jobreels.map(video => ({
                videoUrl: video.src,
                extraText: video.title,
                thumbnail: video.thumbnail
              }))} />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">
                JOB <span className={gradientText}>POSTS</span>
              </h2>
              <VideoSlider videos={videoData.jobposts.map(video => ({
                videoUrl: video.src,
                extraText: video.title,
                thumbnail: video.thumbnail
              }))} />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">
                AI <span className={gradientText}>RECRUITER</span>
              </h2>
              <VideoSlider videos={videoData.ai.map(video => ({
                videoUrl: video.src,
                extraText: video.title,
                thumbnail: video.thumbnail
              }))} />
            </div>
          </div>

          {/* Desktop View - VideoActionCards */}
          <div className="hidden lg:flex w-full flex-row justify-center items-center gap-8 lg:gap-12">
            <VideoActionCard
              title="JOB REELS"
              gradientText={gradientText}
              videoId="jobreel-video"
              videoSrc="/videos/jobreel.mp4"
              thumbnailSrc="/videos/thumbnails/jobreel.png"
              isPlaying={playingVideo === 'jobreel-video'}
              onVideoClick={handleVideoClick}
              onShowMore={handleShowMore}
              section="jobreels"
              gradientBg={gradientBg}
            />
            <VideoActionCard
              title="JOB POSTS"
              gradientText={gradientText}
              videoId="jobpost-video"
              videoSrc="/videos/jobpost.mp4"
              thumbnailSrc="/videos/thumbnails/jobpost.png"
              isPlaying={playingVideo === 'jobpost-video'}
              onVideoClick={handleVideoClick}
              onShowMore={handleShowMore}
              section="jobposts"
              gradientBg={gradientBg}
            />
            <VideoActionCard
              title="AI RECRUITER"
              gradientText={gradientText}
              videoId="ai-video"
              videoSrc="/videos/ai.mp4"
              thumbnailSrc="/videos/thumbnails/ai.png"
              isPlaying={playingVideo === 'ai-video'}
              onVideoClick={handleVideoClick}
              onShowMore={handleShowMore}
              section="ai"
              gradientBg={gradientBg}
            />
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