"use client";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-1 opacity-0">
            Bringing you<br />
            closer to the people
          </h1>
          <div className="flex gap-4 mt-6 animate-fade-in-2 opacity-0">
            <div className="relative w-32 h-32 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            </div>
            <div className="relative w-32 h-32 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="md:absolute right-0 md:-mt-16 animate-fade-in-3 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 md:mb-10">
              and things<br />
              you love
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-36 h-36 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              </div>
              <div className="relative w-36 h-36 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-16 animate-bounce">
        <a href="#about" className="text-gray-500 hover:translate-y-1 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
