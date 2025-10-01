'use client'

import LeadChange from '@/app/homecomponents/LeadChange'
import Header from '@/app/components/Header'
import Hero from './components/Hero'
import Footer from '@/app/components/Footer'
import React from 'react'
import Testimonials, { Testimonial } from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import { Target, TrendingUp, Users } from 'lucide-react'

const missionTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "Lattice understood our challenges from day one. They didn't just sell us software – they partnered with us to transform our entire operation. Revenue up 60%, admin time cut in half.",
    clientName: "David Martinez",
    clientCompany: "Martinez Home Builders"
  },
  {
    id: 2,
    body: "What sets Lattice apart is they actually understand the remodeling business. Every feature solves a real problem we face daily. It's clear their mission is our success.",
    clientName: "Sarah Johnson",
    clientCompany: "Johnson Renovations"
  },
  {
    id: 3,
    body: "Finally, a tech company that speaks contractor language. Lattice's tools are powerful but intuitive. They've leveled the playing field against bigger competitors.",
    clientName: "Mike Chen",
    clientCompany: "Chen Construction Group"
  },
  {
    id: 4,
    body: "Lattice's commitment to innovation keeps us ahead. While competitors are stuck with outdated tools, we're closing deals with AI-powered designs and instant 3D renderings.",
    clientName: "Rachel Torres",
    clientCompany: "Torres Design Build"
  },
  {
    id: 5,
    body: "Their mission to empower contractors isn't just talk. The support, the training, the constant platform improvements – they're genuinely invested in making us successful.",
    clientName: "James Peterson",
    clientCompany: "Peterson Remodeling Co."
  },
  {
    id: 6,
    body: "We tried generic CRMs and they failed miserably. Lattice gets the contractor workflow. It's built by people who understand our industry inside and out.",
    clientName: "Lisa Nguyen",
    clientCompany: "Nguyen Home Improvements"
  }
];

const missionPillars = [
  {
    id: 'empower-contractors',
    title: 'Empower Every Contractor',
    description: 'We believe every contractor deserves access to enterprise-level technology. From solo operators to growing teams, our mission is to provide world-class tools that were previously only available to large companies. We level the playing field, giving independent contractors the power to compete and win against any competitor.',
    icon: Users
  },
  {
    id: 'drive-innovation',
    title: 'Drive Industry Innovation',
    description: 'The home remodeling industry deserves better technology. We push boundaries by integrating AI, automation, and cutting-edge design tools specifically for contractors. Our commitment to innovation means constantly evolving our platform, staying ahead of trends, and ensuring our clients always have the most advanced tools available.',
    icon: Target
  },
  {
    id: 'deliver-results',
    title: 'Deliver Measurable Results',
    description: 'Technology should drive tangible business outcomes. We measure success through contractor revenue growth, time savings, and higher close rates. Every feature we build is designed to deliver measurable ROI – whether it\'s increasing project values by 45%, saving 15 hours weekly, or boosting close rates by 89%.',
    icon: TrendingUp
  }
]

const impactStats = [
  { value: '850+', label: 'Active Contractors' },
  { value: '60%', label: 'Average Revenue Increase' },
  { value: '15hrs', label: 'Saved Per Week' },
  { value: '89%', label: 'Higher Close Rates' }
]

const missionFAQs = [
  {
    id: 'faq-1',
    question: 'What makes Lattice different from other contractor software?',
    answer: 'We\'re built exclusively for the home remodeling industry with deep understanding of contractor workflows. Unlike generic business software, every feature addresses real contractor challenges. Plus, our mission-driven approach means we\'re constantly innovating to keep clients ahead of competitors.'
  },
  {
    id: 'faq-2',
    question: 'How does Lattice ensure contractor success?',
    answer: 'Success is built into our mission. We provide comprehensive onboarding, dedicated support, continuous training, and regular platform updates based on contractor feedback. Our success metrics are tied directly to your business growth – we only succeed when you succeed.'
  },
  {
    id: 'faq-3',
    question: 'Is Lattice suitable for small contractors or just large companies?',
    answer: 'Our mission is to empower ALL contractors, regardless of size. From solo operators to 50-person teams, our scalable platform grows with your business. Pricing is designed to deliver ROI at every level, and smaller contractors often see the most dramatic transformations.'
  },
  {
    id: 'faq-4',
    question: 'How does Lattice stay ahead of industry trends?',
    answer: 'Innovation is a core pillar of our mission. We invest heavily in R&D, partner with industry leaders, and maintain close relationships with contractors to identify emerging needs. We integrate new technologies like AI and automation before competitors even recognize the opportunity.'
  },
  {
    id: 'faq-5',
    question: 'What kind of results can contractors expect?',
    answer: 'Contractors typically see 40-60% revenue increases, 15+ hours saved weekly, and close rates improving by 50-89%. These aren\'t projections – they\'re actual results from our 850+ active contractors. Results vary by implementation, but measurable improvement is the standard.'
  },
  {
    id: 'faq-6',
    question: 'How does Lattice support the broader contractor community?',
    answer: 'Beyond software, we foster a nationwide contractor community for knowledge sharing and collaboration. We provide educational resources, industry insights, and advocacy for policies supporting small contractors. Our mission extends to elevating the entire profession.'
  }
]

const OurMissionPage = () => {
  return (
    <div className="pt-5">
      <Header />
      <div id="hero">
        <Hero />
      </div>

      {/* Vision Statement Section */}
      <div id="vision" className="py-24 px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 tracking-tight">
            Building the Future of Contracting
          </h2>
          <div className="space-y-6 text-xl leading-relaxed text-center">
            <p>
              We envision a world where every contractor—from solo operators to growing teams—has access to the same powerful technology that was once reserved for large enterprises.
            </p>
            <p>
              Through innovation, partnership, and unwavering commitment to contractor success, we&apos;re transforming the home remodeling industry one business at a time.
            </p>
            <p>
              Our mission isn&apos;t just about building software. It&apos;s about empowering the people who build America&apos;s homes.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div id="impact" className="py-20 px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Pillars Section */}
      <div id="pillars" className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 tracking-tight">
            The Three Pillars of Our Mission
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
            Everything we do is guided by these fundamental principles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPillars.map((pillar) => {
              const IconComponent = pillar.icon
              return (
                <div key={pillar.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <IconComponent className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-lg leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div id="testimonials">
        <Testimonials
          testimonials={missionTestimonials}
          title="Contractors Share Our Mission"
          subtitle="How Lattice's Mission-Driven Approach Transforms Businesses"
        />
      </div>
      <div id="faq">
        <FAQ
          items={missionFAQs}
          title="Mission & Values FAQs"
          subtitle="Understanding our commitment to contractor success"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Join 850+ Successful Contractors"/>
      </div>
      <Footer />
    </div>
  )
}

export default OurMissionPage
