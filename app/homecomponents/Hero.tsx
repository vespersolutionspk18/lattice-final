"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import FrostedGlass from "../components/FrostedGlass";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  preHeader?: string;
  headline?: string;
  subtitle?: string;
  backgroundStyle?: React.CSSProperties;
  height?: string;
  showARVRBanner?: boolean;
  showForm?: boolean;
  showCapterra?: boolean;
  buttonColors?: {
    learnMore?: string;
    contactUs?: string;
  };
  headlineColor?: string;
  subtitleColor?: string;
  frostedGlassOpacity?: number;
}

const Hero = ({
  preHeader,
  headline = "Home Remodeling for Home Remodelers, Revolutionized",
  subtitle = "Your complete B2B solution for design, CRM, and digital tools to grow your remodeling business.",
  backgroundStyle,
  height = "760px",
  showARVRBanner = true,
  showForm = true,
  showCapterra = true,
  buttonColors,
  headlineColor = '#111827',
  subtitleColor = '#000000',
  frostedGlassOpacity = 0.6
}: HeroProps = {}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const defaultBackgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="p-3 sm:p-5 mt-16 sm:mt-20 md:mt-24">
      <div
        className="flex flex-col lg:flex-row rounded-xl sm:rounded-2xl justify-between relative overflow-hidden min-h-[500px] sm:min-h-[600px]"
        style={{
          height: showForm ? 'auto' : height,
          ...(backgroundStyle || defaultBackgroundStyle)
        }}
      >
        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 z-0 backdrop-blur-md" style={{ backgroundColor: `rgba(255, 255, 255, ${frostedGlassOpacity})` }}></div>

        {/* Left Content Section */}
        <div className={`${showForm ? 'w-full lg:w-1/2' : 'w-full'} h-full p-4 sm:p-5 md:p-6 lg:p-5 flex flex-col justify-center relative z-10`}>
          <div className={`p-2 sm:p-4 md:p-5 flex flex-col gap-4 sm:gap-5 md:gap-7 ${showForm ? 'items-start text-left' : 'items-center text-center'}`}>
            {/* AR/VR Announcement Banner or Pre-header */}
            {showARVRBanner && (
              <Link href="/services/ar-vr">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 w-fit cursor-pointer hover:scale-105 transition-transform duration-200 border border-gray-300 rounded-full bg-gray-50">
                  <span
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-xs font-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #3b82f6)',
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(59, 130, 246, 0.3)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    NEW
                  </span>
                  <span className="text-gray-900 text-xs sm:text-sm font-medium tracking-tight flex items-center gap-1 sm:gap-2">
                    <span className="hidden sm:inline">AR/VR capabilities now available for all interior and exterior renderings</span>
                    <span className="sm:hidden">AR/VR now available</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </div>
              </Link>
            )}

            {preHeader && !showARVRBanner && (
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 w-fit border border-gray-300 rounded-full bg-gray-50">
                <span className="text-gray-900 text-xs sm:text-sm font-medium tracking-tight">
                  {preHeader}
                </span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter" style={{ color: headlineColor }}>
              {headline.split(', ').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < headline.split(', ').length - 1 && <>, <br /></>}
                </React.Fragment>
              ))}
            </h1>
            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter leading-relaxed" style={{ color: subtitleColor }}>
              Your complete B2B solution for 3-D design, web management, <br className="hidden sm:inline"></br>and remote employees to grow your remodeling business.
            </h5>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button variant="primary" customBackgroundColor={buttonColors?.learnMore} className="w-full sm:w-auto">Learn More</Button>
              <Button variant="green" customBackgroundColor={buttonColors?.contactUs} className="w-full sm:w-auto">Contact Us</Button>
            </div>

            {/* Rating Section */}
            {showCapterra && (
              <div className="flex items-center gap-2 sm:gap-3 mt-2 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md bg-white/30 border-[1.5px] border-stone-300 rounded-full w-fit">
                <div className="flex items-center justify-center h-5 sm:h-6 flex-shrink-0">
                  <Image
                    src="/capterra-icon.png"
                    alt="Capterra"
                    width={50}
                    height={12}
                    className="object-contain sm:w-[60px] sm:h-[14px]"
                  />
                </div>
                <span className="text-gray-900 text-sm sm:text-base font-semibold">4.8 Rating (50+ Reviews)</span>
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => {
                    if (i < 4) {
                      return (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      );
                    } else {
                      return (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24">
                          <defs>
                            <linearGradient id="partialFill">
                              <stop offset="80%" stopColor="#fb923c" />
                              <stop offset="80%" stopColor="#d1d5db" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#partialFill)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Contact Form Section */}
        {showForm && (
          <div className="w-full lg:w-1/2 h-full p-4 sm:p-5 md:p-6 lg:p-5 flex items-center justify-center relative z-10">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-2 sm:mb-3 tracking-tight">
                Request a Professional Quote Today
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Get your personalized estimate in just a few clicks, it&apos;s fast, easy, and completely free
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400 resize-none text-sm sm:text-base"
                  required
                />

                <div className="mt-1 sm:mt-2">
                  <Button type="submit" variant="blue" className="w-full">
                    Get an Estimate
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
