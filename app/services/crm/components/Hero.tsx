"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-between w-full" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thick text-black/95 tracking-tighter w-full lg:w-[40%]">
            CRM Built <br></br> for Contractors
        </h1>
        <h5 className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-tight sm:leading-tight text-black/90 w-full lg:w-[50%]">
Finally, a CRM that understands how contractors work. Manage leads, track projects, automate follow-ups, and get paid faster – all in one platform designed specifically for remodelers and builders. Stop losing leads in spreadsheets and start growing your business systematically.
        </h5>
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop"
          alt="CRM dashboard for contractors"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero