import { ReactNode } from 'react';

interface IdentityVerifiedHeaderProps {
  title?: ReactNode;
  subtitle?: string;
  description?: ReactNode;
}

export default function IdentityVerifiedHeader({ 
  title = (
    <>
      Saathi True<span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
    </>
  ),
  subtitle = "LinkedIn of the Workforce",
  description = <div className="text-center md:text-left text-gray-400 text-2xl sm:text-lg md:text-[40px] font-regular pb-6 md:pb-10 max-w-5xl md:leading-none">A single automated snapshot of <br/> authenticated details redefining<br/>
                <span className=" text-white"> Worker-Employer</span> trust metrics</div>
}: IdentityVerifiedHeaderProps) {
  return (
    <div className="w-full bg-black min-h-[30vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div 
          className="text-center"
          style={{
            position: 'relative',
            zIndex: 50
          }}
        >
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white font-['Helvetica']">
            {title}
          </h1>
          <p className="text-gray-400 italic text-md sm:text-md md:text-[18px] py-1 font-['Helvetica']">
            {subtitle}
          </p>
          <div className="mt-1 md:mt-2">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[40px] font-light leading-tight mb-4 md:mb-6 font-['Helvetica']">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
} 