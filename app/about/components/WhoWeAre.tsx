import React from 'react'

const WhoWeAre = () => {
  return (
    <div className="p-5">
        <div className="p-5 flex flex-col gap-16">
            <div className="flex flex-row gap-16 justify-between">
            <h5 className="text-4xl text-black/80 font-medium tracking-tighter w-[28%]">
            Who We Are
          </h5>
          <p className="text-black/75 text-2xl tracking-tighter w-[68%]">
            Lattice is more than a software company – we&apos;re your strategic partner in growth. Our integrated suite of B2B solutions is specifically designed for contractors and remodelers, combining industry expertise with cutting-edge technology to transform how you run your business.
          </p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">48</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    States Served
                </p>
                </div>
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">850+</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Active Contractors
                </p>
                </div>
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">98%</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Customer Satisfaction
                </p>
                </div>
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">$3.2M</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Revenue Generated
                </p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default WhoWeAre
