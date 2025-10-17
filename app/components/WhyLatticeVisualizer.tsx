'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface WhyLatticeCard {
  title: string
  description: string
  icon: LucideIcon
  titleElement?: React.ReactNode
}

interface WhyLatticeProps {
  cards: WhyLatticeCard[]
}

const WhyLatticeVisualizer = ({ cards }: WhyLatticeProps) => {
  return (
    <div className="py-16 px-10 bg-white">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="purple-gradient-why-visualizer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#581c87" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#581c87" />
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

        .animated-gradient-visualizer {
          background: linear-gradient(
            45deg,
            #9333ea,
            #581c87,
            #9333ea,
            #581c87
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
            No Subscription or Membership Fee, One Flat Rate
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative mb-12">
          <div className="grid grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Animated gradient border wrapper */}
                <div className="relative p-[3px] rounded-2xl animated-gradient-visualizer shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {/* Card content */}
                  <div className="bg-white rounded-2xl p-8 h-[500px] flex flex-col items-center">
                    {/* Icon with gradient */}
                    <div className="mb-6">
                      <card.icon
                        size={48}
                        strokeWidth={1.5}
                        style={{ stroke: 'url(#purple-gradient-why-visualizer)' }}
                      />
                    </div>

                    <div className="mb-4 min-h-[4rem] flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 text-center">
                        {card.titleElement || card.title}
                      </h3>
                    </div>

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
              background: 'linear-gradient(to right, #9333ea 0%, #581c87 20%, #581c87 80%, #9333ea 100%)'
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

export default WhyLatticeVisualizer
