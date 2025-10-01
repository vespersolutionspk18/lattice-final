'use client'

import LeadChange from '@/app/homecomponents/LeadChange'
import Header from '@/app/components/Header'
import Hero from './components/Hero'
import Footer from '@/app/components/Footer'
import ServicesSection from '../../services/service'
import { ServiceItem } from '@/app/types/service'
import React from 'react'
import Testimonials, { Testimonial } from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import StickyNavigation from '@/app/components/StickyNavigation'
import KeyFeatures from '@/app/components/KeyFeatures'

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

const missionPillars: ServiceItem[] = [
  {
    id: 'empower-contractors',
    title: 'Empower Every Contractor',
    description: 'We believe every contractor deserves access to enterprise-level technology. From solo operators to growing teams, our mission is to provide world-class tools that were previously only available to large companies. We level the playing field, giving independent contractors the power to compete and win against any competitor.',
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Contractor using advanced technology',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'drive-innovation',
    title: 'Drive Industry Innovation',
    description: 'The home remodeling industry deserves better technology. We push boundaries by integrating AI, automation, and cutting-edge design tools specifically for contractors. Our commitment to innovation means constantly evolving our platform, staying ahead of trends, and ensuring our clients always have the most advanced tools available.',
    imageSrc: 'https://images.unsplash.com/photo-1581092918484-8313e1f946b4?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Innovation and technology in construction',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'deliver-results',
    title: 'Deliver Measurable Results',
    description: 'Technology should drive tangible business outcomes. We measure success through contractor revenue growth, time savings, and higher close rates. Every feature we build is designed to deliver measurable ROI – whether it\'s increasing project values by 45%, saving 15 hours weekly, or boosting close rates by 89%.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    imageAlt: 'Business growth and success metrics',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
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
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Core Values' },
    { id: 'services', label: 'Mission Pillars' },
    { id: 'testimonials', label: 'Contractor Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Join Us' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Contractor-First Technology',
      description: 'Every decision starts with one question: How does this serve contractors better? We design with empathy, build with purpose, and deliver solutions that solve real challenges you face daily.'
    },
    {
      number: 2,
      title: 'Partnership Over Profit',
      description: 'We\'re not just a software vendor—we\'re your strategic business partner. Your growth is our mission. We invest in your success through dedicated support, comprehensive training, and continuous innovation.'
    },
    {
      number: 3,
      title: 'Innovation Without Compromise',
      description: 'We integrate cutting-edge technology like AI and automation, but never sacrifice usability. Enterprise power meets contractor simplicity—advanced tools that anyone can use effectively from day one.'
    },
    {
      number: 4,
      title: 'Measurable Impact',
      description: 'We measure success through your results: revenue growth, time savings, higher close rates. Every feature is designed to deliver tangible ROI that you can see in your bottom line.'
    }
  ]

  return (
    <div className="pt-5">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <StickyNavigation items={navigationItems} />
      <div id="key-features">
        <KeyFeatures features={keyFeatures} />
      </div>
      <div id="services">
        <ServicesSection
          services={missionPillars}
          sectionId="mission-pillars"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
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
