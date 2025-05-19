import React, { useEffect, useState, useRef, ReactNode } from 'react';
import image from 'next/image';

// Adding custom styles to reduce gap between process items
const customStyles = {
  processItem: {
    marginBottom: '0px', // Reduced further from 15px to 5px
  },
  progressionCircle: {
    backgroundColor: 'rgb(75, 85, 99)', // gray-600
    transition: 'all 0.3s ease',
  },
  activeCircle: {
    backgroundColor: '#FFC01D', // Using a single color instead of gradient
  }
};



interface ResponsiveImage {
  src: string;
  srcset: string;
  sizes: string;
}

const features = [
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/face_detection.svg" alt="Live Photo Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Live Photo</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-md md:text-[18px]'>Eliminating Fake Profiles</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/id_card.svg" alt="Aadhaar Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Adhaar</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-md md:text-[18px]'>Preventing Identity Fraud</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/legal_2.svg" alt="Legal Status Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Legal Status</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <><span className='text-gray-400 italic text-md md:text-[18px]'>Automated Court Case Checks</span></>,
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold">
        <img src="/assets/home/experience 1.svg" alt="Experience Verified" className="w-7 h-7" />
      </span>
    ),
    title: (<><span className="text-white">Experience</span> <span className="text-[#FFC226]">Verified</span></>),
    highlight: "Verified",
    desc: <span className='text-gray-400 italic text-md md:text-[18px]'>Past Employment Check with Rating</span>,
  },
];

const workerBenefits = [
  
  { icon: '/assets/home/Share.svg', title: 'Sharable', desc: 'Digital Biodata' },
  { icon: '/assets/home/Work-outline.svg', title: 'Potential for', desc: 'Better Jobs' },
  { icon: '/assets/home/Thumb-up.svg', title: 'Increased', desc: 'Self Esteem' },
  { icon: '/assets/home/Check-circle-outline.svg', title: 'Continued', desc: 'Growth' },
];

const employerBenefits = [
  { icon: '/assets/home/Verified-user.svg', title: 'Instant Access to', desc: 'Authentic Profiles' },
  { icon: '/assets/home/Timer.svg', title: 'Reduced', desc: 'Time-to-Hire' },
  { icon: '/assets/home/Stars.svg', title: 'Past employment History & ', desc: 'Ratings' },
  { icon: '/assets/home/Mindfulness.svg', title: 'Lower Attrition', desc: 'Higher Productivity' },
  
];
const mockupImages: ResponsiveImage[] = [
  {
    src: "/assets/home/identity1.png",
    srcset: "",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "/assets/home/identity1.png",
    srcset: "",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "/assets/home/identity1.png",
    srcset: "",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  
];

const sections = [
  {
    key: "trueid",
    heading: "Live on TrueID",
    title: (
      <>Live on Saathi <span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">TrueID</span></>
    ),
    content: (
      <>
        <div className="text-left text-xl sm:text-lg md:text-[28px] font-regular mt-2 mb-4 pl-5 text-gray-400">
          Live on <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 px-1">
          {features.map((f, i) => (
            <li key={i} className="flex flex-row items-center gap-2 md:gap-3 px-2">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold shrink-0">
                <img src={['/assets/home/face_detection.svg','/assets/home/id_card.svg','/assets/home/legal_2.svg','/assets/home/experience 1.svg'][i]} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-md sm:text-sm md:text-lg text-[#FFC226] text-left block break-words">
                  {f.title}
                </span>
                <div className="text-gray-200 text-md sm:text-sm md:text-base font-regular text-left break-words whitespace-normal">
                  {f.desc}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    image: '/assets/home/identity1.png'
  },
  {
    key: "worker",
    heading: "TrueID for the Workforce",
    title: null,
    content: (
      <>
        <div className="text-left text-xl sm:text-lg md:text-[28px] font-regular mt-2 mb-4 pl-5 text-gray-400">
          <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span> <span className="text-gray-400">for the Workforce</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 px-1">
          {workerBenefits.map((item, idx) => (
            <li key={idx} className="flex flex-row items-center gap-2 md:gap-3 px-2">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold shrink-0">
                <img src={item.icon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-regular text-md sm:text-sm md:text-[18px] text-white text-left block break-words">
                  {item.title} <span className="text-[#FFC226]">{item.desc}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    image: '/assets/home/identity1.png'
  },
  {
    key: "employer",
    heading: "TrueID for Recruiters",
    title: null,
    content: (
      <>
        <div className="text-left text-xl sm:text-lg md:text-[28px] font-regular mt-2 mb-4 pl-5 text-gray-400">
          <span className="text-white">True</span><span className="bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent">ID</span> <span className="text-gray-400">for Recruiters</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 px-1">
          {employerBenefits.map((item, idx) => (
            <li key={idx} className="flex flex-row items-center gap-2 md:gap-3 px-2">
              <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FFC226] rounded-full flex items-center justify-center font-bold shrink-0">
                <img src={item.icon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-regular text-md sm:text-sm md:text-[18px] text-white text-left block break-words">
                  {item.title} <span className="text-[#FFC226]">{item.desc}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    image: '/assets/home/identity1.png'
  },
];

const IdentityVerifiedMobile: React.FC<{showFrame?: boolean}> = ({ showFrame = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(-1);
  const stepsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mockupFrameRef = useRef<HTMLDivElement>(null);
  const processWrapperRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mockupImagesRef = useRef<Array<HTMLImageElement | null>>([]);
  const lastScrollYRef = useRef<number>(0);
  const tickingRef = useRef<boolean>(false);
  const currentIndexRef = useRef<number>(0);

  

  return (
    <section id="guide" className="transparent-bg block md:hidden">
      <div className="">
      
        <div className="" ref={processWrapperRef} data-animate="true">

           {/*Right Side*/}
           
           <div className="flex justify-center items-center">
                  
                    <img
                      key={mockupImages.length}
                      src='/assets/home/identity1.png'
                      alt={`Identity Verified`}
                      className={`mx-auto w-64 h-auto`}
                      sizes={`(max-width: 767px) 90vw, (max-width: 991px) 95vw, 940px`}
                    />
                
                </div>
        

        {/*Left Side*/}
        <div className="" ref={stepsRef} data-animate="true">
            {/* <div className="process-path">
              <div className="progress-bar" ref={progressBarRef}></div>
            </div> */}
            {sections.map((step, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 mx-auto my-8 w-[280px]">
                
                <div className="p-0">
                  <div className="">
                    
                    {/* <div className="large-number">{step.number}</div> 
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-regular text-white font-['Helvetica'] pb-2 md:pb-3">{step.title}</h3>
                    <p className="text-md sm:text-base text-gray-400 mb-2 sm:mb-6 max-w-[280px] sm:max-w-none mx-auto md:mx-0 font-['Helvetica'] md:text-[18px] font-light italic leading-tight">{step.description}</p>
                    */}
                    <div className="">
                    
                    {sections[index] && sections[index].content}
                  
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          
         
          
        </div>
      </div>
    </section>
  );
};

export default IdentityVerifiedMobile; 