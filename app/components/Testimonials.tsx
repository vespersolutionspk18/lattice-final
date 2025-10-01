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
      const scrollPosition = currentIndex * 420; // 400px width + 20px gap
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
    <div className="flex flex-row gap-10 p-10 text-black/95">
      <div className="flex flex-col gap-5 w-[25%] justify-between">
        <div className="flex flex-col gap-3">
          <h5 className="text-lg">{title}</h5>
          <h4 className="text-3xl font-semibold">{subtitle}</h4>
        </div>
        <div className="flex flex-row gap-3">
          <button 
            onClick={handlePrevious}
            className="w-12 h-12 bg-stone-200/40 rounded-full text-black flex flex-col items-center justify-center hover:bg-stone-300/50 transition-colors duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg 
              width="20" 
              height="20" 
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
            className="w-12 h-12 bg-stone-200/40 rounded-full text-black flex flex-col items-center justify-center hover:bg-stone-300/50 transition-colors duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg 
              width="20" 
              height="20" 
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
      <div className="relative flex-1 overflow-hidden">
       
        {/* Testimonials container */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row gap-5  overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="rounded-3xl bg-stone-200/40 p-7 flex flex-col gap-7 justify-between min-w-[400px] w-[400px] h-[360px] transition-opacity duration-300"
            >
              <p className="text-lg">
                {testimonial.body}
              </p>
              <div className="flex flex-row gap-7">
                <div className="w-12 h-12 bg-highlighter-green rounded-xl text-white flex flex-col items-center justify-center">
                  <p className="text-2xl font-semibold">{testimonial.clientName.charAt(0)}</p>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-xl">{testimonial.clientName}</h5>
                  <p className="text-lg">{testimonial.clientCompany}</p>
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
