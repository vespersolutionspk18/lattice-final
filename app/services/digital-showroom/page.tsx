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
import { Sparkles, ShoppingBag, Star } from 'lucide-react'

const showroomTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "Our digital showroom generates leads while we sleep. Clients spend 20+ minutes browsing, save their favorites, and come to meetings knowing exactly what they want. Conversations start at \'how\' not \'if\'.",
    clientName: "David Park",
    clientCompany: "Park Home Solutions"
  },
  {
    id: 2,
    body: "No more lugging samples to every appointment. Clients explore materials online, build mood boards, and share with spouses. By the time we meet, they\'re emotionally invested and ready to move forward.",
    clientName: "Michelle Roberts",
    clientCompany: "Roberts Renovation Group"
  },
  {
    id: 3,
    body: "The analytics are eye-opening. I see which projects get the most views, what materials clients prefer, and how long they browse. This data helps me stock the right materials and showcase trending styles.",
    clientName: "James Wilson",
    clientCompany: "Wilson Custom Builders"
  },
  {
    id: 4,
    body: "Clients love the AR feature - they can visualize materials in their actual space using their phone. Had a client choose premium hardwood after seeing it in AR. That upgrade alone paid for Lattice for a year.",
    clientName: "Angela Martinez",
    clientCompany: "Martinez Design & Build"
  },
  {
    id: 5,
    body: "It\'s like having a showroom without the overhead. Showcase unlimited products, update instantly, and track what converts. We closed our physical showroom and doubled our reach with the digital one.",
    clientName: "Christopher Lee",
    clientCompany: "Lee Brothers Construction"
  },
  {
    id: 6,
    body: "The wishlist feature is brilliant. Clients save favorites, I get notified, and can prepare perfect quotes before we meet. It\'s like they\'re pre-selling themselves. Close rate went from 25% to 60%.",
    clientName: "Nicole Foster",
    clientCompany: "Foster Interiors & Remodeling"
  }
];

