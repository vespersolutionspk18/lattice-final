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
import { Hammer, Layers, TrendingUp } from 'lucide-react'

const crmTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "Before Lattice CRM, I was losing 30% of leads in email and text threads. Now everything's automated - follow-ups, quotes, scheduling. We've grown from 6 to 18 employees in one year, all managed through the platform.",
    clientName: "Daniel Rodriguez",
    clientCompany: "Rodriguez Home Improvements"
  },
  {
    id: 2,
    body: "The automated payment system alone saves me 10 hours a week. Clients pay deposits online, progress payments trigger automatically, and I can see cash flow in real-time. No more chasing checks!",
    clientName: "Kevin O'Brien",
    clientCompany: "O'Brien Custom Builders"
  },
  {
    id: 3,
    body: "Lead scoring and automation changed everything. Hot leads get instant responses, quotes go out automatically, and my team knows exactly who to call first. Conversion rate up 65% in 6 months.",
    clientName: "Lisa Chang",
    clientCompany: "Chang Construction Co."
  },
  {
    id: 4,
    body: "Managing multiple crews across 15+ active projects used to be chaos. Now scheduling, materials, and progress tracking all happen in one place. Everything is accessible from any device, anywhere.",
    clientName: "Frank Martinez",
    clientCompany: "Martinez Brothers Building"
  },
  {
    id: 5,
    body: "The best part? It actually works how contractors work. Not some generic CRM we have to fight with. From first call to final invoice, everything flows naturally. Plus we got a FREE website!",
    clientName: "Tom Anderson",
    clientCompany: "Anderson Remodeling Group"
  },
  {
    id: 6,
    body: "ROI was immediate. Stopped losing leads, started closing more deals, eliminated double-booking. The analytics show exactly where our business comes from. Essential tool for scaling.",
    clientName: "Rachel Foster",
    clientCompany: "Foster Design Build"
  }
];

