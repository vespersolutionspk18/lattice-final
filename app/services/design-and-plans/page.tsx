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
import { Ruler, PenTool, Building } from 'lucide-react'

// Note: For SEO metadata in Next.js App Router with Client Components,
// create a separate metadata.ts or layout.tsx file in this directory

const designTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "Lattice's design tools have revolutionized our sales process. We close 70% more deals when clients see their project in 3D. The permit-ready plans save us weeks of back-and-forth with architects.",
    clientName: "Michael Torres",
    clientCompany: "Torres Construction LLC"
  },
  {
    id: 2,
    body: "The AI designer generates multiple concepts in minutes, not days. Our clients love having options, and we've increased our average project value by 40% using Lattice's visualization tools.",
    clientName: "Amanda Richardson",
    clientCompany: "Richardson Remodeling"
  },
  {
    id: 3,
    body: "Professional plans at a fraction of traditional architect costs. We can now offer design services as a value-add, setting us apart from competitors who just show up with a sketch.",
    clientName: "David Kim",
    clientCompany: "Premier Home Solutions"
  },
  {
    id: 4,
    body: "The 4K cinematic videos we get with each rendering are game-changers. Posted one on social media and got 8 qualified leads within a week. This pays for itself instantly.",
    clientName: "Carlos Martinez",
    clientCompany: "Martinez Custom Homes"
  },
  {
    id: 5,
    body: "Lattice handles all the technical drawings we need for permits. What used to take 3 weeks now takes 3 days. We're completing more projects per year with the same crew.",
    clientName: "Jason Wright",
    clientCompany: "Wright Way Builders"
  },
  {
    id: 6,
    body: "The design library saves us hours on every project. Drag-and-drop kitchens, bathrooms, additions – all customizable. Our designers focus on selling, not drawing from scratch.",
    clientName: "Sandra Lee",
    clientCompany: "Lee & Associates Contractors"
  }
];

const homeDesignServices: ServiceItem[] = [
  {
    id: 'permit-ready-plans',
    title: 'Permit-Ready Construction Plans',
    description: 'Get professional, code-compliant construction drawings that sail through permit approvals. Lattice provides detailed architectural plans including floor layouts, elevations, sections, and all technical specifications required by building departments. Our plans include structural details, electrical/plumbing schematics, and material specifications. Save weeks of approval time and avoid costly rejections with plans that meet all local building codes and regulations.',
    buttonText: 'Get Instant Plans',
    buttonHref: '/contact?service=permit-plans',
    imageSrc: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Professional construction plans and permit-ready blueprints',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: '3d-rendering-video',
    title: '3D Rendering with Free 4K Cinematic Video',
    description: 'Close deals faster with stunning photorealistic 3D renderings that bring projects to life. Every rendering package includes a FREE 4K cinematic video perfect for presentations and social media marketing. Show clients exactly how their space will look with accurate materials, lighting, and finishes. Our quick turnaround (24-48 hours) means you can present professional visuals while the excitement is high, dramatically increasing your close rate.',
    buttonText: 'See Sample Renderings',
    buttonHref: '/portfolio/3d-samples',
    imageSrc: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2706&auto=format&fit=crop',
    imageAlt: 'Photorealistic 3D rendering of modern kitchen remodel',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'ai-design-generator',
    title: 'AI-Powered Design Generator',
    description: 'Generate unlimited design concepts in seconds with Lattice\'s AI Designer. Input your client\'s preferences, budget, and space dimensions to instantly receive multiple professional design options. Each concept includes material suggestions, color palettes, and layout variations. Perfect for initial consultations – show clients you\'re prepared with personalized options. The AI learns from successful projects to suggest designs that are both beautiful and buildable.',
    buttonText: 'Try AI Designer',
    buttonHref: '/tools/ai-designer',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2758&auto=format&fit=crop',
    imageAlt: 'AI-generated interior design concepts and layouts',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  },
]

