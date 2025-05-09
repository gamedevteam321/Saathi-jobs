// Add this as the first line in src/components/layout/Footer.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ContactModal from './ContactModal';
import TermsModal from './TermsModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/thesaathiapp',
    icon: '/assets/home/linkdin.svg',
    text: 'Follow us on LinkedIn',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/thesaathiapp/',
    icon: '/assets/home/facebook.svg',
    text: 'Follow us on Facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/thesaathiapp/',
    icon: '/assets/home/instagram.svg',
    text: 'Follow us on Instagram',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@thesaathiapp',
    icon: '/assets/home/youtube.svg',
    text: 'Subscribe our YouTube channel',
  },
];

export default function Footer() {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#070707] pt-16 pb-6 border-t border-[#19181f]">
      <div className="container flex flex-col items-center">
        {/* Heading */}
        

        {/* Social Cards */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start justify-between bg-[#07060d] rounded-2xl p-6 min-h-[140px] border border-[#19181f] shadow-sm hover:shadow-lg transition group"
            >
              <div className="mb-4">
                <Image src={item.icon} alt={item.name} width={50} height={50} />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent group-hover:underline leading-tight">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Gradient Border */}
        <div className="w-full h-0.5 bg-[#19181f] rounded-full " />

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                window.__disableJobReelsFullScreen = true;
                window.__disableIdentityVerifiedFullScreen = true;
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Image src="/assets/home/Logo.svg" alt="Saathi Logo" width={100} height={28} />
            </a>
          </div>

          {/* Center Links */}
          <div className="flex gap-6 text-gray-400 text-base font-medium">
            <button onClick={() => setContactOpen(true)} className="hover:text-[#363CD2] transition bg-transparent border-none cursor-pointer p-0 m-0">Contact Us</button>
            <button onClick={() => setPrivacyOpen(true)} className="hover:text-[#363CD2] transition bg-transparent border-none cursor-pointer p-0 m-0">Privacy Policy</button>
            <button onClick={() => setTermsOpen(true)} className="hover:text-[#363CD2] transition bg-transparent border-none cursor-pointer p-0 m-0">Terms</button>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-base font-medium">
            2024©SaathiWorld App
          </div>
        </div>
      </div>
      {isContactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {isTermsOpen && <TermsModal onClose={() => setTermsOpen(false)} />}
      {isPrivacyOpen && <PrivacyPolicyModal onClose={() => setPrivacyOpen(false)} />}
    </footer>
  );
}
