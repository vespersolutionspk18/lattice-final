"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            3D Rendering <br></br> & Visualization
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Close deals 3x faster with photorealistic 3D renderings that bring projects to life. Every rendering includes a FREE 4K cinematic video perfect for presentations and social media. Show clients exactly what they&apos;re buying before you break ground – the ultimate sales tool for contractors.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2800&auto=format&fit=crop"
          alt="Photorealistic 3D interior rendering"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero