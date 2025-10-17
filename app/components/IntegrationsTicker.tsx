'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Integration {
  name: string
  category: string
  logoUrl: string
  fallbackUrl?: string
}

interface IntegrationsTickerProps {
  accentColor?: string
}

const IntegrationsTicker = ({ accentColor = '#3b82f6' }: IntegrationsTickerProps) => {
  const integrations: Integration[] = [
    {
      name: 'QuickBooks Online',
      category: 'Accounting',
      logoUrl: 'https://logo.clearbit.com/intuit.com'
    },
    {
      name: 'QuickBooks Desktop',
      category: 'Accounting',
      logoUrl: 'https://logo.clearbit.com/intuit.com'
    },
    {
      name: 'Xero',
      category: 'Accounting',
      logoUrl: 'https://logo.clearbit.com/xero.com'
    },
    {
      name: 'Stripe',
      category: 'Payments',
      logoUrl: 'https://logo.clearbit.com/stripe.com'
    },
    {
      name: 'PlanSwift',
      category: 'Estimating',
      logoUrl: 'https://logo.clearbit.com/planswift.com'
    },
    {
      name: 'STACK',
      category: 'Estimating',
      logoUrl: 'https://logo.clearbit.com/stack.com'
    },
    {
      name: 'RSMeans',
      category: 'Cost Database',
      logoUrl: 'https://logo.clearbit.com/rsmeans.com'
    },
    {
      name: 'Chief Architect',
      category: 'Design',
      logoUrl: 'https://logo.clearbit.com/chiefarchitect.com'
    },
    {
      name: 'SketchUp',
      category: 'Design',
      logoUrl: 'https://logo.clearbit.com/sketchup.com'
    },
    {
      name: 'Houzz Pro',
      category: 'Design',
      logoUrl: 'https://logo.clearbit.com/houzz.com'
    },
    {
      name: 'Microsoft 365',
      category: 'Productivity',
      logoUrl: 'https://logo.clearbit.com/microsoft.com'
    },
    {
      name: 'Dropbox',
      category: 'Storage',
      logoUrl: 'https://logo.clearbit.com/dropbox.com'
    },
    {
      name: 'Mailchimp',
      category: 'Marketing',
      logoUrl: 'https://logo.clearbit.com/mailchimp.com'
    },
    {
      name: 'Zapier',
      category: 'Automation',
      logoUrl: 'https://logo.clearbit.com/zapier.com'
    }
  ]

  // Duplicate the integrations array for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations]

  return (
    <div className="py-16 px-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with the tools you already use. Our platform integrates effortlessly with industry-leading software.
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling content */}
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {duplicatedIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="ticker-item group"
                >
                  <div
                    className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 transition-all duration-300 hover:shadow-lg min-w-[280px] h-[180px] flex flex-col justify-center items-center gap-4"
                    style={{
                      borderColor: 'rgb(229, 231, 235)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accentColor
                      const h3 = e.currentTarget.querySelector('h3')
                      if (h3) {
                        (h3 as HTMLElement).style.color = accentColor
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(229, 231, 235)'
                      const h3 = e.currentTarget.querySelector('h3')
                      if (h3) {
                        (h3 as HTMLElement).style.color = 'rgb(17, 24, 39)'
                      }
                    }}
                  >
                    <div className="relative w-20 h-20 flex items-center justify-center bg-gray-50 rounded-xl p-3 overflow-hidden">
                      <Image
                        src={integration.logoUrl}
                        alt={`${integration.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain rounded-lg"
                        unoptimized
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors">
                        {integration.name}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            And many more integrations available through our API and Zapier connection
          </p>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .ticker-content {
          display: flex;
          gap: 1.5rem;
          animation: scroll 60s linear infinite;
          width: fit-content;
        }

        .ticker-item {
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .ticker-content {
            animation-duration: 40s;
          }
        }
      `}</style>
    </div>
  )
}

export default IntegrationsTicker
