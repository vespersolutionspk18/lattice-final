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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Blue Top Bar */}
              <div className="h-2 bg-[#3b82f6]"></div>

              {/* Card Content */}
              <div className="p-8 flex flex-col items-center text-center">
                {/* Numbered Circle */}
                <div className="w-11 h-11 rounded-full bg-[#3b82f6] flex items-center justify-center mb-6">
                  <span className="text-lg font-bold text-white">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
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
