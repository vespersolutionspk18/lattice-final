'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Zap, Shield, Palette, TrendingUp, Users, Globe, Info } from 'lucide-react'
import LogoTestSmall from '../components/LogoTestSmall'

interface ComparisonFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  lattice: boolean | "partial";
  competitors: boolean | "partial";
}

const WhyChooseUs = () => {
  const [visibleCount, setVisibleCount] = useState(1)
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsCardRef = useRef<HTMLDivElement>(null)

  const comparisonFeatures: ComparisonFeature[] = [
    {
      icon: Zap,
      title: "All-in-One Platform",
      description: "CRM, design tools, and website in one unified system",
      lattice: true,
      competitors: false
    },
    {
      icon: Palette,
      title: "AI-Powered Design Tools",
      description: "Generate 3D renders and design concepts instantly",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: Shield,
      title: "Free Website Included",
      description: "SEO-optimized website with CRM integration",
      lattice: true,
      competitors: false
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Live dashboard tracking leads, projects, and revenue",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Dedicated support team available anytime",
      lattice: true,
      competitors: false
    },
    {
      icon: Globe,
      title: "Digital Showroom",
      description: "Interactive portfolio to showcase your work",
      lattice: true,
      competitors: false
    }
  ];

  const notifications = [
    { id: 1, title: 'New Lead', message: 'Bathroom remodel inquiry', time: 'Just now', color: 'bg-highlighter-green/10' },
    { id: 2, title: 'CRM Update', message: 'Invoice sent to client', time: '2h ago', color: 'bg-blue-100' },
    { id: 3, title: '3D Render Ready', message: 'Kitchen design complete', time: '5h ago', color: 'bg-purple-100' },
    { id: 4, title: 'Website Traffic', message: '+45% monthly visitors', time: '1d ago', color: 'bg-amber-100' },
    { id: 5, title: 'AI Design', message: '5 concepts generated', time: '2d ago', color: 'bg-pink-100' },
    { id: 6, title: 'Digital Showroom', message: '12 new views today', time: '3d ago', color: 'bg-indigo-100' },
    { id: 7, title: 'SEO Ranking', message: '#1 for "contractor near me"', time: '4d ago', color: 'bg-teal-100' },
    { id: 8, title: 'Contract Signed', message: 'Deal closed via CRM', time: '5d ago', color: 'bg-rose-100' },
    { id: 9, title: 'Plans Approved', message: 'Permit ready designs', time: '6d ago', color: 'bg-cyan-100' },
    { id: 10, title: 'Lead Converted', message: 'Showroom visitor booked', time: '1w ago', color: 'bg-lime-100' },
    { id: 11, title: 'Free Website', message: 'CRM bundle activated', time: '1w ago', color: 'bg-orange-100' },
    { id: 12, title: '4K Video', message: 'Project showcase ready', time: '2w ago', color: 'bg-violet-100' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(prev => {
        if (prev >= 5) return 1 // Reset after showing 5 notifications
        return prev + 1
      })
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  // Intersection observer for animation trigger - restarts when scrolled back
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true)
          } else {
            setHasAnimated(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsCardRef.current) {
      observer.observe(statsCardRef.current)
    }

    return () => {
      if (statsCardRef.current) {
        observer.unobserve(statsCardRef.current)
      }
    }
  }, [])

  // Show notifications in reverse order (newest first)
  const visibleNotifications = notifications.slice(0, visibleCount).reverse()

  return (
    <div className="p-3 sm:p-5" id="whycooseus">
      <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 tracking-tighter">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
          <h5 className="text-2xl sm:text-3xl md:text-4xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
            Why Choose Us
          </h5>
          <p className="text-black/75 text-lg sm:text-xl md:text-2xl tracking-tighter w-full lg:w-[68%]">
            While we&apos;re unmatched in our dedication to excellence and setting the industry standard, we get it, sometimes you need to explore other options. But frankly, if you&apos;re comparing, choosing elsewhere just doesn&apos;t add up.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] bg-stone-200/40 border-b border-gray-200">
            <div className="p-3 sm:p-4 md:p-5"></div>
            <div className="p-3 sm:p-4 md:p-5 text-center border-l border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#3b82f6] tracking-tighter">Lattice</h3>
            </div>
            <div className="p-3 sm:p-4 md:p-5 text-center border-l border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-500 tracking-tight">Others</h3>
            </div>
          </div>

          {/* Feature Rows */}
          {comparisonFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] ${
                  index !== comparisonFeatures.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Feature Info Column */}
                <div className="p-3 sm:p-4 md:p-5 flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#3b82f6]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-black tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 tracking-tight hidden sm:block" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Lattice Status Column */}
                <div className="p-3 sm:p-4 md:p-5 flex items-center justify-center border-l border-gray-200">
                  {feature.lattice === true && (
                    index < 3 ? (
                      <div className="scale-75 sm:scale-90 md:scale-100">
                        <LogoTestSmall />
                      </div>
                    ) : (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-700 stroke-[4] scale-[0.98]" />
                    )
                  )}
                  {feature.lattice === "partial" && (
                    <div className="flex items-center gap-1 sm:gap-2 group relative">
                      <span className="text-xs sm:text-sm md:text-base font-medium text-gray-600">Partial</span>
                      <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        Limited functionality compared to full implementation
                      </div>
                    </div>
                  )}
                  {feature.lattice === false && (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 stroke-[4] scale-[0.98]" />
                  )}
                </div>

                {/* Competitors Status Column */}
                <div className="p-3 sm:p-4 md:p-5 flex items-center justify-center border-l border-gray-200">
                  {feature.competitors === true && (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-700 stroke-[4] scale-[0.98]" />
                  )}
                  {feature.competitors === "partial" && (
                    <div className="flex items-center gap-1 sm:gap-2 group relative">
                      <span className="text-xs sm:text-sm md:text-base font-medium text-gray-600">Partial</span>
                      <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        Limited functionality compared to full implementation
                      </div>
                    </div>
                  )}
                  {feature.competitors === false && (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 stroke-[4] scale-[0.98]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Introduction */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
          <h5 className="text-2xl sm:text-3xl md:text-4xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
            Our Features
          </h5>
          <p className="text-black/75 text-lg sm:text-xl md:text-2xl tracking-tighter w-full lg:w-[68%]">
            Beyond the basics, we&apos;ve built a comprehensive suite of tools designed to transform how you work. Each feature is crafted to deliver measurable results and drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto md:auto-rows-[280px]">
          {/* Card 1: Large stats showcase - 2 cols */}
          <div ref={statsCardRef} className="col-span-1 md:col-span-2 row-span-1 bg-stone-200/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tighter text-black/80 mb-2 sm:mb-3">
                Proven Results
              </h3>
              <p className="text-lg sm:text-xl text-black/60 tracking-tighter">
                Empowering contractors nationwide
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-black/85 tracking-tighter">850+</div>
                <div className="text-sm sm:text-base md:text-lg text-black/50 tracking-tighter mt-1">Contractors</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-black/85 tracking-tighter">98%</div>
                <div className="text-sm sm:text-base md:text-lg text-black/50 tracking-tighter mt-1">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-black/85 tracking-tighter">3.2M</div>
                <div className="text-sm sm:text-base md:text-lg text-black/50 tracking-tighter mt-1">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-black/85 tracking-tighter">48</div>
                <div className="text-sm sm:text-base md:text-lg text-black/50 tracking-tighter mt-1">States Served</div>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="h-2 flex-1 rounded-full"
                  initial={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                  animate={hasAnimated ? {
                    backgroundColor: [
                      'rgba(0, 0, 0, 0.2)',
                      'rgba(251, 207, 232, 1)',
                      'rgba(236, 72, 153, 0.7)'
                    ],
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{
                    delay: index * 1.2,
                    duration: 1.2,
                    times: [0, 0.5, 1],
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card 2: Budget transparency - 1 col */}
          <div className="col-span-1 row-span-1 bg-stone-200/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[250px] md:min-h-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tighter text-black/80 mb-2 sm:mb-3">
                All-in-One Platform
              </h3>
              <p className="text-lg sm:text-xl text-black/60 tracking-tighter mb-4 sm:mb-6">
                Everything you need
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex justify-between items-baseline">
                <span className="text-base sm:text-lg text-black/60">Time saved weekly</span>
                <span className="text-2xl sm:text-3xl font-medium text-black/80">15hrs</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex justify-between text-sm sm:text-base md:text-lg items-center">
                  <span className="text-black/70">CRM included</span>
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    initial={{
                      background: 'rgba(55, 65, 81, 0.6)',
                      boxShadow: 'none'
                    }}
                    animate={hasAnimated ? {
                      background: [
                        'rgba(55, 65, 81, 0.6)',
                        'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(34, 197, 94, 0.9) 50%, rgba(34, 197, 94, 1) 100%)'
                      ],
                      boxShadow: [
                        'none',
                        '0 0 16px 6px rgba(34, 197, 94, 0.7), 0 0 8px 2px rgba(255, 255, 255, 0.8)'
                      ]
                    } : {}}
                    transition={{
                      delay: 0,
                      duration: 1.5,
                      ease: 'easeOut'
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm sm:text-base md:text-lg items-center">
                  <span className="text-black/70">Design tools</span>
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    initial={{
                      background: 'rgba(55, 65, 81, 0.6)',
                      boxShadow: 'none'
                    }}
                    animate={hasAnimated ? {
                      background: [
                        'rgba(55, 65, 81, 0.6)',
                        'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(34, 197, 94, 0.9) 50%, rgba(34, 197, 94, 1) 100%)'
                      ],
                      boxShadow: [
                        'none',
                        '0 0 16px 6px rgba(34, 197, 94, 0.7), 0 0 8px 2px rgba(255, 255, 255, 0.8)'
                      ]
                    } : {}}
                    transition={{
                      delay: 0,
                      duration: 1.5,
                      ease: 'easeOut'
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm sm:text-base md:text-lg items-center">
                  <span className="text-black/70">Free website</span>
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    initial={{
                      background: 'rgba(55, 65, 81, 0.6)',
                      boxShadow: 'none'
                    }}
                    animate={hasAnimated ? {
                      background: [
                        'rgba(55, 65, 81, 0.6)',
                        'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(34, 197, 94, 0.9) 50%, rgba(34, 197, 94, 1) 100%)'
                      ],
                      boxShadow: [
                        'none',
                        '0 0 16px 6px rgba(34, 197, 94, 0.7), 0 0 8px 2px rgba(255, 255, 255, 0.8)'
                      ]
                    } : {}}
                    transition={{
                      delay: 0,
                      duration: 1.5,
                      ease: 'easeOut'
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-black/10">
                <div className="text-2xl font-medium text-black/75">6</div>
                <div className="text-sm text-black/50">Integrated services</div>
              </div>
            </div>
          </div>

          {/* Card 3: Process timeline - 1 col, 2 rows tall */}
          <div className="col-span-1 row-span-2 bg-stone-200/40 rounded-3xl p-8 flex flex-col">
            <h3 className="text-2xl font-medium tracking-tighter text-black/80 mb-3">
              Growth Journey
            </h3>
            <p className="text-xl text-black/60 tracking-tighter mb-8">
              Scale your business with Lattice
            </p>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-black font-medium transition-all duration-300 group-hover:bg-pink-400/50 group-hover:scale-110">
                    1
                  </div>
                  <div className="w-0.5 h-20 bg-black/20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-black/75 group-hover:text-black transition-colors">Onboard</h4>
                  <p className="text-lg text-black/50 mt-1">Quick setup & training</p>
                  <div className="mt-2 text-xs text-black/40 tracking-tight">CRM setup • Tool access</div>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-medium transition-all duration-300 group-hover:bg-orange-400/50 group-hover:scale-110">
                    2
                  </div>
                  <div className="w-0.5 h-20 bg-black/20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-black/75 group-hover:text-black transition-colors">Design</h4>
                  <p className="text-lg text-black/50 mt-1">Create stunning proposals</p>
                  <div className="mt-2 text-xs text-black/40 tracking-tight">3D renders • AI assistance</div>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-black font-medium transition-all duration-300 group-hover:bg-yellow-300/50 group-hover:scale-110">
                    3
                  </div>
                  <div className="w-0.5 h-20 bg-black/20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-black/75 group-hover:text-black transition-colors">Manage</h4>
                  <p className="text-lg text-black/50 mt-1">Streamline operations</p>
                  <div className="mt-2 text-xs text-black/40 tracking-tight">CRM tracking • Automation</div>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-medium transition-all duration-300 group-hover:bg-green-400/50 group-hover:scale-110">
                    4
                  </div>
                  <div className="w-0.5 h-20 bg-black/20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-black/75 group-hover:text-black transition-colors">Market</h4>
                  <p className="text-lg text-black/50 mt-1">Attract more clients</p>
                  <div className="mt-2 text-xs text-black/40 tracking-tight">SEO website • Showroom</div>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-highlighter-green rounded-full flex items-center justify-center text-white font-medium transition-all duration-300 group-hover:bg-highlighter-green/30 group-hover:scale-110 group-hover:ring-2 group-hover:ring-highlighter-green/20 group-hover:ring-offset-2">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-black/75 group-hover:text-black transition-colors">Scale</h4>
                  <p className="text-lg text-black/50 mt-1">Grow exponentially</p>
                  <div className="mt-2 text-xs text-black/40 tracking-tight">More projects • Higher revenue</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Real-time availability - 1 col */}
          <div className="col-span-1 row-span-1 bg-stone-200/40 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium tracking-tighter text-black/80 mb-3">
                24/7 Support
              </h3>
              <p className="text-xl text-black/60 tracking-tighter mb-6">
                We&apos;re here when you need us
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-lg text-black/70">Response Time</span>
                <span className="text-2xl font-medium text-black/80">&lt; 2hrs</span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-3 overflow-hidden">
                <div className="bg-green-700 h-full rounded-full" style={{width: '95%'}}></div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="text-center">
                  <div className="text-sm text-black/50">Mon-Fri</div>
                  <div className="text-lg font-medium text-black/70">24/7</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-black/50">Weekend</div>
                  <div className="text-lg font-medium text-black/70">On-call</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-black/50">Emergency</div>
                  <div className="text-lg font-medium text-black/70">Always</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Sustainability focus - 1 col */}
          <div className="col-span-1 row-span-1 bg-stone-200/40 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium tracking-tighter text-black/80 mb-3">
                ROI Focused
              </h3>
              <p className="text-xl text-black/60 tracking-tighter mb-6">
                Maximize your returns
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg text-black/70">Lead Quality</span>
                <div className="flex gap-1">
                  <div className="w-8 h-8 bg-highlighter-green/40 rounded-full"></div>
                  <div className="w-8 h-8 bg-highlighter-green/60 rounded-full"></div>
                  <div className="w-8 h-8 bg-highlighter-green/80 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-black/70">Close Rate</span>
                <span className="text-2xl font-medium text-black/80">+42%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-black/70">Profit Increase</span>
                <span className="text-2xl font-medium text-black/80">35%</span>
              </div>
              <div className="pt-4 border-t border-black/10">
                <div className="text-sm text-black/50">Average ROI</div>
                <div className="text-3xl font-medium text-stone-800 mt-1">3.8x</div>
              </div>
            </div>
          </div>

          {/* Card 6: Real-time updates - 2 cols */}
          <div className="col-span-2 row-span-1 bg-stone-200/40 rounded-3xl p-8 flex flex-col justify-between relative">
            <div>
              <h3 className="text-2xl font-medium tracking-tighter text-black/80 mb-3">
                Live Business Dashboard
              </h3>
              <p className="text-xl text-black/60 tracking-tighter">
                Track your success in real-time
              </p>
            </div>
            
            {/* Fixed height container */}
            <div className="relative h-[160px] overflow-hidden">
              <div className="flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                  {visibleNotifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      layout
                      initial={{ scale: 0, opacity: 0, y: -20 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                    >
                      <div className={`${notification.color} border border-black/5 rounded-lg p-2`}>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div>
                              <h4 className="text-sm font-medium text-black/80">{notification.title}</h4>
                              <p className="text-xs text-black/50">{notification.message}</p>
                            </div>
                            {index === 0 && <div className="w-1.5 h-1.5 bg-highlighter-green rounded-full animate-pulse"></div>}
                          </div>
                          <span className="text-xs text-black/40">{notification.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-200/75 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-black/50">Live project tracking</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1 h-1 bg-black/30 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs