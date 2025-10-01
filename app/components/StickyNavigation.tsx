'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, LayoutGroup } from 'framer-motion'

interface NavItem {
  id: string
  label: string
}

interface StickyNavigationProps {
  items: NavItem[]
}

const StickyNavigation = ({ items }: StickyNavigationProps) => {
  // Set initial active section to 'key-features'
  const [activeSection, setActiveSection] = useState('key-features')
  const [isSticky, setIsSticky] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Set up intersection observer for sections
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    items.forEach(item => {
      const section = document.getElementById(item.id)
      if (section && observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [items])

  // Handle sticky positioning
  useEffect(() => {
    const checkSticky = () => {
      if (!wrapperRef.current) return

      const rect = wrapperRef.current.getBoundingClientRect()
      const shouldBeSticky = rect.top <= 20

      setIsSticky(shouldBeSticky)
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkSticky()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 120
      const sectionTop = section.offsetTop - offset
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      {/* Spacer for sticky mode - no animation */}
      <div style={{ height: isSticky ? '56px' : '0px' }} />

      <div
        className={`${
          isSticky
            ? 'fixed top-4 left-0 right-0 z-[60]'
            : 'relative'
        } transition-none`}
      >
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative bg-gray-100 border border-gray-300 rounded-full px-2 py-2">
            <LayoutGroup>
              {/* Navigation items */}
              <nav className="relative flex items-center justify-center gap-1 flex-nowrap">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative rounded-full overflow-hidden px-5 py-2.5 text-sm font-medium whitespace-nowrap"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                  >
                    {/* Indicator background */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full bg-blue-500"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                          mass: 0.8
                        }}
                      />
                    )}

                    {/* Button text */}
                    <span
                      className={`relative z-10 transition-colors duration-150 ${
                        activeSection === item.id
                          ? 'text-white'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </LayoutGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyNavigation
