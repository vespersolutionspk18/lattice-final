"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Box,
  Sparkles,
  Ruler,
  MonitorPlay,
  Globe,
  ChevronRight,
} from "lucide-react";

const OurServices = () => {
  const [isHoveredServices, setIsHoveredServices] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-150%' }
  };

  const textVariantsHover = {
    initial: { y: '150%' },
    hover: { y: 0 }
  };

  const services = [
    {
      title: "Real Estate CRM",
      icon: LayoutDashboard,
      href: "/services/crm",
    },
    {
      title: "3D Rendering",
      icon: Box,
      href: "/services/3d-rendering",
    },
    {
      title: "AI Designer",
      icon: Sparkles,
      href: "/services/ai-designer",
    },
    {
      title: "Design & Plans",
      icon: Ruler,
      href: "/services/design-and-plans",
    },
    {
      title: "Digital Showroom",
      icon: MonitorPlay,
      href: "/services/digital-showroom",
    },
    {
      title: "Web Design & SEO",
      icon: Globe,
      href: "/services/web-design-seo",
    },
  ];

  return (
    <div className="py-16 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          Browse by Service
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#3b82f6] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon with gradient */}
                <div className="mb-4">
                  <Icon
                    className="w-12 h-12 stroke-[1.5]"
                    style={{
                      stroke: "url(#blue-cyan-gradient)",
                    }}
                  />
                </div>

                {/* Label */}
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                    {service.title}
                  </p>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-center">
          {/* Primary CTA Button */}
          <motion.button
            onClick={() => window.location.href = '/services'}
            initial={{ borderRadius: 40 }}
            whileHover={{ borderRadius: 12 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            onHoverStart={() => setIsHoveredServices(true)}
            onHoverEnd={() => setIsHoveredServices(false)}
            className="px-6 py-3 bg-[#3b82f6] text-white font-semibold hover:bg-[#3b82f6]/90 inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
          >
            <div className="relative inline-flex items-center">
              <motion.span
                className="inline-flex items-center"
                initial="initial"
                animate={isHoveredServices ? 'hover' : 'initial'}
                variants={textVariants}
                transition={{ duration: 0.12, ease: 'easeInOut' }}
              >
                Our Services
              </motion.span>
              <motion.span
                className="absolute inset-0 inline-flex items-center"
                initial="initial"
                animate={isHoveredServices ? 'hover' : 'initial'}
                variants={textVariantsHover}
                transition={{ duration: 0.18, ease: 'easeInOut' }}
              >
                Our Services
              </motion.span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="blue-cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#6ce2ff", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default OurServices;
