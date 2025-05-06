"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  // Remove scrolled and minimized props
}

interface NavLink {
  href: string;
  text: string;
}

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleHome = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const anchor = window.location.hash.slice(1);
    console.log(anchor);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView();
      }
    }
  };

  const navLinks: NavLink[] = [
    // { href: "#", text: "About Us" },
  ];

  const menuOptions: NavLink[] = [
    { href: "#", text: "JobReels" },
    { href: "#", text: "FastTrain" },
    { href: "#", text: "TrueID" },
    { href: "#", text: "Ecosystem" },
    { href: "#", text: "Testimonials" },
    { href: "#", text: "Impact" },
    { href: "#", text: "Media" },
    { href: "#", text: "Business" },
  ];

  const handleBusinessClick = () => {
    // Add your business navigation logic here
    console.log("Business button clicked");
  };

  return (
    <motion.div 
      className="flex px-4 md:px-20 items-center justify-between top-0 z-50 w-full transition-colors duration-300"
      initial={false}
      animate={{
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none',
      }}
    >
      <div>
        <a href={"/"}>
          <img
            width={100}
            height={24}
            src="/assets/home/Logo.svg"
            alt="saathi-logo"
          />
        </a>
      </div>

      {/* Desktop Navigation - Hidden when burger menu is used on all screens */}
      <div className="hidden md:flex justify-end items-center gap-3">
        {!isMenuOpen && navLinks.map((link, index) => (
          <Link
            key={index}
            className="font-poppins no-underline text-base font-semibold leading-6 text-white"
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
        
        {/* Business Button - Desktop */}
        {!isMenuOpen && (
          <button
            onClick={handleBusinessClick}
            className="flex items-center justify-center bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] text-black font-poppins text-xl font-semibold px-7 py-2 hover:from-[#FF9A01] hover:via-[#FFD955] hover:to-[#FFC01D] transition-colors rounded-[8px]"
          >
            <span>Business</span>
          </button>
        )}
        
        {/* Desktop Burger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none text-white"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Burger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none text-white"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-wrap h-screen bg-white/30 backdrop-blur-md z-50 flex flex-col items-start justify-start"
          >
            
            
            
            {/* Menu content with vertical layout */}
            <div className="flex flex-col items-start w-full px-3 md:px-16 pt-5 md:pt-10 pb-10">

              {/* 1. Logo at the top */}
              <div className="ml-3 mb-10 flex flex-row items-left justify-between gap-5">
                <img
                  width={100}
                  height={24}
                  src="/assets/home/Logo.svg"
                  alt="saathi-logo"
                />

                {/* Close button */} 
                <div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3 focus:outline-none text-white"
                      aria-label="Close Menu"
                    >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
              </div>

              
              {/* 2. Menu Options in 2 rows for desktop, stacked for mobile */}
              <div className="w-full h-full">
                {/* Mobile view - all options stacked */}
                <div className="md:hidden flex flex-col items-start gap-7">
                  {menuOptions.map((option, index) => (
                    <Link
                      key={index}
                      className="px-3 text-white font-poppins text-xl font-medium hover:text-gray-500 transition-colors "
                      href={option.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {option.text}
                    </Link>
                  ))}
                </div>
                
                {/* Desktop view - 2 horizontal sections */}
                <div className="hidden md:flex flex-col items-start gap-5">
                  {/* First row of options */}
                  <div className="flex flex-col flex-wrap gap-5">
                    {menuOptions.slice(0, 5).map((option, index) => (
                      <Link
                        key={index}
                        className="px-3  text-white font-poppins text-xl font-medium hover:text-gray-500 transition-colors"
                        href={option.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {option.text}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Second row of options */}
                  <div className="flex flex-col flex-wrap gap-5">
                    {menuOptions.slice(5).map((option, index) => (
                      <Link
                        key={index}
                        className="px-3 text-white font-poppins text-xl font-medium hover:text-gray-500 transition-colors"
                        href={option.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {option.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 3. Button at the bottom */}
              {/* <button
                onClick={() => {
                  handleBusinessClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-start justify-start gap-2 bg-[#FCCE35] text-black font-poppins text-2xl font-semibold px-8 py-3 hover:bg-[#e7bd2e] transition-colors rounded-[8px] ml-3"
              >
                <span>Business</span>
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header; 