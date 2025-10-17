"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Dedicated <br></br> Project-based Professionals
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Cut costs without cutting quality by downsizing your in-house team and hiring experienced remote professionals for design, construction documents, accounting, and more. Our experts work under your branding, fully integrated as part of your team throughout the project. Scale up or down as needed. Maximize efficiency while maintaining a seamless client experience.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
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
