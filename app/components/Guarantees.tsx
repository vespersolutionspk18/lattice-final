'use client'

import React from 'react'
import { Shield, Award, Clock } from 'lucide-react'

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Money-Back Guarantee',
      description: 'Not satisfied? Get a full refund within 30 days, no questions asked. We stand behind our platform with complete confidence in the value it delivers to your business.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every rendering, design, and plan is reviewed by certified professionals. We guarantee top-tier quality that meets industry standards and exceeds client expectations.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your deadlines. If we miss a promised delivery time, your next project is on us. Your timeline matters, and we guarantee to meet it every single time.'
    }
  ]

  return (
    <div className="py-16 px-10 bg-white">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gold-gradient-border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Guarantees
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Some things are just universal and obvious, the guarantees we offer are no different.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              {/* Circle with Gold Gradient Border and Blue Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  {/* Gold gradient border circle */}
                  <svg className="w-20 h-20" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="37"
                      fill="white"
                      stroke="url(#gold-gradient-border)"
                      strokeWidth="3"
                    />
                  </svg>
                  {/* Icon centered inside */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <guarantee.icon
                      className="w-10 h-10 text-[#3b82f6]"
                      strokeWidth={2}
                      fill="none"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {guarantee.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Guarantees
