"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  phoneImage: string;
};

const features: FeatureItem[] = [
  {
    id: "explore",
    title: "Explore What's New",
    description: "Our continuously evolving features empower you to express yourself in new ways.",
    linkText: "Features",
    href: "#",
    phoneImage: "/phone-features.png"
  },
  {
    id: "reels",
    title: "Discover Reels",
    description: "Create, share, and watch short, entertaining videos on Instagram.",
    linkText: "Reels",
    href: "#",
    phoneImage: "/phone-reels.png"
  },
  {
    id: "stories",
    title: "Watch Stories",
    description: "Check out Stories and live videos from your favorite people.",
    linkText: "Stories",
    href: "#",
    phoneImage: "/phone-stories.png"
  },
  {
    id: "messenger",
    title: "Have a conversation",
    description: "Send messages, photos and videos to a friend or select group of people.",
    linkText: "Messenger",
    href: "#",
    phoneImage: "/phone-messenger.png"
  },
  {
    id: "shopping",
    title: "Shop what you love",
    description: "Browse the latest trends from your favorite brands and creators.",
    linkText: "Shopping",
    href: "#",
    phoneImage: "/phone-shopping.png"
  },
  {
    id: "explore-search",
    title: "Find something new",
    description: "Discover content and creators based on your interests.",
    linkText: "Search & Explore",
    href: "#",
    phoneImage: "/phone-explore.png"
  }
];

export default function FeatureCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((current) => (current + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Side - Feature Text */}
          <div className="relative min-h-[400px]">
            <div className="h-full">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`transition-all duration-500 ease-in-out ${
                    selectedIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute pointer-events-none'
                  }`}
                >
                  <div className="p-4">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <Link
                        href={feature.href}
                        className="inline-flex items-center text-gray-700 font-medium gap-2 hover:underline"
                      >
                        {feature.linkText}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex md:flex-col gap-2 mt-6 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-ml-8">
              {features.map((feature, index) => (
                <button
                  key={`dot-${feature.id}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? 'bg-pink-500 scale-150'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Phone Image */}
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="relative w-64 h-[500px] mx-auto bg-black rounded-[40px] border-8 border-black overflow-hidden shadow-xl phone-glow">
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
              >
                {/* Phone content placeholder */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
