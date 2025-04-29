import Header from "@/components/Header";
import FeatureCarousel from "@/components/FeatureCarousel";
import CommunitySection from "@/components/CommunitySection";
import CreatorSection from "@/components/CreatorSection";
import CommunityEvolutionSection from "@/components/CommunityEvolutionSection";
import BusinessSection from "@/components/BusinessSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CommunitySection />
      <FeatureCarousel />
      <CreatorSection />
      <CommunityEvolutionSection />
      <BusinessSection />
      <DownloadAppSection />
      <Footer />
    </main>
  );
}
