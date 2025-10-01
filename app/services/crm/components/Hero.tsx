"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            CRM Built <br></br> for Contractors
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Finally, a CRM that understands how contractors work. Manage leads, track projects, automate follow-ups, and get paid faster – all in one platform designed specifically for remodelers and builders. Stop losing leads in spreadsheets and start growing your business systematically.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
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