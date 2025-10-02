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
import WhyLattice from '@/app/components/WhyLattice'
import { Globe, Search, TrendingUp } from 'lucide-react'

const webSeoTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "FREE website with CRM? I was skeptical, but it\'s better than the $8K site I paid for last year. Ranks #1 for \'kitchen remodeling near me\' and generates 40+ leads monthly. The CRM integration is seamless.",
    clientName: "Michael Stevens",
    clientCompany: "Stevens Home Improvements"
  },
  {
    id: 2,
    body: "Our Lattice website generates more leads than Angi and Houzz combined. The SEO actually works - we show up for every local search. Forms go straight to CRM, no manual entry. Game changer.",
    clientName: "Patricia Kim",
    clientCompany: "Kim Construction Group"
  },
  {
    id: 3,
    body: "Went from page 5 on Google to top 3 in four months. The website speed is incredible, mobile experience is flawless, and the portfolio integration with 3D renderings blows clients away.",
    clientName: "Carlos Rodriguez",
    clientCompany: "Rodriguez Builders LLC"
  },
  {
    id: 4,
    body: "The instant quote calculator on our site pre-qualifies leads perfectly. Only serious inquiries come through. Conversion tracking shows exactly which pages and keywords drive revenue. Data-driven growth.",
    clientName: "Amanda Foster",
    clientCompany: "Foster Design Build"
  },
  {
    id: 5,
    body: "Having website, CRM, and digital showroom all connected is powerful. Client browses portfolio, submits form, automatically enters CRM pipeline, gets instant follow-up. We look so professional.",
    clientName: "Jason Park",
    clientCompany: "Park Renovation Experts"
  },
  {
    id: 6,
    body: "The local SEO optimization is unreal. We dominate \'contractor near me\' searches in our entire service area. Reviews automatically display, projects update from CRM. It runs itself while generating leads.",
    clientName: "Rebecca Chen",
    clientCompany: "Chen Custom Homes"
  }
];