const showroomServices: ServiceItem[] = [
  {
    id: 'portfolio-showcase',
    title: 'Interactive Portfolio Gallery',
    description: 'Showcase your best work in a stunning, searchable gallery that clients can explore 24/7. High-resolution before/after sliders, 360° room tours, and detailed project stories bring your craftsmanship to life. Organize by room type, style, budget range, or timeline. Each project includes materials used, challenges solved, and client testimonials. Smart tagging helps clients find exactly what inspires them, while view tracking shows you what resonates most.',
    buttonText: 'View Gallery Demo',
    buttonHref: '/demo/portfolio-gallery',
    imageSrc: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2706&auto=format&fit=crop',
    imageAlt: 'Interactive portfolio gallery with project showcases',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'material-library',
    title: 'Complete Material & Finish Library',
    description: 'Display thousands of materials, finishes, and products in an organized, searchable catalog. From flooring and countertops to fixtures and hardware, clients can browse, filter, and compare options. Each item includes pricing tiers, specifications, lead times, and real project photos. Side-by-side comparisons help clients understand value differences. Automated availability updates prevent disappointment. Your material library becomes a powerful sales tool that educates and excites clients.',
    buttonText: 'Browse Materials',
    buttonHref: '/showroom/materials',
    imageSrc: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Digital material library with samples and finishes',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'ar-visualization',
    title: 'AR Visualization in Client Spaces',
    description: 'Let clients see materials and designs in their actual space using augmented reality on their phones. They can visualize different flooring options in their living room, preview cabinet colors in their kitchen, or see how a bathroom vanity fits. No app download required – works directly in web browsers. This immersive experience builds confidence in material choices and reduces post-purchase regret. Clients spend more when they can visualize the end result.',
    buttonText: 'Try AR Demo',
    buttonHref: '/demo/ar-viewer',
    imageSrc: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'AR visualization of materials in real spaces',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const showroomFAQs = [
  {
    id: 'faq-1',
    question: 'How does the digital showroom help me get more leads?',
    answer: 'Your showroom works 24/7 to capture and qualify leads. Visitors browse your work, save favorites, and provide contact information to access features like wishlists and quotes. The longer they engage, the more invested they become. You wake up to warm leads who already know what they want, dramatically shortening your sales cycle.'
  },
  {
    id: 'faq-2',
    question: 'Can I control what clients see in the showroom?',
    answer: 'Absolutely! You have complete control over your digital showroom. Feature your best projects, hide older work, set material availability, and adjust pricing tiers. Create exclusive sections for premium clients. Update instantly as you complete new projects or get new materials. Your showroom always reflects your current capabilities and inventory.'
  },
  {
    id: 'faq-3',
    question: 'How does the AR visualization work?',
    answer: 'Clients simply use their phone\'s camera through their web browser - no app needed. They can place virtual materials, fixtures, and even furniture in their actual space. Point the phone at a floor to see different flooring options, or at a wall to preview paint colors and backsplashes. It\'s like trying before buying, which builds confidence and reduces returns.'
  },
  {
    id: 'faq-4',
    question: 'What insights do I get from the analytics?',
    answer: 'See exactly how clients interact with your showroom. Track most-viewed projects, popular materials, time spent browsing, and conversion paths. Know which marketing channels drive quality traffic. Get alerts when hot leads are active. Use data to stock the right materials, showcase trending styles, and focus on what actually converts to sales.'
  },
  {
    id: 'faq-5',
    question: 'Can clients share their wishlists with others?',
    answer: 'Yes! Clients can share wishlists with spouses, family, or friends for input. Shared wishlists often lead to faster decisions and bigger projects as couples align on vision. You can see when wishlists are shared and who\'s viewing them. Social proof from shared excitement often leads to referrals before the project even starts.'
  },
  {
    id: 'faq-6',
    question: 'How much maintenance does the showroom require?',
    answer: 'Minimal effort for maximum impact. Initial setup takes a few hours to upload projects and materials. After that, spend 30 minutes monthly adding new projects and updating materials. The showroom runs itself - capturing leads, nurturing prospects, and providing analytics automatically. It\'s like having a salesperson who never sleeps but requires no salary.'
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
      title: '24/7 Lead Generation',
      description: 'Your showroom works around the clock capturing and qualifying leads. Clients browse projects, save favorites, and provide contact info—waking you up to warm, ready-to-buy prospects every morning.'
    },
    {
      number: 2,
      title: 'Unlimited Product Showcase',
      description: 'Display thousands of materials, finishes, and products without physical showroom overhead. Update instantly, track what converts, and never run out of space to showcase new options.'
    },
    {
      number: 3,
      title: 'AR Visualization Technology',
      description: 'Let clients see materials in their actual space using phone AR. Visualize flooring, cabinets, and finishes in real rooms—building confidence and driving premium material upgrades instantly.'
    },
    {
      number: 4,
      title: 'Smart Analytics & Insights',
      description: 'Know exactly which projects attract attention, what materials clients prefer, and when hot leads are browsing. Use data to stock trending products and showcase what actually converts to sales.'
    }
  ]

  const whyLatticeCards = [
    {
      title: 'Pre-Sell Projects Before the First Meeting',
      description: 'Traditional sales start cold. A digital showroom flips this entirely. Prospects spend 20-30 minutes browsing your portfolio and building wishlists before contacting you. By the time you meet, they\'ve emotionally invested in their vision. Contractors report 60-70% conversion rates for digital showroom leads versus 25-35% for traditional cold inquiries.',
      icon: Sparkles
    },
    {
      title: 'Showcase Unlimited Possibilities Without Physical Constraints',
      description: 'Physical showrooms are expensive and limited by square footage. Lattice digital showrooms eliminate these constraints. Display thousands of materials and design styles in organized, searchable categories. Update instantly as trends change. Clients explore 24/7 from anywhere. No rent, utilities, or staffing costs—premium showroom benefits at a fraction of the investment.',
      icon: ShoppingBag
    },
    {
      title: 'Turn Browsers into Buyers with Engagement Tracking',
      description: 'Traditional marketing provides limited insight until prospects contact you. Digital showrooms provide detailed engagement analytics. See which projects each prospect viewed, what materials they saved, and when they\'re active. Reach out at the perfect moment with personalized messaging based on their demonstrated interests, dramatically increasing conversions.',
      icon: Star
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
          testimonials={showroomTestimonials}
          title="Showroom Success Stories"
          subtitle="How Digital Showrooms Drive Sales"
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
    </div>
  )
}

export default DigitalShowroomPage