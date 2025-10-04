'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import LogoTestInverted from './LogoTestInverted'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

interface FooterProps {
  backgroundColor?: string;
}

const Footer = ({ backgroundColor = '#3b82f6' }: FooterProps) => {
  const router = useRouter();
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  return (
    <div className="p-3 sm:p-5">
        <div className="tracking-tighter text-white px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 pb-4 rounded-2xl sm:rounded-3xl flex flex-col gap-6 sm:gap-8 md:gap-10" style={{ backgroundColor }}>
        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-7 w-full lg:w-[40%]">
                <h5 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-[80%]">Ready to Scale Your Business?</h5>
                <div className="relative w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 px-4 sm:px-6 py-3 sm:py-4 pr-14 sm:pr-16 rounded-full border border-white/20 focus:outline-none focus:border-white/40 transition-all text-base sm:text-lg"
                    />
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-white/90 text-black p-2 sm:p-3 rounded-full transition-all"
                        onClick={() => router.push('/contact')}
                        onMouseEnter={() => setIsArrowHovered(true)}
                        onMouseLeave={() => setIsArrowHovered(false)}
                    >
                        <ArrowUpRight
                            size={20}
                            className="sm:w-6 sm:h-6"
                            style={{
                                transform: isArrowHovered ? 'scaleY(-1)' : 'scaleY(1)',
                                transition: 'transform 0.3s ease-in-out'
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Navigation Links Grid */}
            <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white">
                Navigation
            </h5>
            <ul className="text-base sm:text-lg md:text-xl text-white font-normal">
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/')}>Home</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/about')}>About</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services')}>Services</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/portfolio')}>Portfolio</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/careers')}>Careers</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/contact')}>Contact</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white">
                Services
            </h5>
            <ul className="text-base sm:text-lg md:text-xl text-white font-normal">
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/design-and-plans')}>Design & Plans</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/3d-rendering')}>3D Rendering</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/crm')}>CRM for Contractors</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/ai-designer')}>AI Designer</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/digital-showroom')}>Digital Showroom</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/web-design-seo')}>Web Design & SEO</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white" id="info's here">
               Get In Touch
            </h5>
            <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                    <Phone className="!text-white group-hover:!text-black transition-colors duration-150 flex-shrink-0" size={18} />
                    <span className="text-base sm:text-lg md:text-xl font-normal !text-white group-hover:!text-black transition-colors duration-150">1-800-LATTICE</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                    <Mail className="!text-white group-hover:!text-black transition-colors duration-150 flex-shrink-0" size={18} />
                    <span className="text-base sm:text-lg md:text-xl font-normal !text-white group-hover:!text-black transition-colors duration-150">sales@lattice.com</span>
                </div>
                <div className="flex gap-2 sm:gap-3 group cursor-pointer">
                    <MapPin className="!text-white group-hover:!text-black transition-colors duration-150 flex-shrink-0 mt-1" size={18} />
                    <span className="text-base sm:text-lg md:text-xl font-normal !text-white group-hover:!text-black transition-colors duration-150">Richmond, Virginia • Nationwide Service</span>
                </div>

            </div>
            </div>
            </div>
            {/* End Navigation Links Grid */}

        </div>
        <h5
            className="text-white tracking-tighter mt-3 sm:mt-5 text-center sm:text-left"
            style={{
                fontSize: 'clamp(2rem, 10vw, 10vw)',
                lineHeight: '1',
                whiteSpace: 'normal'
            }}
        >
            Crafting Since 2010
        </h5>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-4 border-t border-white/20" id="here">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <LogoTestInverted />
                <span className="text-white text-lg sm:text-xl font-medium tracking-tight">Lattice.</span>
                <span className="text-white/80 text-xs sm:text-sm ml-0 sm:ml-4">© Lattice Ltd 2025</span>
                <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">|</span>
                <span className="text-white/80 text-xs sm:text-sm">Company Reg Number 10529058</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                <a href="#" className="hover:text-white transition-colors">B2B Solutions</a>
                <span className="text-white/60 hidden sm:inline">|</span>
                <a href="#" className="hover:text-white transition-colors">All Rights Reserved</a>
                <span className="text-white/60 hidden sm:inline">|</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy </a>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
