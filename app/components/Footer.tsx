'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from './Button'
import LogoTestInverted from './LogoTestInverted'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const router = useRouter();
  return (
    <div className="p-5">
        <div className="bg-black/98 tracking-tighter text-white px-16 pt-16 pb-4 rounded-3xl flex flex-col gap-10">
        <div className="w-full flex flex-row gap-10 justify-between">
            <div className="flex flex-col gap-7 w-[40%]">
                <h5 className="text-4xl w-[60%]">Ready to Scale Your Business?</h5>
                <Button variant="secondary" className="w-fit" onClick={() => router.push('/contact')}>Start A Project</Button>
            </div>
            <div className="flex flex-col gap-3 w-[20%]">
            <h5 className="text-2xl text-white">
                Navigation
            </h5>
            <ul className="text-xl text-white/85 font-light">
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/')}>Home</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/about')}>About</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services')}>Services</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/portfolio')}>Portfolio</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/careers')}>Careers</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/contact')}>Contact</li>
            </ul>
            </div>
            <div className="flex flex-col gap-3 w-[20%]">
            <h5 className="text-2xl text-white">
                Services
            </h5>
            <ul className="text-xl text-white/85 font-light">
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services/design-and-plans')}>Design & Plans</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services/3d-rendering')}>3D Rendering</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services/crm')}>CRM for Contractors</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services/ai-designer')}>AI Designer</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services/digital-showroom')}>Digital Showroom</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => router.push('/services/web-design-seo')}>Web Design & SEO</li>
            </ul>
            </div>
            <div className="flex flex-col gap-3 w-[20%]">
            <h5 className="text-2xl text-white" id="info's here">
               Get In Touch
            </h5>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <Phone className="!text-white group-hover:!text-black transition-colors duration-150" size={18} />
                    <span className="text-xl font-light !text-white/85 group-hover:!text-black transition-colors duration-150 w-[80%]">1-800-LATTICE</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <Mail className="!text-white group-hover:!text-black transition-colors duration-150" size={18} />
                    <span className="text-xl font-light !text-white/85 group-hover:!text-black transition-colors duration-150 w-[80%]">sales@lattice.com</span>
                </div>
                <div className="flex gap-3 group cursor-pointer">
                    <MapPin className="!text-white group-hover:!text-black transition-colors duration-150" size={18} />
                    <span className="text-xl font-light !text-white/85 group-hover:!text-black transition-colors duration-150 w-[80%]">Richmond, Virginia • Nationwide Service</span>
                </div>

            </div>
            </div>

        </div>
        <h5 
            className="text-white tracking-tighter mt-5" 
            style={{ 
                fontSize: '10vw',
                lineHeight: '1',
                whiteSpace: 'nowrap'
            }}
        >
            Crafting Since 2010
        </h5>
        <div className="flex flex-row justify-between items-center py-4 border-t border-white/20" id="here">
            <div className="flex items-center gap-3">
                <LogoTestInverted />
                <span className="text-white text-xl font-medium tracking-tight">Lattice.</span>
                <span className="text-white/50 text-sm ml-4">© Lattice Ltd 2025</span>
                <span className="text-white/30 text-sm">|</span>
                <span className="text-white/50 text-sm">Company Reg Number 10529058</span>
            </div>
            <div className="flex items-center gap-4 text-white/50 text-sm">
                <a href="#" className="hover:text-white transition-colors">B2B Solutions</a>
                <span className="text-white/30">|</span>
                <a href="#" className="hover:text-white transition-colors">All Rights Reserved</a>
                <span className="text-white/30">|</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy </a>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
