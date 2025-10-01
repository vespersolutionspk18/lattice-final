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
    { id: 'crm' as Service, label: 'Real Estate CRM' },
    { id: '3d-rendering' as Service, label: '3D Rendering' },
    { id: 'ai-designer' as Service, label: 'AI Designer' },
    { id: 'design-plans' as Service, label: 'Design & Plans' },
    { id: 'digital-showroom' as Service, label: 'Digital Showroom' },
    { id: 'web-seo' as Service, label: 'Web Design & SEO' }
  ]

  const pricingTiers: Record<Service, PricingTier[]> = {
    'crm': [
      {
        name: 'One-Time',
        targetAudience: 'Perfect for trying out our CRM',
        price: 250,
        billingFrequency: 'Per Package',
        features: [
          'CRM setup and configuration',
          'Basic lead management',
          'Email integration',
          '30-day support',
          'Standard reporting'
        ]
      },
      {
        name: 'Basic',
        targetAudience: 'Great for small contracting teams',
        price: 750,
        billingFrequency: 'Per Month',
        features: [
          'Everything in One-Time',
          'Unlimited leads and contacts',
          'Automated follow-ups',
          'QuickBooks integration',
          'Mobile app access',
          'Priority support'
        ]
      },
      {
        name: 'Pro',
        targetAudience: 'Best for growing contractor businesses',
        price: 1250,
        billingFrequency: 'Per Month',
        features: [
          'Everything in Basic',
          'FREE professional website',
          'Advanced automation workflows',
          'Team collaboration tools',
          'Custom reporting & analytics',
          'API access',
          'Dedicated account manager'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        targetAudience: 'For large contracting organizations',
        price: 'Custom',
        billingFrequency: 'Contact Us',
        features: [
          'Everything in Pro',
          'Custom integrations',
          'White-label options',
          'Advanced security features',
          'SLA guarantees',
          'On-premise deployment option',
          '24/7 premium support'
        ]
      }
    ],
    '3d-rendering': [
      {
        name: 'One-Time',
        targetAudience: 'Single project visualization',
        price: 250,
        billingFrequency: 'Per Rendering',
        features: [
          '1 photorealistic rendering',
          'FREE 4K cinematic video',
          '24-48 hour delivery',
          'Up to 2 revisions',
          'High-resolution files'
        ]
      },
      {
        name: 'Basic',
        targetAudience: 'Regular visualization needs',
        price: 750,
        billingFrequency: 'Per Month',
        features: [
          '5 renderings per month',
          'FREE 4K videos included',
          'Priority 24-hour delivery',
          'Unlimited revisions',
          'Portfolio integration',
          'Social media formats'
        ]
      },
      {
        name: 'Pro',
        targetAudience: 'High-volume contractors',
        price: 1250,
        billingFrequency: 'Per Month',
        features: [
          'Unlimited renderings',
          'Same-day rush available',
          'Virtual reality tours',
          'Interactive 360° views',
          'Branded templates',
          'Dedicated rendering team',
          'Marketing materials'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        targetAudience: 'Large firms and agencies',
        price: 'Custom',
        billingFrequency: 'Contact Us',
        features: [
          'Everything in Pro',
          'Custom workflow integration',
          'Multi-location support',
          'White-label delivery',
          'API access for automation',
          'Volume discounts',
          'Account manager'
        ]
      }
    ],
    'ai-designer': [
      {
        name: 'One-Time',
        targetAudience: 'Try AI-powered design',
        price: 250,
        billingFrequency: 'Per Package',
        features: [
          '50 AI design generations',
          'All design styles available',
          'Export in multiple formats',
          'Basic editing tools',
          '7-day access'
        ]
      },
      {
        name: 'Basic',
        targetAudience: 'Regular design work',
        price: 750,
        billingFrequency: 'Per Month',
        features: [
          '500 AI generations/month',
          'Real-time client collaboration',
          'Advanced style options',
          'Buildable design verification',
          'Save favorites library',
          'Email support'
        ]
      },
      {
        name: 'Pro',
        targetAudience: 'Professional designers',
        price: 1250,
        billingFrequency: 'Per Month',
        features: [
          'Unlimited AI generations',
          'Kitchen & bath specialist AI',
          'Custom brand style training',
          'Client portal access',
          'Priority processing',
          'Advanced export options',
          'Phone support'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        targetAudience: 'Design firms and studios',
        price: 'Custom',
        billingFrequency: 'Contact Us',
        features: [
          'Everything in Pro',
          'Multi-user team access',
          'Custom AI model training',
          'API integration',
          'White-label platform',
          'Dedicated support',
          'Custom workflows'
        ]
      }
    ],
    'design-plans': [
      {
        name: 'One-Time',
        targetAudience: 'Single project plans',
        price: 250,
        billingFrequency: 'Per Project',
        features: [
          'Basic construction plans',
          'Single revision included',
          'Standard delivery (5-7 days)',
          'PDF format',
          'Email support'
        ]
      },
      {
        name: 'Basic',
        targetAudience: 'Regular design needs',
        price: 750,
        billingFrequency: 'Per Month',
        features: [
          '2 permit-ready plans/month',
          'Code-compliant drawings',
          '3-5 day delivery',
          'Unlimited revisions',
          '3D rendering included',
          'Priority support'
        ]
      },
      {
        name: 'Pro',
        targetAudience: 'Active contractor businesses',
        price: 1250,
        billingFrequency: 'Per Month',
        features: [
          'Unlimited design plans',
          'Same-day rush available',
          'FREE 4K videos',
          'Structural engineering review',
          'Local code verification',
          'Dedicated designer',
          'Phone & email support'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        targetAudience: 'Large design-build firms',
        price: 'Custom',
        billingFrequency: 'Contact Us',
        features: [
          'Everything in Pro',
          'Multi-project management',
          'Custom template library',
          'Team collaboration tools',
          'API access',
          'White-label delivery',
          'Account manager'
        ]
      }
    ],
    'digital-showroom': [
      {
        name: 'One-Time',
        targetAudience: 'Basic portfolio setup',
        price: 250,
        billingFrequency: 'One-Time Setup',
        features: [
          'Showroom setup',
          'Up to 10 projects',
          'Basic analytics',
          'Standard templates',
          '30-day hosting'
        ]
      },
      {
        name: 'Basic',
        targetAudience: 'Growing portfolios',
        price: 750,
        billingFrequency: 'Per Month',
        features: [
          'Unlimited projects',
          'Material library access',
          'Lead capture forms',
          'Basic engagement analytics',
          'Mobile-optimized',
          'Email support'
        ]
      },
      {
        name: 'Pro',
        targetAudience: 'Professional contractors',
        price: 1250,
        billingFrequency: 'Per Month',
        features: [
          'Everything in Basic',
          'AR visualization',
          'Advanced analytics',
          'Wishlist functionality',
          'CRM integration',
          'Custom branding',
          'Priority support'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        targetAudience: 'Multi-location firms',
        price: 'Custom',
        billingFrequency: 'Contact Us',
        features: [
          'Everything in Pro',
          'Multi-showroom management',
          'White-label platform',
          'API access',
          'Custom integrations',
          'Dedicated hosting',
          'Account manager'
        ]
      }
    ],
    'web-seo': [
      {
        name: 'One-Time',
        targetAudience: 'Basic website setup',
        price: 250,
        billingFrequency: 'Setup Fee',
        features: [
          'Basic website design',
          'Up to 5 pages',
          'Mobile responsive',
          'Contact form',
          'Basic SEO setup'
        ]
      },
      {
        name: 'Basic',
        targetAudience: 'Small contractor websites',
        price: 750,
        billingFrequency: 'Per Month',
        features: [
          'Professional website',
          'FREE with CRM subscription',
          'Portfolio integration',
          'Google My Business setup',
          'Monthly SEO updates',
          'Basic analytics'
        ]
      },
      {
        name: 'Pro',
        targetAudience: 'Growth-focused contractors',
        price: 1250,
        billingFrequency: 'Per Month',
        features: [
          'Everything in Basic',
          'Local SEO domination',
          'Content creation',
          'Advanced analytics',
          'A/B testing',
          'Conversion optimization',
          'Monthly strategy calls'
        ],
        highlighted: true
      },
      {
        name: 'Enterprise',
        targetAudience: 'Large contractor organizations',
        price: 'Custom',
        billingFrequency: 'Contact Us',
        features: [
          'Everything in Pro',
          'Multi-location SEO',
          'Custom web development',
          'Dedicated content team',
          'Advanced integrations',
          'White-label options',
          'Account manager'
        ]
      }
    ]
  }

  const currentTiers = pricingTiers[selectedService]

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{animatedGradientStyle}</style>
      <Header />

      {/* Guarantees Section */}
      <div className="pt-24">
        <Guarantees />
      </div>

      <div className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span
                className="bg-gradient-to-r from-[#6ce2ff] via-[#3b82f6] to-[#6ce2ff] bg-clip-text text-transparent"
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
                className={`px-6 py-2 rounded-full border transition-all duration-200 ${
                  selectedService === service.id
                    ? 'bg-gradient-to-r from-[#6ce2ff] via-[#3b82f6] to-[#6ce2ff] text-white border-transparent'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  )
}

export default PricingPage