const crmServices: ServiceItem[] = [
  {
    id: 'lead-management',
    title: 'Smart Lead Management & Automation',
    description: 'Never lose another lead. Our intelligent lead management system automatically captures inquiries from all sources – website, social media, calls, and referrals. Leads are instantly scored based on project value, timeline, and likelihood to close. Automated follow-up sequences ensure hot leads get immediate attention while nurturing warm prospects. Set custom rules for lead distribution, automatic text/email responses, and appointment booking. See complete interaction history at a glance.',
    buttonText: 'See Lead Features',
    buttonHref: '/features/lead-management',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Lead management dashboard showing pipeline and automation',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'project-tracking',
    title: 'Complete Project & Job Management',
    description: 'Track every project from estimate to completion in one organized system. Create detailed project timelines, assign tasks to crew members, track material orders, and monitor progress with photo updates. Built-in Gantt charts show dependencies and help prevent delays. Field teams can update progress, log hours, and upload photos from any device. Automatic alerts for delays, change orders, and milestone completions keep everyone aligned.',
    buttonText: 'Explore Project Tools',
    buttonHref: '/features/project-management',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Project management interface with Gantt charts and timelines',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'estimates-invoicing',
    title: 'Professional Estimates & Invoicing',
    description: 'Create beautiful, detailed estimates in minutes, not hours. Pre-built templates for common projects, automatic material cost calculations, and optional line items for upsells. Convert approved estimates to invoices with one click. Accept online payments, set up progress billing schedules, and automate payment reminders. Integrated with QuickBooks and major accounting software. Track profitability by project, crew, and service type.',
    buttonText: 'View Billing Features',
    buttonHref: '/features/billing',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Professional estimate and invoice templates',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  },
]

const crmFAQs = [
  {
    id: 'faq-1',
    question: 'Is this CRM really designed specifically for contractors?',
    answer: 'Yes! Unlike generic CRMs that force you to adapt to their workflow, Lattice CRM was built from the ground up for remodelers and contractors. Every feature reflects how you actually work - from lead capture at home shows to final payment after punch lists. We understand estimates, change orders, crew scheduling, and progress billing.'
  },
  {
    id: 'faq-2',
    question: 'How quickly can I get my team up and running?',
    answer: 'Most contractors are fully operational within 3-5 days. We provide hands-on onboarding, import your existing contacts and projects, and train your team. The interface is intuitive - if you can use a smartphone, you can use Lattice CRM. We also offer ongoing support to ensure success.'
  },
  {
    id: 'faq-3',
    question: 'Does it integrate with my existing tools?',
    answer: 'Yes! Lattice CRM integrates with QuickBooks, Google Calendar, Gmail, and major accounting software. We also connect with popular lead sources like Angi, Houzz, and Facebook. Your website forms feed directly into the CRM. If you use a tool we don\'t integrate with yet, let us know - we\'re always adding new connections.'
  },
  {
    id: 'faq-4',
    question: 'What about the FREE website offer?',
    answer: 'When you subscribe to our CRM, you get a professional, SEO-optimized website at no additional cost. It\'s fully integrated with your CRM - forms feed directly into your lead pipeline, clients can schedule estimates, and you can showcase your portfolio. The website alone typically costs $5,000+ elsewhere.'
  },
  {
    id: 'faq-5',
    question: 'Can I access the CRM from job sites?',
    answer: 'Absolutely! The CRM is fully web-based and works on any smartphone, tablet, or laptop with internet access. Crews can clock in/out, upload progress photos, update task status, and access project details from anywhere. Everything syncs instantly across all devices.'
  },
  {
    id: 'faq-6',
    question: 'How does this CRM help me grow my business?',
    answer: 'By automating routine tasks, you\'ll save 10-15 hours per week to focus on growth. Our analytics show exactly what\'s working and what\'s not. Automated follow-ups mean you never lose leads. Professional estimates and communication build trust, leading to higher close rates and bigger projects. Most contractors see 30-50% growth within the first year.'
  }
]

const CRMPage = () => {
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
      title: 'Never Lose Another Lead',
      description: 'Automatically capture and score every lead from all sources. Instant follow-ups ensure hot prospects get immediate attention while warming cold leads over time.'
    },
    {
      number: 2,
      title: 'Complete Project Visibility',
      description: 'Track every project from estimate to completion. Real-time updates, photo documentation, and automated alerts keep your entire team aligned and clients informed.'
    },
    {
      number: 3,
      title: 'Save 10+ Hours Weekly',
      description: 'Automate repetitive tasks like follow-ups, invoicing, and scheduling. Free your team to focus on selling, building relationships, and growing your business.'
    },
    {
      number: 4,
      title: 'One Unified Platform',
      description: 'Stop juggling multiple tools and spreadsheets. Manage leads, projects, estimates, invoices, scheduling, and communications all in one contractor-focused system.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'Built for Contractors',
      description: 'Unlike generic tools, every feature is designed specifically for remodeling contractors. We understand your workflow from first call to final invoice. Our platform speaks your language, handles your unique challenges, and adapts to the way you actually work. No more forcing square pegs into round holes—Lattice was built from the ground up for contractors, by people who understand contracting.',
      icon: Hammer
    },
    {
      title: 'All-in-One Platform',
      description: 'Stop juggling multiple tools. CRM, 3D rendering, AI design, project management, and website—all seamlessly integrated in one powerful system. No more switching between apps, duplicate data entry, or integration headaches. Everything works together, sharing data instantly. One login, one platform, infinite possibilities. Save time, reduce errors, and give clients a seamless experience from first contact to final walkthrough.',
      icon: Layers
    },
    {
      title: 'Proven ROI',
      description: 'Contractors using Lattice see 30-50% revenue growth within the first year. More leads, higher close rates, bigger projects, better margins. Our clients consistently report saving 10+ hours per week, closing 60% of qualified leads, and increasing average project values by 25%. The numbers don\'t lie—Lattice pays for itself many times over. Join thousands of successful contractors who\'ve transformed their businesses.',
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
          services={crmServices}
          sectionId="crm-features"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          testimonials={crmTestimonials}
          title="CRM Success Stories"
          subtitle="How Contractors Scale with Lattice CRM"
        />
      </div>
      <div id="faq">
        <FAQ
          items={crmFAQs}
          title="CRM Platform FAQs"
          subtitle="Everything you need to know about our contractor-focused CRM"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Stop Losing Leads, Start Growing"/>
      </div>
      <Footer />
    </div>
  )
}

export default CRMPage