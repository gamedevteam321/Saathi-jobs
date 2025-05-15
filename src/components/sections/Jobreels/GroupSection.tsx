import React, { useEffect, useState, useRef, ReactNode } from 'react';
import './GroupSection.css';
import './MobileScreenStyles.css';

// Adding custom styles to reduce gap between process items
const customStyles = {
  processItem: {
    marginBottom: '0px', // Reduced further from 15px to 5px
  },
  progressionCircle: {
    backgroundColor: '#4b5563', // gray-600
    transition: 'all 0.3s ease',
  },
  activeCircle: {
    background: 'linear-gradient(to right, #FFC01D, #FFD955, #FF9A01)',
  }
};

interface ProcessStep {
  number: string | ReactNode;
  title: string | ReactNode;
  description: string | ReactNode;
  requirements: {
    title: string | ReactNode;
    items: string[] | ReactNode[];
  };
}

const processSteps: ProcessStep[] = [
  {
    number: '',
    title: 'Reels not Resumes',
    description: 'Disruptive hiring with short video reels',
    requirements: {
      title: "",
      items: []
    }
  },
  {
    number: '',
    title: 'Watch Listen Apply',
    description: <>Complex Job Descriptions become Simple Short Video Job Posts <br/> AI/ML algorithms for an Instant Match</>,
    requirements: {
      title: "",
      items: []
    }
  },
  {
    number: '',
    title: <>24/7 <span className='bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent'>AI Recruiter</span></>,
    description: 'Instant interview with Employers AI Avatar',
    requirements: {
      title: "",
      items: []
    }
  }
];

interface ResponsiveImage {
  src: string;
  srcset: string;
  sizes: string;
}

