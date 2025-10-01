"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Professional <br></br> Design & Plans
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Win more projects with Lattice&apos;s professional design services. Create stunning permit-ready plans, detailed construction drawings, and photorealistic 3D renderings that help your clients visualize their dream spaces. Our tools help contractors close deals faster and command premium prices.
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
