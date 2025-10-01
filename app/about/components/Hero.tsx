"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl text-black/95 tracking-tighter w-[40%]">
            Powering America&apos;s Contractors
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Lattice is the premier B2B technology partner for home remodelers and contractors across the United States. From cutting-edge design tools to comprehensive CRM solutions, we provide everything contractors need to streamline operations, win more projects, and scale their businesses efficiently in today&apos;s competitive market.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/assets/aboutvideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Hero
