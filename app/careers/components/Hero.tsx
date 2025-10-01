'use client'

import React from 'react'


const Hero = () => {
  return (
    <div className="relative h-[600px] flex flex-col justify-between overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        alt="Team collaboration"
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-90"
      />
      <div className="absolute inset-0 bg-black/20 -z-10"></div>
      
      <div className="w-full h-full p-5 flex flex-col justify-between relative z-10">
      
        <div className="p-5 flex flex-col gap-6">
          <h1 className="w-[75%] text-6xl text-white tracking-tighter">
            Join the team that&apos;s<br />transforming contractor success
          </h1>
          <h5 className="text-xl text-stone-300 tracking-tighter w-[60%]">
            We&apos;re building the future of B2B solutions for home remodelers. 
            Come work with passionate people who love what they do.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Hero