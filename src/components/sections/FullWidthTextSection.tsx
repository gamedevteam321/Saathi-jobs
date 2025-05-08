import React from "react";

const FullWidthTextSection = () => {
  return (
    <section className="w-full bg-black py-4 px-4 md:px-10">
      <div className="w-full flex flex-col gap-2 md:gap-4">
        <h2 className="text-white font-regular text-lg md:text-3xl w-full text-center md:text-left mb-2 md:mb-4 md:px-0 px-2">
          Trusted by
        </h2>
        <div className="w-full ">
          <h2 className="text-gray-800 font-bold text-5xl md:text-[180px] lg:text-[290px] w-full leading-none text-center md:text-left mb-4">
            2,000,000+
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FullWidthTextSection; 