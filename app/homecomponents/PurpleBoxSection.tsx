"use client";
import React, { useState } from "react";
import { FileText, Clock } from "lucide-react";
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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      {/* White Section */}
      <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[67px] items-center">
          {/* Left Column - Content Section */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3b82f6] flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                Streamlined, organized operations
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Eliminate double data entry and spreadsheets
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Save 30+ minutes per move and prepare to scale by cutting manual steps across sales, scheduling, dispatch, payroll, and accounting.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7 mt-3 sm:mt-[11px]">
              {/* Back Office Feature */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Back Office
                </h3>
                <p className="text-gray-600 leading-tight text-base sm:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Simplify job close-out, accounting, and payroll -- while gaining real-time insights.
                </p>
              </div>

              {/* Job Schedule Feature */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Job Schedule
                </h3>
                <p className="text-gray-600 leading-tight text-base sm:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Schedule jobs, track capacity in real-time, and easily handles any dispatch scenario.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn(true)}
                onHoverEnd={() => setIsHoveredLearn(false)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer w-full sm:w-auto"
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
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer w-full sm:w-auto"
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
                    Schedule A Demo
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Schedule A Demo
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Column - Visuals Section */}
          <div className="relative pr-0 lg:pr-12 flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Application UI Screenshot Placeholder */}
              <div className="w-full lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[336px] bg-gray-200 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <p className="text-gray-500 text-sm sm:text-base font-medium">Main UI Screenshot</p>
              </div>

              {/* Revenue Widget - Bottom Right overlapping */}
              <div className="absolute bottom-0 -right-4 sm:-right-8 lg:-right-20 h-[120px] sm:h-[150px] w-[200px] sm:w-[250px] bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <p className="text-gray-500 text-xs sm:text-sm font-medium">Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Inverted */}
      <div className="rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 bg-white mt-6 sm:mt-8 md:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[67px] items-center">
          {/* Left Column - Visuals Section */}
          <div className="relative pl-0 lg:pl-12 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Application UI Screenshot Placeholder */}
              <div className="w-full lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[336px] bg-gray-200 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <p className="text-gray-500 text-sm sm:text-base font-medium">Main UI Screenshot</p>
              </div>

              {/* Mobile Placeholder - Behind revenue, above main UI */}
              <div className="absolute top-4 sm:top-8 -left-8 sm:-left-12 lg:-left-16 h-[200px] sm:h-[240px] lg:h-[280px] w-[120px] sm:w-[140px] lg:w-[160px] bg-white border-2 border-gray-300 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg z-0">
                <p className="text-gray-500 text-xs font-medium">Mobile</p>
              </div>

              {/* Revenue Widget - Bottom Right overlapping */}
              <div className="absolute bottom-0 -left-4 sm:-left-8 lg:-left-20 h-[120px] sm:h-[150px] w-[200px] sm:w-[250px] bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg z-10">
                <p className="text-gray-500 text-xs sm:text-sm font-medium">Revenue</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3b82f6] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                Streamlined, organized operations
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Eliminate double data entry and spreadsheets
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Save 30+ minutes per move and prepare to scale by cutting manual steps across sales, scheduling, dispatch, payroll, and accounting.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7 mt-3 sm:mt-[11px]">
              {/* Back Office Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Back Office
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Simplify job close-out, accounting, and payroll -- while gaining real-time insights.
                </p>
              </div>

              {/* Job Schedule Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Job Schedule
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Schedule jobs, track capacity in real-time, and easily handles any dispatch scenario.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn2(true)}
                onHoverEnd={() => setIsHoveredLearn2(false)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer w-full sm:w-auto"
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
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer w-full sm:w-auto"
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
                    Schedule A Demo
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Schedule A Demo
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