const webSeoServices: ServiceItem[] = [
  {
    id: 'free-website-crm',
    title: 'FREE Professional Website with CRM',
    description: 'Get a stunning, fully-functional website absolutely FREE when you subscribe to our CRM. This isn\'t a template – it\'s a custom-designed site built specifically for contractors. Features include portfolio galleries, service pages, contact forms that feed directly into your CRM, online scheduling, and instant quote calculators. Mobile-optimized, lightning-fast, and professionally designed to convert visitors into leads. The website alone is worth thousands, but it\'s yours free with CRM.',
    buttonText: 'Claim Free Website',
    buttonHref: '/contact?service=free-website',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop',
    imageAlt: 'Professional contractor website design showcase',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'local-seo',
    title: 'Local SEO Domination',
    description: 'Rank #1 for "contractor near me" and other high-value local searches. Our proven SEO strategy includes Google My Business optimization, local citation building, schema markup for rich snippets, and location-specific landing pages. We target the exact keywords your customers use, optimize for voice search, and ensure you appear in map packs. Track rankings weekly and watch your organic traffic grow. Most contractors see 3x more leads within 6 months.',
    buttonText: 'Start Ranking Higher',
    buttonHref: '/contact?service=local-seo',
    imageSrc: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Google search results showing top local rankings',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'conversion-optimization',
    title: 'Conversion-Focused Design',
    description: 'Beautiful websites that turn visitors into customers. Every element is designed to convert: compelling headlines, trust badges, client testimonials, clear call-to-actions, and strategic form placement. Fast load times keep visitors engaged. Mobile-first design ensures perfect experience on any device. Integrated live chat captures leads 24/7. A/B testing optimizes conversion rates continuously. Your website becomes a lead-generating machine, not just an online brochure.',
    buttonText: 'Maximize Conversions',
    buttonHref: '/contact?service=conversion-optimization',
    imageSrc: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop',
    imageAlt: 'High-converting website design with clear CTAs',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const webSeoFAQs = [
  {
    id: 'faq-1',
    question: 'Is the free website really free? What\'s the catch?',
    answer: 'Yes, it\'s completely free with your CRM subscription - no setup fees, no design charges, no hidden costs. We can offer this because the integrated CRM makes you more successful, leading to long-term partnership. You get a professional website worth $5,000+, we get a happy customer who grows with our platform. Win-win.'
  },
  {
    id: 'faq-2',
    question: 'How quickly can my website rank on Google?',
    answer: 'Most contractors see significant improvements within 60-90 days. Local searches like "contractor near me" often rank within 30 days with proper optimization. Long-term SEO builds over 6-12 months. We focus on quick wins first (Google My Business, local directories) while building sustainable organic rankings. Our proven process has helped hundreds of contractors dominate their local markets.'
  },
  {
    id: 'faq-3',
    question: 'Do I own my website and domain?',
    answer: 'Absolutely! You own your domain name and all website content. If you ever decide to leave Lattice, you can take your website with you (though you\'ll lose the CRM integration features). We believe in earning your business through value, not holding your website hostage. Your online presence is yours to keep.'
  },
  {
    id: 'faq-4',
    question: 'How does the website integrate with other Lattice tools?',
    answer: 'Seamlessly! Website forms feed directly into your CRM pipeline. Your portfolio showcases 3D renderings and AI designs. The digital showroom is embedded for browsing. Scheduling syncs with your calendar. Reviews display automatically. Quote calculators use your pricing. Everything works together as one powerful system, saving time and impressing clients.'
  },
  {
    id: 'faq-5',
    question: 'Can I make changes to my website myself?',
    answer: 'Yes! Our user-friendly editor lets you update content, add projects, change images, and edit text without any coding. Need a bigger change? Our team handles those for you. You have control when you want it, support when you need it. Most updates take minutes, not hours or days waiting for a developer.'
  },
  {
    id: 'faq-6',
    question: 'What makes Lattice websites different from DIY builders?',
    answer: 'Contractor-specific features you won\'t find elsewhere: instant quote calculators, project galleries with before/after sliders, review integration, CRM-connected forms, local SEO optimization, and lead tracking. Our sites are built for conversion, not just looks. Plus, ongoing optimization ensures you stay ahead of competitors. DIY builders can\'t match our industry expertise and integrated tools.'
  }
]

const WebDesignSEOPage = () => {
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
      title: 'FREE Professional Website',
      description: 'Get a stunning, fully-functional website absolutely FREE with CRM subscription. Custom-designed for contractors with portfolio galleries, quote calculators, and CRM integration—a $5,000+ value included.'
    },
    {
      number: 2,
      title: 'Dominate Local Search',
      description: 'Rank #1 for "contractor near me" and high-value local searches. Proven SEO strategy with Google My Business optimization, local citations, and location-specific landing pages that drive qualified leads.'
    },
    {
      number: 3,
      title: 'Convert Visitors to Customers',
      description: 'Every element designed to convert: compelling headlines, trust badges, client testimonials, strategic CTAs, and instant quote calculators. Your website becomes a lead-generating machine, not just an online brochure.'
    },
    {
      number: 4,
      title: 'Fully Integrated Platform',
      description: 'Website forms feed directly into CRM. Portfolio showcases 3D renderings. Digital showroom embedded seamlessly. Scheduling syncs with calendar. Everything works together as one powerful, time-saving system.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'All-in-One Platform Eliminates Integration Headaches',
      description: 'Most contractors cobble together multiple tools from different vendors, creating endless frustration with data syncing and duplicate entry. Lattice provides a unified platform where everything works seamlessly. Website forms automatically create CRM leads. Portfolio projects update everywhere simultaneously. This integration saves hours weekly on manual data entry.',
      icon: Globe
    },
    {
      title: 'Contractor-Specific SEO That Actually Generates Leads',
      description: 'Generic SEO services optimize for traffic, not qualified leads. Lattice SEO targets exact searches your ideal clients use when ready to hire—like "kitchen remodeling contractor near me." Location-specific landing pages capture searches in every neighborhood you serve. The result: 3-5x higher conversion rates compared to generic SEO approaches.',
      icon: Search
    },
    {
      title: 'Conversion-Optimized Design Backed by Contractor Data',
      description: 'Most designers focus on aesthetics over results. Lattice websites are engineered for conversion based on thousands of contractor sites. Every element serves a purpose: before/after galleries, instant quote calculators, strategically placed CTAs, and mobile-first design. Lattice websites convert 8-12% of visitors versus 2-4% for typical contractor sites.',
      icon: TrendingUp
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
      <div id="why-lattice">
        <WhyLattice cards={whyLatticeCards} />
      </div>
      <div id="services">
        <ServicesSection
          services={webSeoServices}
          sectionId="web-seo-features"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          testimonials={webSeoTestimonials}
          title="Web & SEO Success"
          subtitle="How Contractors Dominate Online with Lattice"
        />
      </div>
      <div id="faq">
        <FAQ
          items={webSeoFAQs}
          title="Website & SEO FAQs"
          subtitle="Everything about your online presence with Lattice"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Get Your Free Website Today"/>
      </div>
      <Footer />
    </div>
  )
}

export default WebDesignSEOPage