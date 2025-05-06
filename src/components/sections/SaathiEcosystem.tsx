"use client";
import Image from "next/image";

const SaathiEcosystem = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#070707] items-center gap-7 py-12">
      <div className="flex h-full flex-col items-center mt-10 mb-2">
        <Image
          src="/assets/home/Logo.svg"
          alt="logo"
          width={117}
          height={28}
        />
        <h2 className="text-center font-poppins text-[38px] md:text-[58px] font-semibold tracking-tight bg-gradient-to-r from-[#8f3aff] to-[#2a00ff] bg-clip-text text-transparent leading-tight">
          Ecosystem
        </h2>
      </div>

      <div className="flex justify-center w-full gap-4">
        <img
          src="/assets/home/section2_1.png"
          alt="mobile-1"
          className="max-h-[150px] md:max-h-[400px]"
        />
        <img
          src="/assets/home/section2_2.png"
          alt="mobile-2"
          className="z-10 max-h-[150px] md:max-h-[400px] relative"
        />
        <img
          src="/assets/home/section2_3.png"
          alt="mobile-3"
          className="max-h-[150px] md:max-h-[400px]"
        />
      </div>

      <p className="mt-5 max-w-[850px] text-gray-300 text-center font-Poppins text-[1.25rem] font-medium leading-[1.75rem] tracking-[-0.8px] sm:px-0 px-[10px]">
        An AI-powered mobile ecosystem transforming blue-collar lives through
        digital verified identities, skilling and certification, culminating
        with financial inclusion and security.
      </p>
    </div>
  );
};

export default SaathiEcosystem; 