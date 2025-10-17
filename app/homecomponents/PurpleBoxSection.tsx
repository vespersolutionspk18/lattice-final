"use client";
import React, { useState } from "react";
import { FileText, Clock, Users, DollarSign, Database, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const PurpleBoxSection = () => {
  const [isHoveredLearn, setIsHoveredLearn] = useState(false);
  const [isHoveredDemo, setIsHoveredDemo] = useState(false);
  const [isHoveredLearn2, setIsHoveredLearn2] = useState(false);
  const [isHoveredDemo2, setIsHoveredDemo2] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-150%' }
  };

  const textVariantsHover = {
    initial: { y: '150%' },
    hover: { y: 0 }
  };

  return (
    <div className="p-4 md:p-10">
      {/* White Section */}
      <div className="rounded-2xl md:rounded-4xl p-6 md:p-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[67px] items-center">
          {/* Left Column - Content Section */}
          <div className="flex flex-col gap-4 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <span className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                Virtual Design and Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Exterior and Interior 3-D Renderings<br />Without the Subscription Headache
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Get access to the highest quality 3-D renderings and dedicated remote designers, architects and planners who work exclusively under your brand.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-3 md:mt-[11px]">
              {/* Your Virtual Staff Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Your Virtual Staff
                </h3>
                <p className="text-gray-600 leading-tight text-base md:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Working exclusively under your brand throughout the project duration, delivering a seamless experience for your clients.
                </p>
              </div>

              {/* One Simple Price Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  One Simple Price
                </h3>
                <p className="text-gray-600 leading-tight text-base md:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  No additional fees, no hassle. Just pure dedication to your project, your client, and you.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn(true)}
                onHoverEnd={() => setIsHoveredLearn(false)}
                className="px-8 py-3 bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Learn More
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Learn More
                  </motion.span>
                </div>
              </motion.button>
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredDemo(true)}
                onHoverEnd={() => setIsHoveredDemo(false)}
                className="px-8 py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Get a Demo
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Get a Demo
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Column - Visuals Section */}
          <div className="relative pr-12 flex justify-end">
            <div className="relative">
              {/* Main Application UI Screenshot */}
              <div className="w-[500px] h-[336px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-black">
                <img
                  src="/assets/meeting.png"
                  alt="Video Meeting Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Placeholder - Behind revenue, above main UI */}
              <div className="absolute top-8 -right-16 h-[280px] w-[160px] bg-white border border-black rounded-2xl overflow-hidden shadow-lg z-0">
                <img
                  src="/assets/cad1.png"
                  alt="Floor Plan Design"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CAD Widget - Bottom Right overlapping */}
              <div className="absolute bottom-0 -right-20 h-[150px] w-[250px] bg-white border border-black rounded-xl overflow-hidden shadow-lg z-10">
                <img
                  src="/assets/cad2.png"
                  alt="3D Design View"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Inverted */}
      <div className="rounded-2xl md:rounded-4xl p-6 md:p-12 bg-white mt-6 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[67px] items-center">
          {/* Left Column - Visuals Section */}
          <div className="relative pl-12 flex justify-start">
            <div className="relative">
              {/* Main Application UI Screenshot */}
              <div className="w-[500px] h-[336px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-black">
                <img
                  src="/assets/magicai.png"
                  alt="AI Designer Interface"
                  className="w-full h-full object-cover object-left"
                />
              </div>

              {/* Revenue Widget - Bottom Left overlapping */}
              <div className="absolute bottom-0 -left-20 h-[224px] w-[373px] bg-white border border-black rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/assets/showroom.png"
                  alt="Digital Showroom Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="flex flex-col gap-4 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                Web Services and Scalable Marketing
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Powered by <span style={{
                background: 'linear-gradient(135deg, #0066FF 0%, #1b2e9e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>LatticeAI</span>,<br />Built to Integrate Seamlessly with Your Digital Infrastructure
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Scale your client base by leveraging cutting-edge technology and redefining how you market your services through intelligent, AI-driven strategies.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-3 md:mt-[11px]">
              {/* LatticeAI CRM Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  <span style={{
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
                  }}>CRM</span>
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Get more efficient and automate your work, while gaining real-time insights.
                </p>
              </div>

              {/* LatticeAI Web Suite Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  <span style={{
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
                  }}>Web Suite</span>
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Automated marketing, interactive website, and AI-based tools all in one place.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn2(true)}
                onHoverEnd={() => setIsHoveredLearn2(false)}
                className="px-8 py-3 bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn2 ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Learn More
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Learn More
                  </motion.span>
                </div>
              </motion.button>
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredDemo2(true)}
                onHoverEnd={() => setIsHoveredDemo2(false)}
                className="px-8 py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Get a Demo
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Get a Demo
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurpleBoxSection;