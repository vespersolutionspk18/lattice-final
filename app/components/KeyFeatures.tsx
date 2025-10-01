'use client'

import React from 'react'

interface KeyFeature {
  number: number
  title: string
  description: string
}

interface KeyFeaturesProps {
  features: KeyFeature[]
}

const KeyFeatures = ({ features }: KeyFeaturesProps) => {
  return (
    <div className="py-16 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8 flex flex-col items-center text-center">
                {/* Numbered Circle */}
                <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-semibold text-[#3b82f6]">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-4 leading-tight tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base tracking-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
