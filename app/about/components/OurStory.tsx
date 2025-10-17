import React from 'react'

const OurStory = () => {
  return (
    <div className="p-5 lg:p-10 flex flex-row w-full gap-12 justify-between my-16">
      <div className="w-1/2 tracking-tighter flex flex-col gap-8">
        <h5 className="text-4xl text-black/90 font-medium">Our Story</h5>
        <p className="text-2xl leading-tight tracking-tighter text-justify text-black/90">
            Our journey began in 2010, with a singular focus: building custom software solutions for home remodelers. For over a decade, our founder worked directly in the trenches with contractors and designers, gaining an intimate understanding of the unique challenges, from inefficient quoting and complex client communication to the relentless pressure on margins, that defined the industry.

<br></br><br></br>Convinced that brilliant craftspeople deserved technology that worked as hard as they do, the vision for a smarter way forward became clear. We founded Lattice to be that solution.

<br></br><br></br>Recognizing the transformative potential of our vision, we successfully secured $1.2 million in venture capital. This funding has accelerated our mission, allowing us to expand our team of experts and enhance our AI-powered technology. Today, Lattice is the culmination of that decade-long journey: a powerful, integrated suite of tools and services engineered to bring unprecedented efficiency, intelligence, and profitability to the remodeling businesses we know so well. We are more than a software company; we are a dedicated partner in our clients&apos; growth, relentlessly focused on ensuring they not only compete, but dominate their market.
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
