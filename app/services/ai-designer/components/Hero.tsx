"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            AI-Powered <br></br> Design Tool
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Generate unlimited design concepts in seconds. Our AI Designer instantly transforms any space with different styles, layouts, and materials. Show clients multiple professional options during the first meeting, test ideas before committing, and win projects with speed and creativity that competitors can&apos;t match.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
          alt="AI-powered interior design interface"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero