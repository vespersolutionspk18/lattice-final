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
    <div className="p-5 mt-24">
      <div
        className="flex flex-row rounded-2xl justify-between relative overflow-hidden"
        style={{
          height: height,
          ...(backgroundStyle || defaultBackgroundStyle)
        }}
      >
        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 z-0 backdrop-blur-md" style={{ backgroundColor: `rgba(255, 255, 255, ${frostedGlassOpacity})` }}></div>

        {/* Left Content Section */}
        <div className={`${showForm ? 'w-1/2' : 'w-full'} h-full p-5 flex flex-col justify-center relative z-10`}>
          <div className={`p-5 flex flex-col gap-7 ${showForm ? 'items-start text-left' : 'items-center text-center'}`}>
            {/* AR/VR Announcement Banner or Pre-header */}
            {showARVRBanner && (
              <Link href="/services/ar-vr">
                <div className="inline-flex items-center gap-3 px-4 py-2 w-fit cursor-pointer hover:scale-105 transition-transform duration-200 border border-gray-300 rounded-full bg-gray-50">
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #3b82f6)',
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(59, 130, 246, 0.3)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    NEW
                  </span>
                  <span className="text-gray-900 text-sm font-medium tracking-tight flex items-center gap-2">
                    AR/VR capabilities now available for all interior and exterior renderings
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            )}

            {preHeader && !showARVRBanner && (
              <div className="inline-flex items-center gap-3 px-4 py-2 w-fit border border-gray-300 rounded-full bg-gray-50">
                <span className="text-gray-900 text-sm font-medium tracking-tight">
                  {preHeader}
                </span>
              </div>
            )}

            <h1 className="text-7xl tracking-tighter" style={{ color: headlineColor }}>
              {headline.split(', ').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < headline.split(', ').length - 1 && <>, <br /></>}
                </React.Fragment>
              ))}
            </h1>
            <h5 className="text-2xl tracking-tighter" style={{ color: subtitleColor }}>
              Your complete B2B solution for 3-D design, web management, <br></br>and remote employees to grow your remodeling business.
            </h5>
            <div className="flex flex-row gap-3">
              <Button variant="primary" customBackgroundColor={buttonColors?.learnMore}>Learn More</Button>
              <Button variant="green" customBackgroundColor={buttonColors?.contactUs}>Contact Us</Button>
            </div>

            {/* Rating Section */}
            {showCapterra && (
              <div className="flex items-center gap-3 mt-2 px-4 py-2 backdrop-blur-md bg-white/30 border-[1.5px] border-stone-300 rounded-full w-fit">
                <div className="flex items-center justify-center h-6 flex-shrink-0">
                  <Image
                    src="/capterra-icon.png"
                    alt="Capterra"
                    width={60}
                    height={14}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-900 text-base font-semibold">4.8 Rating (50+ Reviews)</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => {
                    if (i < 4) {
                      return (
                        <svg key={i} className="w-4 h-4 fill-orange-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      );
                    } else {
                      return (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24">
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
          <div className="w-1/2 h-full p-5 flex items-center justify-center relative z-10">
            <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl">
              <h2 className="text-3xl font-normal text-gray-900 mb-3 tracking-tight">
                Request a Professional Quote Today
              </h2>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                Get your personalized estimate in just a few clicks, it&apos;s fast, easy, and completely free
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                  required
                />

                <div className="mt-2">
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
