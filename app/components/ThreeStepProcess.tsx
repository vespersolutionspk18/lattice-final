'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ThreeStepProcessProps {
  heading?: string;
  steps?: ProcessStep[];
}

const ThreeStepProcess: React.FC<ThreeStepProcessProps> = ({
  heading = "Become a partner",
  steps = [
    {
      number: "01",
      title: "Apply",
      description: "Submit your application through our streamlined online form. Tell us about your business and how we can grow together."
    },
    {
      number: "02",
      title: "Qualify",
      description: "Our team reviews your application and sets up a consultation call to discuss partnership opportunities and alignment."
    },
    {
      number: "03",
      title: "Launch",
      description: "Get onboarded with full access to our platform, dedicated support, and resources to start serving your clients immediately."
    }
  ]
}) => {
  return (
    <div className="w-full pt-32 pb-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Primary Heading */}
        <h2 className="text-6xl md:text-7xl font-bold text-center text-gray-900 mb-20 tracking-tight">
          {heading}
        </h2>

        {/* Three Column Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8 flex flex-col items-center text-center">
                {/* Numbered Circle */}
                <div className="w-12 h-12 rounded-lg bg-[#1b2e9e]/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-semibold text-[#1b2e9e]">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-black mb-4 leading-tight tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base tracking-tight">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeStepProcess;
