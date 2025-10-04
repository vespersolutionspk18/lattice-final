'use client'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import React, { useEffect, useRef, useState } from 'react'
import { Check, X, Zap, Shield, Palette, TrendingUp, Users, Globe, Info } from 'lucide-react'
import LogoTestSmall from '../components/LogoTestSmall'
import LogoTest from '../components/LogoTest'

interface ComparisonFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  lattice: boolean | "partial";
  competitors: boolean | "partial";
}

interface Metric {
  name: string;
  wevisuValue: number;
  latticeValue: number;
}

const metrics: Metric[] = [
  { name: 'Customer Satisfaction', wevisuValue: 65, latticeValue: 98 },
  { name: 'Feature Completeness', wevisuValue: 60, latticeValue: 95 },
  { name: 'Support Quality', wevisuValue: 50, latticeValue: 97 },
  { name: 'Return on Investment', wevisuValue: 55, latticeValue: 96 }
];

const ComparisonChart = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedWevisuValues, setAnimatedWevisuValues] = useState([0, 0, 0, 0]);
  const [animatedLatticeValues, setAnimatedLatticeValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px 0px 0px' }
    );

    const currentRef = triggerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 3500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);

        setAnimatedWevisuValues(metrics.map(m => Math.round(m.wevisuValue * easedProgress)));
        setAnimatedLatticeValues(metrics.map(m => Math.round(m.latticeValue * easedProgress)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedWevisuValues(metrics.map(m => m.wevisuValue));
          setAnimatedLatticeValues(metrics.map(m => m.latticeValue));
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 p-8">
      <div className="grid grid-cols-2 gap-16 items-center mb-8">
        <div className="text-center">
          <h3 className="text-3xl font-medium tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: '#9ca3af' }}>Wevisu</h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <LogoTestSmall />
            <span className="text-3xl font-medium tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: '#3b82f6' }}>Lattice</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div
            key={metric.name}
            ref={index === 0 ? triggerRef : null}
            className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center"
          >
            <div className="flex flex-col items-end">
              <span className="text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-figtree)', color: '#9ca3af' }}>
                {animatedWevisuValues[index]}%
              </span>
              <div className="w-full bg-stone-200/40 rounded-full h-8 relative overflow-hidden">
                <div
                  className="absolute right-0 bg-stone-300 h-8 rounded-full"
                  style={{
                    width: `${animatedWevisuValues[index]}%`
                  }}
                ></div>
              </div>
            </div>
            <div className="px-6 text-center min-w-[250px]">
              <p className="text-lg font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>{metric.name}</p>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-figtree)', color: '#3b82f6' }}>
                {animatedLatticeValues[index]}%
              </span>
              <div className="w-full bg-stone-200/40 rounded-full h-8 relative overflow-hidden">
                <div
                  className="absolute left-0 bg-[#3b82f6] h-8 rounded-full"
                  style={{
                    width: `${animatedLatticeValues[index]}%`
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComparisonPage = () => {
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

  return (
    <div className="pt-5">
      <Header />
      <div className="p-5 mt-24">
        <div
          id="hero"
          className="relative flex items-center justify-center rounded-2xl overflow-hidden"
          style={{
            height: '418px',
            background: `
              linear-gradient(180deg,
                rgba(0, 255, 255, 0) 0%,
                rgba(0, 255, 255, 0) 30%,
                rgba(0, 255, 255, 0.15) 50%,
                rgba(0, 255, 255, 0) 70%
              ),
              radial-gradient(ellipse 120% 80% at 50% 100%,
                #00FFFF 0%,
                #0066FF 25%,
                #1b2e9e 50%,
                #1b2e9e 65%,
                #1b2e9e 80%,
                #0a1128 100%
              ),
              #000000
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-5xl mx-auto px-6 text-center py-20 relative z-10">
            <h2 className="text-4xl tracking-tighter font-medium mb-8" style={{ fontFamily: 'var(--font-figtree)', color: '#ffffff' }}>
              Comparison
            </h2>
            <h1 className="text-7xl tracking-tighter font-bold mb-6" style={{ fontFamily: 'var(--font-figtree)', color: '#ffffff' }}>
              <span style={{
                display: 'inline-block',
                backgroundImage: 'linear-gradient(135deg, #66FFFF 0%, #66B3FF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent'
              }}>Lattice</span> vs <span style={{ color: '#9ca3af' }}>Wevisu</span>
            </h1>
            <p className="text-2xl tracking-tighter mb-8" style={{ fontFamily: 'var(--font-figtree)', color: '#ffffff' }}>
              Professional design services that help you win more projects and command premium prices
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table Only */}
      <div className="p-5">
        <div className="p-5 rounded-4xl flex flex-col gap-16 tracking-tighter">
          <div className="text-center mt-8 mb-4">
            <h2 className="text-5xl tracking-tighter font-medium mb-4" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.8)' }}>
              The Lattice Difference
            </h2>
            <p className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.75)' }}>
              The mystery of the cube
            </p>
          </div>

          <div className="flex flex-row gap-16 items-center">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 p-8 w-[68%]">
              <p className="text-black/75 text-2xl tracking-tighter">
                While we&apos;re unmatched in our dedication to excellence and setting the industry standard, we get it, sometimes you need to explore other options. But frankly, if you&apos;re comparing, choosing elsewhere just doesn&apos;t add up.
              </p>
            </div>
            <div className="w-[28%] flex items-center justify-center">
              <div className="scale-[2.5]">
                <LogoTest />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-16 items-center">
            <div className="w-[28%] flex items-center justify-center">
              <div className="scale-[2.5]">
                <LogoTest />
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 p-8 w-[68%]">
              <p className="text-black/75 text-2xl tracking-tighter">
                While we&apos;re unmatched in our dedication to excellence and setting the industry standard, we get it, sometimes you need to explore other options. But frankly, if you&apos;re comparing, choosing elsewhere just doesn&apos;t add up.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 mb-4">
            <h2 className="text-5xl tracking-tighter font-medium mb-4" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.8)' }}>
              The Comparison
            </h2>
            <p className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.75)' }}>
              See how we stack up against the competition
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-stone-200/40 border-b border-gray-200">
              <div className="p-5"></div>
              <div className="p-5 text-center border-l border-gray-200">
                <h3 className="text-3xl font-medium text-[#3b82f6] tracking-tighter">Lattice</h3>
              </div>
              <div className="p-5 text-center border-l border-gray-200">
                <h3 className="text-3xl font-semibold text-gray-500 tracking-tight">Others</h3>
              </div>
            </div>

            {/* Feature Rows */}
            {comparisonFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-[2fr_1fr_1fr] ${
                    index !== comparisonFeatures.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  {/* Feature Info Column */}
                  <div className="p-5 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#3b82f6]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-semibold text-black tracking-tight">
                        {feature.title}
                      </h4>
                      <p className="text-base text-gray-600 tracking-tight" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Lattice Status Column */}
                  <div className="p-5 flex items-center justify-center border-l border-gray-200">
                    {feature.lattice === true && (
                      index < 3 ? (
                        <LogoTestSmall />
                      ) : (
                        <Check className="w-6 h-6 text-green-700 stroke-[4] scale-[0.98]" />
                      )
                    )}
                    {feature.lattice === "partial" && (
                      <div className="flex items-center gap-2 group relative">
                        <span className="text-base font-medium text-gray-600">Partial</span>
                        <Info className="w-4 h-4 text-gray-400 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          Limited functionality compared to full implementation
                        </div>
                      </div>
                    )}
                    {feature.lattice === false && (
                      <X className="w-6 h-6 text-gray-400 stroke-[4] scale-[0.98]" />
                    )}
                  </div>

                  {/* Competitors Status Column */}
                  <div className="p-5 flex items-center justify-center border-l border-gray-200">
                    {feature.competitors === true && (
                      <Check className="w-6 h-6 text-green-700 stroke-[4] scale-[0.98]" />
                    )}
                    {feature.competitors === "partial" && (
                      <div className="flex items-center gap-2 group relative">
                        <span className="text-base font-medium text-gray-600">Partial</span>
                        <Info className="w-4 h-4 text-gray-400 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          Limited functionality compared to full implementation
                        </div>
                      </div>
                    )}
                    {feature.competitors === false && (
                      <X className="w-6 h-6 text-gray-400 stroke-[4] scale-[0.98]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Venn Diagram Section */}
          <div className="text-center mt-16 mb-4">
            <h2 className="text-5xl tracking-tighter font-medium mb-4" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.8)' }}>
              Not Convinced? Let&apos;s Try Again
            </h2>
            <p className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.75)' }}>
              The intersection of innovation, reliability, and results—that&apos;s where you&apos;ll find Lattice
            </p>
          </div>

          {/* Bi-Venn Diagram - Same width as comparison table, 30% taller */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200" style={{ minHeight: '650px' }}>
            <svg viewBox="0 0 1000 700" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="leftOnly">
                  <circle cx="350" cy="350" r="320" />
                </clipPath>
                <clipPath id="rightOnly">
                  <circle cx="650" cy="350" r="320" />
                </clipPath>
              </defs>

              {/* Left Circle non-overlapping part - light grey */}
              <circle
                cx="350"
                cy="350"
                r="320"
                fill="rgba(231, 229, 228, 0.4)"
              />

              {/* Right Circle non-overlapping part - light grey */}
              <circle
                cx="650"
                cy="350"
                r="320"
                fill="rgba(231, 229, 228, 0.4)"
              />

              {/* White overlap in the center */}
              <circle
                cx="350"
                cy="350"
                r="320"
                fill="white"
                clipPath="url(#rightOnly)"
              />

              {/* Left Circle border */}
              <circle
                cx="350"
                cy="350"
                r="320"
                fill="none"
                stroke="black"
                strokeWidth="0.96"
              />

              {/* Right Circle border */}
              <circle
                cx="650"
                cy="350"
                r="320"
                fill="none"
                stroke="black"
                strokeWidth="0.96"
              />

              <text x="210" y="185" fontSize="26" fontWeight="400" fill="black" fontFamily="var(--font-figtree)">
                Wevisu
              </text>

              <text x="650" y="185" fontSize="26" fontWeight="400" fill="black" fontFamily="var(--font-figtree)">
                In-house Team
              </text>

              {/* Center Text - Lattice at intersection point */}
              <text x="455" y="180" fontSize="32" fontWeight="700" fill="#3b82f6" fontFamily="var(--font-figtree)">
                Lattice
              </text>
            </svg>
          </div>

          {/* Comparison Chart Section */}
          <div className="text-center mt-16 mb-4">
            <h2 className="text-5xl tracking-tighter font-medium mb-4" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.8)' }}>
              There&apos;s No Point in Comparing
            </h2>
            <p className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.75)' }}>
              The numbers speak for themselves—Lattice outperforms on every metric
            </p>
          </div>

          {/* Comparison Bar Chart - Bi-directional between Wevisu and Lattice */}
          <ComparisonChart />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ComparisonPage
