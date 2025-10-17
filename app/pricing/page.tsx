'use client'

import React, { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Guarantees from '@/app/components/Guarantees'
import { Check } from 'lucide-react'

type Service = 'crm' | '3d-rendering' | 'ai-designer' | 'design-plans' | 'digital-showroom' | 'web-seo'

interface PricingTier {
  name: string
  targetAudience: string
  price: string | number
  billingFrequency: string
  features: string[]
  highlighted?: boolean
}

const PricingPage = () => {
  const [selectedService, setSelectedService] = useState<Service>('crm')

  // Animated gradient style
  const animatedGradientStyle = `
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

    .animated-gradient-border {
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
  `

  const services = [
    { id: 'crm' as Service, label: 'LatticeAI CRM' },
    { id: '3d-rendering' as Service, label: '3D Rendering' },
    { id: 'ai-designer' as Service, label: 'LatticeAI Visualizer' },
    { id: 'design-plans' as Service, label: 'Remote Employees' },
    { id: 'digital-showroom' as Service, label: 'Digital Showroom' },
    { id: 'web-seo' as Service, label: 'LatticeAI Web Suite' }
  ]

  const pricingTiers: Record<Service, PricingTier[]> = {
    'crm': [
      {
        name: 'Essentials Plan',
        targetAudience: 'Foundational plan for daily operations',
        price: 299,
        billingFrequency: 'Per Month',
        features: [
          'Manage Leads, Projects & Invoicing',
          'Auto-Capture & Score Leads',
          'AI-Optimized Project Scheduling',
          'Auto-Generated Invoices & Reminders',
          'QuickBooks & Stripe Integration',
          'Automated Client Status Updates',
          'Professional Templates Included'
        ]
      },
      {
        name: 'Pro AI Suite',
        targetAudience: 'Most popular - Advanced AI-powered features',
        price: 399,
        billingFrequency: 'Per Month',
        features: [
          'Everything in Essentials Plan',
          'AI Scope of Work Generator',
          'On-Site Voice-to-CRM Sync',
          'Renovation ROI Estimator',
          '24/7 AI Customer Communication',
          'ML Project Decision Making',
          'FREE 3D Renderings for Customers',
          'FREE SEO-Optimized Website'
        ],
        highlighted: true
      }
    ],
    '3d-rendering': [
      {
        name: 'Interior Visualization',
        targetAudience: 'Professional interior rendering',
        price: 250,
        billingFrequency: 'Per Rendering',
        features: [
          'Photorealistic 3D Interior Render',
          '24-Hour Turnaround Guarantee',
          'Free 4K Cinematic Video',
          'Studio-Grade Post-Production',
          'Dedicated Design Liaison'
        ]
      },
      {
        name: 'Exterior Visualization',
        targetAudience: 'Professional exterior rendering',
        price: 250,
        billingFrequency: 'Per Rendering',
        features: [
          'Photorealistic 3D Exterior Render',
          '24-Hour Turnaround Guarantee',
          'Free 4K Cinematic Video',
          'Seasonal & Lighting Variations',
          'Studio-Grade Post-Production'
        ]
      },
      {
        name: 'IntEx Visualisation',
        targetAudience: 'Complete interior & exterior solution',
        price: 450,
        billingFrequency: 'Per Project',
        features: [
          'One Complete Interior Render',
          'One Complete Exterior Render',
          'Custom Material Digitization',
          'Free 4K Cinematic Videos',
          'Immersive AR/VR Walkthrough',
          'Dedicated Design Liaison'
        ],
        highlighted: true
      },
      {
        name: 'Custom Build & Multi-Project',
        targetAudience: 'For large-scale projects',
        price: 'Custom',
        billingFrequency: 'Quote',
        features: [
          'For Full House, Commercial, or Multi-Unit Projects',
          'Volume-Based Pricing',
          'Advanced AR/VR Integration',
          'Dedicated Project Manager',
          'Unlimited Revisions'
        ]
      }
    ],
    'ai-designer': [
      {
        name: 'AI Designer',
        targetAudience: 'Instant design concepts & exploration',
        price: 39.99,
        billingFrequency: 'Per Project',
        features: [
          'Designs in 10-30 Seconds',
          'Multi-Style Explorer (10+ Styles)',
          'Unlimited Design Variations',
          'Live Client Consultations',
          'Standard AI Models'
        ]
      },
      {
        name: 'AI Design Pro',
        targetAudience: 'Advanced AI with buildable designs',
        price: 59.99,
        billingFrequency: 'Per Project',
        features: [
          'Everything in AI Designer',
          'Code-Compliant Buildable Designs',
          'Kitchen & Bath AI Specialist',
          'Client-Facing Visualizer Tool',
          'Priority Support Team'
        ],
        highlighted: true
      }
    ],
    'design-plans': [
      {
        name: 'Dedicated Remote Professional',
        targetAudience: '60% Less Than a Traditional Hire Guaranteed',
        price: 'Custom',
        billingFrequency: 'Billed Per Project Duration',
        features: [
          'Designers, Drafters, Estimators, Accountants',
          'Operates Under Your Branding',
          'Code-Compliant Permit-Ready Plans',
          'Unlimited Design Revisions',
          'Bidding, Takeoffs & Financial Oversight',
          'Hire As Needed, No Long-Term Overhead'
        ],
        highlighted: true
      }
    ],
    'digital-showroom': [
      {
        name: 'Digital Showroom',
        targetAudience: 'Interactive online catalog for your work',
        price: 199,
        billingFrequency: 'Per Month',
        features: [
          '24/7 Branded Online Portfolio',
          'Click & Swap Material Replacement',
          'Client Wish Lists & Favorites',
          'Manual Quote Review & Send',
          'Custom Company Branding'
        ]
      },
      {
        name: 'AI-Powered Showroom',
        targetAudience: 'Intelligent automation & analytics',
        price: 399,
        billingFrequency: 'Per Month',
        features: [
          'Everything in Digital Showroom',
          'Auto-Generated Quotes (Zero-Touch)',
          'Budget-Adaptive Material Display',
          'Identify High-Intent Leads',
          'Automated Scarcity Alerts',
          'Live Competitor Price Tracking',
          'Dedicated ML Engineering Team'
        ],
        highlighted: true
      }
    ],
    'web-seo': [
      {
        name: 'Starter Web Presence',
        targetAudience: 'Professional online presence',
        price: 149,
        billingFrequency: 'Per Month',
        features: [
          'Custom-Designed Website ($5,000+ Value)',
          'Forms Feed Directly Into CRM',
          'Before/After Project Showcases',
          'Perfect on All Devices',
          'Reliable Hosting Included'
        ]
      },
      {
        name: 'Local SEO Growth Engine',
        targetAudience: 'Dominate your local market',
        price: 299,
        billingFrequency: 'Per Month',
        features: [
          'All Starter Features',
          'Rank #1 for "Contractor Near Me"',
          'GMB Management & Optimization',
          'Pages for Every Service Area',
          'Authority Building Across Web',
          'Track SEO Progress & Traffic'
        ],
        highlighted: true
      },
      {
        name: 'Ultimate Conversion Suite',
        targetAudience: 'Automated lead generation machine',
        price: 499,
        billingFrequency: 'Per Month',
        features: [
          'All SEO Features',
          'A/B Tested Design Elements',
          'Auto-Generate Social Content',
          'Interactive Showroom Embedded',
          'Quote Calculators & Live Chat',
          'AI Posts Popular Designs'
        ]
      }
    ]
  }

  const currentTiers = pricingTiers[selectedService]

  return (
    <>
      <style jsx>{animatedGradientStyle}</style>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">

      {/* Guarantees Section */}
      <div>
        <Guarantees />
      </div>

      <div className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6ce2ff 0%, #3b82f6 25%, #3b82f6 75%, #6ce2ff 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Transparent
              </span>{' '}
              Pricing
            </h1>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          {/* Service Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-200 font-medium ${
                  selectedService === service.id
                    ? 'bg-blue-600 text-white border-transparent shadow-lg'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className={`grid gap-8 ${
            selectedService === 'design-plans'
              ? 'grid-cols-1 max-w-2xl mx-auto'
              : selectedService === 'crm' || selectedService === 'ai-designer' || selectedService === 'digital-showroom'
              ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
              : selectedService === 'web-seo'
              ? 'grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {currentTiers.map((tier, index) => (
              <div key={index} className={tier.highlighted ? 'relative p-[3px] rounded-2xl animated-gradient-border shadow-xl hover:shadow-2xl transition-shadow duration-300' : ''}>
                <div
                  className={`bg-white rounded-2xl ${tier.highlighted ? '' : 'border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'} p-8 flex flex-col h-full`}
                >
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>

                {/* Target Audience */}
                <p className="text-sm text-gray-500 mb-6">
                  {tier.targetAudience}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-[#6ce2ff] via-[#3b82f6] to-[#6ce2ff] bg-clip-text text-transparent'
                      : 'text-[#3b82f6]'
                  }`}>
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {tier.billingFrequency}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? '' : 'text-green-700 stroke-[4] scale-[0.98]'
                        }`}
                        style={
                          tier.highlighted
                            ? {
                                stroke: 'url(#blue-cyan-gradient)',
                                fill: 'none'
                              }
                            : undefined
                        }
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-[#6ce2ff] via-[#3b82f6] to-[#6ce2ff] text-white hover:shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                  }`}
                >
                  Contact Sales
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="blue-cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6ce2ff" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <Footer />
      </main>
    </>
  )
}

export default PricingPage
