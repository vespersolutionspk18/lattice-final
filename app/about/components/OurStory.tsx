import React from 'react'

const OurStory = () => {
  return (
    <div className="p-5 lg:p-10 flex flex-row w-full gap-12 justify-between my-16">
      <div className="w-1/2 tracking-tighter flex flex-col gap-8">
        <h5 className="text-4xl text-black/90 font-medium">Our Story</h5>
        <p className="text-2xl leading-tight tracking-tighter text-justify text-black/90">
            Lattice was founded in 2010 with a singular mission: to empower home remodelers and contractors with the technology they need to compete and thrive in the digital age. Starting in Virginia, we recognized that contractors were underserved by generic business software that didn&apos;t understand their unique workflows, client relationships, and project management needs. We set out to change that by building solutions specifically for the remodeling industry.

<br></br><br></br>Over the past 15 years, we&apos;ve grown from a small team serving local contractors to a nationwide B2B technology leader supporting over 850 contractors across 48 states. Our comprehensive suite of services – from advanced 3D rendering and AI-powered design tools to our industry-specific CRM and digital marketing solutions – has helped contractors generate over $3.2 million in additional revenue. What sets us apart is our deep understanding of the contractor&apos;s journey: from that first client inquiry to project completion and beyond.

<br></br><br></br>Today, Lattice stands as the trusted technology partner for America&apos;s contractors. We believe that when contractors have the right tools, they can focus on what they do best – transforming homes and improving lives. Our commitment to innovation means we&apos;re constantly evolving our platform, integrating new technologies like AI and automation to keep our clients ahead of the curve. At Lattice, we&apos;re not just providing software; we&apos;re building the future of the home remodeling industry, one contractor at a time.
        </p>
      </div>
      <div className="w-1/2 rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
          alt="Modern home interior remodeling"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default OurStory
