"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-between w-full" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thick text-black/95 tracking-tighter w-full lg:w-[40%]">
            Dedicated <br></br> Project-based Professionals
        </h1>
        <h5 className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-tight sm:leading-tight text-black/90 w-full lg:w-[50%]">
Cut costs without cutting quality by downsizing your in-house team and hiring experienced remote professionals for design, construction documents, accounting, and more. Our experts work under your branding, fully integrated as part of your team throughout the project. Scale up or down as needed. Maximize efficiency while maintaining a seamless client experience.
        </h5>
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
          alt="Architectural floor plans and blueprints"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
