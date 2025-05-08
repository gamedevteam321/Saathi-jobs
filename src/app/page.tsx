// Importing layout components
import Footer from "@/components/layout/Footer";

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
import IdentityVerified2 from "@/components/sections/IdentityVerified/IdentityVerified2";
import DownloadAndHireSection from "@/components/sections/DownloadAndHireSection";

// Main page component that serves as the landing page
export default function Home() {
  return (
    // Main container with minimum height of screen and white background
    <main className="min-h-screen bg-black">
      {/* Hero section for main banner/headline */}
      <HeroSection />
      {/* Carousel showcasing key features */}
      <FeatureCarousel />
      {/* Section about fast train feature */}
      <FastTrainSection />
      {/* Identity Verified section (added above Saathi Ecosystem) */}
      {/* <IdentityVerified /> */}
      <IdentityVerified2 />
      {/* Section explaining the Saathi ecosystem */}
      <SaathiEcosystem />
      
      {/* Section for creators */}
      <Impact />
      <DownloadAndHireSection />
      
      {/* Footer component */}
      {/* Section about community features */}
      <CommunitySection />
      <Footer />
    </main>
  );
}