const designFAQs = [
  {
    id: 'faq-1',
    question: 'How quickly can I get design plans for a client presentation?',
    answer: 'With Lattice, you can generate initial design concepts instantly using our AI Designer. Professional 3D renderings are delivered within 24-48 hours, and permit-ready plans within 3-5 business days. Rush service available for same-day delivery.'
  },
  {
    id: 'faq-2',
    question: 'Is the 4K cinematic video really free with 3D renderings?',
    answer: 'Yes! Every 3D rendering package includes a complimentary 4K cinematic walkthrough video. These videos are perfect for social media marketing, client presentations, and website portfolios. No hidden fees or subscriptions.'
  },
  {
    id: 'faq-3',
    question: 'Will these plans pass permit approval in my area?',
    answer: 'Our plans are created to meet national building codes and can be customized for local requirements. We maintain a database of regional codes and our team ensures compliance. We\'ll revise any plans that need local adjustments at no extra charge.'
  },
  {
    id: 'faq-4',
    question: 'How much can I charge clients for design services?',
    answer: 'Contractors using Lattice typically charge $2,500-$7,500 for design packages, depending on project scope. With our low monthly cost, you can offer professional design services as a profit center, not an expense.'
  },
  {
    id: 'faq-5',
    question: 'Can I white-label these designs as my own company\'s work?',
    answer: 'Absolutely! All designs, renderings, and plans are delivered with your company branding. Your clients will see these as your professional services. We\'re your behind-the-scenes design department.'
  },
  {
    id: 'faq-6',
    question: 'What if my client wants changes after seeing the initial design?',
    answer: 'Unlimited revisions are included in your subscription. Use our AI Designer to generate alternatives instantly, or request modifications to 3D renderings. Quick iterations help you close deals faster without additional costs.'
  }
]

const DesignAndPlansPage = () => {
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
      title: 'Win Projects with Professional Designs',
      description: 'Professional design services at a fraction of architect costs. Show clients comprehensive plans, 3D renderings, and cinematic videos that eliminate uncertainty and close deals faster.'
    },
    {
      number: 2,
      title: 'Permit-Ready in Days, Not Weeks',
      description: 'Code-compliant construction plans delivered in 3-5 days. Save weeks of approval time with detailed architectural drawings that sail through permitting departments on first submission.'
    },
    {
      number: 3,
      title: 'FREE 4K Video Marketing',
      description: 'Every 3D rendering includes professional cinematic video at no extra cost. Perfect for social media, client presentations, and website portfolios—a $2,000+ value included free.'
    },
    {
      number: 4,
      title: 'AI-Powered Design Options',
      description: 'Generate unlimited design concepts instantly with AI. Show clients multiple style options in seconds during consultations. No waiting, no guesswork—just instant professional designs that wow.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'Design as a Profit Center, Not an Expense',
      description: 'Most contractors outsource design at $3,000-$10,000 per project, cutting into margins. Lattice transforms design into a revenue generator. With unlimited design services included, charge clients $2,500-$7,500 while your cost remains fixed. Contractors report adding $50,000-$150,000 in annual design revenue alone.',
      icon: Ruler
    },
    {
      title: 'Close Deals Faster with Visual Certainty',
      description: 'Client uncertainty is the biggest obstacle in closing projects. Lattice eliminates this with photorealistic 3D renderings and cinematic videos. When clients can see exactly how their kitchen will look, objections evaporate. Contractors report 70% higher close rates and 40% shorter sales cycles with Lattice visualizations.',
      icon: PenTool
    },
    {
      title: 'Permit Approvals Without the Headaches',
      description: 'Permit rejections derail timelines and strain client relationships. Lattice provides code-compliant, permit-ready plans created by licensed professionals. Our detailed construction documents meet municipal standards. Contractors report 90%+ first-submission approval rates and save 2-4 weeks per project.',
      icon: Building
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
          services={homeDesignServices}
          sectionId="home-design-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          testimonials={designTestimonials}
          title="Contractor Success Stories"
          subtitle="How Lattice Design Tools Drive Revenue"
        />
      </div>
      <div id="faq">
        <FAQ
          items={designFAQs}
          title="Design Services FAQs"
          subtitle="Everything contractors need to know about Lattice design and planning tools"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Start Winning More Projects Today"/>
      </div>
      <Footer />
    </div>
  )
}

export default DesignAndPlansPage
