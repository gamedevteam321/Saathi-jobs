import React, { useEffect, useState, useRef } from 'react';
import './GroupSection.css';
import './MobileScreenStyles.css';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  requirements: {
    title: string;
    items: string[];
  };
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Sign up',
    description: 'Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.',
    requirements: {
      title: "What you'll need",
      items: [
        'An active email address',
        'A strong, unique password',
        '60 seconds to complete registration'
      ]
    }
  },
  {
    number: '02',
    title: 'Set your goals',
    description: 'Set specific financial goals, whether it\'s saving for a vacation, an emergency fund, or planning for retirement.',
    requirements: {
      title: "What you'll need",
      items: [
        'Clear ideas about your financial aspirations',
        'Approximate savings goals',
        'Willingness to define and prioritize your financial objectives'
      ]
    }
  },
  {
    number: '03',
    title: 'Connect your accounts',
    description: 'Link your bank accounts, credit cards, and other financial accounts to PursePulse.',
    requirements: {
      title: "What you'll need",
      items: [
        'Online banking credentials',
        'Statements for credit cards and other accounts',
        'Secure internet connection'
      ]
    }
  },
  {
    number: '04',
    title: 'Personalize your budget',
    description: 'Tailor your budget based on your income, expenses, and financial goals for a personalized and effective financial plan.',
    requirements: {
      title: "What you'll need",
      items: [
        'Knowledge of your monthly income',
        'An understanding of your regular expenses',
        'Specific financial goals to tailor your budget effectively'
      ]
    }
  },
  {
    number: '05',
    title: 'Explore all features',
    description: 'Dive into all of PursePulse\'s features to maximize your financial potential.',
    requirements: {
      title: "What you'll need",
      items: [
        'Curiosity to discover PursePulse features',
        'A willingness to explore and try out different tools',
        'Some time to navigate and get acquainted with the app\'s functionalities'
      ]
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
    src: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be8a27d41a4a6be3f97_Sign%20Up%20Mockup.png",
    srcset: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be8a27d41a4a6be3f97_Sign%20Up%20Mockup-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be8a27d41a4a6be3f97_Sign%20Up%20Mockup-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be8a27d41a4a6be3f97_Sign%20Up%20Mockup.png 1080w",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201.png",
    srcset: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201.png 1080w",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205.png",
    srcset: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205.png 1080w",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204.png",
    srcset: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204.png 1080w",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  },
  {
    src: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203.png",
    srcset: "https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203.png 1080w",
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
  }
];

const GuideSection: React.FC = () => {
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
      threshold: [0, 0.25, 0.5, 0.75, 1]
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

  // Handle scroll-based animations
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

        // Update current index based on scroll position
        if (scrollProgress > 0.5 && index !== currentIndexRef.current) {
          currentIndexRef.current = index;
        }
        
        // Update progress bar
        if (progressBar && index === currentIndexRef.current) {
          const progress = (currentIndexRef.current + scrollProgress) / processItems.length * 100;
          progressBar.style.height = `${progress}%`;
        }
      });

      // If the current index changed, update the state (outside the scroll handler)
      if (currentIndexRef.current !== activeStep) {
        setActiveStep(currentIndexRef.current);
      }

      // Update progression circles
      const progressionCircles = document.querySelectorAll('.progression-circle');
      progressionCircles.forEach((circle, i) => {
        if (i <= currentIndexRef.current) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
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
    <section id="guide" className="section transparent-bg">
      <div className="container w-container">
        <div className="heading-wrapper center-aligned">
          <h2>Start for <span className="electric-indigo-text">free</span></h2>
          <p>No need to watch long-winded tutorials to get started with our app. Just follow these 5 steps and
            make your first transaction today!</p>
        </div>
        <div className="process-wrapper" ref={processWrapperRef} data-animate="true">
          <div className="sliding-mockups-wrapper">
            <div className="sliding-mockups-frame" ref={mockupFrameRef}>
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
                src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658289366fd3d02d1635fa13_iPhone14-space-black-min.svg"
                loading="lazy"
                alt="iPhone Frame"
                className="mockup-frame"
              />
            </div>
          </div>
          <div className="steps-wrapper" ref={stepsRef} data-animate="true">
            <div className="process-path">
              <div className="progress-bar" ref={progressBarRef}></div>
            </div>
            {processSteps.map((step, index) => (
              <div key={index} className="process-item">
                <div className="process-center">
                  <div className={`progression-circle ${index <= activeStep ? 'active' : ''}`}></div>
                </div>
                <div className="process-right">
                  <div className="process-step-wrapper">
                    <div className="large-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p className="paragraph-small">{step.description}</p>
                    <div className="process-detail-wrapper">
                      <h4>{step.requirements.title}</h4>
                      <ul role="list">
                        {step.requirements.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {index === 0 && (
                      <a href="#" className="button-primary-dark-bg-small w-button">Start free trial</a>
                    )}
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