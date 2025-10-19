'use client'

import LeadChange from '@/app/homecomponents/LeadChange'
import Header from '@/app/components/Header'
import Hero from './components/Hero'
import Footer from '@/app/components/Footer'
import ServicesSection from '../service'
import { ServiceItem } from '@/app/types/service'
import React from 'react'
import Testimonials from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import StickyNavigation from '@/app/components/StickyNavigation'
import KeyFeatures from '@/app/components/KeyFeatures'
import WhyLattice from '@/app/components/WhyLattice'
import { Clock, CircleDollarSign, Glasses } from 'lucide-react'

const renderingServices: ServiceItem[] = [
  {
    id: 'ar-vr-difference',
    title: 'The AR/VR Difference',
    description: 'Bridge the gap between imagination and reality with immersive AR/VR. By allowing clients to virtually walk through their future space, you eliminate the single biggest obstacle to a decision: uncertainty. This tangible, true-to-scale experience builds profound confidence, leading directly to faster approvals, a significant reduction in costly change orders, and a stronger client commitment to investing in higher-margin, premium upgrades.',
    buttonText: 'Explore AR/VR',
    buttonHref: '/contact?service=ar-vr',
    imageSrc: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2674&auto=format&fit=crop',
    imageAlt: 'Client experiencing AR/VR visualization technology',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'exterior-visualization',
    title: 'Exterior & Curb Appeal Visualization',
    description: 'Transform curb appeal proposals into signed contracts with stunning exterior renderings. Show siding options, roofing materials, landscaping designs, and outdoor living spaces in photorealistic detail. Our renderings include seasonal variations and different lighting conditions. Perfect for additions, facades, decks, and complete exterior renovations. Helps clients understand how improvements increase property value.',
    buttonText: 'Get Exterior Renderings',
    buttonHref: '/contact?service=exterior-renderings',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Photorealistic exterior home rendering with landscaping',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: '4k-cinematic-videos',
    title: 'Free 4K Cinematic Walkthrough Videos',
    description: 'Elevate every client presentation into a compelling sales tool. Included with every 3D rendering, this complimentary 4K cinematic video provides a dynamic, professional showcase of your design. It functions as a premium marketing asset for your portfolio and social media, while giving clients a tangible, exciting vision to share. This high-value deliverable effectively accelerates decision-making and reinforces the premium quality of your service.',
    buttonText: 'Get 4K Videos',
    buttonHref: '/contact?service=4k-videos',
    imageSrc: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2680&auto=format&fit=crop',
    imageAlt: '4K cinematic walkthrough of modern interior design',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const renderingFAQs = [
  {
    id: 'faq-1',
    question: 'Your turnaround times and pricing are significantly different from the industry standard. How is this possible?',
    answer: 'We understand the question, as our model was specifically engineered to challenge an inefficient status quo. We have made significant investments in a proprietary, technology-driven workflow and a highly specialized team. This allows us to eliminate the traditional bottlenecks and overhead that lead to long delays and inflated costs. Our service isn\'t an anomaly; it is the result of a fundamentally more efficient, modern approach to 3D visualization.'
  },
  {
    id: 'faq-2',
    question: 'What happens if my rendering isn\'t completed within the 24-hour guarantee?',
    answer: 'Our 24-hour turnaround is a core promise, and we stand by it unequivocally. In the rare event that a delay occurs due to an issue on our end, you are entitled to a full refund for that specific rendering, no questions asked. We believe in accountability and delivering on our commitments.'
  },
  {
    id: 'faq-3',
    question: 'What is the process for submitting my project, and how much support will I get?',
    answer: 'Once you initiate a project, you\'ll be assigned a dedicated design liaison. This person is your single point of contact and will guide you through our simple submission process. They ensure we have all necessary files, like plans, material specs, and desired camera angles, before production begins, guaranteeing a smooth and efficient experience.'
  },
  {
    id: 'faq-4',
    question: 'What if I need a revision after I receive the final rendering?',
    answer: 'We understand that design is an iterative process. If we have missed a detail from your initial submission, we will correct it immediately, free of charge. For client-driven design changes after delivery, we offer a streamlined and transparent revision process at a reasonable rate.'
  },
  {
    id: 'faq-5',
    question: 'Does the price vary for different types of rooms, projects, or an entire house?',
    answer: 'Yes, the investment is tailored to the specific scope of the work. Our well-known flat rate is designed to cover a standard, single-room project, like a kitchen or bathroom. From there, the pricing really depends on the scale and complexity, a multi-room interior project, a full house exterior, or highly detailed custom designs will have a different scope. Our pricing page provides a detailed breakdown for different project types, ensuring you can select the exact service you need. Rest assured, we always provide a firm, all-inclusive quote for your approval before beginning any work.'
  },
  {
    id: 'faq-6',
    question: 'Are my design files and my clients\' project details kept confidential?',
    answer: 'Absolutely. We operate with the same discretion and professionalism as a trusted member of your own team. All project files are managed through a secure, encrypted portal, and our entire staff is bound by strict non-disclosure agreements. Your intellectual property and your clients\' privacy are rigorously protected at every stage of the process.'
  }
]

const ThreeDRenderingPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
    // Add navigation or modal logic here
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'why-lattice', label: 'Why Lattice' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Custom Material Digitization',
      description: 'We digitally replicate your specific, custom-supplied materials with photorealistic accuracy, ensuring every unique detail is perfectly represented in the render.'
    },
    {
      number: 2,
      title: 'Multiple Lighting Scenarios',
      description: 'Visualize your design under various conditions, from bright daylight to warm evening ambiance, to perfect the mood and atmosphere.'
    },
    {
      number: 3,
      title: 'Design Liaison for Your Project',
      description: 'Your dedicated expert serves as a single point of contact, ensuring seamless communication and meticulous management of your project details.'
    },
    {
      number: 4,
      title: 'Studio-Grade Post-Production',
      description: 'Each image undergoes meticulous post-production, including professional color grading and texture enhancement, to deliver a polished, magazine-quality final result.'
    }
  ]

  const whyLatticeCards = [
    {
      title: '24-Hour Turnaround Guarantee',
      description: 'Experience unparalleled project velocity with our 24-hour turnaround guarantee. Receive stunning, photorealistic 3D renders in just one business day, accelerating design approvals. This unmatched speed empowers you to impress clients and close deals while competitors are still drafting plans.',
      icon: Clock
    },
    {
      title: 'No Subscription or Membership Fee',
      description: 'Experience complete financial flexibility with our pay-per-project model and one flat rate. We believe in earning your business every time, so there are no restrictive subscriptions or hidden membership fees. Access our world-class rendering services on demand, paying only for what you truly need.',
      icon: CircleDollarSign
    },
    {
      title: 'Additional VR/AR Capabilities',
      description: 'Elevate presentations with our immersive virtual and augmented reality add-on. Allow clients to virtually step inside and walk through their future space, creating a powerful emotional connection. This next-level visualization brings your vision to life, securing faster approvals. Refer to our pricing page.',
      icon: Glasses
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-[7.40rem] md:pt-[7.02rem]">
      <div id="hero">
        <Hero />
      </div>
      <StickyNavigation items={navigationItems} />
      <div id="key-features">
        <KeyFeatures features={keyFeatures} />
      </div>
      <div id="why-lattice">
        <WhyLattice cards={whyLatticeCards} />
      </div>
      <div id="services">
        <ServicesSection
          services={renderingServices}
          sectionId="3d-rendering-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="Success Stories"
          subtitle="Contractors Growing with Lattice"
          testimonials={[
            {
              id: 1,
              body: "Lattice's CRM transformed how we manage projects. We've doubled our client base in 6 months and the free website brought in 30+ leads monthly. Game changer for our business!",
              clientName: "Robert Martinez",
              clientCompany: "Lone Star Contractors"
            },
            {
              id: 2,
              body: "The 3D rendering tools and AI designer help us close deals 3x faster. Clients love seeing their vision come to life instantly. Worth every penny!",
              clientName: "Sarah Chen",
              clientCompany: "NY Home Remodeling"
            },
            {
              id: 3,
              body: "From design to invoicing, everything's in one place. The digital showroom alone increased our conversion rate by 45%. Lattice understands what contractors need.",
              clientName: "Hugo J. Gordon",
              clientCompany: "C&G Renovations"
            },
            {
              id: 4,
              body: "The SEO-optimized website Lattice built ranks #1 locally. Combined with their CRM, we're managing 5x more projects efficiently. Best B2B investment we've made.",
              clientName: "Davis Miller",
              clientCompany: "Davis Construction"
            },
            {
              id: 5,
              body: "Lattice's AI design tool saves us 20+ hours per week. The 4K videos we get with renders blow clients away. Our close rate went from 15% to 42%!",
              clientName: "James Wilson",
              clientCompany: "A2Z Contractors"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={renderingFAQs}
          title="3D Rendering FAQs"
          subtitle="Everything you need to know about our 3D visualization services"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Start Closing More Deals Today"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default ThreeDRenderingPage