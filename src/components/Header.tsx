"use client";

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { id: "our-story", label: "Our Story", target: "#our-story" },
    { id: "features", label: "Features", target: "#features" },
    { id: "safety", label: "Safety", target: "#safety" },
    { id: "community", label: "Community", target: "#community" },
    { id: "creators", label: "Creators", target: "#creators" },
    { id: "business", label: "Business", target: "#business" }
  ];

  const handleMenuItemClick = (target: string) => {
    setMenuOpen(false);
    // Scroll to the target section
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm py-4 px-6 md:px-12 lg:px-16 border-b border-gray-100">
      <div className="flex justify-end items-center w-full">
        <button
          onClick={toggleMenu}
          className="relative z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-end justify-center w-8 h-6 space-y-1.5">
            <span className={`block h-0.5 w-8 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0 w-8' : 'opacity-100 w-6'}`} />
            <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 w-8' : 'w-4'}`} />
          </div>
        </button>
      </div>
      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto h-full flex items-center justify-center px-6">
          <nav className="text-center">
            <ul className="space-y-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.target)}
                    className="text-2xl font-medium hover:text-pink-500 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