const mockupImages: ResponsiveImage[] = [
  {
    src: "images/JobReel.png",
    srcset: "",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "images/JobPost.png",
    srcset: "",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "images/AIinterview.png",
    srcset: "",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  
];

const GuideSection: React.FC<{showFrame?: boolean}> = ({ showFrame = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mockupFrameRef = useRef<HTMLDivElement>(null);
  const processWrapperRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mockupImagesRef = useRef<Array<HTMLImageElement | null>>([]);
  const lastScrollYRef = useRef<number>(0);
  const tickingRef = useRef<boolean>(false);
  const currentIndexRef = useRef<number>(0);

  // Initialize intersection observer for animations
  useEffect(() => {
    // Setup intersection observer for triggering animations
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.33, 0.75]
    };

    // Observer for entrance animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('process-wrapper')) {
            entry.target.classList.add('in-view');
          } else if (entry.target.classList.contains('process-item')) {
            entry.target.classList.add('visible');
          }
        }
      });
    }, options);

    // Observe process wrapper for entrance animation
    if (processWrapperRef.current) {
      observerRef.current.observe(processWrapperRef.current);
    }

    // Observe each process item
    if (stepsRef.current) {
      const processItems = stepsRef.current.querySelectorAll('.process-item');
      processItems.forEach(item => {
        if (observerRef.current) {
          observerRef.current.observe(item);
        }
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Initialize mockup image refs
  useEffect(() => {
    // Clear any previous active classes
    mockupImagesRef.current.forEach((img) => {
      if (img && img.classList.contains('active')) {
        img.classList.remove('active');
      }
    });
    
    // Set initial mockup visibility (first item active)
    const firstImage = mockupImagesRef.current[0];
    if (firstImage) {
      firstImage.classList.add('active');
    }
    
    // Reset current index and active step
    currentIndexRef.current = 0;
    setActiveStep(0);
      
    // Mark the first circle as active
    const circles = document.querySelectorAll('.progression-circle');
    circles.forEach((circle, i) => {
      if (i === 0) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }, []);

  // Update when process steps change
  useEffect(() => {
    // Sync the active step with the image display
    const updateActiveStep = (index: number) => {
      setActiveStep(index);
      
      // Update mockup image visibility
      mockupImagesRef.current.forEach((img, imgIndex) => {
        if (img) {
          if (imgIndex === index) {
            img.classList.add('active');
          } else {
            img.classList.remove('active');
          }
        }
      });
      
      // Update progression circles
      const progressionCircles = document.querySelectorAll('.progression-circle');
      progressionCircles.forEach((circle, i) => {
        if (i <= index) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });
    };

    // Initial sync
    updateActiveStep(currentIndexRef.current);
    
    // Setup scroll observation for each process item
    const handleProcessStepVisibility = () => {
      if (!stepsRef.current) return;
      
      const processItems = stepsRef.current.querySelectorAll('.process-item');
      processItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const itemTop = rect.top;
        
        // Check if this item is in the middle of the viewport
        if (itemTop < viewportHeight * 0.6 && itemTop > -rect.height * 0.4) {
          if (currentIndexRef.current !== index) {
            currentIndexRef.current = index;
            updateActiveStep(index);
          }
        }
      });
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleProcessStepVisibility, { passive: true });
    
    // Initial check
    handleProcessStepVisibility();
    
    return () => {
      window.removeEventListener('scroll', handleProcessStepVisibility);
    };
  }, [processSteps]); // Re-run when process steps change

  // Handle scroll-based animations - modified to use the sync function
  useEffect(() => {
    const updateMockups = () => {
      if (!stepsRef.current) return;

      const processItems = stepsRef.current.querySelectorAll('.process-item');
      const progressBar = progressBarRef.current;
      
      processItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const itemTop = rect.top;
        const itemHeight = rect.height;
        
        // Calculate how far through the item we've scrolled (0 to 1)
        const scrollProgress = Math.min(
          Math.max(
            (viewportHeight * 0.5 - itemTop) / (itemHeight + viewportHeight * 0.5),
            0
          ),
          1
        );

        // Update progress bar
        if (progressBar && index === currentIndexRef.current) {
          const progress = (currentIndexRef.current + scrollProgress) / processItems.length * 100;
          progressBar.style.height = `${progress}%`;
        }
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
      
      if (!tickingRef.current && scrollDelta > 1) {
        window.requestAnimationFrame(() => {
          updateMockups();
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial update
    updateMockups();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="guide" className="transparent-bg">
      <div className="container w-container">
      
        <div className="process-wrapper" ref={processWrapperRef} data-animate="true">
          <div className="sliding-mockups-wrapper">
            <div className="sliding-mockups-frame" ref={mockupFrameRef}>
              {showFrame ? (
                <>
                  <div className="mockup-screen">
                    {mockupImages.map((image, index) => (
                      <img
                        key={index}
                        ref={el => {
                          mockupImagesRef.current[index] = el;
                        }}
                        src={image.src}
                        alt={`PursePulse Mockup ${index + 1}`}
                        className={`sliding-mockup-${index + 1} ${index === activeStep ? 'active' : ''}`}
                        sizes={image.sizes}
                        srcSet={image.srcset}
                      />
                    ))}
                  </div>
                  <img
                    src="images/frame.svg"
                    loading="lazy"
                    alt="iPhone Frame"
                    className="mockup-frame"
                  />
                </>
              ) : (
                <div className="responsive-image-container">
                  <img
                    src={mockupImages[activeStep]?.src}
                    alt={`Feature ${activeStep + 1}`}
                    className="responsive-feature-image"
                    sizes={mockupImages[activeStep]?.sizes}
                    srcSet={mockupImages[activeStep]?.srcset}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="steps-wrapper" ref={stepsRef} data-animate="true">
            <div className="process-path">
              <div className="progress-bar" ref={progressBarRef}></div>
            </div>
            {processSteps.map((step, index) => (
              <div key={index} className="process-item" style={customStyles.processItem}>
                <div className="process-center">
                  <div 
                    className={`progression-circle ${index <= activeStep ? 'active' : ''}`}
                    style={index === activeStep ? 
                      { ...customStyles.progressionCircle, ...customStyles.activeCircle } : 
                      customStyles.progressionCircle}
                  ></div>
                </div>
                <div className="process-right">
                  <div className="process-step-wrapper">
                    <div className="large-number">{step.number}</div>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-regular text-white font-['Helvetica'] pb-2 md:pb-3">{step.title}</h3>
                    <p className="text-md sm:text-base text-gray-400 mb-2 sm:mb-6 max-w-[280px] sm:max-w-none mx-auto md:mx-0 font-['Helvetica'] md:text-[18px] font-light italic leading-tight">{step.description}</p>
                    <div className="process-detail-wrapper">
                      <h4 >{step.requirements.title}</h4>
                      <ul role="list">
                        {step.requirements.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
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

export default GuideSection; 