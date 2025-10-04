import React from 'react';
import { Users, Shield } from 'lucide-react';
import FlowingLinesGraphic from './FlowingLinesGraphic';
import Button from './Button';
import ThreeStepProcess from './ThreeStepProcess';

const PartnerHero = () => {
  return (
    <div className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-6xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          Your complete B2B solution for 3-D design, CRM, and remote employees to grow your remodeling business.
        </h1>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* For Agents & Brokers Card */}
          <div className="relative border border-gray-200 rounded-2xl p-8 bg-white overflow-hidden">
            {/* Icon in top-right */}
            <div className="absolute top-6 right-6">
              <Users className="w-12 h-12" style={{ color: '#e8ebf7' }} strokeWidth={1.5} />
            </div>

            {/* Card Content */}
            <div className="mb-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                For Agents & Brokers
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Generate more conversions and deliver better service.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Quote generation
                </span>
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Policy issuance
                </span>
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Renewals
                </span>
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Endorsements
                </span>
              </div>
            </div>

            {/* Flowing Lines Graphic */}
            <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
              <FlowingLinesGraphic flip={true} />
            </div>
          </div>

          {/* For Insurers & MGAs Card */}
          <div className="relative border border-gray-200 rounded-2xl p-8 bg-white overflow-hidden">
            {/* Icon in top-right */}
            <div className="absolute top-6 right-6">
              <Shield className="w-12 h-12" style={{ color: '#e8ebf7' }} strokeWidth={1.5} />
            </div>

            {/* Card Content */}
            <div className="mb-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                For Insurers & MGAs
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Scale your operations with automation and efficiency.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Claims
                </span>
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Underwriting
                </span>
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Risk assessment
                </span>
                <span className="px-4 py-2 border border-[#1b2e9e] rounded-full text-sm text-gray-700">
                  Compliance
                </span>
              </div>
            </div>

            {/* Flowing Lines Graphic */}
            <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
              <FlowingLinesGraphic />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Button variant="blue" customBackgroundColor="#1b2e9e" href="/contact">Get in touch</Button>
          <Button variant="primary" href="/contact">Book a call</Button>
        </div>
      </div>

      {/* Three-Step Process Component */}
      <ThreeStepProcess heading="Become a partner" />
    </div>
  );
};

export default PartnerHero;
