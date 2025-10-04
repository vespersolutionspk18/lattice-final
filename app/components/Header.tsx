'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Globe, LogIn, Check, Menu, X } from 'lucide-react'
import LogoTest from './LogoTest'
import MegaMenu from './MegaMenu'
import Button from './Button'

interface HeaderProps {
  enableScrollEffects?: boolean
  cubeColor?: string
  buttonText?: string
  buttonColor?: string
  hoverColor?: string
}

const Header = ({ enableScrollEffects = false, cubeColor, buttonText = 'Schedule a Meeting', buttonColor, hoverColor = '#3b82f6' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN US')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!enableScrollEffects) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableScrollEffects])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.language-dropdown')) {
        setLanguageOpen(false)
      }
    }

    if (languageOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [languageOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Top Bar - Only fixed on home page, hidden on mobile */}
      <div className={`hidden md:block ${enableScrollEffects ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-[10000] bg-gray-100/70 backdrop-blur-sm border-b-2 border-gray-300 transition-all duration-500 ${
        enableScrollEffects && isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-8 opacity-100'
      }`}>
        <div className="w-full px-2 sm:px-4">
          <div className="flex justify-end items-center h-8 text-xs">
            <div className="flex items-center space-x-4">
              <Link
                href="/partner"
                className="text-gray-600 transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Partner With Us
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-gray-600 transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <LogIn className="w-3 h-3" />
                <span>Login</span>
              </Link>
              <div className="relative language-dropdown">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-1.5 text-gray-600 transition-colors"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  <Globe className="w-3 h-3" />
                  <span>{selectedLanguage}</span>
                </button>
                {languageOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[200px] z-[10001]">
                    <button
                      onClick={() => {
                        setSelectedLanguage('EN US')
                        setLanguageOpen(false)
                      }}
                      className={`w-full px-3 py-1.5 text-left text-xs transition-colors flex items-center justify-between ${
                        selectedLanguage === 'EN US' ? 'bg-gray-100' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      style={{
                        fontFamily: 'var(--font-figtree)',
                        fontWeight: 500,
                        color: selectedLanguage === 'EN US' ? hoverColor : undefined
                      }}
                      onMouseEnter={(e) => {
                        if (selectedLanguage !== 'EN US') e.currentTarget.style.color = hoverColor
                      }}
                      onMouseLeave={(e) => {
                        if (selectedLanguage !== 'EN US') e.currentTarget.style.color = ''
                      }}
                    >
                      <span>English - United States</span>
                      {selectedLanguage === 'EN US' && <Check className="w-3 h-3" />}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLanguage('ES')
                        setLanguageOpen(false)
                      }}
                      className={`w-full px-3 py-1.5 text-left text-xs transition-colors flex items-center justify-between ${
                        selectedLanguage === 'ES' ? 'bg-gray-100' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      style={{
                        fontFamily: 'var(--font-figtree)',
                        fontWeight: 500,
                        color: selectedLanguage === 'ES' ? hoverColor : undefined
                      }}
                      onMouseEnter={(e) => {
                        if (selectedLanguage !== 'ES') e.currentTarget.style.color = hoverColor
                      }}
                      onMouseLeave={(e) => {
                        if (selectedLanguage !== 'ES') e.currentTarget.style.color = ''
                      }}
                    >
                      <span>Español - España</span>
                      {selectedLanguage === 'ES' && <Check className="w-3 h-3" />}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Fixed on home page, absolute on others */}
      <header className={`${enableScrollEffects ? 'fixed' : 'absolute'} z-[9999] transition-all duration-500 ${
        enableScrollEffects && isScrolled ? 'top-2 left-2 right-2 md:left-4 md:right-4' : 'top-0 md:top-8 left-0 right-0'
      }`}>
        <div className={`bg-white/50 backdrop-blur-xl transition-all duration-500 ${
          enableScrollEffects && isScrolled ? 'border-[2px] border-black/20 shadow-lg rounded-2xl' : 'border-b-2 border-gray-300'
        }`}>
        <div className="w-full px-4 sm:px-6 md:px-10">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-0">
              <div className="scale-[0.60] sm:scale-[0.70] pt-2">
                <LogoTest cubeColor={cubeColor} />
              </div>
              <span className="text-xl sm:text-2xl tracking-tighter font-medium text-black">
                Lattice
              </span>
            </Link>

            {/* Primary Navigation - Centered - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <MegaMenu hoverColor={hoverColor} />
            </div>

            {/* Right Side - CTA Button (Desktop) and Hamburger (Mobile) */}
            <div className="flex items-center gap-3">
              {/* CTA Button - Hidden on mobile */}
              <div className="hidden md:block">
                <Button variant="blue" customBackgroundColor={buttonColor}>{buttonText}</Button>
              </div>

              {/* Hamburger Menu Button - Mobile Only */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-black hover:bg-white/50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-semibold text-black">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col gap-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
              >
                Home
              </Link>

              {/* Services Section */}
              <div className="mt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Services
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <Link
                    href="/services/design-and-plans"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Design & Plans
                  </Link>
                  <Link
                    href="/services/3d-rendering"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    3D Rendering
                  </Link>
                  <Link
                    href="/services/crm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    CRM for Contractors
                  </Link>
                  <Link
                    href="/services/ai-designer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    AI Designer
                    <span className="px-2 py-0.5 text-xs font-medium text-white rounded-full" style={{ backgroundColor: hoverColor }}>
                      New
                    </span>
                  </Link>
                  <Link
                    href="/services/digital-showroom"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Digital Showroom
                  </Link>
                  <Link
                    href="/services/web-design-seo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Web Design & SEO
                  </Link>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-4">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  About
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about/our-mission"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="/comparison"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Comparison
                  </Link>
                </div>
              </div>

              {/* Other Pages */}
              <div className="mt-4">
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Pricing
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Contact
                </Link>
              </div>

              {/* Top Bar Links for Mobile */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/partner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base text-gray-600 hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Partner With Us
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </div>

              {/* Language Selector Mobile */}
              <div className="mt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Language
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <button
                    onClick={() => {
                      setSelectedLanguage('EN US')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-4 py-2.5 text-base text-left hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between ${
                      selectedLanguage === 'EN US' ? 'bg-gray-100' : ''
                    }`}
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    <span>English - United States</span>
                    {selectedLanguage === 'EN US' && <Check className="w-4 h-4" style={{ color: hoverColor }} />}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage('ES')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-4 py-2.5 text-base text-left hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between ${
                      selectedLanguage === 'ES' ? 'bg-gray-100' : ''
                    }`}
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    <span>Español - España</span>
                    {selectedLanguage === 'ES' && <Check className="w-4 h-4" style={{ color: hoverColor }} />}
                  </button>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer - CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="blue"
              customBackgroundColor={buttonColor}
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header