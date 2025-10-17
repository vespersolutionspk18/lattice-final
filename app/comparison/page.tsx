'use client'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import React, { useEffect, useRef, useState } from 'react'
import { Check, X, Zap, Shield, Palette, TrendingUp, Users, Globe, Info, Box, Award } from 'lucide-react'
import LogoTestSmall from '../components/LogoTestSmall'
import LogoTest from '../components/LogoTest'

interface ComparisonFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string | React.ReactNode;
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

const InteractiveComparisonModule = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 relative" style={{ marginTop: '64px', padding: '64px' }}>
      <div className="relative w-full h-full flex items-start justify-center" style={{ gap: '32px' }}>
        {/* Left Card - Wevisu */}
        <div
          className="relative flex flex-col"
          style={{
            backgroundColor: 'rgba(231, 229, 228, 0.5)',
            width: '380px',
            borderRadius: '48px',
            padding: '48px',
            zIndex: 1
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#6b7280' }}>
              Wevisu
            </h3>
            <p className="text-sm font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#9ca3af' }}>
              The Platform
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
              <li
                className="flex items-start gap-3 cursor-pointer transition-all duration-300"
                style={{
                  opacity: hoveredItem === null || hoveredItem === 'wevisu-software' ? 1 : 0.4,
                  transform: hoveredItem === 'wevisu-software' ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredItem('wevisu-software')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check className="w-5 h-5" strokeWidth={2.5} style={{ color: '#16a34a' }} />
                </div>
                <span
                  className="text-base tracking-tight"
                  style={{
                    fontFamily: 'var(--font-figtree)',
                    color: '#374151',
                    fontWeight: hoveredItem === 'wevisu-software' ? 600 : 400,
                    transition: 'font-weight 0.3s ease-in-out'
                  }}
                >
                  Access to Powerful Software Tools
                </span>
              </li>
              <li
                className="flex items-start gap-3 cursor-pointer transition-all duration-300"
                style={{
                  opacity: hoveredItem === null || hoveredItem === 'wevisu-integration' ? 1 : 0.4,
                  transform: hoveredItem === 'wevisu-integration' ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredItem('wevisu-integration')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check className="w-5 h-5" strokeWidth={2.5} style={{ color: '#16a34a' }} />
                </div>
                <span
                  className="text-base tracking-tight"
                  style={{
                    fontFamily: 'var(--font-figtree)',
                    color: '#374151',
                    fontWeight: hoveredItem === 'wevisu-integration' ? 600 : 400,
                    transition: 'font-weight 0.3s ease-in-out'
                  }}
                >
                  Built-In Platform Integration Tools
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Requires Expensive Annual Membership
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Inflexible, One-Size-Fits-All Showroom
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Restrictive Material Sourcing Policies
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Lacks Dedicated Human Support
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Limited Third-Party Integrations
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Card - Lattice */}
        <div
          className="relative flex flex-col"
          style={{
            background: 'linear-gradient(135deg, #0066FF 0%, #3b82f6 50%, #6ce2ff 100%)',
            borderRadius: '48px',
            width: '500px',
            padding: '48px',
            zIndex: 2,
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 tracking-tight text-white" style={{ fontFamily: 'var(--font-figtree)' }}>
              Lattice
            </h3>
            <p className="text-sm font-semibold text-white/90 tracking-tight mb-1" style={{ fontFamily: 'var(--font-figtree)' }}>
              The Integrated Solution
            </p>
            <p className="text-xs font-medium text-white/70 tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
              (The Best of Both Worlds)
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'wevisu-software' ? 1 : 0.5,
                transform: hoveredItem === 'wevisu-software' ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredItem === 'wevisu-software' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'wevisu-software' ? '8px' : '0px',
                margin: hoveredItem === 'wevisu-software' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('wevisu-software')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Check className="w-5 h-5" strokeWidth={3} style={{ color: '#16a34a' }} />
              </div>
              <span
                className="text-base text-white tracking-tight"
                style={{
                  fontFamily: 'var(--font-figtree)',
                  fontWeight: hoveredItem === 'wevisu-software' ? 700 : 500,
                  transition: 'font-weight 0.3s ease-in-out'
                }}
              >
                Fully Integrated Software Suite (CRM, AI)
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'wevisu-integration' ? 1 : 0.5,
                transform: hoveredItem === 'wevisu-integration' ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredItem === 'wevisu-integration' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'wevisu-integration' ? '8px' : '0px',
                margin: hoveredItem === 'wevisu-integration' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('wevisu-integration')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Check className="w-5 h-5" strokeWidth={3} style={{ color: '#16a34a' }} />
              </div>
              <span
                className="text-base text-white tracking-tight"
                style={{
                  fontFamily: 'var(--font-figtree)',
                  fontWeight: hoveredItem === 'wevisu-integration' ? 700 : 500,
                  transition: 'font-weight 0.3s ease-in-out'
                }}
              >
                Seamless Workflow & Tool Integration
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'inhouse-professionals' ? 1 : 0.5,
                transform: hoveredItem === 'inhouse-professionals' ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredItem === 'inhouse-professionals' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'inhouse-professionals' ? '8px' : '0px',
                margin: hoveredItem === 'inhouse-professionals' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('inhouse-professionals')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Check className="w-5 h-5" strokeWidth={3} style={{ color: '#16a34a' }} />
              </div>
              <span
                className="text-base text-white tracking-tight"
                style={{
                  fontFamily: 'var(--font-figtree)',
                  fontWeight: hoveredItem === 'inhouse-professionals' ? 700 : 500,
                  transition: 'font-weight 0.3s ease-in-out'
                }}
              >
                Dedicated, On-Demand Professionals
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'inhouse-accountability' ? 1 : 0.5,
                transform: hoveredItem === 'inhouse-accountability' ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredItem === 'inhouse-accountability' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'inhouse-accountability' ? '8px' : '0px',
                margin: hoveredItem === 'inhouse-accountability' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('inhouse-accountability')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Check className="w-5 h-5" strokeWidth={3} style={{ color: '#16a34a' }} />
              </div>
              <span
                className="text-base text-white tracking-tight"
                style={{
                  fontFamily: 'var(--font-figtree)',
                  fontWeight: hoveredItem === 'inhouse-accountability' ? 700 : 500,
                  transition: 'font-weight 0.3s ease-in-out'
                }}
              >
                Vetted Experts with Built-in Accountability
              </span>
            </li>
          </ul>

          {/* Visual Divider */}
          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.3)', margin: '24px 0' }} />

          {/* Lattice-Exclusive Benefits */}
          <p className="text-xs font-medium text-white/70 tracking-tight text-center mb-4" style={{ fontFamily: 'var(--font-figtree)' }}>
            (The Lattice Exclusives)
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'lattice-flexibility' ? 1 : 0.5,
                boxShadow: hoveredItem === 'lattice-flexibility' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'lattice-flexibility' ? '8px' : '0px',
                margin: hoveredItem === 'lattice-flexibility' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('lattice-flexibility')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-base text-white font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
                Pay-Per-Project Flexibility
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'lattice-quality' ? 1 : 0.5,
                boxShadow: hoveredItem === 'lattice-quality' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'lattice-quality' ? '8px' : '0px',
                margin: hoveredItem === 'lattice-quality' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('lattice-quality')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-base text-white font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
                Cost of a Freelancer, Quality of a Partner
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'lattice-scalable' ? 1 : 0.5,
                boxShadow: hoveredItem === 'lattice-scalable' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'lattice-scalable' ? '8px' : '0px',
                margin: hoveredItem === 'lattice-scalable' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('lattice-scalable')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-base text-white font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
                Instantly Scalable Team & Resources
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'lattice-hr' ? 1 : 0.5,
                boxShadow: hoveredItem === 'lattice-hr' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'lattice-hr' ? '8px' : '0px',
                margin: hoveredItem === 'lattice-hr' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('lattice-hr')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-base text-white font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
                Zero HR Overhead or Hiring Risk
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'lattice-unified' ? 1 : 0.5,
                boxShadow: hoveredItem === 'lattice-unified' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'lattice-unified' ? '8px' : '0px',
                margin: hoveredItem === 'lattice-unified' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('lattice-unified')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-base text-white font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
                A Single, Unified Platform for All Needs
              </span>
            </li>
            <li
              className="flex items-start gap-3 cursor-pointer transition-all duration-300"
              style={{
                opacity: hoveredItem === null || hoveredItem === 'lattice-compliant' ? 1 : 0.5,
                boxShadow: hoveredItem === 'lattice-compliant' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                borderRadius: '12px',
                padding: hoveredItem === 'lattice-compliant' ? '8px' : '0px',
                margin: hoveredItem === 'lattice-compliant' ? '-8px' : '0px',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredItem('lattice-compliant')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-base text-white font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)' }}>
                Guaranteed Code-Compliant & Permit-Ready Work
              </span>
            </li>
          </ul>
          </div>
        </div>

        {/* Right Card - In-house Team */}
        <div
          className="relative flex flex-col"
          style={{
            backgroundColor: 'rgba(231, 229, 228, 0.5)',
            width: '380px',
            borderRadius: '48px',
            padding: '48px',
            zIndex: 1
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#6b7280' }}>
              In-house Team
            </h3>
            <p className="text-sm font-medium tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#9ca3af' }}>
              The People
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
              <li
                className="flex items-start gap-3 cursor-pointer transition-all duration-300"
                style={{
                  opacity: hoveredItem === null || hoveredItem === 'inhouse-professionals' ? 1 : 0.4,
                  transform: hoveredItem === 'inhouse-professionals' ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredItem('inhouse-professionals')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check className="w-5 h-5" strokeWidth={2.5} style={{ color: '#16a34a' }} />
                </div>
                <span
                  className="text-base tracking-tight"
                  style={{
                    fontFamily: 'var(--font-figtree)',
                    color: '#374151',
                    fontWeight: hoveredItem === 'inhouse-professionals' ? 600 : 400,
                    transition: 'font-weight 0.3s ease-in-out'
                  }}
                >
                  Professionals Integrated With Your Brand
                </span>
              </li>
              <li
                className="flex items-start gap-3 cursor-pointer transition-all duration-300"
                style={{
                  opacity: hoveredItem === null || hoveredItem === 'inhouse-accountability' ? 1 : 0.4,
                  transform: hoveredItem === 'inhouse-accountability' ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredItem('inhouse-accountability')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check className="w-5 h-5" strokeWidth={2.5} style={{ color: '#16a34a' }} />
                </div>
                <span
                  className="text-base tracking-tight"
                  style={{
                    fontFamily: 'var(--font-figtree)',
                    color: '#374151',
                    fontWeight: hoveredItem === 'inhouse-accountability' ? 600 : 400,
                    transition: 'font-weight 0.3s ease-in-out'
                  }}
                >
                  Direct Oversight & Accountability
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Massive Overhead & Benefit Costs
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Slow to Scale Up or Down
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  High Risk with Hiring & Firing
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Limited to a Single Skill Set Per Hire
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ opacity: hoveredItem === null ? 1 : 0.4, transition: 'opacity 0.3s ease-in-out' }}>
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-base tracking-tight" style={{ fontFamily: 'var(--font-figtree)', color: '#374151' }}>
                  Requires Separate Software Investment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonPage = () => {
  const comparisonFeatures: ComparisonFeature[] = [
    {
      icon: Users,
      title: "Contract-Based Remote Employees",
      description: "Architects, Drawing Technicians and Designers all for one affordable price.",
      lattice: true,
      competitors: false
    },
    {
      icon: Box,
      title: "Subscription Free 3-D Renderings",
      description: "High quality 3D renders and design concepts without being charged extra, ever!",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: Zap,
      title: <><span style={{
        background: 'linear-gradient(135deg, #0066FF 0%, #1b2e9e 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>LatticeAI</span> <span style={{
        background: 'linear-gradient(135deg, #16a34a 0%, #166534 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>CRM</span></>,
      description: "Ultra-efficient CRM, design tools, and a complimentary website in one unified system.",
      lattice: true,
      competitors: false
    },
    {
      icon: Award,
      title: "Industry-Leading Guarantees",
      description: "Our trifecta; the price-beat, money-back and fast-service guarantees.",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: TrendingUp,
      title: <><span style={{
        background: 'linear-gradient(135deg, #0066FF 0%, #1b2e9e 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>LatticeAI</span> <span style={{
        background: 'linear-gradient(135deg, #ea580c 0%, #7f1d1d 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>Web Suite</span></>,
      description: "Demolish the competition with industry-leading AI web and marketing services.",
      lattice: true,
      competitors: "partial"
    },
    {
      icon: Shield,
      title: <><span style={{
        background: 'linear-gradient(135deg, #0066FF 0%, #1b2e9e 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>LatticeAI</span> <span style={{
        background: 'linear-gradient(135deg, #9333ea 0%, #581c87 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>Visualizer</span></>,
      description: "Unlimited photorealistic before-and-after renders with your preferred materials.",
      lattice: true,
      competitors: false
    },
    {
      icon: Globe,
      title: "Watermark-Free Digital Showroom",
      description: "Custom-built interactive project showcase, completely free of our branding.",
      lattice: true,
      competitors: false
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
      <div className="p-5">
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
                The remodeling industry was built on a fractured foundation. We engineered a stronger, smarter one. The cube symbolizes this new, unshakeable industry standard, a solid block of innovation that you can only find here.
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
                Technically, the cube icon highlights a proprietary Lattice innovation. It signifies an exclusive, data-driven tool or methodology that sets a new, unmatched performance benchmark, delivering a quantifiable advantage to your business.
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
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                          Partial; competitors may have fewer features or less support.
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
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                          Partial; competitors may have fewer features or less support.
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
              The intersection of innovation, reliability, and results, that&apos;s where you&apos;ll find Lattice
            </p>
          </div>

          {/* Interactive Comparison Module */}
          <InteractiveComparisonModule />

          {/* Comparison Chart Section */}
          <div className="text-center mt-16 mb-4">
            <h2 className="text-5xl tracking-tighter font-medium mb-4" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.8)' }}>
              There&apos;s No Point in Comparing
            </h2>
            <p className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', color: 'rgba(0, 0, 0, 0.75)' }}>
              The numbers speak for themselves, Lattice outperforms on every metric
            </p>
          </div>

          {/* Comparison Bar Chart - Bi-directional between Wevisu and Lattice */}
          <ComparisonChart />
        </div>
      </div>

      <Footer />
      </main>
    </>
  )
}

export default ComparisonPage
