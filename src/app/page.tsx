"use client";

// Importing layout components
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import { useState, useEffect, useRef } from "react";

// Importing section components for different parts of the landing page
import FeatureCarousel from "@/components/sections/Jobreels/FeatureCarousel";
import FastTrainSection from "@/components/sections/fasttrain/FastTrainSection";
import CommunitySection from "@/components/sections/Reviews/CommunitySection";
import Impact from "@/components/sections/Impact";
import BusinessSection from "@/components/sections/BusinessSection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";
import HeroSection from "@/components/sections/HeroSection";
import SaathiEcosystem from "@/components/sections/SaathiEcosystem";
// import IdentityVerified from "@/components/sections/IdentityVerified/IdentityVerified";
import IdentityVerified2 from "@/components/sections/IdentityVerified/IdentityVerified";
import DownloadAndHireSection from "@/components/sections/DownloadAndHireSection";
import FullWidthTextSection from "@/components/sections/FullWidthTextSection";
import JobReelContainer from "@/components/sections/Jobreels/JobReelContainer";
import JobReelHeader from "@/components/sections/Jobreels/JobReelHeader";
import GroupSection from "@/components/sections/Jobreels/GroupSection";

// Main page component that serves as the landing page
export default function Home() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [identityIndex, setIdentityIndex] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      // Feature carousel scroll logic
      if (featuresRef.current) {
        const scrollY = window.scrollY;
        const featuresSectionTop = featuresRef.current.offsetTop;
        const featuresSectionHeight = featuresRef.current.offsetHeight;
        
        // Calculate how far through the features section we've scrolled
        const scrollProgress = (scrollY - featuresSectionTop) / featuresSectionHeight;
        
        // Determine which feature to show based on scroll position
        if (scrollProgress < 0.25) {
          setFeatureIndex(0);
        } else if (scrollProgress < 0.5) {
          setFeatureIndex(1);
        } else if (scrollProgress < 0.75) {
          setFeatureIndex(2);
        } else if (scrollProgress <= 1) {
          setFeatureIndex(2);
        }
      }
      
      // Identity verified scroll logic
      if (identityRef.current) {
        const scrollY = window.scrollY;
        const identitySectionTop = identityRef.current.offsetTop;
        const identitySectionHeight = identityRef.current.offsetHeight;
        
        // Calculate how far through the identity section we've scrolled
        const scrollProgress = (scrollY - identitySectionTop) / identitySectionHeight;
        
        // Determine which identity to show based on scroll position
        if (scrollProgress < 0.25) {
          setIdentityIndex(0);
        } else if (scrollProgress < 0.5) {
          setIdentityIndex(1);
        } else if (scrollProgress < 0.75) {
          setIdentityIndex(2);
        } else if (scrollProgress <= 1) {
          setIdentityIndex(2);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Main container with minimum height of screen and white background
    <main className="min-h-screen bg-black">
      {/* Hero section for main banner/headline */}
      <section className="section-transition">
        <HeroSection />
      </section>
      
      <section className="section-transition">
        <GroupSection />
      </section>
      <section className="section-transition">
        <JobReelHeader />
      </section>
      {/* Carousel showcasing key features */}
      <div 
        ref={featuresRef} 
        className="h-[400vh] relative"
      >
        <div className="sticky top-0 h-screen">
          <JobReelContainer selectedIndex={featureIndex} />
        </div>
      </div>
      
      {/* Section about fast train feature */}
      <FastTrainSection />
      
      {/* Identity Verified section with scroll effect */}
      <div 
        ref={identityRef} 
        className="h-[400vh] relative"
      >
        <div className="sticky top-0 h-screen">
          <IdentityVerified2 selectedIndex={identityIndex} />
        </div>
      </div>
      
      {/* Section explaining the Saathi ecosystem */}
      <section className="" id="ecosystem">
        <SaathiEcosystem />
      </section>
      
      {/* Section for creators */}
      <section className="" id="impact">
        <Impact />
      </section>
      
      {/* Section for Download and Hire */}
      <section className="" id="download">
        <DownloadAndHireSection />
      </section>
      
      {/* Section for Full Width Text */}
      <section className="" id="media">
        <FullWidthTextSection />
      </section>
      
      {/* Footer component */}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
