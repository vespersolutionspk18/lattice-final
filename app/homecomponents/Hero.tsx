"use client";
import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import FrostedGlass from "../components/FrostedGlass";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="p-5 mt-24">
      <div
        className="flex flex-col rounded-2xl justify-between h-[760px] relative overflow-hidden bg-[#4d4d4d]"
        id="bg here"
      >
        {/* Background placeholder */}
        <div className="absolute inset-x-0 bottom-0 p-4 text-center">
          <span className="text-gray-400 text-sm font-medium">BG IMAGE</span>
        </div>

        {/* Content goes here - it will appear on top of the video */}
        <div className="w-full h-full p-5 flex flex-col justify-center items-center relative z-10">
          <div className="p-5 flex flex-col gap-7 items-center text-center">
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


      </div>

    </div>
  );
};

export default Hero;
