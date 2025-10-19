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
import { Users, CircleDollarSign, Building } from 'lucide-react'

const homeDesignServices: ServiceItem[] = [
  {
    id: 'permit-ready-plans',
    title: 'Permit-Ready Construction Plans',
    description: 'Get professional, code-compliant construction drawings that sail through permit approvals. Lattice provides detailed architectural plans including floor layouts, elevations, sections, and all technical specifications required by building departments. Our plans include structural details, electrical/plumbing schematics, and material specifications. Save weeks of approval time and avoid costly rejections with plans that meet all local building codes and regulations.',
    buttonText: 'Get Instant Plans',
    buttonHref: '/contact?service=permit-plans',
    imageSrc: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Professional construction plans and permit-ready blueprints',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: '3d-rendering-video',
    title: 'Unlimited Revisions with Design Experts',
    description: 'Our dedicated design experts engage in a true collaborative partnership, allowing for unlimited revisions to perfect every detail. We work iteratively with you through every phase, from initial space planning and mood boards to refining material selections and fixture choices. This meticulous process ensures the final design achieves complete client sign-off and aligns perfectly with your construction and budget parameters.',
    buttonText: 'Get Design Experts',
    buttonHref: '/contact?service=design-experts',
    imageSrc: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2706&auto=format&fit=crop',
    imageAlt: 'Design experts collaborating on renovation plans',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'ai-design-generator',
    title: 'Remote Accounting, Bidding and Project Oversight',
    description: 'Your dedicated professional provides end-to-end back-office management across the project lifecycle. This includes disciplined job-cost accounting, compiling competitive bid packages through subcontractor outreach, and diligent remote oversight. We meticulously track change orders, monitor financial milestones against the budget, and manage all documentation, giving you the critical data to keep every project profitable and running smoothly.',
    buttonText: 'Get Project Management',
    buttonHref: '/contact?service=project-oversight',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2758&auto=format&fit=crop',
    imageAlt: 'Remote accounting and project oversight dashboard',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  },
]

const designFAQs = [
  {
    id: 'faq-1',
    question: 'Will my remote professional work fixed hours or be available on-demand?',
    answer: 'We offer flexible engagement models tailored to your specific operational needs. You can choose a full-time, dedicated professional who works a fixed schedule, seamlessly integrating into your daily operations like any in-house team member. Alternatively, for fluctuating workloads or project-specific tasks, you can utilize our on-demand services, providing you with expert support exactly when you need it.'
  },
  {
    id: 'faq-2',
    question: 'How do you ensure your service is so affordable compared to a direct hire?',
    answer: 'Our significant cost savings are achieved through strategic global sourcing. We recruit top-tier talent from international markets where we can access highly skilled professionals at a more competitive rate. This allows us to provide you with a dedicated expert for up to 60% less than the fully-loaded cost of a domestic employee, which includes salary, benefits, payroll taxes, insurance, and overhead.'
  },
  {
    id: 'faq-3',
    question: 'How do you guarantee the quality and expertise of your remote professionals?',
    answer: 'Quality is our cornerstone. Every candidate undergoes a rigorous multi-stage vetting process that includes technical skill assessments, portfolio reviews, and multiple interviews. We specifically recruit professionals with proven experience and deep domain expertise within the construction and remodeling industry, ensuring they understand the unique workflows, terminology, and challenges of your business from day one.'
  },
  {
    id: 'faq-4',
    question: 'Can my remote employee appear as a seamless part of my company?',
    answer: 'Absolutely. We specialize in full brand integration. Your remote professional will operate under your company\'s banner, using a company email address (name@yourcompany.com) and representing your brand in all communications. To further enhance this, we partner with a facility to provide on-demand, high-quality branded apparel, ensuring your remote team member presents a unified and professional front on video calls and in all interactions.'
  },
  {
    id: 'faq-5',
    question: 'What does the onboarding process look like?',
    answer: 'We manage a structured and efficient onboarding process to ensure your new team member can begin contributing almost immediately. After understanding your company\'s specific software, communication protocols, and workflows, we facilitate a guided integration. This includes all necessary technical setups and introductions, minimizing disruption to your business and ensuring a swift, successful ramp-up period.'
  },
  {
    id: 'faq-6',
    question: 'How is my company\'s sensitive information and data kept secure?',
    answer: 'We operate under a strict framework of security and confidentiality. Every remote professional is bound by a comprehensive Non-Disclosure Agreement (NDA) from the outset. Furthermore, we enforce rigorous data security protocols, including the use of secure networks and best practices for handling sensitive client information, financial records, and proprietary project plans, ensuring your business\'s data is always protected.'
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
      title: 'Interior/Exterior Designers',
      description: 'Remote interior/exterior designers translate your vision into buildable plans through comprehensive design concepts, mood boards, space planning, and material selections.'
    },
    {
      number: 2,
      title: 'Accounting and Bookkeeping',
      description: 'Remote accounting professionals manage invoicing, expense tracking, payroll, and financial reporting, ensuring accurate books and clear visibility for informed profitability.'
    },
    {
      number: 3,
      title: 'Drafting and Planning Experts',
      description: 'Remote drafting experts create detailed plans including as-built drawings, demolition plans, construction documents, floor plans, elevations, and electrical layouts.'
    },
    {
      number: 4,
      title: 'Project Coordinators/Estimators',
      description: 'Remote coordinators manage pre-construction details through material takeoffs, supplier quotes, bid packages, and documentation, ensuring complete accounting before work begins.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'Industry\'s First Remote Workforce Solution',
      description: 'As the industry\'s first remote workforce solution, we redefine how you build your team. Move beyond the inconsistency of freelance marketplaces and the high costs of direct hires. Our pre-vetted professionals are trained in remodeling workflows and communication protocols, integrating seamlessly into your operations.',
      icon: Users
    },
    {
      title: 'Cost Savings with Full-Time Dedicated Talent',
      description: 'Unlock substantial cost savings compared to traditional in-house hires by eliminating expenses for salaries, benefits packages, payroll taxes, insurance premiums, and office overhead. We provide a dedicated professional who functions as a core team member, delivering consistent specialized support without burdensome financial commitments.',
      icon: CircleDollarSign
    },
    {
      title: 'Work with Licensed, Code-Compliant Professionals',
      description: 'Eliminate the gamble of unvetted freelance hires. We provide licensed, credentialed professionals who produce code-compliant work aligned with local building regulations. This guarantees your architectural plans and construction documents are accurate and submission-ready from the start, protecting your business from costly revisions and liability risks.',
      icon: Building
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
          items={designFAQs}
          title="Remote Employee Services FAQs"
          subtitle="Everything contractors need to know about Lattice design and planning tools"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Start Winning More Projects Today"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default DesignAndPlansPage
