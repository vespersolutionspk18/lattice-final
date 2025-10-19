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
import { Brain, Zap, TrendingUp } from 'lucide-react'

const showroomServices: ServiceItem[] = [
  {
    id: 'engineering-team',
    title: 'Your Dedicated Software & ML Engineering Team',
    description: 'Gain a decisive market advantage with an elite team of software and machine learning engineers committed exclusively to your platform\'s evolution. This dedicated unit continuously develops bespoke features, refines predictive algorithms, and integrates the latest technological advancements. They ensure your digital showroom not only remains cutting-edge but is also perfectly aligned with your unique business strategy, providing a sophisticated, seamless experience that consistently outmaneuvers the competition.',
    buttonText: 'Get Your Engineering Team',
    buttonHref: '/contact?service=engineering-team',
    imageSrc: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2706&auto=format&fit=crop',
    imageAlt: 'Dedicated engineering team working on digital showroom',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'ai-intelligence',
    title: 'Predictive Analytics That Close Deals Before Competitors Quote',
    description: 'Harness the power of forward-looking AI to transform your sales process from reactive to proactive. Our predictive analytics engine scrutinizes every client interaction within the showroom, analyzing saved materials, design revisions, and engagement patterns to forecast purchase intent. This intelligence allows you to identify and prioritize the most promising leads, engaging them with tailored proposals at the exact moment they are ready to commit, long before competitors can even draft a quote.',
    buttonText: 'Get AI Intelligence',
    buttonHref: '/contact?service=ai-intelligence',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'AI-powered predictive analytics dashboard',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'pricing-intelligence',
    title: 'Real-Time Market Intelligence That Maximizes Margins',
    description: 'Go beyond simple price comparisons with a comprehensive market intelligence engine that secures your profitability. This system continuously monitors competitor pricing, tracks supplier cost fluctuations, and analyzes regional material trends in real time. This empowers you to make surgical, data-driven adjustments to your margins, capitalize on advantageous sourcing opportunities, and confidently price every project for maximum financial return while always remaining competitive in your specific market.',
    buttonText: 'Get Pricing Intelligence',
    buttonHref: '/contact?service=pricing-intelligence',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop',
    imageAlt: 'Real-time pricing intelligence and market analysis',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const showroomFAQs = [
  {
    id: 'faq-1',
    question: 'How difficult is it to get our specific materials and pricing loaded into the showroom?',
    answer: 'Our onboarding process is designed to be seamless. Your dedicated team will work with you to integrate your material catalogs and pricing structures. We handle the heavy lifting of digitizing your inventory and configuring the quoting engine, ensuring everything is tailored to your business from day one with minimal effort required from your side.'
  },
  {
    id: 'faq-2',
    question: 'Can we customize the Digital Showroom to match our company\'s branding?',
    answer: 'Absolutely. The showroom is not a generic portal; it becomes a fully integrated part of your website. We ensure its design, from logos and color schemes to fonts and layout, perfectly aligns with your existing brand identity. This creates a cohesive and professional experience for your clients as they move from your homepage into the design experience.'
  },
  {
    id: 'faq-3',
    question: 'Will this tool work with our existing CRM or project management software?',
    answer: 'Yes, integration is a core part of our service. Our engineering team can connect the Digital Showroom to most major CRM and project management platforms. This allows qualified leads and detailed project specifications generated in the showroom to flow directly into your existing workflow, automating data entry and streamlining your sales pipeline.'
  },
  {
    id: 'faq-4',
    question: 'Is the platform user-friendly for clients who aren\'t comfortable with technology?',
    answer: 'We designed the showroom with simplicity as a top priority. The interface is intuitive, with clear visual cues and a simple "point-and-click" process for material replacement. Most clients find it as easy to use as a simple photo app, ensuring a smooth and enjoyable design experience regardless of their technical skill level.'
  },
  {
    id: 'faq-5',
    question: 'Do we have the final say on quotes before they are sent to a client?',
    answer: 'Yes, you always remain in full control. While the system "zero-touch" generates a detailed quote based on the client\'s selections, it is always sent to you for a final review. This allows you to make any necessary adjustments or add personal notes before sending the official proposal, combining AI-driven speed with your expert oversight.'
  },
  {
    id: 'faq-6',
    question: 'Where does the data for the competitor price monitoring and market intelligence come from?',
    answer: 'Our system aggregates publicly available, localized pricing data from across the industry, including suppliers and competitors in your specific market. This information is then processed in real-time by our proprietary algorithms to provide you with actionable, up-to-the-minute intelligence that is relevant to your region and business.'
  }
]

const DigitalShowroomPage = () => {
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
      title: 'Zero-Touch Quote Generation',
      description: 'Lattice auto-generates detailed quotes when clients save materials. Review and send in minutes, not days, closing deals before competitors respond.'
    },
    {
      number: 2,
      title: 'Instant Visual Material Replacement',
      description: 'Clients click surfaces in portfolio photos to see alternative materials instantly. Cycle through options in real-time, increasing upsells by 40%.'
    },
    {
      number: 3,
      title: 'Budget-Adaptive Showroom Intelligence',
      description: 'Showroom adapts to client budgets, hiding out-of-reach materials while highlighting perfect fits. Eliminates awkward conversations, leading to 50% fewer objections.'
    },
    {
      number: 4,
      title: 'Automated Competitor Price Monitoring',
      description: 'Lattice monitors competitor pricing daily, alerting when you\'re higher or lower. Adjust margins instantly. This $5,000/month competitive intelligence included free.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'LatticeAI Showroom Lead Generation',
      titleElement: (
        <>
          <span style={{
            background: 'linear-gradient(135deg, #0066FF 0%, #1b2e9e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>LatticeAI</span>
          <span> Showroom Lead Generation</span>
        </>
      ),
      description: 'Transform your website from a simple portfolio into an active sales engine that works continuously. Our AI-powered showroom converts passive visitors into qualified buyers by letting them design their own space, explore material options interactively, and self-generate detailed quotes, delivering project-ready customers directly into your sales pipeline without manual intervention.',
      icon: Brain
    },
    {
      title: 'Automated Scarcity Notifications That Drive Immediate Action',
      description: 'Leverage real-time supplier data to create authentic urgency that drives purchasing decisions. When a client\'s chosen material has limited stock, a promotion is ending, or seasonal pricing changes approach, the system automatically sends targeted alerts, prompting immediate commitment to lock in their design choices and secure current pricing before opportunities expire.',
      icon: Zap
    },
    {
      title: 'Built-In Value Calculator That Sells Premium Upgrades',
      description: 'Move conversations beyond simple price comparisons and sell on tangible long-term value. As clients consider premium upgrades, the integrated calculator instantly displays comprehensive ROI metrics, highlighting projected increases in home equity, superior product durability, and maintenance savings over time, making it significantly easier for them to justify investing in higher-margin options.',
      icon: TrendingUp
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
          services={showroomServices}
          sectionId="showroom-features"
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
          items={showroomFAQs}
          title="Digital Showroom FAQs"
          subtitle="Learn how a digital showroom transforms your sales process"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Launch Your Digital Showroom"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default DigitalShowroomPage