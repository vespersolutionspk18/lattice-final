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
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-[#3b82f6]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{guarantee.title}</h3>
                <p className="text-lg leading-relaxed">{guarantee.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Guarantees
