"use client";
import React, { useEffect, useRef } from "react";
import SimpleButton from "../components/SimpleButton";
import { gsap } from "gsap";

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    
    if (mediaQuery.matches) {
      const cards = container.querySelectorAll('.case-study-card');
      
      // Small delay to ensure layout is complete
      setTimeout(() => {
        cards.forEach((card) => {
        const overlay = card.querySelector('.card-overlay');
        const hiddenContent = card.querySelector('.hidden-content');
        
        if (!overlay || !hiddenContent) return;
        
        // Set initial state for hidden content
        gsap.set(hiddenContent, {
          opacity: 0,
          height: 0,
          overflow: "hidden"
        });
        
        // Get initial width
        const initialWidth = card.getBoundingClientRect().width;
        const expandedWidth = initialWidth * 1.2; // 20% larger
        
        // Temporarily show hidden content to get its height
        gsap.set(hiddenContent, { height: "auto", opacity: 0 });
        const hiddenHeight = hiddenContent.getBoundingClientRect().height;
        gsap.set(hiddenContent, { height: 0 });
        
        // Add will-change for performance
        gsap.set(card, { 
          willChange: "width",
          zIndex: 1
        });
        gsap.set(overlay, { willChange: "backdrop-filter" });

        // Create timeline for hover animations
        const tl = gsap.timeline({ 
          paused: true,
          onStart: () => {
            gsap.set(card, { zIndex: 10 });
          },
          onReverseComplete: () => {
            gsap.set(card, { zIndex: 1 });
          }
        });
        
        tl.to(card, {
          width: expandedWidth,
          duration: 1,
          ease: "power2.inOut"
        })
        .to(overlay, {
          backdropFilter: "blur(12px)",
          duration: 0.8,
          ease: "power2.out"
        }, 0)
        .to(hiddenContent, {
          height: hiddenHeight,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out"
        }, 0.3);

        // Add hover event listeners
        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => tl.reverse();

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
        
        // Store cleanup function
        (card as HTMLElement & { _cleanup?: () => void })._cleanup = () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
          tl.kill();
        };
      });
      }, 100); // 100ms delay
      
      // Cleanup on unmount
      return () => {
        const cardsToCleanup = container.querySelectorAll('.case-study-card');
        cardsToCleanup.forEach((card) => {
          const typedCard = card as HTMLElement & { _cleanup?: () => void };
          if (typedCard._cleanup) {
            typedCard._cleanup();
          }
        });
      };
    }
  }, []);

  return (
 <div className="p-5">
        <div className="p-5  flex flex-col gap-3 tracking-tighter mt-24">
      <div className="flex flex-row gap-16">
          <h5 className="text-4xl text-black/80 font-medium tracking-tighter w-[28%]">
            Featured Projects
          </h5>
          <p className="text-black/75 text-2xl tracking-tighter w-[68%]">
            See how Lattice transforms contractors&apos; businesses. From stunning 3D visualizations to complete digital transformations, these success stories showcase the power of our integrated B2B solutions for home remodeling professionals.
          </p>
        </div>
      <div ref={containerRef} className="flex flex-col mt-8 lg:flex-row gap-5">
        <div
          className="case-study-card h-[700px] rounded-3xl bg-cover flex flex-col justify-end p-5 gap-3 w-full lg:w-1/3 relative overflow-hidden"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80)" }}
        >
          <div className="card-overlay absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div>
              <h5 className="text-white">KITCHEN REMODEL</h5>
              <h5 className="text-white/90 font-sans text-xl tracking-tight">
                $2.3M Luxury Kitchen Project
              </h5>
            </div>
            <div className="hidden-content">
              <p className="text-white/90 font-sans tracking-tight py-6">
                Complete digital workflow from 3D design to project management. 
                Closed in 3 days using our AI designer and cinematic video.
              </p>
              <SimpleButton text="VIEW PROJECT" route="/case-studies" />
            </div>
          </div>
        </div>

        <div
          className="case-study-card h-[700px] rounded-3xl bg-cover flex flex-col justify-end p-5 gap-3 w-full lg:w-1/3 relative overflow-hidden"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80)" }}
        >
          <div className="card-overlay absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div>
              <h5 className="text-white">WHOLE HOME</h5>
              <h5 className="text-white/90 font-sans text-xl tracking-tight">
                Digital Showroom Success
              </h5>
            </div>
            <div className="hidden-content">
              <p className="text-white/90 font-sans tracking-tight py-6">
                Virtual showroom generated 150+ qualified leads in first month. 
                CRM automation increased conversion rate by 60%.
              </p>
              <SimpleButton text="VIEW PROJECT" route="/case-studies" />
            </div>
          </div>
        </div>

        <div
          className="case-study-card h-[700px] rounded-3xl bg-cover flex flex-col justify-end p-5 gap-3 w-full lg:w-1/3 relative overflow-hidden"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80)" }}
        >
          <div className="card-overlay absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div>
              <h5 className="text-white">BATHROOM</h5>
              <h5 className="text-white/90 font-sans text-xl tracking-tight">
                5x Revenue Growth
              </h5>
            </div>
            <div className="hidden-content">
              <p className="text-white/90 font-sans tracking-tight py-6">
                Contractor scaled from $500K to $2.5M annually using our 
                complete suite. Free website ranks #1 locally.
              </p>
              <SimpleButton text="VIEW PROJECT" route="/case-studies" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CaseStudies;