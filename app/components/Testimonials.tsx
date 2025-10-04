import React, { useState, useEffect, useRef } from 'react'


export interface Testimonial {
  id: number;
  body: string;
  clientName: string;
  clientCompany: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  testimonials, 
  title = "Testimonials",
  subtitle = "What Our Clients Say About Us" 
}) => {
  // Create infinite array by tripling the testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % testimonials.length;
          return nextIndex;
        });
      }, 4000); // Change testimonial every 4 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Scroll to current testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Calculate responsive card width + gap
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 768;

      let cardWidth = 400; // desktop default
      let gap = 20;

      if (isMobile) {
        cardWidth = 280;
        gap = 12;
      } else if (isTablet) {
        cardWidth = 320;
        gap = 16;
      }

      const scrollPosition = currentIndex * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    // Reset auto-scroll timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      return newIndex;
    });

    // Restart auto-scroll after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        return nextIndex;
      });
    }, 4000);
  };

  const handleNext = () => {
    // Reset auto-scroll timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % testimonials.length;
      return newIndex;
    });

    // Restart auto-scroll after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        return nextIndex;
      });
    }, 4000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 md:p-8 lg:p-10 text-black/95">
      <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[25%] justify-between">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h5 className="text-base sm:text-lg">{title}</h5>
          <h4 className="text-2xl sm:text-3xl font-semibold">{subtitle}</h4>
        </div>
        <div className="flex flex-row gap-2 sm:gap-3">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-200/40 rounded-full text-black flex flex-col items-center justify-center hover:bg-stone-300/50 transition-colors duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              width="18"
              height="18"
              className="sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-200/40 rounded-full text-black flex flex-col items-center justify-center hover:bg-stone-300/50 transition-colors duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              width="18"
              height="18"
              className="sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden w-full lg:w-auto">
       
        {/* Testimonials container */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-3 sm:gap-4 md:gap-5 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="rounded-2xl sm:rounded-3xl bg-stone-200/40 p-5 sm:p-6 md:p-7 flex flex-col gap-5 sm:gap-6 md:gap-7 justify-between min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] md:min-w-[400px] md:w-[400px] min-h-[300px] sm:h-[340px] md:h-[360px] transition-opacity duration-300"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                {testimonial.body}
              </p>
              <div className="flex flex-row gap-4 sm:gap-5 md:gap-7">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-highlighter-green rounded-lg sm:rounded-xl text-white flex flex-col items-center justify-center flex-shrink-0">
                  <p className="text-xl sm:text-2xl font-semibold">{testimonial.clientName.charAt(0)}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg sm:text-xl">{testimonial.clientName}</h5>
                  <p className="text-base sm:text-lg text-black/70">{testimonial.clientCompany}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
