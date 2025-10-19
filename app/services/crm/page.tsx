'use client'

import LeadChangeCRM from '@/app/homecomponents/LeadChangeCRM'
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
import WhyLatticeCRM from '@/app/components/WhyLatticeCRM'
import IntegrationsTicker from '@/app/components/IntegrationsTicker'
import { Hammer, Layers, TrendingUp } from 'lucide-react'

const crmServices: ServiceItem[] = [
  {
    id: 'lead-management',
    title: 'Smart Lead Management & Automation',
    description: 'Never lose another lead. Our intelligent lead management system automatically captures inquiries from all sources; website, social media, calls, and referrals. Leads are instantly scored based on project value, timeline, and likelihood to close. Automated follow-up sequences ensure hot leads get immediate attention while nurturing warm prospects. Set custom rules for lead distribution, automatic text/email responses, and appointment booking. See complete interaction history at a glance.',
    buttonText: 'Get Lead Management',
    buttonHref: '/contact?service=lead-management',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Lead management dashboard showing pipeline and automation',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'project-tracking',
    title: 'AI-Powered Client Interaction Tools',
    description: 'Streamline communication by automating follow-ups, scheduling, and real-time responses, so you can focus on the build while keeping clients informed and engaged. Designed for remodelers and builders, this toolset includes 24/7 AI chat assistants to handle common questions, smart scheduling synced with your calendar, automated reminders for walkthroughs and project milestones, and intelligent follow-ups after quotes or site visits. Built-in sentiment tracking helps you monitor client satisfaction and flag potential issues early, ensuring a smoother, more professional experience from start to finish.',
    buttonText: 'Get Project Tools',
    buttonHref: '/contact?service=project-management',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Project management interface with Gantt charts and timelines',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'estimates-invoicing',
    title: 'Machine Learning for Project Decisions',
    description: 'Empowering remodelers and builders to make faster, smarter, and more profitable choices across every stage of a project. From material selection and vendor recommendations to accurate quoting and scope optimization, this intelligent system analyzes historical data, regional pricing trends, and project specs to guide key decisions. Whether you\'re choosing finishes, forecasting costs, or adjusting timelines, machine learning delivers data-backed insights that reduce guesswork, minimize waste, and increase client satisfaction. The result? Better margins, fewer delays, and smarter builds, every time.',
    buttonText: 'Start Billing Smarter',
    buttonHref: '/contact?service=billing',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Professional estimate and invoice templates',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  },
]

const crmFAQs = [
  {
    id: 'faq-1',
    question: 'I\'m already using another CRM. Isn\'t migrating all my client and project data a huge hassle?',
    answer: 'We understand that switching systems can be a major deterrent. That\'s why we provide a dedicated onboarding specialist to manage the migration for you. Our team will work with you to securely and accurately import your existing client lists, project histories, and important documents into Lattice. Our goal is to make the transition a seamless background process, not a business disruption.'
  },
  {
    id: 'faq-2',
    question: 'Your platform sounds powerful, but is it actually user-friendly for a team that isn\'t tech-savvy?',
    answer: 'Absolutely. Lattice was designed specifically for remodelers, not IT experts. The interface is clean, intuitive, and built around the typical workflow of a remodeling project. Features like our On-Site Voice-to-CRM Sync are a perfect example, you can update project files simply by talking. We focus on minimizing clicks and eliminating complexity so you can spend less time typing and more time building.'
  },
  {
    id: 'faq-3',
    question: 'My team is constantly on job sites. How much time does it really take to get Lattice set up and operational?',
    answer: 'We designed our setup process for busy contractors. Your guided onboarding includes pre-built templates for estimates, invoices, and project schedules that you can customize in minutes. Furthermore, our AI-Powered Scope of Work Generator allows you to create comprehensive project documents almost instantly, meaning you can start seeing value and saving time from day one, not weeks later.'
  },
  {
    id: 'faq-4',
    question: 'All of this AI technology sounds expensive. How does your pricing work?',
    answer: 'We offer transparent, tiered pricing plans designed to scale with your business, with no hidden fees. We believe our AI features are a core part of the value, not a costly add-on. Tools like the Renovation ROI Estimator and automated invoicing aren\'t expenses; they are investments that directly help you close more profitable deals and improve your cash flow, delivering a return far greater than the subscription cost.'
  },
  {
    id: 'faq-5',
    question: 'Does Lattice integrate with other essential software I use, like my accounting program?',
    answer: 'Yes. We believe a CRM should be your central hub, not another data silo. Lattice is built to integrate seamlessly with the essential tools that remodeling businesses rely on, including popular accounting software like QuickBooks, as well as email and calendar platforms. This ensures smooth data flow, eliminates time-consuming double-entry, and keeps your financial and project data perfectly in sync.'
  },
  {
    id: 'faq-6',
    question: 'What happens if my team or I need help? What kind of customer support is available?',
    answer: 'We provide robust, ongoing support to ensure you get the most out of Lattice. All plans include access to our U.S.-based customer support team via email, phone, and live chat. We also offer a comprehensive online knowledge base with video tutorials and step-by-step guides. Our support team is familiar with the remodeling industry and is trained to provide practical, effective solutions to your real-world challenges.'
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
    { id: 'integrations', label: 'Integrations' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'AI-Driven Customer Communication',
      description: 'AI handles appointment scheduling, status updates, FAQs, and complaint resolution 24/7 through email, SMS, or chat, boosting satisfaction without workload.'
    },
    {
      number: 2,
      title: 'Automated Invoicing & Payments',
      description: 'Automate invoice generation, payment reminders, and collections. AI detects completed milestones and triggers billing, reducing delays and ensuring faster payments.'
    },
    {
      number: 3,
      title: 'Project Tracking & Scheduling',
      description: 'Track remodeling projects from consultation to walkthrough. Machine learning optimizes timelines, assigns tasks, and sends automatic reminders, keeping everyone aligned.'
    },
    {
      number: 4,
      title: 'One Unified Platform',
      description: 'Stop juggling multiple tools and spreadsheets. Manage leads, projects, estimates, invoices, scheduling, and communications all in one unified contractor-focused system.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'AI-Powered Scope of Work Generator',
      description: 'Input basic project details like kitchen remodel specifications, square footage, and budget parameters, and the system instantly generates a professional, customizable Scope of Work document. This includes detailed line items, project timelines, material recommendations, and comprehensive cost breakdowns, adapting intelligently to local building codes and regional pricing data.',
      icon: Hammer
    },
    {
      title: 'On-Site Voice-to-CRM Sync',
      description: 'Use voice notes while walking job sites to describe project updates, client requests, or material issues, and the AI automatically transcribes and updates the correct project files, timelines, and client communications in real time. No typing, no paperwork required—simply speak and move forward with your work.',
      icon: Layers
    },
    {
      title: 'Renovation ROI Estimator for Clients',
      description: 'This built-in tool helps you show clients the projected return on investment for their renovation based on current market trends, comparable sales, and neighborhood data. Whether presenting a bathroom upgrade or whole-home renovation, you can back up your recommendations with compelling, data-driven insights that build client confidence.',
      icon: TrendingUp
    }
  ]

  return (
    <>
      <Header
        enableScrollEffects={false}
        cubeColor="#166534"
        buttonText="Get Started"
        buttonColor="#166534"
        hoverColor="#166534"
        promoBannerColor="#166534"
      />
      <main className="pt-[7.40rem] md:pt-[7.02rem]">
      <div id="hero">
        <Hero />
      </div>
      <StickyNavigation items={navigationItems} accentColor="#166534" />
      <div id="key-features">
        <KeyFeatures features={keyFeatures} accentColor="#166534" />
      </div>
      <div id="why-lattice">
        <WhyLatticeCRM cards={whyLatticeCards} />
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
          buttonVariant="crmGreen"
        />
      </div>
      <div id="integrations">
        <IntegrationsTicker accentColor="#166534" />
      </div>
      <div id="testimonials">
        <Testimonials
          title="Success Stories"
          subtitle="Contractors Growing with Lattice"
          accentColor="#166534"
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
          items={crmFAQs}
          title="CRM Platform FAQs"
          subtitle="Everything you need to know about our contractor-focused CRM"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChangeCRM text="Stop Losing Leads, Start Growing"/>
      </div>
      <Footer backgroundColor="#166534" />
      </main>
    </>
  )
}

export default CRMPage