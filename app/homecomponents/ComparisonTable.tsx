"use client";
import React from "react";
import { Check, X, Zap, Shield, Palette, TrendingUp, Users, Globe } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  lattice: boolean | "partial";
  competitors: boolean | "partial";
}

const ComparisonTable = () => {
  const features: Feature[] = [
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
    <div className="p-3 sm:p-5">
      <div className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col gap-8 sm:gap-12 md:gap-16 tracking-tighter">
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] bg-gray-50 border-b border-gray-200">
            <div className="p-4 sm:p-6 md:p-8"></div>
            <div className="p-4 sm:p-6 md:p-8 text-center border-l border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3b82f6] tracking-tight">Lattice</h3>
            </div>
            <div className="p-4 sm:p-6 md:p-8 text-center border-l border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 tracking-tight">Others</h3>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] ${
                  index !== features.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Feature Info Column */}
                <div className="p-4 sm:p-6 md:p-8 flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#3b82f6]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 tracking-tight hidden sm:block" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Lattice Status Column */}
                <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center border-l border-gray-200 bg-[#3b82f6]/5">
                  {feature.lattice === true && (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-highlighter-green flex items-center justify-center">
                      <Check className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white stroke-[3]" />
                    </div>
                  )}
                  {feature.lattice === "partial" && (
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-600">Partial</span>
                  )}
                  {feature.lattice === false && (
                    <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-gray-400" />
                  )}
                </div>

                {/* Competitors Status Column */}
                <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center border-l border-gray-200">
                  {feature.competitors === true && (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-highlighter-green flex items-center justify-center">
                      <Check className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white stroke-[3]" />
                    </div>
                  )}
                  {feature.competitors === "partial" && (
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-600">Partial</span>
                  )}
                  {feature.competitors === false && (
                    <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-gray-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
