"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMegaMenu } from "../contexts/MegaMenuContext";

const AnimatedMenuLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-100%' }
  };

  const textVariantsHover = {
    initial: { y: '100%' },
    hover: { y: 0 }
  };

  return (
    <Link
      href={href}
      className="text-gray-900 text-xl font-semibold whitespace-nowrap tracking-tight block relative h-7 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
    >
      <motion.span
        className="block"
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        variants={textVariants}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 block"
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        variants={textVariantsHover}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

interface ServiceMenuItem {
  title: string;
  categories: Record<string, string[]>;
  activeCategory: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface AboutMenuItem {
  title: string;
  leftItems: string[];
  image: string;
  buttonText: string;
  buttonLink: string;
}

type MenuItem = ServiceMenuItem | AboutMenuItem;

const MegaMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuWidth, setMenuWidth] = useState<number>(900);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { setIsOverlayActive } = useMegaMenu();

  const services = [
    { name: "Design & Plans", href: "/services/design-and-plans" },
    { name: "3D Rendering", href: "/services/3d-rendering" },
    { name: "CRM for Contractors", href: "/services/crm" },
    { name: "AI Designer", href: "/services/ai-designer" },
    { name: "Digital Showroom", href: "/services/digital-showroom" },
    { name: "Web Design & SEO", href: "/services/web-design-seo" }
  ];

  const menuItems: Record<string, MenuItem> = {
    "Services and Products": {
      title: "Our Services",
      categories: {},
      activeCategory: "",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      buttonText: "View All Services",
      buttonLink: "/services"
    } as ServiceMenuItem,
    "About": {
      title: "About Us",
      leftItems: ["Our Mission", "Comparison"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      buttonText: "Learn More",
      buttonLink: "/about"
    } as AboutMenuItem,
  };

  const simpleLinks = ["Pricing", "Careers", "Contact Us"];

  useEffect(() => {
    if (activeDropdown) {
      // Calculate width based on current content
      setTimeout(() => {
        if (contentRef.current) {
          const textContent = contentRef.current.querySelector('.opacity-100');
          if (textContent) {
            const contentWidth = textContent.scrollWidth;
            // Width = left padding (64px) + content + margin (60px) + image (340px) + right padding (12px)
            const totalWidth = 64 + contentWidth + 150 + 340 + 60;
            setMenuWidth(Math.max(1600, totalWidth)); 
          }
        }
      }, 10);
    }
  }, [activeDropdown]);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Small delay to allow moving between button and dropdown
  };

  useEffect(() => {
    // Update overlay state when dropdown changes
    const shouldShowOverlay = activeDropdown === "Services";
    setIsOverlayActive(shouldShowOverlay);
  }, [activeDropdown, setIsOverlayActive]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-2 whitespace-nowrap">
      <Link
        href="/home"
        className="px-5 py-2 text-lg text-black hover:text-[#3b82f6] transition-all duration-200 rounded-full hover:bg-white/50 whitespace-nowrap"
        style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
      >
        Home
      </Link>
      {Object.entries(menuItems).map(([key, value]) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <button className="px-5 py-2 text-lg text-black hover:text-[#3b82f6] transition-all duration-200 rounded-full hover:bg-white/50 flex items-center gap-1 whitespace-nowrap" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
            {key}
            <ChevronDown className="w-4 h-4" />
          </button>

          <div
            className={`fixed top-20 left-1/2 transition-all duration-300 z-50 ${
              activeDropdown === key
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
            style={{ 
              transform: activeDropdown === key 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-12px)',
              WebkitTransform: activeDropdown === key 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-12px)'
            }}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-3 pl-16 pr-3 flex items-center transition-all duration-300 ease-in-out" style={{ width: `${menuWidth}px`, height: '360px' }}>
              <div ref={contentRef} className="flex items-center justify-center h-full" style={{ marginRight: "60px" }}>
                {key === "Services and Products" ? (
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>{value.title}</h3>
                    <div className="flex gap-x-12">
                      <div className="flex flex-col">
                        {services.slice(0, 3).map((service, index) => (
                          <AnimatedMenuLink
                            key={index}
                            href={service.href}
                          >
                            {service.name}
                          </AnimatedMenuLink>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        {services.slice(3).map((service, index) => (
                          <AnimatedMenuLink
                            key={index}
                            href={service.href}
                          >
                            {service.name}
                          </AnimatedMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : key === "About" && 'leftItems' in value ? (
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-gray-900 mb-6" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>{value.title}</h3>
                    <div className="flex flex-col">
                      {value.leftItems.map((item, index) => (
                        <AnimatedMenuLink
                          key={index}
                          href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item}
                        </AnimatedMenuLink>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="w-[340px] h-[340px] flex-shrink-0 ml-auto">
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 w-full h-full flex flex-col">
                  <div className="relative flex-1">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Link href={value.buttonLink}>
                      <Button size="md" className="bg-black text-white hover:bg-gray-900">
                        {value.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {simpleLinks.map((link) => (
        <Link
          key={link}
          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-5 py-2 text-lg text-black hover:text-[#3b82f6] transition-all duration-200 rounded-full hover:bg-white/50 whitespace-nowrap"
          style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
};

export default MegaMenu;