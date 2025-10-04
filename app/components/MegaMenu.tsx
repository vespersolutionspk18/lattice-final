"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Palette, Box, Database, Sparkles, Monitor, Globe, Target, Users, Info } from "lucide-react";
import { useMegaMenu } from "../contexts/MegaMenuContext";

const MegaMenuCard = ({
  href,
  icon: Icon,
  title,
  description,
  isNew,
  hoverColor = '#3b82f6'
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  isNew?: boolean;
  hoverColor?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the href contains a hash
    if (href.includes('#')) {
      const [path, hash] = href.split('#');

      // If we're navigating to a different page with a hash
      if (path && pathname !== path) {
        e.preventDefault();
        router.push(path);
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" style={{ color: hoverColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'var(--font-figtree)' }}>
            {title}
          </h4>
          {isNew && (
            <span className="px-2 py-0.5 text-xs font-medium text-white rounded-full" style={{ backgroundColor: hoverColor }}>
              New
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-figtree)' }}>
          {description}
        </p>
      </div>
      <ArrowRight
        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-all duration-200 ${
          isHovered ? 'translate-x-1' : ''
        }`}
        style={isHovered ? { color: hoverColor } : {}}
      />
    </Link>
  );
};

interface MenuItem {
  title: string;
}

interface MegaMenuProps {
  hoverColor?: string;
}

const MegaMenu = ({ hoverColor = '#3b82f6' }: MegaMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { setIsOverlayActive } = useMegaMenu();

  const services = [
    {
      name: "Design & Plans",
      href: "/services/design-and-plans",
      icon: Palette,
      description: "Professional design services and detailed construction plans."
    },
    {
      name: "3D Rendering",
      href: "/services/3d-rendering",
      icon: Box,
      description: "Stunning 3D visualizations for your projects."
    },
    {
      name: "CRM for Contractors",
      href: "/services/crm",
      icon: Database,
      description: "Streamline your business operations and client management."
    },
    {
      name: "AI Designer",
      href: "/services/ai-designer",
      icon: Sparkles,
      description: "AI-powered design tools and intelligent user experience.",
      isNew: true
    },
    {
      name: "Digital Showroom",
      href: "/services/digital-showroom",
      icon: Monitor,
      description: "Showcase your work with interactive digital experiences."
    },
    {
      name: "Web Design & SEO",
      href: "/services/web-design-seo",
      icon: Globe,
      description: "Modern websites with search engine optimization."
    }
  ];

  const aboutItems = [
    {
      name: "About Us",
      href: "/about",
      icon: Info,
      description: "Discover who we are and what we do."
    },
    {
      name: "Our Mission",
      href: "/about/our-mission",
      icon: Target,
      description: "Learn about our vision and values."
    },
    {
      name: "Comparison",
      href: "/comparison",
      icon: Users,
      description: "See how we compare to the competition."
    }
  ];

  const menuItems: Record<string, MenuItem> = {
    "Services and Products": {
      title: "Our Services"
    },
    "About": {
      title: "About Us"
    }
  };

  const simpleLinks = ["Pricing", "Careers", "Contact"];


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
        href="/"
        className="px-5 py-2 text-lg text-black transition-all duration-200 rounded-full hover:bg-white/50 whitespace-nowrap"
        style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
        onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
        onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
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
          <button
            className="px-5 py-2 text-lg text-black transition-all duration-200 rounded-full hover:bg-white/50 flex items-center gap-1 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
            onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
          >
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
            <div className="bg-white rounded-3xl shadow-2xl p-6 transition-all duration-300 ease-in-out" style={{ width: 'auto', minWidth: '850px', maxWidth: '1000px' }}>
              <div ref={contentRef} className="w-full">
                {key === "Services and Products" ? (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 px-4" style={{ fontFamily: 'var(--font-figtree)' }}>
                      {value.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service, index) => (
                        <MegaMenuCard
                          key={index}
                          href={service.href}
                          icon={service.icon}
                          title={service.name}
                          description={service.description}
                          isNew={service.isNew}
                          hoverColor={hoverColor}
                        />
                      ))}
                    </div>
                  </div>
                ) : key === "About" ? (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 px-4" style={{ fontFamily: 'var(--font-figtree)' }}>
                      {value.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {aboutItems.map((item, index) => (
                        <MegaMenuCard
                          key={index}
                          href={item.href}
                          icon={item.icon}
                          title={item.name}
                          description={item.description}
                          hoverColor={hoverColor}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {simpleLinks.map((link) => (
        <Link
          key={link}
          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-5 py-2 text-lg text-black transition-all duration-200 rounded-full hover:bg-white/50 whitespace-nowrap"
          style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
          onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
};

export default MegaMenu;