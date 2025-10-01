'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiArrowUpRight } from 'react-icons/hi2'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'green' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else if (onClick) {
      onClick()
    }
  }

  const variantStyles = {
    primary: 'bg-black text-white disabled:bg-gray-400',
    secondary: 'bg-white text-black disabled:bg-gray-200 hover:bg-highlighter-green hover:text-white',
    outline:
      'border-2 border-black text-black disabled:border-gray-400 disabled:text-gray-400',
    ghost: 'text-black disabled:text-gray-400',
    green: 'bg-highlighter-green text-white ',
    blue: 'bg-[#3b82f6] text-white'
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-base',
    md: 'px-5 py-2 text-lg',
    lg: 'px-8 py-3.5 text-xl'
  }

  const textVariants = {
    initial: {
      y: 0
    },
    hover: {
      y: '-150%'
    }
  }

  const textVariantsHover = {
    initial: {
      y: '150%'
    },
    hover: {
      y: 0
    }
  }

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      initial={{ borderRadius: 40 }}
      whileHover={{ borderRadius: 12 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`cursor-pointer font-medium inline-flex items-center justify-center overflow-hidden relative ${variantStyles[variant]} ${sizes[size]} ${className}`}
    >
      <div className="relative inline-flex items-center">
        <motion.span
          className="inline-flex items-center"
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
          variants={textVariants}
          transition={{ duration: 0.12, ease: 'easeInOut' }}
        >
          <span>{children}</span>
          <HiArrowUpRight className="ml-2 text-xs stroke-2" />
        </motion.span>
        <motion.span
          className="absolute inset-0 inline-flex items-center"
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
          variants={textVariantsHover}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
        >
          <span>{children}</span>
          <HiArrowUpRight className="ml-2 text-xs stroke-2" />
        </motion.span>
      </div>
    </motion.button>
  )
}

export default Button
