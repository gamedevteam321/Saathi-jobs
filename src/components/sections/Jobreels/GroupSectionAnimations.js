// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all process items
document.querySelectorAll('.process-item').forEach(item => {
    observer.observe(item);
});

// Handle mockup transitions
const processItems = document.querySelectorAll('.process-item');
const mockups = document.querySelectorAll('.sliding-mockup-1, .sliding-mockup-2, .sliding-mockup-3, .sliding-mockup-4, .sliding-mockup-5');
let currentIndex = 0;
let lastScrollY = window.scrollY;
let scrollTimeout;

// Show first mockup by default
mockups[0].classList.add('active');

// Update mockups based on scroll position
const updateMockups = () => {
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

        // Update all mockups based on their position relative to current index
        mockups.forEach((mockup, mockupIndex) => {
            if (mockupIndex === currentIndex) {
                // Current mockup
                mockup.style.transform = `translateY(${-scrollProgress * 100}%) scale(${1 - scrollProgress * 0.05})`;
                mockup.style.opacity = 1 - scrollProgress;
                mockup.style.zIndex = '1';
            } else if (mockupIndex === currentIndex + 1 && scrollProgress > 0) {
                // Next mockup
                mockup.style.transform = `translateY(${(1 - scrollProgress) * 100}%) scale(${0.95 + scrollProgress * 0.05})`;
                mockup.style.opacity = scrollProgress;
                mockup.style.zIndex = '3';
            } else if (mockupIndex < currentIndex) {
                // Previous mockups
                mockup.style.transform = `translateY(-100%) scale(0.95)`;
                mockup.style.opacity = 0;
                mockup.style.zIndex = '1';
            } else if (mockupIndex > currentIndex + 1) {
                // Future mockups
                mockup.style.transform = `translateY(100%) scale(0.95)`;
                mockup.style.opacity = 0;
                mockup.style.zIndex = '2';
            } else {
                // Reset other mockups
                mockup.style.transform = '';
                mockup.style.opacity = '';
                mockup.style.zIndex = '';
            }
        });

        // Update current index when scroll progress is complete
        if (scrollProgress > 0.95 && index === currentIndex) {
            currentIndex = Math.min(currentIndex + 1, mockups.length - 1);
        } else if (scrollProgress < 0.05 && index === currentIndex - 1) {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        // Update progression circles
        document.querySelectorAll('.progression-circle').forEach((circle, i) => {
            if (i <= currentIndex) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    });
};

// Add scroll event listener with throttling
let ticking = false;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);
    
    if (!ticking && scrollDelta > 1) { // Very small threshold for smooth updates
        window.requestAnimationFrame(() => {
            updateMockups();
            lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Initial update
updateMockups(); 