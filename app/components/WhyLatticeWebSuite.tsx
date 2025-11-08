'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface WhyLatticeCard {
  title: string
  description: string
  icon: LucideIcon
}

interface WhyLatticeWebSuiteProps {
  cards: WhyLatticeCard[]
}

const WhyLatticeWebSuite = ({ cards }: WhyLatticeWebSuiteProps) => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="orange-peach-gradient-why-websuite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="50%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
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

        .animated-gradient-websuite {
          background: linear-gradient(
            45deg,
            #fb923c,
            #ea580c,
            #fb923c,
            #ea580c
          );
          background-size: 300% 300%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Lattice?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Nobody does home remodeling like we do. We&apos;re confident—here&apos;s why.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Animated gradient border wrapper */}
                <div className="relative p-[3px] rounded-2xl animated-gradient-websuite shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {/* Card content */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 min-h-[400px] sm:min-h-[450px] md:h-[500px] flex flex-col items-center">
                    {/* Icon with gradient */}
                    <card.icon
                      size={40}
                      strokeWidth={1.5}
                      style={{ stroke: 'url(#orange-peach-gradient-why-websuite)' }}
                      className="mb-4 sm:mb-6 sm:w-12 sm:h-12"
                    />

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center px-4">
          <button className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
            style={{
              background: 'linear-gradient(to right, #fb923c 0%, #ea580c 20%, #ea580c 80%, #fb923c 100%)'
            }}>
            <span>Interested? Get more information</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
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

export default WhyLatticeWebSuite
