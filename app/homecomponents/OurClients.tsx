import React from 'react'
import { MarqueeDemo } from '../components/MarqueeDemo'

const OurClients = () => {
  return (
   <div className="p-5">
      <div className="p-10 rounded-4xl  flex flex-col gap-24 tracking-tighter mb-10">
        <div className="flex flex-col gap-8 text-center items-center">
          <h5 className="text-4xl text-black/80 font-medium tracking-tighter ">
            What Our Clients Say
          </h5>
          <p className="text-black/75 text-2xl tracking-tighter w-[72%]">
            Discover what our valued clients have to say about their experience working with us. These testimonials reflect our commitment to delivering exceptional service, innovative solutions, and lasting partnerships that exceed expectations.
          </p>
        </div>
        </div>
        <MarqueeDemo />
        </div>
  )
}

export default OurClients
