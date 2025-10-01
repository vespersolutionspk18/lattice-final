"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";
import FrostedGlass from "../components/FrostedGlass";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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

  return (
    <div className="p-5 mt-24">
      <div
        className="flex flex-row rounded-2xl justify-between h-[760px] relative overflow-hidden bg-[#4d4d4d]"
        id="bg here"
      >
        {/* Background placeholder */}
        <div className="absolute inset-x-0 bottom-0 p-4 text-center">
          <span className="text-gray-400 text-sm font-medium">BG IMAGE</span>
        </div>

        {/* Left Content Section */}
        <div className="w-1/2 h-full p-5 flex flex-col justify-center relative z-10">
          <div className="p-5 flex flex-col gap-7 items-start text-left">
            {/* AR/VR Announcement Banner */}
            <Link href="/services/ar-vr">
              <FrostedGlass rounded="full" blur="md" className="inline-flex items-center gap-3 px-4 py-2 w-fit cursor-pointer hover:scale-105 transition-transform duration-200">
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
                <span className="text-white text-sm font-medium tracking-tight flex items-center gap-2">
                  AR/VR capabilities now available for all interior and exterior renderings
                  <ArrowRight className="w-4 h-4" />
                </span>
              </FrostedGlass>
            </Link>

            <h1 className="text-7xl text-white tracking-tighter">
              Empowering Contractors <br></br>& Home Remodelers
            </h1>
            <h5 className="text-2xl text-stone-300 tracking-tighter">
              Your complete B2B solution for design, CRM, and digital <br></br>tools to grow your remodeling business.
            </h5>
            <div className="flex flex-row gap-3">
              <Button variant="secondary">Get Started</Button>
              <Button variant="green">Contact Us</Button>
            </div>
          </div>
        </div>

        {/* Right Contact Form Section */}
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
      </div>
    </div>
  );
};

export default Hero;
