"use client";

import { Button } from "@/ui/button";
import Header from "@/components/layout/Header";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-black mt-0 pt-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/herobg.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      
      {/* Header */}
      <div className="w-full relative z-20">
        <Header />
      </div>
      
      {/* Content */}
      <div className="container h-full pb-10 relative z-10 px-6 flex flex-col justify-end items-center text-white gap-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3">
        The Future of Hiring is Here
        </h1>
        <Button 
          variant="business" 
          className="text-2xl w-fit font-bold rounded-[7px] transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] text-black hover:from-[#FF9A01] hover:via-[#FFD955] hover:to-[#FFC01D]"
        >
          Post. Match. Hire
        </Button>
      </div>
    </section>
  );
}
