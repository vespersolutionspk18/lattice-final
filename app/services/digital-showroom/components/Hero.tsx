"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-between w-full" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thick text-black/95 tracking-tighter w-full lg:w-[40%]">
            Digital <br></br> Showroom
        </h1>
        <h5 className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-tight sm:leading-tight text-black/90 w-full lg:w-[50%]">
Your portfolio, materials, and finishes available 24/7 online. Let clients explore options from home, build wish lists, and get excited about their project before they even meet you. Convert browsers into buyers with an immersive digital experience that showcases your best work and capabilities.
        </h5>
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2801&auto=format&fit=crop"
          alt="Digital showroom interface displaying materials and designs"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero