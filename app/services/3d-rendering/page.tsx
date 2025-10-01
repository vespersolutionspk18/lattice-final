'use client'

import LeadChange from '@/app/homecomponents/LeadChange'
import Header from '@/app/components/Header'
import Hero from './components/Hero'
import Footer from '@/app/components/Footer'
import ServicesSection from '../service'
import { ServiceItem } from '@/app/types/service'
import React from 'react'
import Testimonials, { Testimonial } from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import StickyNavigation from '@/app/components/StickyNavigation'
import KeyFeatures from '@/app/components/KeyFeatures'

const renderingTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "The 3D renderings sell themselves! We show clients their exact kitchen before demo day. Close rate went from 30% to 85%. The free 4K video alone has generated $150K in new business from Instagram.",
    clientName: "Steve Patterson",
    clientCompany: "Patterson Renovations"
  },
  {
    id: 2,
    body: "24-hour turnaround is unreal. Client meeting on Tuesday, gorgeous renderings by Wednesday, contract signed Thursday. Lattice's 3D tools have literally transformed how we sell remodels.",
    clientName: "Maria Gonzalez",
    clientCompany: "Gonzalez Custom Builders"
  },
  {
    id: 3,
    body: "We charge $500-1500 for 3D visualization packages using Lattice. Clients happily pay premium prices because they can see exactly what they're getting. The renderings basically sell themselves.",
    clientName: "Ryan Thompson",
    clientCompany: "Thompson & Associates"
  },
  {
    id: 4,
    body: "The ability to show different material options in real-time is a game-changer. Clients upgrade to premium finishes when they see how good it looks. Average project value up 45%.",
    clientName: "Jennifer Park",
    clientCompany: "Park Construction Group"
  },
  {
    id: 5,
    body: "Posted one 4K walkthrough video and got 12 qualified leads in 48 hours. The production quality rivals what agencies charge thousands for. This feature alone pays for Lattice 10x over.",
    clientName: "Marcus Williams",
    clientCompany: "Williams Remodeling Co."
  },
  {
    id: 6,
    body: "Virtual reality walkthroughs on tablets close deals on the spot. No more 'let me think about it.' When clients see their future bathroom in 3D, they're ready to sign immediately.",
    clientName: "Ashley Chen",
    clientCompany: "Chen Design Build"
  }
];

const renderingServices: ServiceItem[] = [
  {
    id: 'photorealistic-interiors',
    title: 'Photorealistic Interior Renderings',
    description: 'Show clients their dream spaces in stunning detail before construction begins. Our photorealistic interior renderings capture every element – from natural lighting and shadows to material textures and furniture placement. Perfect for kitchens, bathrooms, living spaces, and bedrooms. Each rendering showcases different times of day, helping clients envision living in their transformed space. Quick 24-hour delivery means you can present while interest is hot.',
    buttonText: 'See Interior Samples',
    buttonHref: '/portfolio/interior-3d',
    imageSrc: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2674&auto=format&fit=crop',
    imageAlt: 'Photorealistic 3D rendering of luxury kitchen interior',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'exterior-visualization',
    title: 'Exterior & Curb Appeal Visualization',
    description: 'Transform curb appeal proposals into signed contracts with stunning exterior renderings. Show siding options, roofing materials, landscaping designs, and outdoor living spaces in photorealistic detail. Our renderings include seasonal variations and different lighting conditions. Perfect for additions, facades, decks, and complete exterior renovations. Helps clients understand how improvements increase property value.',
    buttonText: 'View Exterior Gallery',
    buttonHref: '/portfolio/exterior-3d',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Photorealistic exterior home rendering with landscaping',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: '4k-cinematic-videos',
    title: 'FREE 4K Cinematic Walkthrough Videos',
    description: 'Every rendering package includes a professional 4K cinematic video at no extra cost. These aren\'t basic flythroughs – they\'re emotion-driven stories that showcase lifestyle and transformation. Perfect for social media marketing, website portfolios, and client presentations. Videos include music, smooth camera movements, and professional editing. Most contractors charge $2,000+ for what you get free with every Lattice rendering.',
    buttonText: 'Watch Video Samples',
    buttonHref: '/samples/videos',
    imageSrc: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=2680&auto=format&fit=crop',
    imageAlt: '4K video production of architectural visualization',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const renderingFAQs = [
  {
    id: 'faq-1',
    question: 'How fast can I get 3D renderings for my client?',
    answer: 'Standard turnaround is 24-48 hours for photorealistic renderings. Rush service available for same-day delivery. The free 4K video is included in this timeframe. Most contractors present renderings at the second client meeting while excitement is highest.'
  },
  {
    id: 'faq-2',
    question: 'What do I need to provide for a 3D rendering?',
    answer: 'Just basic dimensions, photos of the existing space (if applicable), and material/color preferences. Our team handles the rest. We have a simple upload form that takes 5 minutes to complete. Even rough sketches work – we\'ll create professional results from minimal input.'
  },
  {
    id: 'faq-3',
    question: 'Can clients request changes to the renderings?',
    answer: 'Unlimited revisions are included in your Lattice subscription. Change colors, materials, layouts, or furniture as many times as needed. Most revisions are completed within 24 hours. This flexibility helps you close deals without worrying about additional costs.'
  },
  {
    id: 'faq-4',
    question: 'How do the FREE 4K videos work?',
    answer: 'Every 3D rendering project automatically includes a professional 4K cinematic walkthrough video. No extra charges, no hidden fees. Videos are 60-90 seconds, include music, and are optimized for social media. You own full rights to use in marketing.'
  },
  {
    id: 'faq-5',
    question: 'Can I add my company branding to renderings and videos?',
    answer: 'Yes! All renderings and videos include your company logo, contact information, and brand colors. Clients see these as your professional services. We can also match your existing marketing materials for consistent brand presentation.'
  },
  {
    id: 'faq-6',
    question: 'What\'s the ROI on offering 3D rendering services?',
    answer: 'Contractors typically charge $500-2,000 for rendering packages to their clients. More importantly, projects with 3D renderings close 3x faster at 25-40% higher values. The increased close rates and project values deliver exceptional ROI on your Lattice subscription.'
  }
]

const ThreeDRenderingPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
    // Add navigation or modal logic here
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'why-lattice', label: 'Why Lattice' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Close Deals 3x Faster',
      description: 'Show clients their exact project before construction begins. Photorealistic renderings eliminate uncertainty and objections, turning "maybe" into signed contracts instantly.'
    },
    {
      number: 2,
      title: '24-Hour Turnaround',
      description: 'Strike while interest is hot. Get stunning 3D renderings delivered within 24-48 hours, allowing you to present while clients are still excited about their project.'
    },
    {
      number: 3,
      title: 'FREE 4K Video Included',
      description: 'Every rendering package includes professional cinematic walkthrough video at no extra cost. Perfect for social media marketing and client presentations—a $2,000+ value included free.'
    },
    {
      number: 4,
      title: 'Unlimited Revisions',
      description: 'Change materials, colors, layouts, or furniture as many times as needed. No additional costs, no questions asked. Flexibility that helps you close more deals.'
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
          testimonials={renderingTestimonials}
          title="3D Success Stories"
          subtitle="How Contractors Close More Deals with Lattice Renderings"
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
      <div id="why-lattice">
        {/* Why Lattice section - can add content here later */}
      </div>
      <div id="contact">
        <LeadChange text="Start Closing More Deals Today"/>
      </div>
      <Footer />
    </div>
  )
}

export default ThreeDRenderingPage