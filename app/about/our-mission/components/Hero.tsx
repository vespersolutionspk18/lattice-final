"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Our Mission
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Empowering America&apos;s contractors with innovative technology that drives growth, efficiency, and success. We transform how contractors operate, enabling them to deliver exceptional results while building sustainable, thriving businesses in the digital age.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
          alt="Construction technology and innovation"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
