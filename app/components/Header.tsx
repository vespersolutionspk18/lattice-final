'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Globe, LogIn, Check,  } from 'lucide-react'
import LogoTest from './LogoTest'
import MegaMenu from './MegaMenu'
import Button from './Button'

interface HeaderProps {
  enableScrollEffects?: boolean
}

const Header = ({ enableScrollEffects = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN US')

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

  return (
    <>
      {/* Top Bar - Only fixed on home page */}
      <div className={`${enableScrollEffects ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-[10000] bg-gray-100/70 backdrop-blur-sm border-b-2 border-gray-300 transition-all duration-500 ${
        enableScrollEffects && isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-8 opacity-100'
      }`}>
        <div className="w-full px-4">
          <div className="flex justify-end items-center h-8 text-xs">
            <div className="flex items-center space-x-4">
              <Link
                href="/partner"
                className="text-gray-600 hover:text-[#3b82f6] transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
              >
                Partner With Us
              </Link>
              <Link
                href="/customers"
                className="text-gray-600 hover:text-[#3b82f6] transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
              >
                For Customers
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-gray-600 hover:text-[#3b82f6] transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
              >
                <LogIn className="w-3 h-3" />
                <span>Login</span>
              </Link>
              <div className="relative language-dropdown">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-[#3b82f6] transition-colors"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
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
                        selectedLanguage === 'EN US' ? 'bg-[#3b82f6]/10 text-[#3b82f6]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#3b82f6]'
                      }`}
                      style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
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
                        selectedLanguage === 'ES' ? 'bg-[#3b82f6]/10 text-[#3b82f6]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#3b82f6]'
                      }`}
                      style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
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
        enableScrollEffects && isScrolled ? 'top-2 left-4 right-4' : 'top-8 left-0 right-0'
      }`}>
        <div className={`bg-white/50 backdrop-blur-xl transition-all duration-500 ${
          enableScrollEffects && isScrolled ? 'border-[2px] border-black/20 shadow-lg rounded-2xl' : 'border-b-2 border-gray-300'
        }`}>
        <div className="w-full px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-0">
              <div className="scale-[0.70] pt-2">
                <LogoTest />
              </div>
              <span className="text-2xl  tracking-tighter font-medium text-black">
                Lattice
              </span>
            </Link>

            {/* Primary Navigation - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <MegaMenu />
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="blue">Schedule a Meeting</Button>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header