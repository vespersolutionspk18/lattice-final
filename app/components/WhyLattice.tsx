'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface WhyLatticeCard {
  title: string
  description: string
  icon: LucideIcon
}

interface WhyLatticeProps {
  cards: WhyLatticeCard[]
}

const WhyLattice = ({ cards }: WhyLatticeProps) => {
  return (
    <div className="py-16 px-10 bg-white">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="blue-cyan-gradient-why" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6ce2ff" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient {
          background: linear-gradient(
            45deg,
            #6ce2ff,
            #3b82f6,
            #6ce2ff,
            #3b82f6
          );
          background-size: 300% 300%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Lattice?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nobody does home remodeling like we do. We&apos;re confident—here&apos;s why.
          </p>
        </div>

        {/* Cards Grid - Offset positioning */}
        <div className="relative mb-12">
          {/* Hidden grid for alignment reference */}
          <div className="grid grid-cols-4 gap-6 opacity-0 pointer-events-none">
            <div className="h-0"></div>
            <div className="h-0"></div>
            <div className="h-0"></div>
            <div className="h-0"></div>
          </div>

          {/* Actual cards positioned absolutely */}
          <div className="grid grid-cols-3 gap-8 -mt-0">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  marginLeft: index === 0 ? 'calc((100% / 6))' : '0',
                }}
              >
                {/* Animated gradient border wrapper */}
                <div className="relative p-[3px] rounded-2xl animated-gradient shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {/* Card content */}
                  <div className="bg-white rounded-2xl p-8 h-[500px] flex flex-col items-center">
                    {/* Icon with gradient */}
                    <card.icon
                      size={48}
                      strokeWidth={1.5}
                      style={{ stroke: 'url(#blue-cyan-gradient-why)' }}
                      className="mb-6"
                    />

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-2 px-8 py-3 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
            style={{
              background: 'linear-gradient(to right, #6ce2ff 0%, #3b82f6 20%, #3b82f6 80%, #6ce2ff 100%)'
            }}>
            <span>Interested? Get more information</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhyLattice
